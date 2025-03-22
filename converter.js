const {
  cmd,
  commands
} = require("../lib/command");
let {
  img2url
} = require("@blackamda/telegram-image-url");
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
  jsonformat
} = require("../lib/functions");
const config = require("../settings");
const fs = require('fs');
const axios = require("axios");
const got = require("got");
const translate = require("translate-google-api");
const {
  promisify
} = require("util");
const FormData = require("form-data");
function _0xd185ae(_0x3fddc9, _0x307ef5, _0x22fe4b, _0x429cbe, _0x2a9b24) {
  return _0x360c(_0x307ef5 + 0x2ff, _0x3fddc9);
}
const stream = require("stream");
const pipeline = promisify(stream.pipeline);
const fileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const path = require("path");
const {
  tmpdir
} = require('os');
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const os = require('os');
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x46013f) {
  const _0xe3f8e9 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x30557c = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
  fs.writeFileSync(_0x30557c, _0x46013f);
  await new Promise((_0x563615, _0x502878) => {
    ffmpeg(_0x30557c).on("error", _0x502878).on("end", () => _0x563615(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0xe3f8e9);
  });
  const _0x20e7ff = fs.readFileSync(_0xe3f8e9);
  fs.unlinkSync(_0xe3f8e9);
  fs.unlinkSync(_0x30557c);
  return _0x20e7ff;
}
function toAudio(_0x493ea5, _0x4411b2) {
  return ffmpeg(_0x493ea5, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x4411b2, "mp3");
}
function toPTT(_0x5d36e2, _0x38c155) {
  return ffmpeg(_0x5d36e2, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x38c155, "opus");
}
function toVideo(_0x486940, _0x454744) {
  return ffmpeg(_0x486940, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x454744, "mp4");
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති රූපය url එකක් බවට පරිවර්තනය කරයි.";
} else {
  desct = "It convert given image to url.";
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*ඡායාරූපයකට mention දෙන්න !*";
} else {
  imgmsg = "*Reply to a photo !*";
}
var cantf = '';
if (config.LANG === 'SI') {
  cantf = "*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*";
} else {
  cantf = "*Server is busy. Try again later.!*";
}
var imgmsgs = '';
if (config.LANG === 'SI') {
  imgmsgs = "*මට anime නමක් දෙන්න !*";
} else {
  imgmsgs = "*Give me a anime name !*";
}
var descgs = '';
if (config.LANG === 'SI') {
  descgs = "එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.";
} else {
  descgs = "It gives details of given anime name.";
}
var cants = '';
if (config.LANG === 'SI') {
  cants = "I cant find this anime.";
} else {
  cants = "I cant find this anime.";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.";
} else {
  descg = "It converts your replied photo to sticker.";
}
var imgmsg2 = '';
if (config.LANG === 'SI') {
  imgmsg2 = "*ස්ටිකරයකට mention දෙන්න !*";
} else {
  imgmsg2 = "*Reply to a sticker !*";
}
function _0x10d33b(_0x29d1ec, _0x229856, _0x1f4153, _0x4e9d10, _0x3b13b6) {
  return _0x360c(_0x4e9d10 + 0x27f, _0x1f4153);
}
var descg2 = '';
if (config.LANG === 'SI') {
  descg2 = "එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි.";
} else {
  descg2 = "It converts your replied sticker to img.";
}
var desct1 = '';
if (config.LANG === 'SI') {
  desct1 = "එය ලබා දී ඇති රූපය anime image එකක් බවට පරිවර්තනය කරයි.";
} else {
  desct1 = "It convert given image to anime image.";
}
var desct2 = '';
if (config.LANG === 'SI') {
  desct2 = "එය ලබා දී ඇති text එකක් ai image එකක් බවට පරිවර්තනය කරයි.";
} else {
  desct2 = "It convert given text to ai image.";
}
var imgmsg3 = '';
if (config.LANG === 'SI') {
  imgmsg3 = "*උදාහරණයක්: .imagine woman,hair cut collor red,full body,bokeh*";
} else {
  imgmsg3 = "*Example: .imagine woman,hair cut collor red,full body,bokeh*";
}
var imgmsg1 = '';
if (config.LANG === 'SI') {
  imgmsg1 = "*වීඩියෝවක් mention දෙන්න !*";
} else {
  imgmsg1 = "*Reply to a video !*";
}
var descg3 = '';
if (config.LANG === 'SI') {
  descg3 = "එය ඔබගේ mention දුන් වීඩියෝව audio බවට පරිවර්තනය කරයි.";
} else {
  descg3 = "It converts your replied video to audio [mp3].";
}
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට මෙම වීඩියෝව audio බවට පරිවර්තනය කළ නොහැකි විය :(*";
} else {
  N_FOUND = "*I cant convert this video to audio :(*";
}
var imgmsg4 = '';
if (config.LANG === 'SI') {
  imgmsg4 = "*කරුණාකර මට text එකක් දෙන්න !*";
} else {
  imgmsg4 = "*Please give me a text !*";
}
var descg1 = '';
if (config.LANG === 'SI') {
  descg1 = "එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි";
} else {
  descg = "it converts a text to gif sticker.";
}
if (config.LANG === 'SI') {
  descdg = "එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි";
} else {
  descdg = "it converts a text to sticker.";
}
if (config.LANG === 'SI') {
  cant = "මට මෙම රූපයේ පසුබිම ඉවත් කළ නොහැක.";
} else {
  cant = "I can't remove background on this image.";
}
const _0x2ba2ed = {
  pattern: 'vv',
  alias: ["retrive", '🔥'],
  desc: "Fetch and resend a ViewOnce message content (image/video).",
  category: "convert",
  use: "<query>",
  filename: __filename
};
cmd(_0x2ba2ed, async (_0x2570c3, _0x12b530, _0x5632da, {
  from: _0x19382a,
  reply: _0x182f12
}) => {
  try {
    const _0x5e3790 = _0x5632da.msg.contextInfo.quotedMessage;
    if (_0x5e3790 && _0x5e3790.viewOnceMessageV2) {
      const _0x51563c = _0x5e3790.viewOnceMessageV2;
      if (_0x51563c.message.imageMessage) {
        let _0x38d24f = _0x51563c.message.imageMessage.caption;
        let _0x348f75 = await _0x2570c3.downloadAndSaveMediaMessage(_0x51563c.message.imageMessage);
        const _0x77648a = {
          url: _0x348f75
        };
        const _0xd88e78 = {
          image: _0x77648a,
          caption: _0x38d24f
        };
        const _0xc4130e = {
          quoted: _0x12b530
        };
        return _0x2570c3.sendMessage(_0x19382a, _0xd88e78, _0xc4130e);
      }
      if (_0x51563c.message.videoMessage) {
        let _0xc98077 = _0x51563c.message.videoMessage.caption;
        let _0x192b6a = await _0x2570c3.downloadAndSaveMediaMessage(_0x51563c.message.videoMessage);
        const _0x57b7a8 = {
          url: _0x192b6a
        };
        const _0x535ebf = {
          video: _0x57b7a8,
          caption: _0xc98077
        };
        const _0x35173a = {
          quoted: _0x12b530
        };
        return _0x2570c3.sendMessage(_0x19382a, _0x535ebf, _0x35173a);
      }
      if (_0x51563c.message.audioMessage) {
        let _0x506da9 = await _0x2570c3.downloadAndSaveMediaMessage(_0x51563c.message.audioMessage);
        const _0x3ff487 = {
          url: _0x506da9
        };
        const _0x31afdc = {
          audio: _0x3ff487
        };
        const _0x2b9075 = {
          quoted: _0x12b530
        };
        return _0x2570c3.sendMessage(_0x19382a, _0x31afdc, _0x2b9075);
      }
    }
    if (!_0x5632da.quoted) {
      return _0x182f12("Please reply to a ViewOnce message.");
    }
    if (_0x5632da.quoted.mtype === "viewOnceMessage") {
      if (_0x5632da.quoted.message.imageMessage) {
        let _0x338746 = _0x5632da.quoted.message.imageMessage.caption;
        let _0x4d8471 = await _0x2570c3.downloadAndSaveMediaMessage(_0x5632da.quoted.message.imageMessage);
        const _0x1ea42b = {
          url: _0x4d8471
        };
        const _0x1a3db4 = {
          image: _0x1ea42b,
          caption: _0x338746
        };
        const _0x2ce93c = {
          quoted: _0x12b530
        };
        return _0x2570c3.sendMessage(_0x19382a, _0x1a3db4, _0x2ce93c);
      } else {
        if (_0x5632da.quoted.message.videoMessage) {
          let _0x55c3e7 = _0x5632da.quoted.message.videoMessage.caption;
          let _0x457a07 = await _0x2570c3.downloadAndSaveMediaMessage(_0x5632da.quoted.message.videoMessage);
          const _0x3d9d42 = {
            url: _0x457a07
          };
          const _0x25cbc1 = {
            video: _0x3d9d42,
            caption: _0x55c3e7
          };
          const _0x1dafe4 = {
            quoted: _0x12b530
          };
          return _0x2570c3.sendMessage(_0x19382a, _0x25cbc1, _0x1dafe4);
        }
      }
    } else {
      if (_0x5632da.quoted.message.audioMessage) {
        let _0x5afeda = await _0x2570c3.downloadAndSaveMediaMessage(_0x5632da.quoted.message.audioMessage);
        const _0x1133e7 = {
          url: _0x5afeda
        };
        const _0x37907a = {
          audio: _0x1133e7
        };
        const _0x1724e7 = {
          quoted: _0x12b530
        };
        return _0x2570c3.sendMessage(_0x19382a, _0x37907a, _0x1724e7);
      } else {
        return _0x182f12("This is not a ViewOnce message.");
      }
    }
  } catch (_0x524c40) {
    console.log("Error:", _0x524c40);
    _0x182f12("An error occurred while fetching the ViewOnce message.");
  }
});
const _0x56de00 = {
  pattern: "vcloner",
  react: '😁',
  desc: "To clone a voice",
  category: "main",
  use: ".vcloner",
  filename: __filename
};
cmd(_0x56de00, async (_0x3a0881, _0x42fa76, _0x57913b, {
  from: _0xb9a7fc,
  prefix: _0x2b39b6,
  l: _0x1c1aad,
  quoted: _0x39aaf6,
  body: _0x2ed5c8,
  isCmd: _0x395755,
  command: _0x219068,
  args: _0x5596f9,
  q: _0x287617,
  isGroup: _0x5095f0,
  sender: _0x21cdbf,
  senderNumber: _0x369154,
  botNumber2: _0x1709db,
  botNumber: _0x1f7ec3,
  pushname: _0xf5b5c6,
  isMe: _0x3c4c91,
  isOwner: _0x31710b,
  groupMetadata: _0x533fca,
  groupName: _0xd63f11,
  participants: _0x3f7b7,
  groupAdmins: _0x367adb,
  isBotAdmins: _0x46169b,
  isAdmins: _0x53a3b4,
  reply: _0x4266d2
}) => {
  try {
    if (!_0x287617) {
      return _0x4266d2("*Provide valid input text.*");
    }
    const _0x4eb1b2 = _0x287617.split('|');
    if (_0x4eb1b2.length !== 2) {
      return _0x4266d2("*Invalid input format. Provide two audio URLs separated by \"|\".*");
    }
    const _0x35f53e = _0x4eb1b2[0].trim();
    const _0x423443 = _0x4eb1b2[1].trim();
    const _0x3cf715 = "https://matrixcoder.vercel.app/api/VoiceCloner?init_audio=" + encodeURIComponent(_0x35f53e) + "&target_audio=" + encodeURIComponent(_0x423443) + "&key=" + vcapiKey;
    const _0x507847 = await fetch(_0x3cf715);
    if (!_0x507847.ok) {
      return _0x4266d2("Invalid response from the API. Status code: " + _0x507847.status);
    }
    const _0x453213 = await _0x507847.json();
    console.log("API Response:", _0x453213);
    if (_0x453213.status === "success" && _0x453213.output && _0x453213.output.length > 0) {
      const _0x58beab = _0x453213.output[0];
      const _0x74eeba = {
        url: _0x58beab
      };
      const _0x3d5998 = {
        audio: _0x74eeba,
        mimetype: "audio/mp4",
        ptt: true,
        fileName: _0x287617 + ".mp3"
      };
      const _0x2c8c95 = {
        quoted: _0x42fa76
      };
      await _0x3a0881.sendMessage(_0xb9a7fc, _0x3d5998, _0x2c8c95);
    } else {
      return _0x4266d2("Invalid or unexpected API response. " + JSON.stringify(_0x453213));
    }
    const _0xb3531b = {
      text: '✅',
      key: _0x42fa76.key
    };
    const _0x280911 = {
      react: _0xb3531b
    };
    await _0x3a0881.sendMessage(_0xb9a7fc, _0x280911);
  } catch (_0x4960ef) {
    return _0x4266d2("An error occurred while processing the request. " + _0x4960ef.message);
    _0x1c1aad(_0x4960ef);
  }
});
function _0x360c(_0xde2cd0, _0x397bc7) {
  const _0x198379 = _0x2d33();
  _0x360c = function (_0x6119ca, _0x510f09) {
    _0x6119ca = _0x6119ca - 256;
    let _0x38c401 = _0x198379[_0x6119ca];
    if (_0x360c.wghgSF === undefined) {
      var _0x1b083d = function (_0xae15a6) {
        let _0x59873d = '';
        let _0x524202 = '';
        let _0x533c69 = _0x59873d + _0x1b083d;
        let _0x30fafd = 0;
        let _0x2e4417;
        let _0x1ab6d9;
        for (let _0x4d4b25 = 0; _0x1ab6d9 = _0xae15a6.charAt(_0x4d4b25++); ~_0x1ab6d9 && (_0x2e4417 = _0x30fafd % 4 ? _0x2e4417 * 64 + _0x1ab6d9 : _0x1ab6d9, _0x30fafd++ % 4) ? _0x59873d += _0x533c69.charCodeAt(_0x4d4b25 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x2e4417 >> (-2 * _0x30fafd & 6)) : _0x30fafd : 0) {
          _0x1ab6d9 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x1ab6d9);
        }
        let _0x467235 = 0;
        for (let _0x3aa900 = _0x59873d.length; _0x467235 < _0x3aa900; _0x467235++) {
          _0x524202 += '%' + ('00' + _0x59873d.charCodeAt(_0x467235).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x524202);
      };
      const _0x11cc2a = function (_0x35ae0f, _0x32e9a9) {
        let _0x5a0112 = [];
        let _0x4f8eaf = 0;
        let _0x5e91cc;
        let _0x2f16c0 = '';
        _0x35ae0f = _0x1b083d(_0x35ae0f);
        let _0x2ab448;
        for (_0x2ab448 = 0; _0x2ab448 < 256; _0x2ab448++) {
          _0x5a0112[_0x2ab448] = _0x2ab448;
        }
        for (_0x2ab448 = 0; _0x2ab448 < 256; _0x2ab448++) {
          _0x4f8eaf = (_0x4f8eaf + _0x5a0112[_0x2ab448] + _0x32e9a9.charCodeAt(_0x2ab448 % _0x32e9a9.length)) % 256;
          _0x5e91cc = _0x5a0112[_0x2ab448];
          _0x5a0112[_0x2ab448] = _0x5a0112[_0x4f8eaf];
          _0x5a0112[_0x4f8eaf] = _0x5e91cc;
        }
        _0x2ab448 = 0;
        _0x4f8eaf = 0;
        for (let _0x546dfe = 0; _0x546dfe < _0x35ae0f.length; _0x546dfe++) {
          _0x2ab448 = (_0x2ab448 + 1) % 256;
          _0x4f8eaf = (_0x4f8eaf + _0x5a0112[_0x2ab448]) % 256;
          _0x5e91cc = _0x5a0112[_0x2ab448];
          _0x5a0112[_0x2ab448] = _0x5a0112[_0x4f8eaf];
          _0x5a0112[_0x4f8eaf] = _0x5e91cc;
          _0x2f16c0 += String.fromCharCode(_0x35ae0f.charCodeAt(_0x546dfe) ^ _0x5a0112[(_0x5a0112[_0x2ab448] + _0x5a0112[_0x4f8eaf]) % 256]);
        }
        return _0x2f16c0;
      };
      _0x360c.ckCDTh = _0x11cc2a;
      _0xde2cd0 = arguments;
      _0x360c.wghgSF = true;
    }
    const _0x4d0411 = _0x198379[0];
    const _0xbfd0a8 = _0x6119ca + _0x4d0411;
    const _0x3764fa = _0xde2cd0[_0xbfd0a8];
    if (!_0x3764fa) {
      if (_0x360c.SZGJEP === undefined) {
        const _0x29bad0 = function (_0x2d93a8) {
          this.ZoxJoi = _0x2d93a8;
          this.KPoSPv = [1, 0, 0];
          this.Wsfchd = function () {
            return 'newState';
          };
          this.kjfKVj = "\\w+ *\\(\\) *{\\w+ *";
          this.kjgapg = "['|\"].+['|\"];? *}";
        };
        _0x29bad0.prototype.RQvBBf = function () {
          const _0x3ab1ab = new RegExp(this.kjfKVj + this.kjgapg);
          const _0x148a25 = _0x3ab1ab.test(this.Wsfchd.toString()) ? --this.KPoSPv[1] : --this.KPoSPv[0];
          return this.IAhURE(_0x148a25);
        };
        _0x29bad0.prototype.IAhURE = function (_0x29c82a) {
          if (!Boolean(~_0x29c82a)) {
            return _0x29c82a;
          }
          return this.noWNmC(this.ZoxJoi);
        };
        _0x29bad0.prototype.noWNmC = function (_0x42a3ef) {
          let _0x45e95d = 0;
          for (let _0xa66cce = this.KPoSPv.length; _0x45e95d < _0xa66cce; _0x45e95d++) {
            this.KPoSPv.push(Math.round(Math.random()));
            _0xa66cce = this.KPoSPv.length;
          }
          return _0x42a3ef(this.KPoSPv[0]);
        };
        new _0x29bad0(_0x360c).RQvBBf();
        _0x360c.SZGJEP = true;
      }
      _0x38c401 = _0x360c.ckCDTh(_0x38c401, _0x510f09);
      _0xde2cd0[_0xbfd0a8] = _0x38c401;
    } else {
      _0x38c401 = _0x3764fa;
    }
    return _0x38c401;
  };
  return _0x360c(_0xde2cd0, _0x397bc7);
}
const _0x207a3f = {
  pattern: "emojimix",
  react: '😁',
  desc: "To convert 2 imoji to 1",
  category: "main",
  use: ".emojimix",
  filename: __filename
};
cmd(_0x207a3f, async (_0x23d368, _0x4f362a, _0x439c74, {
  from: _0x513d33,
  prefix: _0x34bef8,
  l: _0x5ca78d,
  quoted: _0x1032b1,
  body: _0x4ddaf4,
  isCmd: _0x498283,
  command: _0xdff54,
  args: _0x37d59d,
  q: _0x3dcc95,
  isGroup: _0x4d74c0,
  sender: _0x1b68b2,
  senderNumber: _0x3860f7,
  botNumber2: _0x18a778,
  botNumber: _0x53932d,
  pushname: _0x1a80a7,
  isMe: _0x375f9e,
  isOwner: _0x33dcfb,
  groupMetadata: _0x26bf50,
  groupName: _0x3c7a77,
  participants: _0x179bc7,
  groupAdmins: _0x3a68db,
  isBotAdmins: _0x5b0761,
  isAdmins: _0xce3881,
  reply: _0xbdae60
}) => {
  try {
    let [_0x259458, _0x35f309] = _0x3dcc95.split`+`;
    if (!_0x259458) {
      throw "Example: " + (_0x34bef8 + _0xdff54) + " 😅+🤔";
    }
    if (!_0x35f309) {
      throw "Example: " + (_0x34bef8 + _0xdff54) + " 😅+🤔";
    }
    let _0x575413 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x259458) + '_' + encodeURIComponent(_0x35f309));
    for (let _0x5b0f4b of _0x575413.results) {
      let _0x360567 = await _0x23d368.sendImageAsSticker(_0x513d33, _0x5b0f4b.url, _0x4f362a, {
        'packname': global.packname,
        'author': global.author,
        'categories': _0x5b0f4b.tags
      });
      await fs.unlinkSync(_0x360567);
    }
    const _0x341b18 = {
      text: '✅',
      key: _0x4f362a.key
    };
    const _0x197f4a = {
      react: _0x341b18
    };
    await _0x23d368.sendMessage(_0x513d33, _0x197f4a);
  } catch (_0x58a241) {
    _0xbdae60("*Error !!*");
    _0x5ca78d(_0x58a241);
  }
});
const _0x54cc2f = {
  pattern: "trt",
  react: '🔖',
  desc: "To convert languages"
};
function _0x42fec6(_0x49c327, _0x11a0f3, _0x36588b, _0x3fd9a5, _0x262663) {
  return _0x360c(_0x262663 + 0x305, _0x49c327);
}
_0x54cc2f.category = "main";
_0x54cc2f.use = ".trt";
_0x54cc2f.filename = __filename;
cmd(_0x54cc2f, async (_0x2306ce, _0x52ae7f, _0x944d6c, {
  from: _0x184a18,
  prefix: _0x4ed2d0,
  l: _0x388a2c,
  quoted: _0x3b5698,
  body: _0xe13bc9,
  isCmd: _0x4f135a,
  command: _0x2419de,
  args: _0x5c038d,
  q: _0x186e87,
  isGroup: _0x2902b9,
  sender: _0x2be830,
  senderNumber: _0x3d2321,
  botNumber2: _0xf714de,
  botNumber: _0x53b3be,
  pushname: _0x5cd83e,
  isMe: _0x443505,
  isOwner: _0x416d58,
  groupMetadata: _0x804d0b,
  groupName: _0x43e151,
  participants: _0x15b519,
  groupAdmins: _0xc4cdec,
  isBotAdmins: _0x3b7314,
  isAdmins: _0x1355aa,
  reply: _0x25a2a8
}) => {
  try {
    if (!_0x186e87) {
      return mreply("Usage: .trt <language code> <text> or reply message");
    }
    if (_0x186e87 && _0x52ae7f.quoted && _0x52ae7f.quoted.text) {
      let _0x3794ca = _0x186e87.slice(0, 2);
      try {
        let _0x38e287 = _0x52ae7f.quoted.q;
        const _0x4ad6d5 = {
          'to': _0x3794ca
        };
        let _0x53b0e6 = await translate('' + _0x38e287, _0x4ad6d5);
        _0x25a2a8(_0x53b0e6[0]);
      } catch {
        return _0x25a2a8(" Language code not supported.");
      }
    } else {
      if (_0x186e87) {
        let _0x4b7b7f = _0x186e87.slice(0, 2);
        let _0x966f95 = _0x186e87.substring(2).trim();
        const _0x5a9f4c = {
          'to': _0x4b7b7f
        };
        let _0x163044 = await translate('' + _0x966f95, _0x5a9f4c);
        _0x25a2a8(_0x163044[0]);
      }
    }
    const _0x150d86 = {
      text: '✅',
      key: _0x52ae7f.key
    };
    const _0x131d7a = {
      react: _0x150d86
    };
    await _0x2306ce.sendMessage(_0x184a18, _0x131d7a);
  } catch (_0x5dc226) {
    _0x25a2a8("*Error !!*");
    _0x388a2c(_0x5dc226);
  }
});
const _0x269ea8 = {
  pattern: "removebg",
  react: '🔮',
  alias: ["rmbg"],
  desc: descg,
  category: "convert",
  use: ".removebg <Reply to image>",
  filename: __filename
};
cmd(_0x269ea8, async (_0x4e81e7, _0x175131, _0x4bee36, {
  from: _0x24eae7,
  l: _0x5f4b1a,
  quoted: _0x3392ee,
  prefix: _0xe9d268,
  body: _0x579a0c,
  isCmd: _0x44d848,
  command: _0x3579ef,
  args: _0x458cdd,
  q: _0xb785a5,
  isGroup: _0x51c5d2,
  sender: _0x19b07a,
  senderNumber: _0x19070d,
  botNumber2: _0x428e8c,
  botNumber: _0x5de778,
  pushname: _0x4663a0,
  isMe: _0x490d7c,
  isOwner: _0x3fe61a,
  groupMetadata: _0x50097b,
  groupName: _0x119274,
  participants: _0x35955c,
  groupAdmins: _0x53b17f,
  isBotAdmins: _0x1fa06a,
  isAdmins: _0x21faf5,
  reply: _0x4e925e
}) => {
  try {
    const _0x1366ed = _0x4bee36.quoted ? _0x4bee36.quoted.type === "viewOnceMessage" : false;
    const _0xf23fec = _0x4bee36.quoted ? _0x4bee36.quoted.type === "imageMessage" || (_0x1366ed ? _0x4bee36.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x4bee36.type === "imageMessage" || _0xf23fec) {
      var _0x4327ed = getRandom('');
      var _0x53d3cb = getRandom('');
      let _0x4ed8c6 = _0xf23fec ? await _0x4bee36.quoted.download(_0x4327ed) : await _0x4bee36.download(_0x4327ed);
      let _0x59739b = await fileType.fromBuffer(_0x4ed8c6);
      await fs.promises.writeFile('./' + _0x59739b.ext, _0x4ed8c6);
      var _0x34c893 = new FormData();
      _0x34c893.append("image_file", fs.createReadStream('./' + _0x59739b.ext));
      _0x34c893.append("size", "auto");
      var _0x31a0f3 = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
        'body': _0x34c893,
        'headers': {
          'X-Api-Key': "fLYByZwbPqdyqkdKK6zcBN9H"
        }
      });
      await pipeline(_0x31a0f3, fs.createWriteStream(_0x53d3cb + ".png"));
      if (config.MODE === "nonbutton") {
        const _0x31b9e7 = [{
          'title': '',
          'rows': [{
            'title': '1',
            'rowId': _0xe9d268 + "rbgi " + _0x53d3cb + ".png",
            'description': "IMAGE"
          }, {
            'title': '2',
            'rowId': _0xe9d268 + "rebgs " + _0x53d3cb + ".png",
            'description': "STICKER"
          }, {
            'title': '3',
            'rowId': _0xe9d268 + "rbgd " + _0x53d3cb + ".png",
            'description': "DOCUMENT"
          }]
        }];
        const _0x341c8f = {
          url: config.LOGO
        };
        const _0x4b8542 = {
          caption: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *🌆 BACKGROUND REMOVER*\n\n",
          image: _0x341c8f,
          footer: config.FOOTER,
          title: '',
          buttonText: "*🔢 Reply below number*",
          sections: _0x31b9e7
        };
        const _0x51931c = {
          quoted: _0x175131
        };
        return await _0x4e81e7.replyList(_0x24eae7, _0x4b8542, _0x51931c);
      }
      if (config.MODE === "button") {
        let _0x1bb984 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "IMAGE",
            'id': _0xe9d268 + "rbgi"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "STICKER",
            'id': _0xe9d268 + "rebgs "
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "DOCUMENT",
            'id': _0xe9d268 + "rbgd "
          })
        }];
        const _0x4144e4 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *🌆 BACKGROUND REMOVER*\n\n"
        };
        return await _0x4e81e7.sendButtonMessage(_0x24eae7, _0x1bb984, _0x4bee36, _0x4144e4);
      }
    } else {
      return await _0x4e925e(imgmsg);
    }
  } catch (_0x2a79bb) {
    _0x4e925e("*ERROR !!*");
    _0x5f4b1a(_0x2a79bb);
  }
});
const _0x1cfbeb = {
  pattern: "rbgi",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1cfbeb, async (_0x51b9d5, _0x171572, _0x4bc0dd, {
  from: _0x878f9b,
  l: _0x31bf3a,
  quoted: _0x236505,
  body: _0x8dc206,
  isCmd: _0x2927cf,
  command: _0x1c5a6e,
  args: _0x528214,
  q: _0x5506ff,
  isGroup: _0x44e61e,
  sender: _0x1ac76c,
  senderNumber: _0x10e9e3,
  botNumber2: _0x4cd6e7,
  botNumber: _0x50c883,
  pushname: _0x46221e,
  isMe: _0xfa1889,
  isOwner: _0x2cc63f,
  groupMetadata: _0x361dcc,
  groupName: _0x5886d9,
  participants: _0x39c8e3,
  groupAdmins: _0x252ce,
  isBotAdmins: _0x2efa5d,
  isAdmins: _0x5c9aa8,
  reply: _0x35c3fa
}) => {
  try {
    const _0x2128b9 = {
      text: '📥',
      key: _0x171572.key
    };
    const _0x3c741e = {
      react: _0x2128b9
    };
    await _0x51b9d5.sendMessage(_0x878f9b, _0x3c741e);
    const _0x27f051 = {
      quoted: _0x171572
    };
    await _0x51b9d5.sendMessage(_0x878f9b, {
      'image': fs.readFileSync(_0x5506ff),
      'caption': config.FOOTER
    }, _0x27f051);
    const _0x394cf3 = {
      text: '✔',
      key: _0x171572.key
    };
    const _0x46bffd = {
      react: _0x394cf3
    };
    await _0x51b9d5.sendMessage(_0x878f9b, _0x46bffd);
  } catch (_0x4e672e) {
    _0x35c3fa("*ERROR !!*");
    _0x31bf3a(_0x4e672e);
  }
});
const _0x4d13d9 = {
  pattern: "rebgs",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4d13d9, async (_0x3bde9c, _0x3a3f02, _0xac98f1, {
  from: _0x15d1cc,
  l: _0x1f0909,
  quoted: _0x51c3df,
  body: _0x32b501,
  isCmd: _0x4bf89a,
  command: _0x3c2842,
  args: _0x33b7a9,
  q: _0x54052b,
  isGroup: _0x42c445,
  sender: _0x4b64a7,
  senderNumber: _0xf7b6c,
  botNumber2: _0x489c40,
  botNumber: _0x561353,
  pushname: _0xe1882a,
  isMe: _0x56672a,
  isOwner: _0x574335,
  groupMetadata: _0x2c7e6a,
  groupName: _0x11f6f4,
  participants: _0x31c2c4,
  groupAdmins: _0x33cf2f,
  isBotAdmins: _0x5c80a8,
  isAdmins: _0x405b1c,
  reply: _0x503690
}) => {
  try {
    const _0x435810 = {
      text: '📥',
      key: _0x3a3f02.key
    };
    const _0x4f85ba = {
      react: _0x435810
    };
    await _0x3bde9c.sendMessage(_0x15d1cc, _0x4f85ba);
    let _0x2cfe0c = new Sticker(_0x54052b, {
      'pack': _0xe1882a,
      'author': '',
      'type': _0x54052b.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
      'categories': ['🤩', '🎉'],
      'id': "12345",
      'quality': 0x4b,
      'background': "transparent"
    });
    const _0x126509 = await _0x2cfe0c.toBuffer();
    const _0x4cc343 = {
      sticker: _0x126509
    };
    const _0x3de053 = {
      quoted: _0x3a3f02
    };
    await _0x3bde9c.sendMessage(_0x15d1cc, _0x4cc343, _0x3de053);
    const _0x2146d9 = {
      text: '✔',
      key: _0x3a3f02.key
    };
    const _0x1e132f = {
      react: _0x2146d9
    };
    await _0x3bde9c.sendMessage(_0x15d1cc, _0x1e132f);
  } catch (_0x32d38d) {
    _0x503690("*ERROR !!*");
    _0x1f0909(_0x32d38d);
  }
});
const _0x37c0b7 = {
  pattern: "rbgd",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x37c0b7, async (_0x1988c2, _0x4a07f2, _0x1021c3, {
  from: _0x3203ab,
  l: _0x44e49f,
  quoted: _0x2f465a,
  body: _0x28a97f,
  isCmd: _0x3ed196,
  command: _0x248488,
  args: _0x100519,
  q: _0x271c4f,
  isGroup: _0x13e082,
  sender: _0x1e7ec8,
  senderNumber: _0x5b9761,
  botNumber2: _0x34e33c,
  botNumber: _0x598bc4,
  pushname: _0x1d91d1,
  isMe: _0x4a25be,
  isOwner: _0x5a8330,
  groupMetadata: _0x1f19d5,
  groupName: _0x8f452a,
  participants: _0xc52139,
  groupAdmins: _0x1df9f8,
  isBotAdmins: _0x273b00,
  isAdmins: _0x480faa,
  reply: _0x348233
}) => {
  try {
    const _0x502d45 = {
      text: '📥',
      key: _0x4a07f2.key
    };
    const _0x506ad4 = {
      react: _0x502d45
    };
    await _0x1988c2.sendMessage(_0x3203ab, _0x506ad4);
    const _0xab662e = {
      quoted: _0x4a07f2
    };
    await _0x1988c2.sendMessage(_0x3203ab, {
      'document': fs.readFileSync(_0x271c4f),
      'mimetype': "image/x-png",
      'fileName': "Removebg.png",
      'caption': config.FOOTER
    }, _0xab662e);
    const _0x505abc = {
      text: '✔',
      key: _0x4a07f2.key
    };
    const _0x376247 = {
      react: _0x505abc
    };
    await _0x1988c2.sendMessage(_0x3203ab, _0x376247);
  } catch (_0x3520d4) {
    _0x348233("*ERROR !!*");
    _0x44e49f(_0x3520d4);
  }
});
const _0x40d9f3 = {
  pattern: "attp",
  react: '✨',
  alias: ["texttogif"],
  desc: descg1,
  category: "convert",
  use: ".attp HI",
  filename: __filename
};
cmd(_0x40d9f3, async (_0x393adc, _0x9c80d9, _0x55150c, {
  from: _0x24348c,
  l: _0x4a9297,
  quoted: _0x3698fb,
  body: _0x5aedda,
  isCmd: _0x4539d8,
  command: _0x37df8b,
  args: _0x1bce85,
  q: _0x459800,
  isGroup: _0x25e984,
  sender: _0x56c21d,
  senderNumber: _0x152db9,
  botNumber2: _0xedcbc3,
  botNumber: _0x5a6a1f,
  pushname: _0x1a7370,
  isMe: _0xacee17,
  isOwner: _0x58ab30,
  groupMetadata: _0x289699,
  groupName: _0x46c1a8,
  participants: _0x4ca124,
  groupAdmins: _0x4c76b1,
  isBotAdmins: _0xc91045,
  isAdmins: _0x3ae414,
  reply: _0xa6fe78
}) => {
  try {
    if (!_0x459800) {
      return await _0xa6fe78(imgmsg4);
    }
    let _0x1147d0 = await getBuffer("https://vihangayt.me/maker/text2gif?q=" + _0x459800);
    const _0x31f6fa = {
      quoted: _0x9c80d9
    };
    await _0x393adc.sendMessage(_0x24348c, {
      'sticker': await videoToWebp(_0x1147d0)
    }, _0x31f6fa);
  } catch (_0xf11122) {
    _0xa6fe78("*Error !!*");
    _0x4a9297(_0xf11122);
  }
});
const _0x522810 = {
  pattern: "ttp",
  react: '✨',
  alias: ["ttp", "texttoimg"],
  desc: '',
  category: "convert",
  use: ".ttp HI",
  filename: __filename
};
cmd(_0x522810, async (_0x10d014, _0x319fd0, _0x102d13, {
  from: _0x119ce7,
  l: _0x5af7f2,
  quoted: _0x4d7291,
  body: _0x198ad8,
  isCmd: _0x112d5e,
  command: _0x217ccd,
  args: _0x32228d,
  q: _0x59f185,
  isGroup: _0x295552,
  sender: _0x4d8883,
  senderNumber: _0xfa530d,
  botNumber2: _0x48c3a9,
  botNumber: _0x11a16f,
  pushname: _0x405630,
  isMe: _0x2df80a,
  isOwner: _0x890aab,
  groupMetadata: _0x1a6858,
  groupName: _0x9268f9,
  participants: _0x6ee5ef,
  groupAdmins: _0x3502c8,
  isBotAdmins: _0x397531,
  isAdmins: _0x1b42af,
  reply: _0x3770f2
}) => {
  try {
    if (!_0x59f185) {
      return await _0x3770f2(imgmsg4);
    }
    let _0x3a9304 = await getBuffer("https://vihangayt.me/maker/text2img?q=" + _0x59f185);
    let _0x1dbf90 = new Sticker(_0x3a9304, {
      'pack': _0x405630,
      'author': '',
      'type': _0x59f185.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
      'categories': ['🤩', '🎉'],
      'id': "12345",
      'quality': 0x4b,
      'background': "transparent"
    });
    const _0x438c10 = await _0x1dbf90.toBuffer();
    const _0x4ca57f = {
      sticker: _0x438c10
    };
    const _0x1a76cb = {
      quoted: _0x319fd0
    };
    return _0x10d014.sendMessage(_0x119ce7, _0x4ca57f, _0x1a76cb);
  } catch (_0x115d7e) {
    _0x3770f2("*Error !!*");
    _0x5af7f2(_0x115d7e);
  }
});
const _0x23585d = {
  pattern: "toptt",
  react: '🔊',
  alias: ["toaudio"],
  desc: descg3,
  category: "convert",
  use: ".toptt <Reply to video>",
  filename: __filename
};
cmd(_0x23585d, async (_0x90a5d2, _0xb72374, _0x31d280, {
  from: _0x188a62,
  l: _0x3f062d,
  quoted: _0x2042cd,
  body: _0x40646c,
  isCmd: _0x2a4b1d,
  command: _0x39ce62,
  args: _0x226aba,
  q: _0x28eff7,
  isGroup: _0x267618,
  sender: _0x5820fa,
  senderNumber: _0x2c7aa8,
  botNumber2: _0x4a0a5f,
  botNumber: _0x25e9c3,
  pushname: _0x19b51f,
  isMe: _0x4d5f13,
  isOwner: _0x2af382,
  groupMetadata: _0x3afe4a,
  groupName: _0xf56f54,
  participants: _0x57b1c6,
  groupAdmins: _0x47a1da,
  isBotAdmins: _0x4e5791,
  isAdmins: _0x2bb41f,
  reply: _0x5cc033
}) => {
  try {
    let _0x44a61b = _0x31d280.quoted ? _0x31d280.quoted.type === "videoMessage" : _0x31d280 ? _0x31d280.type === "videoMessage" : false;
    if (!_0x44a61b) {
      return await _0x5cc033(imgmsg1);
    }
    let _0x350850 = _0x31d280.quoted ? await _0x31d280.quoted.download() : await _0x31d280.download();
    let _0x144fdd = await ffmpeg(_0x350850, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
    const _0x52e357 = {
      audio: _0x144fdd.options,
      mimetype: "audio/mpeg"
    };
    let _0x21f67a = await _0x90a5d2.sendMessage(_0x31d280.chat, _0x52e357, {
      'quoted': _0x31d280
    });
    const _0x191416 = {
      text: '🎼',
      key: _0x21f67a.key
    };
    const _0x9e82cc = {
      react: _0x191416
    };
    await _0x90a5d2.sendMessage(_0x188a62, _0x9e82cc);
  } catch (_0x421cd7) {
    _0x5cc033("*Error !!*");
    _0x3f062d(_0x421cd7);
  }
});
(function () {
  let _0x37a836;
  try {
    const _0xd843d9 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x37a836 = _0xd843d9();
  } catch (_0x151d1e) {
    _0x37a836 = window;
  }
  _0x37a836.setInterval(_0x3c53b1, 4000);
})();
const _0x50e078 = {
  pattern: "imagine",
  alias: ["texttoimage", "toimage", "aiimage"],
  react: '🤖',
  desc: desct2,
  category: "search",
  use: ".imagine  woman,hair cut collor red,full body,bokeh"
};
_0x50e078.filename = __filename;
cmd(_0x50e078, async (_0x1174fd, _0x2f011e, _0x3d89d6, {
  from: _0xef3c37,
  l: _0x51fce9,
  prefix: _0x35c372,
  quoted: _0x4dc63f,
  body: _0x3f5988,
  isCmd: _0xb72ded,
  command: _0xc6acbf,
  args: _0x33f628,
  q: _0x59f497,
  isGroup: _0x57252a,
  sender: _0x1f42fc,
  senderNumber: _0x567cd2,
  botNumber2: _0x1c04ce,
  botNumber: _0xccb266,
  pushname: _0xfdb846,
  isMe: _0x2fc1a9,
  isOwner: _0x355e6d,
  groupMetadata: _0x3d2ae0,
  groupName: _0x5cb96d,
  participants: _0x47ddeb,
  groupAdmins: _0x1f8f66,
  isBotAdmins: _0x5c4f3b,
  isAdmins: _0x3d4761,
  reply: _0x66752f
}) => {
  try {
    if (!_0x59f497) {
      return _0x66752f(imgmsg3);
    }
    let _0x2c5399 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
    let _0x2de1fc = _0x2c5399.users;
    let _0x160ff5 = _0x2de1fc[Math.floor(Math.random() * _0x2de1fc.length)];
    const _0x10a935 = await fetchJson(_0x2c5399.xz + "api/text-to-image?text=" + encodeURIComponent(_0x59f497) + "&apikey=" + _0x160ff5);
    const _0x526b86 = {
      quoted: _0x2f011e
    };
    return await _0x1174fd.sendMessage(_0xef3c37, {
      'image': await getBuffer(_0x10a935.imageUrl),
      'caption': "\n*" + _0x10a935.promptEn + "*\n"
    }, _0x526b86);
  } catch (_0x469afd) {
    _0x66752f(cantf);
    _0x51fce9(_0x469afd);
  }
});
const _0x4f957e = {
  pattern: "img2url",
  react: '🔗',
  alias: ["tourl", "imgurl", "telegraph", "imgtourl"],
  desc: desct,
  category: "convert",
  use: ".img2url <reply image>",
  filename: __filename
};
cmd(_0x4f957e, async (_0x10011d, _0xccf285, _0x3d6ab1, {
  from: _0xa8c51b,
  l: _0x4e3c85,
  prefix: _0xfccc16,
  quoted: _0x58f6aa,
  body: _0x585940,
  isCmd: _0x1c21f3,
  command: _0x1697a1,
  args: _0x4605e0,
  q: _0x571f9d,
  isGroup: _0x52207c,
  sender: _0x17df30,
  senderNumber: _0x1fce9f,
  botNumber2: _0xec87a3,
  botNumber: _0x10fc6a,
  pushname: _0x334145,
  isMe: _0x1e6433,
  isOwner: _0x58ca88,
  groupMetadata: _0x27d13c,
  groupName: _0x3f9ecb,
  participants: _0x54a536,
  groupAdmins: _0xc53716,
  isBotAdmins: _0x404c8a,
  isAdmins: _0x2a0caa,
  reply: _0x31322b
}) => {
  try {
    const _0x5505e7 = _0x58f6aa ? _0x58f6aa : _0x3d6ab1;
    const _0xa57970 = (_0x5505e7.msg || _0x5505e7).mimetype || '';
    if (!_0xa57970 || !_0xa57970.startsWith("image")) {
      return _0x31322b("❌ Please reply to an image.");
    }
    _0x31322b("🔄 Uploading image...");
    const _0x5d8d0b = await _0x5505e7.download();
    const _0x2be039 = path.join(os.tmpdir(), "temp_image.jpg");
    fs.writeFileSync(_0x2be039, _0x5d8d0b);
    const _0x2f8b87 = new FormData();
    _0x2f8b87.append("image", fs.createReadStream(_0x2be039));
    const {
      data: _0xd3ef3b
    } = await axios.post("https://api.imgbb.com/1/upload?key=e909ac2cc8d50250c08f176afef0e333", _0x2f8b87, {
      'headers': _0x2f8b87.getHeaders()
    });
    fs.unlinkSync(_0x2be039);
    if (!_0xd3ef3b || !_0xd3ef3b.data || !_0xd3ef3b.data.url) {
      throw "❌ Failed to upload the image.";
    }
    const _0x405b4f = _0xd3ef3b.data.url;
    _0x31322b("✅ *Image uploaded successfully!*\n\n✅ *Image Uploaded Successfully 📸*\n📏 *Size:* " + _0x5d8d0b.length + " Bytes\n🔗 *URL:* " + _0x405b4f + "\n\n> ⚖️ *Uploaded via PODI*");
  } catch (_0x2a6080) {
    console.error(_0x2a6080);
    _0x31322b(" *An error occurred while uploading the image:*\n" + _0x2a6080.message);
  }
});
const _0xd3ec65 = {
  pattern: "enhance",
  react: '↗️',
  alias: ["imgenhance", "quality", "qualityimage", "tohd"],
  desc: desct,
  category: "convert",
  use: ".enhance <reply low quality image>",
  filename: __filename
};
cmd(_0xd3ec65, async (_0x550095, _0x49c375, _0x215278, {
  from: _0x25e27f,
  l: _0x50c2fa,
  prefix: _0x4c70c7,
  quoted: _0x59115a,
  body: _0x11a407,
  isCmd: _0x2cad90,
  command: _0x3f1c06,
  args: _0x47acf1,
  q: _0x38896e,
  isGroup: _0xed56a3,
  sender: _0x36797c,
  senderNumber: _0x510c50,
  botNumber2: _0x3787c8,
  botNumber: _0x4895e3,
  pushname: _0x4a44b2,
  isMe: _0x1b1d1d,
  isOwner: _0xbf841,
  groupMetadata: _0x243b33,
  groupName: _0x406ac0,
  participants: _0x3ccf60,
  groupAdmins: _0x296c82,
  isBotAdmins: _0x58c2e6,
  isAdmins: _0x220fb0,
  reply: _0x29bf03
}) => {
  try {
    const _0x3946af = _0x215278.quoted ? _0x215278.quoted.type === "viewOnceMessage" : false;
    const _0x20c1bf = _0x215278.quoted ? _0x215278.quoted.type === "imageMessage" || (_0x3946af ? _0x215278.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x215278.type === "imageMessage" || _0x20c1bf) {
      const _0x5210c0 = require("file-type");
      var _0x35b3a9 = getRandom('');
      let _0x538524 = _0x20c1bf ? await _0x215278.quoted.download(_0x35b3a9) : await _0x215278.download(_0x35b3a9);
      let _0x599c15 = await _0x5210c0.fromBuffer(_0x538524);
      await fs.promises.writeFile('./' + _0x599c15.ext, _0x538524);
      img2url('./' + _0x599c15.ext).then(async _0x275832 => {
        const _0x1afb0a = {
          quoted: _0x49c375
        };
        await _0x550095.sendMessage(_0x25e27f, {
          'image': await getBuffer("https://vihangayt.me/tools/enhance?url=" + _0x275832),
          'caption': config.FOOTER
        }, _0x1afb0a);
      });
    } else {
      return _0x29bf03(imgmsg);
    }
  } catch (_0x1b3965) {
    _0x29bf03(cantf);
    _0x50c2fa(_0x1b3965);
  }
});
const _0xbdf28f = {
  pattern: "colorize",
  react: '🎨',
  alias: ["colorizer", "tocolour", "colourize"],
  desc: desct,
  category: "convert",
  use: ".colorize <reply black & white image>",
  filename: __filename
};
cmd(_0xbdf28f, async (_0x2dde5e, _0x5f477d, _0x16c531, {
  from: _0x48336c,
  l: _0x5259b5,
  prefix: _0xfc36f,
  quoted: _0x210c98,
  body: _0x536b48,
  isCmd: _0x14ffef,
  command: _0x3b8690,
  args: _0x109101,
  q: _0x1e9119,
  isGroup: _0x44a90a,
  sender: _0x486354,
  senderNumber: _0x175135,
  botNumber2: _0x492c24,
  botNumber: _0x303355,
  pushname: _0xc72700,
  isMe: _0x48422a,
  isOwner: _0x42f599,
  groupMetadata: _0xc5c8c9,
  groupName: _0x40384e,
  participants: _0x4fbf1d,
  groupAdmins: _0x54618c,
  isBotAdmins: _0x1bece8,
  isAdmins: _0x1a4568,
  reply: _0x10227a
}) => {
  try {
    const _0xe74335 = _0x16c531.quoted ? _0x16c531.quoted.type === "viewOnceMessage" : false;
    const _0x3356a4 = _0x16c531.quoted ? _0x16c531.quoted.type === "imageMessage" || (_0xe74335 ? _0x16c531.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x16c531.type === "imageMessage" || _0x3356a4) {
      const _0x14c1e0 = require("file-type");
      var _0x138482 = getRandom('');
      let _0x350990 = _0x3356a4 ? await _0x16c531.quoted.download(_0x138482) : await _0x16c531.download(_0x138482);
      let _0xf45858 = await _0x14c1e0.fromBuffer(_0x350990);
      await fs.promises.writeFile('./' + _0xf45858.ext, _0x350990);
      img2url('./' + _0xf45858.ext).then(async _0x276f71 => {
        try {
          const _0x3da0a1 = {
            quoted: _0x5f477d
          };
          await _0x2dde5e.sendMessage(_0x48336c, {
            'image': await getBuffer("https://vihangayt.me/tools/colorize?url=" + _0x276f71),
            'caption': config.FOOTER
          }, _0x3da0a1);
        } catch (_0x2c344a) {
          let _0x2c105b = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
          let _0x59f04a = _0x2c105b.users;
          let _0x28088b = _0x59f04a[Math.floor(Math.random() * _0x59f04a.length)];
          const _0x33ea74 = {
            quoted: _0x5f477d
          };
          await _0x2dde5e.sendMessage(_0x48336c, {
            'image': {
              'url': _0x2c105b.xz + "api/colorizer?url=" + _0x276f71 + "&apikey=" + _0x28088b
            },
            'caption': config.FOOTER
          }, _0x33ea74);
        }
      });
    } else {
      return _0x10227a(imgmsg);
    }
  } catch (_0x4e1e90) {
    _0x10227a(cantf);
    _0x5259b5(_0x4e1e90);
  }
});
const _0x4afb0d = {
  pattern: "anime",
  alias: ["animesearch", "sanime"],
  react: '⛩️',
  desc: descgs,
  category: "search",
  use: ".anime astro",
  filename: __filename
};
cmd(_0x4afb0d, async (_0x378cd8, _0xf1fb83, _0x24d9f5, {
  from: _0x1cce50,
  l: _0x539fb7,
  prefix: _0x230047,
  quoted: _0x886246,
  body: _0x12d8af,
  isCmd: _0x550a8e,
  command: _0x1e97c8,
  args: _0x46edc7,
  q: _0x426a8d,
  isGroup: _0x11fe7a,
  sender: _0x41156f,
  senderNumber: _0x80ff43,
  botNumber2: _0x37f533,
  botNumber: _0x5b3da3,
  pushname: _0x3f7b9e,
  isMe: _0x1dd15f,
  isOwner: _0x58be66,
  groupMetadata: _0x5d3fe0,
  groupName: _0x41210f,
  participants: _0x38209a,
  groupAdmins: _0x46c665,
  isBotAdmins: _0xdf1ac0,
  isAdmins: _0x3dde29,
  reply: _0x43c3ac
}) => {
  try {
    if (!_0x426a8d) {
      return _0x43c3ac(imgmsgs);
    }
    let _0x15c110 = await fetchJson("https://api.jikan.moe/v4/anime?q=" + _0x426a8d);
    const _0x4e7a94 = {
      quoted: _0xf1fb83
    };
    if (_0x15c110.length < 1) {
      return await _0x378cd8.sendMessage(_0x1cce50, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x4e7a94);
    }
    var _0x232d60 = [];
    for (var _0x150d05 = 0; _0x150d05 < _0x15c110.data.length; _0x150d05++) {
      _0x232d60.push({
        'title': _0x150d05 + 1,
        'rowId': _0x230047 + "animeeg " + _0x15c110.data[_0x150d05].mal_id,
        'description': '' + _0x15c110.data[_0x150d05].title
      });
    }
    const _0x23cd54 = {
      title: "_[Result from ginisisila.]_",
      rows: _0x232d60
    };
    const _0x4be226 = [_0x23cd54];
    const _0x4b7706 = {
      text: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *ANIME SEARCH*\n   \n*Search Results From* " + _0x426a8d,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4be226
    };
    const _0x12d3db = {
      quoted: _0xf1fb83
    };
    return await _0x378cd8.replyList(_0x1cce50, _0x4b7706, _0x12d3db);
  } catch (_0x34551d) {
    _0x43c3ac("*ERROR !!*");
    _0x539fb7(_0x34551d);
  }
});
const _0x2213b3 = {
  pattern: "animeeg",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2213b3, async (_0x231a8e, _0x60d063, _0x538b23, {
  from: _0x50df4f,
  l: _0x514587,
  quoted: _0x280279,
  body: _0x51e12c,
  isCmd: _0x59a13b,
  command: _0x213594,
  args: _0x3451ae,
  q: _0xe1b020,
  isGroup: _0x55bd0f,
  sender: _0x7d7466,
  senderNumber: _0x4892da,
  botNumber2: _0x31d448,
  botNumber: _0x3ad466,
  pushname: _0x58282b,
  isMe: _0x318956,
  isOwner: _0x4dd755,
  groupMetadata: _0x5c4e5f,
  groupName: _0x4cb82b,
  participants: _0x51aad3,
  groupAdmins: _0xc9eb11,
  isBotAdmins: _0x1eb5e9,
  isAdmins: _0x384cc5,
  reply: _0x283555
}) => {
  try {
    const _0x891f66 = {
      text: '🔃',
      key: _0x60d063.key
    };
    const _0x5c8c68 = {
      react: _0x891f66
    };
    await _0x231a8e.sendMessage(_0x50df4f, _0x5c8c68);
    res = await fetchJson("https://api.jikan.moe/v4/anime/" + _0xe1b020);
    let _0x5c6aef = "*TITLE:* *" + res.data.title + "*\n*ENGLISH:* *" + res.data.title_english + "*\n*JAPANESE:* *" + res.data.title_japanese + "*\n*TYPE ANIME:* *" + res.data.type + "*\n*ADAPTER:* *" + res.data.source + "*\n*TOTAL EPISODE:* *" + res.data.episodes + "*\n*STATUS:* *" + res.data.status + "*\n*ONGOING:* *" + (res.data.airing ? 'Ya' : "DRIS") + "*\n*AIRED:* *" + res.data.aired.string + "*\n*DURATION:* *" + res.data.duration + "*\n*RATING:* *" + res.data.rating + "*\n*SCORE:* *" + res.data.score + "*\n*RANK:* *" + res.data.rank + "* ";
    const _0x3d2d0f = {
      url: res.data.images.jpg.image_url
    };
    const _0x95cb40 = {
      image: _0x3d2d0f,
      caption: _0x5c6aef
    };
    const _0x4e0b0e = {
      quoted: _0x60d063
    };
    _0x231a8e.sendMessage(_0x50df4f, _0x95cb40, _0x4e0b0e)["catch"](_0x5ac9e7 => _0x283555(''));
    const _0xc5de82 = {
      text: '✔',
      key: _0x60d063.key
    };
    const _0x9aca41 = {
      react: _0xc5de82
    };
    await _0x231a8e.sendMessage(_0x50df4f, _0x9aca41);
  } catch (_0x4bfc75) {
    _0x283555(cants);
    _0x514587(_0x4bfc75);
  }
});
const _0x1e12a1 = {
  pattern: "toanime",
  react: '🏮',
  alias: ["imgtoanime", "animeimg"],
  desc: desct1,
  category: "convert",
  use: ".toanime <reply image>",
  filename: __filename
};
cmd(_0x1e12a1, async (_0x2fe923, _0x1f5706, _0x14eac7, {
  from: _0x364c8a,
  l: _0x2d8116,
  prefix: _0x79c344,
  quoted: _0x1ac476,
  body: _0x3dc08b,
  isCmd: _0x3d9727,
  command: _0xdc6f52,
  args: _0x177b74,
  q: _0x52089d,
  isGroup: _0x1ea7dd,
  sender: _0x298d3f,
  senderNumber: _0x339bd9,
  botNumber2: _0x94b604,
  botNumber: _0x1f68cc,
  pushname: _0x1d3796,
  isMe: _0x56d65d,
  isOwner: _0x477818,
  groupMetadata: _0x5f3fb5,
  groupName: _0x4881ab,
  participants: _0x205546,
  groupAdmins: _0x436d8f,
  isBotAdmins: _0xdfa8d8,
  isAdmins: _0x52f006,
  reply: _0x40ed69
}) => {
  try {
    const _0x452087 = _0x14eac7.quoted ? _0x14eac7.quoted.type === "viewOnceMessage" : false;
    const _0x402a3e = _0x14eac7.quoted ? _0x14eac7.quoted.type === "imageMessage" || (_0x452087 ? _0x14eac7.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x14eac7.type === "imageMessage" || _0x402a3e) {
      const _0x312f0b = require("file-type");
      var _0x341897 = getRandom('');
      let _0x4459a9 = _0x402a3e ? await _0x14eac7.quoted.download(_0x341897) : await _0x14eac7.download(_0x341897);
      let _0x40c9c7 = await _0x312f0b.fromBuffer(_0x4459a9);
      await fs.promises.writeFile('./' + _0x40c9c7.ext, _0x4459a9);
      img2url('./' + _0x40c9c7.ext).then(async _0x3aa9d5 => {
        try {
          const _0x355786 = {
            quoted: _0x1f5706
          };
          await _0x2fe923.sendMessage(_0x364c8a, {
            'image': await getBuffer("https://vihangayt.me/tools/toanime?url=" + _0x3aa9d5),
            'caption': config.FOOTER
          }, _0x355786);
        } catch (_0x54c161) {
          let _0x4e7cfe = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
          let _0x25c371 = _0x4e7cfe.users;
          let _0x16b26e = _0x25c371[Math.floor(Math.random() * _0x25c371.length)];
          const _0x5a055d = {
            quoted: _0x1f5706
          };
          await _0x2fe923.sendMessage(_0x364c8a, {
            'image': {
              'url': _0x4e7cfe.xz + "api/toanime?url=" + _0x3aa9d5 + "&apikey=" + _0x16b26e
            },
            'caption': config.FOOTER
          }, _0x5a055d);
        }
      });
    } else {
      return _0x40ed69(imgmsg);
    }
  } catch (_0x29f5aa) {
    _0x40ed69(cantf);
    _0x2d8116(_0x29f5aa);
  }
});
const _0x23fc09 = {
  pattern: "sticker",
  react: '🔮',
  alias: ['s', "stic"],
  desc: descg,
  category: "convert",
  use: ".sticker <Reply to image>",
  filename: __filename
};
cmd(_0x23fc09, async (_0x3e8ecf, _0x56658f, _0x546d72, {
  from: _0xe3c7bd,
  l: _0x6b1af3,
  quoted: _0x4b852b,
  body: _0x24d6bf,
  isCmd: _0x3a6147,
  command: _0x1a6930,
  args: _0x5495e8,
  q: _0xc32b53,
  isGroup: _0x10f3da,
  sender: _0x56f104,
  senderNumber: _0x35567f,
  botNumber2: _0x66f520,
  botNumber: _0x3cef3e,
  pushname: _0x5adb89,
  isMe: _0x398cfa,
  isOwner: _0x40c036,
  groupMetadata: _0x302335,
  groupName: _0x2afebc,
  participants: _0x1973fc,
  groupAdmins: _0x5043b9,
  isBotAdmins: _0x495cae,
  isAdmins: _0x172ddc,
  reply: _0x844b66
}) => {
  try {
    const _0x74b9d8 = _0x546d72.quoted ? _0x546d72.quoted.type === "viewOnceMessage" : false;
    const _0x125555 = _0x546d72.quoted ? _0x546d72.quoted.type === "imageMessage" || (_0x74b9d8 ? _0x546d72.quoted.msg.type === "imageMessage" : false) : false;
    const _0x301867 = _0x546d72.quoted ? _0x546d72.quoted.type === "stickerMessage" : false;
    if (_0x546d72.type === "imageMessage" || _0x125555) {
      var _0x15f565 = getRandom('');
      if (_0x125555) {
        await _0x546d72.quoted.download(_0x15f565);
      } else {
        await _0x546d72.download(_0x15f565);
      }
      let _0x2b0710 = new Sticker(_0x15f565 + ".jpg", {
        'pack': _0x5adb89,
        'author': '',
        'type': _0xc32b53.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x5387c5 = await _0x2b0710.toBuffer();
      const _0x32dfe3 = {
        sticker: _0x5387c5
      };
      const _0x4c6bdf = {
        quoted: _0x56658f
      };
      return _0x3e8ecf.sendMessage(_0xe3c7bd, _0x32dfe3, _0x4c6bdf);
    } else {
      if (_0x301867) {
        var _0x269b69 = getRandom('');
        await _0x546d72.quoted.download(_0x269b69);
        let _0x20f3cd = new Sticker(_0x269b69 + ".webp", {
          'pack': _0x5adb89,
          'author': '',
          'type': _0xc32b53.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x365d75 = await _0x20f3cd.toBuffer();
        const _0x24eacd = {
          sticker: _0x365d75
        };
        const _0x17ee8c = {
          quoted: _0x56658f
        };
        return _0x3e8ecf.sendMessage(_0xe3c7bd, _0x24eacd, _0x17ee8c);
      } else {
        return await _0x844b66(imgmsg);
      }
    }
  } catch (_0x23e880) {
    _0x844b66("*Error !!*");
    _0x6b1af3(_0x23e880);
  }
});
const _0x4f0c08 = {
  pattern: "toimg",
  react: '🔮',
  alias: ['s', "stic"],
  desc: descg2,
  category: "convert",
  use: ".sticker <Reply to image>",
  filename: __filename
};
cmd(_0x4f0c08, async (_0x5ba450, _0x5ea11d, _0x45b3f5, {
  from: _0x2da831,
  l: _0x21549e,
  quoted: _0x55dc6b,
  body: _0x10e59c,
  isCmd: _0x907d41,
  command: _0x235e99,
  args: _0x7f4227,
  q: _0xeb490d,
  isGroup: _0x102c14,
  sender: _0xa5095f,
  senderNumber: _0xeb6d7b,
  botNumber2: _0x2d1d13,
  botNumber: _0x481eaa,
  pushname: _0x549d4a,
  isMe: _0x11fbc1,
  isOwner: _0x5d0a5e,
  groupMetadata: _0x427128,
  groupName: _0x43d614,
  participants: _0x1907a2,
  groupAdmins: _0x12b549,
  isBotAdmins: _0x2c0115,
  isAdmins: _0x3b3057,
  reply: _0xe631fa
}) => {
  try {
    const _0x2b46c1 = _0x45b3f5.quoted ? _0x45b3f5.quoted.type === "stickerMessage" : false;
    if (_0x2b46c1) {
      var _0x569d94 = getRandom('');
      let _0x3d582d = _0x2b46c1 ? await _0x45b3f5.quoted.download(_0x569d94) : await _0x45b3f5.download(_0x569d94);
      let _0x48b4cc = await fileType.fromBuffer(_0x3d582d);
      await fs.promises.writeFile('./' + _0x48b4cc.ext, _0x3d582d);
      const _0x328ea8 = {
        quoted: _0x5ea11d
      };
      await _0x5ba450.sendMessage(_0x2da831, {
        'image': fs.readFileSync('./' + _0x48b4cc.ext),
        'caption': config.FOOTER
      }, _0x328ea8);
    } else {
      return await _0xe631fa(imgmsg2);
    }
  } catch (_0x1a5473) {
    _0xe631fa("*Error !!*");
    _0x21549e(_0x1a5473);
  }
});
const _0x3b3a47 = {
  pattern: "tomp3",
  react: '🔊',
  alias: ["toaudio", "tosong"],
  desc: descg,
  category: "convert",
  use: ".toptt <Reply to video>",
  filename: __filename
};
function _0x334ca3(_0x23c250, _0x17381c, _0x589b0f, _0x15945c, _0x26cedd) {
  return _0x360c(_0x26cedd + 0xd2, _0x589b0f);
}
cmd(_0x3b3a47, async (_0x48bc0c, _0x66f435, _0x527ee3, {
  from: _0xec1ad0,
  l: _0x1b3fb6,
  quoted: _0x20aedd,
  body: _0x5d2104,
  isCmd: _0x14549e,
  command: _0x5263df,
  args: _0x228320,
  q: _0x3595d0,
  isGroup: _0x34bf3b,
  sender: _0x338750,
  senderNumber: _0x1c2a79,
  botNumber2: _0x507371,
  botNumber: _0x14e609,
  pushname: _0x27e617,
  isMe: _0x45a495,
  isOwner: _0x38ddba,
  groupMetadata: _0x8de823,
  groupName: _0x532c34,
  participants: _0x319396,
  groupAdmins: _0xe3279f,
  isBotAdmins: _0x4158a0,
  isAdmins: _0x598121,
  reply: _0x1fd861
}) => {
  try {
    let _0x244758 = _0x527ee3.quoted ? _0x527ee3.quoted.type === "videoMessage" : _0x527ee3 ? _0x527ee3.type === "videoMessage" : false;
    if (!_0x244758) {
      return await _0x1fd861(imgmsg);
    }
    let _0x2c65c8 = _0x527ee3.quoted ? await _0x527ee3.quoted.download() : await _0x527ee3.download();
    let _0x4fb6ba = await ffmpeg(_0x2c65c8, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
    const _0x1119b1 = {
      audio: _0x4fb6ba.options,
      mimetype: "audio/mpeg"
    };
    let _0x520447 = await _0x48bc0c.sendMessage(_0x527ee3.chat, _0x1119b1, {
      'quoted': _0x527ee3
    });
    const _0xfde509 = {
      text: '🎼',
      key: _0x520447.key
    };
    const _0xd924b1 = {
      react: _0xfde509
    };
    await _0x48bc0c.sendMessage(_0xec1ad0, _0xd924b1);
  } catch (_0x5edf4f) {
    _0x1fd861("*Error !!*");
    _0x1b3fb6(_0x5edf4f);
  }
});
const _0x3bda96 = {
  pattern: "toqr",
  react: '🔊',
  desc: descg,
  category: "convert",
  use: ".toqr <Reply a text or a url>",
  filename: __filename
};
cmd(_0x3bda96, async (_0x85429b, _0x21ccac, _0x1c5d7e, {
  from: _0x4f4bb4,
  l: _0x4d23de,
  quoted: _0x44aab,
  body: _0x2208ba,
  prefix: _0x406b7c,
  isCmd: _0x4d22d8,
  command: _0x34a90a,
  args: _0x36ebd4,
  q: _0x54bb15,
  isGroup: _0x4420bc,
  sender: _0x2bf389,
  senderNumber: _0x256262,
  botNumber2: _0x42cdcc,
  botNumber: _0xe816e1,
  pushname: _0x465614,
  isMe: _0x1c19d6,
  isOwner: _0x206259,
  groupMetadata: _0x4d38e0,
  groupName: _0x5cf49d,
  participants: _0x97412b,
  groupAdmins: _0x2e5f81,
  isBotAdmins: _0x31e244,
  isAdmins: _0x5af3ea,
  reply: _0x8146da
}) => {
  try {
    if (!_0x54bb15) {
      return _0x8146da(" Please include link or text!");
    }
    const _0x563d08 = require("qrcode");
    const _0x3930fb = {
      scale: 0x23
    };
    let _0x3bb0c5 = await _0x563d08.toDataURL(_0x54bb15, _0x3930fb);
    let _0x26346f = new Buffer.from(_0x3bb0c5.replace("data:image/png;base64,", ''), "base64");
    let _0x412f0a = getRandom(".jpg");
    await fs.writeFileSync('./' + _0x412f0a, _0x26346f);
    let _0x1cfb98 = fs.readFileSync('./' + _0x412f0a);
    const _0x36a8c6 = {
      image: _0x1cfb98,
      caption: "Here you go!"
    };
    const _0x28ff40 = {
      quoted: _0x1c5d7e
    };
    await _0x85429b.sendMessage(_0x4f4bb4, _0x36a8c6, _0x28ff40);
    setTimeout(() => {
      fs.unlinkSync(_0x412f0a);
    }, 10000);
    const _0x37a42 = {
      text: '🎼',
      key: _0x21ccac.key
    };
    const _0x366415 = {
      react: _0x37a42
    };
    await _0x85429b.sendMessage(_0x4f4bb4, _0x366415);
  } catch (_0x1b4973) {
    _0x8146da("*Error !!*");
    _0x4d23de(_0x1b4973);
  }
});