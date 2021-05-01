import React from "react";
import { Card } from "react-bootstrap";

const GalleryImg = ({ imgurl, key }) => {
  return (
    <Card>
      {/* <img src={imgurl} alt="" /> */}
      <Card.Img src={imgurl} fluid />
    </Card>
  );
};

export default GalleryImg;
