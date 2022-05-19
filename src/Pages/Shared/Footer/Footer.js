import './Footer.css';
import React from 'react';
import { AiOutlineFacebook, AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      {/* <section>Footer Example 4</section> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span></span>
          </h3>

          <p className="footer-company-name"> © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>HatirJheel Avenue</span> Ramna Dhaka
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+88017000000000</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@ahsan.com">support@ahsan.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Company social icon</span>
            <AiOutlineFacebook
              style={{ width: '30', height: '30' }}
              className="text-info me-2"
            />
            <AiFillInstagram
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
            <BsLinkedin
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
            <IoLogoWhatsapp
              style={{ width: '30', height: '30' }}
              className=" text-info me-2"
            />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
