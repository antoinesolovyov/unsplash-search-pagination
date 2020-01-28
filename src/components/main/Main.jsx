import React from "react";

import "./Main.css";

export default function Main(props) {
  const getPhotos = () => {
    return props.photos.map(photo => (
      <img key={photo.id} id={photo.id} src={photo.urls.small} />
    ));
  };

  const photoOnClick = event => {
    if (!event.target.className) {
      event.target.className = "active";
    } else {
      event.target.className = "";
    }
  };

  return <main onClick={photoOnClick}>{getPhotos()}</main>;
}
