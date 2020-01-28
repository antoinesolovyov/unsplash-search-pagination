import React from "react";

import "./Main.css";

export default function Main(props) {
  const getPhotos = () => {
    return props.photos.map(photo => (
      <img
        key={photo.id}
        id={photo.id}
        src={photo.urls.small}
        name={photo.urls.raw}
      />
    ));
  };

  const photoOnClick = event => {
    if (!event.target.className) {
      event.target.className = "active";
      const tmp = event.target.src;
      event.target.src = event.target.name;
      event.target.name = tmp;
    } else {
      event.target.className = "";
      const tmp = event.target.src;
      event.target.src = event.target.name;
      event.target.name = tmp;
    }
  };

  return <main onClick={photoOnClick}>{getPhotos()}</main>;
}
