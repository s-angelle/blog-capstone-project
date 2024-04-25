
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
    res.render("home.ejs");
});

// All Blogs
app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
})

// Show Blog
app.get("/blogs/:id", (req, res) => {
    res.render("blog.ejs");
});

// About page 
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Create blog 
app.post("/blogs", (req, res) => {
    res.redirect("/");
});

// Edit blog
app.put("/blogs/:id/edit", (req, res) => {
    res.render("edit.ejs");
})

// Delete blog
app.delete("/blogs/:id", (req, res) => {
    res.redirect("/");
});

// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})