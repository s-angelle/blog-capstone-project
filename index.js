
// Imports
import express from "express";


// Global variables
const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));

// Request Handlers
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("create.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    res.render("create.ejs");
});

app.put("/create", (req, res) => {
    res.render("create.ejs");
});

app.patch("/create", (req, res) => {
    res.render("create.ejs");
});

app.delete("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})