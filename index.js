const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require("cors");

app.use(cors());

app.use("/v", require("./Route/app"));
app.use("/q", require("./Route/download"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
