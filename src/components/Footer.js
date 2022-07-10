
import React from "react";
import footerlogo from '../logo.svg';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src={footerlogo} alt="minty" />
              </a>

              <div className="social-links d-flex mt-3">
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/" className="linkedin" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6 footer-links">
              <h4>About us</h4>
              <ul >
                <li>

                  <a href="#test">Who we are</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6 footer-links">
              <h4>Advisory</h4>
              <ul>
                <li>

                  <a href="#test">Financial Planning</a>
                </li>
                <li>

                  <a href="#test">Retirement Planning</a>
                </li>
                <li>

                  <a href="#test">Tax Planning</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6 footer-links">
              <h4>Others</h4>
              <ul>
                <li>
                  <a href="#test">Contact Us</a>
                </li>
                <li>

                  <a href="#test">Privacy Policy</a>
                </li>
                <li>

                  <a href="#test">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="smoothline" />
        </div>
      </div>
      <div className="footer-legal">
        <div className="container">
          <div className="copyright">Copyright @ 2019 Financial Hospital LLP. All rights reserved.</div>
          <div className="credits">Reproduction of any content in any form, including but not limited to articles, photos, video, designs, graphs without proper written consent of Financial Hospital LLP. is prohibited.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
