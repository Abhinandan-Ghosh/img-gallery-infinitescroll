import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryImg from "./GalleryImg";

import { CardColumns } from "react-bootstrap";
import Loader from "./Loader";

const Gallery = (images, fetchNextImgs) => {
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchNextImgs}
      hasMore={true}
      loader={<Loader />}
    >
      <CardColumns>
        {images.map((image) => (
          <GalleryImg imgurl={image.download_url} key={image.id} />
        ))}
      </CardColumns>
    </InfiniteScroll>
  );
};

export default Gallery;
