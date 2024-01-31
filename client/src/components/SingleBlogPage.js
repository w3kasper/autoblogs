import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./SingleBlogPage.css"; // Import the CSS file
import DeleteBlog from "./DeleteBlog";

const SingleBlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate(); //to disable the view button when the blog is deleted

  useEffect(() => {
    // Fetch the blog data
    fetch(`http://localhost:5000/blogs/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);

        // Fetch the related blogs
        fetch(`http://localhost:5000/blogs?exclude=${data.blog_id}`)
          .then((response) => response.json())
          .then((data) => {
            const filteredBlogs = data.filter(
              (blog) => blog.published_at !== null && blog.deleted_at === null
            );
            const sortedBlogs = filteredBlogs.sort(
              (a, b) => new Date(b.published_at) - new Date(a.published_at)
            );
            setRelatedBlogs(sortedBlogs.slice(0, 4));
          });
      });
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

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
    <div className="blog-container">
      <div>
        <h2 className="blog-title">{blog.blog_title}</h2>
        <p className="blog-date">
          {blog.published_at
            ? new Date(blog.published_at).toLocaleDateString()
            : "Unpublished"}
        </p>
        <img
          className="sp-blog-image"
          src={blog.blog_image}
          alt={blog.blog_title}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.blog_content }}
        />
      </div>
      <h2>Related Blogs</h2>
      <ul>
        {/* {relatedBlogs.map((relatedBlog) => (
          <li key={relatedBlog.blog_id}>
            <Link to={`/blogs/${relatedBlog.blog_slug}`}>
              <img src={relatedBlog.blog_image} alt={relatedBlog.blog_title} />
              {relatedBlog.blog_title}
            </Link>
          </li>
        ))} */}
      </ul>
      <div className="blog-container">
        <div className="blog-grid">
          {relatedBlogs.slice(0, 3).map((relatedBlog) => (
            <div key={relatedBlog.blog_id} className="blog-item">
              <h5>{relatedBlog.blog_title}</h5>
              <img
                src={relatedBlog.blog_image}
                alt={relatedBlog.blog_title}
                className="blog-image"
              />

              <p>{getBlogStatus(relatedBlog)}</p>
              <div className="button-container">
                <button
                  onClick={() => {
                    if (relatedBlog.deleted_at === null) {
                      navigate(`/blogs/${relatedBlog.blog_slug}`);
                    }
                  }}
                  disabled={relatedBlog.deleted_at !== null}
                  className="btn btn-primary"
                >
                  View
                </button>
                <DeleteBlog blog={relatedBlog} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
