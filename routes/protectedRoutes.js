const express = require('express');
const verifyFirebaseToken = require('../middleware/verifyToken');
const router = express.Router();

router.get('/protected', verifyFirebaseToken, (req, res) => {
  res.send({
    message: 'You have access to this protected route!',
    user: req.user,
  });
});

module.exports = router;