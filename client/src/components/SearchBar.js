import React, { useState } from "react";
import axios from "axios"; //used to make requests to the server in search
import { useNavigate } from "react-router-dom"; //used for link

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); //to navigate to the blog

  //search for blogs by title
  const handleInputChange = async (event) => {
    setInput(event.target.value);
    if (event.target.value.length > 0) {
      const response = await axios.get(
        `http://localhost:5000/search?q=${event.target.value}`
      );
      setResults(response.data);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      {/* SEARCH INPUT */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            style={{
              width: "550px",
              height: "40px",
              borderRadius: "20px",
              padding: "10px",
              paddingLeft: "20px",
              fontSize: "16px",
              backgroundColor: "#f0f0f0",
              border: "2px solid rgb(82, 133, 196)",
              outline: "none",
              color: "#242424",
            }}
          />
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#242424",
              border: "2px solid rgb(82, 133, 196)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img
              src="/search.svg"
              alt="Search"
              style={{ height: "20px", cursor: "pointer" }}
              onClick={() => {
                setInput("");
                setResults([]);
              }}
            />
          </div>
        </div>
        {/* POP DOWN RESULTS */}
        {results.length > 0 && (
          <>
            <div
              style={{
                marginTop: "10px",
                marginRight: "50px",
                width: "550px",
                backgroundColor: "#f0f0f0",
                border: "2px solid rgb(82, 133, 196)",
                borderRadius: "20px",
                color: "#242424",
                paddingLeft: "10px",
              }}
            >
              {results.map((result) => (
                <div
                  key={result.blog_id}
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ marginTop: "5px" }}>{result.blog_title}</span>
                  <button
                    onClick={() => {
                      if (result.deleted_at === null) {
                        navigate(`/blogs/${result.blog_slug}`);
                      }
                    }}
                    disabled={result.deleted_at !== null}
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
