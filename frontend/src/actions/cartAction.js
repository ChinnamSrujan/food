import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_CART,
  REMOVE_ITEM_CART,
  UPDATE_CART_ITEM,
} from "../constants/cartConstant";
export const fetchCartItems = (alert) => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/eats/cart/get-cart");
    dispatch({
      type: FETCH_CART,
      payload: response.data.data,
    });
  } catch (error) {
    console.error("Fetch cart error: ", error);
    if (alert) {
      alert.info("Cart is hungry");
    }
  }
};
// ADD to Cart
export const addItemToCart =
  (foodItemId, restaurant, quantity, alert) => async (dispatch, getState) => {
    try {
      const { user } = getState().auth; // return the current store tree
      const response = await axios.post("/api/v1/eats/cart/add-to-cart", {
        userId: user._id,
        foodItemId,
        restaurantId: restaurant,
        quantity,
      });

      alert.success("Item added to cart", response.data.cart);
      dispatch({
        type: ADD_TO_CART,
        payload: response.data.cart,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

// Update cart item quantity
export const updateCartQuantity =
  (foodItemId, quantity, alert) => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      if (typeof foodItemId === "object") {
        foodItemId = foodItemId._id;
      }

      const response = await axios.post("/api/v1/eats/cart/update-cart-item", {
        userId: user._id,
        foodItemId: foodItemId,
        quantity,
      });

      dispatch({
        type: UPDATE_CART_ITEM,
        payload: response.data.cart,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

// Remove items from cart

export const removeItemFromCart =
  (foodItemId) => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      if (typeof foodItemId === "object") {
        foodItemId = foodItemId._id;
      }
      const response = await axios.delete(
        "/api/v1/eats/cart/delete-cart-item",
        {
          data: { userId: user._id, foodItemId },
        }
      );
      dispatch({
        type: REMOVE_ITEM_CART,
        payload: response.data,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };
