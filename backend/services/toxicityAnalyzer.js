const natural = require('natural');
const Sentiment = require('sentiment');

class ToxicityAnalyzer {
  constructor() {
    this.sentiment = new Sentiment();
    this.tokenizer = new natural.WordTokenizer();
    this.toxicKeywords = [
      'hate', 'stupid', 'idiot', 'trash', 'kill', 'fool', 'dumb', // 기존 키워드
      '미친', '바보', '멍청이', '개새끼', '씨발', '뒤져', '좆같아', '건방지다',
      '꺼져', '존나', '씹새끼', '죽어', '없이', '후아', '현타올듯' // 한글 유독성 키워드 리스트
    ];
  }

  analyzeComment(comment) {
    const result = this.sentiment.analyze(comment);
    const tokens = this.tokenizer.tokenize(comment);
    const lowerCaseComment = comment.toLowerCase();
    
    // 부정적인 점수와 특정 키워드 확인
    const isToxic = result.score <= -1 || 
      tokens.some(token => 
        this.toxicKeywords.includes(token.toLowerCase())
      ) || this.toxicKeywords.some(keyword => lowerCaseComment.includes(keyword));

    return {
      text: comment,
      isToxic,
      score: result.score,
      tokens: tokens
    };
  }
}

module.exports = ToxicityAnalyzer;