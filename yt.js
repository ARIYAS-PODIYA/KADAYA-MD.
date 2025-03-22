const config = require("../settings");
const {
  default: makeWASocket,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require("@whiskeysockets/baileys");
const l = console.log;
const {
  cmd,
  commands
} = require("../lib/command");
const ytmp4q = require("../lib/ytdl");
const yts = require("yt-search");
const fg = require("api-dylux");
var request = require("request");
var cheerio = require("cheerio");
let soundcloud = async _0x4f5dfc => {
  return new Promise((_0x3313e3, _0x55d042) => {
    const _0x2284f0 = {
      method: "POST",
      url: "https://www.klickaud.co/download.php",
      headers: {},
      formData: {}
    };
    _0x2284f0.headers["content-type"] = "application/x-www-form-urlencoded";
    _0x2284f0.formData.value = _0x4f5dfc;
    _0x2284f0.formData["2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37"] = "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3";
    request(_0x2284f0, async function (_0x418cd4, _0x2a8227, _0x597edb) {
      if (_0x418cd4) {
        throw new Error(_0x418cd4);
      }
      const _0x139ab3 = cheerio.load(_0x597edb);
      _0x3313e3({
        'judul': _0x139ab3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)").text(),
        'download_count': _0x139ab3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)").text(),
        'thumb': _0x139ab3("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img").attr("src"),
        'link': _0x139ab3("#dlMP3").attr("onclick").split("downloadFile('")[1].split("',")[0]
      });
    });
  });
};
let axios = require("axios");
async function ssearch(_0x852ac6) {
  let _0x5a8d7a = await axios.get("https://m.soundcloud.com/search?q=" + encodeURIComponent(_0x852ac6), {
    'headers': {
      'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    }
  });
  let _0x4e212f = cheerio.load(_0x5a8d7a.data);
  let _0x1701d8 = [];
  _0x4e212f("div > ul > li > div").each(function (_0x29ffa2, _0x54fe01) {
    let _0xf5f071 = _0x4e212f(_0x54fe01).find('a').attr("aria-label");
    let _0x5567d1 = "https://m.soundcloud.com" + _0x4e212f(_0x54fe01).find('a').attr("href");
    let _0x1c4c97 = _0x4e212f(_0x54fe01).find("a > div > div > div > picture > img").attr("src");
    let _0x14f34c = _0x4e212f(_0x54fe01).find("a > div > div > div").eq(1).text();
    let _0x2b5511 = _0x4e212f(_0x54fe01).find("a > div > div > div > div > div").eq(0).text();
    let _0x3dc05e = _0x4e212f(_0x54fe01).find("a > div > div > div > div > div").eq(1).text();
    let _0x22b492 = _0x4e212f(_0x54fe01).find("a > div > div > div > div > div").eq(2).text();
    const _0x3a5c5a = {
      title: _0xf5f071,
      url: _0x5567d1,
      thumb: _0x1c4c97,
      artist: _0x14f34c,
      views: _0x2b5511,
      release: _0x22b492,
      timestamp: _0x3dc05e
    };
    _0x1701d8.push(_0x3a5c5a);
  });
  return {
    'status': _0x5a8d7a.status,
    'creator': "Caliph",
    'result': _0x1701d8
  };
}
function ytreg(_0x32c720) {
  const _0x1644ce = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x1644ce.test(_0x32c720);
}
function extractYouTubeId(_0x398c9a) {
  const _0x260aab = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x33502d = _0x398c9a.match(_0x260aab);
  return _0x33502d ? _0x33502d[1] : null;
}
function convertYouTubeLink(_0x485b2b) {
  const _0x4e4bbd = extractYouTubeId(_0x485b2b);
  if (_0x4e4bbd) {
    return "https://www.youtube.com/watch?v=" + _0x4e4bbd;
  }
  return _0x485b2b;
}
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  getsize,
  jsonformat
} = require("../lib/functions");
var descv = '';
if (config.LANG === 'SI') {
  descv = "Youtube වෙතින් videos බාගත කරයි.";
} else {
  descv = "Download videos from Youtube.";
}
var descs = '';
if (config.LANG === 'SI') {
  descs = "Youtube වෙතින් songs බාගත කරයි.";
} else {
  descs = "Download songs from Youtube.";
}
var descyt = '';
if (config.LANG === 'SI') {
  descyt = "Youtube වෙතින් video සහ songs බාගත කරයි.";
} else {
  descyt = "Download videos and songs from Youtube.";
}
var descsh = '';
if (config.LANG === 'SI') {
  descsh = "Youtube search බාගත කරයි.";
} else {
  descsh = "Search and get details from youtube.";
}
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === 'SI') {
  urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*";
} else {
  urlneed = "*Please give me youtube url..*";
}
var urlneed1 = '';
if (config.LANG === 'SI') {
  urlneed1 = "එය soundcloud වෙතින් songs බාගත කරයි.";
} else {
  urlneed1 = "It downloads songs from soundcloud.";
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
} else {
  imgmsg = "```Please write a few words!```";
}
var sizetoo = '';
if (config.LANG === 'SI') {
  sizetoo = "_This file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*";
} else {
  sizetoo = "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
}
const _0x9bf0df = {
  pattern: "song2",
  desc: "Download songs",
  category: "download",
  filename: __filename
};
cmd(_0x9bf0df, async (_0xaef993, _0xfad5d6, _0x3d85cd, {
  from: _0x2de7a3,
  q: _0x3b4464,
  reply: _0x42e049
}) => {
  try {
    if (!_0x3b4464) {
      await _0xaef993.sendPresenceUpdate("recording", _0x2de7a3);
      const _0x76d3d8 = {
        url: "https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/song.mp3"
      };
      const _0xc0a1f2 = {
        audio: _0x76d3d8,
        mimetype: "audio/mpeg",
        ptt: true
      };
      const _0x4f06a5 = {
        quoted: _0xfad5d6
      };
      await _0xaef993.sendMessage(_0x2de7a3, _0xc0a1f2, _0x4f06a5);
      return;
    }
    const _0x9fdd03 = await yts(_0x3b4464);
    const _0x30dc93 = _0x9fdd03.videos[0];
    const _0x2733dd = _0x30dc93.url;
    let _0x4bdb0a = "> 𝗣𝗢𝗗𝗜𝗬𝗔 MD YTDL\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _" + _0x30dc93.title + "_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _" + _0x30dc93.author.name + "_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _" + _0x30dc93.description + "_\n⏳ *𝗧𝗶𝗺𝗲*: _" + _0x30dc93.timestamp + "_\n⏱️ *𝗔𝗴𝗼*: _" + _0x30dc93.ago + "_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _" + (_0x30dc93.views >= 1000000000 ? (_0x30dc93.views / 1000000000).toFixed(1) + 'B' : _0x30dc93.views >= 1000000 ? (_0x30dc93.views / 1000000).toFixed(1) + 'M' : _0x30dc93.views >= 1000 ? (_0x30dc93.views / 1000).toFixed(1) + 'K' : _0x30dc93.views.toString()) + "_\n🔗 *𝗟𝗶𝗻𝗸*: " + _0x2733dd;
    await _0xaef993.sendPresenceUpdate("typing", _0x2de7a3);
    const _0x48bfbc = {
      url: _0x30dc93.thumbnail
    };
    const _0xe5d0c3 = {
      image: _0x48bfbc,
      caption: _0x4bdb0a
    };
    const _0x45cfed = {
      quoted: _0xfad5d6
    };
    await _0xaef993.sendMessage(_0x2de7a3, _0xe5d0c3, _0x45cfed);
    let _0x2e0f00 = await fg.yta(_0x2733dd);
    let _0x4514e6 = _0x2e0f00.dl_url;
    await _0xaef993.sendPresenceUpdate("recording", _0x2de7a3);
    const _0x319203 = {
      url: _0x4514e6
    };
    const _0x26aa7a = {
      audio: _0x319203,
      mimetype: "audio/mpeg"
    };
    const _0x1ace95 = {
      quoted: _0xfad5d6
    };
    await _0xaef993.sendMessage(_0x2de7a3, _0x26aa7a, _0x1ace95);
    const _0x46d0ff = {
      url: _0x4514e6
    };
    const _0x3d09f8 = {
      document: _0x46d0ff,
      mimetype: "audio/mpeg",
      fileName: _0x30dc93.title + ".mp3",
      caption: "💻 *VAJIRA MD YTDL*"
    };
    const _0x14be3c = {
      quoted: _0xfad5d6
    };
    await _0xaef993.sendMessage(_0x2de7a3, _0x3d09f8, _0x14be3c);
  } catch (_0x280d33) {
    console.log(_0x280d33);
    _0x42e049("Error: " + _0x280d33.message);
  }
});
const _0x44135b = {
  pattern: "video2",
  desc: "Download videos",
  category: "download",
  filename: __filename
};
cmd(_0x44135b, async (_0x1913e5, _0x598cca, _0x2c12d6, {
  from: _0x32b1e6,
  q: _0xabcef5,
  reply: _0x50b264
}) => {
  try {
    if (!_0xabcef5) {
      await _0x1913e5.sendPresenceUpdate("recording", _0x32b1e6);
      const _0x336bbf = {
        url: "https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/video.mp3"
      };
      const _0x110369 = {
        audio: _0x336bbf,
        mimetype: "audio/mpeg",
        ptt: true
      };
      const _0x11aee4 = {
        quoted: _0x598cca
      };
      await _0x1913e5.sendMessage(_0x32b1e6, _0x110369, _0x11aee4);
      return;
    }
    const _0x281f09 = await yts(_0xabcef5);
    const _0x5673a6 = _0x281f09.videos[0];
    const _0x130291 = _0x5673a6.url;
    let _0xd373dc = "𝗣𝗢𝗗𝗜𝗬𝗔 MD YTDL\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _" + _0x5673a6.title + "_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _" + _0x5673a6.author.name + "_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _" + _0x5673a6.description + "_\n⏳ *𝗧𝗶𝗺𝗲*: _" + _0x5673a6.timestamp + "_\n⏱️ *𝗔𝗴𝗼*: _" + _0x5673a6.ago + "_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _" + (_0x5673a6.views >= 1000000000 ? (_0x5673a6.views / 1000000000).toFixed(1) + 'B' : _0x5673a6.views >= 1000000 ? (_0x5673a6.views / 1000000).toFixed(1) + 'M' : _0x5673a6.views >= 1000 ? (_0x5673a6.views / 1000).toFixed(1) + 'K' : _0x5673a6.views.toString()) + "_\n🔗 *𝗟𝗶𝗻𝗸*: " + _0x130291;
    await _0x1913e5.sendPresenceUpdate("typing", _0x32b1e6);
    const _0x33dcac = {
      url: _0x5673a6.thumbnail
    };
    const _0x4ca058 = {
      image: _0x33dcac,
      caption: _0xd373dc
    };
    const _0x4efdd8 = {
      quoted: _0x598cca
    };
    await _0x1913e5.sendMessage(_0x32b1e6, _0x4ca058, _0x4efdd8);
    let _0x311f16 = await fg.ytv(_0x130291);
    let _0x54818a = _0x311f16.dl_url;
    const _0x461874 = {
      url: _0x54818a
    };
    const _0x55df66 = {
      video: _0x461874,
      mimetype: "video/mp4"
    };
    const _0x1485d4 = {
      quoted: _0x598cca
    };
    await _0x1913e5.sendMessage(_0x32b1e6, _0x55df66, _0x1485d4);
    const _0x63e6f4 = {
      url: _0x54818a
    };
    const _0x6f950b = {
      document: _0x63e6f4,
      mimetype: "video/mp4",
      fileName: _0x5673a6.title + ".mp4",
      caption: "💻 *VAJIRA MD YTDL*"
    };
    const _0x5efa65 = {
      quoted: _0x598cca
    };
    await _0x1913e5.sendMessage(_0x32b1e6, _0x6f950b, _0x5efa65);
  } catch (_0x54f820) {
    console.log(_0x54f820);
    _0x50b264("Error: " + _0x54f820.message);
  }
});
const _0x3bbb69 = {
  pattern: "play",
  react: '📱',
  desc: urlneed1,
  category: "download",
  use: ".soundcloud lelena",
  filename: __filename
};
cmd(_0x3bbb69, async (_0x360014, _0x1ac153, _0x48291f, {
  from: _0x4d1239,
  prefix: _0x307b2d,
  l: _0x309987,
  quoted: _0xbb9364,
  body: _0x50f98e,
  isCmd: _0x15d89e,
  command: _0x155a60,
  args: _0x158b2a,
  q: _0x113baa,
  isGroup: _0x4b6d4f,
  sender: _0x1c149e,
  senderNumber: _0x3cf107,
  botNumber2: _0x32d221,
  botNumber: _0x343bf9,
  pushname: _0x31b0ff,
  isMe: _0x4e40ab,
  isOwner: _0x3de4bf,
  groupMetadata: _0x446f63,
  groupName: _0x11bdce,
  participants: _0x5dcfbb,
  groupAdmins: _0x1cfa4c,
  isBotAdmins: _0x2d8263,
  isAdmins: _0x524120,
  reply: _0xc75df6
}) => {
  try {
    const _0xf4a0ad = {
      text: imgmsg
    };
    const _0x27bd8f = {
      quoted: _0x1ac153
    };
    if (!_0x113baa) {
      return await _0x360014.sendMessage(_0x4d1239, _0xf4a0ad, _0x27bd8f);
    }
    const _0x3f86dc = await ssearch(_0x113baa);
    const _0x31a474 = _0x3f86dc.result;
    const _0x493c7a = {
      text: N_FOUND
    };
    const _0x4ff883 = {
      quoted: _0x1ac153
    };
    if (_0x31a474.length < 1) {
      return await _0x360014.sendMessage(_0x4d1239, _0x493c7a, _0x4ff883);
    }
    var _0x184d5f = [];
    for (var _0x2c8627 = 0; _0x2c8627 < _0x31a474.length; _0x2c8627++) {
      if (_0x31a474[_0x2c8627].thumb && !_0x31a474[_0x2c8627].views.includes("Follow")) {
        _0x184d5f.push({
          'title': _0x2c8627 + 1,
          'description': _0x31a474[_0x2c8627].title + " | " + _0x31a474[_0x2c8627].artist + " | " + _0x31a474[_0x2c8627].views + " | " + _0x31a474[_0x2c8627].release + " | " + _0x31a474[_0x2c8627].timestamp,
          'rowId': _0x307b2d + "selectaud3 " + _0x31a474[_0x2c8627].url
        });
      }
    }
    const _0x15559c = {
      title: "_[Result from m.soundcloud.com]_",
      rows: _0x184d5f
    };
    const _0x529d59 = [_0x15559c];
    const _0x2989b6 = {
      text: "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n   *SOUNDCLOUD DOWNLOADER*\n\n*📱 Entered Name:* " + _0x113baa,
      footer: config.FOOTER,
      title: "Result from m.soundcloud.com 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x529d59
    };
    const _0x51e420 = {
      quoted: _0x1ac153
    };
    await _0x360014.replyList(_0x4d1239, _0x2989b6, _0x51e420);
  } catch (_0x1aeade) {
    _0xc75df6("*ERROR !!*");
    _0x309987(_0x1aeade);
  }
});
const _0x2ee965 = {
  alias: ["selectaud3"],
  filename: __filename
};
cmd(_0x2ee965, async (_0x54752c, _0x6e585a, _0x3c6b50, {
  from: _0x3d76b2,
  l: _0x2c8f2e,
  quoted: _0x4952f3,
  prefix: _0x4c00fd,
  body: _0x3863fc,
  isCmd: _0x47331a,
  command: _0x36cfbe,
  args: _0x436d4f,
  q: _0x1eaad6,
  isGroup: _0x52133e,
  sender: _0x18aeb9,
  senderNumber: _0x4ae130,
  botNumber2: _0x4a87bb,
  botNumber: _0x4fd603,
  pushname: _0x148098,
  isMe: _0xd90f08,
  isOwner: _0x53dce9,
  groupMetadata: _0x127e9c,
  groupName: _0x4cc383,
  participants: _0x18ddd9,
  groupAdmins: _0x3586df,
  isBotAdmins: _0x4bea3e,
  isAdmins: _0x3be5fa,
  reply: _0x575039
}) => {
  try {
    if (config.MODE === "nonbutton") {
      const _0x37294b = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x4c00fd + "ytmp3 " + _0x1eaad6,
          'description': "Normal type song 🎶"
        }, {
          'title': '2',
          'rowId': _0x4c00fd + "ytdocs " + _0x1eaad6,
          'description': "Document type song 📁"
        }]
      }];
      const _0x5a1b2c = {
        text: "[👨‍💻𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n  *SELECT VIDEO QUALITY*",
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x37294b
      };
      const _0x478045 = {
        quoted: _0x6e585a
      };
      return await _0x54752c.replyList(_0x3d76b2, _0x5a1b2c, _0x478045);
    }
    if (config.MODE === "button") {
      let _0x4d64e6 = [{
        'title': "VAJIRA MD",
        'rows': [{
          'title': "Audio 🎧",
          'description': "Download Audio file",
          'id': _0x4c00fd + "ytmp3 " + data.url + '|' + data.title
        }, {
          'title': "Document 📁",
          'description': "Download Document file",
          'id': _0x4c00fd + "ytdocs " + data.url + '|' + data.title
        }]
      }];
      const _0xbcc3de = {
        title: "Click Here⎙",
        sections: _0x4d64e6
      };
      const _0x4fc97f = {
        url: data.thumbnail
      };
      const _0x17cf62 = {
        displayText: "Audio 🎧"
      };
      const _0x1bb343 = {
        buttonId: _0x4c00fd + "ytmp3  " + data.url + '|' + data.title,
        buttonText: _0x17cf62
      };
      const _0x733fc0 = {
        displayText: "Document 📁"
      };
      const _0x479397 = {
        buttonId: _0x4c00fd + "ytdocs  " + data.url + '|' + data.title,
        buttonText: _0x733fc0
      };
      const _0x36a8aa = {
        quoted: _0x3c6b50
      };
      _0x54752c.sendMessage(_0x3d76b2, {
        'image': _0x4fc97f,
        'caption': cap,
        'footer': config.FOOTER,
        'buttons': [_0x1bb343, _0x479397, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0xbcc3de)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x36a8aa);
    }
  } catch (_0x53e0a5) {
    _0x575039("*ERROR !!*");
    _0x2c8f2e(_0x53e0a5);
  }
});
const _0x594824 = {
  pattern: "sounddoc",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x594824, async (_0x44f393, _0x57c3b4, _0x10f16f, {
  from: _0x35de81,
  l: _0x1cf7c8,
  quoted: _0x405a95,
  body: _0x5d93d3,
  isCmd: _0x5b836a,
  command: _0xc8cd44,
  args: _0x4250c0,
  q: _0xe8cd99,
  isGroup: _0x200539,
  sender: _0xb43c1c,
  senderNumber: _0x3cbba2,
  botNumber2: _0xc85b88,
  botNumber: _0x2b04a2,
  pushname: _0x3889bc,
  isMe: _0x357d83,
  isOwner: _0x11bee6,
  groupMetadata: _0xf1ffc6,
  groupName: _0x521b36,
  participants: _0x385534,
  groupAdmins: _0x1223d1,
  isBotAdmins: _0x6ae1e8,
  isAdmins: _0x9a137b,
  reply: _0x271b00
}) => {
  try {
    const _0x115758 = {
      text: '📥',
      key: _0x57c3b4.key
    };
    const _0x11f3f0 = {
      react: _0x115758
    };
    await _0x44f393.sendMessage(_0x35de81, _0x11f3f0);
    const _0x1cedd6 = {
      text: "*Need link...*"
    };
    const _0x5a4ec6 = {
      quoted: _0x57c3b4
    };
    if (!_0xe8cd99) {
      return await _0x44f393.sendMessage(_0x35de81, _0x1cedd6, _0x5a4ec6);
    }
    const _0x31754d = await soundcloud(_0xe8cd99);
    let _0xdb47dd = "*📚 Name :* " + _0x31754d.judul + "\n*📺 Down Count :* " + _0x31754d.download_count;
    const _0x4ac5d3 = {
      url: _0x31754d.thumb
    };
    const _0x2886f4 = {
      image: _0x4ac5d3,
      caption: _0xdb47dd
    };
    const _0x5eb661 = {
      quoted: _0x57c3b4
    };
    await _0x44f393.sendMessage(_0x35de81, _0x2886f4, _0x5eb661);
    const _0x2b58fc = {
      url: _0x31754d.link
    };
    const _0x46bfc8 = {
      quoted: _0x57c3b4
    };
    let _0x2aeab3 = await _0x44f393.sendMessage(_0x35de81, {
      'document': _0x2b58fc,
      'mimetype': "audio/mpeg",
      'fileName': _0x31754d.judul + '.' + "mp3"
    }, _0x46bfc8);
    const _0x3468e3 = {
      text: '📁',
      key: _0x2aeab3.key
    };
    const _0x581b02 = {
      react: _0x3468e3
    };
    await _0x44f393.sendMessage(_0x35de81, _0x581b02);
    const _0x4a87bc = {
      text: '✔',
      key: _0x57c3b4.key
    };
    const _0x4af172 = {
      react: _0x4a87bc
    };
    await _0x44f393.sendMessage(_0x35de81, _0x4af172);
  } catch (_0x23c9ed) {
    _0x271b00("*ERROR !!*");
    _0x1cf7c8(_0x23c9ed);
  }
});
function _0x5a75(_0x170215, _0x82713c) {
  const _0x236385 = _0x2363();
  _0x5a75 = function (_0x5a754e, _0xa937c5) {
    _0x5a754e = _0x5a754e - 296;
    let _0x78c439 = _0x236385[_0x5a754e];
    return _0x78c439;
  };
  return _0x5a75(_0x170215, _0x82713c);
}
const _0x2f3e86 = {
  pattern: "soundaud",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2f3e86, async (_0x2e0e89, _0x480546, _0x2e2bc1, {
  from: _0x25a395,
  l: _0x21fe81,
  quoted: _0x12e582,
  body: _0x28698d,
  isCmd: _0x40e392,
  command: _0x4258f0,
  args: _0x402d0d,
  q: _0x1898a6,
  isGroup: _0x3ed202,
  sender: _0x2f3e0d,
  senderNumber: _0x72e0af,
  botNumber2: _0xb751bd,
  botNumber: _0x7cde10,
  pushname: _0x1111ca,
  isMe: _0x42963d,
  isOwner: _0x3f6adf,
  groupMetadata: _0x432214,
  groupName: _0x39635b,
  participants: _0x1a836a,
  groupAdmins: _0x3062fd,
  isBotAdmins: _0x55ee63,
  isAdmins: _0x356696,
  reply: _0x33f7a7
}) => {
  try {
    const _0x17b14b = {
      text: '📥',
      key: _0x480546.key
    };
    const _0x51842c = {
      react: _0x17b14b
    };
    await _0x2e0e89.sendMessage(_0x25a395, _0x51842c);
    const _0x120c2f = {
      text: "*Need link...*"
    };
    const _0x3b45f9 = {
      quoted: _0x480546
    };
    if (!_0x1898a6) {
      return await _0x2e0e89.sendMessage(_0x25a395, _0x120c2f, _0x3b45f9);
    }
    const _0x220311 = await soundcloud(_0x1898a6);
    let _0xa02cee = "*📚 Name :* " + _0x220311.judul + "\n*📺 Down Count :* " + _0x220311.download_count;
    const _0x56369d = {
      url: _0x220311.thumb
    };
    const _0x1c8106 = {
      image: _0x56369d,
      caption: _0xa02cee
    };
    const _0x58b1a0 = {
      quoted: _0x480546
    };
    await _0x2e0e89.sendMessage(_0x25a395, _0x1c8106, _0x58b1a0);
    const _0x402868 = {
      url: _0x220311.link
    };
    const _0xd79ede = {
      quoted: _0x480546
    };
    let _0x47ed58 = await _0x2e0e89.sendMessage(_0x25a395, {
      'audio': _0x402868,
      'mimetype': "audio/mpeg",
      'fileName': _0x220311.judul + '.' + "mp3"
    }, _0xd79ede);
    const _0x5096b0 = {
      text: '📁',
      key: _0x47ed58.key
    };
    const _0x375766 = {
      react: _0x5096b0
    };
    await _0x2e0e89.sendMessage(_0x25a395, _0x375766);
    const _0x4f4f00 = {
      text: '✔',
      key: _0x480546.key
    };
    const _0x23b6d8 = {
      react: _0x4f4f00
    };
    await _0x2e0e89.sendMessage(_0x25a395, _0x23b6d8);
  } catch (_0xd4b2f4) {
    _0x33f7a7("*ERROR !!*");
    _0x21fe81(_0xd4b2f4);
  }
});
const _0x5496a6 = {
  pattern: "yts",
  alias: ["ytsearch"],
  use: ".yts lelena",
  react: '🔎',
  desc: descsh,
  category: "search",
  filename: __filename
};
cmd(_0x5496a6, async (_0x2390ee, _0x533c95, _0x4b7cb4, {
  from: _0x5ef6e0,
  l: _0x283e26,
  quoted: _0x5e472b,
  body: _0x5638d4,
  isCmd: _0x1c953a,
  command: _0x2e0339,
  args: _0x13ca23,
  q: _0x37a7f0,
  isGroup: _0x494ac7,
  sender: _0x204f6b,
  senderNumber: _0x1e7e9e,
  botNumber2: _0x3ed046,
  botNumber: _0x26711d,
  pushname: _0x2368df,
  isMe: _0x48368d,
  isOwner: _0xe37901,
  groupMetadata: _0x379946,
  groupName: _0x4c8f3f,
  participants: _0x1b4b67,
  groupAdmins: _0x52c8c3,
  isBotAdmins: _0x4fac4e,
  isAdmins: _0xf08bd4,
  reply: _0x3e0934
}) => {
  try {
    if (!_0x37a7f0) {
      return await _0x3e0934(imgmsg);
    }
    if (isUrl(_0x37a7f0) && !ytreg(_0x37a7f0)) {
      return await _0x3e0934(imgmsg);
    }
    try {
      let _0x4d6f05 = require("yt-search");
      var _0x54eb85 = await _0x4d6f05(_0x37a7f0);
    } catch (_0x4d7789) {
      _0x283e26(_0x4d7789);
      const _0x42e2c7 = {
        text: "*Error !!*"
      };
      const _0xc4b1a5 = {
        quoted: _0x533c95
      };
      return await _0x2390ee.sendMessage(_0x5ef6e0, _0x42e2c7, _0xc4b1a5);
    }
    var _0x15db23 = '';
    _0x54eb85.all.map(_0xd8b415 => {
      _0x15db23 += " *🖲️" + _0xd8b415.title + "*\n🔗 " + _0xd8b415.url + "\n\n";
    });
    const _0x5ca158 = {
      text: _0x15db23
    };
    const _0x5bcedb = {
      quoted: _0x533c95
    };
    await _0x2390ee.sendMessage(_0x5ef6e0, _0x5ca158, _0x5bcedb);
  } catch (_0x3278a9) {
    _0x283e26(_0x3278a9);
    _0x3e0934("*Error !!*");
  }
});
const _0x5cd849 = {
  pattern: 'yt',
  use: ".yt [song name or link]",
  react: '🎬',
  desc: descyt,
  category: "download",
  filename: __filename
};
cmd(_0x5cd849, async (_0x146d5c, _0x351bf2, _0x362d75, {
  from: _0x3e28d6,
  prefix: _0x41c93c,
  l: _0x32ea5e,
  quoted: _0x2090f7,
  body: _0x4ab783,
  isCmd: _0x516ac9,
  command: _0x5b8056,
  args: _0x2405f1,
  q: _0x4a54da,
  isGroup: _0x323504,
  sender: _0x465568,
  senderNumber: _0x34c4c4,
  botNumber2: _0x298941,
  botNumber: _0x486fd2,
  pushname: _0x281351,
  isMe: _0x1530a7,
  isOwner: _0x3929d3,
  groupMetadata: _0x12ba55,
  groupName: _0x2cd66d,
  participants: _0x534c44,
  groupAdmins: _0x34010b,
  isBotAdmins: _0x55feb0,
  isAdmins: _0x4b163c,
  reply: _0x46ea18
}) => {
  try {
    if (!_0x4a54da) {
      return await _0x46ea18(imgmsg);
    }
    if (isUrl(_0x4a54da) && !ytreg(_0x4a54da)) {
      return await _0x46ea18(imgmsg);
    }
    _0x4a54da = convertYouTubeLink(_0x4a54da);
    const _0x557308 = await yts(_0x4a54da);
    const _0x2695d7 = _0x557308.videos[0];
    const _0x6fd370 = "📽️ *𝗣𝗢𝗗𝗜𝗬𝗔-ᴍᴅ ꜱᴏɴʜ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*📽️\n\n┌──────────────────\n\n*ℹ️ Title:* " + _0x2695d7.title + "\n*👁️‍🗨️ Views:* " + _0x2695d7.views + "\n*🕘 Duration:* " + _0x2695d7.timestamp + "\n*📌 Ago :* " + _0x2695d7.ago + "\n*🔗 Url:* " + _0x2695d7.url + " \n\n└──────────────────";
    if (config.MODE === "nonbutton") {
      if (isUrl(_0x4a54da) && _0x4a54da.includes("/shorts")) {
        const _0x5ce19c = [{
          'title': '',
          'rows': [{
            'title': '1',
            'rowId': _0x41c93c + ("ytmp3 " + _0x4a54da + '|' + _0x2695d7.title),
            'description': "Normal type song 🎶"
          }, {
            'title': '2',
            'rowId': _0x41c93c + ("ytdocs " + _0x4a54da + '|' + _0x2695d7.title),
            'description': "Document type song 📂"
          }]
        }];
        const _0x2b8fe1 = {
          text: _0x6fd370,
          footer: "*𝗣𝗢𝗗𝗜𝗬𝗔 ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
          buttonText: "```🔢 Reply below number you need song type,```",
          sections: _0x5ce19c
        };
        const _0x2a4e57 = {
          quoted: _0x351bf2
        };
        return await _0x146d5c.replyList(_0x3e28d6, _0x2b8fe1, _0x2a4e57);
      }
      if (ytreg(_0x4a54da)) {
        const _0x1559e3 = [{
          'title': '',
          'rows': [{
            'title': '1',
            'rowId': _0x41c93c + ("ytmp3 " + _0x4a54da + '|' + _0x2695d7.title),
            'description': "Normal type song 🎶"
          }, {
            'title': '2',
            'rowId': _0x41c93c + ("ytdocs " + _0x4a54da + '|' + _0x2695d7.title),
            'description': "Document type song 📂"
          }]
        }];
        const _0x547061 = {
          text: _0x6fd370,
          footer: "*𝗣𝗢𝗗𝗜𝗬𝗔-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
          buttonText: "```🔢 Reply below number you need song type,```",
          sections: _0x1559e3
        };
        const _0x1dc16d = {
          quoted: _0x351bf2
        };
        return await _0x146d5c.replyList(_0x3e28d6, _0x547061, _0x1dc16d);
      }
      const _0x4a4e5f = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x41c93c + ("ytmp3 " + _0x2695d7.url + '|' + _0x2695d7.title),
          'description': "Normal type song 🎶"
        }, {
          'title': '2',
          'rowId': _0x41c93c + ("ytdocs " + _0x2695d7.url + '|' + _0x2695d7.title),
          'description': "Document type song 📂"
        }]
      }];
      const _0x2a927e = {
        url: _0x2695d7.thumbnail
      };
      const _0x487ffe = {
        image: _0x2a927e,
        caption: _0x6fd370,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x4a4e5f
      };
      const _0x6dde45 = {
        quoted: _0x351bf2
      };
      return await _0x146d5c.replyList(_0x3e28d6, _0x487ffe, _0x6dde45);
    }
    if (config.MODE === "button") {
      let _0x1431cc = [{
        'title': "VAJIRA MD",
        'rows': [{
          'title': "Audio 🎧",
          'description': "Download Audio file",
          'id': _0x41c93c + "ytmp3 " + _0x2695d7.url + '|' + _0x2695d7.title
        }, {
          'title': "Document 📁",
          'description': "Download Document file",
          'id': _0x41c93c + "ytdocs " + _0x2695d7.url + '|' + _0x2695d7.title
        }]
      }];
      const _0x13388f = {
        title: "Click Here⎙",
        sections: _0x1431cc
      };
      const _0x4ae955 = {
        url: _0x2695d7.thumbnail
      };
      const _0x1d0bd2 = {
        displayText: "Audio 🎧"
      };
      const _0x38bc73 = {
        buttonId: _0x41c93c + "ytmp3  " + _0x2695d7.url + '|' + _0x2695d7.title,
        buttonText: _0x1d0bd2
      };
      const _0x4564b9 = {
        displayText: "Document 📁"
      };
      const _0x1aaa5f = {
        buttonId: _0x41c93c + "ytdocs  " + _0x2695d7.url + '|' + _0x2695d7.title,
        buttonText: _0x4564b9
      };
      const _0x315574 = {
        quoted: _0x362d75
      };
      _0x146d5c.sendMessage(_0x3e28d6, {
        'image': _0x4ae955,
        'caption': _0x6fd370,
        'footer': config.FOOTER,
        'buttons': [_0x38bc73, _0x1aaa5f, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x13388f)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x315574);
    }
  } catch (_0x450de3) {
    _0x46ea18("*ERROR !!*");
    _0x32ea5e(_0x450de3);
  }
});
const _0x16edf5 = {
  pattern: "video"
};
function _0x14e853(_0xa2b4ab, _0x154e16, _0x2d14ac, _0x3ba4e6, _0x2d89d5) {
  return _0x5a75(_0x154e16 + 0xae, _0x3ba4e6);
}
_0x16edf5.alias = ["ytvideo"];
_0x16edf5.use = ".video lelena";
_0x16edf5.react = "📽️";
_0x16edf5.desc = descv;
_0x16edf5.category = "download";
_0x16edf5.filename = __filename;
cmd(_0x16edf5, async (_0x4a955e, _0x2280b0, _0x4f52b0, {
  from: _0x1dab2d,
  prefix: _0x1f00f5,
  l: _0x5e2937,
  quoted: _0x347a67,
  body: _0x337057,
  isCmd: _0x172405,
  command: _0x4c56ca,
  args: _0x377cb3,
  q: _0x3b0d68,
  isGroup: _0x4fbf5a,
  sender: _0xea2c34,
  senderNumber: _0x332e15,
  botNumber2: _0x4b1de9,
  botNumber: _0x52cedf,
  pushname: _0x1ca72c,
  isMe: _0x1641ed,
  isOwner: _0xff315,
  groupMetadata: _0x1edaf6,
  groupName: _0x5be491,
  participants: _0x1a9781,
  groupAdmins: _0x44099c,
  isBotAdmins: _0x2536b0,
  isAdmins: _0x409841,
  reply: _0x247ed
}) => {
  try {
    if (!_0x3b0d68) {
      return await _0x247ed(imgmsg);
    }
    if (isUrl(_0x3b0d68) && !ytreg(_0x3b0d68)) {
      return await _0x247ed(imgmsg);
    }
    _0x3b0d68 = convertYouTubeLink(_0x3b0d68);
    const _0x156ff5 = await yts(_0x3b0d68);
    const _0x595bbc = _0x156ff5.videos[0];
    const _0x2ffd10 = "📽️ *𝗣𝗢𝗗𝗜𝗬𝗔-ᴍᴅ ꜱᴏɴɢ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*📽️\n\n┌──────────────────\n\n*ℹ️ Title:* " + _0x595bbc.title + "\n*👁️‍🗨️ Views:* " + _0x595bbc.views + "\n*🕘 Duration:* " + _0x595bbc.timestamp + "\n*📌 Ago :* " + _0x595bbc.ago + "\n*🔗 Url:* " + _0x595bbc.url + " \n\n└──────────────────";
    if (config.MODE === "nonbutton") {
      if (isUrl(_0x3b0d68) && _0x3b0d68.includes("/shorts")) {
        const _0x3dbc13 = [{
          'title': "*[1] NORMAL QUALITY 🎶*",
          'rows': [{
            'title': "    1.1",
            'rowId': _0x1f00f5 + ("240p " + _0x3b0d68),
            'description': "```240p```"
          }, {
            'title': "    1.2",
            'rowId': _0x1f00f5 + ("360p " + _0x3b0d68),
            'description': "```320p```"
          }, {
            'title': "    1.3",
            'rowId': _0x1f00f5 + ("480p " + _0x3b0d68),
            'description': "```480p```"
          }, {
            'title': "    1.4",
            'rowId': _0x1f00f5 + ("720p " + _0x3b0d68),
            'description': "```720p```"
          }, {
            'title': "    1.5",
            'rowId': _0x1f00f5 + ("1080p " + _0x3b0d68),
            'description': "```1080p```"
          }]
        }, {
          'title': "*[2] DOCUMENT QUALITY 📂*",
          'rows': [{
            'title': "    2.1",
            'rowId': _0x1f00f5 + ("24p " + _0x3b0d68),
            'description': "```240p```"
          }, {
            'title': "    2.2",
            'rowId': _0x1f00f5 + ("36p " + _0x3b0d68),
            'description': "```320p```"
          }, {
            'title': "    2.3",
            'rowId': _0x1f00f5 + ("48p " + _0x3b0d68),
            'description': "```480p```"
          }, {
            'title': "    2.4",
            'rowId': _0x1f00f5 + ("72p " + _0x3b0d68),
            'description': "```720p```"
          }, {
            'title': "    2.5",
            'rowId': _0x1f00f5 + ("108p " + _0x3b0d68),
            'description': "```1080p```"
          }]
        }];
        const _0x736f73 = {
          text: _0x2ffd10,
          footer: "*𝗣𝗢𝗗𝗜𝗬𝗔ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
          buttonText: "```🔢 Reply below number you need song type,```",
          sections: _0x3dbc13
        };
        const _0x5355b9 = {
          quoted: _0x2280b0
        };
        return await _0x4a955e.replyList(_0x1dab2d, _0x736f73, _0x5355b9);
      }
      if (ytreg(_0x3b0d68)) {
        const _0xa0a162 = [{
          'title': "*[1] NORMAL QUALITY 🎶*",
          'rows': [{
            'title': "    1.1",
            'rowId': _0x1f00f5 + ("240p " + _0x3b0d68),
            'description': "```240p```"
          }, {
            'title': "    1.2",
            'rowId': _0x1f00f5 + ("360p " + _0x3b0d68),
            'description': "```320p```"
          }, {
            'title': "    1.3",
            'rowId': _0x1f00f5 + ("480p " + _0x3b0d68),
            'description': "```480p```"
          }, {
            'title': "    1.4",
            'rowId': _0x1f00f5 + ("720p " + _0x3b0d68),
            'description': "```720p```"
          }, {
            'title': "    1.5",
            'rowId': _0x1f00f5 + ("1080p " + _0x3b0d68),
            'description': "```1080p```"
          }]
        }, {
          'title': "*[2] DOCUMENT QUALITY 📂*",
          'rows': [{
            'title': "    2.1",
            'rowId': _0x1f00f5 + ("24p " + _0x3b0d68),
            'description': "```240p```"
          }, {
            'title': "    2.2",
            'rowId': _0x1f00f5 + ("36p " + _0x3b0d68),
            'description': "```320p```"
          }, {
            'title': "    2.3",
            'rowId': _0x1f00f5 + ("48p " + _0x3b0d68),
            'description': "```480p```"
          }, {
            'title': "    2.4",
            'rowId': _0x1f00f5 + ("72p " + _0x3b0d68),
            'description': "```720p```"
          }, {
            'title': "    2.5",
            'rowId': _0x1f00f5 + ("108p " + _0x3b0d68),
            'description': "```1080p```"
          }]
        }];
        const _0x137b6e = {
          text: _0x2ffd10,
          footer: config.FOOTER,
          buttonText: "🔢 Reply below number,",
          sections: _0xa0a162
        };
        const _0x21086b = {
          quoted: _0x2280b0
        };
        return await _0x4a955e.replyList(_0x1dab2d, _0x137b6e, _0x21086b);
      }
      const _0x45c28b = [{
        'title': "*[1] NORMAL QUALITY 🎶*",
        'rows': [{
          'title': "    1.1",
          'rowId': _0x1f00f5 + ("240p " + _0x595bbc.url),
          'description': "```240p```"
        }, {
          'title': "    1.2",
          'rowId': _0x1f00f5 + ("360p " + _0x595bbc.url),
          'description': "```320p```"
        }, {
          'title': "    1.3",
          'rowId': _0x1f00f5 + ("480p " + _0x595bbc.url),
          'description': "```480p```"
        }, {
          'title': "    1.4",
          'rowId': _0x1f00f5 + ("720p " + _0x595bbc.url),
          'description': "```720p```"
        }, {
          'title': "    1.5",
          'rowId': _0x1f00f5 + ("1080p " + _0x595bbc.url),
          'description': "```1080p```"
        }]
      }, {
        'title': "*[2] DOCUMENT QUALITY 📂*",
        'rows': [{
          'title': "    2.1",
          'rowId': _0x1f00f5 + ("24p " + _0x595bbc.url),
          'description': "```240p```"
        }, {
          'title': "    2.2",
          'rowId': _0x1f00f5 + ("36p " + _0x595bbc.url),
          'description': "```320p```"
        }, {
          'title': "    2.3",
          'rowId': _0x1f00f5 + ("48p " + _0x595bbc.url),
          'description': "```480p```"
        }, {
          'title': "    2.4",
          'rowId': _0x1f00f5 + ("72p " + _0x595bbc.url),
          'description': "```720p```"
        }, {
          'title': "    2.5",
          'rowId': _0x1f00f5 + ("108p " + _0x595bbc.url),
          'description': "```1080p```"
        }]
      }];
      const _0x2819a1 = {
        url: _0x595bbc.thumbnail
      };
      const _0x5d7a06 = {
        caption: _0x2ffd10,
        image: _0x2819a1,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x45c28b
      };
      const _0x17ef27 = {
        quoted: _0x2280b0
      };
      return await _0x4a955e.replyList(_0x1dab2d, _0x5d7a06, _0x17ef27);
    }
    if (config.MODE === "button") {
      let _0x1b70f1 = [{
        'title': "Normal types videos 🎧",
        'rows': [{
          'header': '',
          'title': "240P VIDEO",
          'description': "Download 240 quality video",
          'id': _0x1f00f5 + "240p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x1f00f5 + "360p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x1f00f5 + "480p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x1f00f5 + "720p " + _0x595bbc.url
        }, {
          'header': '',
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x1f00f5 + "1080p " + _0x595bbc.url
        }]
      }, {
        'title': "Document types videos 📁",
        'rows': [{
          'header': '',
          'title': "240P VIDEO",
          'description': "Download 240 quality video",
          'id': _0x1f00f5 + "24p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x1f00f5 + "36p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x1f00f5 + "48p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x1f00f5 + "72p " + _0x595bbc.url
        }, {
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x1f00f5 + "108p " + _0x595bbc.url
        }]
      }];
      const _0x4c21c2 = {
        title: "Click Here⎙",
        sections: _0x1b70f1
      };
      const _0x6caa69 = {
        url: _0x595bbc.thumbnail
      };
      const _0x4c7c8e = {
        displayText: "NORMAL VIDEO"
      };
      const _0xd21293 = {
        buttonId: _0x1f00f5 + "360p  " + anu.url,
        buttonText: _0x4c7c8e
      };
      const _0xb769e2 = {
        displayText: "DOCUMENT VIDEO"
      };
      const _0x24ee7f = {
        buttonId: _0x1f00f5 + "36p  " + anu.url,
        buttonText: _0xb769e2
      };
      const _0x54825e = {
        quoted: _0x4f52b0
      };
      _0x4a955e.sendMessage(_0x1dab2d, {
        'image': _0x6caa69,
        'caption': _0x2ffd10,
        'footer': config.FOOTER,
        'buttons': [_0xd21293, _0x24ee7f, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x4c21c2)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x54825e);
    }
  } catch (_0x37f16c) {
    _0x247ed("*Error !!*");
    _0x5e2937(_0x37f16c);
  }
});
const _0x1725c9 = {
  pattern: "song",
  alias: ["ytsong"],
  use: ".song lelena",
  react: '🎧',
  desc: descs,
  category: "download",
  filename: __filename
};
function _0xa09a03(_0x134d10, _0x239edd, _0x4df55a, _0x3d0170, _0x506b15) {
  return _0x5a75(_0x134d10 + 0x61, _0x506b15);
}
cmd(_0x1725c9, async (_0x49d874, _0x17b7b9, _0x5d3902, {
  from: _0xb54e7b,
  prefix: _0x33ed3a,
  l: _0x546ac0,
  quoted: _0x12035d,
  body: _0x1ab7bc,
  isCmd: _0x3dec4a,
  command: _0x2ff8a9,
  args: _0x21fd05,
  q: _0x15524e,
  isGroup: _0x2988b9,
  sender: _0x2c010a,
  senderNumber: _0x211774,
  botNumber2: _0x21f3e9,
  botNumber: _0x3e4221,
  pushname: _0xb92939,
  isMe: _0x158163,
  isOwner: _0x59abbb,
  groupMetadata: _0x4e0fd3,
  groupName: _0x4c2e03,
  participants: _0x33c033,
  groupAdmins: _0x35f4be,
  isBotAdmins: _0x33f528,
  isAdmins: _0x259fb2,
  reply: _0x3ee00a
}) => {
  try {
    if (!_0x15524e) {
      return await _0x3ee00a(imgmsg);
    }
    if (isUrl(_0x15524e) && !ytreg(_0x15524e)) {
      return await _0x3ee00a(imgmsg);
    }
    _0x15524e = convertYouTubeLink(_0x15524e);
    const _0x4d3311 = await yts(_0x15524e);
    const _0xa34cfe = _0x4d3311.videos[0];
    const _0x2bde5b = "📽️ *𝗣𝗢𝗗𝗜𝗬𝗔-ᴍᴅ ꜱᴏɴʜ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*📽️\n\n┌──────────────────\n\n*ℹ️ Title:* " + _0xa34cfe.title + "\n*👁️‍🗨️ Views:* " + _0xa34cfe.views + "\n*🕘 Duration:* " + _0xa34cfe.timestamp + "\n*📌 Ago :* " + _0xa34cfe.ago + "\n*🔗 Url:* " + _0xa34cfe.url + " \n\n└──────────────────";
    if (config.MODE === "nonbutton") {
      if (isUrl(_0x15524e) && _0x15524e.includes("/shorts")) {
        const _0x8cad19 = [{
          'title': '',
          'rows': [{
            'title': '1',
            'rowId': _0x33ed3a + ("ytmp3 " + _0x15524e + '|' + _0xa34cfe.title),
            'description': "Normal type song 🎶"
          }, {
            'title': '2',
            'rowId': _0x33ed3a + ("ytdocs " + _0x15524e + '|' + _0xa34cfe.title),
            'description': "Document type song 📂"
          }]
        }];
        const _0x4a2506 = {
          text: "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n   *SELECT SONG TYPE*",
          footer: "*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
          buttonText: "```🔢 Reply below number you need song type,```",
          sections: _0x8cad19
        };
        const _0x2f5b2b = {
          quoted: _0x17b7b9
        };
        return await _0x49d874.replyList(_0xb54e7b, _0x4a2506, _0x2f5b2b);
      }
      if (ytreg(_0x15524e)) {
        const _0x4e18e7 = [{
          'title': '',
          'rows': [{
            'title': '1',
            'rowId': _0x33ed3a + ("ytmp3 " + _0x15524e + '|' + _0xa34cfe.title),
            'description': "Normal type song 🎶"
          }, {
            'title': '2',
            'rowId': _0x33ed3a + ("ytdocs " + _0x15524e + '|' + _0xa34cfe.title),
            'description': "Document type song 📂"
          }]
        }];
        const _0x29c855 = {
          text: "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n*SELECT SONG TYPE*",
          footer: "*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
          buttonText: "```🔢 Reply below number you need song type,```",
          sections: _0x4e18e7
        };
        const _0x14e2fc = {
          quoted: _0x17b7b9
        };
        return await _0x49d874.replyList(_0xb54e7b, _0x29c855, _0x14e2fc);
      }
      const _0x4bc2f5 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x33ed3a + ("ytmp3 " + _0xa34cfe.url + '|' + _0xa34cfe.title),
          'description': "Normal type song 🎶"
        }, {
          'title': '2',
          'rowId': _0x33ed3a + ("ytdocs " + _0xa34cfe.url + '|' + _0xa34cfe.title),
          'description': "Document type song 📂"
        }]
      }];
      const _0x515a5a = {
        url: _0xa34cfe.thumbnail
      };
      const _0x31fc04 = {
        image: _0x515a5a,
        caption: _0x2bde5b,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x4bc2f5
      };
      const _0x22eba4 = {
        quoted: _0x17b7b9
      };
      return await _0x49d874.replyList(_0xb54e7b, _0x31fc04, _0x22eba4);
    }
    if (config.MODE === "button") {
      let _0x342b0c = [{
        'title': "VAJIRA MD",
        'rows': [{
          'title': "Audio 🎧",
          'description': "Download Audio file",
          'id': _0x33ed3a + "ytmp3 " + _0xa34cfe.url + '|' + _0xa34cfe.title
        }, {
          'title': "Document 📁",
          'description': "Download Document file",
          'id': _0x33ed3a + "ytdocs " + _0xa34cfe.url + '|' + _0xa34cfe.title
        }]
      }];
      const _0x465c5c = {
        title: "Click Here⎙",
        sections: _0x342b0c
      };
      const _0x1827e5 = {
        url: _0xa34cfe.thumbnail
      };
      const _0x1de954 = {
        displayText: "Audio 🎧"
      };
      const _0x4ffb7d = {
        buttonId: _0x33ed3a + "ytmp3  " + _0xa34cfe.url + '|' + _0xa34cfe.title,
        buttonText: _0x1de954
      };
      const _0x158c45 = {
        displayText: "Document 📁"
      };
      const _0x477043 = {
        buttonId: _0x33ed3a + "ytdocs  " + _0xa34cfe.url + '|' + _0xa34cfe.title,
        buttonText: _0x158c45
      };
      const _0x136ea9 = {
        quoted: _0x5d3902
      };
      _0x49d874.sendMessage(_0xb54e7b, {
        'image': _0x1827e5,
        'caption': _0x2bde5b,
        'footer': config.FOOTER,
        'buttons': [_0x4ffb7d, _0x477043, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x465c5c)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x136ea9);
    }
  } catch (_0x43ddb5) {
    _0x3ee00a("*ERROR !!*");
    _0x546ac0(_0x43ddb5);
  }
});
const _0x3bc5b0 = {
  alias: ["selectaud"],
  filename: __filename
};
cmd(_0x3bc5b0, async (_0x758afc, _0x377110, _0x3cffd7, {
  from: _0x277ea1,
  l: _0x5d2706,
  quoted: _0x300b06,
  prefix: _0x53598b,
  body: _0xfac31f,
  isCmd: _0x4f773d,
  command: _0xa76a15,
  args: _0x18e457,
  q: _0x426c31,
  isGroup: _0xfa1d32,
  sender: _0x18f395,
  senderNumber: _0x5f1c33,
  botNumber2: _0x2d1a20,
  botNumber: _0x365091,
  pushname: _0x1df7e5,
  isMe: _0x35cc10,
  isOwner: _0x520c74,
  groupMetadata: _0x21040d,
  groupName: _0x116541,
  participants: _0x349cee,
  groupAdmins: _0x38decb,
  isBotAdmins: _0x405870,
  isAdmins: _0x2fab40,
  reply: _0xd56a11
}) => {
  try {
    if (config.MODE === "nonbutton") {
      const _0xf9151b = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x53598b + ("ytmp3 " + _0x426c31 + '|' + data.title),
          'description': "Normal type song 🎶"
        }, {
          'title': '2',
          'rowId': _0x53598b + ("ytdocs " + _0x426c31 + '|' + data.title),
          'description': "Document type song 📂"
        }]
      }];
      const _0x219a9f = {
        text: "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n  *SELECT VIDEO QUALITY*",
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0xf9151b
      };
      const _0x2074ea = {
        quoted: _0x377110
      };
      return await _0x758afc.replyList(_0x277ea1, _0x219a9f, _0x2074ea);
    }
    if (config.MODE === "button") {
      let _0x23bfba = [{
        'title': "VAJIRA MD",
        'rows': [{
          'title': "Audio 🎧",
          'description': "Download Audio file",
          'id': _0x53598b + "ytmp3 " + _0x426c31 + '|' + data.title
        }, {
          'title': "Document 📁",
          'description': "Download Document file",
          'id': _0x53598b + "ytdocs " + _0x426c31 + '|' + data.title
        }]
      }];
      const _0x2322be = {
        title: "Click Here⎙",
        sections: _0x23bfba
      };
      const _0x3eee13 = {
        displayText: "Audio 🎧"
      };
      const _0x48acb0 = {
        buttonId: _0x53598b + "ytmp3  " + _0x426c31 + '|' + data.title,
        buttonText: _0x3eee13
      };
      const _0x13600c = {
        displayText: "Document 📁"
      };
      const _0x24487b = {
        buttonId: _0x53598b + "ytdocs  " + _0x426c31 + '|' + data.title,
        buttonText: _0x13600c
      };
      const _0x2cc190 = {
        quoted: _0x3cffd7
      };
      _0x758afc.sendMessage(_0x277ea1, {
        'text': cap,
        'footer': config.FOOTER,
        'buttons': [_0x48acb0, _0x24487b, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x2322be)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x2cc190);
    }
  } catch (_0x5d0dde) {
    _0xd56a11("*ERROR !!*");
    _0x5d2706(_0x5d0dde);
  }
});
const _0x2b3270 = {};
_0x2b3270.alias = ["selectvid"];
function _0x3d8627(_0xaef693, _0x2ba89f, _0x2d1a41, _0x1b7318, _0x1c338d) {
  return _0x5a75(_0xaef693 + 0x2d3, _0x1b7318);
}
_0x2b3270.filename = __filename;
cmd(_0x2b3270, async (_0x25dd33, _0x3d873a, _0x54374f, {
  from: _0x274dec,
  l: _0x1f50ee,
  quoted: _0x39a238,
  prefix: _0x1a38c3,
  body: _0x498622,
  isCmd: _0x13e186,
  command: _0x143099,
  args: _0x46aefe,
  q: _0x108066,
  isGroup: _0x333f36,
  sender: _0x36392f,
  senderNumber: _0x461d00,
  botNumber2: _0x54b6b6,
  botNumber: _0x547562,
  pushname: _0x216f3d,
  isMe: _0x5eca30,
  isOwner: _0x53781f,
  groupMetadata: _0x2688a5,
  groupName: _0xa0073f,
  participants: _0x10da09,
  groupAdmins: _0x426004,
  isBotAdmins: _0x1ffb42,
  isAdmins: _0x27e403,
  reply: _0x1a2c79
}) => {
  try {
    if (config.MODE === "nonbutton") {
      const _0x3d0d79 = [{
        'title': "*[1] NORMAL QUALITY 🎶*",
        'rows': [{
          'title': "    1.1",
          'rowId': _0x1a38c3 + ("360p " + _0x108066),
          'description': "```360p```"
        }, {
          'title': "    1.2",
          'rowId': _0x1a38c3 + ("480p " + _0x108066),
          'description': "```480p```"
        }, {
          'title': "    1.3",
          'rowId': _0x1a38c3 + ("720p " + _0x108066),
          'description': "```720p```"
        }, {
          'title': "    1.4",
          'rowId': _0x1a38c3 + ("1080p " + _0x108066),
          'description': "```1080p```"
        }, {
          'title': "    1.5",
          'rowId': _0x1a38c3 + ("1440p " + _0x108066),
          'description': "```1440p```"
        }, {
          'title': "    1.6",
          'rowId': _0x1a38c3 + ("40k " + _0x108066),
          'description': "```4K```"
        }]
      }, {
        'title': "*[2] DOCUMENT QUALITY 📂*",
        'rows': [{
          'title': "    2.1",
          'rowId': _0x1a38c3 + ("36p " + _0x108066),
          'description': "```360p```"
        }, {
          'title': "    2.2",
          'rowId': _0x1a38c3 + ("48p " + _0x108066),
          'description': "```480p```"
        }, {
          'title': "    2.3",
          'rowId': _0x1a38c3 + ("72p " + _0x108066),
          'description': "```720p```"
        }, {
          'title': "    2.4",
          'rowId': _0x1a38c3 + ("108p " + _0x108066),
          'description': "```1080p```"
        }, {
          'title': "    2.5",
          'rowId': _0x1a38c3 + ("144p " + _0x108066),
          'description': "```1440p```"
        }, {
          'title': "    2.6",
          'rowId': _0x1a38c3 + ("4k " + _0x108066),
          'description': "```4K```"
        }]
      }];
      const _0x27aaf9 = {
        text: "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n  *SELECT VIDEO QUALITY*",
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x3d0d79
      };
      const _0x4ad2ee = {
        quoted: _0x3d873a
      };
      return await _0x25dd33.replyList(_0x274dec, _0x27aaf9, _0x4ad2ee);
    }
    if (config.MODE === "button") {
      let _0x405158 = [{
        'title': "©𝗣𝗢𝗗𝗜𝗬𝗔 💚",
        'rows': [{
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x1a38c3 + "360p " + _0x108066
        }, {
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x1a38c3 + "480p " + _0x108066
        }, {
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x1a38c3 + "720p " + _0x108066
        }, {
          'header': '',
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x1a38c3 + "1080p " + _0x108066
        }, {
          'header': '',
          'title': "1440 VIDEO",
          'description': "Download 1440 quality video",
          'id': _0x1a38c3 + "1440p " + _0x108066
        }, {
          'header': '',
          'header': '',
          'title': "4K VIDEO",
          'description': "Download 4K quality video",
          'id': _0x1a38c3 + "40k " + _0x108066
        }]
      }, {
        'title': '2',
        'rows': [{
          'header': '',
          'title': "360P VIDEO",
          'description': "Download 360 quality video",
          'id': _0x1a38c3 + "36p " + _0x108066
        }, {
          'header': '',
          'title': "480P VIDEO",
          'description': "Download 480 quality video",
          'id': _0x1a38c3 + "48p " + _0x108066
        }, {
          'header': '',
          'title': "720P VIDEO",
          'description': "Download 720 quality video",
          'id': _0x1a38c3 + "72p " + _0x108066
        }, {
          'header': '',
          'title': "1080P VIDEO",
          'description': "Download 1080 quality video",
          'id': _0x1a38c3 + "108p " + _0x108066
        }, {
          'header': '',
          'title': "1440 VIDEO",
          'description': "Download 1440 quality video",
          'id': _0x1a38c3 + "144p " + _0x108066
        }, {
          'header': '',
          'header': '',
          'title': "4K VIDEO",
          'description': "Download 4K quality video",
          'id': _0x1a38c3 + "4k " + _0x108066
        }]
      }];
      const _0x11bfa3 = {
        title: "Click Here⎙",
        sections: _0x405158
      };
      const _0x48e4ca = {
        url: data.thumbnail
      };
      const _0x4a7820 = {
        displayText: "NORMAL VIDEO"
      };
      const _0x5d8177 = {
        buttonId: _0x1a38c3 + "360p  " + _0x108066,
        buttonText: _0x4a7820
      };
      const _0x468bd0 = {
        displayText: "DOCUMENT VIDEO"
      };
      const _0x2845b9 = {
        buttonId: _0x1a38c3 + "36p  " + _0x108066,
        buttonText: _0x468bd0
      };
      const _0x3015b2 = {
        quoted: _0x54374f
      };
      _0x25dd33.sendMessage(_0x274dec, {
        'image': _0x48e4ca,
        'caption': cap,
        'footer': config.FOOTER,
        'buttons': [_0x5d8177, _0x2845b9, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x11bfa3)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x3015b2);
    }
  } catch (_0x59406c) {
    _0x1a2c79("*Error !!*");
    _0x1f50ee(_0x59406c);
  }
});
const _0x165187 = {
  pattern: "ytmp4",
  use: ".ytmp4 <yt url>",
  react: '🎧',
  desc: "Download yt song.",
  category: "download",
  filename: __filename
};
cmd(_0x165187, async (_0x50ad52, _0x2755e5, _0x5da124, {
  from: _0x5ea837,
  q: _0x3e77eb,
  reply: _0x2bd48f
}) => {
  try {
    if (!_0x3e77eb) {
      return _0x2bd48f("Harap masukkan link YouTube.");
    }
    const _0x2bc9dc = await ytmp3(_0x3e77eb, "mp4");
    console.log("Title:", _0x2bc9dc.title);
    console.log("Download Link:", _0x2bc9dc.link);
    const _0x1e78ff = {
      'video': await getBuffer(_0x2bc9dc.link),
      'caption': _0x2bc9dc.title + "\n\n" + config.FOOTER,
      'mimetype': "video/mp4",
      'fileName': _0x2bc9dc.title + ".mp4"
    };
    await _0x50ad52.sendMessage(_0x5ea837, _0x1e78ff);
    const _0x3ffa9f = {
      text: '✅',
      key: _0x2755e5.key
    };
    const _0x4c608 = {
      react: _0x3ffa9f
    };
    await _0x50ad52.sendMessage(_0x5ea837, _0x4c608);
  } catch (_0x30d16e) {
    console.error("Error fetching or sending", _0x30d16e);
    const _0xc19fa1 = {
      quoted: _0x2755e5
    };
    await _0x50ad52.sendMessage(_0x5ea837, "*Error fetching or sending *", _0xc19fa1);
  }
});
const _0x1ba885 = {
  pattern: "ytmp3",
  dontAddCommandList: true,
  filename: __filename
};
function _0x6fe6e(_0x26a2e4, _0x4e6b15, _0x5c4c62, _0x1ba892, _0xbf6106) {
  return _0x5a75(_0x1ba892 - 0x230, _0xbf6106);
}
cmd(_0x1ba885, async (_0x53a32b, _0x1809eb, _0x4d6dc9, {
  from: _0x35fc4c,
  q: _0x3f292e,
  reply: _0x15e042
}) => {
  try {
    const _0x3111ff = {
      text: '📥',
      key: _0x1809eb.key
    };
    const _0x1b4743 = {
      react: _0x3111ff
    };
    await _0x53a32b.sendMessage(_0x35fc4c, _0x1b4743);
    const _0x42e645 = {
      text: "*Need link...*"
    };
    const _0x3f015b = {
      quoted: _0x1809eb
    };
    if (!_0x3f292e) {
      return await _0x53a32b.sendMessage(_0x35fc4c, _0x42e645, _0x3f015b);
    }
    const _0x2728b9 = _0x3f292e.split('|')[0];
    const _0x5ae7fc = _0x3f292e.split('|')[1] || "𝗣𝗢𝗗𝗜𝗬𝗔-MD";
    const _0x14b9da = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/ytmp3?url=" + _0x2728b9);
    const _0x47f492 = {
      'audio': await getBuffer(_0x14b9da.result.dl_link),
      'caption': _0x5ae7fc + "\n\n" + config.FOOTER,
      'mimetype': "audio/mpeg",
      'fileName': _0x5ae7fc + ".mp3"
    };
    await _0x53a32b.sendMessage(_0x35fc4c, _0x47f492);
    const _0x3c7afc = {
      text: '✔',
      key: _0x1809eb.key
    };
    const _0x36c74b = {
      react: _0x3c7afc
    };
    await _0x53a32b.sendMessage(_0x35fc4c, _0x36c74b);
  } catch (_0x5a6733) {
    _0x15e042("*ERROR !!*");
    l(_0x5a6733);
  }
});
const _0x2a6282 = {
  pattern: "ytdocs",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2a6282, async (_0x15dcdf, _0x4fff8e, _0x2dcf06, {
  from: _0x9cdfef,
  q: _0x426e86,
  reply: _0x20853f
}) => {
  try {
    const _0x360d3d = {
      text: '📥',
      key: _0x4fff8e.key
    };
    const _0x1506b7 = {
      react: _0x360d3d
    };
    await _0x15dcdf.sendMessage(_0x9cdfef, _0x1506b7);
    const _0x1a626c = {
      text: "*Need link...*"
    };
    const _0x53561c = {
      quoted: _0x4fff8e
    };
    if (!_0x426e86) {
      return await _0x15dcdf.sendMessage(_0x9cdfef, _0x1a626c, _0x53561c);
    }
    const _0x3b3294 = _0x426e86.split('|')[0];
    const _0x5c4e41 = _0x426e86.split('|')[1] || "𝗣𝗢𝗗𝗜𝗬𝗔-MD";
    const _0x1ed4dc = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/ytmp3?url=" + _0x3b3294);
    const _0x3f5301 = {
      'document': await getBuffer(_0x1ed4dc.result.dl_link),
      'caption': _0x5c4e41 + "\n\n" + config.FOOTER,
      'mimetype': "audio/mpeg",
      'fileName': _0x5c4e41 + ".mp3"
    };
    await _0x15dcdf.sendMessage(_0x9cdfef, _0x3f5301);
    const _0x5e1c82 = {
      text: '✔',
      key: _0x4fff8e.key
    };
    const _0xeb93fc = {
      react: _0x5e1c82
    };
    await _0x15dcdf.sendMessage(_0x9cdfef, _0xeb93fc);
  } catch (_0x3c0990) {
    _0x20853f("*ERROR !!*");
    l(_0x3c0990);
  }
});
const _0x231f19 = {
  pattern: "ytdocv",
  use: ".ytdoc <yt url>",
  react: '🎧',
  desc: "Download yt song.",
  category: "download",
  filename: __filename
};
cmd(_0x231f19, async (_0x1cf4b9, _0x5e2738, _0x422866, {
  from: _0x3a3fae,
  l: _0x5dd01e,
  quoted: _0x3aa0e9,
  body: _0x4b6392,
  isCmd: _0x4177fb,
  command: _0x40e247,
  args: _0x5b1705,
  q: _0x42acbe,
  isGroup: _0xf97ac6,
  sender: _0x526e40,
  senderNumber: _0x3d5fcd,
  botNumber2: _0x543940,
  botNumber: _0xba38c3,
  pushname: _0x393f06,
  isMe: _0x2d4688,
  isOwner: _0x9307aa,
  groupMetadata: _0x12390e,
  groupName: _0x59fadb,
  participants: _0x304c2a,
  groupAdmins: _0x329cad,
  isBotAdmins: _0x567f25,
  isAdmins: _0x112733,
  reply: _0xc2ac17
}) => {
  try {
    if (!ytreg(_0x42acbe)) {
      return await _0xc2ac17(urlneed);
    }
    const _0x2f99e1 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/ytmp4?url=" + _0x42acbe);
    _0x42acbe = convertYouTubeLink(_0x42acbe);
    const _0x2e0794 = await yts(_0x42acbe);
    const _0x419896 = _0x2e0794.videos[0];
    const _0x47a552 = {
      'document': await getBuffer(_0x2f99e1.result.dl_link),
      'caption': _0x419896.title + "\n\n" + config.FOOTER,
      'mimetype': "video/mp4",
      'fileName': _0x419896.title + ".mp4"
    };
    await _0x1cf4b9.sendMessage(_0x3a3fae, _0x47a552);
    const _0x37d1b4 = {
      text: '✅',
      key: _0x5e2738.key
    };
    const _0x18a86b = {
      react: _0x37d1b4
    };
    await _0x1cf4b9.sendMessage(_0x3a3fae, _0x18a86b);
  } catch (_0x2e74fc) {
    console.error("Error fetching or sending", _0x2e74fc);
    const _0x3ba304 = {
      quoted: _0x5e2738
    };
    await _0x1cf4b9.sendMessage(_0x3a3fae, "*Error fetching or sending *", _0x3ba304);
  }
});
const _0x4fb0f7 = {
  pattern: "360p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4fb0f7, async (_0x6458b, _0x1e29f0, _0xd71adb, {
  from: _0x1cc0cc,
  q: _0x262301,
  reply: _0x3105d7
}) => {
  try {
    if (!ytreg(_0x262301)) {
      return await _0x3105d7(urlneed);
    }
    _0x262301 = convertYouTubeLink(_0x262301);
    const _0x2d9410 = await yts(_0x262301);
    const _0x5e52aa = _0x2d9410.videos[0];
    const _0x2c7fc3 = _0x262301;
    const _0x11bad4 = await ytmp4q.download(_0x2c7fc3, "360");
    console.log("Download details:", _0x11bad4);
    const _0x1cea9d = {
      url: _0x11bad4.downloadUrl
    };
    const _0x36f764 = {
      quoted: _0x1e29f0
    };
    _0x6458b.sendMessage(_0x1cc0cc, {
      'video': _0x1cea9d,
      'mimetype': "video/mp4",
      'fileName': _0x5e52aa.title + ".mp4",
      'caption': _0x5e52aa.title + "\n\n" + config.FOOTER
    }, _0x36f764);
    const _0x2ac1b2 = {
      text: '✅',
      key: _0xd71adb.key
    };
    const _0x31595e = {
      react: _0x2ac1b2
    };
    await _0x6458b.sendMessage(_0x1cc0cc, _0x31595e);
  } catch (_0x56f29f) {
    console.error("Error fetching or sending", _0x56f29f);
    const _0x58ab19 = {
      quoted: _0xd71adb
    };
    await _0x6458b.sendMessage(_0x1cc0cc, "*Error fetching or sending *", _0x58ab19);
  }
});
const _0x390fef = {
  pattern: "480p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x390fef, async (_0x393cf2, _0x16ed18, _0x3e66d7, {
  from: _0x2e89cd,
  q: _0x5093c1,
  reply: _0x50fbfa
}) => {
  try {
    if (!ytreg(_0x5093c1)) {
      return await _0x50fbfa(urlneed);
    }
    _0x5093c1 = convertYouTubeLink(_0x5093c1);
    const _0x387380 = await yts(_0x5093c1);
    const _0x59a103 = _0x387380.videos[0];
    const _0x40275f = _0x5093c1;
    const _0xb6688f = await ytmp4q.download(_0x40275f, "480");
    console.log("Download details:", _0xb6688f);
    const _0xfb9290 = {
      url: _0xb6688f.downloadUrl
    };
    const _0x90dd19 = {
      quoted: _0x16ed18
    };
    _0x393cf2.sendMessage(_0x2e89cd, {
      'video': _0xfb9290,
      'mimetype': "video/mp4",
      'fileName': _0x59a103.title + ".mp4",
      'caption': _0x59a103.title + "\n\n" + config.FOOTER
    }, _0x90dd19);
    const _0x2ee2da = {
      text: '✅',
      key: _0x3e66d7.key
    };
    const _0x438cfa = {
      react: _0x2ee2da
    };
    await _0x393cf2.sendMessage(_0x2e89cd, _0x438cfa);
  } catch (_0x4cf3a8) {
    console.error("Error fetching or sending", _0x4cf3a8);
    const _0x3a12be = {
      quoted: _0x3e66d7
    };
    await _0x393cf2.sendMessage(_0x2e89cd, "*Error fetching or sending *", _0x3a12be);
  }
});
const _0x3d8121 = {
  pattern: "720p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3d8121, async (_0x476421, _0x5663a8, _0x18304c, {
  from: _0x5bca4d,
  q: _0x24327e,
  reply: _0x1643cb
}) => {
  try {
    if (!ytreg(_0x24327e)) {
      return await _0x1643cb(urlneed);
    }
    _0x24327e = convertYouTubeLink(_0x24327e);
    const _0x26af45 = await yts(_0x24327e);
    const _0x59bcab = _0x26af45.videos[0];
    const _0x19c24d = _0x24327e;
    const _0x2e8b48 = await ytmp4q.download(_0x19c24d, "720");
    console.log("Download details:", _0x2e8b48);
    const _0x1af759 = {
      url: _0x2e8b48.downloadUrl
    };
    const _0x56249a = {
      quoted: _0x5663a8
    };
    _0x476421.sendMessage(_0x5bca4d, {
      'video': _0x1af759,
      'mimetype': "video/mp4",
      'fileName': _0x59bcab.title + ".mp4",
      'caption': _0x59bcab.title + "\n\n" + config.FOOTER
    }, _0x56249a);
    const _0x57a51c = {
      text: '✅',
      key: _0x18304c.key
    };
    const _0x15c9fc = {
      react: _0x57a51c
    };
    await _0x476421.sendMessage(_0x5bca4d, _0x15c9fc);
  } catch (_0x5cb132) {
    console.error("Error fetching or sending", _0x5cb132);
    const _0x2e1861 = {
      quoted: _0x18304c
    };
    await _0x476421.sendMessage(_0x5bca4d, "*Error fetching or sending *", _0x2e1861);
  }
});
(function () {
  const _0x3f05d6 = function () {
    let _0xf05e82;
    try {
      _0xf05e82 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x797333) {
      _0xf05e82 = window;
    }
    return _0xf05e82;
  };
  const _0x50f69d = _0x3f05d6();
  _0x50f69d.setInterval(_0x3d21d5, 10000);
})();
const _0xea8760 = {
  pattern: "1080p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
function _0x134731(_0x58b5a4, _0x15986c, _0x3027c9, _0x81d499, _0x5b2f43) {
  return _0x5a75(_0x81d499 - 0x1d2, _0x5b2f43);
}
cmd(_0xea8760, async (_0x3b2935, _0x3e12f9, _0x54dd8d, {
  from: _0x189ada,
  q: _0x26de9f,
  reply: _0xcc100a
}) => {
  try {
    if (!ytreg(_0x26de9f)) {
      return await _0xcc100a(urlneed);
    }
    _0x26de9f = convertYouTubeLink(_0x26de9f);
    const _0x5385ca = await yts(_0x26de9f);
    const _0x2c28a6 = _0x5385ca.videos[0];
    const _0x163ec0 = _0x26de9f;
    const _0x37032f = await ytmp4q.download(_0x163ec0, "1080");
    console.log("Download details:", _0x37032f);
    const _0x485099 = {
      url: _0x37032f.downloadUrl
    };
    const _0x3b5659 = {
      quoted: _0x3e12f9
    };
    _0x3b2935.sendMessage(_0x189ada, {
      'video': _0x485099,
      'mimetype': "video/mp4",
      'fileName': _0x2c28a6.title + ".mp4",
      'caption': _0x2c28a6.title + "\n\n" + config.FOOTER
    }, _0x3b5659);
    const _0x1f5549 = {
      text: '✅',
      key: _0x54dd8d.key
    };
    const _0x2ce287 = {
      react: _0x1f5549
    };
    await _0x3b2935.sendMessage(_0x189ada, _0x2ce287);
  } catch (_0xeeeaf6) {
    console.error("Error fetching or sending", _0xeeeaf6);
    const _0xe3aafa = {
      quoted: _0x54dd8d
    };
    await _0x3b2935.sendMessage(_0x189ada, "*Error fetching or sending *", _0xe3aafa);
  }
});
const _0x182ce3 = {
  pattern: "1440p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x182ce3, async (_0x8a4daf, _0x33bba7, _0x4759fd, {
  from: _0x457d41,
  q: _0x2decb2,
  reply: _0x282fb4
}) => {
  try {
    if (!ytreg(_0x2decb2)) {
      return await _0x282fb4(urlneed);
    }
    _0x2decb2 = convertYouTubeLink(_0x2decb2);
    const _0x29a43c = await yts(_0x2decb2);
    const _0xf32028 = _0x29a43c.videos[0];
    const _0x173597 = _0x2decb2;
    const _0x16b905 = await ytmp4q.download(_0x173597, "1440");
    console.log("Download details:", _0x16b905);
    const _0x36ffaf = {
      url: _0x16b905.downloadUrl
    };
    const _0x4c02f4 = {
      quoted: _0x33bba7
    };
    _0x8a4daf.sendMessage(_0x457d41, {
      'video': _0x36ffaf,
      'mimetype': "video/mp4",
      'fileName': _0xf32028.title + ".mp4",
      'caption': _0xf32028.title + "\n\n" + config.FOOTER
    }, _0x4c02f4);
    const _0x532f36 = {
      text: '✅',
      key: _0x4759fd.key
    };
    const _0x48a709 = {
      react: _0x532f36
    };
    await _0x8a4daf.sendMessage(_0x457d41, _0x48a709);
  } catch (_0x1be2b6) {
    console.error("Error fetching or sending", _0x1be2b6);
    const _0x4c767a = {
      quoted: _0x4759fd
    };
    await _0x8a4daf.sendMessage(_0x457d41, "*Error fetching or sending *", _0x4c767a);
  }
});
const _0x4f3f5c = {
  pattern: "40k",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4f3f5c, async (_0x293506, _0xc69889, _0x1d08a4, {
  from: _0x6973ce,
  q: _0x257265,
  reply: _0x1a6fb1
}) => {
  try {
    if (!ytreg(_0x257265)) {
      return await _0x1a6fb1(urlneed);
    }
    _0x257265 = convertYouTubeLink(_0x257265);
    const _0x7e5e96 = await yts(_0x257265);
    const _0x250faf = _0x7e5e96.videos[0];
    const _0x38730b = _0x257265;
    const _0x4ac8e1 = await ytmp4q.download(_0x38730b, '4k');
    console.log("Download details:", _0x4ac8e1);
    const _0x2bea8a = {
      url: _0x4ac8e1.downloadUrl
    };
    const _0x5057a7 = {
      quoted: _0xc69889
    };
    _0x293506.sendMessage(_0x6973ce, {
      'video': _0x2bea8a,
      'mimetype': "video/mp4",
      'fileName': _0x250faf.title + ".mp4",
      'caption': _0x250faf.title + "\n\n" + config.FOOTER
    }, _0x5057a7);
    const _0x1c9b10 = {
      text: '✅',
      key: _0x1d08a4.key
    };
    const _0x3ac117 = {
      react: _0x1c9b10
    };
    await _0x293506.sendMessage(_0x6973ce, _0x3ac117);
  } catch (_0x416938) {
    console.error("Error fetching or sending", _0x416938);
    const _0x4ee4e6 = {
      quoted: _0x1d08a4
    };
    await _0x293506.sendMessage(_0x6973ce, "*Error fetching or sending *", _0x4ee4e6);
  }
});
const _0x41f8a8 = {
  pattern: "36p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x41f8a8, async (_0x13cf69, _0x529ad9, _0x28e64c, {
  from: _0xec1196,
  q: _0x459277,
  reply: _0x1f1d76
}) => {
  try {
    if (!ytreg(_0x459277)) {
      return await _0x1f1d76(urlneed);
    }
    _0x459277 = convertYouTubeLink(_0x459277);
    const _0x62840f = await yts(_0x459277);
    const _0x477d83 = _0x62840f.videos[0];
    const _0x46a54f = _0x459277;
    const _0x49c0fe = await ytmp4q.download(_0x46a54f, "360");
    console.log("Download details:", _0x49c0fe);
    const _0x43583d = {
      url: _0x49c0fe.downloadUrl
    };
    const _0x205645 = {
      quoted: _0x529ad9
    };
    _0x13cf69.sendMessage(_0xec1196, {
      'document': _0x43583d,
      'mimetype': "video/mp4",
      'fileName': _0x477d83.title + ".mp4",
      'caption': _0x477d83.title + "\n\n" + config.FOOTER
    }, _0x205645);
    const _0x55d263 = {
      text: '🎥',
      key: senda.key
    };
    const _0x39523c = {
      react: _0x55d263
    };
    await _0x13cf69.sendMessage(_0xec1196, _0x39523c);
  } catch (_0x1779ed) {
    _0x1f1d76(N_FOUND);
    l(_0x1779ed);
  }
});
const _0x25409b = {
  pattern: "48p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x25409b, async (_0x27cc78, _0x4199bb, _0x39f0c3, {
  from: _0x375771,
  q: _0x36365c,
  reply: _0x85e1a3
}) => {
  try {
    if (!ytreg(_0x36365c)) {
      return await _0x85e1a3(urlneed);
    }
    _0x36365c = convertYouTubeLink(_0x36365c);
    const _0x25625d = await yts(_0x36365c);
    const _0x4d6dfe = _0x25625d.videos[0];
    const _0x3bd1fd = _0x36365c;
    const _0x3487a0 = await ytmp4q.download(_0x3bd1fd, "480");
    console.log("Download details:", _0x3487a0);
    const _0x3ae1ea = {
      url: _0x3487a0.downloadUrl
    };
    const _0xb94689 = {
      quoted: _0x4199bb
    };
    _0x27cc78.sendMessage(_0x375771, {
      'document': _0x3ae1ea,
      'mimetype': "video/mp4",
      'fileName': _0x4d6dfe.title + ".mp4",
      'caption': _0x4d6dfe.title + "\n\n" + config.FOOTER
    }, _0xb94689);
    const _0x50f41a = {
      text: '✅',
      key: _0x39f0c3.key
    };
    const _0x26126e = {
      react: _0x50f41a
    };
    await _0x27cc78.sendMessage(_0x375771, _0x26126e);
  } catch (_0x4246b8) {
    console.error("Error fetching or sending", _0x4246b8);
    const _0x3ce42d = {
      quoted: _0x39f0c3
    };
    await _0x27cc78.sendMessage(_0x375771, "*Error fetching or sending *", _0x3ce42d);
  }
});
const _0x7db9f2 = {
  pattern: "72p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x7db9f2, async (_0x5bcf69, _0x58ae01, _0x77a02e, {
  from: _0x15a996,
  q: _0x4889a5,
  reply: _0x58bc51
}) => {
  try {
    if (!ytreg(_0x4889a5)) {
      return await _0x58bc51(urlneed);
    }
    _0x4889a5 = convertYouTubeLink(_0x4889a5);
    const _0x534864 = await yts(_0x4889a5);
    const _0x2f5a4e = _0x534864.videos[0];
    const _0x223312 = _0x4889a5;
    const _0x2e80af = await ytmp4q.download(_0x223312, "720");
    console.log("Download details:", _0x2e80af);
    const _0x458ff2 = {
      url: _0x2e80af.downloadUrl
    };
    const _0x9008a2 = {
      quoted: _0x58ae01
    };
    _0x5bcf69.sendMessage(_0x15a996, {
      'document': _0x458ff2,
      'mimetype': "video/mp4",
      'fileName': _0x2f5a4e.title + ".mp4",
      'caption': _0x2f5a4e.title + "\n\n" + config.FOOTER
    }, _0x9008a2);
    const _0x5be120 = {
      text: '✅',
      key: _0x77a02e.key
    };
    const _0x2096b8 = {
      react: _0x5be120
    };
    await _0x5bcf69.sendMessage(_0x15a996, _0x2096b8);
  } catch (_0x5bee81) {
    console.error("Error fetching or sending", _0x5bee81);
    const _0xede109 = {
      quoted: _0x77a02e
    };
    await _0x5bcf69.sendMessage(_0x15a996, "*Error fetching or sending *", _0xede109);
  }
});
const _0x5ced4f = {
  pattern: "108p",
  react: "📽️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5ced4f, async (_0x550b24, _0x537c07, _0x2279a2, {
  from: _0x598cc0,
  q: _0x559e64,
  reply: _0x112d52
}) => {
  try {
    if (!ytreg(_0x559e64)) {
      return await _0x112d52(urlneed);
    }
    _0x559e64 = convertYouTubeLink(_0x559e64);
    const _0x3d4907 = await yts(_0x559e64);
    const _0x681b72 = _0x3d4907.videos[0];
    const _0x492536 = _0x559e64;
    const _0x5ab01e = await ytmp4q.download(_0x492536, "1080");
    console.log("Download details:", _0x5ab01e);
    const _0x4a3256 = {
      url: _0x5ab01e.downloadUrl
    };
    const _0x55c8f4 = {
      quoted: _0x537c07
    };
    _0x550b24.sendMessage(_0x598cc0, {
      'document': _0x4a3256,
      'mimetype': "video/mp4",
      'fileName': _0x681b72.title + ".mp4",
      'caption': _0x681b72.title + "\n\n" + config.FOOTER
    }, _0x55c8f4);
    const _0x411902 = {
      text: '✅',
      key: _0x2279a2.key
    };
    const _0xf667e = {
      react: _0x411902
    };
    await _0x550b24.sendMessage(_0x598cc0, _0xf667e);
  } catch (_0x1f340f) {
    console.error("Error fetching or sending", _0x1f340f);
    const _0x3ac051 = {
      quoted: _0x2279a2
    };
    await _0x550b24.sendMessage(_0x598cc0, "*Error fetching or sending *", _0x3ac051);
  }
});