const puppeteer = require('puppeteer');

class WebScraper {
  async getComments(url) {
    const browser = await puppeteer.launch({ headless: true });
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });

      // 네이버 뉴스 댓글 셀렉터
      const comments = await page.evaluate(() => {
        const commentElements = document.querySelectorAll('.u_cbox_contents');
        return Array.from(commentElements).map((el) => el.textContent.trim());
      });

      return comments;
    } catch (error) {
      console.error('Scraping failed:', error);
      return [];
    } finally {
      await browser.close();
    }
  }
}

module.exports = WebScraper;