const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const VALID_USERNAME = 'Apoorva'; 
const VALID_PASSWORD = 'Apoorva'; 

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const payload = { username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
