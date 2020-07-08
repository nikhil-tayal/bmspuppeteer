const puppeteer = require("puppeteer");
const $ = require("cheerio");
let popularCities = [],
  otherCities = [];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://in.bookmyshow.com");
  let html = await page.evaluate(() => document.body.innerHTML);
  $(".__top-cities", html).each(function () {
    $("li[class=region-list]>a", $(this).html()).each(function (i, el) {
      popularCities[i] = $(this).text().trim();
    });
  });
  $(".others-cities-list>ul[class=city-list]", html).each(function () {
    $(".city-name", $(this).html()).each(function (i, el) {
      otherCities[i] = $(this).text().trim();
    });
  });
  await browser.close();
})();

module.exports = { popularCities, otherCities };
