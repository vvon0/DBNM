const express = require('express');
const cors = require('cors');
const { sequelize, ServiceRequest } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/service-requests', async (req, res) => {
  try {
    const serviceRequest = await ServiceRequest.create(req.body);
    res.status(201).json(serviceRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
});