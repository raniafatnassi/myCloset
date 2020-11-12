const express = require('express');

const router = express.Router();

// @route GET api/article
// @desc Test Route
// @access Public
router.get('/', (req, res) => {
    res.send('Arcticle Route');
});

module.exports = router;