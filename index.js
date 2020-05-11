const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use("/v", require("./Route/app"));

app.use((err, req, res, next) => res.status(err.statusCode).send(err));
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
