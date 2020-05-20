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
    let audioFormats = ytdl.filterFormats(info.formats, "audioonly");
    const arr = [];
    if (format) {
      const obj = {
        title: info.title,
        quality: format.qualityLabel,
        channel_url: info.author.channel_url,
        youtube_video_url: info.video_url,
        video_extension: format.container,
        audio_extension: audioFormats[0].container,
        avatar_url: info.author.avatar,
        subscribers_count: info.author.subscriber_count,
        view_count: info.player_response.videoDetails.viewCount,
        keywords: info.player_response.videoDetails.keywords,
        thumbnail_urls: info.player_response.videoDetails.thumbnail,
        video_url: format.url,
        audio_url: audioFormats[0].url,
      };
      arr.push(obj);
      res.send(arr);
      console.log(audioFormats);
    }
  });
});
module.exports = router;
