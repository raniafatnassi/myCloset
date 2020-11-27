import React, { Fragment } from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/custom.css";

const Footer = () => {
  return (
    <Fragment>
      {/* <!-- Start Footer  --> */}
      <div>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>About MyCloset</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-pinterest-p"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt"></i>Address: Lac2{" "}
                        Street 23 , KS 67213 {" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-phone-square"></i>Phone:{" "}
                        <a href="tel:+1-888705770">+216 500 230</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-envelope"></i>Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer  --> */}

      {/* <!-- Start copyright  --> */}
      <div className="footer-copyright">
        <p className="footer-company">
          All Rights Reserved. &copy; 2020 <a href="#">MyCloset</a>{" "}
        </p>
      </div>
      {/* <!-- End copyright  --> */}
    </Fragment>
  );
};

export default Footer;
