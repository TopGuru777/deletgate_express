var http = require("http"),
  express = require("express"),
  app = express(),
  server = http.createServer(app);
const axios = require("axios");

app.use(express.json());

app.post("/", async function (request, response) {
  const { url } = request.body;
  try {
    const res = await axios.get(url);
    response.send(res.data);
  } catch (e) {
    response.send({ error: e.message });
  }
});

server.listen(80);
console.log(
  "Express server listening on port %d in %s mode",
  server.address().port,
  app.settings.env
);
