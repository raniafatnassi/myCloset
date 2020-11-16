import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">MyCloset</h1>
          <p className="lead">
            We help you get your own business from home.
            <br/>
            You can deposit clothes to sell or share with people in need...
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect( mapStateToProps )(Landing);
