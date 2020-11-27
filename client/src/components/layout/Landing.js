import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import about from "./about-img.jpg";
import image1 from "./img-1.jpg";
import image2 from "./img-2.jpg";
import image3 from "./img-3.jpg";
import image4 from "./img-4.jpg";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/custom.css";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
    {/* <!-- Start All Title Box --> */}
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>ABOUT US</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">ABOUT US</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End All Title Box --> */}
    {/* // <!-- Start About Page  --> */}
    <div className="about-box-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="noo-sh-title">
              We are <span>"MyCloset"</span>
            </h2>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="banner-frame">
              {" "}
              <img className="img-thumbnail img-fluid" src={about} alt="" />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
              <h3>We are Trusted</h3>
              <p>
                80% of retailers and clients are likely to deal with us more
                than one time.{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
              <h3>We are Professional</h3>
              <p>
                delivery of orders does not exceed 2 days in the worst cases.{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
              <h3>We are Expert</h3>
              <p>
                We commaborate with the most experienced people in retail and
                fashion domain.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12">
            <h2 className="noo-sh-title">Meet Our Team</h2>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
              <div className="our-team">
                {" "}
                <img src={image1} alt="" />
                <div className="team-content">
                  <h3 className="title">Rania Fatnassi</h3>{" "}
                  <span className="post">Founder, Web Developer</span>{" "}
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-youtube"></a>
                  </li>
                </ul>
                <div className="icon">
                  {" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                </div>
              </div>
              <div className="team-description">
                <p>
                  Web developer with a PhD in data Science. With a large
                  experience in retail field in the USA. Rania is the founder of
                  this project.{" "}
                </p>
              </div>
              <hr className="my-0" />{" "}
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
              <div className="our-team">
                {" "}
                <img src={image2} alt="" />
                <div className="team-content">
                  <h3 className="title">Wassim Bouchlema</h3>{" "}
                  <span className="post">CEO, Web Developer</span>{" "}
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-youtube"></a>
                  </li>
                </ul>
                <div className="icon">
                  {" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                </div>
              </div>
              <div className="team-description">
                <p>
                  Web developer and an instructor at Gomycode, Wassim is one of
                  the most talented and brilliant developers in this domain.{" "}
                </p>
              </div>
              <hr className="my-0" />{" "}
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
              <div className="our-team">
                {" "}
                <img src={image3} alt="" />
                <div className="team-content">
                  <h3 className="title">Ikbel Jhidri</h3>{" "}
                  <span className="post">Web Developer</span>{" "}
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-youtube"></a>
                  </li>
                </ul>
                <div className="icon">
                  {" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                </div>
              </div>
              <div className="team-description">
                <p>
                  Web developer, with a PhD in mathematics, Ikbel works on the
                  machine learning side of the project to help us work on
                  predicting the evolution of the market.{" "}
                </p>
              </div>
              <hr className="my-0" />{" "}
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
              <div className="our-team">
                {" "}
                <img src={image4} alt="" />
                <div className="team-content">
                  <h3 className="title">Nadhem Ltifi</h3>{" "}
                  <span className="post">Web Developer</span>{" "}
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-youtube"></a>
                  </li>
                </ul>
                <div className="icon">
                  {" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                </div>
              </div>
              <div className="team-description">
                <p>
                  Web developer, Nadhem works on the design of our Website to
                  prevent us the best platform performance.{" "}
                </p>
              </div>
              <hr className="my-0" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- End About Page --> */}
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
