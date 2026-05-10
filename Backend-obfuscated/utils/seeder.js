const dotenv = require("dotenv");
const path = require("path");

// Load env vars from correct path
dotenv.config({ path: path.join(__dirname, "../config/config.env") });

const connectDatabase = require("../config/database");
const FoodItem = require("../models/foodItem");
const Restaurant = require("../models/restaurant");
const Menu = require("../models/menu");

// JSON data files are in the Database/ folder at project root
const fooditems = require("../../Database/fooditems.json");
const restaurants = require("../../Database/restaurants.json");
const menus = require("../../Database/menus.json");

// Recursively convert MongoDB Extended JSON to plain JS values
// Handles: { $oid }, { $date }, { $numberInt }, { $numberLong }, { $numberDouble }
const convertExtendedJSON = (value) => {
  if (Array.isArray(value)) {
    return value.map(convertExtendedJSON);
  }
  if (value !== null && typeof value === "object") {
    if (value.$oid !== undefined) return value.$oid;
    if (value.$date !== undefined) return new Date(value.$date);
    if (value.$numberInt !== undefined) return parseInt(value.$numberInt);
    if (value.$numberLong !== undefined) return parseInt(value.$numberLong);
    if (value.$numberDouble !== undefined) return parseFloat(value.$numberDouble);

    // Recurse into plain objects
    const result = {};
    for (const key of Object.keys(value)) {
      result[key] = convertExtendedJSON(value[key]);
    }
    return result;
  }
  return value;
};

const normalize = (arr) => arr.map(convertExtendedJSON);

const seedDatabase = async () => {
  try {
    await connectDatabase();

    // Small delay to ensure connection is ready
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Clearing existing data...");
    await FoodItem.deleteMany();
    await Restaurant.deleteMany();
    await Menu.deleteMany();
    console.log("Existing data cleared.");

    console.log("Seeding Restaurants...");
    await Restaurant.insertMany(normalize(restaurants));
    console.log(`${restaurants.length} restaurants inserted.`);

    console.log("Seeding FoodItems...");
    await FoodItem.insertMany(normalize(fooditems));
    console.log(`${fooditems.length} food items inserted.`);

    console.log("Seeding Menus...");
    await Menu.insertMany(normalize(menus));
    console.log(`${menus.length} menus inserted.`);

    console.log("\n✅ Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
};

seedDatabase();
