import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputBlog = () => {
  const [title, setTitle] = useState("");
  //const [slug, setSlug] = useState("insert slug");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [publishedAt, setPublishedAt] = useState(null);

  //cancel function
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/"); // Navigate back to the main page
  };

  //handle save function
  const handleSave = () => {
    setPublishedAt(null); // Set the publishedAt state to null
  };

  //handle save and publish function
  const handleSaveAndPublish = () => {
    setPublishedAt(new Date().toISOString()); // Set the publishedAt state to the current date
  };

  //create function
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const slug = title.toLowerCase().split(" ").join("-"); // Convert title to slug
    try {
      const body = {
        blog_title: title,
        blog_slug: slug,
        blog_content: content,
        blog_image: image,
        published_at: publishedAt ? new Date(publishedAt).toISOString() : null, // If published is an empty string, set published_at to null
      };
      console.log(body);
      const response = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const responseData = await response.json(); // or response.text() if the response is not JSON
      console.log(responseData);
      window.location = "/"; // Redirect to the home page after creating a blog
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h2 className="text-center mt-3">Create Blog</h2>
      <div style={{ width: "800px", margin: "0 auto" }}>
        <form className="m-5" onSubmit={onSubmitForm}>
          <label className="" htmlFor="title">
            Title - 20 Char Max
          </label>
          <input
            type="text"
            className="form-control mb-3 w-50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={20}
            placeholder="20 Char Max"
            style={{
              backgroundColor: "#f0f0f0",
              border: "2px solid rgb(82, 133, 196)",
            }}
          />
          <label htmlFor="title">Set HTML Content</label>
          <textarea
            className="form-control mb-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            placeholder="HTML Content Here..."
            style={{
              backgroundColor: "#f0f0f0",
              border: "2px solid rgb(82, 133, 196)",
            }}
          />
          <label htmlFor="title">
            Set Image URL - ie. https://i.imgur.com/8WjcthU.jpeg
          </label>
          <input
            type="text"
            className="form-control mb-3"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            style={{
              backgroundColor: "#f0f0f0",
              border: "2px solid rgb(82, 133, 196)",
            }}
          />

          <div className="d-flex justify-content-center mt-4 gap-2">
            <button className="btn btn-warning mr-4" onClick={handleSave}>
              Save Blog
            </button>
            <button className="btn btn-success" onClick={handleSaveAndPublish}>
              Save and Publish Blog
            </button>
            <button className="btn btn-danger ml-4" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default InputBlog;
