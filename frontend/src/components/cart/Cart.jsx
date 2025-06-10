import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartAction";
import { payment } from "../../actions/orderAction";
/*
let fakeCartItems = [
  {
    foodItem: {
      images: [
        {
          public_id: "kaala_channa_chat image",
          url: "https://b.zmtcdn.com/data/dish_photos/94a/c01f4e8fcce05666b8a28eadd627394a.jpg?fit=around|130:130&crop=130:130;*,*",
          _id: "1",
        },
      ],
      name: "Kaala Channa Chat",
      price: 120,
      _id: "123",
    },
    quantity: 1,
    _id: "cart123",
  },
  {
    foodItem: {
      images: [
        {
          public_id: "Pani puri image",
          url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/11/b3734c76-eba3-4509-86ed-aa774e6336e4_e7abf189-300f-4cc7-bc9b-fc42a24c8178.png_compressed",
          _id: "2",
        },
      ],
      name: "Pani puri",
      price: 50,
      _id: "456",
    },
    quantity: 1,
    _id: "cart456",
  },
];
*/
const Cart = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { cartItems, restaurant } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems(alert));
  }, [dispatch, alert]);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id, alert));
  };
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) {
      alert.error("Exceeded stock limit");
    }
    dispatch(updateCartQuantity(id, newQty, alert));
  };
  const decreaseQty = (id, quantity) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCartQuantity(id, newQty, alert));
    } else {
      alert.error("Minimum Quantity reached");
    }
  };

  const checkoutHandler = () => {
    dispatch(payment(cartItems, restaurant));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <h3 className="mt-5">
            Restaurant: <b>{restaurant.name}</b>
          </h3>

          <div className="row d-flex justify-content-between cartt">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <div className="cart-item" key={item._id}>
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      {
                        <img
                          src={item.foodItem.images[0].url}
                          alt="items"
                          height="90"
                          width="115"
                        />
                      }
                    </div>
                    <div className="col-5 col-lg-3">{item.foodItem.name}</div>
                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                      <p id="card_item_price">
                        <LiaRupeeSignSolid />
                        {item.foodItem.price}
                      </p>
                    </div>
                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <div className="stockCounter d-inline">
                        <span
                          className="btn btn-danger minus"
                          onClick={() =>
                            decreaseQty(item.foodItem, item.quantity)
                          }
                        >
                          -
                        </span>
                        <input
                          type="number"
                          className="form-control count d-inline"
                          value={item.quantity}
                          readOnly
                        />
                        <span
                          className="btn btn-primary plus"
                          onClick={() =>
                            increaseQty(
                              item.foodItem,
                              item.quantity,
                              item.stock
                            )
                          }
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                      <i
                        id="delete_cart_item"
                        className="fa fa-trash btn btn-danger"
                        onClick={() => removeCartItemHandler(item.foodItem)}
                      ></i>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}
                    (Units)
                  </span>
                </p>
                <p>
                  Total:
                  <span className="order-summary-values">
                    <LiaRupeeSignSolid />
                    {cartItems
                      .reduce(
                        (acc, item) =>
                          acc + item.quantity * item.foodItem.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
