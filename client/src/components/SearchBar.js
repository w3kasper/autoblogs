import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

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
  //console.log(results);
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      {results.map((result) => (
        <div key={result.blog_id}>
          <h2>{result.blog_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
