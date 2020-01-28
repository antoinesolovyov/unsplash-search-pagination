import React, { useState } from "react";

import SearchIcon from "./icons/search.svg";
import CameraIcon from "./icons/camera.svg";

import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState("");

  const inputOnChange = event => {
    setQuery(event.target.value);
  };

  const searchStart = event => {
    if (event.key == "Enter") {
      props.onPhotosSearch(query);
    }
  };

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        value={query}
        onChange={inputOnChange}
        onKeyPress={searchStart}
        placeholder={props.query}
      />
    </div>
  );
}
