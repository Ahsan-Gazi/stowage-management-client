import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Banner.css';
 import banner1 from '../../../images/banner/banner1.jpg';
 import banner2 from '../../../images/banner/banner2.jpg';
 import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        className="bannerItem"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
              Inventory(Stowage) Management
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              Largest inventory service provider
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
             Stowage Service Management
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              Biggest service provider in Asia
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h4 className=" fw-bold text-dark bg-light bg-opacity-75">
              Customer Service
            </h4>
            <p className="fw-bold text-dark bg-light bg-opacity-75">
              {' '}
              We provide 24 hour customer service. Customer believe getting our best services.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
