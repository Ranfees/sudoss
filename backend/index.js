require("dotenv").config();
const methodOverride = require("method-override");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

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

app.get("/delete-product", (req, res) => {
    res.render("deleteProduct");
});

app.use("/api/products", productRoutes);
app.get("/update-product", (req, res) => {
    res.render("updateProduct");
});
app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});