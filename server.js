const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Basic payment endpoint (expand with Stripe later)
app.post('/create-payment-intent', (req, res) => {
  res.json({ clientSecret: 'demo-secret' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
