const WebScraper = require('./scraper');
const ToxicityAnalyzer = require('./toxicityAnalyzer');
const { ServiceRequest } = require('../models');
const fs = require('fs').promises;
const path = require('path');

class AnalysisService {
  constructor() {
    this.scraper = new WebScraper();
    this.analyzer = new ToxicityAnalyzer();
    this.outputDir = path.join(__dirname, '../outputs/analysis');
  }

  async saveAnalysisResult(requestId, data) {
    await fs.mkdir(this.outputDir, { recursive: true });
    const filename = `analysis_${requestId}_${Date.now()}.json`;
    const filepath = path.join(this.outputDir, filename);
    await fs.writeFile(filepath, JSON.stringify(data, null, 2));
    return { filename, filepath };
  }

  async analyzeUrls(requestId) {
    console.log(`Analyzing URLs for request ID: ${requestId}`);
    const request = await ServiceRequest.findByPk(requestId);
    if (!request) throw new Error('Request not found');

    try {
      request.analysis_status = 'processing';
      await request.save();

      const urls = request.siteUrls;
      const toxicComments = [];

      for (const url of urls) {
        const comments = await this.scraper.getComments(url);
        if (!comments.length) {
          console.log(`No comments found for URL: ${url}`);
          continue;
        }
        const analyzed = comments
          .map((comment) => this.analyzer.analyzeComment(comment))
          .filter((result) => result.isToxic);

        toxicComments.push(...analyzed.map((result) => ({ ...result, url })));
      }

      const { filepath } = await this.saveAnalysisResult(requestId, {
        requestId,
        timestamp: new Date(),
        toxicComments,
      });

      request.toxic_comments = toxicComments;
      request.output_file = filepath;
      request.analysis_status = 'completed';
      await request.save();

      return {
        status: 'completed',
        resultFile: filepath,
        toxicComments,
      };
    } catch (error) {
      console.error('Analysis failed:', error);
      request.analysis_status = 'error';
      await request.save();
      throw error;
    }
  }
}

module.exports = AnalysisService;