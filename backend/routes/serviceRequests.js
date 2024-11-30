const express = require('express');
const router = express.Router();
const { ServiceRequest } = require('../models');
const AnalysisService = require('../services/analysisService');
const analysisService = new AnalysisService();

// 라우터 로드 확인
console.log('Service Requests Router loaded');

// 분석 시작 엔드포인트
router.post('/:id/analyze', async (req, res) => {
  console.log(`Received analyze request for ID: ${req.params.id}`);
  try {
    const requestId = req.params.id;
    const results = await analysisService.analyzeUrls(requestId);
    res.json(results);
  } catch (error) {
    console.error('Analysis failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// 분석 상태 확인 엔드포인트
router.get('/:id/status', async (req, res) => {
  try {
    const request = await ServiceRequest.findByPk(req.params.id);
    res.json({
      status: request.analysis_status,
      results: request.toxic_comments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 테스트 엔드포인트
router.get('/test', (req, res) => {
  res.send('Service Requests Router is working');
});

module.exports = router;