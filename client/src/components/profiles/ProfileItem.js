import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccountAdmin } from "../../actions/profile";

const ProfileItem = ({
  profile: {
    _id,
    user: { _userid, name, avatar },
    location,
    phoneNumber,
    job,
  },
  deleteAccountAdmin,
  auth,
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <p className="my-1">{phoneNumber && <span>{phoneNumber}</span>}</p>
        <p className="my-1">{job && <span>{job}</span>}</p>
        {/* <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link> */}
        {auth.user.role === "admin" && (
          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => deleteAccountAdmin(_id)}
            >
              <i className="fas fa-user-minus"></i> Delete Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteAccountAdmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteAccountAdmin })(ProfileItem);
