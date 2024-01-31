import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import InputBlog from "./components/InputBlog";
import ListBlogs from "./components/ListBlogs";
import SingleBlogPage from "./components/SingleBlogPage";

function App() {
  return (
    <Router>
      <div>
        <div className="nav-container">
          <nav className="navbar">
            <Link to="/">view blogs</Link>
            <img src="/mainlogo.svg" alt="Main Logo" />
            <Link to="/create">create blog</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<ListBlogs />} />{" "}
          <Route path="/create" element={<InputBlog />} />
          <Route path="/blogs/:slug" element={<SingleBlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
