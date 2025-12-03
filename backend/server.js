require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const authRoutes = require('./routes/auth');
const chartRoutes = require('./routes/charts');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());                
app.use(express.json());        


connectDB();


app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


app.use('/api/auth', authRoutes);       
app.use('/api/charts', chartRoutes);    


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});


app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
