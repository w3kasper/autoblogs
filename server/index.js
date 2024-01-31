const express = require("express"); // Import express
const app = express(); // Create an express app
const cors = require("cors"); // Import cors
const pool = require("./db"); // Import the pool from db.js

//MIDDLEWARE//
app.use(cors()); // Use cors - cors is a package that allows for cross origin resource sharing
app.use(express.json()); // Use express.json - this allows us to parse JSON data from the client

//ROUTES//

//create a blog
app.post("/blogs", async (req, res) => {
  try {
    const { blog_title, blog_slug, blog_content, blog_image, published_at } =
      req.body;
    const newBlog = await pool.query(
      "INSERT INTO blogs (blog_title, blog_slug, blog_content, blog_image, published_at) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [blog_title, blog_slug, blog_content, blog_image, published_at]
    );
    res.json(newBlog.rows[0]);
    //console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

// //get all the blogs
// app.get("/blogs", async (req, res) => {
//   try {
//     const allBlogs = await pool.query("SELECT * FROM blogs");
//     res.json(allBlogs.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//get all the blogs that are not deleted
app.get("/blogs", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = 6;
    const offset = (page - 1) * limit;

    const allBlogs = await pool.query(
      "SELECT * FROM blogs WHERE deleted_at IS NULL ORDER BY published_at DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    res.json(allBlogs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a blog by id
// app.get("/blogs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const blog = await pool.query("SELECT * FROM blogs WHERE blog_id = $1", [
//       id,
//     ]);
//     res.json(blog.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//get by searching
app.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.q;
    //console.log(searchQuery);
    const results = await pool.query(
      "SELECT * FROM blogs WHERE blog_title ILIKE $1 AND deleted_at IS NULL",
      [`%${searchQuery}%`]
    );
    res.json(results.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a blog by slug
app.get("/blogs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await pool.query("SELECT * FROM blogs WHERE blog_slug = $1", [
      slug,
    ]);
    res.json(blog.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a blog
app.put("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { blog_title, blog_slug, blog_content, blog_image, published_at } =
      req.body;
    const updateBlog = await pool.query(
      "UPDATE blogs SET blog_title = $1, blog_slug = $2, blog_content = $3, blog_image = $4, published_at = $5, updated_at = CURRENT_TIMESTAMP WHERE blog_id = $6",
      [blog_title, blog_slug, blog_content, blog_image, published_at, id]
    );
    res.json("Blog was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// //hard delete a blog
// app.delete("/blogs/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteBlog = await pool.query(
//       "DELETE FROM blogs WHERE blog_id = $1",
//       [id]
//     );
//     res.json("Blog was deleted");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// Soft delete a blog
app.delete("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await pool.query(
      "UPDATE blogs SET deleted_at = CURRENT_TIMESTAMP WHERE blog_id = $1",
      [id]
    );
    res.json("Blog was soft deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
}); // Server listens on port 5000
