const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

// Login page
app.get("/login", (req, res) => {
    res.render("login", { error: "" });
});

// Login
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Simple username and password
    if (username === "admin" && password === "123") {

        // Maintain login state
        req.session.loggedIn = true;
        req.session.username = username;

        // Create cookie
        res.cookie("lastVisit", new Date().toLocaleString());

        res.redirect("/dashboard");

    } else {
        res.render("login", {
            error: "Invalid username or password"
        });
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {

    // Check session
    if (!req.session.loggedIn) {
        return res.redirect("/login");
    }

    // Read cookie
    const lastVisit = req.cookies.lastVisit || "First visit";

    res.render("dashboard", {
        username: req.session.username,
        lastVisit: lastVisit
    });
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy();

    res.clearCookie("connect.sid");

    res.redirect("/login");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});