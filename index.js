var http = require("http"),
  express = require("express"),
  app = express(),
  server = http.createServer(app);
const axios = require("axios");
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Delegate server");
});

app.post("/", async function (request, response) {
  const { url } = request.body;
  try {
    const res = await axios.get(url);
    response.send(res.data);
  } catch (e) {
    response.send({ error: e.message });
  }
});

server.listen(port);
console.log(
  "Express server listening on port %d in %s mode",
  server.address().port,
  app.settings.env
);
