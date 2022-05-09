import React from 'react';
import './Footer.css';

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
              <span>gazi</span> gojnia himsori, 
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+88020000000000000</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:gazi@soft.com">gazi@soft.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Organization </span>
            
            
          
          
          </p>
        </div>
      </footer>
    </div>
    );
};

export default Footer;