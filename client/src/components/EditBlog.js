//EDIT BLOG COMPONENT - NOT USED

import React, { Fragment, useState } from "react";

const EditBlog = ({ blog }) => {
  //console.log(blog);
  const [blog_title, setBlogTitle] = useState(blog.blog_title);
  const [blog_slug, setBlogSlug] = useState(blog.blog_slug);
  const [blog_content, setBlogContent] = useState(blog.blog_content);
  const [blog_image, setBlogImage] = useState(blog.blog_image);
  const [published_at, setPublishedAt] = useState(blog.published_at);
  const [deleted_at, setDeletedAt] = useState(blog.deleted_at);

  //edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = {
        blog_title,
        blog_slug,
        blog_content,
        blog_image,
        published_at,
        deleted_at,
      };
      const response = await fetch(
        `http://localhost:5000/blogs/${blog.blog_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/"; // Refresh the page after editing
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* edit button */}

      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${blog.blog_id}`}
      >
        Edit
      </button>
      {/* The Modal */}
      <div
        className="modal"
        id={`id${blog.blog_id}`}
        onClick={() => setBlogTitle(blog.blog_title)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Blog</h4>
              {/* the x button */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setBlogTitle(blog.blog_title)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={blog_title}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => {
                  updateDescription(e);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setBlogTitle(blog.blog_title)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBlog;
