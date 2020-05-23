const router = require("express").Router();
const base64Img = require("base64-img");
router.get("/", (req, res) => {
  const dataUrl = req.query.dataUrl;
  base64Img.requestBase64(
    dataUrl,

    function (err, resp, body) {
      console.log(resp, body);
      const obj = {
        dataURL: body,
      };
      res.send(obj);
    }
  );
});
module.exports = router;
