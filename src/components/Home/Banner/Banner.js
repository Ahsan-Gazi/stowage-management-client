
import React, { useState } from "react";
import './Banner.css'
// import { Carousel } from "react-bootstrap";

import banner4 from "../../../images/banner/banner1.jpg";
import banner6 from "../../../images/banner/banner2.jpg";
import banner5 from "../../../images/banner/banner3.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="bannerItem"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="First slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner6} alt="Second slide" />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner5} alt="Third slide" />

        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;