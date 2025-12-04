const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();


const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("❌ ERROR: JWT_SECRET is not defined. Add it to backend/.env");
  process.exit(1);
}

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};

  
  if (username === 'Apoorva' && password === 'Apoorva') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
