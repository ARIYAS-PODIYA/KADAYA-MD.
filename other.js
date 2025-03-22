const config = require("../settings");
const {
  cmd,
  commands
} = require("../lib/command");
const fonts = require("../lib/font.js");
const availableStyles = Object.keys(fonts);
var os = require('os');
const fs = require('fs');
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
const fg = require("api-dylux");
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const vm = require('vm');
const jsobfus = require("javascript-obfuscator");
const crypto = require("crypto");
const {
  default: makeWASocket,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require("@whiskeysockets/baileys");
var desct = "It search on chatgpt ai for what you provided.";
var needus = "*Please give me words to search on chatgpt ai !*";
var cantf = "*Server is busy. Try again later.!*";
function formatDate(_0xaff18e) {}
async function obfus(_0xbb4e4d) {
  return new Promise((_0x38f999, _0x2146bb) => {
    try {
      const _0x3d3bc8 = {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0x1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 0x1
      };
      const _0x207ae9 = jsobfus.obfuscate(_0xbb4e4d, _0x3d3bc8);
      const _0x194764 = {
        'status': 0xc8,
        'author': "PODIYA",
        'result': _0x207ae9.getObfuscatedCode()
      };
      _0x38f999(_0x194764);
    } catch (_0x303b0b) {
      _0x2146bb(_0x303b0b);
    }
  });
}
function convertToFontStyle(_0x45b2fc, _0x1d0a63) {
  let _0xa7cdbe = '';
  if (fonts[_0x1d0a63]) {
    for (const _0x7c9334 of _0x45b2fc) {
      _0xa7cdbe += fonts[_0x1d0a63][_0x7c9334] || _0x7c9334;
    }
  } else {
    _0xa7cdbe = _0x45b2fc;
  }
  return _0xa7cdbe;
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.";
} else {
  desct = "It search on chatgpt ai for what you provided.";
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*";
} else {
  needus = "*Please give me words to search on chatgpt ai !*";
}
var cantf = '';
if (config.LANG === 'SI') {
  cantf = "*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*";
} else {
  cantf = "*Server is busy. Try again later.!*";
}
async function logo(_0x341dfb) {
  try {
    const {
      data: _0x478bde
    } = await axios.post("https://boredhumans.com/apis/boredagi_api.php", "prompt=" + _0x341dfb.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
      'headers': {
        'User-Agent': "Googlebot-News",
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
    const _0x343565 = _0x478bde.output.match(/src="([^"]+)"/)[1];
    return _0x343565;
  } catch (_0x22bce7) {
    return _0x22bce7;
  }
}
const _0x799dfa = {
  pattern: "fuck",
  filename: __filename
};
cmd(_0x799dfa, async (_0x13078c, _0x948f97, _0xefb89c, {
  from: _0x142d63,
  prefix: _0x427ff4,
  l: _0x2ba267,
  quoted: _0x10d38d,
  body: _0x826973,
  isCmd: _0x4db8c6,
  command: _0x2bd500,
  args: _0x17f055,
  q: _0x52c972,
  isGroup: _0x341cd7,
  sender: _0x398843,
  senderNumber: _0x283e7a,
  botNumber2: _0x441b8c,
  botNumber: _0x1d045b,
  pushname: _0x43fd74,
  isMe: _0x21864f,
  isOwner: _0x3cda2c,
  groupMetadata: _0x92384e,
  groupName: _0x774105,
  participants: _0x46c2a3,
  groupAdmins: _0x3ed243,
  isBotAdmins: _0x4e86d9,
  isAdmins: _0x14443b,
  reply: _0x27d3f9
}) => {
  try {
    if (!_0x21864f) {
      return _0x27d3f9("ℹ️ *හුකපන් උබ..*");
    }
    if (!_0x52c972) {
      return _0x948f97.reply("පුක සුදුද");
    }
    const _0xd3275c = _0x52c972.split('|')[0];
    const _0x31bce6 = _0x52c972.split('|')[1];
    const _0x8e56a5 = _0x52c972.split('|')[2];
    let _0x4efc00 = 0;
    const _0x22231e = {};
    const _0x547c2f = _0x948f97.key.id;
    if (_0x22231e[_0x547c2f]) {
      return _0x948f97.reply("PODIYA MD SERVER ACTIVATE");
    }
    _0x22231e[_0x547c2f] = true;
    const _0x27b70d = '' + _0x31bce6;
    while (_0x4efc00 < _0x8e56a5) {
      const _0x45a964 = {
        text: _0x27b70d,
        mentions: [_0x948f97.sender]
      };
      _0x13078c.sendMessage(_0xd3275c + "@s.whatsapp.net", _0x45a964);
      _0x4efc00++;
    }
    const _0x30bb62 = {
      text: '✅',
      key: _0x948f97.key
    };
    const _0x1766fa = {
      react: _0x30bb62
    };
    await _0x13078c.sendMessage(_0x142d63, _0x1766fa);
  } catch (_0x470c3b) {
    _0x27d3f9("*Error !!*");
    _0x2ba267(_0x470c3b);
  }
});
const _0x444d1d = {
  pattern: "tempnumber",
  category: "other",
  react: '🎬',
  desc: "temp number taker",
  use: ".temp number",
  filename: __filename
};
cmd(_0x444d1d, async (_0x30a180, _0x293557, _0x1bad62, {
  reply: _0x34dec9,
  isDev: _0x463eb1,
  from: _0x464a9e,
  l: _0x549ab0,
  q: _0x470580,
  prefix: _0x43b33b
}) => {
  try {
    const _0x5ed31c = await axios.get("https://receive-smss.com/");
    const _0x2556f3 = cheerio.load(_0x5ed31c.data);
    const _0x2f9338 = [];
    _0x2556f3("div.number-boxes > div").each((_0x47f8df, _0x272fef) => {
      const _0x5a5a2a = _0x2556f3(_0x272fef).find("div.number-boxes-item-country.number-boxess-item-country").text().trim();
      const _0x323f52 = _0x2556f3(_0x272fef).find("div.number-boxes-itemm-number").text();
      const _0x1357d3 = _0x2556f3(_0x272fef).find('a').attr("href");
      const _0x2eeec0 = "https://receive-smss.com" + _0x1357d3;
      const _0x244e07 = {
        country: _0x5a5a2a,
        number: _0x323f52,
        link: _0x2eeec0
      };
      _0x2f9338.push(_0x244e07);
    });
    const _0x10cd68 = {
      quoted: _0x293557
    };
    if (_0x2f9338.length < 1) {
      return await _0x30a180.sendMessage(_0x464a9e, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x10cd68);
    }
    var _0x315ce9 = [];
    for (var _0x3ade8d = 0; _0x3ade8d < _0x2f9338.length; _0x3ade8d++) {
      _0x315ce9.push({
        'title': _0x3ade8d + 1,
        'description': _0x2f9338[_0x3ade8d].country + " | " + _0x2f9338[_0x3ade8d].number,
        'rowId': _0x43b33b + "temps " + _0x2f9338[_0x3ade8d].link
      });
    }
    const _0x1ba948 = {
      title: "*TEMP NUMBER*\n",
      rows: _0x315ce9
    };
    const _0xebe948 = [_0x1ba948];
    const _0x58b674 = {
      url: "https://i.ibb.co/fN62gHg/unnamed.png"
    };
    const _0x4a438a = {
      image: _0x58b674,
      caption: "VAJIRA MD TEMP-NUMBER\n",
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0xebe948
    };
    const _0x4b89fd = {
      quoted: _0x293557
    };
    return await _0x30a180.replyList(_0x464a9e, _0x4a438a, _0x4b89fd);
  } catch (_0x1b8c78) {
    _0x34dec9("*ERROR !!*");
    _0x549ab0(_0x1b8c78);
  }
});
const _0x34a77f = {
  pattern: "temps",
  filename: __filename
};
cmd(_0x34a77f, async (_0x277da4, _0x40a16a, _0x235c94, {
  reply: _0x416107,
  isDev: _0x1a9209,
  from: _0xf9dbbe,
  l: _0x2d708d,
  q: _0x475610,
  prefix: _0x309c68
}) => {
  try {
    const _0x8779b7 = await axios.get(_0x475610);
    const _0x5e0a44 = cheerio.load(_0x8779b7.data);
    const _0x2c3c52 = _0x5e0a44("div.header-back-container > div > div > div > div > h3").text().trim();
    const _0x25c99a = _0x5e0a44("span > div > a").text();
    const _0x300e60 = _0x5e0a44("div > img").attr("src");
    const _0x22b535 = [];
    _0x5e0a44("div > div.row.message_details").each((_0x2959ac, _0x26ad26) => {
      const _0x1da530 = _0x5e0a44(_0x26ad26).find("div.col-md-6.msgg > span").text();
      const _0x258d75 = _0x5e0a44(_0x26ad26).find("div.col-md-3.senderr > a").text();
      const _0x28858e = _0x5e0a44(_0x26ad26).find("div.col-md-3.time").text().replace(/Time/g, '');
      const _0x44f7de = {
        message: _0x1da530,
        sender: _0x258d75,
        time: _0x28858e
      };
      _0x22b535.push(_0x44f7de);
    });
    let _0x3769cb = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗧𝗘𝗠𝗣𝗡𝗨𝗠𝗕𝗘𝗥 👨‍💻\n\nName: " + _0x2c3c52 + "\nNumber: " + _0x25c99a + "\n\n";
    for (var _0x1deef5 = 0; _0x1deef5 < _0x22b535.length; _0x1deef5++) {
      _0x3769cb += "- *Message:* " + _0x22b535[_0x1deef5].message + "\n";
      _0x3769cb += "- *Sender:* " + _0x22b535[_0x1deef5].sender + "\n";
      _0x3769cb += "- *Time:* " + _0x22b535[_0x1deef5].time + "\n\n--------------------------------------------\n\n\n";
    }
    const _0x17e237 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x309c68 + "temps " + _0x475610,
        'description': "Refresh 🔄"
      }]
    }];
    const _0xbdbfee = {
      url: _0x300e60
    };
    const _0x7e7337 = {
      caption: _0x3769cb,
      image: _0xbdbfee,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x17e237
    };
    const _0x41375f = {
      quoted: _0x40a16a
    };
    return await _0x277da4.replyList(_0xf9dbbe, _0x7e7337, _0x41375f);
  } catch (_0x1d9c23) {
    _0x416107("*ERROR !!*");
    _0x2d708d(_0x1d9c23);
  }
});
const _0xf5963e = {
  pattern: "gpass",
  desc: "Generate a strong password.",
  category: "other",
  react: '🔐',
  filename: __filename
};
cmd(_0xf5963e, async (_0x30917d, _0x12a964, _0x908e93, {
  from: _0x3f0960,
  quoted: _0x1fe81a,
  body: _0x2cb522,
  isCmd: _0x3283a4,
  command: _0xce680c,
  args: _0x39a95c,
  q: _0x6b57b0,
  isGroup: _0x54b036,
  sender: _0x5ce2c2,
  senderNumber: _0x191476,
  botNumber2: _0xc7d26a,
  botNumber: _0x7e25a4,
  pushname: _0x1fbe77,
  isMe: _0x5065cd,
  isOwner: _0x276493,
  groupMetadata: _0x36bc55,
  groupName: _0x21f2ea,
  participants: _0x495ee1,
  groupAdmins: _0x288811,
  isBotAdmins: _0x1d9248,
  isAdmins: _0x567e48,
  reply: _0x3c06e3
}) => {
  try {
    const _0x22cad7 = _0x39a95c[0] ? parseInt(_0x39a95c[0]) : 12;
    if (isNaN(_0x22cad7) || _0x22cad7 < 8) {
      return _0x3c06e3("Please provide a valid length for the password (Minimum 08 Characters💦).");
    }
    const _0x27a2f7 = _0x8a4c75 => {
      let _0x447d57 = '';
      for (let _0x15f561 = 0; _0x15f561 < _0x8a4c75; _0x15f561++) {
        const _0xd255c7 = crypto.randomInt(0, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?".length);
        _0x447d57 += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"[_0xd255c7];
      }
      return _0x447d57;
    };
    const _0x23055c = _0x27a2f7(_0x22cad7);
    const _0xd655a6 = {
      text: "🔐 *Your Strong Password Genarated* 🔐\n\nPlease find your generated password below:\n\n> *BY VAJIRA-MD*"
    };
    const _0x2e567c = {
      upload: _0x30917d.waUploadToServer
    };
    const _0x5ab767 = {
      text: ''
    };
    let _0x3b5e49 = generateWAMessageFromContent(_0x908e93.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': {
            'body': _0xd655a6,
            'carouselMessage': {
              'cards': [{
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    'image': {
                      'url': "https://i.ibb.co/dPtmG0Y/password-security-icon-simple-security-cyber-vector.jpg"
                    }
                  }, _0x2e567c)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': "PODIYA-MD",
                  'hasMediaAttachment': false
                }),
                'body': _0x5ab767,
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_copy",
                    'buttonParamsJson': "{\"display_text\":\"𝘊𝘖𝘗𝘠 𝘗𝘈𝘚𝘚𝘞𝘖𝘙𝘋\",\"id\":\"123456789\",\"copy_code\":\"" + _0x23055c + "\"}"
                  }]
                }
              }],
              'messageVersion': 0x1
            },
            'contextInfo': {
              'mentionedJid': [_0x908e93.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363290448968237@newsletter",
                'newsletterName': "⛅ ᴘᴏᴅɪʏᴀ 𝑴𝑫 💙",
                'serverMessageId': 0x8f
              }
            }
          }
        }
      }
    }, {
      'quoted': _0x908e93
    });
    await _0x30917d.relayMessage(_0x3b5e49.key.remoteJid, _0x3b5e49.message, {
      'messageId': _0x3b5e49.key.id
    });
  } catch (_0xc4f26b) {
    console.log(_0xc4f26b);
    _0x3c06e3("❌ Error generating password🤕: " + _0xc4f26b.message);
  }
});
const _0x4369bd = {
  pattern: "ailogo",
  alias: ["logoai", "ail", "gptlogo"],
  react: '🤖',
  desc: "It creates ai logos.",
  category: "other",
  use: ".ailogo  woman,hair cut collor red,full body,bokeh",
  filename: __filename
};
cmd(_0x4369bd, async (_0x24660b, _0x2cd06c, _0x5eb077, {
  from: _0x4393ab,
  l: _0x78e63,
  prefix: _0x4c0f91,
  quoted: _0xf71aff,
  body: _0x2cb69a,
  isCmd: _0x3ad42b,
  command: _0x36e67e,
  args: _0x3061f9,
  q: _0x129e21,
  isGroup: _0x2579ae,
  sender: _0x32b629,
  senderNumber: _0x4f26fa,
  botNumber2: _0x3d74a2,
  botNumber: _0x200e27,
  pushname: _0x4af190,
  isMe: _0x5b4c0e,
  isOwner: _0x4bf998,
  groupMetadata: _0x51a46a,
  groupName: _0x4c46a4,
  participants: _0x52d6dd,
  groupAdmins: _0xb7d4da,
  isBotAdmins: _0x53fc06,
  isAdmins: _0x41d82f,
  reply: _0x3f1996
}) => {
  try {
    if (!_0x129e21) {
      return _0x3f1996("Please enter a query");
    }
    let _0x5222bd = await logo(_0x129e21);
    const _0x2947b8 = {
      url: _0x5222bd
    };
    const _0x45627f = {
      image: _0x2947b8,
      caption: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻"
    };
    const _0x3ffcf8 = {
      quoted: _0x2cd06c
    };
    _0x24660b.sendMessage(_0x4393ab, _0x45627f, _0x3ffcf8);
  } catch (_0x1538a8) {
    _0x3f1996("I cant create that logo");
    _0x78e63(_0x1538a8);
  }
});
const _0x29cbd7 = {
  pattern: "bard"
};
function _0x6960f4(_0x10adb9, _0x32987a, _0x1206de, _0x2b7523, _0xc35ce4) {
  return _0x398b(_0xc35ce4 - 0x28e, _0x1206de);
}
_0x29cbd7.alias = ["bardai", "gbard", "googlebard", "googleai", "ai2"];
_0x29cbd7.react = '👾';
_0x29cbd7.desc = "එය ඔබ ලබා දුන් දේ සඳහා bard AI මත සොයයි.\nIt search on bard ai for what you provided.";
_0x29cbd7.category = "search";
_0x29cbd7.use = ".bard hi";
_0x29cbd7.filename = __filename;
cmd(_0x29cbd7, async (_0x8bf3e4, _0x265f4f, _0x5e79a2, {
  from: _0x6c69b4,
  l: _0x314a3e,
  prefix: _0xdf85,
  quoted: _0xc39c7e,
  body: _0x5af447,
  isCmd: _0x3f6e83,
  command: _0x2136cb,
  args: _0x1c0020,
  q: _0x4b5117,
  isGroup: _0x332568,
  sender: _0xc4c3f8,
  senderNumber: _0x2359c3,
  botNumber2: _0x4aa3e6,
  botNumber: _0x571fb4,
  pushname: _0x1f4da3,
  isMe: _0x30de18,
  isOwner: _0x451149,
  groupMetadata: _0xd42753,
  groupName: _0x1f5620,
  participants: _0x305725,
  groupAdmins: _0x8d652d,
  isBotAdmins: _0x41b9e5,
  isAdmins: _0x1e5198,
  reply: _0x1cb361
}) => {
  try {
    if (!_0x4b5117) {
      return _0x1cb361("*කරුණාකර මට bard AI හි සෙවීමට වචන ලබා දෙන්න !*\nPlease give me words to search on bard ai !");
    }
    let _0x38a572 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
    let _0x455331 = _0x38a572.users;
    let _0x58f6e4 = _0x455331[Math.floor(Math.random() * _0x455331.length)];
    const _0x336b85 = await fetchJson(_0x38a572.xz + "api/bard?text=" + _0x4b5117 + "&apikey=" + _0x58f6e4);
    return await _0x1cb361(_0x336b85.content);
  } catch (_0x5ed90c) {
    try {
      const _0x15b8d8 = await fetchJson("https://api.akuari.my.id/ai/gbard?chat=" + _0x4b5117);
      return await _0x1cb361(_0x15b8d8.respon);
    } catch (_0x560c7c) {
      _0x1cb361("*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*\nServer is busy. Try again later.!");
      _0x314a3e(_0x560c7c);
    }
  }
});
const _0x39f05b = {
  pattern: "ailogo",
  alias: ["logoai", "ail", "gptlogo"],
  react: '🤖',
  desc: "It creates ai logos.",
  category: "other",
  use: ".ailogo  woman,hair cut collor red,full body,bokeh",
  filename: __filename
};
cmd(_0x39f05b, async (_0x26de16, _0x20cf40, _0x55e9e9, {
  from: _0x56c2e3,
  l: _0x27e754,
  prefix: _0x17def4,
  quoted: _0x495479,
  body: _0x100250,
  isCmd: _0x33f848,
  command: _0x335212,
  args: _0x164796,
  q: _0x598ae2,
  isGroup: _0x2e4193,
  sender: _0x5f5a1b,
  senderNumber: _0x12fb8d,
  botNumber2: _0x150851,
  botNumber: _0x459a9c,
  pushname: _0x59c253,
  isMe: _0x3b43cf,
  isOwner: _0x1390ac,
  groupMetadata: _0x2611af,
  groupName: _0x2f7af6,
  participants: _0x43f6df,
  groupAdmins: _0x361fde,
  isBotAdmins: _0x4145b5,
  isAdmins: _0x257189,
  reply: _0x56ed13
}) => {
  try {
    if (!_0x598ae2) {
      return _0x56ed13("Please enter a query");
    }
    let _0x23b18d = await logo(_0x598ae2);
    const _0x531cae = {
      url: _0x23b18d
    };
    const _0xb11e53 = {
      image: _0x531cae,
      caption: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻"
    };
    const _0x35e5ec = {
      quoted: _0x20cf40
    };
    _0x26de16.sendMessage(_0x56c2e3, _0xb11e53, _0x35e5ec);
  } catch (_0x33c1f8) {
    _0x56ed13("I cant create that logo");
    _0x27e754(_0x33c1f8);
  }
});
const _0x4f4e39 = {
  pattern: "mathsgpt",
  react: '👾',
  desc: desct,
  category: "other",
  use: ".gptmaths 2-3",
  filename: __filename
};
cmd(_0x4f4e39, async (_0x2dca71, _0x48fa54, _0x101de0, {
  from: _0xacbc26,
  l: _0x3dd1e8,
  prefix: _0x451b4c,
  quoted: _0x4a269b,
  body: _0x15434f,
  isCmd: _0x3ade7b,
  command: _0x70fc59,
  args: _0x1e795f,
  q: _0x18751f,
  isGroup: _0x59fceb,
  sender: _0x52d78d,
  senderNumber: _0x494379,
  botNumber2: _0x54e1c6,
  botNumber: _0x18a2ae,
  pushname: _0x18f953,
  isMe: _0x4c3990,
  isOwner: _0x5de559,
  groupMetadata: _0x4646f8,
  groupName: _0x498345,
  participants: _0x379d6a,
  groupAdmins: _0x2e4f53,
  isBotAdmins: _0xfc732f,
  isAdmins: _0x253400,
  reply: _0x3aa1fa
}) => {
  try {
    if (!_0x18751f) {
      return _0x3aa1fa(needus);
    }
  } catch (_0xdbccb1) {
    _0x3aa1fa(cantf);
    _0x3dd1e8(_0xdbccb1);
  }
});
const _0x88c539 = {
  pattern: "aichatgpt",
  react: '👾',
  desc: desct
};
function _0x189e9e(_0x36f453, _0x5a8a69, _0x29fc2e, _0xb59450, _0x5aca29) {
  return _0x398b(_0xb59450 - 0x2b8, _0x29fc2e);
}
_0x88c539.category = '';
_0x88c539.use = ".chatgpt hi";
_0x88c539.filename = __filename;
cmd(_0x88c539, async (_0x13c755, _0x49246d, _0x35737a, {
  from: _0x594aee,
  l: _0x480d89,
  prefix: _0x3ffabe,
  quoted: _0x527700,
  body: _0x5d5727,
  isCmd: _0x3053b7,
  command: _0x1a454c,
  args: _0x19f5e2,
  q: _0x2baf00,
  isGroup: _0x5ae7a5,
  sender: _0xbae88d,
  senderNumber: _0x5d259d,
  botNumber2: _0x41e60e,
  botNumber: _0x59b379,
  pushname: _0x46e6fc,
  isMe: _0x561809,
  isOwner: _0x1bd674,
  groupMetadata: _0x405f02,
  groupName: _0x70a20a,
  participants: _0x164f50,
  groupAdmins: _0x482dab,
  isBotAdmins: _0xabc6a3,
  isAdmins: _0x3a8b60,
  reply: _0x40ee8c
}) => {
  try {
    if (!_0x2baf00) {
      return _0x40ee8c(needus);
    }
    let _0x4cd258 = await fetchJson("https://hercai.onrender.com/v3/hercai?question=" + _0x2baf00);
    return await _0x40ee8c(_0x4cd258.reply);
  } catch (_0x557d6b) {
    _0x40ee8c(cantf);
    _0x480d89(_0x557d6b);
  }
});
const _0x58f721 = {
  pattern: "aipic",
  react: '👾',
  desc: desct,
  category: "other",
  use: ".aipic hi"
};
function _0x40f0e1(_0x4f3f28, _0x6d819b, _0x2f464b, _0x313ea7, _0xd028b4) {
  return _0x398b(_0x2f464b - 0x58, _0x313ea7);
}
_0x58f721.filename = __filename;
cmd(_0x58f721, async (_0x1143fb, _0x53d3de, _0xc5fa3d, {
  from: _0x52df1a,
  l: _0x3d9d98,
  prefix: _0x1c0f6c,
  quoted: _0xadabd5,
  body: _0x372969,
  isCmd: _0x536013,
  command: _0x19f4fe,
  args: _0x55b633,
  q: _0x5315ad,
  isGroup: _0x1c8e28,
  sender: _0x4ba5a4,
  senderNumber: _0x1c0554,
  botNumber2: _0x4699ae,
  botNumber: _0x500515,
  pushname: _0x2ad79d,
  isMe: _0x171776,
  isOwner: _0x50fe08,
  groupMetadata: _0x355a86,
  groupName: _0x274b03,
  participants: _0x495a91,
  groupAdmins: _0x30f854,
  isBotAdmins: _0x1a24df,
  isAdmins: _0x2acb6a,
  reply: _0x4460d1
}) => {
  try {
    if (!_0x5315ad) {
      return _0x4460d1(needus);
    }
    let _0x550035 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x5315ad);
    const _0x19aa92 = {
      url: await _0x550035.result
    };
    const _0x389957 = {
      image: _0x19aa92,
      caption: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻"
    };
    const _0x2cec85 = {
      quoted: _0x53d3de
    };
    await _0x1143fb.sendMessage(_0x52df1a, _0x389957, _0x2cec85);
  } catch (_0x992f4f) {
    _0x4460d1(cantf);
    _0x3d9d98(_0x992f4f);
  }
});
const _0x460ef7 = {
  on: "body"
};
cmd(_0x460ef7, async (_0x26f5ed, _0x420c75, _0x316fd0, {
  from: _0x13b635,
  l: _0x2f9b43,
  prefix: _0x5dde97,
  quoted: _0x4d7b28,
  body: _0x2577dc,
  isCmd: _0x33a531,
  command: _0x2338d7,
  args: _0x44f9fa,
  q: _0xe54b7,
  isGroup: _0x339e7f,
  sender: _0x8d8a83,
  senderNumber: _0x1aa2ea,
  botNumber2: _0x565efe,
  botNumber: _0x3425b4,
  pushname: _0x2c9670,
  isMe: _0x29b802,
  isOwner: _0x3be770,
  groupMetadata: _0x4df8c5,
  groupName: _0x439b44,
  participants: _0x591a0c,
  groupAdmins: _0x2f94de,
  isBotAdmins: _0x16d860,
  isAdmins: _0x35215a,
  reply: _0x4be4c6
}) => {
  if (config.AI_CHATBOT === "true") {
    if (_0x420c75.key.fromMe) {
      return;
    }
    let _0x4c84d6 = await fetchJson("https://hercai.onrender.com/gemini/hercai?question=" + _0xe54b7);
    return await _0x4be4c6(_0x4c84d6.reply);
  }
});
const _0x3a317b = {
  on: "body"
};
cmd(_0x3a317b, async (_0x464a4f, _0x301018, _0x3721ce, {
  from: _0x5cd44c,
  l: _0x1b1bf,
  prefix: _0x1d552,
  quoted: _0x188f3d,
  body: _0x8041ef,
  isCmd: _0x1cf6e7,
  command: _0x1ef221,
  args: _0x45d493,
  q: _0x1758bf,
  isGroup: _0x9c057f,
  sender: _0x10031a,
  senderNumber: _0x3823a2,
  botNumber2: _0x5a6fcd,
  botNumber: _0x574d3e,
  pushname: _0x2c46e1,
  isMe: _0x1b37b0,
  isOwner: _0x2816c7,
  groupMetadata: _0x3ff24b,
  groupName: _0x1a6b8b,
  participants: _0x1f0ee2,
  groupAdmins: _0x390bea,
  isBotAdmins: _0x4af822,
  isAdmins: _0x48eefd,
  reply: _0x161b11
}) => {
  if (config.AI_IMAGE === "true") {
    if (_0x301018.key.fromMe) {
      return;
    }
    let _0x30a845 = await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x1758bf);
    const _0x5000c1 = {
      url: await _0x30a845.result
    };
    const _0x34fc49 = {
      image: _0x5000c1,
      caption: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻"
    };
    const _0x220387 = {
      quoted: _0x301018
    };
    await _0x464a4f.sendMessage(_0x5cd44c, _0x34fc49, _0x220387);
  }
});
const _0x47fac6 = {
  on: "body"
};
cmd(_0x47fac6, async (_0x1693a9, _0x2aa740, _0x428d6d, {
  from: _0x2c8d77,
  l: _0x2c87f9,
  prefix: _0x5f0fd7,
  quoted: _0x41aa01,
  body: _0x3853cc,
  isCmd: _0x2dbf79,
  command: _0x32710f,
  args: _0x1d2f66,
  q: _0x46ba8d,
  isGroup: _0x33eff4,
  sender: _0x59109c,
  senderNumber: _0x59292e,
  botNumber2: _0x4163d7,
  botNumber: _0x1a81fe,
  pushname: _0x1e4734,
  isMe: _0x2cfd98,
  isOwner: _0x1b0551,
  groupMetadata: _0x3e51cb,
  groupName: _0x5b82a9,
  participants: _0x2d9f5b,
  groupAdmins: _0x22e1a1,
  isBotAdmins: _0x173984,
  isAdmins: _0xbb1900,
  reply: _0x3c2c9d
}) => {
  if (config.MATHS_AI === "true") {
    if (_0x2aa740.key.fromMe) {
      return;
    }
    var _0x3c6823 = (await fetchJson("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x46ba8d)).data;
    return await _0x3c2c9d(_0x3c6823);
  }
});
(function () {
  let _0x31b4c7;
  try {
    const _0xf22a3b = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x31b4c7 = _0xf22a3b();
  } catch (_0x4a6754) {
    _0x31b4c7 = window;
  }
  _0x31b4c7.setInterval(_0x593b1d, 4000);
})();
const _0x43e333 = {
  pattern: "blackbox",
  alias: ['bb'],
  react: '👾',
  desc: "Blackbox ai chat",
  category: "other",
  use: ".blackbox hi",
  filename: __filename
};
cmd(_0x43e333, async (_0x50a940, _0x1f7520, _0x100797, {
  from: _0x50d9cd,
  l: _0x2234b8,
  prefix: _0xafd439,
  quoted: _0x48b2a0,
  body: _0x48cf34,
  isCmd: _0x737e55,
  command: _0x5586dd,
  args: _0x222aa8,
  q: _0xf4b7fc,
  isGroup: _0x180b06,
  sender: _0x27d38d,
  senderNumber: _0x2b8fb5,
  botNumber2: _0x4bddba,
  botNumber: _0x3be2cf,
  pushname: _0x317c0a,
  isMe: _0x220828,
  isOwner: _0x3ee3ac,
  groupMetadata: _0x53524c,
  groupName: _0x2087cb,
  participants: _0x20eb50,
  groupAdmins: _0x19fb5c,
  isBotAdmins: _0x1c87ee,
  isAdmins: _0x3c82bd,
  reply: _0x435a0e
}) => {
  try {
    if (!_0xf4b7fc) {
      return _0x435a0e("Need a keyword");
    }
    var _0x106ba4 = (await fetchJson("https://api.yanzbotz.my.id/api/ai/blackbox?query=" + _0xf4b7fc)).result;
    return await _0x435a0e(_0x106ba4);
  } catch (_0x214ebd) {
    _0x435a0e("Unable to generate");
    _0x2234b8(_0x214ebd);
  }
});
const _0x33cb23 = {
  pattern: "bingimgai",
  alias: ["midj"]
};
function _0xd80193(_0x21faa1, _0x40bfc5, _0x3deb43, _0xd1fa4f, _0x8cc631) {
  return _0x398b(_0xd1fa4f - 0x325, _0x8cc631);
}
_0x33cb23.react = '📷';
_0x33cb23.desc = "Generate Images using Bing AI";
_0x33cb23.category = "other";
_0x33cb23.use = ".bingimgai <prompt>";
_0x33cb23.filename = __filename;
cmd(_0x33cb23, async (_0xdbca07, _0x47bb84, _0x94cad6, {
  from: _0x4e55a3,
  l: _0x276aa8,
  quoted: _0x5b6a3b,
  body: _0x3ffe79,
  isCmd: _0x22ee8b,
  command: _0x29d2f2,
  args: _0x14f0ef,
  q: _0xcddcd5,
  isGroup: _0x54880e,
  sender: _0x1cda0a,
  senderNumber: _0x4c13bd,
  botNumber2: _0x362bac,
  botNumber: _0xb578a0,
  pushname: _0x2f9154,
  isMe: _0x4f3ce7,
  isOwner: _0x565789,
  groupMetadata: _0x11a3bb,
  groupName: _0x59e677,
  participants: _0x5e41c7,
  groupAdmins: _0x44bcc7,
  isBotAdmins: _0x4487c8,
  isAdmins: _0x293e27,
  reply: _0x1ce237
}) => {
  try {
    if (!_0xcddcd5) {
      return await _0x1ce237("*Give me a prompt to generate images*");
    }
    let _0x6c1ecf = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0xcddcd5 + "&apiKey=vihangayt0");
    if (_0x6c1ecf && _0x6c1ecf.result && Array.isArray(_0x6c1ecf.result) && _0x6c1ecf.result.length > 0) {
      for (let _0x21c1e2 = 0; _0x21c1e2 < _0x6c1ecf.result.length; _0x21c1e2++) {
        const _0x4be68a = {
          url: _0x6c1ecf.result[_0x21c1e2]
        };
        const _0x1acc9c = {
          image: _0x4be68a,
          caption: config.FOOTER
        };
        const _0x36e6a0 = {
          quoted: _0x47bb84
        };
        await _0xdbca07.sendMessage(_0x4e55a3, _0x1acc9c, _0x36e6a0);
      }
    } else {
      _0x1ce237("No images found for the given prompt");
    }
  } catch (_0x551fc2) {
    _0x1ce237("Unable to generate images to the given prompt");
    _0x276aa8(_0x551fc2);
  }
});
const _0x28b6af = {
  pattern: "hack",
  react: '☠️',
  desc: "To hack",
  category: "other",
  use: ".hack",
  filename: __filename
};
cmd(_0x28b6af, async (_0x4ad0eb, _0x4e57bd, _0x4e8183, {
  from: _0x42a44b,
  l: _0x29972b,
  prefix: _0xffe523,
  quoted: _0xbe013e,
  body: _0x48534f,
  isCmd: _0x15d75c,
  command: _0x4ddb7f,
  args: _0xe68c47,
  q: _0x35b05a,
  isGroup: _0x776219,
  sender: _0x1178e0,
  senderNumber: _0x218440,
  botNumber2: _0x204046,
  botNumber: _0x13a098,
  pushname: _0x59bdbb,
  isMe: _0x4d14df,
  isOwner: _0x43f9c6,
  groupMetadata: _0x121eb5,
  groupName: _0x54b56a,
  participants: _0x1322c3,
  groupAdmins: _0x240aaf,
  isBotAdmins: _0x30cfa8,
  isAdmins: _0x3fd45d,
  reply: _0x81ad84
}) => {
  try {
    _0x4e57bd.reply("```Injecting malware```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer into device \n 0%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer photos \n █ 10%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer successful \n █ █ 20%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer videos \n █ █ █ 30%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer successful \n █ █ █ █ 40%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfering audio \n █ █ █ █ █ 50%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer successful \n █ █ █ █ █ █ 60%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```");
    await sleep(1000);
    _0x4e57bd.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```");
    await sleep(1000);
    _0x4e57bd.reply("```System hyjacking on process.. \n Conecting to Server ```");
    await sleep(1000);
    _0x4e57bd.reply("```Divice successfully connected... \n Riciving data...```");
    await sleep(1000);
    _0x4e57bd.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```");
    await sleep(1000);
    _0x4e57bd.reply("``` HACKING COMPLETED BY PODIYA ```");
    await sleep(1000);
    _0x4e57bd.reply("``` SENDING PHONE DOCUMENTS FOR PODIYA...```");
    await sleep(1000);
    _0x4e57bd.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected by podiya```");
    await sleep(1000);
    return _0x81ad84("*ALL FILES TRANSFERRED TO PODIYA*");
  } catch (_0x48f8b2) {
    _0x29972b(_0x48f8b2);
  }
});
const _0xe8e6dc = {
  pattern: "fontchange",
  react: '👾',
  desc: "To change font of text",
  category: "other",
  use: ".fontchange",
  filename: __filename
};
cmd(_0xe8e6dc, async (_0x2bb8d9, _0x1eff9f, _0x2533f0, {
  from: _0x464f13,
  l: _0x2a2ceb,
  prefix: _0x208135,
  quoted: _0x432123,
  body: _0x3ae375,
  isCmd: _0x2898f7,
  command: _0x34c84b,
  args: _0x4cf224,
  q: _0x1e2d30,
  isGroup: _0x2c81d4,
  sender: _0x29a711,
  senderNumber: _0x2660d1,
  botNumber2: _0x56df6c,
  botNumber: _0x573632,
  pushname: _0x34b454,
  isMe: _0x235483,
  isOwner: _0x542e27,
  groupMetadata: _0x45413d,
  groupName: _0x40f1ee,
  participants: _0x56e30f,
  groupAdmins: _0x30cad0,
  isBotAdmins: _0x4a65cf,
  isAdmins: _0x64f81b,
  reply: _0x18a30d
}) => {
  try {
    if (_0x4cf224.length === 0) {
      const _0x39bb0f = availableStyles.map(_0x1d276b => {
        const _0x2c3c9c = convertToFontStyle("podiya md", _0x1d276b);
        return _0x1d276b + ": " + _0x2c3c9c;
      }).join("\n");
      _0x18a30d("Usage:\n" + _0x208135 + "fontchange <style> <text>\nAvailable font styles with previews:\n" + _0x39bb0f);
    } else {
      const _0xb509c3 = parseInt(_0x4cf224[0]);
      if (isNaN(_0xb509c3) || _0xb509c3 < 0 || _0xb509c3 > 34) {
        _0x18a30d("Style number should be between 0 and 34. Please choose a valid style.");
      } else {
        const _0x377f91 = _0x4cf224.slice(1).join(" ");
        const _0x360499 = convertToFontStyle(_0x377f91, _0xb509c3);
        _0x18a30d('' + _0x360499);
      }
    }
    const _0x5a7943 = {
      text: '✅',
      key: _0x1eff9f.key
    };
    const _0xe21731 = {
      react: _0x5a7943
    };
    await _0x2bb8d9.sendMessage(_0x464f13, _0xe21731);
  } catch (_0x403205) {
    _0x2a2ceb(_0x403205);
  }
});
const _0x9cf29e = {
  pattern: "nowa",
  react: '👾',
  desc: "To see same type whatsapp numbers",
  category: "other",
  use: ".nowa",
  filename: __filename
};
cmd(_0x9cf29e, async (_0x3a5d7e, _0x50276e, _0x53df7c, {
  from: _0x2638a0,
  l: _0x4d2c63,
  prefix: _0x2cde03,
  quoted: _0x2d51b8,
  body: _0x4ac032,
  isCmd: _0x531509,
  command: _0x9170df,
  args: _0x4ad278,
  q: _0x3c2663,
  isGroup: _0x2cb472,
  sender: _0x55b7be,
  senderNumber: _0x1db465,
  botNumber2: _0x358119,
  botNumber: _0x287e2f,
  pushname: _0x58d010,
  isMe: _0x3635e4,
  isOwner: _0x21eee3,
  groupMetadata: _0x584f7b,
  groupName: _0x49e499,
  participants: _0x5ea5c7,
  groupAdmins: _0x146eb0,
  isBotAdmins: _0x1a02fe,
  isAdmins: _0x548987,
  reply: _0x201d60
}) => {
  try {
    let _0x51fe4f = /x/g;
    if (!_0x3c2663) {
      throw "Give a number to search";
    }
    if (!_0x3c2663.match(_0x51fe4f)) {
      throw "*Example: " + (_0x2cde03 + _0x9170df) + " 919142294xxx";
    }
    let _0x11b0ac = _0x3c2663.match(_0x51fe4f).length;
    let _0x551dc5 = Math.pow(10, _0x11b0ac);
    let _0x199be1 = [];
    for (let _0x28074b = 0; _0x28074b < _0x551dc5; _0x28074b++) {
      let _0x1c138b = [..._0x28074b.toString().padStart(_0x11b0ac, '0')];
      let _0x400894 = _0x3c2663.replace(_0x51fe4f, () => _0x1c138b.shift()) + "@s.whatsapp.net";
      if (await _0x3a5d7e.onWhatsApp(_0x400894).then(_0x452445 => (_0x452445[0] || {}).exists)) {
        let _0x54206e = await _0x3a5d7e.fetchStatus(_0x400894)["catch"](_0x2b8017 => {});
        const _0x57ce56 = {
          'exists': true,
          'jid': _0x400894,
          ..._0x54206e
        };
        _0x199be1.push(_0x57ce56);
      } else {
        const _0x35e99 = {
          exists: false,
          jid: _0x400894
        };
        _0x199be1.push(_0x35e99);
      }
    }
    let _0x4ca9ec = "Registered\n\n" + _0x199be1.filter(_0x166552 => _0x166552.exists).map(_0x296382 => "• Link: wa.me/" + _0x296382.jid.split('@')[0] + "\n*• Bio:* " + (_0x296382.status || "description") + "\n*• set on:* " + formatDate(_0x296382.setAt)).join("\n\n") + "\n\n*Not registered*\n\n" + _0x199be1.filter(_0x2714f8 => !_0x2714f8.exists).map(_0x1ae543 => _0x1ae543.jid.split('@')[0]).join("\n");
    _0x201d60(_0x4ca9ec);
    const _0x45d97f = {
      text: '✅',
      key: _0x50276e.key
    };
    const _0x4f7a15 = {
      react: _0x45d97f
    };
    await _0x3a5d7e.sendMessage(_0x2638a0, _0x4f7a15);
  } catch (_0x31745f) {
    _0x4d2c63(_0x31745f);
  }
});
const _0x19b263 = {
  pattern: "obfus",
  react: '👾',
  desc: "To encrypt js code",
  category: "other",
  use: ".obfus",
  filename: __filename
};
cmd(_0x19b263, async (_0x23ddb6, _0x993d77, _0x259817, {
  from: _0x185593,
  l: _0xa45796,
  prefix: _0x1cfdd4,
  quoted: _0x5365c6,
  body: _0x54bb6f,
  isCmd: _0x44c3db,
  command: _0x2436e2,
  args: _0x506cbe,
  q: _0x7ad3b,
  isGroup: _0x5ccc68,
  sender: _0x5623c6,
  senderNumber: _0x13d5a3,
  botNumber2: _0x2a39c7,
  botNumber: _0x1a0a93,
  pushname: _0x16b22a,
  isMe: _0x469151,
  isOwner: _0x4da1c9,
  groupMetadata: _0x17fe92,
  groupName: _0x4c5cad,
  participants: _0x462aeb,
  groupAdmins: _0x46ccea,
  isBotAdmins: _0x1add20,
  isAdmins: _0xa016e8,
  reply: _0x46aabc
}) => {
  try {
    if (!_0x7ad3b) {
      return _0x46aabc("Example " + (_0x1cfdd4 + _0x2436e2) + " const podiyamd = require('baileys')");
    }
    let _0xc7283e = await obfus(_0x7ad3b);
    _0x46aabc("Success\n" + _0xc7283e.result);
    const _0x5f3269 = {
      text: '✅',
      key: _0x993d77.key
    };
    const _0x3fe8b3 = {
      react: _0x5f3269
    };
    await _0x23ddb6.sendMessage(_0x185593, _0x3fe8b3);
  } catch (_0x5ec664) {
    _0xa45796(_0x5ec664);
  }
});
const _0x45e383 = {
  pattern: "leaderboard",
  react: '👾',
  desc: "To see info of leaderboard",
  category: "other",
  use: ".leaderboard",
  filename: __filename
};
cmd(_0x45e383, async (_0x26366b, _0x3b1911, _0x1dea2f, {
  from: _0x37d411,
  l: _0x2d5a90,
  prefix: _0x6dd4e6,
  quoted: _0x5b62bd,
  body: _0x366ad5,
  isCmd: _0x964519,
  command: _0x4e16d3,
  args: _0xd0269b,
  q: _0x2d9c92,
  isGroup: _0x16d3c5,
  sender: _0x36cec3,
  senderNumber: _0x486823,
  botNumber2: _0x1190c7,
  botNumber: _0x1f6a3f,
  pushname: _0x171a35,
  isMe: _0x64ed94,
  isOwner: _0x59a3c0,
  groupMetadata: _0x330c50,
  groupName: _0x5528d3,
  participants: _0x52d873,
  groupAdmins: _0x3de1fc,
  isBotAdmins: _0x33818f,
  isAdmins: _0x2f74c2,
  reply: _0x2d1607
}) => {
  try {
    let _0x5353cd = "「 *LEADERBOARD* 」\n\n";
    for (let _0x198f51 of _buruan) {
      _0x5353cd += "➸ *ID :* " + _0x198f51.id + "\n";
      _0x5353cd += "*🐟Fish* : " + _0x198f51.ikan + "\n";
      _0x5353cd += "*🐔Chicken* : " + _0x198f51.ayam + "\n";
      _0x5353cd += "*🐇Rabbit* : " + _0x198f51.kelinci + "\n";
      _0x5353cd += "*🐑Sheep* : " + _0x198f51.domba + "\n";
      _0x5353cd += "*🐄Cow* : " + _0x198f51.sapi + "\n";
      _0x5353cd += "*🐘Elephant* : " + _0x198f51.gajah + "\n\n";
    }
    const _0x1036ce = {
      text: '✅',
      key: _0x3b1911.key
    };
    const _0x613a1 = {
      react: _0x1036ce
    };
    await _0x26366b.sendMessage(_0x37d411, _0x613a1);
  } catch (_0x3ef5ec) {
    p;
    _0x2d1607(cantf);
    _0x2d5a90(_0x3ef5ec);
  }
});
function _0x398b(_0x18b6d4, _0x159b3f) {
  const _0x33c08b = _0x8953();
  _0x398b = function (_0x89537b, _0x398b0c) {
    _0x89537b = _0x89537b - 214;
    let _0x38f65f = _0x33c08b[_0x89537b];
    return _0x38f65f;
  };
  return _0x398b(_0x18b6d4, _0x159b3f);
}
const _0x519e4f = {
  pattern: "timetest",
  react: '🔖',
  desc: "test the time",
  category: "other",
  use: ".timetest",
  filename: __filename
};
cmd(_0x519e4f, async (_0x42fdb7, _0x3211e4, _0x443db5, {
  from: _0x2f2158,
  l: _0x57037d,
  prefix: _0x1eabfb,
  quoted: _0x17765a,
  body: _0x55b6c6,
  isCmd: _0x475310,
  command: _0x3ad05b,
  args: _0xc45cd3,
  q: _0x5155ba,
  isGroup: _0x4886e7,
  sender: _0x17ca8e,
  senderNumber: _0x3e1b1c,
  botNumber2: _0x67ddcc,
  botNumber: _0x3a16ba,
  pushname: _0x56913d,
  isMe: _0x1c272a,
  isOwner: _0x785fb,
  groupMetadata: _0x555784,
  groupName: _0x10d711,
  participants: _0x5dfb0c,
  groupAdmins: _0x37b19a,
  isBotAdmins: _0x6b4965,
  isAdmins: _0x451087,
  reply: _0x219e1c
}) => {
  try {
    const _0xff953a = require("moment-timezone");
    const _0x29996e = _0xff953a().tz("Asia/Kolkata").format("HH:mm:ss");
    const _0x42b232 = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var _0x29b4b1 = new Date().toLocaleDateString(_0x42b232);
    const _0x526a3f = "📅 " + _0x29b4b1 + "\n⌚ " + _0x29996e + "\n\n" + "👸💬 ɪᴢᴜᴍɪ ɪꜱ ᴏɴʟɪɴᴇ";
    await _0x42fdb7.sendMessage(_0x3211e4.chat, _0x526a3f);
    if (_0x29996e == "6:08:01") {
      return await _0x42fdb7.sendMessage(_0x3211e4.chat, _0x526a3f);
    }
    if (_0x29996e == "6:08:11") {
      return await _0x42fdb7.sendMessage(_0x3211e4.chat, _0x526a3f);
    }
    if (_0x29996e == "6:08:20") {
      return await _0x42fdb7.sendMessage(_0x3211e4.chat, _0x526a3f);
    }
    const _0x4f09cc = {
      text: '✅',
      key: _0x3211e4.key
    };
    const _0x533a1e = {
      react: _0x4f09cc
    };
    await _0x42fdb7.sendMessage(_0x2f2158, _0x533a1e);
  } catch (_0x957d99) {
    _0x219e1c();
    _0x57037d(_0x957d99);
  }
});
const _0x45c474 = {
  pattern: "readmore",
  react: '🔖',
  desc: "convert message to a readmore message",
  category: "other",
  use: ".readmore",
  filename: __filename
};
cmd(_0x45c474, async (_0x1a423c, _0x4f8b7e, _0x598c99, {
  from: _0x3f4e9f,
  l: _0xd566ef,
  prefix: _0x11470c,
  quoted: _0xfa30aa,
  body: _0x3828c3,
  isCmd: _0x5692d9,
  command: _0x373385,
  args: _0x265d8b,
  q: _0xf85d2f,
  isGroup: _0x31f187,
  sender: _0x38c646,
  senderNumber: _0x32fa3a,
  botNumber2: _0x449187,
  botNumber: _0x3bd792,
  pushname: _0x12024b,
  isMe: _0x426272,
  isOwner: _0x3fed73,
  groupMetadata: _0x1a5d73,
  groupName: _0x4c4b19,
  participants: _0x168a6a,
  groupAdmins: _0x5df134,
  isBotAdmins: _0x134693,
  isAdmins: _0x83e787,
  reply: _0x3f8e97
}) => {
  try {
    _0x3f8e97("​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​" + (_0xf85d2f ? _0xf85d2f : "blank"));
    const _0x194430 = {
      text: '✅',
      key: _0x4f8b7e.key
    };
    const _0x2f39e9 = {
      react: _0x194430
    };
    await _0x1a423c.sendMessage(_0x3f4e9f, _0x2f39e9);
  } catch (_0x2c1921) {
    _0x3f8e97('');
    _0xd566ef(_0x2c1921);
  }
});
const _0x3005c5 = {
  pattern: "poll",
  react: '🔖',
  desc: "Poll a message",
  category: "other",
  use: ".poll",
  filename: __filename
};
cmd(_0x3005c5, async (_0x123e5d, _0x5b116b, _0x4e1faf, {
  from: _0x3881a0,
  l: _0x54750a,
  prefix: _0x349b47,
  quoted: _0x1d7bed,
  body: _0x589890,
  isCmd: _0x1b7e92,
  command: _0xdccc76,
  args: _0x1ee677,
  q: _0x32b677,
  isGroup: _0x41e0fb,
  sender: _0x42060e,
  senderNumber: _0x2fec4d,
  botNumber2: _0x54321f,
  botNumber: _0x8899a0,
  pushname: _0x1a0f1a,
  isMe: _0x2fcb11,
  isOwner: _0x7cbfd8,
  groupMetadata: _0x4d6389,
  groupName: _0x28459a,
  participants: _0x42c9a0,
  groupAdmins: _0x41f282,
  isBotAdmins: _0x4c4775,
  isAdmins: _0x564e49,
  reply: _0x15b6fb
}) => {
  try {
    let [_0x2c9899, _0x39388e] = _0x32b677.split('|');
    if (_0x32b677.split('|') < 2) {
      return await _0x15b6fb("Mention question and atleast 2 options\nExample: " + _0x349b47 + "poll Who is best admin?|vajira,yes,no...");
    }
    let _0x414a0b = [];
    for (let _0x2c6b1b of _0x39388e.split(',')) {
      _0x414a0b.push(_0x2c6b1b);
    }
    const _0x3813c9 = {
      name: _0x2c9899,
      values: _0x414a0b
    };
    const _0x41f1b3 = {
      poll: _0x3813c9
    };
    await _0x123e5d.sendMessage(_0x5b116b.chat, _0x41f1b3);
    const _0x48d899 = {
      text: '✅',
      key: _0x5b116b.key
    };
    const _0x59daf5 = {
      react: _0x48d899
    };
    await _0x123e5d.sendMessage(_0x3881a0, _0x59daf5);
  } catch (_0x5303ca) {
    _0x15b6fb('');
    _0x54750a(_0x5303ca);
  }
});
const _0x1ee4b2 = {
  pattern: "happy",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '😂',
  filename: __filename
};
cmd(_0x1ee4b2, async (_0x5468f5, _0x6dfd25, _0x2684a1, {
  from: _0x4c5459,
  reply: _0x44404c
}) => {
  try {
    const _0x137355 = {
      text: '😂'
    };
    const _0x247f2f = await _0x5468f5.sendMessage(_0x4c5459, _0x137355);
    const _0x449c3a = ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const _0xfc426f of _0x449c3a) {
      await new Promise(_0x40e4a4 => setTimeout(_0x40e4a4, 1000));
      const _0x5637f4 = {
        conversation: _0xfc426f
      };
      const _0x4a61bb = {
        key: _0x247f2f.key,
        type: 0xe,
        editedMessage: _0x5637f4
      };
      const _0xbf1b7d = {
        protocolMessage: _0x4a61bb
      };
      await _0x5468f5.relayMessage(_0x4c5459, _0xbf1b7d, {});
    }
  } catch (_0x1274c7) {
    console.log(_0x1274c7);
    _0x44404c("❌ *Error!* " + _0x1274c7.message);
  }
});
const _0x5541c7 = {
  pattern: "heart",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '❤️',
  filename: __filename
};
cmd(_0x5541c7, async (_0x297295, _0x2d5be2, _0x1dc518, {
  from: _0xf8497c,
  reply: _0x1210ae
}) => {
  try {
    const _0x44d117 = {
      text: '🖤'
    };
    const _0x12ee64 = await _0x297295.sendMessage(_0xf8497c, _0x44d117);
    const _0x183025 = ['💖', '💗', '💕', '🩷', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '🤎', "❤️‍🔥", '💞', '💓', '💘', '💝', '♥️', '💟', "❤️‍🩹", '❤️'];
    for (const _0x22f688 of _0x183025) {
      await new Promise(_0x3c5493 => setTimeout(_0x3c5493, 1000));
      const _0x3241c6 = {
        conversation: _0x22f688
      };
      const _0x36776c = {
        key: _0x12ee64.key,
        type: 0xe,
        editedMessage: _0x3241c6
      };
      const _0x3b9e8c = {
        protocolMessage: _0x36776c
      };
      await _0x297295.relayMessage(_0xf8497c, _0x3b9e8c, {});
    }
  } catch (_0x493d07) {
    console.log(_0x493d07);
    _0x1210ae("❌ *Error!* " + _0x493d07.message);
  }
});
const _0x1ad13f = {
  pattern: "angry",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other"
};
function _0x3114ab(_0x427dbc, _0x441024, _0x56f74e, _0x2f5d9a, _0x335544) {
  return _0x398b(_0x427dbc + 0x317, _0x56f74e);
}
_0x1ad13f.react = '🤡';
_0x1ad13f.filename = __filename;
cmd(_0x1ad13f, async (_0x557019, _0x338f27, _0x54feca, {
  from: _0x4b533f,
  reply: _0x273edb
}) => {
  try {
    const _0x2d86a0 = {
      text: '👽'
    };
    const _0x3e37ae = await _0x557019.sendMessage(_0x4b533f, _0x2d86a0);
    const _0x2b510e = ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const _0x3e38e0 of _0x2b510e) {
      await new Promise(_0x5423f5 => setTimeout(_0x5423f5, 1000));
      const _0x5a555f = {
        conversation: _0x3e38e0
      };
      const _0x24ee77 = {
        key: _0x3e37ae.key,
        type: 0xe,
        editedMessage: _0x5a555f
      };
      const _0x26a308 = {
        protocolMessage: _0x24ee77
      };
      await _0x557019.relayMessage(_0x4b533f, _0x26a308, {});
    }
  } catch (_0x40af99) {
    console.log(_0x40af99);
    _0x273edb("❌ *Error!* " + _0x40af99.message);
  }
});
const _0x15a11b = {
  pattern: "cry",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '😶',
  filename: __filename
};
cmd(_0x15a11b, async (_0x4ec791, _0x400b00, _0x5bbabc, {
  from: _0x5ac5b0,
  reply: _0x154f8a
}) => {
  try {
    const _0xaac99f = {
      text: '😔'
    };
    const _0x488297 = await _0x4ec791.sendMessage(_0x5ac5b0, _0xaac99f);
    const _0x558ad0 = ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const _0x37bc46 of _0x558ad0) {
      await new Promise(_0x3eca10 => setTimeout(_0x3eca10, 1000));
      const _0x190f11 = {
        conversation: _0x37bc46
      };
      const _0x20de0d = {
        key: _0x488297.key,
        type: 0xe,
        editedMessage: _0x190f11
      };
      const _0x3bf3ff = {
        protocolMessage: _0x20de0d
      };
      await _0x4ec791.relayMessage(_0x5ac5b0, _0x3bf3ff, {});
    }
  } catch (_0x75987c) {
    console.log(_0x75987c);
    _0x154f8a("❌ *Error!* " + _0x75987c.message);
  }
});
const _0x1cd2bb = {
  pattern: "shy",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '🧐',
  filename: __filename
};
cmd(_0x1cd2bb, async (_0x5131f9, _0x3847e0, _0x5b9d8d, {
  from: _0x4723b8,
  reply: _0x2c8146
}) => {
  try {
    const _0x57e2e3 = {
      text: '🧐'
    };
    const _0x37d705 = await _0x5131f9.sendMessage(_0x4723b8, _0x57e2e3);
    const _0x5e8798 = ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const _0x4b99ed of _0x5e8798) {
      await new Promise(_0x51b132 => setTimeout(_0x51b132, 1000));
      const _0x2d758e = {
        conversation: _0x4b99ed
      };
      const _0x566225 = {
        key: _0x37d705.key,
        type: 0xe,
        editedMessage: _0x2d758e
      };
      const _0x50088c = {
        protocolMessage: _0x566225
      };
      await _0x5131f9.relayMessage(_0x4723b8, _0x50088c, {});
    }
  } catch (_0x3858b2) {
    console.log(_0x3858b2);
    _0x2c8146("❌ *Error!* " + _0x3858b2.message);
  }
});
const _0x4619ee = {
  pattern: "moon",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '🌚',
  filename: __filename
};
cmd(_0x4619ee, async (_0x262e21, _0x111381, _0x2588f1, {
  from: _0x26091e,
  reply: _0x1fa170
}) => {
  try {
    const _0x44de0b = {
      text: '🌝'
    };
    const _0x42c885 = await _0x262e21.sendMessage(_0x26091e, _0x44de0b);
    const _0x5d16d4 = ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', "🌝🌚"];
    for (const _0x2f112f of _0x5d16d4) {
      await new Promise(_0x190db8 => setTimeout(_0x190db8, 1000));
      const _0x9d48eb = {
        conversation: _0x2f112f
      };
      const _0x5732c0 = {
        key: _0x42c885.key,
        type: 0xe,
        editedMessage: _0x9d48eb
      };
      const _0x2ab331 = {
        protocolMessage: _0x5732c0
      };
      await _0x262e21.relayMessage(_0x26091e, _0x2ab331, {});
    }
  } catch (_0x1b288b) {
    console.log(_0x1b288b);
    _0x1fa170("❌ *Error!* " + _0x1b288b.message);
  }
});
const _0x533422 = {
  pattern: "confused",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '🤔',
  filename: __filename
};
cmd(_0x533422, async (_0x15de7c, _0x26f3d2, _0x2216cb, {
  from: _0x164ffa,
  reply: _0x1f6c6f
}) => {
  try {
    const _0x4389bf = {
      text: '🤔'
    };
    const _0x323da4 = await _0x15de7c.sendMessage(_0x164ffa, _0x4389bf);
    const _0x4c75a7 = ['😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', "🤷‍♂️", "🤷‍♀️"];
    for (const _0x222001 of _0x4c75a7) {
      await new Promise(_0x276a1a => setTimeout(_0x276a1a, 1000));
      const _0x134683 = {
        conversation: _0x222001
      };
      const _0x23f44d = {
        key: _0x323da4.key,
        type: 0xe,
        editedMessage: _0x134683
      };
      const _0x49683f = {
        protocolMessage: _0x23f44d
      };
      await _0x15de7c.relayMessage(_0x164ffa, _0x49683f, {});
    }
  } catch (_0x51c166) {
    console.log(_0x51c166);
    _0x1f6c6f("❌ *Error!* " + _0x51c166.message);
  }
});
const _0x5ae8b4 = {
  pattern: "hot",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '💋',
  filename: __filename
};
cmd(_0x5ae8b4, async (_0x4f3e52, _0x4ad319, _0x3b9f8c, {
  from: _0x395a0a,
  reply: _0xb35418
}) => {
  try {
    const _0x34236b = {
      text: '💋'
    };
    const _0x16465f = await _0x4f3e52.sendMessage(_0x395a0a, _0x34236b);
    const _0x2e934e = ['🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'];
    for (const _0x42ef88 of _0x2e934e) {
      await new Promise(_0x25e546 => setTimeout(_0x25e546, 1000));
      const _0x127b9b = {
        conversation: _0x42ef88
      };
      const _0x452a25 = {
        key: _0x16465f.key,
        type: 0xe,
        editedMessage: _0x127b9b
      };
      const _0x4fa4b7 = {
        protocolMessage: _0x452a25
      };
      await _0x4f3e52.relayMessage(_0x395a0a, _0x4fa4b7, {});
    }
  } catch (_0x263115) {
    console.log(_0x263115);
    _0xb35418("❌ *Error!* " + _0x263115.message);
  }
});
const _0xe1c018 = {
  pattern: "nikal",
  desc: "Displays a dynamic edit msg for fun.",
  category: "other",
  react: '🗿',
  filename: __filename
};
cmd(_0xe1c018, async (_0x175238, _0x4dbdf9, _0x1734c1, {
  from: _0x4386cd,
  reply: _0x165997
}) => {
  try {
    const _0x198e4e = {
      text: "PODI-AI🗿"
    };
    const _0x2bef22 = await _0x175238.sendMessage(_0x4386cd, _0x198e4e);
    const _0x3fb18e = ["⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀  ⠀  ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__|⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀     ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀(P)⠀⠀     ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀     ⠀   ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀   ⠀     ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀        ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀⠀__ ⠀  ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀⠀      ⢳⡀⠀⡏⠀⠀    ⠀  ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀ ⠀      ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀       ⣿  ⢹⠀          ⡇\n  ⠙⢿⣯⠄⠀⠀|__| ⠀    ⡿ ⠀⡇⠀⠀⠀⠀    ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`", "⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀\n ⠀⣴⠿⠏⠀⠀⠀⠀   ⠀  ⠀⢳⡀⠀⡏⠀⠀       ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀  ⠀       ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀       ⣿  ⢹⠀           ⡇\n  ⠙⢿⣯⠄⠀⠀lodu⠀⠀   ⡿ ⠀⡇⠀⠀⠀⠀   ⡼\n⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀  ⡴⠃⠀   ⠘⠤⣄⣠⠞⠀\n⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀\n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀\n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀"];
    for (const _0x266484 of _0x3fb18e) {
      await new Promise(_0x1613f2 => setTimeout(_0x1613f2, 500));
      const _0x33b311 = {
        conversation: _0x266484
      };
      const _0xe0096c = {
        key: _0x2bef22.key,
        type: 0xe,
        editedMessage: _0x33b311
      };
      const _0x13895d = {
        protocolMessage: _0xe0096c
      };
      await _0x175238.relayMessage(_0x4386cd, _0x13895d, {});
    }
  } catch (_0x5b6625) {
    console.log(_0x5b6625);
    _0x165997("❌ *Error!* " + _0x5b6625.message);
  }
});