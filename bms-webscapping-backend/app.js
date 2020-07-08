const express = require("express");
const cors=require("cors")
const app = express();
const PORT = process.env.PORT || 4000;
const { popularCities, otherCities } = require("./src/puppeteer");
app.use(cors())
app.get("/cities", (req, res) => {
  res.send({ popularCities: popularCities, otherCities: otherCities });
  console.log(popularCities, otherCities);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
