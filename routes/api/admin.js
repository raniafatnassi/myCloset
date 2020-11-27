const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");
const { JsonWebTokenError } = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

// @router  POST /api/admin/add_admin
// @desc    Add admin
// @access  Private && Admin only
router.post(
  "/add_admin",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email must be valid").isEmail(),
    check(
      "password",
      "Password must have a length of 6 characters or more"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        role: "admin",
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// @router  DELETE /api/admin/delete_post/:id
// @desc    Delete a post
// @access  Private && Admin only
router.delete("/delete_post/:id", auth, async (req, res) => {
  const admin = await User.findById(req.user.user_id);

  try {
    const post = await Post.findById(req.params.id);
    await post.remove();
    res.json({ msg: "Post removed" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

// @route    DELETE api/admin/:id
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/delete_profile/:id", auth, async (req, res) => {
  try {
    // Remove profile
    const profile = await Profile.findById(req.params.id);

    // Remove user
    await User.findOneAndRemove({ _id: profile.user.id });
    // Remove User Posts
    await Post.deleteMany({ user: profile.user.id });
    await profile.remove();

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
