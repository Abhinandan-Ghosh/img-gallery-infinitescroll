import GalleryImg from "./components/GalleryImg";
import NavbarComp from "./components/NavbarComp";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardColumns } from "react-bootstrap";
import Loader from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [images, setImages] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    fetchNextImgs();
  }, []);

  const fetchNextImgs = () => {
    axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((res) => setImages([...images, ...res.data]));
    setPage((page += 1));
  };

  return (
    <div className="App">
      <NavbarComp />
      <Header />
      <CardColumns>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchNextImgs}
          hasMore={true}
          loader={<Loader />}
        >
          {images.map((image) => (
            <GalleryImg imgurl={image.download_url} key={image.id} />
          ))}
        </InfiniteScroll>
      </CardColumns>
    </div>
  );
}

export default App;
