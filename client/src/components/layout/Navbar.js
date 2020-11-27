import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/custom.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul
      className="nav navbar-nav ml-auto"
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profiles">
          Profiles
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashbard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={logout} href="/">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul
      className="nav navbar-nav ml-auto"
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      {/* <!-- Start Main Top --> */}
      <header className="main-header">
        {/* <!-- Start Navigation --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* <!-- Start Header Navigation --> */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
            {/* <!-- End Header Navigation --> */}

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              {!loading && (
                <Fragment>
                  {" "}
                  {isAuthenticated ? authLinks : guestLinks}{" "}
                </Fragment>
              )}
            </div>
            {/* <!-- /.navbar-collapse --> */}

            {/* <!-- Start Atribute Navigation --> */}
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li className="side-menu">
                  <a href="#">
                    <i className="fa fa-shopping-bag"></i>
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- End Atribute Navigation --> */}
          </div>
          {/* <!-- Start Side Menu --> */}
          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times"></i>
            </a>
            <li className="cart-box">
              <ul className="cart-list">
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-01.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Delica omtantur </a>
                  </h6>
                  <p>
                    1x - <span className="price">$80.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-02.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Omnes ocurreret</a>
                  </h6>
                  <p>
                    1x - <span className="price">$60.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-03.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Agam facilisis</a>
                  </h6>
                  <p>
                    1x - <span className="price">$40.00</span>
                  </p>
                </li>
                <li className="total">
                  <a href="#" className="btn btn-default hvr-hover btn-cart">
                    VIEW CART
                  </a>
                  <span className="float-right">
                    <strong>Total</strong>: $180.00
                  </span>
                </li>
              </ul>
            </li>
          </div>
          {/* <!-- End Side Menu --> */}
        </nav>
        {/* <!-- End Navigation --> */}
      </header>
      {/* <!-- End Main Top --> */}
      {/* <!-- Start Top Search --> */}
      <div class="top-search">
        <div class="container">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-search"></i>
            </span>
            <input type="text" class="form-control" placeholder="Search" />
            <span class="input-group-addon close-search">
              <i class="fa fa-times"></i>
            </span>
          </div>
        </div>
      </div>
      {/* <!-- End Top Search --> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);
