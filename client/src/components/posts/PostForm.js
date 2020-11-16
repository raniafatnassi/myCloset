import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>You can create your own post here</h3>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text, price });
          setText("");
          setPrice("");
        }}
      >
        <div className="form-group">
        <input
          type="text"
          name="text"
          placeholder="Product Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>
        <div className="form-group">
        <input
            type="text"
            placeholder="Please Put an Image of Your Product"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          </div>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
