import React, { Fragment } from "react";

const DeleteBlog = ({ blog }) => {
  const blog_title = blog.blog_title;

  const softDelete = () => {
    fetch(`http://localhost:5000/blogs/${blog.blog_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    window.location.reload();
  };

  //HARD DELETE - NOT USED
  // const hardDelete = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/blogs/${blog.blog_id}`,
  //       {
  //         method: "DELETE",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     console.log(response);
  //     if (response.ok) {
  //       window.location = "/"; // Refresh the page after deleting
  //     } else {
  //       console.error("Failed to delete blog:", response.statusText);
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target={`#id${blog.blog_id}`}
        disabled={blog.deleted_at !== null}
      >
        Delete
      </button>

      <div className="modal" id={`id${blog.blog_id}`}>
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#282c34",
              border: "2px solid rgb(82, 133, 196)",
              borderRadius: "10px",
            }}
          >
            <div className="modal-header">
              <h4 className="modal-title">Delete {blog_title} </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                style={{ color: "#fff" }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              Are you sure you want to delete {blog_title} ?
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => {
                  softDelete(e);
                }}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
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

export default DeleteBlog;
