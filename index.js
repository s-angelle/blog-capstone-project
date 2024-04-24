
// Imports
import express from "express";
import bodyParser from "body-parser";


// Global variables
const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// All Blogs
app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
})

// Selected Blog
app.get("/blog/:id", (req, res) => {
    res.render("blog.ejs");
});

// About page 
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Create blog 
app.post("/submit", (req, res) => {
    res.render("index.ejs");
});

// Update blog 
app.patch("/blog/edit", (req, res) => {
    res.render("edit.ejs");
});

// Delete blog
app.delete("/delete/:id", (req, res) => {
    res.redirect("/");
});

// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})