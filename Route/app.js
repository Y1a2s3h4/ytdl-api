const ytdl = require("ytdl-core");
const router = require("express").Router();

router.get("/", (req, res) => {
  const input = req.query.input;
  const itag = req.query.itag;
  ytdl.getInfo(input, (err, info) => {
    if (err) throw err;
    let format = ytdl.chooseFormat(info.formats, {
      quality: itag,
    });
    const arr = [];
    if (format) {
      const obj = {
        title: info.title,
        quality: format.qualityLabel,
        video_extension: format.container,
        thumbnail_url:
          info.player_response.microformat.playerMicroformatRenderer.thumbnail
            .thumbnails[0].url,
        download_url: format.url,
      };
      arr.push(obj);
      res.send(arr);
      console.log(format);
    }
  });
});
module.exports = router;
