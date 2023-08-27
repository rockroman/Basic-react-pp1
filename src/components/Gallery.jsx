import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import surferImg from "../images/gallery-img1-desktop-ting-tse-wang-unsplash.webp";

const unsplashApiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;

// const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${count}&query=surfing`;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const count = 6;
  const randomPage = () => {
    const min = 1;
    const max = 55;
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(result);
    return result;
  };

  const fetchImages = async (page) => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=${page}&per_page=${count}&query=surfing`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Client-ID ${unsplashApiKey}`,
          },
        }
      );

      console.log(data);
      console.log(data.results);
      setImages(data.results);

      console.log(images);
    } catch (error) {}
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  return (
    <div id="gallery">
      <div id="gallery-control">
        <h3 className="section-title">GALLERY</h3>
        <div>
          <button
            className="gallery-btn"
            onClick={() => fetchImages(randomPage())}
          >
            More Images
          </button>
        </div>
      </div>

      {images.map((image) => {
        const { id, alt_description, urls } = image;
        return (
          <img
            key={id}
            src={urls.regular}
            className="item"
            alt=""
            style={{ height: "70vh", marginTop: "5px" }}
          />
        );
      })}
      <img
        className="item"
        id="image-1"
        loading="lazy"
        src={surferImg}
        alt="crazy surfer"
        width="639"
        height="511"
        style={{ marginTop: "5px" }}
      />
    </div>
  );
};
export default Gallery;
