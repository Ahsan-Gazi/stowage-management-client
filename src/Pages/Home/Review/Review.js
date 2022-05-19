import React from 'react';
import './Review.css';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import review1 from '../../../images/review/review1.jpg';
import review2 from '../../../images/review/review2.jpg';
import review3 from '../../../images/review/review3.jpeg';

const Review = () => {
  return (
    <div>
      <div className="review-container">
        <h3 style={{ color: '#112B3C' }} className="text-center fw-bold">
          Customer's Review(s)
        </h3>
        <div>
          {/* this is review card container */}
          <div className="card-container">
            {/* here is 3 card */}
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review1} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Susmita Shimu</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </p>
                <p>
                  <small>
                    Excellent product service
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review2} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Khurshid Alom</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                    This is nice product
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review3} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Amir Hamja</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                   Happy to buy this product
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
