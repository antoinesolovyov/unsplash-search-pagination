import React, { useState, useEffect } from "react";
import Unsplash from "unsplash-js";

import "./App.css";

import Header from "../../components/header/Header.jsx";
import Search from "../../components/search/Search.jsx";
import Main from "../../components/main/Main.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import Footer from "../../components/footer/Footer.jsx";

const unsplash = new Unsplash({
  accessKey: "0093f6e045769ba84d9220992e98a06a08a901595f0dafe044fd239c099086a3"
});

const App = () => {
  const [query, setQuery] = useState("uk");
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);

  const request = (query, page) => {
    unsplash.search
      .photos(query, page, perPage)
      .then(response => response.json())
      .then(json => {
        const { total, total_pages, results } = json;
        setTotal(total);
        setTotalPages(total_pages);
        setPhotos(results);
        console.log(json);
      });
  };

  useEffect(() => {
    request(query, page);
  }, []);

  useEffect(() => {
    console.log(query, page);
  }, [query, page]);

  const onPhotosSearch = query => {
    setQuery(query);
    setPage(1);
    request(query, 1);
  };

  const onPaginationClick = liText => {
    if (liText === "←" && page > 1) {
      request(query, page - 1);
      setPage(page - 1);
    } else if (liText === "→" && page < totalPages) {
      request(query, page + 1);
      setPage(page + 1);
    } else if (Number.parseInt(liText)) {
      request(query, liText);
      setPage(+liText);
    }
  };

  return (
    <>
      <Header>
        <Search onPhotosSearch={onPhotosSearch} query={query} />
      </Header>
      <Main photos={photos} unsplash={unsplash} />
      <Footer>
        {!!total && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPaginationClick={onPaginationClick}
          />
        )}
      </Footer>
    </>
  );
};
export default App;
