const config = require("../settings");
const os = require('os');
const {
  cmd,
  commands
} = require("../lib/command");
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
const fetch = require("node-fetch");
const {
  lyrics,
  lyricsv2
} = require("@bochilteam/scraper");
const {
  default: makeWASocket,
  makeWALegacySocket,
  extractMessageContent,
  makeInMemoryStore,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  getBinaryNodeChild,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  WA_DEFAULT_EPHEMERAL
} = require("@whiskeysockets/baileys");
const uptime = process.uptime();
const hours = Math.floor(uptime % 86400 / 3600);
const minutes = Math.floor(uptime % 3600 / 60);
const seconds = Math.floor(uptime % 60);
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var tmsg5 = '';
if (config.LANG === 'SI') {
  tmsg5 = "*කරුණාකර මට ගීතයක නමක් දෙන්න. !*";
} else {
  tmsg5 = "*Please give me a song name. !*";
}
var descg1 = '';
if (config.LANG === 'SI') {
  descg1 = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි.";
} else {
  descg1 = "It gives lyrics of given song name.";
}
var cantscg = '';
if (config.LANG === 'SI') {
  cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*";
} else {
  cantscg = "*I cant find lyrics of this song !*";
}
var tmsg = '';
if (config.LANG === 'SI') {
  tmsg = "එය Tech news ලබා දෙයි.";
} else {
  tmsg = "It gives Tech news.";
}
var tmsg2 = '';
if (config.LANG === 'SI') {
  tmsg2 = "එය whatsapp beta news ලබා දෙයි.";
} else {
  tmsg2 = "It gives whatsapp beta news.";
}
var tmsg3 = '';
if (config.LANG === 'SI') {
  tmsg3 = "එය IOS news ලබා දෙයි.";
} else {
  tmsg3 = "It gives IOS news.";
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
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති ip එක පිළිබඳ විස්තර සපයයි.";
} else {
  desct = "It gives details of given ip.";
}
var needus1 = '';
if (config.LANG === 'SI') {
  needus1 = "*කරුණාකර මට ip එකක් ලබා දෙන්න !*";
} else {
  needus1 = "*Please give me a ip !*";
}
var cantf1 = '';
if (config.LANG === 'SI') {
  cantf1 = "*මට මෙම ip එක සොයාගත නොහැක !*";
} else {
  cantf1 = "*I cant find this ip !*";
}
var tmsg4 = '';
if (config.LANG === 'SI') {
  tmsg4 = "*කරුණාකර මට දුරකථන අංකයක් දෙන්න. !*";
} else {
  tmsg4 = "*Please give me phone number !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති දුරකථන අංකයේ හිමිකරු සොයා ගනී.";
} else {
  descg = "It find owner of given phone number.";
}
const _0x47d677 = {
  pattern: "tiktokstalk",
  react: "🎙️",
  desc: "To search tiktok username",
  category: "search",
  use: ".tiktokstalk <tt user name>"
};
function _0x10d3b9(_0x4e249a, _0x35c694, _0x5ec056, _0x1b2c88, _0x51a886) {
  return _0x3c7c(_0x1b2c88 - 0x89, _0x4e249a);
}
_0x47d677.filename = __filename;
cmd(_0x47d677, async (_0x515516, _0x55faab, _0x212106, {
  from: _0xb55212,
  l: _0xa25b8c,
  quoted: _0x41e92f,
  body: _0x4df516,
  isCmd: _0x3386ca,
  command: _0x2b87f8,
  args: _0x42fac6,
  q: _0x3a2073,
  isGroup: _0x5dadec,
  sender: _0x1bdd5e,
  senderNumber: _0x1f593a,
  botNumber2: _0x2acfa9,
  botNumber: _0x513d64,
  pushname: _0x236ff8,
  isMe: _0x3996c6,
  isOwner: _0x2683c1,
  groupMetadata: _0x566e82,
  groupName: _0x1e9d9e,
  participants: _0xb0df2b,
  groupAdmins: _0x2032ad,
  isBotAdmins: _0x407855,
  isAdmins: _0x555359,
  reply: _0x2ba86e
}) => {
  try {
    if (!_0x3a2073) {
      return _0x2ba86e("please give a tiktok username");
    }
    const _0x2c85c0 = await fetchJson("https://api.maher-zubair.tech/stalk/tiktok?q=" + _0x3a2073);
    let _0xc09eb9 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗧𝗧 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗦𝗘𝗔𝗥𝗖𝗛👨‍💻\n\n*📚 NAME:* " + _0x2c85c0.result.name + "\n*🔖 USERNAME:* " + _0x2c85c0.result.username + "\n*⛓️ FOLLOWERS:* " + _0x2c85c0.result.followers + "\n*✨ FOLLOWING:* " + _0x2c85c0.result.following + "\n*📃 DESCRIPTION:* " + _0x2c85c0.result.desc + "\n*👍 LIKES:* " + _0x2c85c0.result.likes + "\n*🚀 BIO:* " + _0x2c85c0.result.bio;
    const _0x8c298a = {
      url: _0x2c85c0.result.profile
    };
    const _0x31178d = {
      image: _0x8c298a,
      caption: _0xc09eb9
    };
    const _0x40dc58 = {
      quoted: _0x55faab
    };
    return await _0x515516.sendMessage(_0xb55212, _0x31178d, _0x40dc58);
    const _0x145907 = {
      text: '✅',
      key: _0x55faab.key
    };
    const _0x30c622 = {
      react: _0x145907
    };
    await _0x515516.sendMessage(_0xb55212, _0x30c622);
  } catch (_0x3a78a9) {
    _0xa25b8c(_0x3a78a9);
  }
});
const _0x487f82 = {
  pattern: "igstalk",
  react: "🎙️",
  desc: "To search instagram username",
  category: "search",
  use: ".igstalk <tt user name>",
  filename: __filename
};
cmd(_0x487f82, async (_0x49a809, _0x1070a7, _0xc493bb, {
  from: _0x56b2ee,
  l: _0x2e5607,
  quoted: _0xd7c64b,
  body: _0x20d862,
  isCmd: _0x2601ad,
  command: _0x4b9820,
  args: _0x219cef,
  q: _0x1fc0af,
  isGroup: _0x901a0b,
  sender: _0xbb20ab,
  senderNumber: _0x49026d,
  botNumber2: _0x4bf231,
  botNumber: _0x4c71b,
  pushname: _0x1be434,
  isMe: _0x568249,
  isOwner: _0x8c272b,
  groupMetadata: _0x16d36e,
  groupName: _0xa03b5e,
  participants: _0x28d6c7,
  groupAdmins: _0x25ea15,
  isBotAdmins: _0x985e09,
  isAdmins: _0x5bc979,
  reply: _0x5292fb
}) => {
  try {
    if (!_0x1fc0af) {
      return _0x5292fb("please give a instagram username");
    }
    const _0x331f50 = await fetchJson("https://api.maher-zubair.tech/stalk/instagram?q=" + _0x1fc0af);
    let _0xd2c53b = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗜𝗚 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗦𝗘𝗔𝗥𝗖𝗛👨‍💻\n\n*📚 NAME:* " + _0x331f50.result.username + "\n*🔖 USERNAME:* " + _0x331f50.result.fullname + "\n*⛓️ FOLLOWERS:* " + _0x331f50.result.followers + "\n*✨ FOLLOWING:* " + _0x331f50.result.posts + "\n*📃 DESCRIPTION:* " + _0x331f50.result.following + "\n*🚀 BIO:* " + _0x331f50.result.bio;
    const _0xb8d6d0 = {
      url: _0x331f50.result.photo_profile
    };
    const _0xb84cd9 = {
      image: _0xb8d6d0,
      caption: _0xd2c53b
    };
    const _0x2beba7 = {
      quoted: _0x1070a7
    };
    return await _0x49a809.sendMessage(_0x56b2ee, _0xb84cd9, _0x2beba7);
    const _0x151205 = {
      text: '✅',
      key: _0x1070a7.key
    };
    const _0x40a0da = {
      react: _0x151205
    };
    await _0x49a809.sendMessage(_0x56b2ee, _0x40a0da);
  } catch (_0xbb9c15) {
    _0x2e5607(_0xbb9c15);
  }
});
const _0x14da12 = {
  pattern: "news",
  react: '📰',
  desc: "news information",
  category: "search",
  use: ".news",
  filename: __filename
};
cmd(_0x14da12, async (_0x26d940, _0x1d2a95, _0x542f70, {
  from: _0x246ac4,
  prefix: _0x166223,
  l: _0x53f50b,
  quoted: _0x4e2651,
  body: _0x10febb,
  isCmd: _0x477fed,
  command: _0x40ae6d,
  args: _0x57db5f,
  q: _0x1ea3f5,
  isGroup: _0x2db1ee,
  sender: _0x3b7e61,
  senderNumber: _0x42450d,
  botNumber2: _0x4de18c,
  botNumber: _0x168744,
  pushname: _0x4a05e3,
  isMe: _0x2a8a03,
  isOwner: _0x75e2d1,
  groupMetadata: _0x2a9761,
  groupName: _0x3c134a,
  participants: _0x10c34f,
  groupAdmins: _0x242ba7,
  isBotAdmins: _0x174afa,
  isAdmins: _0x9626c3,
  reply: _0x58e773
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    if (config.MODE === "nonbutton") {
      const _0x58c933 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x166223 + "hirunews " + _0x1ea3f5,
          'description': "Hiru News 📰"
        }, {
          'title': '2',
          'rowId': _0x166223 + "derana " + _0x1ea3f5,
          'description': "Derana News 📰"
        }, {
          'title': '3',
          'rowId': _0x166223 + "lankadeepa " + _0x1ea3f5,
          'description': "Lankadeepa News 📰"
        }, {
          'title': '4',
          'rowId': _0x166223 + "siyatha " + _0x1ea3f5,
          'description': "Siyatha News 📰"
        }, {
          'title': '5',
          'rowId': _0x166223 + "itn " + _0x1ea3f5,
          'description': "Itn News 📰"
        }, {
          'title': '6',
          'rowId': _0x166223 + "newsfirst " + _0x1ea3f5,
          'description': "sirasa News 📰"
        }, {
          'title': '7',
          'rowId': _0x166223 + "nethnews " + _0x1ea3f5,
          'description': "Neth News 📰"
        }, {
          'title': '8',
          'rowId': _0x166223 + "silumina " + _0x1ea3f5,
          'description': "Silumina News 📰"
        }, {
          'title': '9',
          'rowId': _0x166223 + "lankatruth " + _0x1ea3f5,
          'description': "Lankatruth News 📰"
        }, {
          'title': '10',
          'rowId': _0x166223 + "gossiplankanews " + _0x1ea3f5,
          'description': "Gossiplankanews News 📰"
        }]
      }];
      const _0xe900e2 = {
        url: config.LOGO
      };
      const _0xaa11ef = {
        caption: "NEWS CENTER",
        image: _0xe900e2,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x58c933
      };
      const _0x4dedb1 = {
        quoted: _0x1d2a95
      };
      return await _0x26d940.replyList(_0x246ac4, _0xaa11ef, _0x4dedb1);
    }
    if (config.MODE === "button") {
      let _0x26cd5d = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Hiru News 📰",
          'id': _0x166223 + "hirunews"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Derana News 📰",
          'id': _0x166223 + "derana "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Lankadeepa News 📰",
          'id': _0x166223 + "lankadeepa "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Siyatha News 📰",
          'id': _0x166223 + "siyatha"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Itn News 📰",
          'id': _0x166223 + "itn "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "sirasa News 📰",
          'id': _0x166223 + "newsfirst "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Neth News 📰",
          'id': _0x166223 + "nethnews "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Silumina News 📰",
          'id': _0x166223 + "silumina"
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Lankatruth News 📰",
          'id': _0x166223 + "lankatruth "
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Gossiplankanews News 📰",
          'id': _0x166223 + "gossiplankanews "
        })
      }];
      const _0x1d7f33 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: dat
      };
      return await _0x26d940.sendButtonMessage(_0x246ac4, _0x26cd5d, _0x542f70, _0x1d7f33);
    }
  } catch (_0x4a9301) {
    _0x58e773("*Error !!*");
    _0x53f50b(_0x4a9301);
  }
});
const _0x1a49cf = {
  pattern: "gossiplankanews",
  react: '🔖',
  desc: "To see info of nethnews",
  category: '',
  use: ".gossiplankanews",
  filename: __filename
};
cmd(_0x1a49cf, async (_0x25f23f, _0xbb18b2, _0x45e8b7, {
  from: _0x3e6922,
  prefix: _0x87b6d5,
  l: _0x43ccd6,
  quoted: _0x528d39,
  body: _0x355ce1,
  isCmd: _0x4fc103,
  command: _0x494e94,
  args: _0x3631eb,
  q: _0x367d6e,
  isGroup: _0x52b2db,
  sender: _0x107bfc,
  senderNumber: _0x56261f,
  botNumber2: _0x31203d,
  botNumber: _0x44030c,
  pushname: _0x253183,
  isMe: _0x3771b2,
  isOwner: _0x9ce163,
  groupMetadata: _0x2e973e,
  groupName: _0xa4380c,
  participants: _0x4bbd6d,
  groupAdmins: _0x42a0fa,
  isBotAdmins: _0xcb7cb7,
  isAdmins: _0x158e87,
  reply: _0x54cff5
}) => {
  try {
    const _0x3a98a8 = await axios.get("https://www.gossiplankanews.com/?m=1");
    const _0x127f15 = cheerio.load(_0x3a98a8.data);
    const _0x5f1e4a = _0x127f15("h2.post-title > a").attr("href");
    const _0x560ed3 = await axios.get(_0x5f1e4a);
    const _0x488c2b = cheerio.load(_0x560ed3.data);
    const _0x58f282 = _0x488c2b("h1.post-title").text().trim();
    const _0x3ebfc0 = _0x488c2b("span.post-date.published").text().trim();
    const _0x5e3008 = _0x488c2b("div.separator > img").attr("src");
    const _0x5b0d6f = _0x488c2b('p').text();
    let _0x42218a = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗚𝗢𝗦𝗜𝗣𝗟𝗔𝗡𝗞𝗔👨‍💻\n\n*📚 Title:* " + _0x58f282 + "\n*🔖 Link:* " + _0x5f1e4a + "\n*🕛 Date:* " + _0x3ebfc0 + "\n*📃 Description:* " + _0x5b0d6f;
    const _0x56ae31 = {
      url: _0x5e3008
    };
    const _0x3d27d7 = {
      image: _0x56ae31,
      caption: _0x42218a
    };
    const _0x45a9fd = {
      quoted: _0xbb18b2
    };
    return await _0x25f23f.sendMessage(_0x3e6922, _0x3d27d7, _0x45a9fd);
    const _0x37642d = {
      text: '✅',
      key: _0xbb18b2.key
    };
    const _0x4f5795 = {
      react: _0x37642d
    };
    await _0x25f23f.sendMessage(_0x3e6922, _0x4f5795);
  } catch (_0x414c47) {
    _0x43ccd6(_0x414c47);
  }
});
const _0x1ce464 = {
  pattern: "lankatruth",
  react: '🔖',
  desc: "To see info of nethnews",
  category: '',
  use: ".nethnews",
  filename: __filename
};
cmd(_0x1ce464, async (_0x610eff, _0x262cc1, _0x52e34a, {
  from: _0x136ae1,
  prefix: _0x28fd2e,
  l: _0x9f5410,
  quoted: _0x558165,
  body: _0x179502,
  isCmd: _0x6eeeb8,
  command: _0x59d8f1,
  args: _0x4985d5,
  q: _0x148828,
  isGroup: _0x3878ac,
  sender: _0xc05655,
  senderNumber: _0x47011a,
  botNumber2: _0x2b231c,
  botNumber: _0x5a2df8,
  pushname: _0x49d067,
  isMe: _0x137aed,
  isOwner: _0x2ed03f,
  groupMetadata: _0x68fdc3,
  groupName: _0x3f5bd3,
  participants: _0x302493,
  groupAdmins: _0x671546,
  isBotAdmins: _0x5ba2bb,
  isAdmins: _0x1bb1d0,
  reply: _0xbe2a6
}) => {
  try {
    const _0x40c0e4 = await axios.get("https://lankatruth.com/si/?cat=2");
    const _0x31b5f4 = cheerio.load(_0x40c0e4.data);
    const _0x440901 = _0x31b5f4("div > div.elementor-post__title > a").attr("href");
    const _0x3e1ac1 = await axios.get(_0x440901);
    const _0x60f92a = cheerio.load(_0x3e1ac1.data);
    const _0x1b0831 = _0x60f92a("div > h1").text();
    const _0x23d7c7 = _0x60f92a("div.jeg_meta_date > a").text();
    const _0x386f88 = _0x60f92a("div > div > img").attr("src");
    const _0x29b2f3 = _0x60f92a("div.elementor-element.elementor-element-02b3942.elementor-widget.elementor-widget-theme-post-content > div > p").text();
    let _0x85054b = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗟𝗔𝗡𝗞𝗔𝗧𝗥𝗨𝗧𝗛👨‍💻\n\n*📚 Title:* " + _0x1b0831 + "\n*🔖 Link:* " + _0x440901 + "\n*🕛 Date:* " + _0x23d7c7 + "\n*📃 Description:* " + _0x29b2f3;
    const _0x557f12 = {
      url: _0x386f88
    };
    const _0xfa9ebc = {
      image: _0x557f12,
      caption: _0x85054b
    };
    const _0x5c5a83 = {
      quoted: _0x262cc1
    };
    return await _0x610eff.sendMessage(_0x136ae1, _0xfa9ebc, _0x5c5a83);
    const _0x1b652f = {
      text: '✅',
      key: _0x262cc1.key
    };
    const _0x26136f = {
      react: _0x1b652f
    };
    await _0x610eff.sendMessage(_0x136ae1, _0x26136f);
  } catch (_0x46a589) {
    _0x9f5410(_0x46a589);
  }
});
function _0x3b43a6(_0x338cd5, _0x5f2435, _0x4c2093, _0x17ef4e, _0x287200) {
  return _0x3c7c(_0x287200 - 0x21a, _0x338cd5);
}
const _0x492eec = {
  pattern: "silumina",
  react: '🔖',
  desc: "To see info of nethnews",
  category: '',
  use: ".nethnews",
  filename: __filename
};
cmd(_0x492eec, async (_0x2ceaf1, _0x5adb7a, _0x4c4f0b, {
  from: _0x20e2e2,
  prefix: _0x3938de,
  l: _0x400734,
  quoted: _0x3c3179,
  body: _0x1e3523,
  isCmd: _0x4a1fcc,
  command: _0xf6964a,
  args: _0x2edd45,
  q: _0x48014b,
  isGroup: _0x32a3d5,
  sender: _0x598333,
  senderNumber: _0x4fec69,
  botNumber2: _0x49d946,
  botNumber: _0xb0fb89,
  pushname: _0x49001a,
  isMe: _0x127a35,
  isOwner: _0x1bea37,
  groupMetadata: _0x451d33,
  groupName: _0x58af25,
  participants: _0x10242e,
  groupAdmins: _0x15de84,
  isBotAdmins: _0xd2c709,
  isAdmins: _0xcf77bc,
  reply: _0x3c1e99
}) => {
  try {
    const _0x1226e2 = await axios.get("https://www.silumina.lk/");
    const _0x17a433 = cheerio.load(_0x1226e2.data);
    const _0x28d77a = _0x17a433("div.penci-ercol-66.penci-ercol-order-2.penci-sticky-ct.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-202cd2f > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div.pcbg-content > div > div > div.pcbg-heading.item-hover > h3 > a").text().trim();
    const _0x34675c = _0x17a433("div.penci-ercol-66.penci-ercol-order-2.penci-sticky-ct.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-202cd2f > div > div > div > div > div > div > div > div:nth-child(1) > div > div > div.pcbg-content > div > div > div.grid-post-box-meta.pcbg-meta.item-hover > div > span > time").text();
    const _0x220a9e = _0x17a433("div.pcbg-heading.item-hover > h3 > a").attr("href");
    const _0x593dad = await axios.get(_0x220a9e);
    const _0x900c7 = cheerio.load(_0x593dad.data);
    const _0x263c3e = _0x900c7("div.post-image > a").attr("href");
    const _0x425257 = _0x900c7("div > #penci-post-entry-inner > p").text();
    let _0x5c4bd5 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗦𝗜𝗟𝗨𝗠𝗜𝗡𝗔👨‍💻\n\n*📚 Title:* " + _0x28d77a + "\n*🔖 Link:* " + _0x220a9e + "\n*🕛 Date:* " + _0x34675c + "\n*📃 Description:* " + _0x425257;
    const _0x3c3c97 = {
      url: _0x263c3e
    };
    const _0x58df41 = {
      image: _0x3c3c97,
      caption: _0x5c4bd5
    };
    const _0x42b34a = {
      quoted: _0x5adb7a
    };
    return await _0x2ceaf1.sendMessage(_0x20e2e2, _0x58df41, _0x42b34a);
    const _0x5b2ab6 = {
      text: '✅',
      key: _0x5adb7a.key
    };
    const _0x669e63 = {
      react: _0x5b2ab6
    };
    await _0x2ceaf1.sendMessage(_0x20e2e2, _0x669e63);
  } catch (_0x180762) {
    _0x400734(_0x180762);
  }
});
const _0x467bfa = {
  pattern: "nethnews",
  react: '🔖',
  desc: "To see info of nethnews",
  category: '',
  use: ".nethnews",
  filename: __filename
};
cmd(_0x467bfa, async (_0x6eabb1, _0x2af18e, _0x2ecd50, {
  from: _0x87a0b2,
  prefix: _0x26b4eb,
  l: _0x1531b7,
  quoted: _0x2ff3ee,
  body: _0x41b593,
  isCmd: _0x1f08b1,
  command: _0x179a6b,
  args: _0x2be102,
  q: _0x2eb20f,
  isGroup: _0x1b6c6f,
  sender: _0x534eac,
  senderNumber: _0x391cf0,
  botNumber2: _0x463eae,
  botNumber: _0x3355f5,
  pushname: _0x6f1ad3,
  isMe: _0x33d2cd,
  isOwner: _0x3e960e,
  groupMetadata: _0x572164,
  groupName: _0xe2721b,
  participants: _0x54e49d,
  groupAdmins: _0x4f634b,
  isBotAdmins: _0x3da2e1,
  isAdmins: _0xfe6675,
  reply: _0x10f8b2
}) => {
  try {
    const _0x16ef3a = await axios.get("https://nethnews.lk/");
    const _0x25e544 = cheerio.load(_0x16ef3a.data);
    const _0x498d64 = _0x25e544("div > div:nth-child(2) > div > div.col-sm-9 > h3 > a").text();
    const _0x4cef4a = _0x25e544("div > div:nth-child(2) > div > div.col-sm-9 > h3 > a").attr("href");
    const _0x5ecc48 = _0x25e544("div.col-sm-3 > img").attr("src");
    const _0x534fb3 = await axios.get(_0x4cef4a);
    const _0x418c47 = cheerio.load(_0x534fb3.data);
    const _0x9e909d = _0x418c47("header > span > time").text();
    const _0x108ee0 = _0x418c47("div.td-post-content > p").text();
    let _0x93de14 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗛𝗜𝗥𝗨𝗡𝗘𝗪𝗦👨‍💻\n\n*📚 Title:* " + _0x498d64 + "\n*🔖 Link:* " + _0x4cef4a + "\n*🕛 Date:* " + _0x9e909d + "\n*📃 Description:* " + _0x108ee0;
    const _0x51ed70 = {
      url: _0x5ecc48
    };
    const _0x28ca4c = {
      image: _0x51ed70,
      caption: _0x93de14
    };
    const _0x23fe4c = {
      quoted: _0x2af18e
    };
    return await _0x6eabb1.sendMessage(_0x87a0b2, _0x28ca4c, _0x23fe4c);
    const _0x43485b = {
      text: '✅',
      key: _0x2af18e.key
    };
    const _0x57e322 = {
      react: _0x43485b
    };
    await _0x6eabb1.sendMessage(_0x87a0b2, _0x57e322);
  } catch (_0x10088a) {
    _0x1531b7(_0x10088a);
  }
});
const _0x3d8563 = {
  pattern: "derana",
  react: '🔖',
  desc: "To see info of derananews",
  category: '',
  use: ".derana",
  filename: __filename
};
cmd(_0x3d8563, async (_0x5e7495, _0x4eee11, _0x3ab04c, {
  from: _0x57b25c,
  prefix: _0x49c411,
  l: _0x1a51b7,
  quoted: _0x3fdd12,
  body: _0x3ffe50,
  isCmd: _0x1c11cd,
  command: _0x1c2c80,
  args: _0x581a74,
  q: _0x1280e4,
  isGroup: _0x3ff03f,
  sender: _0xe33c93,
  senderNumber: _0x4eb885,
  botNumber2: _0x32f62e,
  botNumber: _0x1809d2,
  pushname: _0xbb727c,
  isMe: _0xcc29c8,
  isOwner: _0x4edc60,
  groupMetadata: _0x3ac44d,
  groupName: _0x257d4d,
  participants: _0x4da53e,
  groupAdmins: _0x47aab5,
  isBotAdmins: _0x3fa18d,
  isAdmins: _0x3e1051,
  reply: _0x50b2ff
}) => {
  try {
    const _0x1a7d2f = await fetchJson("https://vajira-api.vercel.app/news/derana");
    let _0x259421 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗗𝗘𝗥𝗔𝗡𝗔 𝗡𝗘𝗪𝗦👨‍💻\n\n*📚 Title:* " + _0x1a7d2f.result.title + "\n*🔖 Link:* " + _0x1a7d2f.result.url + "\n*🕛 TIME:* " + _0x1a7d2f.result.date + "\n*📃 DESCRIPTION:* " + _0x1a7d2f.result.desc;
    const _0xff979a = {
      url: "https://pomf2.lain.la/f/cup3gmk6.jpg"
    };
    const _0xbcf0d9 = {
      image: _0xff979a,
      caption: _0x259421
    };
    const _0xe26eae = {
      quoted: _0x4eee11
    };
    return await _0x5e7495.sendMessage(_0x57b25c, _0xbcf0d9, _0xe26eae);
    const _0x53b09d = {
      text: '✅',
      key: _0x4eee11.key
    };
    const _0x15edf1 = {
      react: _0x53b09d
    };
    await _0x5e7495.sendMessage(_0x57b25c, _0x15edf1);
  } catch (_0xe79eb6) {
    _0x1a51b7(_0xe79eb6);
  }
});
function _0x3c7c(_0xb7d806, _0x3f1f59) {
  const _0x5928e0 = _0x4764();
  _0x3c7c = function (_0x130fbe, _0x476437) {
    _0x130fbe = _0x130fbe - 189;
    let _0x3c7c3f = _0x5928e0[_0x130fbe];
    return _0x3c7c3f;
  };
  return _0x3c7c(_0xb7d806, _0x3f1f59);
}
const _0xaa2cb3 = {
  pattern: "hirunews",
  react: '🔖',
  desc: "To see info of hirunews",
  category: '',
  use: ".hirunews",
  filename: __filename
};
cmd(_0xaa2cb3, async (_0x2869ba, _0x552872, _0x3fc484, {
  from: _0x1fff6,
  prefix: _0x215d33,
  l: _0x3cb58b,
  quoted: _0x263e7e,
  body: _0x182176,
  isCmd: _0x14778a,
  command: _0x1d18e3,
  args: _0xd848a5,
  q: _0x1109ed,
  isGroup: _0x5ef835,
  sender: _0x1cff24,
  senderNumber: _0x41bfe3,
  botNumber2: _0x5d0596,
  botNumber: _0x5e742a,
  pushname: _0x433a92,
  isMe: _0x1c9b97,
  isOwner: _0x293b7e,
  groupMetadata: _0x3c6d37,
  groupName: _0xc41c82,
  participants: _0xc8a0b8,
  groupAdmins: _0xb34a3,
  isBotAdmins: _0x12e7b1,
  isAdmins: _0x15015d,
  reply: _0x48b01e
}) => {
  try {
    const _0xa0eca = await axios.get("https://www.hirunews.lk/local-news.php?pageID=1");
    const _0x3f41d5 = cheerio.load(_0xa0eca.data);
    const _0x2533b5 = _0x3f41d5("div:nth-child(2) > div.column.middle > div.all-section-tittle").text().trim();
    const _0x39763b = _0x3f41d5("div:nth-child(2) > div.column.left > div > a").attr("href");
    const _0x10bc43 = _0x3f41d5("div:nth-child(2) > div.column.middle > div.middle-tittle-time").text().trim();
    const _0x241190 = _0x3f41d5("img.middle-sm.img-fluid").attr("src");
    const _0x2c08f2 = await axios.get(_0x39763b);
    const _0x25792d = cheerio.load(_0x2c08f2.data);
    const _0x8ca891 = _0x25792d("#article-phara2").text().trim();
    let _0x5f4345 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗛𝗜𝗥𝗨𝗡𝗘𝗪𝗦👨‍💻\n\n*📚 Title:* " + _0x2533b5 + "\n*🔖 Link:* " + _0x39763b + "\n*🕛 Date:* " + _0x10bc43 + "\n*📃 Description:* " + _0x8ca891;
    const _0x2034e1 = {
      url: _0x241190
    };
    const _0x104aa1 = {
      image: _0x2034e1,
      caption: _0x5f4345
    };
    const _0x5365d8 = {
      quoted: _0x552872
    };
    return await _0x2869ba.sendMessage(_0x1fff6, _0x104aa1, _0x5365d8);
    const _0x4097d2 = {
      text: '✅',
      key: _0x552872.key
    };
    const _0x5030e8 = {
      react: _0x4097d2
    };
    await _0x2869ba.sendMessage(_0x1fff6, _0x5030e8);
  } catch (_0x5c60cd) {
    _0x3cb58b(_0x5c60cd);
  }
});
const _0x558c7a = {
  pattern: "lankadeepa",
  react: '🔖',
  desc: "To see info of hirunews",
  category: '',
  use: ".hirunews",
  filename: __filename
};
cmd(_0x558c7a, async (_0xbed83e, _0x3e86d3, _0xb55f17, {
  from: _0xe06e99,
  prefix: _0x55d8f5,
  l: _0x1e247f,
  quoted: _0x6ddc50,
  body: _0x55cd38,
  isCmd: _0x2fed43,
  command: _0x2c2219,
  args: _0x5eaf4f,
  q: _0x4b2c67,
  isGroup: _0x5d6df6,
  sender: _0x358ac0,
  senderNumber: _0x27087a,
  botNumber2: _0x440c6b,
  botNumber: _0x5a2dc3,
  pushname: _0x56cf1e,
  isMe: _0xf87dc7,
  isOwner: _0x26bad4,
  groupMetadata: _0x5309b4,
  groupName: _0x3e1050,
  participants: _0x708c5,
  groupAdmins: _0x1f2a77,
  isBotAdmins: _0x3ca589,
  isAdmins: _0x1ab941,
  reply: _0x59f611
}) => {
  try {
    const _0x4e55a9 = await axios.get("https://www.lankadeepa.lk/latest_news/1");
    const _0x642f6b = cheerio.load(_0x4e55a9.data);
    const _0x5e26c4 = _0x642f6b("div.m-t--10.p-b-40 > div:nth-child(1) > a").attr("href");
    const _0x12fe9e = _0x642f6b("div.m-t--10.p-b-40 > div:nth-child(1) > a > img").attr("src");
    const _0x3e7ac2 = _0x642f6b("div:nth-child(1) > div > h5:nth-child(1) > a").text().trim();
    const _0x29f099 = _0x642f6b("div:nth-child(1) > div > span > span.f1-s-4.cl8.hov-cl10.trans-03.timec").text().trim();
    const _0x2ab901 = await axios.get(_0x5e26c4);
    const _0x1c78d0 = cheerio.load(_0x2ab901.data);
    const _0x3ac21c = _0x1c78d0("div.header.inner-content.p-b-20").find('p').text().trim();
    let _0x57cec3 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗟𝗔𝗡𝗞𝗔𝗗𝗘𝗘𝗣𝗔👨‍💻\n\n*📚 Title:* " + _0x3e7ac2 + "\n*🔖 Link:* " + _0x5e26c4 + "\n*🚀 Date:* " + _0x29f099 + "\n*📃 DESCRIPTION:* " + _0x3ac21c;
    const _0x45bfb5 = {
      url: _0x12fe9e
    };
    const _0x3ccaf3 = {
      image: _0x45bfb5,
      caption: _0x57cec3
    };
    const _0x5018ba = {
      quoted: _0x3e86d3
    };
    return await _0xbed83e.sendMessage(_0xe06e99, _0x3ccaf3, _0x5018ba);
    const _0x405703 = {
      text: '✅',
      key: _0x3e86d3.key
    };
    const _0x303e9b = {
      react: _0x405703
    };
    await _0xbed83e.sendMessage(_0xe06e99, _0x303e9b);
  } catch (_0x2c42dd) {
    _0x1e247f(_0x2c42dd);
  }
});
const _0x594ac6 = {
  pattern: "newsfirst",
  react: '🔖',
  desc: "To see info of hirunews",
  category: '',
  use: ".hirunews",
  filename: __filename
};
cmd(_0x594ac6, async (_0x7378e1, _0x14b9e6, _0x140784, {
  from: _0x3a66ed,
  prefix: _0x7c9316,
  l: _0x129f55,
  quoted: _0x458fd6,
  body: _0x11e3c2,
  isCmd: _0x13e785,
  command: _0x2f6047,
  args: _0x4a043a,
  q: _0x5a0337,
  isGroup: _0x34f2f7,
  sender: _0x481e95,
  senderNumber: _0x1a911e,
  botNumber2: _0x1e9fbf,
  botNumber: _0x478c2b,
  pushname: _0x30328e,
  isMe: _0x11dd23,
  isOwner: _0x3332ff,
  groupMetadata: _0x52e9d5,
  groupName: _0xc6daab,
  participants: _0x215cf0,
  groupAdmins: _0x1e28b4,
  isBotAdmins: _0xda9542,
  isAdmins: _0x47dfd5,
  reply: _0x76b4fb
}) => {
  try {
    const _0x59876f = await axios.get("https://sinhala.newsfirst.lk/local");
    const _0x3c7aa5 = cheerio.load(_0x59876f.data);
    const _0x3ef940 = _0x3c7aa5("div.local_news > div:nth-child(1) > a").attr("href");
    const _0x13e5e8 = "https://sinhala.newsfirst.lk/" + _0x3ef940;
    const _0x18e672 = await axios.get(_0x13e5e8);
    const _0x15865c = cheerio.load(_0x18e672.data);
    const _0x563d16 = _0x15865c("div.ng-star-inserted > h1").text();
    const _0x445755 = _0x15865c("div.author_main > span").text();
    const _0x18634c = _0x15865c("#testId > p:nth-child(2)").text();
    const _0x5988b2 = _0x15865c("#testId > p:nth-child(3)").text();
    const _0x50e3e4 = _0x15865c("#testId > p:nth-child(4)").text();
    const _0x341a06 = _0x15865c("#post_img").attr("src").replace(/ /g, "%20");
    let _0xee5a0a = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗡𝗘𝗪𝗦𝗙𝗜𝗥𝗦𝗧👨‍💻\n\n*📚 Title:* " + _0x563d16 + "\n*🔖 Link:* " + _0x13e5e8 + "\n*🚀 Date:* " + _0x445755 + "\n*📃 DESCRIPTION:* " + _0x18634c + _0x5988b2 + _0x50e3e4;
    const _0x24ab42 = {
      url: _0x341a06
    };
    const _0x180133 = {
      image: _0x24ab42,
      caption: _0xee5a0a
    };
    const _0x96bf9d = {
      quoted: _0x14b9e6
    };
    return await _0x7378e1.sendMessage(_0x3a66ed, _0x180133, _0x96bf9d);
    const _0x443ac5 = {
      text: '✅',
      key: _0x14b9e6.key
    };
    const _0x2e546a = {
      react: _0x443ac5
    };
    await _0x7378e1.sendMessage(_0x3a66ed, _0x2e546a);
  } catch (_0x2e2c3f) {
    _0x129f55(_0x2e2c3f);
  }
});
const _0x1f939c = {
  pattern: "siyatha",
  react: '🔖',
  desc: "To see info of hirunews",
  category: '',
  use: ".hirunews",
  filename: __filename
};
cmd(_0x1f939c, async (_0x26b439, _0x3eaae9, _0x2df60f, {
  from: _0x3531c,
  prefix: _0xc51962,
  l: _0x5cf92c,
  quoted: _0x46262d,
  body: _0x7bc8cb,
  isCmd: _0x2a90b4,
  command: _0x3b72d2,
  args: _0x567ba8,
  q: _0x4ca2ad,
  isGroup: _0x571d64,
  sender: _0xcf845,
  senderNumber: _0x561787,
  botNumber2: _0xba5f9d,
  botNumber: _0x469bae,
  pushname: _0x193d7e,
  isMe: _0xd9c263,
  isOwner: _0x1a1ae8,
  groupMetadata: _0x51df4a,
  groupName: _0x35600b,
  participants: _0xdcc71e,
  groupAdmins: _0x5c4f37,
  isBotAdmins: _0x2ed050,
  isAdmins: _0x4db5c0,
  reply: _0x1d9999
}) => {
  try {
    const _0x4421b2 = await axios.get("https://siyathanews.lk/archives/category/local-news");
    const _0x3a55fd = cheerio.load(_0x4421b2.data);
    const _0x542431 = _0x3a55fd("div.td-module-thumb > a").attr("href");
    const _0x5369a2 = await axios.get(_0x542431);
    const _0x3be6cb = cheerio.load(_0x5369a2.data);
    const _0x4f8883 = _0x3be6cb("div.td_block_wrap.tdb_title.tdi_34.tdb-single-title.td-pb-border-top.td_block_template_1 > div > h1").text();
    const _0x2f4346 = _0x3be6cb("#tdi_29 > div > div.vc_column.tdi_32.wpb_column.vc_column_container.tdc-column.td-pb-span6 > div > div.vc_row_inner.tdi_37.vc_row.vc_inner.wpb_row.td-pb-row > div > div > div > div.td_block_wrap.tdb_single_date.tdi_40.td-pb-border-top.td_block_template_1.tdb-post-meta > div > time").text();
    const _0x44196 = _0x3be6cb("div.td_block_wrap.tdb_single_content.tdi_55.td-pb-border-top.td_block_template_1.td-post-content.tagdiv-type > div > p").text();
    let _0x24916d = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗦𝗜𝗬𝗔𝗧𝗛𝗔 𝗡𝗘𝗪𝗦👨‍💻\n\n*📚 Title:* " + _0x4f8883 + "\n*🔖 Link:* " + _0x542431 + "\n*🚀 Date:* " + _0x2f4346 + "\n*📃 DESCRIPTION:* " + _0x44196;
    const _0x56bad1 = {
      url: "https://pomf2.lain.la/f/08oe8nfw.jpeg"
    };
    const _0xbc8385 = {
      image: _0x56bad1,
      caption: _0x24916d
    };
    const _0x159daa = {
      quoted: _0x3eaae9
    };
    return await _0x26b439.sendMessage(_0x3531c, _0xbc8385, _0x159daa);
    const _0x5b8141 = {
      text: '✅',
      key: _0x3eaae9.key
    };
    const _0x5bfad5 = {
      react: _0x5b8141
    };
    await _0x26b439.sendMessage(_0x3531c, _0x5bfad5);
  } catch (_0x395b78) {
    _0x5cf92c(_0x395b78);
  }
});
const _0x30a664 = {
  pattern: "itn",
  react: '🔖',
  desc: "To see info of hirunews",
  category: '',
  use: ".hirunews",
  filename: __filename
};
cmd(_0x30a664, async (_0x1c0622, _0x62b2df, _0xf1c79b, {
  from: _0x2e923a,
  prefix: _0x3aadcd,
  l: _0x3ff3d4,
  quoted: _0x115573,
  body: _0x3596d8,
  isCmd: _0x595988,
  command: _0x3696a6,
  args: _0x30cd9e,
  q: _0x229711,
  isGroup: _0x200b09,
  sender: _0x492174,
  senderNumber: _0x266338,
  botNumber2: _0x3a5d02,
  botNumber: _0x3258d2,
  pushname: _0x2aec3d,
  isMe: _0x56b9e4,
  isOwner: _0x3ff531,
  groupMetadata: _0x4fccf9,
  groupName: _0x395a43,
  participants: _0x390026,
  groupAdmins: _0x44033b,
  isBotAdmins: _0x155016,
  isAdmins: _0x526bf1,
  reply: _0x2a61bf
}) => {
  try {
    const _0x55f045 = await axios.get("https://www.itnnews.lk/local/");
    const _0x82b2ad = cheerio.load(_0x55f045.data);
    const _0x53b925 = _0x82b2ad("div.block-inner > div:nth-child(1) > div > h3 > a").attr("href");
    const _0xef87f5 = _0x82b2ad("div.p-featured > a > img").attr("src");
    const _0x12db3c = await axios.get(_0x53b925);
    const _0x15519b = cheerio.load(_0x12db3c.data);
    const _0x9c8b70 = _0x15519b("div.single-header-content.overlay-text > h1").text();
    const _0x4fb353 = _0x15519b("span.meta-el.meta-date > time").text();
    const _0x575b32 = _0x15519b("div.e-ct-outer > div > p").text();
    let _0x4c6885 = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗠𝗗 𝗜𝗧𝗡 𝗡𝗘𝗪𝗦👨‍💻\n\n*📚 Title:* " + _0x9c8b70 + "\n*🔖 Link:* " + _0x53b925 + "\n*🚀 Date:* " + _0x4fb353 + "\n*📃 DESCRIPTION:* " + _0x575b32;
    const _0x104043 = {
      url: _0xef87f5
    };
    const _0x9d9e18 = {
      image: _0x104043,
      caption: _0x4c6885
    };
    const _0x298952 = {
      quoted: _0x62b2df
    };
    return await _0x1c0622.sendMessage(_0x2e923a, _0x9d9e18, _0x298952);
    const _0x4b7b44 = {
      text: '✅',
      key: _0x62b2df.key
    };
    const _0x42869b = {
      react: _0x4b7b44
    };
    await _0x1c0622.sendMessage(_0x2e923a, _0x42869b);
  } catch (_0x41a851) {
    _0x3ff3d4(_0x41a851);
  }
});
const _0x276a98 = {
  pattern: "ffstalk",
  react: "🎙️",
  desc: "To see info freefire id",
  category: "search",
  use: ".ffstalk",
  filename: __filename
};
cmd(_0x276a98, async (_0x5b3baf, _0x13d0c4, _0xe84bd6, {
  from: _0x4fd819,
  l: _0x33ecc0,
  prefix: _0x22e30d,
  quoted: _0x7d6546,
  body: _0x568abe,
  isCmd: _0x6a82da,
  command: _0x5eb663,
  args: _0xda1593,
  q: _0x1d1ff7,
  isGroup: _0x5d6f6f,
  sender: _0x2331a2,
  senderNumber: _0x23a694,
  botNumber2: _0x23a0b5,
  botNumber: _0xe873f2,
  pushname: _0x102b14,
  isMe: _0x375a42,
  isOwner: _0x4a971c,
  groupMetadata: _0x2b120b,
  groupName: _0xa92d14,
  participants: _0x9da13c,
  groupAdmins: _0x304dd2,
  isBotAdmins: _0x29137c,
  isAdmins: _0x5a57e8,
  reply: _0x41767b
}) => {
  try {
    if (isBan) {
      return _0x41767b(mess.banned);
    }
    if (isBanChat) {
      return _0x41767b(mess.bangc);
    }
    if (!_0x1d1ff7) {
      return _0x41767b("*Provide me Free Fire UID*");
    }
    const _0x240fcf = encodeURIComponent(_0x1d1ff7);
    const _0x5dfe86 = "https://ffname.vercel.app/?uid=" + _0x240fcf;
    const _0x5eda29 = await fetch(_0x5dfe86);
    const _0x53c171 = await _0x5eda29.json();
    if (!_0x53c171 || !_0x53c171.nickname || !_0x53c171.region) {
      return _0x41767b("Failed to generate Free Fire name");
    }
    const _0x52000f = _0x53c171.nickname;
    const _0x69a1e9 = _0x53c171.region;
    return _0x41767b(" Free Fire userid Information\n Name: " + _0x52000f + "\nRegion: " + _0x69a1e9);
  } catch (_0x423e8c) {
    console.error("Error during API request:", _0x423e8c);
    return _0x41767b("Unexpected error occurred during the request.");
  }
});
const _0x3f463a = {
  pattern: "manga",
  react: "🎙️",
  desc: "To see info of manga",
  category: "search",
  use: ".manga",
  filename: __filename
};
cmd(_0x3f463a, async (_0x2069c5, _0x3bd36a, _0x47725b, {
  from: _0x5bfdc5,
  l: _0x3578e1,
  prefix: _0x36cdd4,
  quoted: _0x2d97f5,
  body: _0x4ceda8,
  isCmd: _0x257610,
  command: _0x4a199b,
  args: _0x423445,
  q: _0x329d9c,
  isGroup: _0x2c7c56,
  sender: _0x1bc735,
  senderNumber: _0x3530c1,
  botNumber2: _0x7b131f,
  botNumber: _0x229167,
  pushname: _0x20281b,
  isMe: _0x239f71,
  isOwner: _0x2faaf6,
  groupMetadata: _0x526761,
  groupName: _0x328458,
  participants: _0x54e551,
  groupAdmins: _0x189932,
  isBotAdmins: _0x27e2e9,
  isAdmins: _0x1f0224,
  reply: _0x3da07e
}) => {
  try {
    const {
      Manga: _0x440c30
    } = require("@shineiichijo/marika");
    const _0x33fbd0 = new _0x440c30();
    if (!_0x329d9c) {
      return _0x3da07e("Which manga do you want to search?\nExample " + _0x36cdd4 + "manga naruto");
    }
    let _0x36ec1d = await _0x33fbd0.searchManga(_0x329d9c);
    let _0x28e9ff = "🎀 *Title: " + _0x36ec1d.data[0].title + "*\n";
    _0x28e9ff += "📈 *Status: " + _0x36ec1d.data[0].status + "*\n";
    _0x28e9ff += "🌸 *Total Volumes: " + _0x36ec1d.data[0].volumes + "*\n";
    _0x28e9ff += "🎗 *Total Chapters: " + _0x36ec1d.data[0].chapters + "*\n";
    _0x28e9ff += "🧧 *Genres:*\n";
    for (let _0x23293f = 0; _0x23293f < _0x36ec1d.data[0].genres.length; _0x23293f++) {
      _0x28e9ff += "\t\t\t\t\t\t\t\t*" + _0x36ec1d.data[0].genres[_0x23293f].name + "*\n";
    }
    _0x28e9ff += "✨ *Published on: " + _0x36ec1d.data[0].published.from + "*\n";
    _0x28e9ff += "🌟 *Score: " + _0x36ec1d.data[0].scored + "*\n";
    _0x28e9ff += "🎐 *Popularity: " + _0x36ec1d.data[0].popularity + "*\n";
    _0x28e9ff += "🎏 *Favorites: " + _0x36ec1d.data[0].favorites + "*\n";
    _0x28e9ff += "✍ *Authors:*\n";
    for (let _0x5034f0 = 0; _0x5034f0 < _0x36ec1d.data[0].authors.length; _0x5034f0++) {
      _0x28e9ff += "\t\t\t\t\t\t\t\t\t*" + _0x36ec1d.data[0].authors[_0x5034f0].name + "* *(" + _0x36ec1d.data[0].authors[0].type + ")*\n";
    }
    _0x28e9ff += "\n🌐 *URL: " + _0x36ec1d.data[0].url + "*\n\n";
    if (_0x36ec1d.data[0].background !== null) {
      _0x28e9ff += "🎆 *Background:* " + _0x36ec1d.data[0].background;
    }
    _0x28e9ff += "❄️ *Description:* " + _0x36ec1d.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, '');
    const _0x2bb457 = {
      url: _0x36ec1d.data[0].images.jpg.large_image_url
    };
    const _0x525cca = {
      image: _0x2bb457,
      caption: _0x28e9ff
    };
    const _0x42e507 = {
      quoted: _0x3bd36a
    };
    _0x2069c5.sendMessage(_0x5bfdc5, _0x525cca, _0x42e507);
    const _0x1a752d = {
      text: '✅',
      key: _0x3bd36a.key
    };
    const _0x397b96 = {
      react: _0x1a752d
    };
    await _0x2069c5.sendMessage(_0x5bfdc5, _0x397b96);
  } catch (_0x54d68d) {
    _0x3da07e();
    _0x3578e1(_0x54d68d);
  }
});
const _0x233012 = {
  pattern: "weather",
  react: "🎙️",
  desc: "To see info of weather",
  category: "search",
  use: ".weather",
  filename: __filename
};
cmd(_0x233012, async (_0x30e9c0, _0x3ec1c7, _0x42a7f8, {
  from: _0x31645f,
  l: _0x571ae8,
  prefix: _0x2cee41,
  quoted: _0x1f0271,
  body: _0x22590c,
  isCmd: _0x1bd4e4,
  command: _0x164db7,
  args: _0x15a344,
  q: _0x31c717,
  isGroup: _0x5ec4b7,
  sender: _0x4c06d2,
  senderNumber: _0x54d619,
  botNumber2: _0x1c529b,
  botNumber: _0x4fe587,
  pushname: _0x517644,
  isMe: _0xc7e41d,
  isOwner: _0x57d4f4,
  groupMetadata: _0x24f848,
  groupName: _0x22e2e1,
  participants: _0x368736,
  groupAdmins: _0x5054e0,
  isBotAdmins: _0xde24,
  isAdmins: _0x25ab2c,
  reply: _0x5be937
}) => {
  try {
    if (!_0x31c717) {
      return _0x5be937("What location?");
    }
    let _0x1e906a = _0x31c717.split(" ")[0];
    let _0x376c98 = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x1e906a + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
    let _0x1711d5 = '';
    _0x1711d5 += "*🗺️Weather of  " + _0x1e906a + "*\n\n";
    _0x1711d5 += "*Weather:-* " + _0x376c98.data.weather[0].main + "\n";
    _0x1711d5 += "*Description:-* " + _0x376c98.data.weather[0].description + "\n";
    _0x1711d5 += "*Avg Temp:-* " + _0x376c98.data.main.temp + "\n";
    _0x1711d5 += "*Feels Like:-* " + _0x376c98.data.main.feels_like + "\n";
    _0x1711d5 += "*Pressure:-* " + _0x376c98.data.main.pressure + "\n";
    _0x1711d5 += "*Humidity:-* " + _0x376c98.data.main.humidity + "\n";
    _0x1711d5 += "*Humidity:-* " + _0x376c98.data.wind.speed + "\n";
    _0x1711d5 += "*Latitude:-* " + _0x376c98.data.coord.lat + "\n";
    _0x1711d5 += "*Longitude:-* " + _0x376c98.data.coord.lon + "\n";
    _0x1711d5 += "*Country:-* " + _0x376c98.data.sys.country + "\n";
    const _0x6475e7 = {
      text: _0x1711d5
    };
    const _0x4fe4e1 = {
      quoted: _0x3ec1c7
    };
    _0x30e9c0.sendMessage(_0x31645f, _0x6475e7, _0x4fe4e1);
    const _0x3b5568 = {
      text: '✅',
      key: _0x3ec1c7.key
    };
    const _0x32b491 = {
      react: _0x3b5568
    };
    await _0x30e9c0.sendMessage(_0x31645f, _0x32b491);
  } catch (_0x3d90fb) {
    _0x5be937();
    _0x571ae8(_0x3d90fb);
  }
});
const _0x3b44ad = {
  pattern: "cricketscore",
  alias: ["score"],
  react: "🎙️",
  desc: "To see info of cricket",
  category: "search",
  use: ".cricketscore",
  filename: __filename
};
cmd(_0x3b44ad, async (_0x50bb96, _0x278fef, _0x20238e, {
  from: _0x201447,
  l: _0x3d0949,
  prefix: _0x554809,
  quoted: _0x4991a3,
  body: _0x13cd8f,
  isCmd: _0x2723fe,
  command: _0x1f0cb5,
  args: _0x5a2997,
  q: _0xec79e8,
  isGroup: _0x27a027,
  sender: _0x1aea93,
  senderNumber: _0x20f6bc,
  botNumber2: _0x210237,
  botNumber: _0xa95358,
  pushname: _0x36c52e,
  isMe: _0x49b524,
  isOwner: _0x3670e2,
  groupMetadata: _0x5a6097,
  groupName: _0x24eac3,
  participants: _0x3513dc,
  groupAdmins: _0x1ebe41,
  isBotAdmins: _0x25be16,
  isAdmins: _0x4c3ed1,
  reply: _0x1efba8
}) => {
  try {
    if (!_0xec79e8) {
      return _0x278fef.reply("*Provide a match ID for cricket score.*\nExample: !cricketscore 12345");
    }
    const _0x57bbbf = encodeURIComponent(_0xec79e8);
    const _0x5b91bb = "https://cricket-olive.vercel.app/score?id=" + _0x57bbbf;
    const _0x1f0d29 = await fetch(_0x5b91bb);
    if (!_0x1f0d29.ok) {
      return _0x278fef.reply("Invalid response from the cricket score API. Status code: " + _0x1f0d29.status);
    }
    const _0x10585e = await _0x1f0d29.json();
    let _0x589427 = "╭══════════════•∞•══╮\n";
    _0x589427 += "│⿻   *👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻*\n";
    _0x589427 += "│⿻   *LIVE MATCH INFO* ✨\n";
    _0x589427 += "│⿻\n";
    if (_0x10585e.update && _0x10585e.update.toLowerCase() !== "data not found") {
      _0x589427 += "│⿻   *" + _0x10585e.title + "*\n";
      _0x589427 += "│⿻   *" + _0x10585e.update + "*\n";
      _0x589427 += "│⿻ \n";
    } else {
      await _0x20238e.reply("*Update:* Data not found for the specified match ID.");
      return;
    }
    if (_0x10585e.livescore && _0x10585e.livescore.toLowerCase() !== "data not found") {
      _0x589427 += "│⿻   *Live Score:* " + _0x10585e.livescore + "\n";
      _0x589427 += "│⿻   *Run Rate:* " + _0x10585e.runrate + "\n";
      _0x589427 += "│⿻\n";
      _0x589427 += "│⿻   *Batter 1:* " + _0x10585e.batterone + "\n";
      _0x589427 += "│⿻   *" + _0x10585e.batsmanonerun + " (" + _0x10585e.batsmanoneball + ")* SR: " + _0x10585e.batsmanonesr + " " + (_0x10585e.batsmanone === _0x10585e.batterone ? '' : '') + "\n";
      _0x589427 += "│⿻\n";
      _0x589427 += "│⿻   *Batter 2:* " + _0x10585e.battertwo + "\n";
      _0x589427 += "│⿻   *" + _0x10585e.batsmantworun + " (" + _0x10585e.batsmantwoball + ")* SR: " + _0x10585e.batsmantwosr + " " + (_0x10585e.battertwo === _0x10585e.battertwo ? '' : '') + "\n";
      _0x589427 += "│⿻\n";
      _0x589427 += "│⿻   *Bowler 1:* " + _0x10585e.bowlerone + "\n";
      _0x589427 += "│⿻   *" + _0x10585e.bowleroneover + " overs, " + _0x10585e.bowleronerun + '/' + _0x10585e.bowleronewickers + ", Econ:* " + _0x10585e.bowleroneeconomy + " " + (_0x10585e.bowlerone === _0x10585e.bowlerone ? '' : '') + "\n";
      _0x589427 += "│⿻\n";
      _0x589427 += "│⿻    *Bowler 2:* " + _0x10585e.bowlertwo + "\n";
      _0x589427 += "│⿻   *" + _0x10585e.bowlertwoover + " overs, " + _0x10585e.bowlertworun + '/' + _0x10585e.bowlertwowickers + ", Econ:* " + _0x10585e.bowlertwoeconomy + " " + (_0x10585e.bowlertwo === _0x10585e.bowlertwo ? '' : '') + "\n";
    }
    _0x589427 += "╰══•∞•═══════════════╯ ";
    await _0x20238e.reply(_0x589427);
  } catch (_0x59498c) {
    console.error(_0x59498c);
    return _0x278fef.reply("An error occurred while processing the cricket score request. " + _0x59498c.message);
  }
});
const _0x2b04e9 = {
  pattern: "gitstalk",
  react: "🎙️",
  desc: "To search github info",
  category: "gitstalk",
  use: ".xnxxsearch <xnxx name>",
  filename: __filename
};
cmd(_0x2b04e9, async (_0x49ea33, _0x116286, _0x20d5d6, {
  from: _0xa95b24,
  l: _0x5a5b5e,
  prefix: _0x34637a,
  quoted: _0x43258a,
  body: _0x447aa2,
  isCmd: _0x1935bd,
  command: _0x42141a,
  args: _0x2b087a,
  q: _0x45a82c,
  isGroup: _0x5c220b,
  sender: _0x2a5657,
  senderNumber: _0x561682,
  botNumber2: _0x22a115,
  botNumber: _0x4edf59,
  pushname: _0x34d8a5,
  isMe: _0x4ea7e7,
  isOwner: _0x24ee0f,
  groupMetadata: _0x22f164,
  groupName: _0x4e0843,
  participants: _0x3ff502,
  groupAdmins: _0x3aac61,
  isBotAdmins: _0x55d18d,
  isAdmins: _0x223b0c,
  reply: _0x217f65
}) => {
  try {
    if (!_0x2b087a[0]) {
      return _0x20d5d6.reply("Mention a GitHub username to stalk.");
    }
    const _0x58bd40 = _0x2b087a[0];
    const _0x1181dd = await axios.get("https://api.github.com/users/" + _0x58bd40);
    const _0x343e6b = _0x1181dd.data;
    if (_0x1181dd.status !== 200) {
      return _0x116286.reply("❌ GitHub user not found.");
    }
    let _0x125048 = "🌟 *GitHub Profile - @" + _0x343e6b.login + "*\n\n";
    _0x125048 += "  ◦  *Name*: " + (_0x343e6b.name || "N/A") + "\n";
    _0x125048 += "  ◦  *Username*: @" + _0x343e6b.login + "\n";
    _0x125048 += "  ◦  *Bio*: " + (_0x343e6b.bio || "N/A") + "\n";
    _0x125048 += "  ◦  *ID*: " + _0x343e6b.id + "\n";
    _0x125048 += "  ◦  *Node ID*: " + _0x343e6b.node_id + "\n";
    _0x125048 += "  ◦  *Profile URL*: " + _0x343e6b.avatar_url + "\n";
    _0x125048 += "  ◦  *GitHub URL*: " + _0x343e6b.html_url + "\n";
    _0x125048 += "  ◦  *Type*: " + _0x343e6b.type + "\n";
    _0x125048 += "  ◦  *Admin*: " + (_0x343e6b.site_admin ? "Yes" : 'No') + "\n";
    _0x125048 += "  ◦  *Company*: " + (_0x343e6b.company || "N/A") + "\n";
    _0x125048 += "  ◦  *Blog*: " + (_0x343e6b.blog || "N/A") + "\n";
    _0x125048 += "  ◦  *Location*: " + (_0x343e6b.location || "N/A") + "\n";
    _0x125048 += "  ◦  *Email*: " + (_0x343e6b.email || "N/A") + "\n";
    _0x125048 += "  ◦  *Public Repositories*: " + _0x343e6b.public_repos + "\n";
    _0x125048 += "  ◦  *Public Gists*: " + _0x343e6b.public_gists + "\n";
    _0x125048 += "  ◦  *Followers*: " + _0x343e6b.followers + "\n";
    _0x125048 += "  ◦  *Following*: " + _0x343e6b.following + "\n";
    _0x125048 += "  ◦  *Created At*: " + _0x343e6b.created_at + "\n";
    _0x125048 += "  ◦  *Updated At*: " + _0x343e6b.updated_at + "\n";
    const _0x54322b = await fetch("https://api.github.com/users/" + _0x58bd40 + "/repos?per_page=5&sort=stargazers_count&direction=desc");
    const _0x19143a = await _0x54322b.json();
    if (_0x19143a.length > 0) {
      const _0x37a1e3 = _0x19143a.slice(0, 5);
      const _0x26ea5e = _0x37a1e3.map(_0x4c1172 => {
        return "  ◦  *Repository*: [" + _0x4c1172.name + '](' + _0x4c1172.html_url + ")\n  ◦  *Description*: " + (_0x4c1172.description || "N/A") + "\n  ◦  *Stars*: " + _0x4c1172.stargazers_count + "\n  ◦  *Forks*: " + _0x4c1172.forks;
      });
      const _0x655f33 = "📚 *Top Starred Repositories*\n\n" + _0x26ea5e.join("\n\n");
      _0x125048 += "\n\n" + _0x655f33;
    } else {
      _0x125048 += "\n\nNo public repositories found.";
    }
    const _0x156672 = {
      url: _0x343e6b.avatar_url
    };
    const _0x3a52ec = {
      image: _0x156672,
      caption: _0x125048
    };
    await _0x49ea33.sendMessage(_0x116286.chat, _0x3a52ec, {
      'quoted': _0x116286
    });
    const _0xafce4c = {
      text: '✔',
      key: _0x20d5d6.key
    };
    const _0x1c354b = {
      react: _0xafce4c
    };
    await _0x49ea33.sendMessage(_0x20d5d6.chat, _0x1c354b);
  } catch (_0xc2c54b) {
    console.error("Error fetching GitHub data:", _0xc2c54b);
    const _0x2ff323 = {
      quoted: _0x116286
    };
    await _0x49ea33.sendMessage(_0x20d5d6.chat, "An error occurred while fetching GitHub data.", _0x2ff323);
    const _0x175275 = {
      text: '✅',
      key: _0x116286.key
    };
    const _0x517e85 = {
      react: _0x175275
    };
    await _0x49ea33.sendMessage(_0xa95b24, _0x517e85);
    _0x217f65();
    _0x5a5b5e(e);
  }
});
const _0x13a3ef = {
  pattern: "infobot",
  react: "🎙️",
  desc: "To see info of bot",
  category: "search",
  use: ".infobot",
  filename: __filename
};
cmd(_0x13a3ef, async (_0x23a1b1, _0x6f98e, _0x26459a, {
  from: _0x45df94,
  l: _0xa952c,
  prefix: _0x105a17,
  quoted: _0x2d5429,
  body: _0x3a7069,
  isCmd: _0x1c213e,
  command: _0x79022e,
  args: _0xb7e8c1,
  q: _0x279a01,
  isGroup: _0x4f9565,
  sender: _0x25ff0b,
  senderNumber: _0x770422,
  botNumber2: _0x2e9f8a,
  botNumber: _0x87ed54,
  pushname: _0x4b6de2,
  isMe: _0xfea129,
  isOwner: _0x22bdd9,
  groupMetadata: _0x4186c6,
  groupName: _0x325340,
  participants: _0x2af6ff,
  groupAdmins: _0x516a9d,
  isBotAdmins: _0x3dd099,
  isAdmins: _0x5dc2d8,
  reply: _0x387fa0
}) => {
  try {
    const _0x3a6e1b = "\n╭━──━─◈─━─━╮\n│🔖 *Bot Name* : 👨‍💻 Ｖ𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻\n│🔖 *Owner Name* : _𝗥𝗔𝗠𝗘𝗦𝗛 𝗦𝗔𝗠𝗣𝗔𝗧𝗛_\n│🔖 *Owner Number* : https://wa.me/94766002356\n│🔖 *Prefix* : " + _0x105a17 + "\n│🔖 *Runtime* : _*" + hours + "h " + minutes + "m " + seconds + "s*_\n╰━━─━─◈─━─━╯";
    const _0x296fb6 = [".menu", ".ping"];
    _0x23a1b1.sendPoll(_0x6f98e.chat, _0x3a6e1b, _0x296fb6);
    const _0x583546 = {
      text: '✅',
      key: _0x6f98e.key
    };
    const _0x568c6f = {
      react: _0x583546
    };
    await _0x23a1b1.sendMessage(_0x45df94, _0x568c6f);
  } catch (_0x1737b7) {
    _0x387fa0();
    _0xa952c(_0x1737b7);
  }
});
const _0x3788ba = {
  pattern: "nofind",
  react: "🎙️",
  desc: "To see same to the number",
  category: "search",
  use: ".nofind",
  filename: __filename
};
cmd(_0x3788ba, async (_0xe4af1, _0x1858d7, _0x1ea29b, {
  from: _0x3de62d,
  l: _0x42eb3d,
  prefix: _0x2e42af,
  quoted: _0xab428a,
  body: _0x3df27e,
  isCmd: _0x272b00,
  command: _0x368bdf,
  args: _0x2bc44f,
  q: _0x69a29,
  isGroup: _0x41a5d3,
  sender: _0x4b8f81,
  senderNumber: _0x32202f,
  botNumber2: _0x33ada7,
  botNumber: _0xf8074f,
  pushname: _0x1da90f,
  isMe: _0x5f0979,
  isOwner: _0x518103,
  groupMetadata: _0x51087c,
  groupName: _0x160856,
  participants: _0x17361e,
  groupAdmins: _0x4a06b2,
  isBotAdmins: _0x2f48c7,
  isAdmins: _0x42cf30,
  reply: _0x506893
}) => {
  try {
    let _0x1b08b2 = /x/g;
    if (!_0x69a29) {
      throw "Give a number to search";
    }
    if (!_0x69a29.match(_0x1b08b2)) {
      throw "*Example: " + (_0x2e42af + _0x368bdf) + " 919142294xxx";
    }
    let _0x34554c = _0x69a29.match(_0x1b08b2).length;
    let _0x287854 = Math.pow(10, _0x34554c);
    let _0x4eb31e = [];
    for (let _0x4fd3c2 = 0; _0x4fd3c2 < _0x287854; _0x4fd3c2++) {
      let _0xf584f1 = [..._0x4fd3c2.toString().padStart(_0x34554c, '0')];
      let _0x1cda02 = _0x69a29.replace(_0x1b08b2, () => _0xf584f1.shift()) + "@s.whatsapp.net";
      if (await _0xe4af1.onWhatsApp(_0x1cda02).then(_0x4beb51 => (_0x4beb51[0] || {}).exists)) {
        let _0xc9bef3 = await _0xe4af1.fetchStatus(_0x1cda02)["catch"](_0x236fdf => {});
        const _0x4538e6 = {
          'exists': true,
          'jid': _0x1cda02,
          ..._0xc9bef3
        };
        _0x4eb31e.push(_0x4538e6);
      } else {
        const _0x59ff14 = {
          exists: false,
          jid: _0x1cda02
        };
        _0x4eb31e.push(_0x59ff14);
      }
    }
    const _0x681271 = {
      text: '✅',
      key: _0x1858d7.key
    };
    const _0x355772 = {
      react: _0x681271
    };
    await _0xe4af1.sendMessage(_0x3de62d, _0x355772);
  } catch (_0x36405a) {
    _0x506893();
    _0x42eb3d(_0x36405a);
  }
});
const _0x5ceaa4 = {
  pattern: "xnxxsearch",
  react: "🎙️",
  desc: "To search xnxx video",
  category: "search",
  use: ".xnxxsearch <xnxx name>",
  filename: __filename
};
cmd(_0x5ceaa4, async (_0x147b94, _0x336207, _0xb5947c, {
  from: _0x91393c,
  l: _0x10a3bb,
  prefix: _0x3e8467,
  quoted: _0x454cd9,
  body: _0x377143,
  isCmd: _0x4fcde8,
  command: _0x257e12,
  args: _0x2f41db,
  q: _0x42a484,
  isGroup: _0x59b333,
  sender: _0x1a20ea,
  senderNumber: _0x2b56d7,
  botNumber2: _0x3efca2,
  botNumber: _0x1f2e70,
  pushname: _0x3003d1,
  isMe: _0x25156e,
  isOwner: _0x138956,
  groupMetadata: _0x7f9dfe,
  groupName: _0x21ef65,
  participants: _0x4d844d,
  groupAdmins: _0x2a07a8,
  isBotAdmins: _0x35ba40,
  isAdmins: _0x389e43,
  reply: _0x5dad9a
}) => {
  try {
    if (!_0x42a484) {
      return _0x336207.reply("Enter Query");
    }
    const _0x289807 = require("api-dylux");
    let _0x450cd5 = await _0x289807.xnxxSearch(_0x42a484);
    let _0x3c7d31 = _0x450cd5.result.map((_0x1f104, _0xea54f9) => _0xea54f9 + 1 + "┃ *Title* : " + _0x1f104.title + "\n*Link:* " + _0x1f104.link + "\n").join("\n");
    if (_0x450cd5.status) {
      _0x336207.reply(_0x3c7d31);
    }
    const _0x55cebf = {
      text: '✅',
      key: _0x336207.key
    };
    const _0x2b24c3 = {
      react: _0x55cebf
    };
    await _0x147b94.sendMessage(_0x91393c, _0x2b24c3);
  } catch (_0x6ce458) {
    _0x5dad9a();
    _0x10a3bb(_0x6ce458);
  }
});
const _0x56a67b = {
  pattern: "google",
  react: "🎙️",
  desc: "To search infomations",
  category: "search",
  use: ".google <search name>",
  filename: __filename
};
cmd(_0x56a67b, async (_0x2bc294, _0x263c7e, _0x431b8f, {
  from: _0x4cebe7,
  l: _0x50aab3,
  prefix: _0x2e8c60,
  quoted: _0x331224,
  body: _0x986f3c,
  isCmd: _0x5bc850,
  command: _0x4dcce5,
  args: _0x4508aa,
  q: _0x5cee9b,
  isGroup: _0x217c1c,
  sender: _0x32188c,
  senderNumber: _0x1dcbb8,
  botNumber2: _0xb80d1c,
  botNumber: _0x5ddd3d,
  pushname: _0x139413,
  isMe: _0x1c02f1,
  isOwner: _0x1ad596,
  groupMetadata: _0x5b84d4,
  groupName: _0x7ae9b3,
  participants: _0x331d5f,
  groupAdmins: _0x55d48d,
  isBotAdmins: _0x435929,
  isAdmins: _0x3e7dca,
  reply: _0x52c1a5
}) => {
  try {
    if (!_0x5cee9b) {
      throw "Example : " + (_0x2e8c60 + _0x4dcce5) + " what is a bot";
    }
    let _0x5e98a4 = require("google-it");
    const _0x38f7af = {
      query: _0x5cee9b
    };
    _0x5e98a4(_0x38f7af).then(_0x211707 => {
      let _0x3aa922 = "Google Search From : " + text + "\n\n";
      for (let _0x17e698 of _0x211707) {
        _0x3aa922 += "⭔ *Title* : " + _0x17e698.title + "\n";
        _0x3aa922 += "⭔ *Description* : " + _0x17e698.snippet + "\n";
        _0x3aa922 += "⭔ *Link* : " + _0x17e698.link + "\n\n────────────────────────\n\n";
      }
      _0x263c7e.reply(_0x3aa922);
    });
    const _0x2964ae = {
      text: '✅',
      key: _0x263c7e.key
    };
    const _0x233902 = {
      react: _0x2964ae
    };
    await _0x2bc294.sendMessage(_0x4cebe7, _0x233902);
  } catch (_0x22264f) {
    _0x52c1a5();
    _0x50aab3(_0x22264f);
  }
});
const _0x2d56a3 = {
  pattern: "lyrics",
  category: "search",
  react: '🎬',
  desc: "Search lyrics",
  use: ".lyrics song name",
  filename: __filename
};
cmd(_0x2d56a3, async (_0x3cb8d6, _0x1e2d8f, _0x54fe33, {
  reply: _0x2755b8,
  isDev: _0x227195,
  from: _0x582ab1,
  l: _0x31aca2,
  q: _0x75e8ca,
  prefix: _0x464e1f
}) => {
  try {
    if (!_0x75e8ca) {
      return await _0x2755b8("*Please Give Me Text..! 🖊️*");
    }
    const _0x3ed950 = "https://www.lyrihub.lk/?s=" + _0x75e8ca;
    const _0x5c096a = await axios.get(_0x3ed950);
    const _0xb4de4e = cheerio.load(_0x5c096a.data);
    const _0x3adcef = [];
    _0xb4de4e("article").each((_0x4cf179, _0x1d6182) => {
      _0x3adcef.push({
        'title': _0xb4de4e(_0x1d6182).find("h2.entry-title > a").text(),
        'link': _0xb4de4e(_0x1d6182).find('a').attr("href")
      });
    });
    const _0x40ab0c = {
      quoted: _0x1e2d8f
    };
    if (_0x3adcef.length < 1) {
      return await _0x3cb8d6.sendMessage(_0x582ab1, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x40ab0c);
    }
    var _0x54a7b6 = [];
    for (var _0x2f91ec = 0; _0x2f91ec < _0x3adcef.length; _0x2f91ec++) {
      _0x54a7b6.push({
        'title': _0x2f91ec + 1.1,
        'description': _0x3adcef[_0x2f91ec].title,
        'rowId': _0x464e1f + "ly " + _0x3adcef[_0x2f91ec].link
      });
    }
    const _0x3b1182 = {
      title: "*ＬＹＲＩＣＳ ＳＥＡＲＣＨ*\n",
      rows: _0x54a7b6
    };
    const _0x5f4c75 = [_0x3b1182];
    const _0x5e7e1e = {
      url: config.LOGO
    };
    const _0x3240e8 = {
      caption: "🎬 PODIYA MD LYRICS 🎬",
      image: _0x5e7e1e,
      footer: "LYRICS SEARCH BY PODIYA MD",
      title: "Result from Lyrics. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x5f4c75
    };
    const _0x2a46d6 = {
      quoted: _0x1e2d8f
    };
    return await _0x3cb8d6.replyList(_0x582ab1, _0x3240e8, _0x2a46d6);
  } catch (_0x283f60) {
    _0x2755b8("*ERROR !!*");
    _0x31aca2(_0x283f60);
  }
});
const _0x4fb1ba = {
  pattern: 'ly',
  react: "🎙️",
  filename: __filename
};
cmd(_0x4fb1ba, async (_0x1c08a8, _0x32d50d, _0x389844, {
  from: _0xc2c684,
  l: _0x5319f5,
  quoted: _0x5792e6,
  prefix: _0x19f626,
  body: _0x5e5c8f,
  isCmd: _0xce9372,
  command: _0x31d059,
  args: _0x59c0a9,
  q: _0xadf500,
  isGroup: _0x2de744,
  sender: _0x1e4797,
  senderNumber: _0x9dc974,
  botNumber2: _0x244537,
  botNumber: _0xc13d5e,
  pushname: _0x4b821c,
  isMe: _0x14da47,
  isOwner: _0x1eab01,
  groupMetadata: _0x391296,
  groupName: _0x31c436,
  participants: _0x1b87b6,
  groupAdmins: _0x1de9c1,
  isBotAdmins: _0x53dc53,
  isAdmins: _0x18169a,
  reply: _0x451b94
}) => {
  try {
    if (!_0xadf500) {
      return _0x451b94("please give a tiktok username");
    }
    const _0x23833d = await axios.get(_0xadf500);
    const _0x136ee4 = cheerio.load(_0x23833d.data);
    const _0x113eb0 = _0x136ee4("div.nameofsong > h1").text().trim();
    const _0x363e2e = _0x136ee4("div.titleofsong > h2").text().trim();
    const _0x22b200 = _0x136ee4("div.artistofsong").text().trim();
    const _0x38bb67 = _0x136ee4("img.img-fluid").attr("src").trim();
    const _0x5549f4 = _0x136ee4("div.lyrics-content").text().trim();
    let _0x53c61e = "👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 𝗟𝗬𝗥𝗜𝗖𝗦 𝗦𝗘𝗔𝗥𝗖𝗛👨‍💻\n\n*📚 TITLE:* " + _0x113eb0 + '|' + _0x363e2e + "\n*🔖 ARTIST:* " + _0x22b200 + "\n*⛓️ LYRICS:* " + _0x5549f4;
    const _0x107950 = {
      url: _0x38bb67
    };
    const _0x498f0e = {
      image: _0x107950,
      caption: _0x53c61e
    };
    const _0x1a332 = {
      quoted: _0x32d50d
    };
    return await _0x1c08a8.sendMessage(_0xc2c684, _0x498f0e, _0x1a332);
    const _0xff2dc3 = {
      text: '✅',
      key: _0x32d50d.key
    };
    const _0x5e1dd0 = {
      react: _0xff2dc3
    };
    await _0x1c08a8.sendMessage(_0xc2c684, _0x5e1dd0);
  } catch (_0x3c68c9) {
    _0x5319f5(_0x3c68c9);
  }
});
function _0x439dd0(_0x22aa2e, _0x597437, _0x5511fe, _0xa70199, _0x40c566) {
  return _0x3c7c(_0xa70199 + 0x1d3, _0x40c566);
}
const _0x1f22d0 = {
  pattern: "itunes",
  alias: ["lyric"],
  react: "🎙️",
  desc: descg1,
  category: "search",
  use: ".itunes <song name>",
  filename: __filename
};
cmd(_0x1f22d0, async (_0x2b1e13, _0x139220, _0x1c70c2, {
  from: _0x1b1a5e,
  l: _0x304717,
  quoted: _0x5bf15e,
  body: _0x319cd6,
  isCmd: _0x14209f,
  command: _0x51ed60,
  args: _0x521320,
  q: _0x2bd219,
  isGroup: _0x1def68,
  sender: _0x4ab8d6,
  senderNumber: _0x2394cb,
  botNumber2: _0x603ef8,
  botNumber: _0x3ccad1,
  pushname: _0x547bc9,
  isMe: _0x2da9cc,
  isOwner: _0x41cdf2,
  groupMetadata: _0x55c8ef,
  groupName: _0x521a3e,
  participants: _0x75377b,
  groupAdmins: _0x11822d,
  isBotAdmins: _0x386575,
  isAdmins: _0x1955d3,
  reply: _0x553a47
}) => {
  try {
    if (!_0x2bd219) {
      return _0x553a47("Please provide a song name");
    }
    let _0x1fc130 = await fetch("https://api.popcat.xyz/itunes?q=" + _0x2bd219);
    if (!_0x1fc130.ok) {
      throw new Error("API request failed with status " + _0x1fc130.status);
    }
    let _0x4ed70a = await _0x1fc130.json();
    console.log("JSON response:", _0x4ed70a);
    let _0x3f6cf2 = "*Song Information:*\n\n     • *Name:* " + _0x4ed70a.name + "\n\n     • *Artist:* " + _0x4ed70a.artist + "\n\n     • *Album:* " + _0x4ed70a.album + "\n\n     • *Release Date:* " + _0x4ed70a.release_date + "\n\n     • *Price:* " + _0x4ed70a.price + "\n\n     • *Length:* " + _0x4ed70a.length + "\n\n     • *Genre:* " + _0x4ed70a.genre + "\n\n     • *URL:* " + _0x4ed70a.url;
    if (_0x4ed70a.thumbnail) {
      const _0x555e60 = {
        url: _0x4ed70a.thumbnail
      };
      const _0x2eefa0 = {
        image: _0x555e60,
        caption: _0x3f6cf2
      };
      await _0x2b1e13.sendMessage(_0x139220.chat, _0x2eefa0, {
        'quoted': _0x139220
      });
    }
    const _0x3b4367 = {
      text: '✅',
      key: _0x139220.key
    };
    const _0x563e64 = {
      react: _0x3b4367
    };
    await _0x2b1e13.sendMessage(_0x1b1a5e, _0x563e64);
  } catch (_0x54cf5c) {
    _0x553a47();
    _0x304717(_0x54cf5c);
  }
});
const _0x1955db = {
  pattern: "true",
  alias: ["truecaller"],
  react: '💯',
  desc: descg,
  category: "search",
  use: ".true <phone number>",
  filename: __filename
};
cmd(_0x1955db, async (_0x245e43, _0x10a704, _0x55b633, {
  from: _0x10c103,
  l: _0x381c50,
  quoted: _0x4d252f,
  body: _0x4053d0,
  isCmd: _0x2ddbe9,
  command: _0xda703b,
  args: _0x1b2a40,
  q: _0x3f416c,
  isGroup: _0x11e222,
  sender: _0x2da88e,
  senderNumber: _0x44c1bd,
  botNumber2: _0x3e4218,
  botNumber: _0x122261,
  pushname: _0x37fd55,
  isMe: _0x8527c3,
  isOwner: _0x44610c,
  groupMetadata: _0x5a9f35,
  groupName: _0x304bf6,
  participants: _0x5e69a3,
  groupAdmins: _0x427e44,
  isBotAdmins: _0x1b1959,
  isAdmins: _0x4ef7b5,
  reply: _0x5c078e
}) => {
  try {
    if (isBan) {
      return _0x5c078e(mess.banned);
    }
    if (isBanChat) {
      return _0x5c078e(mess.bangc);
    }
    if (!_0x3f416c) {
      return _0x5c078e("Please provide a phone number.");
    }
    const _0x1f6a86 = "https://sid-bhai.vercel.app/api/truecaller?phone=" + encodeURIComponent(text) + "&id=" + "a1i0h--loh5IMkhktEDXmgSLUQDHGrXDUbWqFoWEgiItBNgppvYin-rG97CRLpuh";
    let _0x323b9a = await axios.get(_0x1f6a86);
    console.log(_0x323b9a);
    let _0x4ea29d = _0x323b9a.data;
    const {
      name: _0x17482a,
      alternateName: _0x6e1745,
      addresses: _0x49e6fd,
      email: _0x46a787,
      countryDetails: _0x2db156
    } = _0x4ea29d;
    let _0x5725de = "╭––『 *Phone Detail* 』\n";
    _0x5725de += "┆ ⚝ *Name:* " + _0x17482a + "\n";
    if (_0x49e6fd && _0x49e6fd.length > 0) {
      _0x5725de += "┆ ⚝ *Address:* " + _0x49e6fd[0].city + ", " + _0x49e6fd[0].countryCode + "\n";
      _0x5725de += "┆ ⚝ *Time Zone:* " + _0x49e6fd[0].timeZone + "\n";
      _0x5725de += "┆ ⚝ *Pin Code* " + _0x49e6fd[0].zipCode + "\n";
      _0x5725de += "┆ ⚝ *Street* " + _0x49e6fd[0].street + "\n";
    }
    _0x5725de += "┆ ⚝ *Email:* " + _0x46a787 + "\n";
    _0x5725de += "╰–––––––––––––––༓\n";
    if (_0x2db156) {
      _0x5725de += "╭––『 *countryDetails* 』\n";
      _0x5725de += "┆ ⚝ *Name:* " + _0x2db156.name + "\n";
      _0x5725de += "┆ ⚝ *Native:* " + _0x2db156.native + "\n";
      _0x5725de += "┆ ⚝ *Phone Code:* +" + _0x2db156.phone[0] + "\n";
      _0x5725de += "┆ ⚝ *Continent:* " + _0x2db156.continent + "\n";
      _0x5725de += "┆ ⚝ *Capital:* " + _0x2db156.capital + "\n";
      _0x5725de += "┆ ⚝ *Currency:* " + _0x2db156.currency.join(", ") + "\n";
      _0x5725de += "┆ ⚝ *Languages:* " + _0x2db156.languages.join(", ") + "\n";
      _0x5725de += "┆ ⚝ *Flag:* " + _0x2db156.flag + "\n";
      _0x5725de += "╰–––––––––––––––༓";
    }
    const _0x4bc6ee = {
      'q': _0x5725de
    };
    const _0x45eb02 = {
      quoted: _0x10a704
    };
    await _0x245e43.sendMessage(_0x10c103, _0x4bc6ee, _0x45eb02);
  } catch (_0xa8be30) {
    _0x5c078e("*Error !!*");
    _0x381c50(e);
  }
});
const _0x9d324c = {
  pattern: 'ip',
  alias: ["ipstalk", "sip", "searchip", "ip-locator"],
  react: '🌐',
  desc: desct,
  category: "search",
  use: ".ipstalk 112.134.193.130",
  filename: __filename
};
cmd(_0x9d324c, async (_0x31647d, _0x445d8e, _0xb917a9, {
  from: _0x448c84,
  l: _0x41206c,
  quoted: _0x1f340a,
  body: _0xa90020,
  isCmd: _0x2b183f,
  command: _0x3d9299,
  args: _0x4ca682,
  q: _0x38fb56,
  isGroup: _0x30d5c4,
  sender: _0x5a0e27,
  senderNumber: _0x1a1bb6,
  botNumber2: _0x6be385,
  botNumber: _0x341163,
  pushname: _0x573483,
  isMe: _0x2ad5c8,
  isOwner: _0x614c22,
  groupMetadata: _0x1d0e07,
  groupName: _0x34b22e,
  participants: _0x55ad02,
  groupAdmins: _0x2148e1,
  isBotAdmins: _0xd52c02,
  isAdmins: _0x28ddfa,
  reply: _0x4d486a
}) => {
  try {
    if (!_0x38fb56) {
      return _0x4d486a(needus);
    }
    if (!_0x38fb56.includes('.')) {
      return _0x4d486a(needus);
    }
    const _0x5ad327 = await fetchJson("https://api.techniknews.net/ipgeo/" + _0x38fb56);
    const _0x26cdff = "[👨‍💻 𝗣𝗢𝗗𝗜𝗬𝗔 - ＭＤ 👨‍💻]\n\n    *IP STALKER*\n    \n*🔴 IP :* ```" + _0x38fb56 + "```\n" + '*✅' + "STATUS :" + "* ```" + _0x5ad327.status + "```\n" + "*🌐" + "CONTINENT :" + "* ```" + _0x5ad327.continent + "```\n" + "*🗺" + "COUNTRY :" + "* ```" + _0x5ad327.country + "```\n" + "*🔢" + "COUNTRYCODE :" + "* ```" + _0x5ad327.countryCode + "```\n" + "*🌍" + "REGIONNAME :" + "* ```" + _0x5ad327.regionName + "```\n" + "*🚩" + "CITY :" + "* ```" + _0x5ad327.city + "```\n" + "*🏛" + "ZIP :" + "* ```" + _0x5ad327.zip + "```\n" + "*💸" + "CURRENCY :" + "* ```" + _0x5ad327.currency + "```\n" + "*📡" + "ISP :" + "* ```" + _0x5ad327.isp + "```\n" + "*🛡" + "PROXY :" + "* ```" + _0x5ad327.proxy + "```\n" + "*📱" + "MOBILE :" + "* ```" + _0x5ad327.mobile + "```\n\n" + "└───────────◉";
    const _0x2d9d53 = {
      text: _0x26cdff
    };
    const _0x4f4a0e = {
      quoted: _0x445d8e
    };
    await _0x31647d.sendMessage(_0x448c84, _0x2d9d53, _0x4f4a0e);
  } catch (_0x32c915) {
    _0x4d486a(cantf);
    _0x41206c(_0x32c915);
  }
});
const _0x517da5 = {
  pattern: "pemoji",
  react: '🔖',
  desc: "imoji to image convert",
  category: "search",
  use: ".pemoji",
  filename: __filename
};
cmd(_0x517da5, async (_0x585d0b, _0xbba253, _0x4df235, {
  from: _0x1ce74d,
  l: _0x2ebcaa,
  quoted: _0x1c4052,
  body: _0x3571e9,
  isCmd: _0xe269d5,
  command: _0x28e05d,
  args: _0xba4ecb,
  q: _0x1e2657,
  isGroup: _0x3da6ab,
  sender: _0x2f25aa,
  senderNumber: _0x47b334,
  botNumber2: _0x584a79,
  botNumber: _0x4779c7,
  pushname: _0x3abf71,
  isMe: _0x17ff99,
  isOwner: _0x409ebd,
  groupMetadata: _0x477967,
  groupName: _0xb741b1,
  participants: _0x27f027,
  groupAdmins: _0x583310,
  isBotAdmins: _0xdecdd9,
  isAdmins: _0x44cd54,
  reply: _0x4e14d3
}) => {
  try {
    if (!_0x1e2657) {
      return _0x4e14d3("*👸💬 Please Give me a imoji*\nExample - ." + _0x28e05d + '👸');
    }
    const _0x17e801 = {
      text: '✨',
      key: _0xbba253.key
    };
    const _0x5f5b1c = {
      react: _0x17e801
    };
    await _0x585d0b.sendMessage(_0x1ce74d, _0x5f5b1c);
    await _0x585d0b.sendMessage(_0xbba253.chat, {
      'image': {
        'url': "https://api.vihangayt.me/search/semoji?q=" + encodeURIComponent(_0x1e2657) + " "
      },
      'caption': '' + global.cap
    }, {
      'quoted': _0xbba253
    });
    const _0x32be90 = {
      text: '✅',
      key: _0xbba253.key
    };
    const _0x32accb = {
      react: _0x32be90
    };
    await _0x585d0b.sendMessage(_0x1ce74d, _0x32accb);
  } catch (_0x2997a1) {
    _0x4e14d3();
    _0x2ebcaa(_0x2997a1);
  }
});
const _0x4d6af3 = {
  pattern: "bard",
  alias: ["bardai", "gbard", "googlebard", "googleai", "ai2"],
  react: '👾',
  desc: desct,
  category: "search",
  use: ".bard ha",
  filename: __filename
};
cmd(_0x4d6af3, async (_0x30727f, _0xd60019, _0x5bd2cc, {
  from: _0x554d6a,
  l: _0x4b9ce0,
  prefix: _0x264482,
  quoted: _0x2aad6b,
  body: _0xce24d6,
  isCmd: _0x5e3802,
  command: _0x110848,
  args: _0x1ac23b,
  q: _0x149caa,
  isGroup: _0x41350b,
  sender: _0x1b52f4,
  senderNumber: _0x512a80,
  botNumber2: _0x3cc2ec,
  botNumber: _0x1756ae,
  pushname: _0xa0fefe,
  isMe: _0x159339,
  isOwner: _0x647122,
  groupMetadata: _0x57216c,
  groupName: _0x34f5f2,
  participants: _0x39522a,
  groupAdmins: _0x4228b1,
  isBotAdmins: _0x896eef,
  isAdmins: _0x488ece,
  reply: _0x3667e8
}) => {
  try {
    if (!_0x149caa) {
      return _0x3667e8(needus);
    }
    let _0x33f570 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
    let _0xc0a1ea = _0x33f570.users;
    let _0x16ae50 = _0xc0a1ea[Math.floor(Math.random() * _0xc0a1ea.length)];
    const _0x2466a8 = await fetchJson(_0x33f570.xz + "api/bard?text=" + _0x149caa + "&apikey=" + _0x16ae50);
    return await _0x3667e8(_0x2466a8.content);
  } catch (_0x59f7cd) {
    try {
      const _0x3cb093 = await fetchJson("https://api.akuari.my.id/ai/gbard?chat=" + _0x149caa);
      return await _0x3667e8(_0x3cb093.respon);
    } catch (_0x3160a7) {
      _0x3667e8(cantf);
      _0x4b9ce0(_0x3160a7);
    }
  }
});
const _0x138562 = {
  pattern: "bingimgai",
  alias: ["midj"],
  react: '📷',
  desc: "Generate Images using Bing AI",
  category: "search",
  use: ".bingimgai <prompt>",
  filename: __filename
};
cmd(_0x138562, async (_0x1b9735, _0x50c00d, _0x5d9a6b, {
  from: _0x58de3b,
  l: _0x4520ec,
  quoted: _0x197605,
  body: _0x21dbda,
  isCmd: _0x4e2775,
  command: _0x32fc83,
  args: _0x4a087d,
  q: _0x112044,
  isGroup: _0x35aba2,
  sender: _0x1b78c4,
  senderNumber: _0x14db1e,
  botNumber2: _0x16d207,
  botNumber: _0x52ca7f,
  pushname: _0x2cda17,
  isMe: _0x171c53,
  isOwner: _0x5780c1,
  groupMetadata: _0x419eba,
  groupName: _0x385fda,
  participants: _0x92606,
  groupAdmins: _0x221392,
  isBotAdmins: _0x1dfd6d,
  isAdmins: _0x38e3b8,
  reply: _0x10c879
}) => {
  try {
    if (!_0x112044) {
      return await _0x10c879("*Give me a prompt to generate images*");
    }
    let _0x35b736 = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0x112044 + "&apiKey=vihangayt0");
    if (_0x35b736 && _0x35b736.result && Array.isArray(_0x35b736.result) && _0x35b736.result.length > 0) {
      for (let _0x4f32bf = 0; _0x4f32bf < _0x35b736.result.length; _0x4f32bf++) {
        const _0x4fa3d4 = {
          url: _0x35b736.result[_0x4f32bf]
        };
        const _0x1e9da8 = {
          image: _0x4fa3d4,
          caption: config.FOOTER
        };
        const _0x3f51ca = {
          quoted: _0x50c00d
        };
        await _0x1b9735.sendMessage(_0x58de3b, _0x1e9da8, _0x3f51ca);
      }
    } else {
      _0x10c879("No images found for the given prompt");
    }
  } catch (_0x232a90) {
    _0x10c879("Unable to generate images to the given prompt");
    _0x4520ec(_0x232a90);
  }
});
const _0x5f5619 = {
  pattern: "blackbox",
  alias: ['bb'],
  react: '👾',
  desc: "Blackbox ai chat",
  category: "search"
};
function _0x5c7280(_0xc8240b, _0x2ffe16, _0x1871e3, _0x3340de, _0x4ff1ea) {
  return _0x3c7c(_0x1871e3 - 0x9f, _0x2ffe16);
}
_0x5f5619.use = ".blackbox hi";
_0x5f5619.filename = __filename;
cmd(_0x5f5619, async (_0x3849c2, _0x278e16, _0x3b7c01, {
  from: _0x35f8ef,
  l: _0x3871c4,
  prefix: _0x561200,
  quoted: _0x1b004b,
  body: _0x5200de,
  isCmd: _0x5cffce,
  command: _0x31cbb3,
  args: _0x1f14a2,
  q: _0x73edf0,
  isGroup: _0x22dd3e,
  sender: _0x553030,
  senderNumber: _0x121fff,
  botNumber2: _0x10d035,
  botNumber: _0x3832c2,
  pushname: _0x3d6ff6,
  isMe: _0x4dcd64,
  isOwner: _0x426707,
  groupMetadata: _0x17cc23,
  groupName: _0x38b0e6,
  participants: _0x41982f,
  groupAdmins: _0xef2986,
  isBotAdmins: _0x329682,
  isAdmins: _0x35a8b6,
  reply: _0x3ab709
}) => {
  try {
    if (!_0x73edf0) {
      return _0x3ab709("Need a keyword");
    }
    var _0x3d264f = (await fetchJson("https://api.vihangayt.asia/ai/blackbox?q=" + _0x73edf0)).result;
    return await _0x3ab709(_0x3d264f);
  } catch (_0xb131fa) {
    _0x3ab709("Unable to generate");
    _0x3871c4(_0xb131fa);
  }
});
const _0x42407f = {
  pattern: "imdb",
  react: '🍎',
  desc: "To check imdb",
  category: "search",
  use: ".imdb"
};
cmd(_0x42407f, async (_0x2feab6, _0x17f690, _0x1b2464, {
  from: _0x1bfc7e,
  l: _0x27eda8,
  quoted: _0x32852b,
  body: _0x4abe42,
  isCmd: _0x4e967,
  command: _0x39fca2,
  args: _0x160117,
  q: _0x379d91,
  isGroup: _0x340c1d,
  sender: _0x2ed1b5,
  senderNumber: _0xa65a25,
  botNumber2: _0x638532,
  botNumber: _0x1f4984,
  pushname: _0x348be3,
  isMe: _0x3dc7cd,
  isOwner: _0x49dd77,
  groupMetadata: _0x444132,
  groupName: _0xae994c,
  participants: _0x421cee,
  groupAdmins: _0x2e5981,
  isBotAdmins: _0x4157e0,
  isAdmins: _0x2df051,
  reply: _0x1e778b
}) => {
  try {
    if (!_0x379d91) {
      return _0x1e778b("_Name a Series or movie");
    }
    let _0x4d59c7 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x379d91 + "&plot=full");
    let _0x54badc = '';
    console.log(_0x4d59c7.data);
    _0x54badc += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0x54badc += "🎬Title      : " + _0x4d59c7.data.Title + "\n";
    _0x54badc += "📅Year       : " + _0x4d59c7.data.Year + "\n";
    _0x54badc += "⭐Rated      : " + _0x4d59c7.data.Rated + "\n";
    _0x54badc += "📆Released   : " + _0x4d59c7.data.Released + "\n";
    _0x54badc += "⏳Runtime    : " + _0x4d59c7.data.Runtime + "\n";
    _0x54badc += "🌀Genre      : " + _0x4d59c7.data.Genre + "\n";
    _0x54badc += "👨🏻‍💻Director   : " + _0x4d59c7.data.Director + "\n";
    _0x54badc += "✍Writer     : " + _0x4d59c7.data.Writer + "\n";
    _0x54badc += "👨Actors     : " + _0x4d59c7.data.Actors + "\n";
    _0x54badc += "📃Plot       : " + _0x4d59c7.data.Plot + "\n";
    _0x54badc += "🌐Language   : " + _0x4d59c7.data.Language + "\n";
    _0x54badc += "🌍Country    : " + _0x4d59c7.data.Country + "\n";
    _0x54badc += "🎖️Awards     : " + _0x4d59c7.data.Awards + "\n";
    _0x54badc += "📦BoxOffice  : " + _0x4d59c7.data.BoxOffice + "\n";
    _0x54badc += "🏙️Production : " + _0x4d59c7.data.Production + "\n";
    _0x54badc += "🌟imdbRating : " + _0x4d59c7.data.imdbRating + "\n";
    _0x54badc += "✅imdbVotes  : " + _0x4d59c7.data.imdbVotes + '';
    const _0x1d0dfc = {
      url: _0x4d59c7.data.Poster
    };
    const _0x3a2c63 = {
      image: _0x1d0dfc,
      caption: _0x54badc
    };
    const _0x63bbf4 = {
      quoted: _0x17f690
    };
    _0x2feab6.sendMessage(_0x1b2464.chat, _0x3a2c63, _0x63bbf4);
    const _0x3e2cea = {
      text: '✅',
      key: _0x17f690.key
    };
    const _0x299e21 = {
      react: _0x3e2cea
    };
    await _0x2feab6.sendMessage(_0x1bfc7e, _0x299e21);
  } catch (_0x57dab0) {
    _0x27eda8(_0x57dab0);
  }
});