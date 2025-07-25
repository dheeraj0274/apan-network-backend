const express = require('express');
const router = express.Router();
const {
  submitUserFeedback,
  submitProviderFeedback,
} = require('../controller/feedbackController');

const { verifyUserToken , verifyProviderToken } = require('../middleware/authMiddleware'); // if using a single auth middleware for both users and providers



router.post('/user/feedback', verifyUserToken, submitUserFeedback);

router.post('/provider/feedback', verifyProviderToken, submitProviderFeedback);

module.exports = router;
