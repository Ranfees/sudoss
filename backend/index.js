require("dotenv").config();
const methodOverride = require("method-override");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("Thanal Profit Tracker API");
});
app.get("/add-product", (req, res) => {
    res.render("productForm");
});
app.use("/api/products", productRoutes);
app.get("/update-product", (req, res) => {
    res.render("updateProduct");
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});