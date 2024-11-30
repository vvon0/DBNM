const express = require('express');
const cors = require('cors');
const { sequelize, ServiceRequest } = require('./models');
const serviceRequestsRouter = require('./routes/serviceRequests'); // 라우터 임포트

const app = express();
app.use(cors());
app.use(express.json());

// 라우터 설정
app.use('/api/service-requests', serviceRequestsRouter);

// 기본 POST 라우트 유지 (필요 시)
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
    console.log('Service Requests Router loaded'); // 라우터 로드 확인
  } catch (error) {
    console.error('Database connection error:', error);
  }
});

module.exports = app;