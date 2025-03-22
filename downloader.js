const {
  default: makeWASocket,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require("@whiskeysockets/baileys");
const config = require("../settings");
const apkdl = require("../lib/apkdl");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  Download
} = require("nima-threads-dl-api");
const {
  getBuffer,
  getFile,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat
} = require("../lib/functions");
const {
  pinterest,
  wallpaper,
  wikimedia,
  quotesAnime,
  aiovideodl,
  umma,
  ringtone,
  styletext
} = require("../lib/scraper");
const axios = require("axios");
const cheerio = require("cheerio");
const {
  facebook
} = require("@mrnima/facebook-downloader");
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const yts = require("yt-search");
const videoSearchResults = new Map();
var request = require("request");
let optionIndex = 1;
const fs = require('fs');
const {
  unsplash,
  pixabay
} = require("@sl-code-lords/image-library");
var {
  subsearch,
  subdl
} = require("@sl-code-lords/si-subdl");
const {
  sizeFormatter
} = require("human-readable");
const {
  File
} = require("megajs");
const {
  Tiktok
} = require("../lib/tiktok");
function regtik(_0x6fbe61) {
  return _0x6fbe61.includes("tiktok.com");
}
const fetch = (..._0x23151e) => import("node-fetch").then(({
  default: _0x4bde77
}) => _0x4bde77(..._0x23151e));
async function fbDownloader(_0x10356e) {
  try {
    const _0x38f485 = {
      url: _0x10356e
    };
    const _0xab5491 = await axios({
      'method': "POST",
      'url': "https://snapsave.app/action.php?lang=vn",
      'headers': {
        'accept': "*/*",
        'accept-language': "vi,en-US;q=0.9,en;q=0.8",
        'content-type': "multipart/form-data",
        'sec-ch-ua': "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "\"Windows\"",
        'sec-fetch-dest': "empty",
        'sec-fetch-mode': "cors",
        'sec-fetch-site': "same-origin",
        'Referer': "https://snapsave.app/vn",
        'Referrer-Policy': "strict-origin-when-cross-origin"
      },
      'data': _0x38f485
    });
    let _0x4e521b;
    const _0x1d683c = _0xab5491.data.replace("return decodeURIComponent", "html = decodeURIComponent");
    eval(_0x1d683c);
    _0x4e521b = _0x4e521b.split("innerHTML = \"")[1].split("\";\n")[0].replace(/\\"/g, "\"");
    const _0x41caf7 = cheerio.load(_0x4e521b);
    const _0x948c94 = [];
    const _0x2a83d8 = _0x41caf7("table").find("tbody");
    const _0x4a87ed = _0x2a83d8.find('tr');
    _0x4a87ed.each(function (_0xdd3b2, _0x230169) {
      const _0x1b0011 = _0x41caf7(_0x230169);
      const _0x1df891 = _0x1b0011.children();
      const _0x346a09 = _0x41caf7(_0x1df891[0]).text().trim();
      const _0x62a883 = _0x41caf7(_0x1df891[2]).children('a').attr("href");
      if (_0x62a883 != undefined) {
        const _0x3c6300 = {
          quality: _0x346a09,
          url: _0x62a883
        };
        _0x948c94.push(_0x3c6300);
      }
    });
    const _0x2c1840 = {
      success: true,
      download: _0x948c94
    };
    return _0x2c1840;
  } catch (_0x8da9f9) {
    const _0x4a92b6 = {
      success: false
    };
    return _0x4a92b6;
  }
}
function fbreg(_0x35c082) {
  const _0x2a8c5c = /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/;
  return _0x2a8c5c.test(_0x35c082);
}
const clean = _0x24718c => {
  let _0x44f763 = /(<([^>]+)>)/gi;
  _0x24718c = _0x24718c.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x24718c.replace(_0x44f763, '');
};
async function shortener(_0x295395) {
  return _0x295395;
}
async function Insta(_0x118240) {
  const _0xdbeea4 = [];
  const _0x99dec1 = {
    "url": _0x118240,
    submit: ''
  };
  const {
    data: _0xb7ff4a
  } = await axios("https://downloadgram.org/", {
    'method': "POST",
    'data': _0x99dec1
  });
  const _0xaf07e9 = cheerio.load(_0xb7ff4a);
  _0xaf07e9("#downloadhere > a").each(function (_0x2173a6, _0x5cab43) {
    const _0x5ee047 = _0xaf07e9(_0x5cab43).attr("href");
    if (_0x5ee047) {
      _0xdbeea4.push(_0x5ee047);
    }
  });
  return _0xdbeea4;
}
async function sswebA(_0x1461f5 = '', _0xb51f27 = false, _0x52de78 = "desktop") {
  _0x52de78 = _0x52de78.toLowerCase();
  if (!["desktop", "tablet", "phone"].includes(_0x52de78)) {
    _0x52de78 = "desktop";
  }
  let _0x1dafe6 = new URLSearchParams();
  _0x1dafe6.append("url", _0x1461f5);
  _0x1dafe6.append("device", _0x52de78);
  if (!!_0xb51f27) {
    _0x1dafe6.append("full", 'on');
  }
  _0x1dafe6.append("cacheLimit", 0);
  let _0x5cf4e9 = await axios({
    'url': "https://www.screenshotmachine.com/capture.php",
    'method': "post",
    'data': _0x1dafe6
  });
  let _0x1b5e00 = _0x5cf4e9.headers["set-cookie"];
  let _0x1c53f8 = await axios({
    'url': "https://www.screenshotmachine.com/" + _0x5cf4e9.data.link,
    'headers': {
      'cookie': _0x1b5e00.join('')
    },
    'responseType': "arraybuffer"
  });
  return Buffer.from(_0x1c53f8.data);
}
function formatUploadDate(_0x48a5d2) {
  const _0x54345f = new Date(_0x48a5d2);
  return _0x54345f.getFullYear() + '-' + (_0x54345f.getMonth() + 1) + '-' + _0x54345f.getDate();
}
let soundcloud = async _0x4de71c => {
  return new Promise((_0x2e8e2d, _0x11fe40) => {
    const _0x16ee8c = {
      method: "POST",
      url: "https://www.klickaud.co/download.php",
      headers: {},
      formData: {}
    };
    _0x16ee8c.headers["content-type"] = "application/x-www-form-urlencoded";
    _0x16ee8c.formData.value = _0x4de71c;
    _0x16ee8c.formData["2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37"] = "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3";
    request(_0x16ee8c, async function (_0x5ec6e5, _0x2db0b8, _0x6f54c6) {
      if (_0x5ec6e5) {
        throw new Error(_0x5ec6e5);
      }
      const _0x33b59b = cheerio.load(_0x6f54c6);
      _0x2e8e2d({
        'judul': _0x33b59b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)").text(),
        'download_count': _0x33b59b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)").text(),
        'thumb': _0x33b59b("#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img").attr("src"),
        'link': _0x33b59b("#dlMP3").attr("onclick").split("downloadFile('")[1].split("',")[0]
      });
    });
  });
};
async function ssearch(_0x233e0d) {
  let _0x3c2eda = await axios.get("https://m.soundcloud.com/search?q=" + encodeURIComponent(_0x233e0d), {
    'headers': {
      'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
    }
  });
  let _0x539607 = cheerio.load(_0x3c2eda.data);
  let _0x3dd41c = [];
  _0x539607("div > ul > li > div").each(function (_0x44fff3, _0x20156f) {
    let _0x204edc = _0x539607(_0x20156f).find('a').attr("aria-label");
    let _0x5747bd = "https://m.soundcloud.com" + _0x539607(_0x20156f).find('a').attr("href");
    let _0x539f1f = _0x539607(_0x20156f).find("a > div > div > div > picture > img").attr("src");
    let _0x9f3ac0 = _0x539607(_0x20156f).find("a > div > div > div").eq(1).text();
    let _0x406dc0 = _0x539607(_0x20156f).find("a > div > div > div > div > div").eq(0).text();
    let _0x5b4583 = _0x539607(_0x20156f).find("a > div > div > div > div > div").eq(1).text();
    let _0x3856a1 = _0x539607(_0x20156f).find("a > div > div > div > div > div").eq(2).text();
    const _0x460911 = {
      title: _0x204edc,
      url: _0x5747bd,
      thumb: _0x539f1f,
      artist: _0x9f3ac0,
      views: _0x406dc0,
      release: _0x3856a1,
      timestamp: _0x5b4583
    };
    _0x3dd41c.push(_0x460911);
  });
  return {
    'status': _0x3c2eda.status,
    'creator': "Caliph",
    'result': _0x3dd41c
  };
}
async function GDriveDl(_0x1f4aa3) {
  const _0x24c21f = {
    error: true
  };
  let _0x53c531;
  let _0x4ea0a3 = _0x24c21f;
  if (!(_0x1f4aa3 && _0x1f4aa3.match(/drive\.google/i))) {
    return _0x4ea0a3;
  }
  const _0x198a3e = sizeFormatter({
    'std': "JEDEC",
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x588c30, _0x4c6d49) => _0x588c30 + " " + _0x4c6d49 + 'B'
  });
  try {
    _0x53c531 = (_0x1f4aa3.match(/\/?id=(.+)/i) || _0x1f4aa3.match(/\/d\/(.*?)\//))[1];
    if (!_0x53c531) {
      throw "ID Not Found";
    }
    _0x4ea0a3 = await fetch("https://drive.google.com/uc?id=" + _0x53c531 + "&authuser=0&export=download", {
      'method': "post",
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': "https://drive.google.com",
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': "true"
      }
    });
    let {
      fileName: _0x1d6fa6,
      sizeBytes: _0x4cbe12,
      downloadUrl: _0x5dab21
    } = JSON.parse((await _0x4ea0a3.text()).slice(4));
    if (!_0x5dab21) {
      throw "Link Download Limit!";
    }
    let _0x5efc7a = await fetch(_0x5dab21);
    if (_0x5efc7a.status !== 200) {
      return _0x5efc7a.statusText;
    }
    return {
      'downloadUrl': _0x5dab21,
      'fileName': _0x1d6fa6,
      'fileSize': _0x198a3e(_0x4cbe12),
      'mimetype': _0x5efc7a.headers.get("content-type")
    };
  } catch (_0x33b455) {
    console.log(_0x33b455);
    return _0x4ea0a3;
  }
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට threads url එකක් දෙන්න !!*";
} else {
  needus = "*Please give me threads url !!*";
}
var cantf = '';
if (config.LANG === 'SI') {
  cantf = "*මට මෙම වීඩියෝව සොයාගත නොහැක!*";
} else {
  cantf = "*I cant find this video!*";
}
var N_FOUND = '';
(function () {
  const _0x10cd2b = function () {
    let _0x2b5030;
    try {
      _0x2b5030 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x4d6aa0) {
      _0x2b5030 = window;
    }
    return _0x2b5030;
  };
  const _0x5923ea = _0x10cd2b();
  _0x5923ea.setInterval(_0x11d2db, 10000);
})();
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === 'SI') {
  urlneed = "එය Baiscopelk වෙතින් සිංහල උපසිරැසි බාගත කරයි.";
} else {
  urlneed = "It downloads sinhala subtitle from Baiscopelk.";
}
var imgmsg = '';
function _0x3f08db(_0x27da62, _0x46f4da, _0x3084c3, _0x285b6c, _0x128d09) {
  return _0x3f99(_0x285b6c - 0x57, _0x46f4da);
}
if (config.LANG === 'SI') {
  imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
} else {
  imgmsg = "```Please write a few words!```";
}
var desc = '';
if (config.LANG === 'SI') {
  desc = "Tiktok වෙතින් වීඩියෝ බාගත කරයි.";
} else {
  desc = "Download videos from Facebook.";
}
var urlneed1 = '';
if (config.LANG === 'SI') {
  urlneed1 = "*කරුණාකර Tiktok video url එකක් ලබා දෙන්න*";
} else {
  urlneed1 = "*Please give me tiktok video url..*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "Facebook වෙතින් වීඩියෝ බාගත කරයි.";
} else {
  desc1 = "Download videos from Facebook.";
}
var urlneed2 = '';
if (config.LANG === 'SI') {
  urlneed2 = "*කරුණාකර facebook video url එකක් ලබා දෙන්න*";
} else {
  urlneed2 = "*Please give me facebook video url..*";
}
var desc5 = '';
if (config.LANG === 'SI') {
  desc5 = "ගූගල් හි අදාළ පින්තූර සෙවීම.";
} else {
  desc5 = "Search for related pics on Google.";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "unsplash.com හි අදාළ පින්තූර සෙවීම.";
} else {
  desc2 = "Search for related pics on unsplash.com.";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "pixabay.com හි අදාළ පින්තූර සෙවීම.";
} else {
  desc3 = "Search for related pics on pixabay.com.";
}
var desc4 = '';
if (config.LANG === 'SI') {
  desc4 = "bing හි අදාළ පින්තූර සෙවීම.";
} else {
  desc4 = "Searche for related pics on bing.";
}
var errt = '';
if (config.LANG === 'SI') {
  errt = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  errt = "*I couldn't find anything :(*";
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට Instagram url එකක් දෙන්න !!*";
} else {
  needus = "*Please give me Instagram url !!*";
}
var imgmsg1 = '';
if (config.LANG === 'SI') {
  imgmsg1 = "*කරුණාකර මට url එකක් දෙන්න !*";
} else {
  imgmsg1 = "*Please give me a url !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descg = "It gives desktop size screenshot of given url.";
}
var descp = '';
if (config.LANG === 'SI') {
  descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descp = "It gives phone size screenshot of given url.";
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  desct = "It gives tablet size screenshot of given url.";
}
var cant = '';
if (config.LANG === 'SI') {
  cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*";
} else {
  cant = "*I can't get a screenshot. Try again later.*";
}
var urlneed3 = '';
if (config.LANG === 'SI') {
  urlneed3 = "එය androidapksfree වෙතින් mod apps බාගත කරයි.";
} else {
  urlneed3 = "It downloads mod apps from androidapksfree.";
}
var urlneed4 = '';
if (config.LANG === 'SI') {
  urlneed4 = "එය playstore වෙතින් apps බාගත කරයි.";
} else {
  urlneed4 = "It downloads apps from playstore.";
}
const _0x493331 = {
  pattern: "xhamster",
  category: "download",
  react: '🎬',
  desc: "xhamster downloader",
  use: ".xhamster mia",
  filename: __filename
};
cmd(_0x493331, async (_0x482a26, _0x2f3a5a, _0x52c9bf, {
  reply: _0x4c913e,
  isDev: _0x2503e4,
  from: _0x44b907,
  l: _0x467820,
  q: _0x26a471,
  prefix: _0x4b604d
}) => {
  try {
    if (!_0x26a471) {
      return await _0x4c913e("*Please Give Me Text..! 🖊️*");
    }
    const _0x13adf1 = "https://xhamster.com/search/" + _0x26a471;
    const _0x12f4ff = await axios.get(_0x13adf1);
    const _0x5b941b = cheerio.load(_0x12f4ff.data);
    const _0x3384d8 = [];
    _0x5b941b("div > div.thumb-list > div.thumb-list__item.video-thumb.video-thumb--type-video").each((_0xd9b85a, _0x9332d1) => {
      _0x3384d8.push({
        'title': _0x5b941b(_0x9332d1).find("div > div:nth-child(2) > a").text(),
        'link': _0x5b941b(_0x9332d1).find("div > div:nth-child(2) > a").attr("href")
      });
    });
    const _0x5d5f93 = {
      quoted: _0x2f3a5a
    };
    if (_0x3384d8.length < 1) {
      return await _0x482a26.sendMessage(_0x44b907, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x5d5f93);
    }
    var _0x358b84 = [];
    for (var _0x4c2256 = 0; _0x4c2256 < _0x3384d8.length; _0x4c2256++) {
      _0x358b84.push({
        'title': _0x4c2256 + 1,
        'description': '' + _0x3384d8[_0x4c2256].title,
        'rowId': _0x4b604d + "xhamsterdl " + _0x3384d8[_0x4c2256].link
      });
    }
    const _0x5452f4 = {
      title: "*Spotify*\n",
      rows: _0x358b84
    };
    const _0x2fd5db = [_0x5452f4];
    const _0x5e2c36 = {
      text: "VAJIRA MD XHAMSTER\n",
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x2fd5db
    };
    const _0x4b4c4e = {
      quoted: _0x2f3a5a
    };
    return await _0x482a26.replyList(_0x44b907, _0x5e2c36, _0x4b4c4e);
  } catch (_0x562a1c) {
    _0x4c913e("*ERROR !!*");
    _0x467820(_0x562a1c);
  }
});
const _0x468458 = {
  pattern: "spotify",
  category: "download",
  react: '🎬',
  desc: "spotify downloader",
  use: ".spotify lelena",
  filename: __filename
};
cmd(_0x468458, async (_0x30bcac, _0x2887d5, _0x1a5d5c, {
  reply: _0x295929,
  isDev: _0x2904e4,
  from: _0x38d105,
  l: _0x1c58ad,
  q: _0x568170,
  prefix: _0x327375
}) => {
  try {
    if (!_0x568170) {
      return await _0x295929("*Please Give Me Text..! 🖊️*");
    }
    const _0x2069a7 = await fetchJson("https://vajira-official-api.vercel.app/search/spotify?q=" + _0x568170);
    const _0x327a60 = _0x2069a7.result;
    if (config.MODE === "nonbutton") {
      const _0x893c02 = {
        quoted: _0x2887d5
      };
      if (_0x327a60.length < 1) {
        return await _0x30bcac.sendMessage(_0x38d105, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x893c02);
      }
      var _0x4cfbf0 = [];
      for (var _0x783ec3 = 0; _0x783ec3 < _0x327a60.length; _0x783ec3++) {
        _0x4cfbf0.push({
          'title': _0x783ec3 + 1,
          'description': '' + _0x327a60[_0x783ec3].title,
          'rowId': _0x327375 + "spotifydl " + _0x327a60[_0x783ec3].url
        });
      }
      const _0x360267 = {
        title: "*Spotify*\n",
        rows: _0x4cfbf0
      };
      const _0x5d9aa3 = [_0x360267];
      const _0x250735 = {
        text: "ＰＯＤＩ MD SPOTIFY-DL\n",
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x5d9aa3
      };
      const _0x4460c5 = {
        quoted: _0x2887d5
      };
      return await _0x30bcac.replyList(_0x38d105, _0x250735, _0x4460c5);
    }
    if (config.MODE === "button") {
      const _0x2c024d = {
        text: N_FOUND
      };
      const _0x746f7 = {
        quoted: _0x2887d5
      };
      if (_0x327a60.length < 1) {
        return await _0x30bcac.sendMessage(_0x38d105, _0x2c024d, _0x746f7);
      }
      var _0x1e0f52 = [];
      for (var _0x783ec3 = 0; _0x783ec3 < _0x327a60.length; _0x783ec3++) {
        _0x1e0f52.push({
          'rows': [{
            'title': _0x783ec3 + 1,
            'description': _0x327a60[_0x783ec3].title,
            'id': _0x327375 + "spotifydl " + _0x327a60[_0x783ec3].url
          }]
        });
      }
      let _0x213846 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Spotify. 📲",
          'sections': _0x1e0f52
        })
      }];
      const _0x402ea2 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: ''
      };
      const _0x2fad22 = {
        quoted: _0x2887d5
      };
      return await _0x30bcac.sendButtonMessage(_0x38d105, _0x213846, _0x1a5d5c, _0x402ea2, _0x2fad22);
    }
  } catch (_0x428f3c) {
    _0x295929("*ERROR !!*");
    _0x1c58ad(_0x428f3c);
  }
});
const _0x5020db = {
  pattern: "spotifydl",
  react: '📥',
  filename: __filename
};
cmd(_0x5020db, async (_0x3a9ed2, _0x4209bc, _0x3da54a, {
  from: _0x486499,
  q: _0x3b57aa,
  isDev: _0x51160c,
  reply: _0x3592cf
}) => {
  if (!_0x3b57aa) {
    return await _0x3592cf("*Please provide a direct URL!*");
  }
  try {
    const _0x595cee = await fetchJson("https://vajira-official-api.vercel.app/download/spotifydl?url=" + _0x3b57aa);
    const _0x3155d4 = _0x595cee.result;
    const _0x1a27aa = "\n🎵 *Spotify Track Details* 🎵\n\n📌 *Title*: " + _0x3155d4.title + "\n🎤 *Artist*: " + _0x3155d4.artis + "\n⏱️ *Durasi*: " + _0x3155d4.durasi + "\n🔗 *Type*: " + _0x3155d4.type + "\n\n🔍 *Powered by* " + config.FOOTER + "\n    ";
    var _0x4d6ca5 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x6b703a = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x54bc41
    } = await _0x3a9ed2.sendMessage(_0x486499, _0x6b703a);
    for (let _0xe2595a = 0; _0xe2595a < _0x4d6ca5.length; _0xe2595a++) {
      const _0x94c91a = {
        text: _0x4d6ca5[_0xe2595a],
        edit: _0x54bc41
      };
      await _0x3a9ed2.sendMessage(_0x486499, _0x94c91a);
    }
    const _0x5bd9ee = {
      url: _0x3155d4.image
    };
    const _0x1d7da8 = {
      image: _0x5bd9ee,
      caption: _0x1a27aa
    };
    const _0x1f87ac = {
      quoted: _0x4209bc
    };
    await _0x3a9ed2.sendMessage(_0x486499, _0x1d7da8, _0x1f87ac);
    const _0x35ec51 = {
      'audio': await getBuffer(_0x3155d4.download),
      'caption': "*ｐｏｄｉ-ᴍᴅ ʙʏʙᴛᴅᴅ ɢᴀɴɢꜱ*",
      'mimetype': "audio/mpeg",
      'fileName': _0x3155d4.title + "\nｐｏｄｉ-MD.mp3"
    };
    const _0x1982a9 = {
      'document': await getBuffer(_0x3155d4.download),
      'caption': "*ｐｏｄｉ-ᴍᴅ ʙʏʙᴛᴅᴅ ɢᴀɴɢꜱ*",
      'mimetype': "audio/mpeg",
      'fileName': _0x3155d4.title + "\nｐｏｄｉ-MD.mp3"
    };
    await _0x3a9ed2.sendMessage(_0x486499, _0x35ec51);
    await _0x3a9ed2.sendMessage(_0x486499, _0x1982a9);
    const _0x491fa9 = {
      text: '✅',
      key: _0x4209bc.key
    };
    const _0x3b7d1b = {
      react: _0x491fa9
    };
    await _0x3a9ed2.sendMessage(_0x486499, _0x3b7d1b);
  } catch (_0xa51eba) {
    console.error("Error fetching or sending", _0xa51eba);
  }
});
const _0x3ab067 = {
  pattern: "appletone",
  category: "download",
  react: '🎬',
  desc: "apple ringtone downloader",
  use: ".appletone 2024",
  filename: __filename
};
cmd(_0x3ab067, async (_0x327bd8, _0x46ca71, _0x5f32a3, {
  reply: _0x3b8488,
  isDev: _0x2b1045,
  from: _0x15f283,
  l: _0x5128db,
  q: _0x370caa,
  prefix: _0xf9a870
}) => {
  try {
    if (!_0x370caa) {
      return await _0x3b8488("*Please Give Me Text..! 🖊️*");
    }
    const _0xe271c7 = "https://www.prokerala.com/downloads/ringtones/search/?q=" + _0x370caa + "&mode=search";
    const _0x5d27e9 = await axios.get(_0xe271c7);
    const _0x3d7701 = cheerio.load(_0x5d27e9.data);
    const _0x2ac1d3 = [];
    _0x3d7701("ul > li.list-item-outer").each((_0x5bdc94, _0x4dd29d) => {
      _0x2ac1d3.push({
        'title': _0x3d7701(_0x4dd29d).find("div.list-item-body > div > a").text(),
        'link': _0x3d7701(_0x4dd29d).find("div.list-item-body > div > a").attr("href")
      });
    });
    if (config.MODE === "button") {
      const _0x5cc21d = {
        quoted: _0x46ca71
      };
      if (_0x2ac1d3.length < 1) {
        return await _0x327bd8.sendMessage(_0x15f283, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x5cc21d);
      }
      var _0x3b390d = [];
      for (var _0x36c852 = 0; _0x36c852 < _0x2ac1d3.length; _0x36c852++) {
        _0x3b390d.push({
          'title': _0x36c852 + 1,
          'description': '' + _0x2ac1d3[_0x36c852].title,
          'rowId': _0xf9a870 + "appletonedl " + _0x2ac1d3[_0x36c852].link
        });
      }
      const _0x3babad = {
        title: "*APPLETONE*\n",
        rows: _0x3b390d
      };
      const _0x3f55c2 = [_0x3babad];
      const _0xa4cf12 = {
        text: "ｐｏｄｉ MD APPLETONE-DL\n",
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x3f55c2
      };
      const _0x20e2f5 = {
        quoted: _0x46ca71
      };
      return await _0x327bd8.replyList(_0x15f283, _0xa4cf12, _0x20e2f5);
    }
    if (config.MODE === "nonbutton") {
      const _0x402273 = {
        text: N_FOUND
      };
      const _0xd5244c = {
        quoted: _0x46ca71
      };
      if (_0x2ac1d3.length < 1) {
        return await _0x327bd8.sendMessage(_0x15f283, _0x402273, _0xd5244c);
      }
      var _0x3539a6 = [];
      for (var _0x36c852 = 0; _0x36c852 < _0x2ac1d3.length; _0x36c852++) {
        _0x3539a6.push({
          'rows': [{
            'title': _0x36c852 + 1,
            'description': _0x2ac1d3[_0x36c852].title,
            'id': _0xf9a870 + "appletonedl " + _0x2ac1d3[_0x36c852].link
          }]
        });
      }
      let _0x19974f = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Appletone. 📲",
          'sections': _0x3539a6
        })
      }];
      const _0x2dfd91 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: ''
      };
      const _0x5b9d70 = {
        quoted: _0x46ca71
      };
      return await _0x327bd8.sendButtonMessage(_0x15f283, _0x19974f, _0x5f32a3, _0x2dfd91, _0x5b9d70);
    }
  } catch (_0xb840f4) {
    _0x3b8488("*ERROR !!*");
    _0x5128db(_0xb840f4);
  }
});
const _0x1548e0 = {
  pattern: "appletonedl",
  react: '📥',
  filename: __filename
};
cmd(_0x1548e0, async (_0x588e44, _0x4a3fb5, _0x36dacf, {
  from: _0x429b31,
  q: _0x542e76,
  isDev: _0x315e84,
  reply: _0x15a848
}) => {
  if (!_0x542e76) {
    return await _0x15a848("*Please provide a direct URL!*");
  }
  try {
    const _0x9d4916 = "https://dl.prokerala.com" + _0x542e76;
    const _0x379ca4 = await axios.get(_0x9d4916);
    const _0x27ee90 = cheerio.load(_0x379ca4.data);
    const _0x49b763 = _0x27ee90("header > h1").text();
    const _0x43abdf = _0x27ee90("#download-options > a").attr("href");
    const _0x3b504c = _0x27ee90("span.player-total-duration").text();
    var _0x54f091 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x490553 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x34cf8c
    } = await _0x588e44.sendMessage(_0x429b31, _0x490553);
    for (let _0x27f594 = 0; _0x27f594 < _0x54f091.length; _0x27f594++) {
      const _0x23f0e6 = {
        text: _0x54f091[_0x27f594],
        edit: _0x34cf8c
      };
      await _0x588e44.sendMessage(_0x429b31, _0x23f0e6);
    }
    const _0x970386 = {
      'audio': await getBuffer(_0x43abdf),
      'caption': "Duration: " + _0x3b504c + "\n\n*ＰＯＤＩ ɢᴀɴɢꜱ*",
      'mimetype': "audio/mpeg",
      'fileName': _0x49b763 + ".mp3"
    };
    const _0x254ed1 = {
      'document': await getBuffer(_0x43abdf),
      'caption': "Duration: " + _0x3b504c + "\n\n*ＰＯＤＩᴍᴅ ʙʏꜱ*",
      'mimetype': "audio/mpeg",
      'fileName': _0x49b763 + ".mp3"
    };
    await _0x588e44.sendMessage(_0x429b31, _0x970386);
    await _0x588e44.sendMessage(_0x429b31, _0x254ed1);
    const _0x47dd0c = {
      text: '✅',
      key: _0x4a3fb5.key
    };
    const _0x2d6f05 = {
      react: _0x47dd0c
    };
    await _0x588e44.sendMessage(_0x429b31, _0x2d6f05);
  } catch (_0x47d651) {
    console.error("Error fetching or sending", _0x47d651);
    const _0x559522 = {
      quoted: _0x4a3fb5
    };
    await _0x588e44.sendMessage(_0x429b31, "*Error fetching or sending *", _0x559522);
  }
});
const _0x1a43e3 = {
  pattern: "sounddl",
  filename: __filename
};
cmd(_0x1a43e3, async (_0xb6f33e, _0x3dbe80, _0x389b1f, {
  reply: _0x28e2ba,
  isDev: _0x2208eb,
  from: _0x5acdb3,
  l: _0x46b6da,
  q: _0x30c665,
  prefix: _0x4bf7d3
}) => {
  try {
    const _0x551909 = await fetchJson("https://vajira-official-api.vercel.app/search/soundcloud?url=" + _0x30c665);
    const _0x40f349 = "Title: " + _0x551909.result.title + "\n             Duration: " + _0x551909.result.duration + "\n\t     Quality: " + _0x551909.result.quality;
    if (config.MODE === "nonbutton") {
      const _0x37ca7f = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x4bf7d3 + "saud " + _0x551909.result.download,
          'description': "Download Normal Song"
        }, {
          'title': '2',
          'rowId': _0x4bf7d3 + "sdoc " + _0x551909.result.download,
          'description': "Download Document Song"
        }]
      }];
      const _0xecb51 = {
        url: _0x551909.result.thumbnail
      };
      const _0xfa7e63 = {
        caption: _0x40f349,
        image: _0xecb51,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x37ca7f
      };
      const _0x5bf29b = {
        quoted: _0x3dbe80
      };
      return await _0xb6f33e.replyList(_0x5acdb3, _0xfa7e63, _0x5bf29b);
    }
    if (config.MODE === "button") {
      let _0x3e7bab = [{
        'title': "ＰＯＤＩ MD",
        'rows': [{
          'title': "Audio 🎧",
          'description': "Download Audio file",
          'id': _0x4bf7d3 + "saud " + _0x551909.result.download
        }, {
          'title': "Document 📁",
          'description': "Download Document file",
          'id': _0x4bf7d3 + "sdoc " + _0x551909.result.download
        }]
      }];
      const _0x1f6852 = {
        title: "Click Here⎙",
        sections: _0x3e7bab
      };
      const _0x5d7114 = {
        url: _0x551909.result.thumbnail
      };
      const _0x3123d6 = {
        displayText: "Audio 🎧"
      };
      const _0x384b2a = {
        buttonId: _0x4bf7d3 + "saud  " + _0x551909.result.download,
        buttonText: _0x3123d6
      };
      const _0xf3a79c = {
        displayText: "Document 📁"
      };
      const _0x449d90 = {
        buttonId: _0x4bf7d3 + "sdoc " + _0x551909.result.download,
        buttonText: _0xf3a79c
      };
      const _0x56c3f5 = {
        quoted: _0x389b1f
      };
      _0xb6f33e.sendMessage(_0x5acdb3, {
        'image': _0x5d7114,
        'caption': _0x40f349,
        'footer': config.FOOTER,
        'buttons': [_0x384b2a, _0x449d90, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x1f6852)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x56c3f5);
    }
  } catch (_0x1118fe) {
    _0x28e2ba("*ERROR !!*");
    _0x46b6da(_0x1118fe);
  }
});
const _0x473fcc = {
  pattern: "fetch",
  react: '📥',
  category: "download",
  filename: __filename
};
cmd(_0x473fcc, async (_0x565eee, _0x44a1bb, _0x50eb1c, {
  from: _0x219636,
  q: _0x401f53,
  isDev: _0x167c9e,
  reply: _0xe59dc3
}) => {
  if (!_0x401f53) {
    return await _0xe59dc3("*Please provide a direct URL!*");
  }
  try {
    const _0x4d2570 = _0x401f53.split('|')[0];
    const _0x2c641d = _0x401f53.split('|')[1] || "tc_movie_dl_system";
    var _0x35769a = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x19a963 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x1daaf1
    } = await _0x565eee.sendMessage(_0x219636, _0x19a963);
    for (let _0x5493c3 = 0; _0x5493c3 < _0x35769a.length; _0x5493c3++) {
      const _0x4ece08 = {
        text: _0x35769a[_0x5493c3],
        edit: _0x1daaf1
      };
      await _0x565eee.sendMessage(_0x219636, _0x4ece08);
    }
    const _0xc46883 = {
      'document': await getBuffer(_0x4d2570),
      'caption': "*ＰＯＤＩ-ᴍᴅ ʙʏʙᴛᴅᴅ ɢᴀɴɢꜱ*",
      'mimetype': "video/mp4",
      'fileName': _0x2c641d + "\nＰＯＤＩ-MD.mp4"
    };
    const _0x407733 = {
      'document': await getBuffer(_0x4d2570),
      'caption': "*ＰＯＤＩ-ᴍᴅ ʙʏʙᴛᴅᴅ ɢᴀɴɢꜱ*",
      'mimetype': "audio/mpeg",
      'fileName': _0x2c641d + "\nＰＯＤＩ-MD.mp3"
    };
    await _0x565eee.sendMessage(_0x219636, _0xc46883);
    await _0x565eee.sendMessage(_0x219636, _0x407733);
    const _0x518891 = {
      text: '✅',
      key: _0x44a1bb.key
    };
    const _0x366a7b = {
      react: _0x518891
    };
    await _0x565eee.sendMessage(_0x219636, _0x366a7b);
  } catch (_0x119d40) {
    console.error("Error fetching or sending", _0x119d40);
    const _0x17e011 = {
      quoted: _0x44a1bb
    };
    await _0x565eee.sendMessage(_0x219636, "*Error fetching or sending *", _0x17e011);
  }
});
const _0x20a105 = {
  pattern: "save",
  category: "download",
  react: '🎧',
  use: ".save",
  filename: __filename
};
cmd(_0x20a105, async (_0x3ccff0, _0xa59d30, _0x1ef26f, {
  from: _0x32994a,
  q: _0xb7379f,
  reply: _0x3e4651
}) => {
  try {
    var _0x5743c4 = _0x1ef26f.key.remoteJid;
    const _0x19860e = _0x5743c4?.["endsWith"]("@g.us");
    var _0x4e0d2e = _0x19860e ? ms.key.participant ? ms.key.participant : ms.participant : _0x5743c4;
    var _0x1782b6 = _0x1ef26f.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
    var _0x4e0d2e = _0x19860e ? _0x1ef26f.key.participant ? _0x1ef26f.key.participant : _0x1ef26f.participant : _0x5743c4;
    if (_0x1782b6) {
      console.log(_0x1782b6);
      let _0x20b742;
      if (_0x1782b6.imageMessage) {
        let _0x2368e1 = await _0x3ccff0.downloadAndSaveMediaMessage(_0x1782b6.imageMessage);
        const _0x3c5a38 = {
          url: _0x2368e1
        };
        const _0x1e1a0f = {
          image: _0x3c5a38,
          caption: _0x1782b6.imageMessage.caption
        };
        _0x20b742 = _0x1e1a0f;
      } else {
        if (_0x1782b6.videoMessage) {
          let _0x4ea488 = await _0x3ccff0.downloadAndSaveMediaMessage(_0x1782b6.videoMessage);
          const _0x2c0449 = {
            url: _0x4ea488
          };
          const _0x3ada21 = {
            video: _0x2c0449,
            caption: _0x1782b6.videoMessage.caption
          };
          _0x20b742 = _0x3ada21;
        } else {
          if (_0x1782b6.audioMessage) {
            let _0x49de93 = await _0x3ccff0.downloadAndSaveMediaMessage(_0x1782b6.audioMessage);
            const _0x487922 = {
              url: _0x49de93
            };
            const _0x29caa1 = {
              audio: _0x487922,
              mimetype: "audio/mp4"
            };
            _0x20b742 = _0x29caa1;
          } else {
            if (_0x1782b6.stickerMessage) {
              let _0x1d7ccd = await _0x3ccff0.downloadAndSaveMediaMessage(_0x1782b6.stickerMessage);
              const _0x479527 = {
                pack: "ＰＯＤＩ-MD",
                type: StickerTypes.CROPPED,
                categories: ['🤩', '🎉'],
                id: "12345",
                quality: 0x46,
                background: "transparent"
              };
              let _0x265e93 = new Sticker(_0x1d7ccd, _0x479527);
              const _0x1513ac = await _0x265e93.toBuffer();
              const _0x5d7218 = {
                sticker: _0x1513ac
              };
              _0x20b742 = _0x5d7218;
            } else {
              const _0x397de4 = {
                q: _0x1782b6.conversation
              };
              _0x20b742 = _0x397de4;
            }
          }
        }
      }
      _0x3ccff0.sendMessage(_0x4e0d2e, _0x20b742);
    } else {
      _0x3e4651("Mention the message that you want to save");
    }
  } catch (_0xd68622) {
    console.log(_0xd68622);
    _0x3e4651("*Error !!*");
  }
});
const _0xae8192 = {};
function _0x2d72fd(_0x25bfc4, _0x5d045e, _0x16bd21, _0x4737c7, _0x2dc690) {
  return _0x3f99(_0x2dc690 - 0x1ad, _0x16bd21);
}
_0xae8192.pattern = "pastpaper";
_0xae8192.react = '📑';
_0xae8192.category = "download";
_0xae8192.desc = "pastpaper downloader";
_0xae8192.filename = __filename;
cmd(_0xae8192, async (_0x47213b, _0x3f37ba, _0x1bf74f, {
  from: _0x2cac8f,
  prefix: _0x300a0c,
  q: _0x493ad6,
  l: _0x2b366c,
  isDev: _0x72f962,
  reply: _0x529650
}) => {
  try {
    const _0x187b77 = await axios.get("https://govdoc.lk/");
    const _0x2a29a5 = cheerio.load(_0x187b77.data);
    const _0x43bd96 = [];
    _0x2a29a5("#nav > li:nth-child(4) > #submenu-1-4 > li.nav-item").each((_0xc53f11, _0x21ec63) => {
      _0x43bd96.push({
        'link': _0x2a29a5(_0x21ec63).find('a').attr("href"),
        'title': _0x2a29a5(_0x21ec63).find('a').text().replace(/\n/g, '').replace(/     /g, '')
      });
    });
    if (config.MODE === "nonbutton") {
      const _0x5d558d = {
        quoted: _0x1bf74f
      };
      if (_0x43bd96.length < 1) {
        return await _0x47213b.sendMessage(_0x2cac8f, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x5d558d);
      }
      var _0x29c315 = [];
      for (var _0xd263f0 = 0; _0xd263f0 < _0x43bd96.length; _0xd263f0++) {
        _0x29c315.push({
          'title': _0xd263f0 + 1,
          'description': _0x43bd96[_0xd263f0].title,
          'rowId': _0x300a0c + "pp " + _0x43bd96[_0xd263f0].link
        });
      }
      const _0x2b60f2 = {
        title: "_[Result from GovDoc.]_",
        rows: _0x29c315
      };
      const _0x454393 = [_0x2b60f2];
      const _0x3bffd1 = {
        url: config.LOGO
      };
      const _0x41557e = {
        caption: "🎬 ＰＯＤＩ MD PASTPAPER-DL 🎬",
        image: _0x3bffd1,
        footer: config.FOOTER,
        title: "Result from GovDoc. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x454393
      };
      const _0xc27f4b = {
        quoted: _0x1bf74f
      };
      return await _0x47213b.replyList(_0x2cac8f, _0x41557e, _0xc27f4b);
    }
    if (config.MODE === "button") {
      const _0x536962 = {
        text: N_FOUND
      };
      const _0x5c95b2 = {
        quoted: _0x1bf74f
      };
      if (_0x43bd96.length < 1) {
        return await _0x47213b.sendMessage(_0x2cac8f, _0x536962, _0x5c95b2);
      }
      var _0x2cf969 = [];
      for (var _0xd263f0 = 0; _0xd263f0 < _0x43bd96.length; _0xd263f0++) {
        _0x2cf969.push({
          'rows': [{
            'title': _0xd263f0 + 1,
            'description': _0x43bd96[_0xd263f0].title,
            'id': _0x300a0c + "pp " + _0x43bd96[_0xd263f0].link
          }]
        });
      }
      let _0x106b72 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Pastpaper. 📲",
          'sections': _0x2cf969
        })
      }];
      const _0x47fd21 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: ''
      };
      const _0x4a4bd9 = {
        quoted: _0x1bf74f
      };
      return await _0x47213b.sendButtonMessage(_0x2cac8f, _0x106b72, _0x3f37ba, _0x47fd21, _0x4a4bd9);
    }
  } catch (_0x1b61b4) {
    _0x529650("*ERROR !!*");
    _0x2b366c(_0x1b61b4);
  }
});
const _0x433103 = {
  pattern: 'pp',
  react: '📑',
  desc: "pastpaper downloader",
  filename: __filename
};
cmd(_0x433103, async (_0x56624d, _0x4cd976, _0x3328a7, {
  from: _0x1e7027,
  prefix: _0x234e36,
  q: _0x5448a2,
  l: _0x109569,
  isDev: _0x3a40a6,
  reply: _0x260c41
}) => {
  try {
    if (!_0x5448a2) {
      return await _0x260c41("*Please Give Me Text..! 🖊️*");
    }
    const _0x59c36d = await axios.get(_0x5448a2);
    const _0x5d915f = cheerio.load(_0x59c36d.data);
    const _0x590ad6 = [];
    _0x5d915f("div.row.justify-content-center > div").each((_0x481d29, _0x2e97fd) => {
      _0x590ad6.push({
        'title': _0x5d915f(_0x2e97fd).find("h5.cate-title").text(),
        'link': _0x5d915f(_0x2e97fd).find('a').attr("href"),
        'image': _0x5d915f(_0x2e97fd).find("img.img-fluid").attr("src")
      });
    });
    console.log(_0x590ad6);
    if (config.MODE === "nonbutton") {
      const _0x3ef3f1 = {
        quoted: _0x3328a7
      };
      if (_0x590ad6.length < 1) {
        return await _0x56624d.sendMessage(_0x1e7027, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x3ef3f1);
      }
      var _0x524d2e = [];
      for (var _0x1ce027 = 0; _0x1ce027 < _0x590ad6.length; _0x1ce027++) {
        _0x524d2e.push({
          'title': _0x1ce027 + 1,
          'description': _0x590ad6[_0x1ce027].title,
          'rowId': _0x234e36 + "pp1 " + _0x590ad6[_0x1ce027].link
        });
      }
      const _0x4fe628 = {
        title: "_[Result from GovDoc.]_",
        rows: _0x524d2e
      };
      const _0x58546e = [_0x4fe628, {
        'title': "↪️ Other Pages",
        'rows': [{
          'title': "1.1",
          'rowId': _0x234e36 + ("pp1 " + _0x5448a2 + "?page=2"),
          'description': "Next Page ↪️"
        }]
      }];
      const _0x409c0f = {
        url: _0x590ad6[0].image
      };
      const _0x5b3016 = {
        caption: "🎬 ＰＯＤＩ MD PASTPAPER-DL 🎬",
        image: _0x409c0f,
        footer: config.FOOTER,
        title: "Result from GOVDOC. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x58546e
      };
      const _0x4a51e4 = {
        quoted: _0x3328a7
      };
      return await _0x56624d.replyList(_0x1e7027, _0x5b3016, _0x4a51e4);
    }
    if (config.MODE === "button") {
      const _0x53552c = {
        text: N_FOUND
      };
      const _0x460b37 = {
        quoted: _0x3328a7
      };
      if (_0x590ad6.length < 1) {
        return await _0x56624d.sendMessage(_0x1e7027, _0x53552c, _0x460b37);
      }
      var _0x29cb8c = [];
      for (var _0x1ce027 = 0; _0x1ce027 < _0x590ad6.length; _0x1ce027++) {
        _0x29cb8c.push({
          'rows': [{
            'title': _0x1ce027 + 1,
            'description': _0x590ad6[_0x1ce027].title,
            'id': _0x234e36 + "pp1 " + _0x590ad6[_0x1ce027].link
          }]
        });
      }
      let _0x53767a = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Pastpaper. 📲",
          'sections': _0x29cb8c
        })
      }];
      const _0x4db973 = {
        image: _0x590ad6[0].image,
        header: '',
        footer: config.FOOTER,
        body: ''
      };
      const _0x2329d4 = {
        quoted: _0x3328a7
      };
      return await _0x56624d.sendButtonMessage(_0x1e7027, _0x53767a, _0x4cd976, _0x4db973, _0x2329d4);
    }
  } catch (_0x4c4794) {
    _0x260c41("*ERROR !!*");
    _0x109569(_0x4c4794);
  }
});
const _0x26ddae = {
  pattern: "pp1",
  react: '📑',
  desc: "pastpaper downloader",
  filename: __filename
};
cmd(_0x26ddae, async (_0xa4f0d1, _0x1ea83f, _0x1fdc9f, {
  from: _0x1de378,
  prefix: _0x3f0311,
  q: _0x441c5f,
  l: _0x2e797b,
  isDev: _0x2f5570,
  reply: _0x4c481c
}) => {
  try {
    if (!_0x441c5f) {
      return await _0x4c481c("*Please Give Me Text..! 🖊️*");
    }
    const _0x3de4e7 = await axios.get(_0x441c5f);
    const _0x397130 = cheerio.load(_0x3de4e7.data);
    const _0x362896 = [];
    _0x397130("div.row.align-items-end > div").each((_0x52c846, _0xbcfb2) => {
      _0x362896.push({
        'title': _0x397130(_0xbcfb2).find("div.button.cart-button > button.btn").text(),
        'link': _0x397130(_0xbcfb2).find('a').attr("href")
      });
    });
    const _0x33dc79 = _0x397130("h1.page-title").text();
    const _0x1cba93 = _0x397130("div.container > div:nth-child(1) > div > p").text();
    const _0x514dd9 = "VAJIRA MD PASTPAPER-DL\n\n\n*📚 Title: " + _0x33dc79 + "*\n *📈 Desc: " + _0x1cba93 + "*\n\n─────────────────────────────";
    if (config.MODE === "nonbutton") {
      const _0xa31499 = {
        quoted: _0x1fdc9f
      };
      if (_0x362896.length < 1) {
        return await _0xa4f0d1.sendMessage(_0x1de378, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0xa31499);
      }
      var _0x2874ca = [];
      for (var _0x447dcc = 0; _0x447dcc < _0x362896.length; _0x447dcc++) {
        _0x2874ca.push({
          'title': _0x447dcc + 1,
          'description': _0x362896[_0x447dcc].title + " medium",
          'rowId': _0x3f0311 + ("ppdl " + _0x362896[_0x447dcc].link + '|' + _0x33dc79)
        });
      }
      const _0x4953b0 = {
        title: "_[Select Medium.]_",
        rows: _0x2874ca
      };
      const _0x240336 = [_0x4953b0];
      const _0x1862f8 = {
        text: _0x514dd9,
        footer: config.FOOTER,
        title: "Result from GOVDOC. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x240336
      };
      const _0x171862 = {
        quoted: _0x1fdc9f
      };
      return await _0xa4f0d1.replyList(_0x1de378, _0x1862f8, _0x171862);
    }
    if (config.MODE === "button") {
      const _0xb09d7c = {
        text: N_FOUND
      };
      const _0x573b9d = {
        quoted: _0x1fdc9f
      };
      if (_0x362896.length < 1) {
        return await _0xa4f0d1.sendMessage(_0x1de378, _0xb09d7c, _0x573b9d);
      }
      var _0x3adfee = [];
      for (var _0x447dcc = 0; _0x447dcc < _0x362896.length; _0x447dcc++) {
        _0x3adfee.push({
          'rows': [{
            'title': _0x447dcc + 1,
            'description': _0x362896[_0x447dcc].title,
            'id': _0x3f0311 + "pp1 " + _0x362896[_0x447dcc].link
          }]
        });
      }
      let _0x5b4568 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Pastpaper. 📲",
          'sections': _0x3adfee
        })
      }];
      const _0x2c9ccb = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: _0x514dd9
      };
      const _0x3cd03d = {
        quoted: _0x1fdc9f
      };
      return await _0xa4f0d1.sendButtonMessage(_0x1de378, _0x5b4568, _0x1ea83f, _0x2c9ccb, _0x3cd03d);
    }
  } catch (_0x3123a5) {
    _0x4c481c("*ERROR !!*");
    _0x2e797b(_0x3123a5);
  }
});
const _0x27178b = {
  pattern: "ppdl",
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x27178b, async (_0x3cce9f, _0x514297, _0x566960, {
  from: _0x5cf00c,
  l: _0x262e5a,
  quoted: _0x1a16dd,
  prefix: _0x51e1c6,
  body: _0x31010a,
  isCmd: _0x310ebe,
  command: _0x365212,
  args: _0x3b9318,
  q: _0x51e632,
  isGroup: _0x406367,
  sender: _0x258ba6,
  senderNumber: _0x1be089,
  botNumber2: _0x42eb19,
  botNumber: _0x428439,
  pushname: _0x2245d8,
  isMe: _0x262430,
  isOwner: _0x4e0dff,
  groupMetadata: _0x1530a3,
  groupName: _0x46393b,
  participants: _0x20d56a,
  groupAdmins: _0xec83de,
  isBotAdmins: _0x4fb3d8,
  isAdmins: _0x4c7f37,
  reply: _0x4d0879
}) => {
  try {
    const _0x25b4ae = {
      text: 'ℹ️',
      key: _0x514297.key
    };
    const _0x5beeca = {
      react: _0x25b4ae
    };
    await _0x3cce9f.sendMessage(_0x5cf00c, _0x5beeca);
    const _0x10c663 = {
      text: "*Need apk link...*"
    };
    const _0x1426ea = {
      quoted: _0x514297
    };
    if (!_0x51e632) {
      return await _0x3cce9f.sendMessage(_0x5cf00c, _0x10c663, _0x1426ea);
    }
    const _0x6fdd1b = _0x51e632.split('|')[0];
    const _0x19cdd2 = _0x51e632.split('|')[1] || "vajira_md_dl_system";
    const _0x15ec4f = await axios.get(_0x6fdd1b);
    const _0x178335 = cheerio.load(_0x15ec4f.data);
    const _0x5774d9 = _0x178335("div.col-md-12.d-flex.justify-content-center.mt-md-5.mt-4.mb-4.mx-3 > div > a").attr("href");
    const _0x1787f9 = await axios.get(_0x5774d9);
    const _0x4ed829 = cheerio.load(_0x1787f9.data);
    const _0x991a94 = _0x4ed829("#download").attr("href");
    var _0x1d8f2c = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x19c890 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x267da7
    } = await _0x3cce9f.sendMessage(_0x5cf00c, _0x19c890);
    for (let _0xdc302c = 0; _0xdc302c < _0x1d8f2c.length; _0xdc302c++) {
      const _0x177c7b = {
        text: _0x1d8f2c[_0xdc302c],
        edit: _0x267da7
      };
      await _0x3cce9f.sendMessage(_0x5cf00c, _0x177c7b);
    }
    const _0x2a3e11 = {
      'document': await getBuffer(_0x991a94),
      'caption': "*🎬 ＰＯＤＩ MD 🎬*",
      'mimetype': "application/pdf",
      'fileName': _0x19cdd2 + ".pdf"
    };
    await _0x3cce9f.sendMessage(_0x5cf00c, _0x2a3e11);
    const _0x1b977d = {
      text: '✅',
      key: _0x514297.key
    };
    const _0x2a29e4 = {
      react: _0x1b977d
    };
    await _0x3cce9f.sendMessage(_0x5cf00c, _0x2a29e4);
  } catch (_0x4c0afc) {
    _0x4d0879("*ERROR !!*");
    _0x262e5a(_0x4c0afc);
  }
});
const _0x13ee25 = {
  pattern: "modwhatsapp",
  react: '📑',
  category: "download",
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x13ee25, async (_0x4b759a, _0x1a5cca, _0x3be992, {
  from: _0x355bcd,
  prefix: _0x278c2d,
  q: _0x4e5e7e,
  l: _0x25ba20,
  isDev: _0x2fa6f7,
  reply: _0x44931c
}) => {
  try {
    if (!_0x4e5e7e) {
      return await _0x44931c("*Please Give Me Text..! 🖊️*");
    }
    const _0x18986b = "https://apkdon.net/?s=" + _0x4e5e7e;
    const _0x4c3e99 = await axios.get(_0x18986b);
    const _0x58245d = cheerio.load(_0x4c3e99.data);
    const _0x186399 = [];
    _0x58245d("article").each((_0x502c18, _0x157905) => {
      _0x186399.push({
        'link': _0x58245d(_0x157905).find("h2 > a").attr("href"),
        'title': _0x58245d(_0x157905).find("h2.entry-title").text()
      });
    });
    if (config.MODE === "nonbutton") {
      const _0x41a1c4 = {
        quoted: _0x3be992
      };
      if (_0x186399.length < 1) {
        return await _0x4b759a.sendMessage(_0x355bcd, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x41a1c4);
      }
      var _0x16ff4e = [];
      for (var _0x9d7eba = 0; _0x9d7eba < _0x186399.length; _0x9d7eba++) {
        _0x16ff4e.push({
          'title': _0x9d7eba + 1,
          'description': _0x186399[_0x9d7eba].title,
          'rowId': _0x278c2d + "mw " + _0x186399[_0x9d7eba].link
        });
      }
      const _0x2bdf49 = {
        title: "_[Result from modwhatsapp.]_",
        rows: _0x16ff4e
      };
      const _0x359dd1 = [_0x2bdf49];
      const _0x5a814a = {
        url: config.LOGO
      };
      const _0x25aaaa = {
        caption: "⚜️ ＰＯＤＩ MD MODWHATSAPP-DL ⚜️",
        image: _0x5a814a,
        footer: config.FOOTER,
        title: "Result from Mod Whatsapp. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x359dd1
      };
      const _0x310721 = {
        quoted: _0x3be992
      };
      return await _0x4b759a.replyList(_0x355bcd, _0x25aaaa, _0x310721);
    }
    if (config.MODE === "button") {
      const _0xdce1ff = {
        text: N_FOUND
      };
      const _0x58129e = {
        quoted: _0x3be992
      };
      if (_0x186399.length < 1) {
        return await _0x4b759a.sendMessage(_0x355bcd, _0xdce1ff, _0x58129e);
      }
      var _0x6da01 = [];
      for (var _0x9d7eba = 0; _0x9d7eba < _0x186399.length; _0x9d7eba++) {
        _0x6da01.push({
          'rows': [{
            'title': _0x9d7eba + 1,
            'description': _0x186399[_0x9d7eba].title,
            'id': _0x278c2d + "mw " + _0x186399[_0x9d7eba].link
          }]
        });
      }
      let _0x13b767 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from ModWhatsapp. 📲",
          'sections': _0x6da01
        })
      }];
      const _0x60d5ff = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "⚜️ ＰＯＤＩ MD MODWHATSAPP-DL ⚜️"
      };
      const _0x5ac495 = {
        quoted: _0x3be992
      };
      return await _0x4b759a.sendButtonMessage(_0x355bcd, _0x13b767, _0x1a5cca, _0x60d5ff, _0x5ac495);
    }
  } catch (_0x14f650) {
    _0x44931c("*ERROR !!*");
    _0x25ba20(_0x14f650);
  }
});
const _0xb1bbf2 = {
  pattern: 'mw',
  react: '📑',
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0xb1bbf2, async (_0x8fcdc1, _0x1c1908, _0x2e6ab8, {
  from: _0x2d6cf5,
  prefix: _0x4578db,
  q: _0x1be5ff,
  l: _0x4d1dd9,
  isDev: _0x29e50e,
  reply: _0xd27e40
}) => {
  try {
    if (!_0x1be5ff) {
      return await _0xd27e40("*Please Give Me Text..! 🖊️*");
    }
    const _0x49b8a4 = await axios.get(_0x1be5ff);
    const _0x428f93 = cheerio.load(_0x49b8a4.data);
    const _0x51b794 = _0x428f93("h1.entry-title").text();
    const _0x20f7f6 = _0x428f93("time.entry-date.published.updated").text();
    const _0x99caed = await axios.get(_0x1be5ff);
    const _0x5db45f = cheerio.load(_0x99caed.data);
    const _0x2d7deb = [];
    _0x5db45f("div.kt-inside-inner-col > div.wp-block-kadence-advancedbtn.kb-buttons-wrap").each((_0x4e1097, _0x489525) => {
      _0x2d7deb.push({
        'link': _0x5db45f(_0x489525).find('a').attr("href"),
        'title1': _0x5db45f(_0x489525).find("span.kt-btn-inner-text").text()
      });
    });
    const _0x4c7d82 = "⚜️ ＰＯＤＩ MD MODWHATSAPP-DL ⚜️\n\n🚀 Title :- " + _0x51b794 + "\n📄 Date :- " + _0x20f7f6;
    if (config.MODE === "nonbutton") {
      const _0x54df37 = {
        quoted: _0x2e6ab8
      };
      if (_0x2d7deb.length < 1) {
        return await _0x8fcdc1.sendMessage(_0x2d6cf5, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x54df37);
      }
      var _0x26d853 = [];
      for (var _0x1dc98d = 0; _0x1dc98d < _0x2d7deb.length; _0x1dc98d++) {
        _0x26d853.push({
          'title': _0x1dc98d + 1,
          'description': _0x2d7deb[_0x1dc98d].title1,
          'rowId': _0x4578db + "mwdl " + _0x2d7deb[_0x1dc98d].link
        });
      }
      const _0x3a2941 = {
        title: "_[Result from modwhatsapp.]_",
        rows: _0x26d853
      };
      const _0x4c2b02 = [_0x3a2941];
      const _0x5f10c8 = {
        text: _0x4c7d82,
        footer: config.FOOTER,
        title: "Result from Mod Whatsapp. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x4c2b02
      };
      const _0x4e052d = {
        quoted: _0x2e6ab8
      };
      return await _0x8fcdc1.replyList(_0x2d6cf5, _0x5f10c8, _0x4e052d);
    }
    if (config.MODE === "button") {
      const _0x229abc = {
        text: N_FOUND
      };
      const _0xa3bccf = {
        quoted: _0x2e6ab8
      };
      if (_0x2d7deb.length < 1) {
        return await _0x8fcdc1.sendMessage(_0x2d6cf5, _0x229abc, _0xa3bccf);
      }
      var _0x44a04b = [];
      for (var _0x1dc98d = 0; _0x1dc98d < _0x2d7deb.length; _0x1dc98d++) {
        _0x44a04b.push({
          'rows': [{
            'title': _0x1dc98d + 1,
            'description': _0x2d7deb[_0x1dc98d].title1,
            'id': _0x4578db + "mwdl " + _0x2d7deb[_0x1dc98d].link
          }]
        });
      }
      let _0x15918c = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from ModWhatsapp. 📲",
          'sections': _0x44a04b
        })
      }];
      const _0x159473 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: _0x4c7d82
      };
      const _0x2a4418 = {
        quoted: _0x2e6ab8
      };
      return await _0x8fcdc1.sendButtonMessage(_0x2d6cf5, _0x15918c, _0x1c1908, _0x159473, _0x2a4418);
    }
  } catch (_0x16241c) {
    _0xd27e40("*ERROR !!*");
    _0x4d1dd9(_0x16241c);
  }
});
const _0x72b40b = {
  pattern: "mwdl",
  react: '📑',
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x72b40b, async (_0xf3adc0, _0x3bedfe, _0x1b759d, {
  from: _0x184ba5,
  prefix: _0x54b01e,
  q: _0x1ae7d5,
  l: _0x24fb05,
  isDev: _0xa4e87d,
  reply: _0x3f567f
}) => {
  try {
    if (!_0x1ae7d5) {
      return await _0x3f567f("*Please Give Me Text..! 🖊️*");
    }
    const _0x359467 = await axios.get(_0x1ae7d5);
    const _0x309444 = cheerio.load(_0x359467.data);
    const _0x3cc675 = [];
    _0x309444("div.kt-inside-inner-col > div.wp-block-kadence-advancedbtn.kb-buttons-wrap").each((_0x253913, _0x56f2cf) => {
      _0x3cc675.push({
        'dllink': _0x309444(_0x56f2cf).find('a').attr("href"),
        'dltitle': _0x309444(_0x56f2cf).find("span.kt-btn-inner-text").text()
      });
    });
    if (config.MODE === "nonbutton") {
      const _0x430709 = {
        quoted: _0x1b759d
      };
      if (_0x3cc675.length < 1) {
        return await _0xf3adc0.sendMessage(_0x184ba5, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x430709);
      }
      var _0x436d13 = [];
      for (var _0x1b1e5d = 0; _0x1b1e5d < _0x3cc675.length; _0x1b1e5d++) {
        _0x436d13.push({
          'title': _0x1b1e5d + 1,
          'description': _0x3cc675[_0x1b1e5d].dltitle,
          'rowId': _0x54b01e + ("mdapk " + _0x3cc675[_0x1b1e5d].dllink + '|' + _0x3cc675[_0x1b1e5d].dltitle)
        });
      }
      const _0x479234 = {
        title: "_[Result from modwhatsapp.]_",
        rows: _0x436d13
      };
      const _0x42d508 = [_0x479234];
      const _0x458684 = {
        text: "⚜️ ＰＯＤＩ MD MODWHATSAPP-DL ⚜️",
        footer: config.FOOTER,
        title: "Result from Mod Whatsapp. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x42d508
      };
      const _0x5ca06c = {
        quoted: _0x1b759d
      };
      return await _0xf3adc0.replyList(_0x184ba5, _0x458684, _0x5ca06c);
    }
    if (config.MODE === "button") {
      const _0x3c3f99 = {
        text: N_FOUND
      };
      const _0x2fe6d5 = {
        quoted: _0x1b759d
      };
      if (_0x3cc675.length < 1) {
        return await _0xf3adc0.sendMessage(_0x184ba5, _0x3c3f99, _0x2fe6d5);
      }
      var _0x54c222 = [];
      for (var _0x1b1e5d = 0; _0x1b1e5d < _0x3cc675.length; _0x1b1e5d++) {
        _0x54c222.push({
          'rows': [{
            'title': _0x1b1e5d + 1,
            'description': _0x3cc675[_0x1b1e5d].dltitle,
            'id': _0x54b01e + ("mdapk " + _0x3cc675[_0x1b1e5d].dllink + '|' + _0x3cc675[_0x1b1e5d].dltitle)
          }]
        });
      }
      let _0x2bc723 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from ModWhatsapp. 📲",
          'sections': _0x54c222
        })
      }];
      const _0x43f72d = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "⚜️ ＰＯＤＩ MD MODWHATSAPP-DL ⚜️"
      };
      const _0x443ba2 = {
        quoted: _0x1b759d
      };
      return await _0xf3adc0.sendButtonMessage(_0x184ba5, _0x2bc723, _0x3bedfe, _0x43f72d, _0x443ba2);
    }
  } catch (_0xd34a7f) {
    _0x3f567f("*ERROR !!*");
    _0x24fb05(_0xd34a7f);
  }
});
const _0x4f4b82 = {
  pattern: "modapk",
  react: '📑',
  category: "download",
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x4f4b82, async (_0x247cfc, _0x5d35f1, _0x3a8e35, {
  from: _0x5875ff,
  prefix: _0x2491c6,
  q: _0x5c8ccf,
  l: _0x4bed90,
  isDev: _0x4ab6a4,
  reply: _0x299f96
}) => {
  try {
    if (!_0x5c8ccf) {
      return await _0x299f96("*Please Give Me Text..! 🖊️*");
    }
    const _0x3a802f = "https://an1.com/?story=" + _0x5c8ccf + "&do=search&subaction=search";
    const _0x472c17 = await axios.get(_0x3a802f);
    const _0x3fbcb1 = cheerio.load(_0x472c17.data);
    const _0x4080e7 = [];
    _0x3fbcb1("div.item").each((_0x53e3ba, _0x186fa2) => {
      _0x4080e7.push({
        'link': _0x3fbcb1(_0x186fa2).find('a').attr("href"),
        'title': _0x3fbcb1(_0x186fa2).find("div.name > a > span").text()
      });
    });
    if (config.MODE === "nonbutton") {
      const _0x30bc0f = {
        quoted: _0x3a8e35
      };
      if (_0x4080e7.length < 1) {
        return await _0x247cfc.sendMessage(_0x5875ff, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x30bc0f);
      }
      var _0x37edc4 = [];
      for (var _0x2b363e = 0; _0x2b363e < _0x4080e7.length; _0x2b363e++) {
        _0x37edc4.push({
          'title': _0x2b363e + 1,
          'description': _0x4080e7[_0x2b363e].title,
          'rowId': _0x2491c6 + "ma " + _0x4080e7[_0x2b363e].link
        });
      }
      const _0x5d4821 = {
        title: "_[Result from an1.]_",
        rows: _0x37edc4
      };
      const _0x2aa38f = [_0x5d4821];
      const _0x1841a5 = {
        url: "https://i.ibb.co/D5760gq/xwl2e6b5.png"
      };
      const _0x373560 = {
        caption: "🔱 ＰＯＤＩ MD MODAPK-DL 🔱",
        image: _0x1841a5,
        footer: config.FOOTER,
        title: "Result from an1. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x2aa38f
      };
      const _0x32f460 = {
        quoted: _0x3a8e35
      };
      return await _0x247cfc.replyList(_0x5875ff, _0x373560, _0x32f460);
    }
    if (config.MODE === "button") {
      const _0x23bc47 = {
        text: N_FOUND
      };
      const _0x14cfa7 = {
        quoted: _0x3a8e35
      };
      if (_0x4080e7.length < 1) {
        return await _0x247cfc.sendMessage(_0x5875ff, _0x23bc47, _0x14cfa7);
      }
      var _0x4ceaf4 = [];
      for (var _0x2b363e = 0; _0x2b363e < _0x4080e7.length; _0x2b363e++) {
        _0x4ceaf4.push({
          'rows': [{
            'title': _0x2b363e + 1,
            'description': _0x4080e7[_0x2b363e].title,
            'id': _0x2491c6 + ("ma " + _0x4080e7[_0x2b363e].link)
          }]
        });
      }
      let _0x30094b = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from ModWhatsapp. 📲",
          'sections': _0x4ceaf4
        })
      }];
      const _0x541907 = {
        image: "https://i.ibb.co/D5760gq/xwl2e6b5.png",
        header: '',
        footer: config.FOOTER,
        body: "⚜️ ＰＯＤＩ MD MODAPK-DL ⚜️"
      };
      const _0x2e1651 = {
        quoted: _0x3a8e35
      };
      return await _0x247cfc.sendButtonMessage(_0x5875ff, _0x30094b, _0x5d35f1, _0x541907, _0x2e1651);
    }
  } catch (_0x15b0d3) {
    _0x299f96("*ERROR !!*");
    _0x4bed90(_0x15b0d3);
  }
});
const _0x5f1e29 = {
  pattern: "mega",
  category: "download",
  react: '⬇️',
  use: ".mega < Link >",
  desc: "Download Mega file and send it.",
  filename: __filename
};
cmd(_0x5f1e29, async (_0x25a1e8, _0x37282e, _0x3e5681, {
  from: _0x25662c,
  quoted: _0x4b614e,
  body: _0x5a1630,
  isCmd: _0xdd8a0e,
  command: _0x367662,
  args: _0x3f2bbc,
  q: _0x15c5b3,
  isGroup: _0x6601a,
  sender: _0x5c2b11,
  senderNumber: _0x5fe4d3,
  botNumber2: _0x1ec687,
  botNumber: _0x558f0c,
  pushname: _0x326142,
  isMe: _0x458e6a,
  isOwner: _0x2ad0ba,
  groupMetadata: _0x21f9b6,
  groupName: _0x50f7bd,
  participants: _0x35d3f2,
  groupAdmins: _0xe65b29,
  isBotAdmins: _0x305af8,
  isAdmins: _0x5b9ae2,
  reply: _0x1cbc69
}) => {
  try {
    if (!_0x15c5b3 || !isUrl(_0x15c5b3) || !_0x15c5b3.includes("mega.nz")) {
      return _0x1cbc69("Please provide a valid Mega.nz file URL.");
    }
    const [_0x4d8c96, _0x2b7527] = _0x15c5b3.split('#');
    if (!_0x2b7527) {
      return _0x1cbc69("Error: Decryption key is missing in the provided URL.");
    }
    const _0x543f6d = File.fromURL(_0x4d8c96 + '#' + _0x2b7527);
    _0x543f6d.on("progress", (_0x4fee37, _0x2961b5) => {
      const _0x262495 = (_0x4fee37 / _0x2961b5 * 100).toFixed(2);
      _0x1cbc69("Downloading: " + _0x262495 + "% (" + (_0x4fee37 / 1024 / 1024).toFixed(2) + " MB of " + (_0x2961b5 / 1024 / 1024).toFixed(2) + " MB)");
    });
    const _0x5d68e9 = await _0x543f6d.downloadBuffer();
    const _0x597712 = {
      document: _0x5d68e9,
      mimetype: "application/octet-stream",
      fileName: "mega_downloaded_file"
    };
    const _0x4a00c3 = {
      quoted: _0x37282e
    };
    await _0x25a1e8.sendMessage(_0x25662c, _0x597712, _0x4a00c3);
    _0x1cbc69("File sent successfully!");
  } catch (_0x9fe752) {
    console.error(_0x9fe752);
    _0x1cbc69("Error: " + _0x9fe752.message);
  }
});
const _0x31cb47 = {
  pattern: "modgame",
  react: '📑',
  category: "download",
  desc: "modgame downloader",
  filename: __filename
};
cmd(_0x31cb47, async (_0x1b4112, _0x45e097, _0xc8f656, {
  from: _0x3e941d,
  prefix: _0x504452,
  q: _0x3edc5c,
  l: _0x475691,
  isDev: _0x43a50b,
  reply: _0x2f8227
}) => {
  try {
    if (!_0x3edc5c) {
      return await _0x2f8227("*Please Give Me Text..! 🖊️*");
    }
    const _0x238fb4 = "https://gamekillerapp.com/search/" + _0x3edc5c;
    const _0x223201 = await axios.get(_0x238fb4);
    const _0x445dd3 = cheerio.load(_0x223201.data);
    const _0x84246a = [];
    _0x445dd3("div > a.col-12.col-lg-4.col-xl-4.d-flex").each((_0x509861, _0x57e297) => {
      _0x84246a.push({
        'title': _0x445dd3(_0x57e297).find("div.flex-fill.d-flex.flex-column.justify-content-between > h3").text(),
        'size': _0x445dd3(_0x57e297).find("div.download.ellipsis-1 > span").text().trim(),
        'type': _0x445dd3(_0x57e297).find("div.tools.ellipsis-1").text().trim(),
        'link': _0x445dd3(_0x57e297).find("div.flex-fill.d-flex.flex-column.justify-content-between > h3").text().replace(/ /g, '-').replace(/:/g, '-').replace(/--/g, '-'),
        'image': _0x445dd3(_0x57e297).find("div.icon > img").attr("src")
      });
    });
    if (config.MODE === "nonbutton") {
      const _0x5d431c = {
        quoted: _0xc8f656
      };
      if (_0x84246a.length < 1) {
        return await _0x1b4112.sendMessage(_0x3e941d, {
          'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
        }, _0x5d431c);
      }
      var _0x1ba0d1 = [];
      for (var _0x356191 = 0; _0x356191 < _0x84246a.length; _0x356191++) {
        _0x1ba0d1.push({
          'title': _0x356191 + 1,
          'description': _0x84246a[_0x356191].title + " | " + _0x84246a[_0x356191].size,
          'rowId': _0x504452 + "mag " + _0x84246a[_0x356191].link
        });
      }
      const _0x104939 = {
        title: "_[Result from an1.]_",
        rows: _0x1ba0d1
      };
      const _0x5a8ebc = [_0x104939];
      const _0x55b80a = {
        url: _0x84246a[0].image
      };
      const _0x3cc97c = {
        caption: "🎬 ＰＯＤＩ MD MOD GAMES-DL 🎬\n\n   ⏳ Search A Game Name: " + _0x3edc5c + "\n📲 Search top 10 Movies\n",
        image: _0x55b80a,
        footer: config.FOOTER,
        title: "Result from an1. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x5a8ebc
      };
      const _0x4f7bed = {
        quoted: _0xc8f656
      };
      return await _0x1b4112.replyList(_0x3e941d, _0x3cc97c, _0x4f7bed);
    }
    if (config.MODE === "button") {
      const _0x40986c = {
        text: N_FOUND
      };
      const _0x200bbb = {
        quoted: _0xc8f656
      };
      if (_0x84246a.length < 1) {
        return await _0x1b4112.sendMessage(_0x3e941d, _0x40986c, _0x200bbb);
      }
      var _0x336e47 = [];
      for (var _0x356191 = 0; _0x356191 < _0x84246a.length; _0x356191++) {
        _0x336e47.push({
          'rows': [{
            'title': _0x356191 + 1,
            'description': _0x84246a[_0x356191].title + " | " + _0x84246a[_0x356191].size,
            'id': _0x504452 + ("mag " + _0x84246a[_0x356191].link)
          }]
        });
      }
      let _0x25a883 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from an1. 📲",
          'sections': _0x336e47
        })
      }];
      const _0x3a4164 = {
        image: _0x84246a[0].image,
        header: '',
        footer: config.FOOTER,
        body: "⚜️ ＰＯＤＩ MD MODGAME-DL ⚜️"
      };
      const _0x40e2d1 = {
        quoted: _0xc8f656
      };
      return await _0x1b4112.sendButtonMessage(_0x3e941d, _0x25a883, _0x45e097, _0x3a4164, _0x40e2d1);
    }
  } catch (_0x34634a) {
    _0x2f8227("*ERROR !!*");
    _0x475691(_0x34634a);
  }
});
const _0x19275c = {
  pattern: "mag",
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x19275c, async (_0x2f8e8e, _0x10527c, _0x3c5854, {
  from: _0x4f469d,
  l: _0x17072c,
  quoted: _0x366ad9,
  prefix: _0x1dc49e,
  body: _0x65a1be,
  isCmd: _0x692ac0,
  command: _0x19f7af,
  args: _0x407369,
  q: _0x533742,
  isGroup: _0xba4179,
  sender: _0x24fbfd,
  senderNumber: _0x49aec2,
  botNumber2: _0x492bf7,
  botNumber: _0x242297,
  pushname: _0x2e21ac,
  isMe: _0x3de55e,
  isOwner: _0x2623ef,
  groupMetadata: _0x313988,
  groupName: _0x1f2c31,
  participants: _0x3aa09e,
  groupAdmins: _0x573ce9,
  isBotAdmins: _0x2e4648,
  isAdmins: _0x4883b7,
  reply: _0x3a0df9
}) => {
  try {
    const _0x114823 = {
      text: 'ℹ️',
      key: _0x10527c.key
    };
    const _0x33d43f = {
      react: _0x114823
    };
    await _0x2f8e8e.sendMessage(_0x4f469d, _0x33d43f);
    const _0x21fd29 = {
      text: "*Need apk link...*"
    };
    const _0x1d7413 = {
      quoted: _0x10527c
    };
    if (!_0x533742) {
      return await _0x2f8e8e.sendMessage(_0x4f469d, _0x21fd29, _0x1d7413);
    }
    const _0x42f78b = "https://gamekillerapp.com/games/" + _0x533742;
    const _0x314790 = await axios.get(_0x42f78b);
    const _0x11f6d = cheerio.load(_0x314790.data);
    const _0xf90514 = _0x11f6d("div.d-flex.flex-column.justify-content-between.flex-fill > h1").text();
    const _0x48c5ad = _0x11f6d("div.icon > img").attr("src");
    const _0x49618e = _0x11f6d("a.ordinary-download.d-flex.justify-content-center.align-items-center").attr("href");
    const _0x341f7a = "https://gamekillerapp.com" + _0x49618e;
    const _0x124e15 = _0x11f6d("div.updateTime").text();
    const _0x4f577b = _0x11f6d("div:nth-child(6) > div.col-6.desc-text > a").text().trim();
    const _0xeba58c = _0x11f6d("div:nth-child(3) > div.col-6.desc-text").text().trim();
    const _0x4470f3 = _0x11f6d("div:nth-child(4) > div.col-6.desc-text > a:nth-child(3)").text().trim();
    const _0x5309d2 = await axios.get(_0x341f7a);
    const _0x4977d9 = cheerio.load(_0x5309d2.data);
    const _0x194d4f = _0x4977d9("section.normal-download > a").attr("href");
    let _0x566335 = "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n   \n *MOD GAMES-DOWNLOADER*\n\n *📚 Title: " + _0xf90514 + "*\n *📈 Date: " + _0x124e15 + "*\n *♓ Category: " + _0x4f577b + "*\n *🧬 Vertion: " + _0xeba58c + "*\n *🌐 Mod Info: " + _0x4470f3 + "*\n \n─────────────────────────────";
    if (config.MODE === "nonbutton") {
      const _0x139eae = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x1dc49e + ("mdapk " + _0x194d4f + '|' + _0xf90514),
          'description': "Download the modgames"
        }]
      }];
      const _0x106bc9 = {
        url: _0x48c5ad
      };
      const _0x263748 = {
        caption: _0x566335,
        image: _0x106bc9,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x139eae
      };
      const _0x55884d = {
        quoted: _0x10527c
      };
      return await _0x2f8e8e.replyList(_0x4f469d, _0x263748, _0x55884d);
    }
    if (config.MODE === "button") {
      const _0x407a81 = {
        title: '',
        description: "Download the modgames",
        id: _0x1dc49e + "mdapk " + _0x194d4f + '|' + _0xf90514
      };
      const _0x26668b = {
        title: "VAJIRA MD",
        rows: [_0x407a81]
      };
      let _0x46fcde = [_0x26668b];
      const _0x4760d5 = {
        title: "Click Here⎙",
        sections: _0x46fcde
      };
      const _0x573faa = {
        url: _0x48c5ad
      };
      const _0x3442a5 = {
        displayText: "Download the modapk"
      };
      const _0x7230fc = {
        buttonId: _0x1dc49e + "mdapk " + _0x194d4f + '|' + _0xf90514,
        buttonText: _0x3442a5
      };
      const _0x296901 = {
        quoted: _0x3c5854
      };
      _0x2f8e8e.sendMessage(_0x4f469d, {
        'image': _0x573faa,
        'caption': _0x566335,
        'footer': config.FOOTER,
        'buttons': [_0x7230fc, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x4760d5)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x296901);
    }
  } catch (_0x36fec2) {
    _0x3a0df9("*ERROR !!*");
    _0x17072c(_0x36fec2);
  }
});
const _0x52c7de = {
  pattern: 'ma',
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x52c7de, async (_0x37ebc8, _0x51219a, _0x4721a0, {
  from: _0x4ec19e,
  l: _0x54b153,
  quoted: _0x5ada73,
  prefix: _0x143433,
  body: _0x671f6a,
  isCmd: _0x833b11,
  command: _0x589d76,
  args: _0x450f19,
  q: _0xb95272,
  isGroup: _0x4cfe55,
  sender: _0x377090,
  senderNumber: _0x40f94e,
  botNumber2: _0x5952b9,
  botNumber: _0x3abcaa,
  pushname: _0x930d82,
  isMe: _0x5a3df2,
  isOwner: _0x236809,
  groupMetadata: _0x137334,
  groupName: _0x1635cb,
  participants: _0x47d02d,
  groupAdmins: _0x2b07d5,
  isBotAdmins: _0x1572e4,
  isAdmins: _0x1d5402,
  reply: _0x2a6617
}) => {
  try {
    const _0xe1a6a8 = {
      text: 'ℹ️',
      key: _0x51219a.key
    };
    const _0x4d6fce = {
      react: _0xe1a6a8
    };
    await _0x37ebc8.sendMessage(_0x4ec19e, _0x4d6fce);
    const _0x22d768 = {
      text: "*Need apk link...*"
    };
    const _0x446939 = {
      quoted: _0x51219a
    };
    if (!_0xb95272) {
      return await _0x37ebc8.sendMessage(_0x4ec19e, _0x22d768, _0x446939);
    }
    const _0x164936 = await axios.get(_0xb95272);
    const _0x1adeea = cheerio.load(_0x164936.data);
    const _0x113a78 = _0x1adeea("a.btn.btn-lg.btn-green").attr("href");
    const _0x4cc168 = _0x1adeea("figure.img > img").attr("src");
    const _0x102829 = _0x1adeea("h1.title.xxlgf").text();
    const _0x44cbc1 = _0x1adeea("div.app_view-first > div > ul > li:nth-child(1) > span").text();
    const _0x176a89 = _0x1adeea("div.app_view-first > div > ul > li:nth-child(2) > span").text();
    const _0x3a42bc = _0x1adeea("div.app_view-first > div > ul > li:nth-child(3) > span").text();
    const _0x14f90c = await axios.get("https://an1.com/" + _0x113a78);
    const _0x1d9107 = cheerio.load(_0x14f90c.data);
    const _0xdd049b = _0x1d9107("#pre_download").attr("href");
    let _0x176b4a = "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n   \n *MOD APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x102829 + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0x3a42bc + "*\n *🧬 ᴀᴘᴘ ᴠᴇʀꜱɪᴏɴ: " + _0x176a89 + "*\n *🌐 ᴀᴘᴘ ᴏꜱ: " + _0x44cbc1 + "*\n \n─────────────────────────────";
    if (config.MODE === "nonbutton") {
      const _0x2b9146 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x143433 + ("mdapk " + _0xdd049b + '|' + _0x102829),
          'description': "Download the modapk"
        }]
      }];
      const _0x31a75c = {
        url: _0x4cc168
      };
      const _0x5e900e = {
        caption: _0x176b4a,
        image: _0x31a75c,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x2b9146
      };
      const _0x5d0f6b = {
        quoted: _0x51219a
      };
      return await _0x37ebc8.replyList(_0x4ec19e, _0x5e900e, _0x5d0f6b);
    }
    if (config.MODE === "button") {
      const _0x3bb007 = {
        title: '',
        description: "Download the modgames",
        id: _0x143433 + "mdapk " + _0xdd049b + '|' + _0x102829
      };
      const _0x906e9a = {
        title: "VAJIRA MD",
        rows: [_0x3bb007]
      };
      let _0x18c52e = [_0x906e9a];
      const _0xbe0daa = {
        title: "Click Here⎙",
        sections: _0x18c52e
      };
      const _0x1f1039 = {
        url: _0x4cc168
      };
      const _0x4d1284 = {
        displayText: "Download the modapk"
      };
      const _0xa35f34 = {
        buttonId: _0x143433 + "mdapk " + _0xdd049b + '|' + _0x102829,
        buttonText: _0x4d1284
      };
      const _0x3bb77b = {
        quoted: _0x4721a0
      };
      _0x37ebc8.sendMessage(_0x4ec19e, {
        'image': _0x1f1039,
        'caption': _0x176b4a,
        'footer': config.FOOTER,
        'buttons': [_0xa35f34, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0xbe0daa)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x3bb77b);
    }
  } catch (_0x2b6569) {
    _0x2a6617("*ERROR !!*");
    _0x54b153(_0x2b6569);
  }
});
const _0x393d38 = {
  pattern: "mdapk",
  react: '📥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x393d38, async (_0x20f64f, _0x52f897, _0x3be60e, {
  from: _0xf64b1c,
  q: _0x2db0ed,
  isDev: _0x4abd9b,
  reply: _0x1567a0
}) => {
  if (!_0x2db0ed) {
    return await _0x1567a0("*Please provide a direct URL!*");
  }
  try {
    const _0x102116 = _0x2db0ed.split('|')[0];
    const _0x322698 = _0x2db0ed.split('|')[1] || "tc_movie_dl_system";
    var _0x137bc0 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x231181 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴀᴘᴋ..."
    };
    let {
      key: _0x5e38ae
    } = await _0x20f64f.sendMessage(_0xf64b1c, _0x231181);
    for (let _0x43ba22 = 0; _0x43ba22 < _0x137bc0.length; _0x43ba22++) {
      const _0x554b0d = {
        text: _0x137bc0[_0x43ba22],
        edit: _0x5e38ae
      };
      await _0x20f64f.sendMessage(_0xf64b1c, _0x554b0d);
    }
    const _0x100a30 = {
      'document': await getBuffer(_0x102116),
      'caption': "*VAJIRA MD MOD APk*",
      'mimetype': "application/mod.apk",
      'fileName': _0x322698 + ".apk"
    };
    await _0x20f64f.sendMessage(_0xf64b1c, _0x100a30);
    const _0x28a667 = {
      text: '✅',
      key: _0x52f897.key
    };
    const _0x4d8dd5 = {
      react: _0x28a667
    };
    await _0x20f64f.sendMessage(_0xf64b1c, _0x4d8dd5);
  } catch (_0x13f804) {
    console.error("Error fetching or sending", _0x13f804);
    const _0x1eaeed = {
      quoted: _0x52f897
    };
    await _0x20f64f.sendMessage(_0xf64b1c, "*Error fetching or sending *", _0x1eaeed);
  }
});
const _0xcf6470 = {
  pattern: "xnxx",
  react: '📱',
  desc: "xxx video dowloader",
  category: "download",
  use: ".xnxx mia kalifa",
  filename: __filename
};
cmd(_0xcf6470, async (_0x5e5897, _0x5d0676, _0x5ad712, {
  from: _0x34ceec,
  prefix: _0x4666b0,
  l: _0x599c9f,
  quoted: _0x57667f,
  body: _0x42fa91,
  isCmd: _0x940cfc,
  command: _0x483e29,
  args: _0x108723,
  q: _0x5eceec,
  isGroup: _0x12dd3f,
  sender: _0x5c1205,
  senderNumber: _0x32468c,
  botNumber2: _0x3f1f2c,
  botNumber: _0x757126,
  pushname: _0x2ebf76,
  isMe: _0x171a43,
  isOwner: _0xd6b374,
  groupMetadata: _0xa2d5ec,
  groupName: _0x1c0aee,
  participants: _0x7af2cd,
  groupAdmins: _0x594782,
  isBotAdmins: _0x32794d,
  isAdmins: _0x2f29bc,
  reply: _0x4cc655
}) => {
  try {
    if (!_0x5eceec) {
      return _0x5d0676.reply("Enter Query");
    }
    const _0x221e18 = require("api-dylux");
    let _0x3a177f = await _0x221e18.xnxxSearch(_0x5eceec);
    let _0x3f0644 = _0x3a177f.result.map(() => "මොනාද හුත්තො කුනුහරප ඉල්ලන්නෙ🤣 \n බැන්ඩ් කරගනිම් ඔව ඉල්ලල උබෙ whatsapp එක🤣\nවලත්තයා ");
    if (_0x3a177f.status) {
      _0x5d0676.reply(_0x3f0644);
    }
    const _0x2547c2 = _0x3a177f.result;
    if (config.MODE === "nonbutton") {
      const _0x3a7cbc = {
        text: N_FOUND
      };
      const _0x505019 = {
        quoted: _0x5d0676
      };
      if (_0x2547c2.length < 1) {
        return await _0x5e5897.sendMessage(_0x34ceec, _0x3a7cbc, _0x505019);
      }
      var _0x3d5e83 = [];
      for (var _0x48c4ba = 0; _0x48c4ba < _0x2547c2.length; _0x48c4ba++) {
        _0x3d5e83.push({
          'title': _0x48c4ba + 1,
          'description': _0x2547c2[_0x48c4ba].title,
          'rowId': _0x4666b0 + "xnxxdl " + _0x2547c2[_0x48c4ba].link + '+' + _0x2547c2[_0x48c4ba].title
        });
      }
      const _0x213875 = {
        title: "_[Result from androidapksfree.]_",
        rows: _0x3d5e83
      };
      const _0x3c9fb2 = [_0x213875];
      const _0x2f2f12 = {
        text: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *XNXX VIDEO DOWNLOADER*\n\n*📱 Enterd Name:* " + _0x5eceec,
        footer: config.FOOTER,
        title: "Result from androidapksfree. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x3c9fb2
      };
      const _0x6fb0d5 = {
        quoted: _0x5d0676
      };
      return await _0x5e5897.replyList(_0x34ceec, _0x2f2f12, _0x6fb0d5);
    }
    if (config.MODE === "button") {
      const _0x2c8be7 = {
        text: N_FOUND
      };
      const _0x35148c = {
        quoted: _0x5d0676
      };
      if (_0x2547c2.length < 1) {
        return await _0x5e5897.sendMessage(_0x34ceec, _0x2c8be7, _0x35148c);
      }
      var _0x3c7127 = [];
      for (var _0x48c4ba = 0; _0x48c4ba < _0x2547c2.length; _0x48c4ba++) {
        _0x3c7127.push({
          'rows': [{
            'title': _0x48c4ba + 1,
            'description': _0x2547c2[_0x48c4ba].title,
            'id': _0x4666b0 + "xnxxdl " + _0x2547c2[_0x48c4ba].link + '+' + _0x2547c2[_0x48c4ba].title
          }]
        });
      }
      let _0x5a3e53 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from xnxx. 📲",
          'sections': _0x3c7127
        })
      }];
      const _0xd1a02c = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "⚜️ ＰＯＤＩ MD XNXX-DL ⚜️"
      };
      const _0x57e5e8 = {
        quoted: _0x5d0676
      };
      return await _0x5e5897.sendButtonMessage(_0x34ceec, _0x5a3e53, _0x5ad712, _0xd1a02c, _0x57e5e8);
    }
  } catch (_0x2e76fc) {
    _0x4cc655("*ERROR !!*");
    _0x599c9f(_0x2e76fc);
  }
});
const _0x29dead = {
  pattern: "img",
  react: "🖼️",
  desc: "image downloader",
  category: "download",
  use: ".img car",
  filename: __filename
};
cmd(_0x29dead, async (_0x27e96a, _0x304c0b, _0x19e73d, {
  from: _0x42a1f0,
  l: _0x534f98,
  quoted: _0x4815e8,
  prefix: _0x33ecd2,
  body: _0x4264a3,
  isCmd: _0x1f2255,
  command: _0x402082,
  args: _0x14bb53,
  q: _0x2f47ed,
  isGroup: _0x5c3134,
  sender: _0x33bd05,
  senderNumber: _0x32abca,
  botNumber2: _0x33e483,
  botNumber: _0x571b28,
  pushname: _0x4e263c,
  isMe: _0x529a1f,
  isOwner: _0x174411,
  groupMetadata: _0x168ec0,
  groupName: _0x414d3b,
  participants: _0x2aa748,
  groupAdmins: _0x295995,
  isBotAdmins: _0x5d31c6,
  isAdmins: _0x353673,
  reply: _0x3ff3b2
}) => {
  try {
    let _0x766adb = "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n   \n ▏ *IMG-DOWNLOADER*\n\n ▏ *🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ: " + _0x4e263c + "*\n ▏ *✏️ ʀᴇꜱᴜʟᴛ: " + _0x2f47ed + "*\n\n└──────◉";
    if (config.MODE === "nonbutton") {
      const _0x2f3ef0 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x33ecd2 + "imgno " + _0x2f47ed,
          'description': "Normal type images 🖼️"
        }, {
          'title': '2',
          'rowId': _0x33ecd2 + "imgdoc " + _0x2f47ed,
          'description': "Document type images 📁"
        }]
      }];
      const _0x478061 = {
        url: config.LOGO
      };
      const _0x37b34 = {
        caption: _0x766adb,
        image: _0x478061,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x2f3ef0
      };
      const _0x4e308c = {
        quoted: _0x304c0b
      };
      return await _0x27e96a.replyList(_0x42a1f0, _0x37b34, _0x4e308c);
    }
    if (config.MODE === "button") {
      const _0x264b36 = {
        title: '',
        description: "Normal type images 🖼️",
        id: _0x33ecd2 + "imgno " + _0x2f47ed
      };
      const _0xa154e2 = {
        title: '',
        description: "Document type images 📁",
        id: _0x33ecd2 + "imgdoc " + _0x2f47ed
      };
      const _0x58adbe = {
        title: "VAJIRA MD",
        rows: [_0x264b36, _0xa154e2]
      };
      let _0x4680a2 = [_0x58adbe];
      const _0x38b474 = {
        title: "Click Here⎙",
        sections: _0x4680a2
      };
      const _0x4a5126 = {
        url: config.LOGO
      };
      const _0x2a1963 = {
        displayText: "Normal type images 🖼️"
      };
      const _0x306c79 = {
        buttonId: _0x33ecd2 + "imgno " + _0x2f47ed,
        buttonText: _0x2a1963
      };
      const _0x2dda55 = {
        displayText: "Document type images 📁"
      };
      const _0x3656f3 = {
        buttonId: _0x33ecd2 + "imgdoc " + _0x2f47ed,
        buttonText: _0x2dda55
      };
      const _0x5c06fb = {
        quoted: _0x19e73d
      };
      _0x27e96a.sendMessage(_0x42a1f0, {
        'image': _0x4a5126,
        'caption': _0x766adb,
        'footer': config.FOOTER,
        'buttons': [_0x306c79, _0x3656f3, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x38b474)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x5c06fb);
    }
  } catch (_0x5ec353) {
    _0x3ff3b2("*ERROR !!*");
    _0x534f98(_0x5ec353);
  }
});
const _0x5b24d = {
  pattern: "imgno",
  react: '👾',
  desc: "to down images",
  category: '',
  use: ".im",
  filename: __filename
};
cmd(_0x5b24d, async (_0x380bd5, _0x4e5cf6, _0x2ddadb, {
  from: _0x4ddfe4,
  l: _0x3e3bb7,
  prefix: _0x561748,
  quoted: _0x5b154d,
  body: _0x28761e,
  isCmd: _0xa5f82,
  command: _0x42f3a8,
  args: _0x2cd245,
  q: _0x456322,
  isGroup: _0x48cf84,
  sender: _0x3399d5,
  senderNumber: _0x5fcfc6,
  botNumber2: _0x345064,
  botNumber: _0x23c3e0,
  pushname: _0x584617,
  isMe: _0x119635,
  isOwner: _0x3b849f,
  groupMetadata: _0x30404a,
  groupName: _0x3b57c1,
  participants: _0x18de6a,
  groupAdmins: _0x430e9a,
  isBotAdmins: _0x21ecda,
  isAdmins: _0x3e10be,
  reply: _0x4549a2
}) => {
  try {
    if (!_0x456322) {
      throw "Example: " + (_0x561748 + _0x42f3a8) + " Bike";
    }
    let _0x448e74 = require("g-i-s");
    _0x448e74(_0x456322, async (_0x416645, _0x3971cc) => {
      if (_0x416645) {
        console.error("Error fetching images:", _0x416645);
        return _0x4549a2("Error fetching images. Please try again later.");
      }
      const _0x22b0b5 = _0x3971cc.slice(0, 5);
      for (let _0x30edd2 = 0; _0x30edd2 < _0x22b0b5.length; _0x30edd2++) {
        const _0x2133c5 = _0x22b0b5[_0x30edd2].url;
        const _0x3735f5 = {
          url: _0x2133c5
        };
        let _0x5e3429 = {
          'image': _0x3735f5,
          'caption': "*-------「 ＰＯＤＩ MD GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x456322 + "\n\n🔗 *Image " + (_0x30edd2 + 1) + " Url* : " + _0x2133c5
        };
        const _0x370213 = {
          quoted: _0x4e5cf6
        };
        _0x380bd5.sendMessage(_0x4ddfe4, _0x5e3429, _0x370213);
      }
    });
  } catch (_0x5c4d58) {
    _0x3e3bb7(_0x5c4d58);
  }
});
const _0x3ea078 = {
  pattern: "imgdoc",
  react: '👾',
  desc: "to down images",
  category: '',
  use: ".im",
  filename: __filename
};
cmd(_0x3ea078, async (_0x162b7a, _0x1e20c3, _0xcb040c, {
  from: _0x5128bd,
  l: _0x282963,
  prefix: _0x18ebd5,
  quoted: _0x1a00d2,
  body: _0x2f7481,
  isCmd: _0x310a3f,
  command: _0x22a26b,
  args: _0x12bb86,
  q: _0x532a2c,
  isGroup: _0x1d5427,
  sender: _0x51d8b7,
  senderNumber: _0x5496d4,
  botNumber2: _0x5c94bc,
  botNumber: _0x22247b,
  pushname: _0x2bc908,
  isMe: _0x2bbc64,
  isOwner: _0x463f54,
  groupMetadata: _0x2e5619,
  groupName: _0x263d0b,
  participants: _0x5f4052,
  groupAdmins: _0x50d3b0,
  isBotAdmins: _0x131bca,
  isAdmins: _0x234f71,
  reply: _0x4dd0a2
}) => {
  try {
    if (!_0x532a2c) {
      throw "Example: " + (_0x18ebd5 + _0x22a26b) + " Bike";
    }
    let _0x44524e = require("g-i-s");
    _0x44524e(_0x532a2c, async (_0x5b13eb, _0x930d00) => {
      if (_0x5b13eb) {
        console.error("Error fetching images:", _0x5b13eb);
        return _0x4dd0a2("Error fetching images. Please try again later.");
      }
      const _0x13116d = _0x930d00.slice(0, 5);
      for (let _0x15ae61 = 0; _0x15ae61 < _0x13116d.length; _0x15ae61++) {
        const _0x443ce0 = _0x13116d[_0x15ae61].url;
        const _0x36aa13 = {
          url: _0x443ce0
        };
        let _0x2fa32c = {
          'document': _0x36aa13,
          'fileName': "image.jpg",
          'mimetype': "image/jpeg",
          'caption': "*-------「 ＰＯＤＩ MD GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x532a2c + "\n\n🔗 *Image " + (_0x15ae61 + 1) + " Url* : " + _0x443ce0
        };
        const _0x13e01f = {
          quoted: _0x1e20c3
        };
        _0x162b7a.sendMessage(_0x5128bd, _0x2fa32c, _0x13e01f);
      }
    });
  } catch (_0xb570cf) {
    _0x282963(_0xb570cf);
  }
});
const _0x252112 = {
  pattern: "psong",
  react: '👾',
  desc: "to down songs",
  category: "download",
  use: ".song2",
  filename: __filename
};
cmd(_0x252112, async (_0x4faaf8, _0x32611e, _0x185006, {
  from: _0xddedb3,
  l: _0x438331,
  prefix: _0x2e9a46,
  quoted: _0x54b991,
  body: _0x1c3c18,
  isCmd: _0x597727,
  command: _0x68f86f,
  args: _0xaf4f7a,
  q: _0x5e9ea0,
  isGroup: _0x2dd2ca,
  sender: _0x1dfd0d,
  senderNumber: _0x1bcb86,
  botNumber2: _0x49c6d3,
  botNumber: _0xd36faf,
  pushname: _0x5ad318,
  isMe: _0x92029f,
  isOwner: _0x551731,
  groupMetadata: _0x2d306c,
  groupName: _0x190858,
  participants: _0x398f7a,
  groupAdmins: _0x486c7e,
  isBotAdmins: _0x191c5c,
  isAdmins: _0x329937,
  reply: _0x34d394
}) => {
  try {
    if (!_0x5e9ea0) {
      return _0x34d394("Enter YouTube Video Link or Search Query!");
    }
    const _0x519e95 = await yts(_0x5e9ea0);
    if (_0x519e95.videos.length > 0) {
      let _0x3b3f42 = [];
      const _0x2e8672 = "yts_" + optionIndex;
      const _0x4d189b = {};
      for (let _0x3f8abc = 0; _0x3f8abc < Math.min(5, _0x519e95.videos.length); _0x3f8abc++) {
        const _0x4bb989 = _0x519e95.videos[_0x3f8abc];
        const _0x165424 = _0x4bb989.url;
        const _0x4e33f0 = _0x4bb989.title;
        _0x4d189b[optionIndex + '.' + (_0x3f8abc + 1)] = _0x165424;
        _0x3b3f42.push(".tet " + optionIndex + '.' + (_0x3f8abc + 1) + " " + _0x4e33f0);
      }
      if (!videoSearchResults.has(_0x2e8672)) {
        videoSearchResults.set(_0x2e8672, {});
      }
      videoSearchResults.set(_0x2e8672, Object.assign(videoSearchResults.get(_0x2e8672), _0x4d189b));
      await _0x4faaf8.sendPoll(_0xddedb3, "Choose a video to download:", [..._0x3b3f42]);
      optionIndex += 1;
    } else {
      return _0x34d394("No search results found.");
    }
  } catch (_0x31a4b9) {
    console.error("Error during play:", _0x31a4b9);
    _0x32611e.reply("Unexpected error occurred.");
    _0x438331(_0x31a4b9);
  }
});
const _0x5d9de1 = {
  pattern: "tet",
  react: '👾',
  desc: "to take song",
  category: "download",
  use: ".tet",
  filename: __filename
};
cmd(_0x5d9de1, async (_0x29aaa0, _0x133a7a, _0x4538ce, {
  from: _0x321dfc,
  l: _0x37a868,
  prefix: _0x250c44,
  quoted: _0x5509e1,
  body: _0xa37739,
  isCmd: _0x2e9791,
  command: _0xd36d82,
  args: _0x3a8bfe,
  q: _0x3c64bd,
  isGroup: _0x13b7ca,
  sender: _0x37f945,
  senderNumber: _0x107ff0,
  botNumber2: _0x256229,
  botNumber: _0x5b9212,
  pushname: _0x379cf7,
  isMe: _0x517f5c,
  isOwner: _0x50e6cc,
  groupMetadata: _0x25e05d,
  groupName: _0x42fd4f,
  participants: _0x29ff54,
  groupAdmins: _0x10401d,
  isBotAdmins: _0x2fe317,
  isAdmins: _0x39e151,
  reply: _0x1ba01c
}) => {
  try {
    if (!_0x3c64bd) {
      return _0x1ba01c("Please specify the video you want to play. Use the format: play [unique-key]");
    }
    const _0x45c6a7 = _0x3c64bd.match(/(\d+)\.(\d+)/);
    if (!_0x45c6a7) {
      return _0x1ba01c("Invalid format. Please provide a valid unique key (e.g., 1.1)");
    }
    const _0x4ae6b1 = parseInt(_0x45c6a7[1]);
    const _0x583c42 = parseInt(_0x45c6a7[2]);
    const _0x25477d = "yts_" + _0x4ae6b1;
    if (videoSearchResults.has(_0x25477d)) {
      const _0x4ea52a = videoSearchResults.get(_0x25477d)[_0x4ae6b1 + '.' + _0x583c42];
      if (_0x4ea52a) {
        const _0x33d66a = await ytdl.getInfo(_0x4ea52a);
        const _0xedda16 = _0x33d66a.title || _0x33d66a.videoDetails && _0x33d66a.videoDetails.title || "N/A";
        const _0x29939a = formatUploadDate(_0x33d66a.videoDetails.uploadDate) || "N/A";
        const _0x57f798 = "\n╭═════════•∞•══╮\n│⿻ *ＰＯＤＩ MD*\n│  *Youtube Mp4 Player* ✨\n│⿻ *Title:* " + _0xedda16 + "\n│⿻ *Author:* " + (_0x33d66a.videoDetails.author.name || "N/A") + "\n│⿻ *Duration:* " + _0x33d66a.videoDetails.lengthSeconds + "s\n│⿻ *Views:* " + (_0x33d66a.videoDetails.viewCount.toLocaleString() || "N/A") + "\n│⿻ *Upload Date:* " + _0x29939a + "\n╰══•∞•═════════╯\n";
        await _0x29aaa0.sendPoll(_0x321dfc, _0x57f798, [".𝐀𝐮𝐝𝐢𝐨 " + _0x4ae6b1 + '.' + _0x583c42, ".𝐕𝐢𝐝𝐞𝐨 " + _0x4ae6b1 + '.' + _0x583c42, ".𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x4ae6b1 + '.' + _0x583c42, ".𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x4ae6b1 + '.' + _0x583c42]);
      } else {
        return _0x1ba01c("Invalid sub-option. Please choose a valid sub-option.");
      }
    } else {
      return _0x1ba01c("Invalid unique key. Please provide a valid unique key.");
    }
  } catch (_0x280eea) {
    console.error("Error during poll creation:", _0x280eea);
    return _0x1ba01c("Unexpected error occurred during poll creation.");
    _0x37a868(_0x280eea);
  }
});
const _0x42e67d = {
  pattern: "xnxxdl",
  react: '👾',
  desc: "to take xnxx video",
  category: "download",
  use: ".xnxxdl",
  filename: __filename
};
cmd(_0x42e67d, async (_0x22490c, _0x2aa22a, _0x3ee486, {
  from: _0x331b1f,
  l: _0x9ab99c,
  prefix: _0x2d13bd,
  quoted: _0x4b98e3,
  body: _0x13d686,
  isCmd: _0x9d40bb,
  command: _0x219e33,
  args: _0xa18c7f,
  q: _0x28f0e7,
  isGroup: _0x94f96f,
  sender: _0x2510ad,
  senderNumber: _0x305a8e,
  botNumber2: _0x1dd089,
  botNumber: _0x4b50b1,
  pushname: _0x244544,
  isMe: _0x41dfc8,
  isOwner: _0x3ccbd5,
  groupMetadata: _0x4bb124,
  groupName: _0x1c7307,
  participants: _0x7ebfa4,
  groupAdmins: _0xadcf57,
  isBotAdmins: _0x5a8799,
  isAdmins: _0x1ee7e4,
  reply: _0x549f5a
}) => {
  try {
    if (!_0x28f0e7.includes("xnxx.com")) {
      return _0x2aa22a.reply("Enter an xnxx link");
    }
    const _0x31ebd9 = require("api-dylux");
    let _0x58e7e6 = await _0x31ebd9.xnxxdl(_0x28f0e7);
    const _0x50ef4a = {
      caption: "  *XNXX DL*\n        \n✍ *Title:* " + _0x58e7e6.title + "\n⌛ *Duration:* " + _0x58e7e6.duration + "\n📽 *Visual Quality:* " + _0x58e7e6.quality,
      video: {}
    };
    _0x50ef4a.video.url = _0x58e7e6.url_dl;
    _0x22490c.sendMessage(_0x2aa22a.chat, _0x50ef4a, {
      'quoted': _0x2aa22a
    });
  } catch (_0x442f3a) {
    _0x9ab99c(_0x442f3a);
  }
});
const _0x495694 = {
  pattern: "tempmail",
  react: '👾',
  desc: "to take a tempmail",
  category: "download",
  use: ".tempmail",
  filename: __filename
};
cmd(_0x495694, async (_0x5cc5fb, _0x18bbcc, _0x4202a1, {
  from: _0x310925,
  l: _0x1655da,
  prefix: _0x4ee98e,
  quoted: _0xfb9fee,
  body: _0x2c25d7,
  isCmd: _0x129a74,
  command: _0x29d3b0,
  args: _0x53293d,
  q: _0x7ffc20,
  isGroup: _0x9f0f64,
  sender: _0x194ce1,
  senderNumber: _0x320819,
  botNumber2: _0x365f6d,
  botNumber: _0x837fb0,
  pushname: _0x414372,
  isMe: _0x4a9091,
  isOwner: _0x489ce6,
  groupMetadata: _0x36764d,
  groupName: _0xa37374,
  participants: _0x4dcadd,
  groupAdmins: _0x4c43dd,
  isBotAdmins: _0x37c9f5,
  isAdmins: _0x4d2e07,
  reply: _0x2d5bd3
}) => {
  try {
    let _0x5eb69d = await fetch("https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D");
    if (!_0x5eb69d.ok) {
      throw new Error("HTTP error! status: " + _0x5eb69d.status);
    }
    let _0x4c9c30 = await _0x5eb69d.json();
    let _0x4b0f0f = _0x4c9c30.data.introduceSession.addresses[0].address;
    let _0x4fcf4f = _0x4c9c30.data.introduceSession.id;
    let _0x4d294e = _0x4c9c30.data.introduceSession.expiresAt;
    let _0x5648c0 = "𝘌𝘔𝘈𝘐𝘓 = " + _0x4b0f0f + "\n𝘐𝘋 = " + _0x4fcf4f + "\n𝘛𝘐𝘔𝘌 = " + _0x4d294e;
    const _0x2e41ef = {
      text: '' + _0x5648c0
    };
    const _0x18785a = {
      url: config.LOGO
    };
    const _0x122a1c = {
      image: _0x18785a
    };
    const _0x776ddf = {
      upload: _0x5cc5fb.waUploadToServer
    };
    const _0x57591a = {
      text: ''
    };
    const _0x31d0a0 = {
      url: config.LOGO
    };
    const _0x3f1a56 = {
      image: _0x31d0a0
    };
    const _0x3bc4cf = {
      upload: _0x5cc5fb.waUploadToServer
    };
    const _0x4195c2 = {
      text: ''
    };
    let _0x489e05 = generateWAMessageFromContent(_0x4202a1.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': {
            'body': _0x2e41ef,
            'carouselMessage': {
              'cards': [{
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0x122a1c, _0x776ddf)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': "VAJIRA-MD",
                  'hasMediaAttachment': false
                }),
                'body': _0x57591a,
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_copy",
                    'buttonParamsJson': "{\"display_text\":\"𝘊𝘖𝘗𝘠 𝘛𝘌𝘔𝘗𝘔𝘈𝘐𝘓\",\"id\":\"123456789\",\"copy_code\":\"" + _0x4b0f0f + "\"}"
                  }]
                }
              }, {
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0x3f1a56, _0x3bc4cf)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': "ＰＯＤＩ-MD",
                  'hasMediaAttachment': false
                }),
                'body': _0x4195c2,
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_copy",
                    'buttonParamsJson': "{\"display_text\":\"𝘊𝘖𝘗𝘠 𝘐𝘋\",\"id\":\"123456789\",\"copy_code\":\"" + _0x4fcf4f + "\"}"
                  }]
                }
              }],
              'messageVersion': 0x1
            },
            'contextInfo': {
              'mentionedJid': [_0x4202a1.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363290448968237@newsletter",
                'newsletterName': "⛅ ＰＯＤＩ 𝑴𝑫 💙",
                'serverMessageId': 0x8f
              }
            }
          }
        }
      }
    }, {
      'quoted': _0x4202a1
    });
    await _0x5cc5fb.relayMessage(_0x489e05.key.remoteJid, _0x489e05.message, {
      'messageId': _0x489e05.key.id
    });
  } catch (_0x53ff91) {
    _0x2d5bd3();
    _0x1655da(_0x53ff91);
  }
});
const _0x2b7738 = {
  pattern: "checkmail",
  react: '👾',
  desc: "to see mail",
  category: "download",
  use: ".checkmail",
  filename: __filename
};
cmd(_0x2b7738, async (_0x30952a, _0x4d9a60, _0x49aa04, {
  from: _0x38d8e9,
  l: _0x454791,
  prefix: _0x1b9d47,
  quoted: _0x1ae740,
  body: _0x336085,
  isCmd: _0x5ea403,
  command: _0x1460c4,
  args: _0x3da120,
  q: _0x281c6,
  isGroup: _0x5eb55e,
  sender: _0x50e4c4,
  senderNumber: _0x59fc1b,
  botNumber2: _0x316224,
  botNumber: _0x1e91ec,
  pushname: _0x4c9316,
  isMe: _0x16580e,
  isOwner: _0x1dbd04,
  groupMetadata: _0xfa1c85,
  groupName: _0x5b66d5,
  participants: _0x42806f,
  groupAdmins: _0x53bb5d,
  isBotAdmins: _0x357439,
  isAdmins: _0x466dfd,
  reply: _0x51f15d
}) => {
  try {
    if (!_0x281c6) {
      return _0x51f15d("*Provide me tempmail for view inbox*");
    }
    const _0xef28c = "https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22" + _0x281c6 + "%22%7D";
    let _0x339cb1 = await fetch(_0xef28c);
    if (!_0x339cb1.ok) {
      throw new Error("HTTP error! status: " + _0x339cb1.status);
    }
    let _0x41f50e = await _0x339cb1.json();
    let _0x1c39d4 = _0x41f50e.data.session.mails;
    return [_0x1c39d4, _0x1c39d4.length];
  } catch (_0x27096e) {
    console.error("Error during API request:", _0x27096e);
    _0x51f15d();
    _0x454791(_0x27096e);
  }
});
const _0x248cce = {
  pattern: "gitclone",
  react: '🔖',
  desc: "download github repos",
  category: "download",
  use: ".gitclone",
  filename: __filename
};
cmd(_0x248cce, async (_0xf92a27, _0x3af085, _0x102cb5, {
  from: _0x4b93a8,
  prefix: _0x427edf,
  l: _0x440369,
  quoted: _0x432815,
  body: _0x499db8,
  isCmd: _0x5e0ef6,
  command: _0xc7f4e3,
  args: _0x35beb2,
  q: _0x25277c,
  isGroup: _0x2d6b53,
  sender: _0x5ef8c1,
  senderNumber: _0x1e46b3,
  botNumber2: _0x279871,
  botNumber: _0x19783b,
  pushname: _0x47577b,
  isMe: _0x34021d,
  isOwner: _0x8799f4,
  groupMetadata: _0x10b54f,
  groupName: _0x5e611f,
  participants: _0x1590ec,
  groupAdmins: _0x2ab452,
  isBotAdmins: _0x38cddf,
  isAdmins: _0x429f0a,
  reply: _0x27dcb0
}) => {
  try {
    let _0x4f5721 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x35beb2[0]) {
      _0x27dcb0("Use " + _0x427edf + "gitclone repo link\n: https://github.com/VajiraTech/QUEEN-IZUMI-MD");
    }
    if (!_0x4f5721.test(_0x35beb2[0])) {
      return _0x27dcb0("link");
    }
    let [, _0x42dcde, _0x2610db] = _0x35beb2[0].match(_0x4f5721) || [];
    _0x2610db = _0x2610db.replace(/.git$/, '');
    let _0x32d72a = "https://api.github.com/repos/" + _0x42dcde + '/' + _0x2610db + "/zipball";
    let _0x3a9c0b = '' + _0x42dcde + _0x2610db;
    const _0x440777 = {
      url: _0x32d72a
    };
    _0xf92a27.sendMessage(_0x3af085.chat, {
      'document': _0x440777,
      'fileName': _0x3a9c0b + ".zip",
      'mimetype': "application/zip",
      'caption': "*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*"
    }, {
      'quoted': _0x3af085
    })["catch"](_0x303564 => _0x27dcb0(mess.error));
  } catch (_0x422f05) {
    _0x27dcb0();
    _0x440369(_0x422f05);
  }
});
const _0x31ee0c = {
  pattern: "ehi",
  react: "🖼️",
  desc: "ehi files downloader",
  category: "download",
  use: ".ehi",
  filename: __filename
};
cmd(_0x31ee0c, async (_0x3baef8, _0x32aba0, _0x383168, {
  from: _0x2df240,
  l: _0x56f3af,
  quoted: _0x4b1453,
  prefix: _0x4addcf,
  body: _0x18415a,
  isCmd: _0x4cc94e,
  command: _0x471fe3,
  args: _0x3913b3,
  q: _0x36445a,
  isGroup: _0xf95fb4,
  sender: _0x364747,
  senderNumber: _0x495cbb,
  botNumber2: _0x51c346,
  botNumber: _0xdb31c6,
  pushname: _0x3f0da8,
  isMe: _0x21a0c7,
  isOwner: _0x127ebb,
  groupMetadata: _0x45a9c2,
  groupName: _0x340bbf,
  participants: _0x4ab918,
  groupAdmins: _0x5098d9,
  isBotAdmins: _0x538084,
  isAdmins: _0x23aec2,
  reply: _0x616fef
}) => {
  try {
    if (config.MODE === "nonbutton") {
      const _0x15c56c = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x4addcf + "httpinjector " + _0x36445a,
          'description': "apk of http injector"
        }, {
          'title': '2',
          'rowId': _0x4addcf + "ehifiles " + _0x36445a,
          'description': "Down ehi files"
        }, {
          'title': '3',
          'rowId': _0x4addcf + "aboutehi " + _0x36445a,
          'description': "Info of ehi files"
        }]
      }];
      const _0x4e095e = {
        url: config.LOGO
      };
      const _0x3e8a29 = {
        caption: "╔══════❨ ❄ ❩══════╗\n\n            *🎗️ ＰＯＤＩᴇʜɪ 🎗️*\n    \n ▫ ғʀᴇᴇ ᴇʜɪ\n ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ\n ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ \n     \n _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_\n _✕ ɴᴏ sᴘᴀᴍ_ \n _✕ ɴᴏ ᴅᴅᴏs_\n _✕ ᴅᴏɴ'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_\n \n    *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*\n\n╚══════[💀]",
        image: _0x4e095e,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x15c56c
      };
      const _0x213782 = {
        quoted: _0x32aba0
      };
      return await _0x3baef8.replyList(_0x2df240, _0x3e8a29, _0x213782);
    }
    if (config.MODE === "button") {
      let _0x57a8fa = [{
        'title': "ＰＯＤＩ MD",
        'rows': [{
          'title': '',
          'description': "apk of http injector",
          'id': _0x4addcf + "httpinjector " + _0x36445a
        }, {
          'title': '',
          'description': "Down ehi files",
          'id': _0x4addcf + "ehifiles " + _0x36445a
        }, {
          'title': '',
          'description': "Info of ehi files",
          'id': _0x4addcf + "aboutehi " + _0x36445a
        }]
      }];
      const _0x43d1de = {
        title: "Click Here⎙",
        sections: _0x57a8fa
      };
      const _0x278684 = {
        url: config.LOGO
      };
      const _0x4b28ee = {
        displayText: "apk of http injector"
      };
      const _0xc5eccf = {
        buttonId: _0x4addcf + "httpinjector  " + _0x36445a,
        buttonText: _0x4b28ee
      };
      const _0x3b25ec = {
        displayText: "Down ehi files"
      };
      const _0x5a49fd = {
        buttonId: _0x4addcf + "ehifiles " + _0x36445a,
        buttonText: _0x3b25ec
      };
      const _0x4b770c = {
        displayText: "Info of ehi files"
      };
      const _0xfc2fcc = {
        buttonId: _0x4addcf + "aboutehi " + _0x36445a,
        buttonText: _0x4b770c
      };
      const _0x6e5499 = {
        quoted: _0x383168
      };
      _0x3baef8.sendMessage(_0x2df240, {
        'image': _0x278684,
        'caption': "╔══════❨ ❄ ❩══════╗\n\n            *🎗️ ＰＯＤＩ ᴇʜɪ 🎗️*\n    \n ▫ ғʀᴇᴇ ᴇʜɪ\n ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ\n ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ \n     \n _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_\n _✕ ɴᴏ sᴘᴀᴍ_ \n _✕ ɴᴏ ᴅᴅᴏs_\n _✕ ᴅᴏɴ'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_\n \n    *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*\n\n╚══════[💀]",
        'footer': config.FOOTER,
        'buttons': [_0xc5eccf, _0x5a49fd, _0xfc2fcc, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x43d1de)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x6e5499);
    }
  } catch (_0x4fce67) {
    _0x616fef("*ERROR !!*");
    _0x56f3af(_0x4fce67);
  }
});
const _0x55918a = {
  pattern: "aboutehi",
  category: '',
  filename: __filename
};
cmd(_0x55918a, async (_0x59a027, _0x152159, _0x4d8add, {
  from: _0x11fb53,
  l: _0x3d015f,
  quoted: _0x4c9d2d,
  body: _0x2a983b,
  isCmd: _0x56ea73,
  command: _0x1761f7,
  args: _0x2d971f,
  q: _0x43dcd0,
  isGroup: _0x4be7e3,
  sender: _0x36c958,
  senderNumber: _0x2d6589,
  botNumber2: _0x294cd9,
  botNumber: _0x1e9174,
  pushname: _0x55f5a7,
  isMe: _0x4fd124,
  isOwner: _0x767c5b,
  groupMetadata: _0x2da30a,
  groupName: _0x2c119b,
  participants: _0x5dcd05,
  groupAdmins: _0x871f04,
  isBotAdmins: _0x51f9b7,
  isAdmins: _0x56bca4,
  reply: _0x184e1c
}) => {
  try {
    const _0x192c11 = [];
    const _0x960ca2 = {
      caption: "💬 Ehi file යනු* ,\nඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.\n\nඋදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.\nමෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.\nඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන \nwhatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක \n\n\nබාවිතාකරන්නේ කෙසේද ?\n1. http injector app එක ඔබගේ phone එකට install කරගන්න \n2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න \n3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න \n( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )\n\n*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*\n\n============================================================================\n\n*💬 Ehi file is*,\n It is a method where you can get free internet by using whatsapp package.\n For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.\n\n This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.\n You can find this ehi file which we usually use\n You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc\n\n*How to use*\n 1. Install the http injector app on your phone.\n 2. Select the ehi file related to your package.\n 3. Enter that file into the httpinjector app and press the start button.\n_( If you want to use this file, you must have one of the above packages installed )_\n\n\n*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
      footer: "*ᴠᴀᴊɪʀᴀ-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
      buttons: _0x192c11,
      headerType: 0x1
    };
    return await _0x59a027.buttonMessage(_0x11fb53, _0x960ca2, _0x152159);
  } catch (_0x1e9728) {
    _0x3d015f(_0x1e9728);
  }
});
const _0x5f22f9 = {
  pattern: "httpinjector",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5f22f9, async (_0x4a5f4b, _0x23db19, _0x577d04, {
  from: _0x3cdace,
  l: _0xe420ed,
  quoted: _0x37b49e,
  body: _0x4fca9d,
  isCmd: _0x4361db,
  command: _0x5bea7c,
  args: _0xddd9f4,
  q: _0x5b870a,
  isGroup: _0x521c71,
  sender: _0x39c715,
  senderNumber: _0x49d546,
  botNumber2: _0x44de9e,
  botNumber: _0x4947e1,
  pushname: _0xe02f0c,
  isMe: _0x3ec8e0,
  isOwner: _0x48697,
  groupMetadata: _0x25c85a,
  groupName: _0x44fc4c,
  participants: _0x5a63c6,
  groupAdmins: _0x38c64d,
  isBotAdmins: _0xbc8c07,
  isAdmins: _0x43d6c5,
  reply: _0x27c87c
}) => {
  try {
    const _0x2ffa45 = {
      text: '📥',
      key: _0x23db19.key
    };
    const _0x50d849 = {
      react: _0x2ffa45
    };
    await _0x4a5f4b.sendMessage(_0x3cdace, _0x50d849);
    const _0x34f7fe = {
      url: "https://github.com/VajiraTech/Izumi-ehi/blob/main/Http_injector/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk"
    };
    const _0xb1b8fc = {
      document: _0x34f7fe,
      mimetype: "application/vnd.android.package-archive",
      fileName: "HTTP Injector Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ (SSHProxyV2Ray) VPN.apk",
      caption: config.FOOTER
    };
    const _0x54852b = {
      quoted: _0x23db19
    };
    await _0x4a5f4b.sendMessage(_0x3cdace, _0xb1b8fc, _0x54852b);
    const _0x262cdc = {
      text: '✔',
      key: _0x23db19.key
    };
    const _0x62a85 = {
      react: _0x262cdc
    };
    await _0x4a5f4b.sendMessage(_0x3cdace, _0x62a85);
  } catch (_0xfae28b) {
    _0x27c87c("*ERROR !!*");
    _0xe420ed(_0xfae28b);
  }
});
const _0x1939e5 = {
  pattern: "ehifiles",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1939e5, async (_0x49df3b, _0x4f7518, _0x4011d6, {
  from: _0x2e0f34,
  l: _0x4f406b,
  quoted: _0xdbff65,
  body: _0x2f4153,
  isCmd: _0x3859f7,
  command: _0x30d69c,
  args: _0xd7349a,
  q: _0x131444,
  isGroup: _0x541449,
  sender: _0x58b0b,
  senderNumber: _0x59c9ed,
  botNumber2: _0x4c9341,
  botNumber: _0x50739f,
  pushname: _0x139f9a,
  isMe: _0x525aa7,
  isOwner: _0x34af5b,
  groupMetadata: _0x49bb5c,
  groupName: _0x3fbeb1,
  participants: _0x2bdf17,
  groupAdmins: _0xd9472c,
  isBotAdmins: _0x46af30,
  isAdmins: _0x547b8f,
  reply: _0x577ae2
}) => {
  try {
    const _0x4ff9f9 = await fetchJson("https://gist.github.com/VajiraTech/e13022d2d3eacaac87967d8ee67ddf25/raw");
    ehi = _0x4ff9f9.EHI_FILES[0].SG_FILE1;
    ehi2 = _0x4ff9f9.EHI_FILES[0].SG_FILE2;
    ehi3 = _0x4ff9f9.EHI_FILES[0].SG_FILE3;
    ehi4 = _0x4ff9f9.EHI_FILES[0].SG_FILE4;
    ehi5 = _0x4ff9f9.EHI_FILES[1].US_FILE1;
    ehi6 = _0x4ff9f9.EHI_FILES[1].US_FILE2;
    ehi7 = _0x4ff9f9.EHI_FILES[1].US_FILE3;
    ehi8 = _0x4ff9f9.EHI_FILES[1].US_FILE4;
    const _0x52f1c1 = {
      text: "\n" + _0x4ff9f9.EHI + "\n" + _0x4ff9f9.C_E_DATES + "\n" + _0x4ff9f9.XX_XX + "\n"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x52f1c1, {
      'quoted': _0x4f7518
    });
    const _0x4b7127 = {
      url: ehi
    };
    const _0x3b222b = {
      document: _0x4b7127,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI + " FaceBook " + _0x4ff9f9.EHI_IMOJI + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x3b222b, {
      'quoted': _0x4f7518
    });
    const _0x1e762d = {
      url: ehi2
    };
    const _0x43b387 = {
      document: _0x1e762d,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI + " Whatsapp " + _0x4ff9f9.EHI_IMOJI + ".ehi "
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x43b387, {
      'quoted': _0x4f7518
    });
    const _0x53beab = {
      url: ehi3
    };
    const _0x279ce8 = {
      document: _0x53beab,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI + " Youtube " + _0x4ff9f9.EHI_IMOJI + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x279ce8, {
      'quoted': _0x4f7518
    });
    const _0x3b4a0f = {
      url: ehi4
    };
    const _0x3cc28c = {
      document: _0x3b4a0f,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI + " Zoom " + _0x4ff9f9.EHI_IMOJI + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x3cc28c, {
      'quoted': _0x4f7518
    });
    const _0x28fecc = {
      url: ehi5
    };
    const _0xeb5995 = {
      document: _0x28fecc,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI2 + " FaceBook " + _0x4ff9f9.EHI_IMOJI2 + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0xeb5995, {
      'quoted': _0x4f7518
    });
    const _0x244d8b = {
      url: ehi6
    };
    const _0xc8bcc5 = {
      document: _0x244d8b,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI2 + " Whatsapp " + _0x4ff9f9.EHI_IMOJI2 + ".ehi "
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0xc8bcc5, {
      'quoted': _0x4f7518
    });
    const _0x7f680 = {
      url: ehi7
    };
    const _0x4b2ae7 = {
      document: _0x7f680,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI2 + " Youtube " + _0x4ff9f9.EHI_IMOJI2 + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x4b2ae7, {
      'quoted': _0x4f7518
    });
    const _0x4932ca = {
      url: ehi8
    };
    const _0x521e07 = {
      document: _0x4932ca,
      mimetype: "application/octet-stream",
      fileName: _0x4ff9f9.EHI_IMOJI2 + " Zoom " + _0x4ff9f9.EHI_IMOJI2 + ".ehi"
    };
    await _0x49df3b.sendMessage(_0x4f7518.chat, _0x521e07, {
      'quoted': _0x4f7518
    });
    await _0x49df3b.sendMessage(_0x4f7518.chat, "✅ _Success send_ *" + _0x4f7518.pushName + "* _Ehi Files..._", _0x4f7518);
  } catch (_0x10c944) {
    _0x577ae2("*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 ＰＯＤＩ ＭＤ ＯＷＮＥＲ*");
    _0x4f406b(_0x10c944);
  }
});
const _0x3b112c = {
  pattern: "fmmods",
  alias: ["wamod", "wamods", "fmmod"],
  react: '📲',
  desc: "Download all fmmods.",
  category: "download",
  use: ".fmmods",
  filename: __filename
};
cmd(_0x3b112c, async (_0x4276f7, _0x47af18, _0x35b402, {
  from: _0x5c731f,
  l: _0x4e8571,
  quoted: _0x23cf43,
  prefix: _0x3f52f1,
  body: _0xd1bbd3,
  isCmd: _0x1bbe3c,
  command: _0x3fb1ce,
  args: _0x26ce29,
  q: _0x1632e3,
  isGroup: _0x1f22eb,
  sender: _0x57394b,
  senderNumber: _0x304e8a,
  botNumber2: _0x3cde16,
  botNumber: _0x18596e,
  pushname: _0xd55d9c,
  isMe: _0xc5f592,
  isOwner: _0x2b6245,
  groupMetadata: _0x530d94,
  groupName: _0x513a62,
  participants: _0x92e082,
  groupAdmins: _0x1555db,
  isBotAdmins: _0x84631b,
  isAdmins: _0xa8925,
  reply: _0x19984d
}) => {
  try {
    let _0x385109 = (await fetchJson("https://api.maher-zubair.tech/whatsapp/wamods")).data;
    const _0xf253d8 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x3f52f1 + "dmod " + _0x385109.com_whatsapp.link + '+' + _0x385109.com_whatsapp.name,
        'description': _0x385109.com_whatsapp.name
      }, {
        'title': '2',
        'rowId': _0x3f52f1 + "dmod " + _0x385109.com_fmwhatsapp.link + '+' + _0x385109.com_fmwhatsapp.name,
        'description': _0x385109.com_fmwhatsapp.name
      }, {
        'title': '3',
        'rowId': _0x3f52f1 + "dmod " + _0x385109.com_gbwhatsapp.link + '+' + _0x385109.com_gbwhatsapp.name,
        'description': _0x385109.com_gbwhatsapp.name
      }, {
        'title': '4',
        'rowId': _0x3f52f1 + "dmod " + _0x385109.com_yowhatsapp.link + '+' + _0x385109.com_yowhatsapp.name,
        'description': _0x385109.com_yowhatsapp.name
      }]
    }];
    const _0x25127b = {
      url: config.LOGO
    };
    const _0x3e227b = {
      caption: "[👨‍💻 ＰＯＤＩＹＡ - ＭＤ 👨‍💻]\n      \n*Foud Whatsapp Mod Downloader 📲*\n",
      image: _0x25127b,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0xf253d8
    };
    const _0x383072 = {
      quoted: _0x47af18
    };
    return await _0x4276f7.replyList(_0x5c731f, _0x3e227b, _0x383072);
  } catch (_0x16602d) {
    _0x19984d("*ERROR !!*");
    _0x4e8571(_0x16602d);
  }
});
const _0x30816b = {
  pattern: "dmod",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x30816b, async (_0x4e46c9, _0x1676a9, _0x149c09, {
  from: _0x28fac9,
  l: _0x83f5cd,
  quoted: _0x447496,
  body: _0x40d472,
  isCmd: _0xfab85b,
  command: _0x4aee55,
  args: _0x1b22f4,
  q: _0x11e212,
  isGroup: _0x51b37f,
  sender: _0x5de065,
  senderNumber: _0x2cf78a,
  botNumber2: _0x3005d3,
  botNumber: _0x103dee,
  pushname: _0x2196a2,
  isMe: _0x47b3af,
  isOwner: _0x34b0e0,
  groupMetadata: _0x5e4b1a,
  groupName: _0x1b8a90,
  participants: _0x455147,
  groupAdmins: _0x124b5a,
  isBotAdmins: _0x49a636,
  isAdmins: _0x91d5c1,
  reply: _0x1d940a
}) => {
  try {
    const _0x37025b = {
      text: '📥',
      key: _0x1676a9.key
    };
    const _0x2afb56 = {
      react: _0x37025b
    };
    await _0x4e46c9.sendMessage(_0x28fac9, _0x2afb56);
    let [_0x5ed540, _0x5215a] = _0x11e212.split`+`;
    const _0x1c4180 = {
      url: _0x5ed540
    };
    const _0xceded3 = {
      quoted: _0x1676a9
    };
    await _0x4e46c9.sendMessage(_0x28fac9, {
      'document': _0x1c4180,
      'fileName': _0x5215a + ".apk",
      'mimetype': "application/vnd.android.package-archive"
    }, _0xceded3);
    const _0x181c5b = {
      text: '✔',
      key: _0x1676a9.key
    };
    const _0x20d3b0 = {
      react: _0x181c5b
    };
    await _0x4e46c9.sendMessage(_0x28fac9, _0x20d3b0);
  } catch (_0x5a91bc) {
    _0x1d940a("*ERROR !!*");
    _0x83f5cd(_0x5a91bc);
  }
});
const _0x448023 = {
  pattern: "apk",
  react: '📦',
  desc: "apk downloader",
  category: "download",
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x448023, async (_0x54196b, _0x94110d, _0x122ff1, {
  from: _0x2e72ff,
  l: _0x3a73f4,
  quoted: _0x4c4657,
  prefix: _0x27b32e,
  body: _0x4cb851,
  isCmd: _0xda5ad1,
  command: _0x1a72a6,
  args: _0x3ed073,
  q: _0x32c532,
  isGroup: _0x122570,
  sender: _0x3b745e,
  senderNumber: _0x2709a7,
  botNumber2: _0x2c9e73,
  botNumber: _0x142dba,
  pushname: _0x14a000,
  isMe: _0x4823e2,
  isOwner: _0x3c1ba9,
  groupMetadata: _0x546c7b,
  groupName: _0x41146d,
  participants: _0x250d8d,
  groupAdmins: _0x3bae63,
  isBotAdmins: _0x443df4,
  isAdmins: _0x497599,
  reply: _0x2f9bc2
}) => {
  try {
    const _0x2a90c7 = {
      text: 'ℹ️',
      key: _0x94110d.key
    };
    const _0x4e305 = {
      react: _0x2a90c7
    };
    await _0x54196b.sendMessage(_0x2e72ff, _0x4e305);
    const _0x45c390 = {
      text: "*Need apk link...*"
    };
    const _0x3d37bf = {
      quoted: _0x94110d
    };
    if (!_0x32c532) {
      return await _0x54196b.sendMessage(_0x2e72ff, _0x45c390, _0x3d37bf);
    }
    const _0x182970 = await apkdl.download(_0x32c532);
    let _0xfcb006 = "[👨‍💻 ＰＯＤＩ 👨‍💻]\n   \n *APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x182970.name + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0x182970.size + "*\n \n─────────────────────────────";
    if (config.MODE === "nonbutton") {
      const _0x470adf = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x27b32e + "dapk " + _0x32c532,
          'description': "Download the apk"
        }, {
          'title': '2',
          'rowId': _0x27b32e + "apk1 " + _0x32c532,
          'description': "Download many apk"
        }, {
          'title': '3',
          'rowId': _0x27b32e + "apkinfo " + _0x32c532,
          'description': "Info of apk"
        }]
      }];
      const _0x4fd102 = {
        url: config.LOGO
      };
      const _0x4a1138 = {
        caption: _0xfcb006,
        image: _0x4fd102,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x470adf
      };
      const _0x308d2d = {
        quoted: _0x94110d
      };
      return await _0x54196b.replyList(_0x2e72ff, _0x4a1138, _0x308d2d);
    }
    if (config.MODE === "button") {
      let _0xf22626 = [{
        'title': "VAJIRA MD",
        'rows': [{
          'title': '',
          'description': "Download the apk",
          'id': _0x27b32e + "dapk " + _0x32c532
        }, {
          'title': '',
          'description': "Download many apk",
          'id': _0x27b32e + "apk1 " + _0x32c532
        }, {
          'title': '',
          'description': "Info of apk",
          'id': _0x27b32e + "apkinfo " + _0x32c532
        }]
      }];
      const _0x14800c = {
        title: "Click Here⎙",
        sections: _0xf22626
      };
      const _0x74536b = {
        url: config.LOGO
      };
      const _0x425689 = {
        displayText: "Apk download"
      };
      const _0x21c464 = {
        buttonId: _0x27b32e + "dapk  " + _0x32c532,
        buttonText: _0x425689
      };
      const _0xc1c316 = {
        displayText: "More Apk"
      };
      const _0x1d395b = {
        buttonId: _0x27b32e + "apk1 " + _0x32c532,
        buttonText: _0xc1c316
      };
      const _0x2c743d = {
        displayText: "Apk Info"
      };
      const _0x58ce1b = {
        buttonId: _0x27b32e + "apkinfo " + _0x32c532,
        buttonText: _0x2c743d
      };
      const _0x2cd103 = {
        quoted: _0x122ff1
      };
      _0x54196b.sendMessage(_0x2e72ff, {
        'image': _0x74536b,
        'caption': _0xfcb006,
        'footer': config.FOOTER,
        'buttons': [_0x21c464, _0x1d395b, _0x58ce1b, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x14800c)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x2cd103);
    }
  } catch (_0x2e8f99) {
    _0x2f9bc2("*ERROR !!*");
    _0x3a73f4(_0x2e8f99);
  }
});
const _0x29d84c = {
  pattern: "apk1",
  react: '📱',
  alias: ["findapk", "playstore"],
  desc: urlneed4,
  category: "download",
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x29d84c, async (_0x3dbf92, _0x2cd882, _0x51a221, {
  from: _0x1cbb44,
  prefix: _0x3f45bc,
  l: _0x11fe86,
  quoted: _0x5f4c56,
  body: _0x31725c,
  isCmd: _0x386ed4,
  command: _0x53f5dc,
  args: _0x2eaac3,
  q: _0x207ebc,
  isGroup: _0x33145e,
  sender: _0x28a11a,
  senderNumber: _0x5e1f1c,
  botNumber2: _0x5706f5,
  botNumber: _0x240bc2,
  pushname: _0x3f68ed,
  isMe: _0x39f61c,
  isOwner: _0xcc8c64,
  groupMetadata: _0x5e3649,
  groupName: _0x52aa8,
  participants: _0x3a35b9,
  groupAdmins: _0xa9b469,
  isBotAdmins: _0x232f21,
  isAdmins: _0xb42698,
  reply: _0x5c56e0
}) => {
  try {
    const _0x2a4d6b = {
      text: imgmsg
    };
    const _0x1464a3 = {
      quoted: _0x2cd882
    };
    if (!_0x207ebc) {
      return await _0x3dbf92.sendMessage(_0x1cbb44, _0x2a4d6b, _0x1464a3);
    }
    const _0x17c900 = await apkdl.search(_0x207ebc);
    if (config.MODE === "nonbutton") {
      const _0x316be2 = {
        text: N_FOUND
      };
      const _0xc26519 = {
        quoted: _0x2cd882
      };
      if (_0x17c900.length < 1) {
        return await _0x3dbf92.sendMessage(_0x1cbb44, _0x316be2, _0xc26519);
      }
      var _0x595c7c = [];
      for (var _0x22d087 = 0; _0x22d087 < _0x17c900.length; _0x22d087++) {
        _0x595c7c.push({
          'description': _0x17c900[_0x22d087].name,
          'title': _0x22d087 + 1,
          'rowId': _0x3f45bc + "dapk " + _0x17c900[_0x22d087].id
        });
      }
      const _0x5362bd = {
        title: "_[Result from playstore.]_",
        rows: _0x595c7c
      };
      const _0x56488e = [_0x5362bd];
      const _0x2a7864 = {
        text: "┌───[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *APK DOWNLOADER*\n\n*📱 Apk Name:* " + _0x207ebc,
        footer: config.FOOTER,
        title: "Result from playstore. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x56488e
      };
      const _0xb30246 = {
        quoted: _0x2cd882
      };
      await _0x3dbf92.replyList(_0x1cbb44, _0x2a7864, _0xb30246);
    }
    if (config.MODE === "button") {
      const _0x59c713 = {
        text: N_FOUND
      };
      const _0xffb3f8 = {
        quoted: _0x2cd882
      };
      if (_0x17c900.length < 1) {
        return await _0x3dbf92.sendMessage(_0x1cbb44, _0x59c713, _0xffb3f8);
      }
      var _0x25869d = [];
      for (var _0x22d087 = 0; _0x22d087 < _0x17c900.length; _0x22d087++) {
        _0x25869d.push({
          'rows': [{
            'title': _0x22d087 + 1,
            'description': _0x17c900[_0x22d087].name,
            'id': _0x3f45bc + "dapk " + _0x17c900[_0x22d087].id
          }]
        });
      }
      let _0x43b463 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from xnxx. 📲",
          'sections': _0x25869d
        })
      }];
      const _0x5b6b6 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "┌───[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *APK DOWNLOADER*\n\n*📱 Apk Name:* " + _0x207ebc
      };
      const _0x3155d7 = {
        quoted: _0x2cd882
      };
      return await _0x3dbf92.sendButtonMessage(_0x1cbb44, _0x43b463, _0x51a221, _0x5b6b6, _0x3155d7);
    }
  } catch (_0xc40f67) {
    _0x5c56e0("*ERROR !!*");
    _0x11fe86(_0xc40f67);
  }
});
const _0x42cf7a = {
  pattern: "dapk",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x42cf7a, async (_0x53fb1d, _0x31d738, _0x18dedd, {
  from: _0x55dd8b,
  l: _0xd1b2f4,
  quoted: _0x1be6f1,
  body: _0x5abac8,
  isCmd: _0x4a528e,
  command: _0x1ef1ed,
  args: _0x48801f,
  q: _0x1074d6,
  isGroup: _0x515ff8,
  sender: _0x757f01,
  senderNumber: _0x1169ff,
  botNumber2: _0x4d0cba,
  botNumber: _0x161bdc,
  pushname: _0x35049a,
  isMe: _0x3a6bd1,
  isOwner: _0x5647b8,
  groupMetadata: _0x3df405,
  groupName: _0x161689,
  participants: _0x1af04e,
  groupAdmins: _0x2b220b,
  isBotAdmins: _0x1e817d,
  isAdmins: _0x2b9039,
  reply: _0x1e14b9
}) => {
  try {
    const _0x4e07fc = {
      text: '📥',
      key: _0x31d738.key
    };
    const _0x43506d = {
      react: _0x4e07fc
    };
    await _0x53fb1d.sendMessage(_0x55dd8b, _0x43506d);
    const _0x50b40e = {
      text: "*Need apk link...*"
    };
    const _0x14aa1d = {
      quoted: _0x31d738
    };
    if (!_0x1074d6) {
      return await _0x53fb1d.sendMessage(_0x55dd8b, _0x50b40e, _0x14aa1d);
    }
    const _0x2e0e66 = await apkdl.download(_0x1074d6);
    const _0xefe525 = {
      url: _0x2e0e66.dllink
    };
    const _0x14a73e = {
      quoted: _0x31d738
    };
    let _0x14e8c6 = await _0x53fb1d.sendMessage(_0x55dd8b, {
      'document': _0xefe525,
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x2e0e66.name + '.' + "apk",
      'caption': "*ＰＯＤＩ ＭＤ*"
    }, _0x14a73e);
    const _0x3b9996 = {
      text: '📁',
      key: _0x14e8c6.key
    };
    const _0x71de6d = {
      react: _0x3b9996
    };
    await _0x53fb1d.sendMessage(_0x55dd8b, _0x71de6d);
    const _0x30b87a = {
      text: '✔',
      key: _0x31d738.key
    };
    const _0x19b15a = {
      react: _0x30b87a
    };
    await _0x53fb1d.sendMessage(_0x55dd8b, _0x19b15a);
  } catch (_0x5df30f) {
    _0x1e14b9("*ERROR !!*");
    _0xd1b2f4(_0x5df30f);
  }
});
const _0xad2ff1 = {
  pattern: "apkinfo",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xad2ff1, async (_0x13d472, _0x18c7b4, _0x4302f6, {
  from: _0x4c7377,
  l: _0x20f669,
  quoted: _0x14d9b7,
  body: _0x9d85cd,
  isCmd: _0x14b19d,
  command: _0x2725a5,
  args: _0x2b94f2,
  q: _0x53dff3,
  isGroup: _0x48219e,
  sender: _0x1fb375,
  senderNumber: _0x4f1d70,
  botNumber2: _0x51b5ce,
  botNumber: _0x728320,
  pushname: _0x1eab68,
  isMe: _0x5d41b7,
  isOwner: _0x2e8cc3,
  groupMetadata: _0x20d94f,
  groupName: _0x3a01d1,
  participants: _0x15807f,
  groupAdmins: _0x7ae01b,
  isBotAdmins: _0x3bc44d,
  isAdmins: _0x16f950,
  reply: _0x3f6f3b
}) => {
  try {
    const _0x54bcc1 = {
      text: 'ℹ️',
      key: _0x18c7b4.key
    };
    const _0xa6bf68 = {
      react: _0x54bcc1
    };
    await _0x13d472.sendMessage(_0x4c7377, _0xa6bf68);
    const _0x323ee5 = {
      text: "*Need apk link...*"
    };
    const _0x579238 = {
      quoted: _0x18c7b4
    };
    if (!_0x53dff3) {
      return await _0x13d472.sendMessage(_0x4c7377, _0x323ee5, _0x579238);
    }
    const _0x3d29d6 = await apkdl.download(_0x53dff3);
    let _0x582dc0 = "╔═══════════════════╗\n*║🤳ＰＯＤＩＹＡ PLAYSTORE-SEARCH*\n╚═══════════════════╝\n\n*📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x3d29d6.name + "* \n\n*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): " + _0x3d29d6.size + "*\n\n*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: " + _0x3d29d6.lastup + "*\n\n*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ: " + _0x3d29d6["package"] + "* \n\n_*◯──────────────────────────────────◯*_";
    const _0x959de7 = {
      url: _0x3d29d6.icon
    };
    const _0x70b667 = {
      image: _0x959de7,
      caption: _0x582dc0
    };
    const _0x539c18 = {
      quoted: _0x18c7b4
    };
    await _0x13d472.sendMessage(_0x4c7377, _0x70b667, _0x539c18);
    const _0x59f060 = {
      text: '✔',
      key: _0x18c7b4.key
    };
    const _0x151542 = {
      react: _0x59f060
    };
    await _0x13d472.sendMessage(_0x4c7377, _0x151542);
  } catch (_0x544e46) {
    _0x20f669(_0x544e46);
  }
});
const _0xd01df4 = {
  pattern: 'ss',
  react: "🖼️",
  desc: "url to screenshot",
  category: "download",
  use: ".ss url",
  filename: __filename
};
cmd(_0xd01df4, async (_0x26e388, _0x2c7112, _0x1bb2fb, {
  from: _0x206657,
  l: _0xdce25a,
  quoted: _0x23f007,
  prefix: _0x5c5b4c,
  body: _0x41e652,
  isCmd: _0x48d2f8,
  command: _0x2a9bc1,
  args: _0x489e15,
  q: _0x22429b,
  isGroup: _0x5570ec,
  sender: _0x21930a,
  senderNumber: _0xf27edc,
  botNumber2: _0x3709d7,
  botNumber: _0x59d7e1,
  pushname: _0x2d6f2f,
  isMe: _0xed80dc,
  isOwner: _0x2aa9ae,
  groupMetadata: _0x48cea2,
  groupName: _0x271e07,
  participants: _0x2ad2ce,
  groupAdmins: _0x33c069,
  isBotAdmins: _0x327252,
  isAdmins: _0x48bf0a,
  reply: _0x5bc7eb
}) => {
  try {
    const _0x472598 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x5c5b4c + "desktop " + _0x22429b,
        'description': "Desktop type ss"
      }, {
        'title': '2',
        'rowId': _0x5c5b4c + "ssphone " + _0x22429b,
        'description': "Phone type ss 🖼️"
      }, {
        'title': '3',
        'rowId': _0x5c5b4c + "sstab " + _0x22429b,
        'description': "Tab type ss 🖼️"
      }]
    }];
    const _0x36b515 = {
      url: config.LOGO
    };
    const _0x537016 = {
      caption: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n   \n ▏ *SS CONVETER*\n\n└──────◉",
      image: _0x36b515,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x472598
    };
    const _0x435da5 = {
      quoted: _0x2c7112
    };
    return await _0x26e388.replyList(_0x206657, _0x537016, _0x435da5);
  } catch (_0x28a7e5) {
    _0x5bc7eb("*ERROR !!*");
    _0xdce25a(_0x28a7e5);
  }
});
const _0x179577 = {
  pattern: "desktop",
  react: '📸',
  alias: ["screenshot", "ssweb", "ssdesktop"],
  desc: descg,
  category: "download",
  use: ".ss <url>",
  filename: __filename
};
cmd(_0x179577, async (_0x331494, _0x2d5f2f, _0x576f9a, {
  from: _0x33632d,
  l: _0x3a55cb,
  quoted: _0x230188,
  prefix: _0x485867,
  body: _0x593277,
  isCmd: _0x4275af,
  command: _0x505c96,
  args: _0x23947d,
  q: _0x23be5a,
  isGroup: _0x3da4b3,
  sender: _0x2ef956,
  senderNumber: _0x417f1d,
  botNumber2: _0x3d0008,
  botNumber: _0x5f4ce1,
  pushname: _0x5e6496,
  isMe: _0x22ad84,
  isOwner: _0x368b09,
  groupMetadata: _0x678413,
  groupName: _0x4efec8,
  participants: _0x2c81eb,
  groupAdmins: _0x1125d2,
  isBotAdmins: _0x58f812,
  isAdmins: _0x48e79f,
  reply: _0x15f373
}) => {
  try {
    if (!_0x23be5a) {
      return _0x15f373(imgmsg);
    }
    let _0x22d029 = getRandom('');
    let _0x4896b1 = await sswebA(_0x23be5a, true, "desktop");
    fs.writeFileSync(_0x22d029 + ".jpg", _0x4896b1);
    const _0x3d066b = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x485867 + "ssd " + _0x22d029 + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0x485867 + "ssi " + _0x22d029 + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x5aafa1 = {
      url: config.LOGO
    };
    const _0x231d25 = {
      caption: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x5aafa1,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x3d066b
    };
    const _0x5aae24 = {
      quoted: _0x2d5f2f
    };
    return await _0x331494.replyList(_0x33632d, _0x231d25, _0x5aae24);
  } catch (_0x49a22b) {
    _0x15f373("*ERROR !!*");
    _0x3a55cb(_0x49a22b);
  }
});
const _0x5a87a2 = {};
function _0x3f99(_0x9aa6d, _0x2cefde) {
  const _0x1b0012 = _0x1b00();
  _0x3f99 = function (_0x3f999d, _0x5eec45) {
    _0x3f999d = _0x3f999d - 420;
    let _0x2b126a = _0x1b0012[_0x3f999d];
    return _0x2b126a;
  };
  return _0x3f99(_0x9aa6d, _0x2cefde);
}
_0x5a87a2.pattern = "ssphone";
_0x5a87a2.react = '📸';
_0x5a87a2.desc = descp;
_0x5a87a2.category = "download";
_0x5a87a2.use = ".ss <url>";
_0x5a87a2.filename = __filename;
cmd(_0x5a87a2, async (_0x1bae1b, _0x4d6b5e, _0x375aec, {
  from: _0x4fcc0d,
  l: _0x323528,
  quoted: _0x3922dc,
  prefix: _0x41a91c,
  body: _0x32a0fd,
  isCmd: _0x28ce6f,
  command: _0x3f0cf2,
  args: _0x3f54c2,
  q: _0x201ee6,
  isGroup: _0x3b7bd8,
  sender: _0x364552,
  senderNumber: _0x30de0c,
  botNumber2: _0x2d1f9e,
  botNumber: _0x41e708,
  pushname: _0x4babe7,
  isMe: _0x97f8d6,
  isOwner: _0x11820d,
  groupMetadata: _0x3ac7ce,
  groupName: _0x4c5e1f,
  participants: _0x176323,
  groupAdmins: _0x3f1178,
  isBotAdmins: _0x139345,
  isAdmins: _0x535915,
  reply: _0x52d6a7
}) => {
  try {
    if (!_0x201ee6) {
      return _0x52d6a7(imgmsg);
    }
    let _0x3d691b = getRandom('');
    let _0xd2cf7c = await sswebA(_0x201ee6, true, "phone");
    fs.writeFileSync(_0x3d691b + ".jpg", _0xd2cf7c);
    const _0x5b5a9a = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x41a91c + "ssd " + _0x3d691b + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0x41a91c + "ssi " + _0x3d691b + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x4e18e5 = {
      url: config.LOGO
    };
    const _0x445f3d = {
      caption: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x4e18e5,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x5b5a9a
    };
    const _0x1a2332 = {
      quoted: _0x4d6b5e
    };
    return await _0x1bae1b.replyList(_0x4fcc0d, _0x445f3d, _0x1a2332);
  } catch (_0x35d699) {
    _0x52d6a7("*ERROR !!*");
    _0x323528(_0x35d699);
  }
});
const _0x205801 = {
  pattern: "sstab",
  react: '📸',
  desc: desct
};
function _0x4d8b3c(_0xeb18e5, _0x22458e, _0x2b2256, _0x5df9b3, _0x20c982) {
  return _0x3f99(_0xeb18e5 + 0x11c, _0x22458e);
}
_0x205801.category = "download";
_0x205801.use = ".ss <url>";
_0x205801.filename = __filename;
cmd(_0x205801, async (_0x3c2c1c, _0x3c17fe, _0x509ada, {
  from: _0x3566c1,
  l: _0x10ed87,
  quoted: _0x5f5001,
  prefix: _0xad684d,
  body: _0x48da60,
  isCmd: _0xdde7bc,
  command: _0x2865a2,
  args: _0x3fe954,
  q: _0x3eae66,
  isGroup: _0x2b950a,
  sender: _0xd4ebf9,
  senderNumber: _0x152cd4,
  botNumber2: _0x16d4a8,
  botNumber: _0x3bcf4d,
  pushname: _0x57efb5,
  isMe: _0x192327,
  isOwner: _0x47343f,
  groupMetadata: _0x29296f,
  groupName: _0x2d675f,
  participants: _0x3b8aaa,
  groupAdmins: _0x45568f,
  isBotAdmins: _0x5a47da,
  isAdmins: _0x22d303,
  reply: _0x1e54e7
}) => {
  try {
    if (!_0x3eae66) {
      return _0x1e54e7(imgmsg);
    }
    let _0x3c93b2 = getRandom('');
    let _0x5d26db = await sswebA(_0x3eae66, true, "tablet");
    fs.writeFileSync(_0x3c93b2 + ".jpg", _0x5d26db);
    const _0x37e589 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0xad684d + "ssd " + _0x3c93b2 + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0xad684d + "ssi " + _0x3c93b2 + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x543ceb = {
      url: config.LOGO
    };
    const _0x1b04b9 = {
      caption: "[👨‍💻ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x543ceb,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x37e589
    };
    const _0x224ea0 = {
      quoted: _0x3c17fe
    };
    return await _0x3c2c1c.replyList(_0x3566c1, _0x1b04b9, _0x224ea0);
  } catch (_0x28c0d8) {
    _0x1e54e7("*ERROR !!*");
    _0x10ed87(_0x28c0d8);
  }
});
const _0x37da77 = {
  pattern: "ssi",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x37da77, async (_0x47f562, _0xa5ff8d, _0x5a3c22, {
  from: _0x4c58ba,
  l: _0x349144,
  quoted: _0x5672ae,
  body: _0x673a50,
  isCmd: _0x5de442,
  command: _0x3c0f53,
  args: _0x312967,
  q: _0x406fb2,
  isGroup: _0x1ea8f4,
  sender: _0xc72c2b,
  senderNumber: _0x6fd409,
  botNumber2: _0x375863,
  botNumber: _0x503c88,
  pushname: _0x5613c8,
  isMe: _0x34b2bb,
  isOwner: _0x5b6415,
  groupMetadata: _0x15a9b2,
  groupName: _0x23793b,
  participants: _0xcc2158,
  groupAdmins: _0x3389d3,
  isBotAdmins: _0x44d21e,
  isAdmins: _0x4429a1,
  reply: _0x5c2f84
}) => {
  try {
    const _0x54a2bb = {
      text: '📥',
      key: _0xa5ff8d.key
    };
    const _0x3c0feb = {
      react: _0x54a2bb
    };
    await _0x47f562.sendMessage(_0x4c58ba, _0x3c0feb);
    const _0x23be4d = {
      quoted: _0xa5ff8d
    };
    await _0x47f562.sendMessage(_0x4c58ba, {
      'image': fs.readFileSync(_0x406fb2),
      'caption': config.FOOTER
    }, _0x23be4d);
    const _0x3ee25f = {
      text: '✔',
      key: _0xa5ff8d.key
    };
    const _0x57b9cf = {
      react: _0x3ee25f
    };
    await _0x47f562.sendMessage(_0x4c58ba, _0x57b9cf);
  } catch (_0x5f2c85) {
    _0x5c2f84("*ERROR !!*");
    _0x349144(_0x5f2c85);
  }
});
const _0x42f99e = {
  pattern: "ssd",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x42f99e, async (_0x532989, _0x2f464b, _0x4246c9, {
  from: _0x3a0d09,
  l: _0x18b77d,
  quoted: _0x3cfb4d,
  body: _0x207e2d,
  isCmd: _0x2f0756,
  command: _0x41f622,
  args: _0x38b530,
  q: _0x2f807b,
  isGroup: _0xc09630,
  sender: _0x2dd138,
  senderNumber: _0x1eabee,
  botNumber2: _0x3b1525,
  botNumber: _0x2f70e6,
  pushname: _0x2bc2a4,
  isMe: _0x3cf622,
  isOwner: _0x3d34f8,
  groupMetadata: _0x14d5fc,
  groupName: _0x56f8c5,
  participants: _0x195eec,
  groupAdmins: _0x1767d9,
  isBotAdmins: _0x356157,
  isAdmins: _0x4255d3,
  reply: _0x346b01
}) => {
  try {
    const _0x3fc0bd = {
      text: '📥',
      key: _0x2f464b.key
    };
    const _0x395aac = {
      react: _0x3fc0bd
    };
    await _0x532989.sendMessage(_0x3a0d09, _0x395aac);
    const _0x4d9246 = {
      quoted: _0x2f464b
    };
    await _0x532989.sendMessage(_0x3a0d09, {
      'document': fs.readFileSync(_0x2f807b),
      'mimetype': "image/jpeg",
      'fileName': "screenshot.jpg",
      'caption': config.FOOTER
    }, _0x4d9246);
    const _0x226ba1 = {
      text: '✔',
      key: _0x2f464b.key
    };
    const _0x162519 = {
      react: _0x226ba1
    };
    await _0x532989.sendMessage(_0x3a0d09, _0x162519);
  } catch (_0x296b1b) {
    _0x346b01("*ERROR !!*");
    _0x18b77d(_0x296b1b);
  }
});
const _0x5bc7a1 = {
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "download mfire files",
  category: "download",
  react: '📩',
  filename: __filename
};
cmd(_0x5bc7a1, async (_0x281e95, _0x44ecc6, _0x43bbc8, {
  from: _0x27d3f7,
  quoted: _0x3b6747,
  body: _0x4c5c60,
  isCmd: _0x11292d,
  command: _0x37f977,
  args: _0x17aed5,
  q: _0x5b0b40,
  isGroup: _0x33dee6,
  sender: _0x4f375e,
  senderNumber: _0x105b47,
  botNumber2: _0x1b1038,
  botNumber: _0x20bf58,
  pushname: _0x38895d,
  isMe: _0xbfdde3,
  isOwner: _0x3705e7,
  groupMetadata: _0x39ca4c,
  groupName: _0x9579eb,
  participants: _0x29a2d0,
  groupAdmins: _0xee7410,
  isBotAdmins: _0x218b70,
  isAdmins: _0x16f33b,
  reply: _0xd2f7b1
}) => {
  try {
    if (!_0x5b0b40 && !_0x5b0b40.startsWith("https://")) {
      return _0xd2f7b1("give me mediafire url");
    }
    const _0x11df38 = await require("undici").fetch(_0x5b0b40);
    const _0xe04f9c = await _0x11df38.text();
    const _0xf53bfb = cheerio.load(_0xe04f9c);
    let _0x43cf0d = _0xf53bfb(".dl-info > div > div.filename").text();
    let _0x361d79 = _0xf53bfb("#downloadButton").attr("href");
    let _0x46a8c7 = _0xf53bfb(".dl-info > div > div.filetype").text();
    let _0x4c2a28 = _0xf53bfb("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span").text();
    let _0x4760b5 = _0xf53bfb("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span").text();
    var _0x41b282 = '';
    if (_0x43cf0d.includes(".zip")) {
      _0x41b282 = "application/zip";
    } else {
      if (_0x43cf0d.includes(".pdf")) {
        _0x41b282 = "application/pdf";
      } else {
        if (_0x43cf0d.includes(".mp4")) {
          _0x41b282 = "video/mp4";
        } else {
          if (_0x43cf0d.includes(".mkv")) {
            _0x41b282 = "video/mkv";
          } else {
            if (_0x43cf0d.includes(".mp3")) {
              _0x41b282 = "audio/mpeg";
            } else {
              if (_0x43cf0d.includes(".7z")) {
                _0x41b282 = "application/x-7z-compressed";
              } else {
                if (_0x43cf0d.includes("jpg" || "jpeg")) {
                  _0x41b282 = "image/jpeg";
                } else {
                  if (_0x43cf0d.includes(".png")) {
                    _0x41b282 = "image/png";
                  } else if (_0x43cf0d.includes(".rar")) {
                    _0x41b282 = "application/x-rar-compressed";
                  } else {
                    _0x41b282 = "application/octet-stream";
                  }
                }
              }
            }
          }
        }
      }
    }
    _0xd2f7b1("*ＰＯＤＩ-MD MEDIAFIRE FILE DOWNLOADING...📥*");
    const _0xb486d8 = {
      url: _0x361d79
    };
    const _0x514571 = {
      document: _0xb486d8,
      fileName: _0x43cf0d,
      mimetype: _0x41b282,
      caption: _0x43cf0d + "\n\n" + _0x46a8c7 + "\n\n" + _0x4c2a28 + "\n\n" + _0x4760b5
    };
    const _0x4c0cb9 = {
      quoted: _0x44ecc6
    };
    await _0x281e95.sendMessage(_0x27d3f7, _0x514571, _0x4c0cb9);
  } catch (_0x485d7b) {
    console.log(_0x485d7b);
    _0xd2f7b1('' + _0x485d7b);
  }
});
const _0x4593a6 = {
  pattern: 'ig',
  alias: ["igstory"],
  react: '🎀',
  desc: "Download instagram videos/photos.",
  category: "download",
  use: ".ig <Instagram link>",
  filename: __filename
};
cmd(_0x4593a6, async (_0xf4158f, _0x211232, _0x2adb2e, {
  from: _0x4dd41b,
  l: _0x302e72,
  quoted: _0x4641c9,
  body: _0x557f0b,
  isCmd: _0x191443,
  command: _0x4c5af4,
  args: _0x2d8b19,
  q: _0x3d0399,
  isGroup: _0x50555d,
  sender: _0x1612a4,
  senderNumber: _0x5eab3a,
  botNumber2: _0x540ac0,
  botNumber: _0x3affba,
  pushname: _0x3258da,
  isMe: _0x38969d,
  isOwner: _0x88bf08,
  groupMetadata: _0x31c516,
  groupName: _0x21386e,
  participants: _0x3a45a5,
  groupAdmins: _0x2ec92d,
  isBotAdmins: _0x1282f8,
  isAdmins: _0x5b1c8b,
  reply: _0xf16f09
}) => {
  try {
    if (!_0x3d0399) {
      return await _0xf16f09(needus);
    }
    let _0x41826b = await fetchJson("https://api.maher-zubair.tech/download/instagram2?url=" + _0x3d0399);
    for (let _0x314068 = 0; _0x314068 < _0x41826b.data.data.length; _0x314068++) {
      const _0x1d3510 = {
        quoted: _0x211232
      };
      const _0x105471 = {
        quoted: _0x211232
      };
      if (_0x41826b.data.data[_0x314068].type === "image") {
        await _0xf4158f.sendMessage(_0x4dd41b, {
          'image': {
            'url': _0x41826b.data.data[_0x314068].url
          },
          'caption': config.FOOTER
        }, _0x1d3510);
      } else {
        await _0xf4158f.sendMessage(_0x4dd41b, {
          'video': {
            'url': _0x41826b.data.data[_0x314068].url
          },
          'caption': config.FOOTER
        }, _0x105471);
      }
    }
  } catch (_0x2f3282) {
    _0xf16f09(cantf);
    _0x302e72(_0x2f3282);
  }
});
const _0x2a01e5 = {
  pattern: "threads",
  alias: ["thread"],
  react: '🧵',
  desc: "Download threads videos/photos.",
  category: "download",
  use: ".threads <threads link>",
  filename: __filename
};
cmd(_0x2a01e5, async (_0x4ad579, _0x15b175, _0x5c33cb, {
  from: _0x1052bc,
  l: _0x551ce3,
  quoted: _0x683f6d,
  body: _0x427dee,
  isCmd: _0x515c4f,
  command: _0x4d9322,
  args: _0x1d835d,
  q: _0x2be836,
  isGroup: _0x4f34ed,
  sender: _0x3f3df9,
  senderNumber: _0x200e01,
  botNumber2: _0x2250f3,
  botNumber: _0x4b562a,
  pushname: _0x24bca3,
  isMe: _0x3b0fb1,
  isOwner: _0x3a9762,
  groupMetadata: _0x57fcef,
  groupName: _0x4e0283,
  participants: _0x938e42,
  groupAdmins: _0x3d2cef,
  isBotAdmins: _0x56835c,
  isAdmins: _0x8dfe1a,
  reply: _0x3d5dbf
}) => {
  try {
    if (!_0x2be836) {
      return await _0x3d5dbf(needus);
    }
    let _0x496f5f = await Download(_0x2be836);
    for (let _0x4d643a = 0; _0x4d643a < _0x496f5f.download.length; _0x4d643a++) {
      const _0x570fec = {
        quoted: _0x15b175
      };
      const _0x1c7933 = {
        quoted: _0x15b175
      };
      if (_0x496f5f.download[_0x4d643a].type === "image") {
        await _0x4ad579.sendMessage(_0x1052bc, {
          'image': {
            'url': _0x496f5f.download[_0x4d643a].url
          },
          'caption': config.FOOTER
        }, _0x570fec);
      } else {
        await _0x4ad579.sendMessage(_0x1052bc, {
          'video': {
            'url': _0x496f5f.download[_0x4d643a].url
          },
          'caption': config.FOOTER
        }, _0x1c7933);
      }
    }
  } catch (_0x418680) {
    _0x3d5dbf(cantf);
    _0x551ce3(_0x418680);
  }
});
const _0x21c711 = {
  pattern: "pindl",
  react: '🔖',
  desc: "download pinterest images",
  category: "download",
  use: ".pindl",
  filename: __filename
};
cmd(_0x21c711, async (_0x37aab2, _0x58806d, _0x7aa885, {
  from: _0xf51fe,
  l: _0x6b73e,
  quoted: _0x30f31a,
  body: _0x149d20,
  isCmd: _0x28a840,
  command: _0x302a29,
  args: _0x3ef7c1,
  q: _0x281a7f,
  isGroup: _0x6ed6df,
  sender: _0x24482b,
  senderNumber: _0x53fc65,
  botNumber2: _0x47c0a7,
  botNumber: _0x8d7e70,
  pushname: _0x3a632e,
  isMe: _0x13ab41,
  isOwner: _0x53acfc,
  groupMetadata: _0x6ed8b1,
  groupName: _0x3f7890,
  participants: _0x313650,
  groupAdmins: _0x17b15d,
  isBotAdmins: _0x31545f,
  isAdmins: _0x112e3c,
  reply: _0x559173
}) => {
  try {
    let {
      pinterest: _0x2a8481
    } = require("../lib/scraper");
    anu = await _0x2a8481(_0x281a7f);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x193db0 = {
      url: result
    };
    _0x37aab2.sendMessage(_0x58806d.chat, {
      'image': _0x193db0,
      'caption': "🔮 Media Url : " + result
    }, {
      'quoted': _0x58806d
    });
    const _0x52a219 = {
      text: '✅',
      key: _0x58806d.key
    };
    const _0x24b7d8 = {
      react: _0x52a219
    };
    await _0x37aab2.sendMessage(_0xf51fe, _0x24b7d8);
  } catch (_0x5e751b) {
    _0x559173();
    _0x6b73e(_0x5e751b);
  }
});
const _0x3bde54 = {};
function _0x50d6f6(_0x26a1d6, _0x30367f, _0x379ff2, _0x20db19, _0x4a1fd1) {
  return _0x3f99(_0x20db19 + 0x174, _0x379ff2);
}
_0x3bde54.pattern = "gdrive";
_0x3bde54.alias = ["googledrive'"];
_0x3bde54.react = '📑';
_0x3bde54.desc = "Download googledrive files.";
_0x3bde54.category = "download";
_0x3bde54.use = ".gdrive <googledrive link>";
_0x3bde54.filename = __filename;
cmd(_0x3bde54, async (_0x136811, _0x3f1b50, _0x305339, {
  from: _0x4fdd4e,
  l: _0x1c8aa1,
  quoted: _0x455f17,
  body: _0x3027dc,
  isCmd: _0xf67d1,
  command: _0x3b2d12,
  args: _0x284c24,
  q: _0x5dbd7e,
  isGroup: _0x8d7e1a,
  sender: _0x3cd96d,
  senderNumber: _0x2b58df,
  botNumber2: _0x8a0ac8,
  botNumber: _0x249c6c,
  pushname: _0x5085e4,
  isMe: _0x180b5a,
  isOwner: _0x118d73,
  groupMetadata: _0x2b23db,
  groupName: _0x4bcb5b,
  participants: _0x3f9854,
  groupAdmins: _0x2706d0,
  isBotAdmins: _0x4b761c,
  isAdmins: _0x3e6daa,
  reply: _0x58add7
}) => {
  try {
    if (!_0x5dbd7e) {
      return await _0x58add7("*Please give me googledrive url !!*");
    }
    let _0x45f59e = await GDriveDl(_0x5dbd7e);
    let _0x245faf = "*[ Downloading file ]*\n\n";
    _0x245faf += "*Name :* " + _0x45f59e.fileName + "\n";
    _0x245faf += "*Size :* " + _0x45f59e.fileSize + "\n";
    _0x245faf += "*Type :* " + _0x45f59e.mimetype;
    await _0x58add7(_0x245faf);
    const _0x542705 = {
      url: _0x45f59e.downloadUrl
    };
    const _0x3d9cbf = {
      document: _0x542705,
      fileName: _0x45f59e.fileName,
      mimetype: _0x45f59e.mimetype
    };
    const _0x1f85f1 = {
      quoted: _0x3f1b50
    };
    _0x136811.sendMessage(_0x4fdd4e, _0x3d9cbf, _0x1f85f1);
  } catch (_0x33753a) {
    _0x58add7("*Error !!*");
    console.log(_0x33753a);
  }
});
const _0x38f92e = {
  pattern: "tiktok",
  alias: ["ttdl", 'tt'],
  react: "🏷️",
  desc: desc,
  category: "download",
  use: ".tiktok <Tiktok link>",
  filename: __filename
};
cmd(_0x38f92e, async (_0xe099a0, _0x3c2fef, _0x1d6693, {
  from: _0x1801fe,
  l: _0x44d521,
  prefix: _0x3de78f,
  quoted: _0x514d9e,
  body: _0x20bb1f,
  isCmd: _0x2f184e,
  command: _0x38a285,
  args: _0x1c2cd7,
  q: _0x1c7532,
  isGroup: _0x30718d,
  sender: _0x3225a7,
  senderNumber: _0x10d833,
  botNumber2: _0x3091e4,
  botNumber: _0x5070f5,
  pushname: _0x342bb7,
  isMe: _0x212c66,
  isOwner: _0x500ba9,
  groupMetadata: _0x222294,
  groupName: _0x3bd569,
  participants: _0x229825,
  groupAdmins: _0xa7cdfc,
  isBotAdmins: _0x547ac5,
  isAdmins: _0x41e288,
  reply: _0x1e195d
}) => {
  try {
    if (!_0x1c7532.includes("tiktok.com")) {
      return await _0x1e195d(urlneed);
    }
    const _0x1772f7 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x1c7532);
    let _0x38b47a = "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n*TIKTOK DOWNLOADER*\n\n*📃 Title:* " + _0x1772f7.result.title + "\n*✍🏼 Link:* " + _0x1c7532;
    if (config.MODE === "nonbutton") {
      const _0x38fe3e = {
        title: "Without Watermark",
        rows: [{
          'title': "    1.1",
          'rowId': _0x3de78f + "ttw " + _0x1c7532,
          'description': "Withoit-Watermark"
        }, {
          'title': "    1.2",
          'rowId': _0x3de78f + "ttwd " + _0x1c7532,
          'description': "Without-Watermark Doc"
        }]
      };
      const _0xd00f8f = {
        title: "With Watermark",
        rows: [{
          'title': "    2.1",
          'rowId': _0x3de78f + "tnd " + _0x1c7532,
          'description': "With-Watermark"
        }, {
          'title': "    2.2",
          'rowId': _0x3de78f + "tndd " + _0x1c7532,
          'description': "With-Watermark Doc"
        }]
      };
      const _0x3250a0 = {
        title: "VOICE CUT TYPE 🎶",
        rows: [{
          'title': "    3.1",
          'rowId': _0x3de78f + "ta " + _0x1c7532,
          'description': "AUDIO DOWNLOAD"
        }, {
          'title': "    2.2",
          'rowId': _0x3de78f + "td " + _0x1c7532,
          'description': "DOCUMENT DOWNLOAD"
        }]
      };
      const _0x3c6193 = [_0x38fe3e, _0xd00f8f, _0x3250a0];
      const _0x48ba96 = {
        url: _0x1772f7.result.thumbnail
      };
      const _0x4edffb = {
        image: _0x48ba96,
        caption: _0x38b47a,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x3c6193
      };
      const _0x3142b9 = {
        quoted: _0x3c2fef
      };
      return await _0xe099a0.replyList(_0x1801fe, _0x4edffb, _0x3142b9);
    }
    if (config.MODE === "button") {
      const _0x4a9de1 = {
        title: "Without Watermark",
        rows: [{
          'header': '',
          'title': '',
          'description': "With-Watermark",
          'id': _0x3de78f + "ttw " + _0x1c7532
        }, {
          'header': '',
          'title': '',
          'description': "With-Watermark Doc",
          'id': _0x3de78f + "ttwd " + _0x1c7532
        }]
      };
      const _0x589f6c = {
        title: "With Watermark",
        rows: [{
          'header': '',
          'title': '',
          'description': "Without-Watermark",
          'id': _0x3de78f + "tnd " + _0x1c7532
        }, {
          'header': '',
          'title': '',
          'description': "Without-Watermark Doc",
          'id': _0x3de78f + "tndd " + _0x1c7532
        }]
      };
      const _0x437813 = {
        title: "VOICE CUT TYPE 🎶",
        rows: [{
          'header': '',
          'title': '',
          'description': "AUDIO DOWNLOAD",
          'id': _0x3de78f + "ta " + _0x1c7532
        }, {
          'header': '',
          'title': '',
          'description': "DOCUMENT DOWNLOAD",
          'id': _0x3de78f + "td " + _0x1c7532
        }]
      };
      let _0x161067 = [_0x4a9de1, _0x589f6c, _0x437813];
      const _0x54572d = {
        title: "Click Here⎙",
        sections: _0x161067
      };
      const _0x128f0c = {
        url: config.LOGO
      };
      const _0x14a956 = {
        displayText: " 🪫 `SD` QUALITY VIDEO"
      };
      const _0x23e429 = {
        buttonId: _0x3de78f + "ttw " + _0x1c7532,
        buttonText: _0x14a956
      };
      const _0x49f0ad = {
        displayText: " 🔋 `HD` QUALITY VIDEO"
      };
      const _0x14b473 = {
        buttonId: _0x3de78f + "tnd " + _0x1c7532,
        buttonText: _0x49f0ad
      };
      const _0x25b71a = {
        displayText: " 🎶 Audio file"
      };
      const _0x4d596f = {
        buttonId: _0x3de78f + "ta " + _0x1c7532,
        buttonText: _0x25b71a
      };
      const _0xf6b0eb = {
        quoted: _0x1d6693
      };
      _0xe099a0.sendMessage(_0x1801fe, {
        'image': _0x128f0c,
        'caption': _0x38b47a,
        'footer': config.FOOTER,
        'buttons': [_0x23e429, _0x14b473, _0x4d596f, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x54572d)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0xf6b0eb);
    }
  } catch (_0x10b4ab) {
    _0x1e195d("*ERROR !!*");
    _0x44d521(_0x10b4ab);
  }
});
const _0x2d9d2c = {};
_0x2d9d2c.pattern = "ttw";
_0x2d9d2c.react = '⬇';
_0x2d9d2c.filename = __filename;
cmd(_0x2d9d2c, async (_0x3d0a3c, _0x24f303, _0x522ce8, {
  from: _0x41c5d5,
  quoted: _0x5c3e45,
  body: _0x1226d5,
  isCmd: _0x264c20,
  command: _0x118e74,
  args: _0x18b4f0,
  q: _0x2567f2,
  isGroup: _0x428309,
  sender: _0x156115,
  senderNumber: _0x52bc96,
  botNumber2: _0x119af3,
  botNumber: _0x4af06a,
  pushname: _0x47e01e,
  isMe: _0x4d8c00,
  isOwner: _0x3130ab,
  groupMetadata: _0x32681c,
  groupName: _0x200e2a,
  participants: _0x4a8068,
  groupAdmins: _0x5befd2,
  isBotAdmins: _0x53e68c,
  isAdmins: _0x2199bc,
  reply: _0x51bd8b
}) => {
  try {
    const _0x28ecf1 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x2567f2);
    const _0x3b7c52 = {
      text: '⬆',
      key: _0x24f303.key
    };
    const _0x30ec1a = {
      react: _0x3b7c52
    };
    await _0x3d0a3c.sendMessage(_0x41c5d5, _0x30ec1a);
    const _0x2f7e55 = {
      url: _0x28ecf1.result.nowm
    };
    const _0xb5e44c = {
      video: _0x2f7e55,
      mimetype: "video/mp4",
      caption: "> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x473a5d = {
      quoted: _0x24f303
    };
    await _0x3d0a3c.sendMessage(_0x41c5d5, _0xb5e44c, _0x473a5d);
    const _0x38addb = {
      text: '✔',
      key: _0x24f303.key
    };
    const _0x182cd4 = {
      react: _0x38addb
    };
    await _0x3d0a3c.sendMessage(_0x41c5d5, _0x182cd4);
  } catch (_0x226917) {
    const _0x56bc16 = {
      text: '❌',
      key: _0x24f303.key
    };
    const _0x56aa16 = {
      react: _0x56bc16
    };
    await _0x3d0a3c.sendMessage(_0x41c5d5, _0x56aa16);
    console.log(_0x226917);
    _0x51bd8b("Error !!\n\n*" + _0x226917 + '*');
  }
});
const _0x3702a2 = {
  pattern: "ttwd",
  react: '⬇',
  filename: __filename
};
cmd(_0x3702a2, async (_0x12fe50, _0x4e7742, _0x5a47cc, {
  from: _0x2cf009,
  quoted: _0x4a1b30,
  body: _0x1c4b70,
  isCmd: _0x733914,
  command: _0x149ea8,
  args: _0x2cddab,
  q: _0x28bc08,
  isGroup: _0x5f1933,
  sender: _0x5c4874,
  senderNumber: _0x23673b,
  botNumber2: _0x46b898,
  botNumber: _0x5e8cc4,
  pushname: _0x18df22,
  isMe: _0x58e7b0,
  isOwner: _0x5374b6,
  groupMetadata: _0x50bb6c,
  groupName: _0x51cd14,
  participants: _0x1cf020,
  groupAdmins: _0xb9b519,
  isBotAdmins: _0x226d4a,
  isAdmins: _0x2d6fad,
  reply: _0x336a08
}) => {
  try {
    const _0x9e46a = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x28bc08);
    const _0x324806 = {
      text: '⬆',
      key: _0x4e7742.key
    };
    const _0x1b2866 = {
      react: _0x324806
    };
    await _0x12fe50.sendMessage(_0x2cf009, _0x1b2866);
    const _0x55007b = {
      url: _0x9e46a.result.nowm
    };
    const _0x1b66b3 = {
      document: _0x55007b,
      mimetype: "video/mp4",
      fileName: _0x9e46a.result.title + ".mp4",
      caption: "💻 *ＰＯＤＩ MD TTDL*"
    };
    const _0xd99c92 = {
      quoted: _0x4e7742
    };
    await _0x12fe50.sendMessage(_0x2cf009, _0x1b66b3, _0xd99c92);
    const _0x2371fb = {
      text: '✔',
      key: _0x4e7742.key
    };
    const _0x288700 = {
      react: _0x2371fb
    };
    await _0x12fe50.sendMessage(_0x2cf009, _0x288700);
  } catch (_0x33fc18) {
    const _0x5d98f6 = {
      text: '❌',
      key: _0x4e7742.key
    };
    const _0x594d79 = {
      react: _0x5d98f6
    };
    await _0x12fe50.sendMessage(_0x2cf009, _0x594d79);
    console.log(_0x33fc18);
    _0x336a08("Error !!\n\n*" + _0x33fc18 + '*');
  }
});
const _0x14291b = {
  pattern: "tnd",
  react: '⬇',
  filename: __filename
};
cmd(_0x14291b, async (_0x7bf5a4, _0x821f08, _0x1ad08f, {
  from: _0x318d30,
  quoted: _0x2087c2,
  body: _0x278f9a,
  isCmd: _0x4a4b9d,
  command: _0x25bdcf,
  args: _0x580530,
  q: _0x489908,
  isGroup: _0x287870,
  sender: _0x32a66f,
  senderNumber: _0x393350,
  botNumber2: _0x5d16ca,
  botNumber: _0x333b58,
  pushname: _0x5adbee,
  isMe: _0x418a3c,
  isOwner: _0x34b85a,
  groupMetadata: _0x350df5,
  groupName: _0x35c321,
  participants: _0x2f799a,
  groupAdmins: _0x576fc3,
  isBotAdmins: _0x2dbd41,
  isAdmins: _0x48df53,
  reply: _0x168b92
}) => {
  try {
    const _0x3b328e = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x489908);
    const _0x445cc3 = {
      text: '⬆',
      key: _0x821f08.key
    };
    const _0x2ef924 = {
      react: _0x445cc3
    };
    await _0x7bf5a4.sendMessage(_0x318d30, _0x2ef924);
    const _0x3ba6d6 = {
      url: _0x3b328e.result.watermark
    };
    const _0x1cd6f0 = {
      video: _0x3ba6d6,
      mimetype: "video/mp4",
      caption: "> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x478dae = {
      quoted: _0x821f08
    };
    await _0x7bf5a4.sendMessage(_0x318d30, _0x1cd6f0, _0x478dae);
    const _0x3f3e6a = {
      text: '✔',
      key: _0x821f08.key
    };
    const _0x15563a = {
      react: _0x3f3e6a
    };
    await _0x7bf5a4.sendMessage(_0x318d30, _0x15563a);
  } catch (_0x235bc3) {
    const _0x17136c = {
      text: '❌',
      key: _0x821f08.key
    };
    const _0x5d153e = {
      react: _0x17136c
    };
    await _0x7bf5a4.sendMessage(_0x318d30, _0x5d153e);
    console.log(_0x235bc3);
    _0x168b92("Error !!\n\n*" + _0x235bc3 + '*');
  }
});
const _0x357943 = {
  pattern: "tndd",
  react: '⬇',
  filename: __filename
};
cmd(_0x357943, async (_0x12609b, _0x379a9f, _0xb49b8d, {
  from: _0x533f4c,
  quoted: _0x793760,
  body: _0x588cfa,
  isCmd: _0x154151,
  command: _0x190b37,
  args: _0x4a1b1e,
  q: _0x5d1833,
  isGroup: _0x261f2c,
  sender: _0x21c1de,
  senderNumber: _0x494b64,
  botNumber2: _0x28d900,
  botNumber: _0x234428,
  pushname: _0x1cda91,
  isMe: _0x3c3176,
  isOwner: _0x12ed8,
  groupMetadata: _0x3b5621,
  groupName: _0x964a25,
  participants: _0x1c7b39,
  groupAdmins: _0x24e0c0,
  isBotAdmins: _0x40a397,
  isAdmins: _0x1eeae3,
  reply: _0x20a882
}) => {
  try {
    const _0x437af2 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x5d1833);
    const _0x483bf5 = {
      text: '⬆',
      key: _0x379a9f.key
    };
    const _0x1af232 = {
      react: _0x483bf5
    };
    await _0x12609b.sendMessage(_0x533f4c, _0x1af232);
    const _0x3650a1 = {
      url: _0x437af2.result.watermark
    };
    const _0x1bd357 = {
      document: _0x3650a1,
      mimetype: "video/mp4",
      fileName: _0x437af2.result.title + ".mp4",
      caption: "💻 *ＰＯＤＩ MD TTDL*"
    };
    const _0x114e26 = {
      quoted: _0x379a9f
    };
    await _0x12609b.sendMessage(_0x533f4c, _0x1bd357, _0x114e26);
    const _0x5759b7 = {
      text: '✔',
      key: _0x379a9f.key
    };
    const _0x2d785c = {
      react: _0x5759b7
    };
    await _0x12609b.sendMessage(_0x533f4c, _0x2d785c);
  } catch (_0x37c9c5) {
    const _0x1b2acf = {
      text: '❌',
      key: _0x379a9f.key
    };
    const _0x3ad34d = {
      react: _0x1b2acf
    };
    await _0x12609b.sendMessage(_0x533f4c, _0x3ad34d);
    console.log(_0x37c9c5);
    _0x20a882("Error !!\n\n*" + _0x37c9c5 + '*');
  }
});
const _0x4eeffe = {
  pattern: 'ta',
  react: '⬇',
  filename: __filename
};
function _0x2a8926(_0x3f52ec, _0x16d397, _0x422bab, _0x20d34b, _0x19c02f) {
  return _0x3f99(_0x19c02f - 0x14e, _0x3f52ec);
}
cmd(_0x4eeffe, async (_0x448c5e, _0x5678b0, _0x36edf8, {
  from: _0x28a552,
  quoted: _0x100ad5,
  body: _0x222c70,
  isCmd: _0x173ce8,
  command: _0xf7e9a2,
  args: _0xaf7bb,
  q: _0x5c58a7,
  isGroup: _0x224dca,
  sender: _0x16df11,
  senderNumber: _0x575639,
  botNumber2: _0x43f181,
  botNumber: _0x184b9e,
  pushname: _0x279cae,
  isMe: _0x1616f3,
  isOwner: _0x3cd876,
  groupMetadata: _0x55c20d,
  groupName: _0x1dd448,
  participants: _0x3260ae,
  groupAdmins: _0x43b181,
  isBotAdmins: _0x53bf77,
  isAdmins: _0x5172cc,
  reply: _0x427524
}) => {
  try {
    const _0x2e7698 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x5c58a7);
    const _0x4115b5 = {
      text: '⬆',
      key: _0x5678b0.key
    };
    const _0x570f95 = {
      react: _0x4115b5
    };
    await _0x448c5e.sendMessage(_0x28a552, _0x570f95);
    const _0x23dab8 = {
      url: _0x2e7698.result.audio
    };
    const _0x4cb496 = {
      audio: _0x23dab8,
      mimetype: "audio/mpeg"
    };
    const _0x3777af = {
      quoted: _0x5678b0
    };
    await _0x448c5e.sendMessage(_0x28a552, _0x4cb496, _0x3777af);
    const _0x577f72 = {
      text: '✔',
      key: _0x5678b0.key
    };
    const _0x5cdbd9 = {
      react: _0x577f72
    };
    await _0x448c5e.sendMessage(_0x28a552, _0x5cdbd9);
  } catch (_0x2c93b8) {
    const _0x3f1aa7 = {
      text: '❌',
      key: _0x5678b0.key
    };
    const _0x329a76 = {
      react: _0x3f1aa7
    };
    await _0x448c5e.sendMessage(_0x28a552, _0x329a76);
    console.log(_0x2c93b8);
    _0x427524("Error !!\n\n*" + _0x2c93b8 + '*');
  }
});
const _0x1a38d8 = {
  pattern: 'td',
  react: '⬇',
  filename: __filename
};
cmd(_0x1a38d8, async (_0x578ca5, _0x318614, _0x1019d8, {
  from: _0x2f60b1,
  quoted: _0x5914a5,
  body: _0x2a5392,
  isCmd: _0x274ffd,
  command: _0xc30580,
  args: _0x696f5e,
  q: _0x1eb819,
  isGroup: _0x5529ab,
  sender: _0x9937f5,
  senderNumber: _0x576274,
  botNumber2: _0x4578c1,
  botNumber: _0x6ec08a,
  pushname: _0x37e81f,
  isMe: _0x5a8cec,
  isOwner: _0x4b0d05,
  groupMetadata: _0x3e738b,
  groupName: _0x1fb2be,
  participants: _0x3ee178,
  groupAdmins: _0x473ab5,
  isBotAdmins: _0x4013b6,
  isAdmins: _0x136573,
  reply: _0x57cd9a
}) => {
  try {
    const _0x371901 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/tiktokdl?url=" + _0x1eb819);
    const _0x4fb8ec = {
      text: '⬆',
      key: _0x318614.key
    };
    const _0x306c82 = {
      react: _0x4fb8ec
    };
    await _0x578ca5.sendMessage(_0x2f60b1, _0x306c82);
    const _0x479a3b = {
      url: _0x371901.result.audio
    };
    const _0x26a7c8 = {
      document: _0x479a3b,
      mimetype: "audio/mpeg",
      fileName: _0x371901.result.title + ".mp3",
      caption: "💻 *ＰＯＤＩ MD TTDL*"
    };
    const _0x179ad = {
      quoted: _0x318614
    };
    await _0x578ca5.sendMessage(_0x2f60b1, _0x26a7c8, _0x179ad);
    const _0x44928c = {
      text: '✔',
      key: _0x318614.key
    };
    const _0x82b2c8 = {
      react: _0x44928c
    };
    await _0x578ca5.sendMessage(_0x2f60b1, _0x82b2c8);
  } catch (_0x14934c) {
    const _0x573c7d = {
      text: '❌',
      key: _0x318614.key
    };
    const _0x41a12c = {
      react: _0x573c7d
    };
    await _0x578ca5.sendMessage(_0x2f60b1, _0x41a12c);
    console.log(_0x14934c);
    _0x57cd9a("Error !!\n\n*" + _0x14934c + '*');
  }
});
const _0x2c1150 = {
  pattern: "tiktok2",
  alias: ["ttdl2", "tt2"],
  react: "🏷️",
  desc: desc,
  category: "download",
  use: ".tiktok <Tiktok link>",
  filename: __filename
};
cmd(_0x2c1150, async (_0x3832e7, _0x5272b1, _0x203446, {
  from: _0x16683d,
  l: _0x436ccf,
  prefix: _0x44b52a,
  quoted: _0x194f11,
  body: _0x8aeb1e,
  isCmd: _0x16c93a,
  command: _0x5d44ee,
  args: _0x5810d7,
  q: _0x274ea3,
  isGroup: _0x276e36,
  sender: _0xf4606b,
  senderNumber: _0x4f49ab,
  botNumber2: _0x5098cc,
  botNumber: _0x164e12,
  pushname: _0x25b6c7,
  isMe: _0x53784d,
  isOwner: _0x1e429a,
  groupMetadata: _0x4aa045,
  groupName: _0x35e26e,
  participants: _0xe49696,
  groupAdmins: _0x48570d,
  isBotAdmins: _0xdde241,
  isAdmins: _0x5a53b5,
  reply: _0x2fbe7e
}) => {
  try {
    if (!_0x274ea3.includes("tiktok.com")) {
      return await _0x2fbe7e(urlneed);
    }
    let _0x1b7c89 = await downloadTiktok(_0x274ea3);
    let _0x38ae81 = "\n    🎟️ *ＰＯＤＩ-MD TIKTOK DOWNLOADER* 🎟️\n\n📌 *Please click what you want to select*\n\n*Title* :- " + _0x1b7c89.result.title + "\n\n*URL:* " + _0x274ea3;
    const _0x347941 = {
      url: '' + _0x1b7c89.result.image
    };
    const _0x191250 = {
      image: _0x347941,
      caption: _0x38ae81
    };
    const _0x320130 = {
      quoted: _0x5272b1
    };
    await _0x3832e7.sendMessage(_0x16683d, _0x191250, _0x320130);
    const _0x21cc77 = {
      text: '📥',
      key: _0x5272b1.key
    };
    const _0x25fc5 = {
      react: _0x21cc77
    };
    await _0x3832e7.sendMessage(_0x16683d, _0x25fc5);
    const _0x19d48c = {
      url: _0x274ea3
    };
    const _0x2d9626 = {
      quoted: _0x5272b1
    };
    await _0x3832e7.sendMessage(_0x16683d, {
      'document': _0x19d48c,
      'mimetype': "audio/mpeg",
      'fileName': "TikTok Audio.mp3",
      'caption': config.FOOTER
    }, _0x2d9626);
    const _0x3dd4ff = {
      url: _0x1b7c89.result.dl_link.download_mp4_1
    };
    const _0x1c2d8b = {
      video: _0x3dd4ff,
      mimetype: "video/mp4",
      caption: "SD QUALITY\n\n> *POWERED by ＰＯＤＩ-MD"
    };
    const _0x20ec3d = {
      quoted: _0x5272b1
    };
    await _0x3832e7.sendMessage(_0x16683d, _0x1c2d8b, _0x20ec3d);
    const _0x42007a = {
      url: _0x1b7c89.result.dl_link.download_mp4_2
    };
    const _0x2446ca = {
      video: _0x42007a,
      mimetype: "video/mp4",
      caption: "HD QUALITY\n\n> *POWERED by ＰＯＤＩ-MD"
    };
    const _0x31c780 = {
      quoted: _0x5272b1
    };
    await _0x3832e7.sendMessage(_0x16683d, _0x2446ca, _0x31c780);
    const _0x484334 = {
      text: '✔',
      key: _0x5272b1.key
    };
    const _0x2e96ed = {
      react: _0x484334
    };
    await _0x3832e7.sendMessage(_0x16683d, _0x2e96ed);
  } catch (_0x549843) {
    _0x2fbe7e("*ERROR !!*");
    _0x436ccf(_0x549843);
  }
});
const _0x499646 = {
  pattern: "img1",
  react: "🖼️",
  desc: desc2,
  category: '',
  use: ".img2 car",
  filename: __filename
};
cmd(_0x499646, async (_0xae5e03, _0x492294, _0x48fe78, {
  from: _0x1f7d6b,
  l: _0x114c3c,
  prefix: _0x40fd38,
  quoted: _0x2fb682,
  body: _0x1446d4,
  isCmd: _0x12c60f,
  command: _0x55033a,
  args: _0x13e5bc,
  q: _0x593048,
  isGroup: _0x285dfa,
  sender: _0x212b76,
  senderNumber: _0x3ffbcf,
  botNumber2: _0x111369,
  botNumber: _0x30d9fb,
  pushname: _0x8d17a5,
  isMe: _0x5a3c0f,
  isOwner: _0x33a96d,
  groupMetadata: _0x267df0,
  groupName: _0x226614,
  participants: _0x338e4e,
  groupAdmins: _0x15abc7,
  isBotAdmins: _0x22d4a4,
  isAdmins: _0x18630c,
  reply: _0x2207f1
}) => {
  try {
    if (!_0x593048) {
      return await _0x2207f1(imgmsg);
    }
    const _0x53d54c = {
      query: _0x593048,
      page: 0x1
    };
    const _0x4f3190 = await unsplash.search(_0x53d54c);
    if (config.MODE === "nonbutton") {
      const _0x419e36 = {
        text: N_FOUND
      };
      const _0x35d3da = {
        quoted: _0x492294
      };
      if (_0x4f3190.result.length < 1) {
        return await _0xae5e03.sendMessage(_0x1f7d6b, _0x419e36, _0x35d3da);
      }
      var _0x171334 = [];
      let _0x562366 = 1;
      for (var _0x1c3c43 = 0; _0x1c3c43 < _0x4f3190.length; _0x1c3c43++) {
        _0x171334.push({
          'title': _0x1c3c43 + 1,
          'description': "Image number: " + _0x562366++,
          'rowId': _0x40fd38 + "dimg " + _0x4f3190.result[_0x1c3c43]
        });
      }
      const _0x2945d8 = {
        title: "Result from unsplash.com. 📲",
        rows: _0x171334
      };
      const _0xb13927 = [_0x2945d8];
      const _0x49ba3d = {
        text: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *IMG DOWNLOADER 02*\n\n*🖼️ Image Name:* " + _0x593048,
        footer: config.FOOTER,
        title: "Result from unsplash.com. 📲",
        buttonText: "Select Image",
        sections: _0xb13927
      };
      const _0x5ab1dd = {
        quoted: _0x492294
      };
      await _0xae5e03.replyList(_0x1f7d6b, _0x49ba3d, _0x5ab1dd);
    }
    if (config.MODE === "button") {
      const _0x1aabcf = {
        text: N_FOUND
      };
      const _0x3f5627 = {
        quoted: _0x492294
      };
      if (_0x4f3190.length < 1) {
        return await _0xae5e03.sendMessage(_0x1f7d6b, _0x1aabcf, _0x3f5627);
      }
      var _0x48d32b = [];
      for (var _0x1c3c43 = 0; _0x1c3c43 < _0x4f3190.length; _0x1c3c43++) {
        _0x48d32b.push({
          'rows': [{
            'title': _0x1c3c43 + 1,
            'description': "Image number: " + nombor++,
            'id': _0x40fd38 + "dapk " + _0x4f3190.result[_0x1c3c43]
          }]
        });
      }
      let _0xbb129d = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Join Our Channel",
          'url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
          'merchant_url': "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
        })
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Result from Image. 📲",
          'sections': _0x48d32b
        })
      }];
      const _0x3a6c1c = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "┌───[👨‍💻ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *IMAGE DOWNLOADER*\n\n*📱 Apk Name:* " + _0x593048
      };
      const _0x53723c = {
        quoted: _0x492294
      };
      return await _0xae5e03.sendButtonMessage(_0x1f7d6b, _0xbb129d, _0x48fe78, _0x3a6c1c, _0x53723c);
    }
  } catch (_0x1d1b11) {
    _0x2207f1(errt);
    _0x114c3c(_0x1d1b11);
  }
});
const _0x4734f9 = {
  pattern: "dimg",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4734f9, async (_0x3e4ed5, _0x2e34e8, _0x5ac157, {
  from: _0x16b5ad,
  l: _0x459e22,
  quoted: _0x1f8cf4,
  body: _0x4dfe44,
  isCmd: _0x4edba1,
  command: _0xb87f5e,
  args: _0x26a387,
  q: _0x2fe858,
  isGroup: _0x322c5c,
  sender: _0x281afc,
  senderNumber: _0x138051,
  botNumber2: _0x248918,
  botNumber: _0x58bfa6,
  pushname: _0x9fe373,
  isMe: _0x4bdc04,
  isOwner: _0x242233,
  groupMetadata: _0x33a525,
  groupName: _0x55370f,
  participants: _0x300cc9,
  groupAdmins: _0x44d6d1,
  isBotAdmins: _0x83532,
  isAdmins: _0x51301f,
  reply: _0x56decc
}) => {
  try {
    const _0x2c6237 = {
      text: '🔃',
      key: _0x2e34e8.key
    };
    const _0x2cfcf9 = {
      react: _0x2c6237
    };
    await _0x3e4ed5.sendMessage(_0x16b5ad, _0x2cfcf9);
    const _0x2d5b07 = {
      url: _0x2fe858
    };
    const _0x5839c4 = {
      image: _0x2d5b07,
      caption: config.FOOTER
    };
    const _0x5c1d7d = {
      quoted: _0x2e34e8
    };
    await _0x3e4ed5.sendMessage(_0x16b5ad, _0x5839c4, _0x5c1d7d);
    const _0x2e460a = {
      text: '✔',
      key: _0x2e34e8.key
    };
    const _0x345ed2 = {
      react: _0x2e460a
    };
    await _0x3e4ed5.sendMessage(_0x16b5ad, _0x345ed2);
  } catch (_0x36eb8c) {
    _0x56decc(errt);
    _0x459e22(_0x36eb8c);
  }
});
const _0x4add0e = {
  pattern: "wallpaper",
  react: '🔖',
  desc: "image downloader",
  category: "download",
  use: ".wallpaper",
  filename: __filename
};
cmd(_0x4add0e, async (_0x4f2bd1, _0x47b321, _0x3ee1ef, {
  from: _0x4469bd,
  l: _0x2196eb,
  quoted: _0x56fe1f,
  prefix: _0x140ac5,
  body: _0x410a6e,
  isCmd: _0x1dbca8,
  command: _0x170443,
  args: _0x37808f,
  q: _0x4c1ebe,
  isGroup: _0x1a276f,
  sender: _0x236884,
  senderNumber: _0x315206,
  botNumber2: _0x51a3a3,
  botNumber: _0x56c174,
  pushname: _0x1b8561,
  isMe: _0x4bda6e,
  isOwner: _0x501bbe,
  groupMetadata: _0x24ccfd,
  groupName: _0x44e076,
  participants: _0xd6045d,
  groupAdmins: _0x29154d,
  isBotAdmins: _0x2da802,
  isAdmins: _0x4bd421,
  reply: _0x1136fd
}) => {
  try {
    let {
      wallpaper: _0x258583
    } = require("../lib/scraper");
    anu = await _0x258583(_0x4c1ebe);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x51ca58 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x140ac5 + "wallpaper " + _0x4c1ebe,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x16d2b2 = {
      url: result.image[0]
    };
    const _0x5e1005 = {
      image: _0x16d2b2,
      caption: "🔮 𝗧𝗜𝗧𝗟𝗘 : " + result.title + "\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : " + result.type + "\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : " + result.source + "\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : " + (result.image[2] || result.image[1] || result.image[0]),
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x51ca58
    };
    const _0x42402a = {
      quoted: _0x47b321
    };
    return await _0x4f2bd1.replyList(_0x4469bd, _0x5e1005, _0x42402a);
  } catch (_0x1b2424) {
    _0x1136fd("*ERROR !!*");
    _0x2196eb(_0x1b2424);
  }
});
const _0x19e119 = {
  pattern: "wikimedia",
  react: '🔖',
  desc: "to download wikimedia",
  category: "download",
  use: ".wikimedia",
  filename: __filename
};
cmd(_0x19e119, async (_0x3a5a22, _0x5184dc, _0x5d14d2, {
  from: _0x2fb273,
  l: _0x1865a6,
  quoted: _0x5ce5ce,
  prefix: _0x2a1d61,
  body: _0x85ab57,
  isCmd: _0x4a35d2,
  command: _0x20c5c0,
  args: _0x399fd2,
  q: _0x34962d,
  isGroup: _0x557d3f,
  sender: _0x36c896,
  senderNumber: _0x1a046e,
  botNumber2: _0x42fe6c,
  botNumber: _0x46aba0,
  pushname: _0x1e396b,
  isMe: _0x4d3778,
  isOwner: _0x362699,
  groupMetadata: _0x3135d7,
  groupName: _0x5ab1a,
  participants: _0x2a6d94,
  groupAdmins: _0x41de43,
  isBotAdmins: _0x2ef328,
  isAdmins: _0x2e4e9e,
  reply: _0x1f9508
}) => {
  try {
    let {
      wikimedia: _0x27ece0
    } = require("../lib/scraper");
    anu = await _0x27ece0(_0x34962d);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x4a5900 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x2a1d61 + "wikimedia " + _0x34962d,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x2741ba = {
      url: result.image[0]
    };
    const _0x27d5ab = {
      image: _0x2741ba,
      caption: "🔮 𝗧𝗜𝗧𝗟𝗘 : " + result.title + "\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : " + result.type + "\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : " + result.source + "\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : " + (result.image[2] || result.image[1] || result.image[0]),
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4a5900
    };
    const _0x4cf4a7 = {
      quoted: _0x5184dc
    };
    return await _0x3a5a22.replyList(_0x2fb273, _0x27d5ab, _0x4cf4a7);
  } catch (_0x213124) {
    _0x1f9508("*ERROR !!*");
    _0x1865a6(_0x213124);
  }
});
const _0x229a4f = {
  pattern: "quotesanime",
  react: '🔖',
  desc: "to download animes",
  category: "download",
  use: ".quotesanime",
  filename: __filename
};
cmd(_0x229a4f, async (_0x27b2e5, _0xd39606, _0x5ece28, {
  from: _0x46ee4f,
  l: _0x3bff71,
  quoted: _0x24a224,
  prefix: _0x3210f7,
  body: _0x2cf52a,
  isCmd: _0x26fc41,
  command: _0x231d7e,
  args: _0x11d810,
  q: _0xbe64ff,
  isGroup: _0x584f8d,
  sender: _0x299d25,
  senderNumber: _0x98786b,
  botNumber2: _0x3d82fe,
  botNumber: _0x592685,
  pushname: _0x3c7a6e,
  isMe: _0x55edbc,
  isOwner: _0x21893d,
  groupMetadata: _0x541aee,
  groupName: _0x3dc7a2,
  participants: _0x47586f,
  groupAdmins: _0x2036e8,
  isBotAdmins: _0x456551,
  isAdmins: _0x2cb104,
  reply: _0xea0bd2
}) => {
  try {
    let {
      quotesAnime: _0x4f60ea
    } = require("../lib/scraper");
    let _0xf24fa = await _0x4f60ea();
    result = _0xf24fa[Math.floor(Math.random() * _0xf24fa.length)];
    const _0x1e5638 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x3210f7 + "quotesanime " + _0xbe64ff,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x6f5257 = {
      text: '~_' + result.quotes + "_\n\nBy '" + result.karakter + "', " + result.anime + "\n\n- " + result.up_at,
      footer: config.FOOTER,
      buttonText: "🔢 Reply below number,",
      sections: _0x1e5638,
      contextInfo: {}
    };
    _0x6f5257.contextInfo.externalAdReply = {};
    _0x6f5257.contextInfo.externalAdReply.title = "👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻";
    _0x6f5257.contextInfo.externalAdReply.body = "ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ";
    _0x6f5257.contextInfo.externalAdReply.mediaType = 0x1;
    _0x6f5257.contextInfo.externalAdReply.sourceUrl = '';
    _0x6f5257.contextInfo.externalAdReply.thumbnailUrl = "https://telegra.ph/file/b4caa5682d75220623b83.jpg";
    _0x6f5257.contextInfo.externalAdReply.renderLargerThumbnail = false;
    _0x6f5257.contextInfo.externalAdReply.showAdAttribution = true;
    const _0x2f3e7b = {
      quoted: _0xd39606
    };
    return await _0x27b2e5.replyList(_0x46ee4f, _0x6f5257, _0x2f3e7b);
  } catch (_0x20306e) {
    _0xea0bd2(N_FOUND);
    _0x3bff71(_0x20306e);
  }
});
const _0x4f446c = {
  pattern: "coffe",
  react: '🔖',
  desc: "to download coffe",
  category: "download",
  use: ".coffe",
  filename: __filename
};
cmd(_0x4f446c, async (_0x12dd55, _0x892b08, _0x3c6f5c, {
  from: _0x7c2a49,
  l: _0xd45a4e,
  quoted: _0x5e1dd8,
  prefix: _0x49675b,
  body: _0x288888,
  isCmd: _0x50a1d0,
  command: _0xcd1c6a,
  args: _0x525be5,
  q: _0x4c8041,
  isGroup: _0x3f73f5,
  sender: _0x1c84d6,
  senderNumber: _0x31bd97,
  botNumber2: _0x271593,
  botNumber: _0x4b3e65,
  pushname: _0x4619e3,
  isMe: _0x386172,
  isOwner: _0xae97bd,
  groupMetadata: _0x6bef38,
  groupName: _0x256034,
  participants: _0x5b65c5,
  groupAdmins: _0x5cc487,
  isBotAdmins: _0x2b3ca9,
  isAdmins: _0x40f145,
  reply: _0x1888f2
}) => {
  try {
    const _0x536b37 = {
      text: '☕',
      key: _0x892b08.key
    };
    const _0x2f0501 = {
      react: _0x536b37
    };
    await _0x12dd55.sendMessage(_0x7c2a49, _0x2f0501);
    const _0x3c3ac2 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x49675b + "coffe " + _0x4c8041,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x56b9b5 = {
      url: "https://coffee.alexflipnote.dev/random"
    };
    const _0x35836f = {
      image: _0x56b9b5,
      caption: "Random Coffee",
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x3c3ac2
    };
    const _0xf2ddd4 = {
      quoted: _0x892b08
    };
    return await _0x12dd55.replyList(_0x7c2a49, _0x35836f, _0xf2ddd4);
  } catch (_0x4a57f1) {
    _0x1888f2("*ERROR !!*");
    _0xd45a4e(_0x4a57f1);
  }
});
const _0x31fcab = {
  pattern: "wpaper",
  react: '🔖',
  desc: "to download wpaper",
  category: "download",
  use: ".wpaper",
  filename: __filename
};
cmd(_0x31fcab, async (_0x363c8b, _0x1a9e0e, _0x18bd00, {
  from: _0x2fbe5f,
  l: _0x5d877c,
  quoted: _0x197446,
  prefix: _0x16f7af,
  body: _0x4ac43c,
  isCmd: _0x5f5098,
  command: _0x1dc2d8,
  args: _0x4cb6c8,
  q: _0x4c21d0,
  isGroup: _0x774c13,
  sender: _0x5dc401,
  senderNumber: _0x1ef95,
  botNumber2: _0x4706cc,
  botNumber: _0x232fcb,
  pushname: _0x3065ae,
  isMe: _0x3494d8,
  isOwner: _0x18a8e5,
  groupMetadata: _0x23f9b7,
  groupName: _0xf2fd47,
  participants: _0x168a50,
  groupAdmins: _0x4ca853,
  isBotAdmins: _0x2f229b,
  isAdmins: _0x9174c3,
  reply: _0x115e18
}) => {
  try {
    const _0x60de8b = {
      url: "https://api.akuari.my.id/search/alphacoders?query=" + _0x4c21d0
    };
    const _0xfdf4e0 = {
      image: _0x60de8b,
      caption: '' + config.cap
    };
    const _0x1646fb = {
      url: "https://api.akuari.my.id/search/alphacoders?query=" + _0x4c21d0
    };
    const _0x455a87 = {
      image: _0x1646fb,
      caption: '' + config.cap
    };
    await _0x363c8b.sendMessage(_0x1a9e0e.chat, _0xfdf4e0, {
      'quoted': _0x1a9e0e
    });
    await _0x363c8b.sendMessage(_0x1a9e0e.chat, _0x455a87, {
      'quoted': _0x1a9e0e
    }.repeat(5));
    const _0x2c44d8 = {
      text: '✅',
      key: _0x1a9e0e.key
    };
    const _0x3155c1 = {
      react: _0x2c44d8
    };
    await _0x363c8b.sendMessage(_0x2fbe5f, _0x3155c1);
  } catch (_0x1d7660) {
    _0x115e18();
    _0x5d877c(_0x1d7660);
  }
});
const _0x546408 = {
  pattern: "ringtone",
  react: '🔖',
  desc: "to download ringtone",
  category: "download",
  use: ".ringtone",
  filename: __filename
};
cmd(_0x546408, async (_0x2ceace, _0x363804, _0x32e269, {
  from: _0x45c519,
  l: _0x4348e9,
  quoted: _0x490f4b,
  prefix: _0x191f83,
  body: _0x5a1a58,
  isCmd: _0x232909,
  command: _0x2b9d33,
  args: _0x58098b,
  q: _0x8f604a,
  isGroup: _0x2461f7,
  sender: _0x4d1100,
  senderNumber: _0x3dd7cd,
  botNumber2: _0x230ed7,
  botNumber: _0x3ead27,
  pushname: _0x1fee94,
  isMe: _0x24c066,
  isOwner: _0x74360e,
  groupMetadata: _0x369f36,
  groupName: _0xcb1ea2,
  participants: _0x10a806,
  groupAdmins: _0x57419c,
  isBotAdmins: _0x114b0c,
  isAdmins: _0x29a816,
  reply: _0x4f8787
}) => {
  try {
    if (!_0x8f604a) {
      _0x4f8787`${Lang.EXAMPLE}\n : ${_0x191f83 + _0x2b9d33} black rover`;
    }
    let {
      ringtone: _0x42d270
    } = require("../lib/scraper");
    let _0x2c62af = await _0x42d270(_0x8f604a);
    let _0x8b5599 = _0x2c62af[Math.floor(Math.random() * _0x2c62af.length)];
    const _0xce6629 = {
      url: _0x8b5599.audio
    };
    _0x2ceace.sendMessage(_0x363804.chat, {
      'audio': _0xce6629,
      'fileName': _0x8b5599.title + ".mp3",
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x363804
    });
    const _0x277667 = {
      text: '✅',
      key: _0x363804.key
    };
    const _0x53ab00 = {
      react: _0x277667
    };
    await _0x2ceace.sendMessage(_0x45c519, _0x53ab00);
  } catch (_0x51e93e) {
    _0x4f8787();
    _0x4348e9(_0x51e93e);
  }
});
const _0x33648a = {
  pattern: "couplepp",
  react: '🔖',
  desc: "couple pic download",
  category: "download",
  use: ".couplepp",
  filename: __filename
};
cmd(_0x33648a, async (_0x41ee2c, _0x31d3f2, _0x502041, {
  from: _0x297cdc,
  l: _0x51db28,
  quoted: _0x33f45e,
  body: _0x116849,
  isCmd: _0x4e212d,
  command: _0x51fb4f,
  args: _0xc9f08a,
  q: _0x2232b5,
  isGroup: _0x3292d9,
  sender: _0x147852,
  senderNumber: _0x4f603d,
  botNumber2: _0x47e4a5,
  botNumber: _0xb67791,
  pushname: _0x493fb0,
  isMe: _0x3b0111,
  isOwner: _0x3ee16b,
  groupMetadata: _0x1b264a,
  groupName: _0xd36c39,
  participants: _0x40ce1f,
  groupAdmins: _0x41b8a6,
  isBotAdmins: _0x190791,
  isAdmins: _0xf5a96b,
  reply: _0x1babb7
}) => {
  try {
    const _0x72c411 = {
      text: '💏',
      key: _0x31d3f2.key
    };
    const _0x32b2cc = {
      react: _0x72c411
    };
    await _0x41ee2c.sendMessage(_0x297cdc, _0x32b2cc);
    let _0xbee43 = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
    let _0x3590ac = _0xbee43[Math.floor(Math.random() * _0xbee43.length)];
    const _0x577071 = {
      url: _0x3590ac.male
    };
    const _0x42492c = {
      image: _0x577071,
      caption: "Couple Male"
    };
    _0x41ee2c.sendMessage(_0x31d3f2.chat, _0x42492c, {
      'quoted': _0x31d3f2
    });
    const _0x28d657 = {
      url: _0x3590ac.female
    };
    const _0x325ade = {
      image: _0x28d657,
      caption: "Couple Female"
    };
    _0x41ee2c.sendMessage(_0x31d3f2.chat, _0x325ade, {
      'quoted': _0x31d3f2
    });
    const _0x175909 = {
      text: '✅',
      key: _0x31d3f2.key
    };
    const _0x2b8051 = {
      react: _0x175909
    };
    await _0x41ee2c.sendMessage(_0x297cdc, _0x2b8051);
  } catch (_0x4e81ab) {
    _0x1babb7();
    _0x51db28(_0x4e81ab);
  }
});
const _0xa30716 = {
  pattern: 'fb',
  react: "#️⃣",
  alias: ["fbdl", "facebook"],
  desc: desc1,
  category: "download",
  use: ".fb <Fb video link>",
  filename: __filename
};
cmd(_0xa30716, async (_0x30380c, _0x19e6e2, _0x34f972, {
  from: _0x477f02,
  prefix: _0x1354f3,
  l: _0x128161,
  quoted: _0x4c5c8b,
  body: _0x18e9ae,
  isCmd: _0x174038,
  command: _0x462721,
  args: _0x3afddf,
  q: _0x4abeb3,
  isGroup: _0x3151bf,
  sender: _0x40391c,
  senderNumber: _0x3d6f6b,
  botNumber2: _0xc46562,
  botNumber: _0xe1163f,
  pushname: _0x294d6d,
  isMe: _0x3e12c1,
  isOwner: _0x5150a4,
  groupMetadata: _0x3cef04,
  groupName: _0x3dffdb,
  participants: _0x5a1b48,
  groupAdmins: _0x27a943,
  isBotAdmins: _0xa4d236,
  isAdmins: _0x17be3a,
  reply: _0x4e9e8b
}) => {
  try {
    if (!fbreg(_0x4abeb3)) {
      return await _0x4e9e8b(urlneed2);
    }
    const _0x3911af = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x4abeb3);
    let _0x52955c = "ＰＯＤＩ MD FB DOWNLOADER\n\n   \n*URL :* " + _0x4abeb3;
    if (config.MODE === "nonbutton") {
      var _0x364908 = [{
        'title': "SD TYPE 🪫",
        'rows': [{
          'title': "    1.1",
          'rowId': _0x1354f3 + "fbsd " + _0x4abeb3,
          'description': " 🪫 `SD` QUALITY VIDEO"
        }, {
          'title': "    1.2",
          'rowId': _0x1354f3 + "fbsdd " + _0x4abeb3,
          'description': " 📂 `SD` QUALITY DOCUMENT"
        }]
      }, {
        'title': "HD TYPE 🔋",
        'rows': [{
          'title': "    2.1",
          'rowId': _0x1354f3 + "fbhd " + _0x4abeb3,
          'description': " 🔋 `HD` QUALITY VIDEO"
        }, {
          'title': "    2.2",
          'rowId': _0x1354f3 + "fbhdd " + _0x4abeb3,
          'description': " 📂 `HD` QUALITY DOCUMENT"
        }]
      }, {
        'title': "VOICE CUT TYPE 🎶",
        'rows': [{
          'title': "    3.1",
          'rowId': _0x1354f3 + "fba " + _0x4abeb3,
          'description': " 🎶 Audio file"
        }, {
          'title': "    3.2",
          'rowId': _0x1354f3 + "fbd " + _0x4abeb3,
          'description': " 📂 Document file"
        }]
      }];
      const _0x125faf = {
        url: _0x3911af.result.thumb
      };
      const _0x28ba7e = {
        image: _0x125faf,
        caption: _0x52955c,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x364908
      };
      const _0x26cd4c = {
        quoted: _0x19e6e2
      };
      return await _0x30380c.replyList(_0x477f02, _0x28ba7e, _0x26cd4c);
    }
    if (config.MODE === "button") {
      const _0x199971 = {
        title: "SD TYPE 🪫",
        rows: [{
          'header': '',
          'title': '',
          'description': " 🪫 `SD` QUALITY VIDEO",
          'id': _0x1354f3 + "fbsd " + _0x4abeb3
        }, {
          'header': '',
          'title': '',
          'description': " 📂 `SD` QUALITY DOCUMENT",
          'id': _0x1354f3 + "fbsdd " + _0x4abeb3
        }]
      };
      const _0x27e7b8 = {
        title: "HD TYPE 🔋",
        rows: [{
          'header': '',
          'title': '',
          'description': " 🪫 `HD` QUALITY VIDEO",
          'id': _0x1354f3 + "fbhd " + _0x4abeb3
        }, {
          'header': '',
          'title': '',
          'description': " 📂 `HD` QUALITY DOCUMENT",
          'id': _0x1354f3 + "fbhdd " + _0x4abeb3
        }]
      };
      const _0x597f11 = {
        title: "VOICE CUT TYPE 🎶",
        rows: [{
          'header': '',
          'title': '',
          'description': " 🎶 Audio file",
          'id': _0x1354f3 + "fba " + _0x4abeb3
        }, {
          'header': '',
          'title': '',
          'description': " 📂 Document file",
          'id': _0x1354f3 + "fbd " + _0x4abeb3
        }]
      };
      let _0x7e86db = [_0x199971, _0x27e7b8, _0x597f11];
      const _0x1c6d29 = {
        title: "Click Here⎙",
        sections: _0x7e86db
      };
      const _0x405a66 = {
        url: config.LOGO
      };
      const _0x11e2cf = {
        displayText: " 🪫 `SD` QUALITY VIDEO"
      };
      const _0x1b0968 = {
        buttonId: _0x1354f3 + "fbsd " + _0x4abeb3,
        buttonText: _0x11e2cf
      };
      const _0x4d5da9 = {
        displayText: " 🔋 `HD` QUALITY VIDEO"
      };
      const _0x363870 = {
        buttonId: _0x1354f3 + "fbhd " + _0x4abeb3,
        buttonText: _0x4d5da9
      };
      const _0x5e9897 = {
        displayText: " 🎶 Audio file"
      };
      const _0x2907d3 = {
        buttonId: _0x1354f3 + "fba " + _0x4abeb3,
        buttonText: _0x5e9897
      };
      const _0x208f6a = {
        quoted: _0x34f972
      };
      _0x30380c.sendMessage(_0x477f02, {
        'image': _0x405a66,
        'caption': _0x52955c,
        'footer': config.FOOTER,
        'buttons': [_0x1b0968, _0x363870, _0x2907d3, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x1c6d29)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x208f6a);
    }
  } catch (_0x20c1fb) {
    _0x4e9e8b("*ERROR !!*");
    _0x128161(_0x20c1fb);
  }
});
const _0x42978e = {
  pattern: "fb2",
  react: "#️⃣",
  alias: ["fbdl2", "facebook2"],
  desc: desc1,
  category: "download",
  use: ".fb <Fb video link>",
  filename: __filename
};
cmd(_0x42978e, async (_0x5f25d8, _0x600538, _0x2c73cc, {
  from: _0x1a7dbc,
  prefix: _0x113519,
  l: _0x5e44a1,
  quoted: _0x5c8a23,
  body: _0x541cd1,
  isCmd: _0x2741d0,
  command: _0x8eed4b,
  args: _0x608654,
  q: _0x4d437f,
  isGroup: _0x19a8a7,
  sender: _0xaec9f5,
  senderNumber: _0x5a94d8,
  botNumber2: _0x3667dd,
  botNumber: _0x2b139a,
  pushname: _0x42afee,
  isMe: _0x985cda,
  isOwner: _0x36a73a,
  groupMetadata: _0x5f181c,
  groupName: _0x341886,
  participants: _0xa0b6a6,
  groupAdmins: _0x537f16,
  isBotAdmins: _0x58e88b,
  isAdmins: _0x17e760,
  reply: _0x421a13
}) => {
  try {
    if (!fbreg(_0x4d437f)) {
      return await _0x421a13(urlneed2);
    }
    const _0x3318f5 = await facebook(_0x4d437f);
    const _0x552c61 = "\n💢 *ＰＯＤＩ-MD FB DOWNLOADER* 💢\n\n*TIME :* " + _0x3318f5.result.duration + "\n*URL :* " + _0x4d437f + "\n";
    const _0x2b7bef = {
      url: '' + _0x3318f5.result.thumbnail
    };
    const _0x3ae533 = {
      image: _0x2b7bef,
      caption: _0x552c61
    };
    const _0xf9c097 = {
      quoted: _0x600538
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x3ae533, _0xf9c097);
    const _0x2db471 = {
      text: '⬆',
      key: _0x600538.key
    };
    const _0x3af882 = {
      react: _0x2db471
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x3af882);
    const _0x30f325 = {
      url: _0x3318f5.result.links.HD
    };
    const _0x237f7d = {
      audio: _0x30f325,
      mimetype: "audio/mpeg"
    };
    const _0x4ff2e3 = {
      quoted: _0x600538
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x237f7d, _0x4ff2e3);
    const _0x129cee = {
      url: _0x3318f5.result.links.SD
    };
    const _0x558019 = {
      video: _0x129cee,
      mimetype: "video/mp4",
      caption: "SD QUALITY\n\n> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x1b7603 = {
      quoted: _0x600538
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x558019, _0x1b7603);
    const _0x15f16c = {
      url: _0x3318f5.result.links.HD
    };
    const _0x294a15 = {
      video: _0x15f16c,
      mimetype: "video/mp4",
      caption: "HD QUALITY\n\n> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x3bcc15 = {
      quoted: _0x600538
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x294a15, _0x3bcc15);
    const _0x30bf0d = {
      text: '✔',
      key: _0x600538.key
    };
    const _0x341ef5 = {
      react: _0x30bf0d
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x341ef5);
  } catch (_0x1f9d36) {
    const _0x474d43 = {
      text: '❌',
      key: _0x600538.key
    };
    const _0x205d7b = {
      react: _0x474d43
    };
    await _0x5f25d8.sendMessage(_0x1a7dbc, _0x205d7b);
    console.log(_0x1f9d36);
    _0x421a13("Error !!\n\n*" + _0x1f9d36 + '*');
  }
});
const _0x33b64e = {
  pattern: "fbsd",
  react: '⬇',
  filename: __filename
};
cmd(_0x33b64e, async (_0x146cea, _0x23e358, _0xf79842, {
  from: _0x1c1bc2,
  quoted: _0x1f4d05,
  body: _0x239af7,
  isCmd: _0x4e5c47,
  command: _0x59e8b4,
  args: _0x9ce548,
  q: _0x57fb81,
  isGroup: _0x59a9fe,
  sender: _0x466c7f,
  senderNumber: _0x10c635,
  botNumber2: _0x44bc54,
  botNumber: _0x4895ff,
  pushname: _0x16bf40,
  isMe: _0x354666,
  isOwner: _0x2143fd,
  groupMetadata: _0x4e9b70,
  groupName: _0xf2318e,
  participants: _0x375373,
  groupAdmins: _0x226596,
  isBotAdmins: _0x323f22,
  isAdmins: _0x122d92,
  reply: _0x10d5c3
}) => {
  try {
    const _0x120fab = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x57fb81);
    const _0x2947d9 = {
      text: '⬆',
      key: _0x23e358.key
    };
    const _0x43fd2b = {
      react: _0x2947d9
    };
    await _0x146cea.sendMessage(_0x1c1bc2, _0x43fd2b);
    const _0x44c78a = {
      url: _0x120fab.result.sd
    };
    const _0x435657 = {
      video: _0x44c78a,
      mimetype: "video/mp4",
      caption: "> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x167061 = {
      quoted: _0x23e358
    };
    await _0x146cea.sendMessage(_0x1c1bc2, _0x435657, _0x167061);
    const _0x3aab8c = {
      text: '✔',
      key: _0x23e358.key
    };
    const _0x1c17da = {
      react: _0x3aab8c
    };
    await _0x146cea.sendMessage(_0x1c1bc2, _0x1c17da);
  } catch (_0x59bded) {
    const _0x3f6436 = {
      text: '❌',
      key: _0x23e358.key
    };
    const _0x2291d0 = {
      react: _0x3f6436
    };
    await _0x146cea.sendMessage(_0x1c1bc2, _0x2291d0);
    console.log(_0x59bded);
    _0x10d5c3("Error !!\n\n*" + _0x59bded + '*');
  }
});
const _0x530325 = {
  pattern: "fbsdd",
  react: '⬇',
  filename: __filename
};
cmd(_0x530325, async (_0x8f4242, _0x11d547, _0x30acb2, {
  from: _0x55e3e1,
  quoted: _0x443f5e,
  body: _0x533faf,
  isCmd: _0x1fe50f,
  command: _0x5c6743,
  args: _0x2bbab0,
  q: _0x44ab6b,
  isGroup: _0xf0fafe,
  sender: _0x24a3b5,
  senderNumber: _0x2b9877,
  botNumber2: _0x3abd41,
  botNumber: _0x14e6cc,
  pushname: _0xabd8f7,
  isMe: _0x13e17c,
  isOwner: _0x469045,
  groupMetadata: _0x2b879e,
  groupName: _0x349a77,
  participants: _0x1aa65a,
  groupAdmins: _0x4cac81,
  isBotAdmins: _0x348492,
  isAdmins: _0x5cfa79,
  reply: _0x2d5969
}) => {
  try {
    const _0x88d223 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x44ab6b);
    const _0x2f2f93 = {
      text: '⬆',
      key: _0x11d547.key
    };
    const _0x1fb97f = {
      react: _0x2f2f93
    };
    await _0x8f4242.sendMessage(_0x55e3e1, _0x1fb97f);
    const _0x1181d6 = {
      url: _0x88d223.result.sd
    };
    const _0x11045a = {
      document: _0x1181d6,
      mimetype: "video/mp4",
      fileName: "FbDL.mp4",
      caption: "💻 *ＰＯＤＩ MD FBDL*"
    };
    const _0x27228a = {
      quoted: _0x11d547
    };
    await _0x8f4242.sendMessage(_0x55e3e1, _0x11045a, _0x27228a);
    const _0x1a6150 = {
      text: '✔',
      key: _0x11d547.key
    };
    const _0xea69db = {
      react: _0x1a6150
    };
    await _0x8f4242.sendMessage(_0x55e3e1, _0xea69db);
  } catch (_0x25ddeb) {
    const _0x290f3b = {
      text: '❌',
      key: _0x11d547.key
    };
    const _0x32d081 = {
      react: _0x290f3b
    };
    await _0x8f4242.sendMessage(_0x55e3e1, _0x32d081);
    console.log(_0x25ddeb);
    _0x2d5969("Error !!\n\n*" + _0x25ddeb + '*');
  }
});
const _0x50fec2 = {
  pattern: "fbhd",
  react: '⬇',
  filename: __filename
};
cmd(_0x50fec2, async (_0x4a61cf, _0x9b4d06, _0x53ed34, {
  from: _0x59e534,
  quoted: _0x3cb49f,
  body: _0x4bef57,
  isCmd: _0x5d6802,
  command: _0x6e690,
  args: _0x4a0b51,
  q: _0x30ceb4,
  isGroup: _0x2599b9,
  sender: _0x23a92e,
  senderNumber: _0x5a2a24,
  botNumber2: _0x5b0a1b,
  botNumber: _0x3e28bf,
  pushname: _0x2ad956,
  isMe: _0x408bc3,
  isOwner: _0x76ce43,
  groupMetadata: _0x5df4c9,
  groupName: _0x30f2f5,
  participants: _0x1ca668,
  groupAdmins: _0x4c0bfa,
  isBotAdmins: _0x42d4b5,
  isAdmins: _0x18a232,
  reply: _0x4a330b
}) => {
  try {
    if (!_0x30ceb4.includes("https://")) {
      return await _0x4a330b(msr.not_fo);
    }
    const _0x16d72d = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x30ceb4);
    const _0x113c97 = {
      text: '⬆',
      key: _0x9b4d06.key
    };
    const _0x399fce = {
      react: _0x113c97
    };
    await _0x4a61cf.sendMessage(_0x59e534, _0x399fce);
    const _0x4201e6 = {
      url: _0x16d72d.result.hd
    };
    const _0x12c32a = {
      video: _0x4201e6,
      mimetype: "video/mp4",
      caption: "> *POWERED by ＰＯＤＩ-MD*"
    };
    const _0x1721e1 = {
      quoted: _0x9b4d06
    };
    await _0x4a61cf.sendMessage(_0x59e534, _0x12c32a, _0x1721e1);
    const _0x15e03f = {
      text: '✔',
      key: _0x9b4d06.key
    };
    const _0x4e9c33 = {
      react: _0x15e03f
    };
    await _0x4a61cf.sendMessage(_0x59e534, _0x4e9c33);
  } catch (_0x390d27) {
    const _0x5a6515 = {
      text: '❌',
      key: _0x9b4d06.key
    };
    const _0x3deb8a = {
      react: _0x5a6515
    };
    await _0x4a61cf.sendMessage(_0x59e534, _0x3deb8a);
    console.log(_0x390d27);
    _0x4a330b("Error !!\n\n*" + _0x390d27 + '*');
  }
});
const _0x34f09b = {
  pattern: "fbhdd",
  react: '⬇',
  filename: __filename
};
cmd(_0x34f09b, async (_0x15f962, _0x45d73e, _0x571e88, {
  from: _0x259c6f,
  quoted: _0x57f4c2,
  body: _0xe78c2f,
  isCmd: _0x2740e1,
  command: _0x41d81e,
  args: _0x33ed06,
  q: _0x320884,
  isGroup: _0x48f366,
  sender: _0x980086,
  senderNumber: _0x44871a,
  botNumber2: _0x491ca6,
  botNumber: _0x4d79e7,
  pushname: _0x5a7877,
  isMe: _0xac780a,
  isOwner: _0x47ab90,
  groupMetadata: _0x3a170e,
  groupName: _0x29b0fd,
  participants: _0x9826ff,
  groupAdmins: _0x4edcd6,
  isBotAdmins: _0x2a23c9,
  isAdmins: _0xd70f02,
  reply: _0x42050d
}) => {
  try {
    if (!_0x320884.includes("https://")) {
      return await _0x42050d(msr.not_fo);
    }
    const _0x22352c = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x320884);
    const _0x2cefe9 = {
      text: '⬆',
      key: _0x45d73e.key
    };
    const _0x57be87 = {
      react: _0x2cefe9
    };
    await _0x15f962.sendMessage(_0x259c6f, _0x57be87);
    const _0x4f0ac4 = {
      url: _0x22352c.result.hd
    };
    const _0x41c544 = {
      document: _0x4f0ac4,
      mimetype: "video/mp4",
      fileName: "FbDL.mp4",
      caption: "💻 *ＰＯＤＩ MD FBDL*"
    };
    const _0x59b583 = {
      quoted: _0x45d73e
    };
    await _0x15f962.sendMessage(_0x259c6f, _0x41c544, _0x59b583);
    const _0x24eb38 = {
      text: '✔',
      key: _0x45d73e.key
    };
    const _0x3e341b = {
      react: _0x24eb38
    };
    await _0x15f962.sendMessage(_0x259c6f, _0x3e341b);
  } catch (_0x481ca9) {
    const _0x151a9a = {
      text: '❌',
      key: _0x45d73e.key
    };
    const _0x281267 = {
      react: _0x151a9a
    };
    await _0x15f962.sendMessage(_0x259c6f, _0x281267);
    console.log(_0x481ca9);
    _0x42050d("Error !!\n\n*" + _0x481ca9 + '*');
  }
});
const _0x3b3c72 = {
  pattern: "fba",
  react: '⬇',
  filename: __filename
};
cmd(_0x3b3c72, async (_0x23bb3f, _0x36c1df, _0x450812, {
  from: _0x24ff53,
  quoted: _0x1d12fe,
  body: _0x28803b,
  isCmd: _0x1bc6e3,
  command: _0x409539,
  args: _0x54266b,
  q: _0x375598,
  isGroup: _0x43b800,
  sender: _0x3fc180,
  senderNumber: _0x6dd6da,
  botNumber2: _0x455401,
  botNumber: _0x4ad785,
  pushname: _0x2765f4,
  isMe: _0x384d6d,
  isOwner: _0x3293f5,
  groupMetadata: _0x54478d,
  groupName: _0x5c3d60,
  participants: _0x6e1957,
  groupAdmins: _0x2813b1,
  isBotAdmins: _0x24093e,
  isAdmins: _0x24402b,
  reply: _0x983fa0
}) => {
  try {
    if (!_0x375598.includes("https://")) {
      return await _0x983fa0(msr.not_fo);
    }
    const _0x2949dc = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0x375598);
    const _0x1e4a79 = {
      text: '⬆',
      key: _0x36c1df.key
    };
    const _0x4e579f = {
      react: _0x1e4a79
    };
    await _0x23bb3f.sendMessage(_0x24ff53, _0x4e579f);
    const _0x2ba79c = {
      url: _0x2949dc.result.hd
    };
    const _0x75006 = {
      audio: _0x2ba79c,
      mimetype: "audio/mpeg"
    };
    const _0x1740aa = {
      quoted: _0x36c1df
    };
    await _0x23bb3f.sendMessage(_0x24ff53, _0x75006, _0x1740aa);
    const _0x4b37a4 = {
      text: '✔',
      key: _0x36c1df.key
    };
    const _0xebf7d0 = {
      react: _0x4b37a4
    };
    await _0x23bb3f.sendMessage(_0x24ff53, _0xebf7d0);
  } catch (_0x31aa9a) {
    const _0x2dd6b6 = {
      text: '❌',
      key: _0x36c1df.key
    };
    const _0x235442 = {
      react: _0x2dd6b6
    };
    await _0x23bb3f.sendMessage(_0x24ff53, _0x235442);
    console.log(_0x31aa9a);
    _0x983fa0("Error !!\n\n*" + _0x31aa9a + '*');
  }
});
const _0x59f538 = {
  pattern: "fbd",
  react: '⬇',
  filename: __filename
};
cmd(_0x59f538, async (_0x2669df, _0x238abd, _0x586a86, {
  from: _0x3a79de,
  quoted: _0x19ead0,
  body: _0x68ff01,
  isCmd: _0x543f70,
  command: _0x5328de,
  args: _0x4c56b3,
  q: _0xd32524,
  isGroup: _0x3bfe17,
  sender: _0x3a105a,
  senderNumber: _0x572397,
  botNumber2: _0x4c7e21,
  botNumber: _0xda2f7a,
  pushname: _0x16709d,
  isMe: _0x39a7d1,
  isOwner: _0x116db2,
  groupMetadata: _0x9224c1,
  groupName: _0x2fca26,
  participants: _0x3110a8,
  groupAdmins: _0x26507c,
  isBotAdmins: _0x3ee768,
  isAdmins: _0x203563,
  reply: _0x567823
}) => {
  try {
    if (!_0xd32524.includes("https://")) {
      return await _0x567823(msr.not_fo);
    }
    const _0x489538 = await fetchJson("https://vajira-api-0aaeb51465b5.herokuapp.com/download/fbdown?url=" + _0xd32524);
    const _0x526605 = {
      text: '⬆',
      key: _0x238abd.key
    };
    const _0x300973 = {
      react: _0x526605
    };
    await _0x2669df.sendMessage(_0x3a79de, _0x300973);
    const _0x32de04 = {
      url: _0x489538.result.hd
    };
    const _0x38f2a8 = {
      document: _0x32de04,
      mimetype: "audio/mpeg",
      fileName: "Fbdl.mp3",
      caption: "💻 *VAJIRA MD Fbdl*"
    };
    const _0x2d793a = {
      quoted: _0x238abd
    };
    await _0x2669df.sendMessage(_0x3a79de, _0x38f2a8, _0x2d793a);
    const _0x492650 = {
      text: '✔',
      key: _0x238abd.key
    };
    const _0x52e959 = {
      react: _0x492650
    };
    await _0x2669df.sendMessage(_0x3a79de, _0x52e959);
  } catch (_0xdc5d8a) {
    const _0x153fa7 = {
      text: '❌',
      key: _0x238abd.key
    };
    const _0x5928ad = {
      react: _0x153fa7
    };
    await _0x2669df.sendMessage(_0x3a79de, _0x5928ad);
    console.log(_0xdc5d8a);
    _0x567823("Error !!\n\n*" + _0xdc5d8a + '*');
  }
});