import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";
import SearchBar from "./SearchBar";

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]); // Initialize with an empty array
  //const [showDeleted, setShowDeleted] = useState(false); //used if want to show deleted blogs as a toggle
  const showDeleted = false; //used if want to show deleted blogs as a toggle
  const [page, setPage] = useState(1); //pagination

  const navigate = useNavigate(); //to disable the view button when the blog is deleted

  //get all blogs that are not deleted_at
  const getBlogs = async (page) => {
    try {
      const response = await fetch(`http://localhost:5000/blogs?page=${page}`);
      const jsonData = await response.json();
      setBlogs(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBlogs(page);
  }, [page]);

  //filter and sort blogs
  const filteredBlogs = showDeleted
    ? blogs
    : blogs.sort((a, b) => {
        // If both blogs are published and not deleted, sort by published_at
        if (
          a.published_at !== null &&
          a.deleted_at === null &&
          b.published_at !== null &&
          b.deleted_at === null
        ) {
          return new Date(b.published_at) - new Date(a.published_at);
        }
        // If one blog is published and not deleted and the other is not, the published and not deleted one comes first
        else if (
          (a.published_at !== null && a.deleted_at === null) ||
          (b.published_at !== null && b.deleted_at === null)
        ) {
          return a.published_at !== null && a.deleted_at === null ? -1 : 1;
        }
        // If neither blog is published and not deleted, sort by created_at
        else {
          return new Date(b.created_at) - new Date(a.created_at);
        }
      });

  //get status
  const getBlogStatus = (blog) => {
    if (blog.published_at === null && blog.deleted_at !== null) {
      return "Deleted, never published";
    } else if (blog.published_at === null) {
      return "Unpublished";
    } else if (blog.deleted_at !== null) {
      return "Deleted";
    } else {
      return "Published";
    }
  };

  return (
    <Fragment>
      <SearchBar blog={blogs} />
      {/* <label>
        <input
          type="checkbox"
          checked={showDeleted}
          onChange={(e) => setShowDeleted(e.target.checked)}
        />
        Show deleted/unpublished blogs
      </label> */}

      <div className="blog-container">
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <div key={blog.blog_id} className="blog-item">
              <h5>{blog.blog_title}</h5>
              <img
                src={blog.blog_image}
                alt={blog.blog_title}
                className="blog-image"
              />
              <p className="blog-status">{getBlogStatus(blog)}</p>
              <div className="button-container">
                <button
                  onClick={() => {
                    if (blog.deleted_at === null) {
                      navigate(`/blogs/${blog.blog_slug}`);
                    }
                  }}
                  disabled={blog.deleted_at !== null}
                  className="btn btn-primary"
                >
                  View
                </button>
                <DeleteBlog blog={blog} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-buttons">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </Fragment>
  );
};

export default ListBlogs;
