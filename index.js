
// Imports
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import {blogPosts, sortBlogPosts, formatDate} from "./data.js";


// Global variables
const app = express();
const port = 3000;
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
    sortBlogPosts();
    res.render("home.ejs", {bPosts: blogPosts});
});

// All Blogs
app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
})

// Show Blog
app.get("/blogs/:id", (req, res) => {
    const index = blogPosts.findIndex((x) => x.id == req.params.id);
    blogPosts[index].views++;
    res.render("blog.ejs", {
      bPost: blogPosts[index],
    });
    sortBlogPosts();
});

// About page 
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Create blog 
app.post("/blogs", upload.single("image"),  (req, res) => {
    blogPosts.push({
        id: blogPosts.length,
        title: req.body.title,
        date: formatDate(new Date()),
        views: 0,
        image: "data:image/*;base64," + req.file.buffer.toString("base64"),
        description: req.body.description,
    })
    sortBlogPosts();
    res.redirect("/");
});

// Edit blog
app.put("/blogs/:id/edit",(req, res) => {
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