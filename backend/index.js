require("dotenv").config();

const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Thanal Profit Tracker API");
});
app.get("/add-product", (req, res) => {
    res.render("productForm");
});
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});