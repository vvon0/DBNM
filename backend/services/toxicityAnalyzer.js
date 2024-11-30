const natural = require('natural');
const Sentiment = require('sentiment');

class ToxicityAnalyzer {
  constructor() {
    this.sentiment = new Sentiment();
    this.tokenizer = new natural.WordTokenizer();
  }

  analyzeComment(comment) {
    const result = this.sentiment.analyze(comment);
    const tokens = this.tokenizer.tokenize(comment);
    
    // 부정적인 점수와 특정 키워드 확인
    const isToxic = result.score < -3 || 
      tokens.some(token => 
        ['hate', 'stupid', 'idiot', 'trash'].includes(token.toLowerCase())
      );

    return {
      text: comment,
      isToxic,
      score: result.score,
      tokens: tokens
    };
  }
}

module.exports = ToxicityAnalyzer;