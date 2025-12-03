const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Chart = require('../models/Chart');


router.get('/chart1', auth, async (req, res) => {
  try {
    const chart = await Chart.findOne({ name: 'chart1' });
    if (!chart) return res.status(404).json({ message: 'Chart1 not found' });
    res.json(chart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/chart2', auth, async (req, res) => {
  try {
    const chart = await Chart.findOne({ name: 'chart2' });
    if (!chart) return res.status(404).json({ message: 'Chart2 not found' });
    res.json(chart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
