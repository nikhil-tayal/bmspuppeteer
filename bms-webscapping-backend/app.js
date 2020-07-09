const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const { popularCities, otherCities, findEvents } = require("./src/puppeteer");
app.use(cors());
app.use(express.json());
app.get("/cities", (req, res) => {
  res.send({ popularCities: popularCities, otherCities: otherCities });
  //   console.log(popularCities, otherCities);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.post("/fetch-events", (req, res) => {
  res.send(findEvents(req.body.city));
});
