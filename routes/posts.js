const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts

router.get('/', (req, res) =>{
  res.send('Hello World');
});

// Add Posts


// Delete Posts

module.exports = router;
