const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());

const data = require("./data");

app.get("/", (req, res) => {
  res.send("test server");
});

app.get("/data", (req, res) => {
  res.send(data.backendData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
