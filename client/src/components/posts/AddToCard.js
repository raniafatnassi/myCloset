import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AddToCard = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? (
    <Fragment> Added to card </Fragment>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

AddToCard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AddToCard);
