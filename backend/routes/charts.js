
const express = require('express');
const router = express.Router();


router.get('/summary', (req, res) => {
  const data = {
    labels: ['Low', 'Medium', 'High'],
    values: [70, 20, 10]
  };
  res.json(data);
});


router.get('/reports', (req, res) => {
  const data = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    values: [50, 80, 110, 130, 150]
  };
  res.json(data);
});

module.exports = router;

