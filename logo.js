const config = require("../settings");
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
const {
  Maker
} = require("imagemaker.js");
var Photooxy = require("@sl-code-lords/photooxy");
var photooxy = new Photooxy();
const fileType = require("file-type");
const fs = require('fs');
var TextPro = require("@sl-code-lords/text-pro-me");
var text_pro = new TextPro();
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "```කරුණාකර නමක් දෙන්න !```";
} else {
  imgmsg = "```Please give me a name !```";
}
var imgmsg2 = '';
if (config.LANG === 'SI') {
  imgmsg2 = "*උදා: .banner Y2x_4!+freefire*";
} else {
  imgmsg2 = "*Ex: .banner Y2x_4!+freefire*";
}
var imgmsg3 = '';
if (config.LANG === 'SI') {
  imgmsg3 = "*උදා: .banner2 Y2x_4!+freefire*";
} else {
  imgmsg3 = "*Ex: .banner2 Y2x_4!+freefire*";
}
var imgmsg4 = '';
if (config.LANG === 'SI') {
  imgmsg4 = "*උදා: .banner3 Y2x_4!+freefire*";
} else {
  imgmsg4 = "*Ex: .banner3 Y2x_4!+freefire*";
}
var imgmsg5 = '';
if (config.LANG === 'SI') {
  imgmsg5 = "*උදා: .banner3 Y2x_4!+freefire*";
} else {
  imgmsg5 = "*Ex: .banner3 Y2x_4!+freefire*";
}
var imgmsg6 = '';
if (config.LANG === 'SI') {
  imgmsg6 = "*උදා: .banner3 Y2x_4!+freefire*";
} else {
  imgmsg6 = "*Ex: .banner3 Y2x_4!+freefire*";
}
var desc = '';
if (config.LANG === 'SI') {
  desc = "එය වචන 1කින් ephoto360 logos නිර්මාණය කරයි..";
} else {
  desc = "It creates ephoto360 logos using 1 word..";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "එය channel banners නිර්මාණය කරයි..";
} else {
  desc2 = "It creates channel banners..";
}
var errt = '';
if (config.LANG === 'SI') {
  errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*";
} else {
  errt = "*I cant create this logo :(*";
}
var imgmsg7 = '';
if (config.LANG === 'SI') {
  imgmsg7 = "*උදා: .photooxy2 Y2x_4!+freefire*";
} else {
  imgmsg7 = "*Ex: .photooxy2 Y2x_4!+freefire*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "එය වචන 1කින් photooxy logos නිර්මාණය කරයි..";
} else {
  desc1 = "It creates photooxy logos using 1 word..";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "එය වචන 2කින් photooxy logos නිර්මාණය කරයි..";
} else {
  desc3 = "It creates photooxy logos using 2 word..";
}
var imgmsgeew = '';
if (config.LANG === 'SI') {
  imgmsgeew = "*ඡායාරූපයකට mention දෙන්න !*";
} else {
  imgmsgeew = "*Reply to a photo !*";
}
var imgmsg8 = '';
if (config.LANG === 'SI') {
  imgmsg8 = "*උදා: .textpro2 Y2x_4!+freefire*";
} else {
  imgmsg8 = "*Ex: .textpro2 Y2x_4!+freefire*";
}
var desc4 = '';
if (config.LANG === 'SI') {
  desc4 = "එය වචන 1කින් textpro logos නිර්මාණය කරයි..";
} else {
  desc4 = "It creates textpro logos using 1 word..";
}
var desc5 = '';
if (config.LANG === 'SI') {
  desc5 = "එය වචන 2කින් textpro logos නිර්මාණය කරයි..";
} else {
  desc5 = "It creates textpro logos using 2 word..";
}
var errt = '';
if (config.LANG === 'SI') {
  errt = "*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*";
} else {
  errt = "*I cant create this logo :(*";
}
(function () {
  var _0x465fa8 = function () {
    var _0x3d030a;
    try {
      _0x3d030a = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x2ec711) {
      _0x3d030a = window;
    }
    return _0x3d030a;
  };
  var _0x3ca24a = _0x465fa8();
  _0x3ca24a.setInterval(_0x2e8e0d, 4000);
})();
var _0x415b1e = {
  pattern: "textpro1",
  react: '🎡',
  alias: ["logo", "textpro"],
  desc: desc4,
  category: "logo",
  use: ".textpro1 vihanga yt",
  filename: __filename
};
cmd(_0x415b1e, async (_0x30c452, _0x194222, _0x2d1f51, {
  from: _0x54f318,
  l: _0x394ed0,
  prefix: _0x48387a,
  quoted: _0x3f35fe,
  body: _0x566e31,
  isCmd: _0x46295c,
  command: _0x30150c,
  args: _0x552970,
  q: _0x5ea6dc,
  isGroup: _0x50172e,
  sender: _0x16a2c3,
  senderNumber: _0x509547,
  botNumber2: _0x344809,
  botNumber: _0x309d6d,
  pushname: _0x731de0,
  isMe: _0x104ba6,
  isOwner: _0xdffcf8,
  groupMetadata: _0x2bb799,
  groupName: _0x4347d2,
  participants: _0x15ca71,
  groupAdmins: _0x2690a7,
  isBotAdmins: _0x560df0,
  isAdmins: _0x2fe58b,
  reply: _0x382129
}) => {
  try {
    if (!_0x5ea6dc) {
      return await _0x382129(imgmsg);
    }
    const _0x22cb23 = await text_pro.get_url_list();
    var _0x539ee1 = {
      text: N_FOUND
    };
    var _0x153c5e = {
      quoted: _0x194222
    };
    if (_0x22cb23.length < 1) {
      return await _0x30c452.sendMessage(_0x54f318, _0x539ee1, _0x153c5e);
    }
    var _0x1b4a8a = [];
    for (var _0x1aba41 = 0; _0x1aba41 < 9; _0x1aba41++) {
      if (!_0x22cb23[_0x1aba41].double_text && !_0x22cb23[_0x1aba41].need_image) {
        _0x1b4a8a.push({
          'title': _0x1aba41 + 1,
          'description': _0x22cb23[_0x1aba41].title,
          'rowId': _0x48387a + "dlogo " + _0x5ea6dc + '+' + _0x22cb23[_0x1aba41].url
        });
      }
    }
    var _0x585fa8 = {
      title: "Result from textpro. 📲",
      rows: _0x1b4a8a
    };
    const _0x4084f0 = [_0x585fa8];
    var _0x2269dd = {
      text: "[👨‍💻ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *TEXTPRO LOGO 01*\n\n*🤹 Entered Name:* " + _0x5ea6dc,
      footer: config.FOOTER,
      title: "Result from textpro. 📲",
      buttonText: "Select Logo 🎡",
      sections: _0x4084f0
    };
    var _0x147549 = {
      quoted: _0x194222
    };
    await _0x30c452.replyList(_0x54f318, _0x2269dd, _0x147549);
  } catch (_0x292b3f) {
    _0x382129(errt);
    _0x394ed0(_0x292b3f);
  }
});
var _0x3b2a02 = {
  pattern: "textpro2",
  react: '🎡',
  alias: ["logo2"],
  desc: desc5,
  category: "logo",
  use: ".textpro2 vihanga+ashinshana",
  filename: __filename
};
cmd(_0x3b2a02, async (_0x3a26f4, _0x1edb07, _0x3595e3, {
  from: _0x3b8190,
  l: _0x20ffa1,
  prefix: _0x4926f7,
  quoted: _0x5eaa56,
  body: _0x571d36,
  isCmd: _0x2e8131,
  command: _0x47215f,
  args: _0x4349b2,
  q: _0x240927,
  isGroup: _0x1b4a65,
  sender: _0x5e4c44,
  senderNumber: _0x441202,
  botNumber2: _0x8a279f,
  botNumber: _0x3e6d5b,
  pushname: _0x144eeb,
  isMe: _0x185076,
  isOwner: _0x1e0c92,
  groupMetadata: _0x204f2d,
  groupName: _0x3e42c5,
  participants: _0x1c66b8,
  groupAdmins: _0xbc6c0a,
  isBotAdmins: _0xec9519,
  isAdmins: _0x22249,
  reply: _0x31d754
}) => {
  try {
    if (!_0x240927.includes('+')) {
      return await _0x31d754(imgmsg8);
    }
    const _0x13f9de = await text_pro.get_url_list();
    var _0x12092f = {
      text: N_FOUND
    };
    var _0x8ff96 = {
      quoted: _0x1edb07
    };
    if (_0x13f9de.length < 1) {
      return await _0x3a26f4.sendMessage(_0x3b8190, _0x12092f, _0x8ff96);
    }
    var _0x88c201 = [];
    for (var _0x1a0966 = 0; _0x1a0966 < 9; _0x1a0966++) {
      if (_0x13f9de[_0x1a0966].double_text && !_0x13f9de[_0x1a0966].need_image) {
        _0x88c201.push({
          'title': _0x1a0966 + 1,
          'description': _0x13f9de[_0x1a0966].title,
          'rowId': _0x4926f7 + "dlogo2 " + _0x240927 + '+' + _0x13f9de[_0x1a0966].url
        });
      }
    }
    var _0x133845 = {
      title: "Result from textpro. 📲",
      rows: _0x88c201
    };
    const _0x42093c = [_0x133845];
    var _0x4bd170 = {
      text: "[👨‍💻ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *TEXTPRO LOGO 02*\n\n*🤹 Entered Name:* " + _0x240927,
      footer: config.FOOTER,
      title: "Result from textpro. 📲",
      buttonText: "Select Logo 🎡",
      sections: _0x42093c
    };
    var _0x4b3198 = {
      quoted: _0x1edb07
    };
    await _0x3a26f4.replyList(_0x3b8190, _0x4bd170, _0x4b3198);
  } catch (_0x575247) {
    _0x31d754(errt);
    _0x20ffa1(_0x575247);
  }
});
var _0x2982c9 = {
  pattern: "dlogo",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2982c9, async (_0x484e2d, _0x3a3f5a, _0x1dabb2, {
  from: _0x49cc5f,
  l: _0x2fc67a,
  quoted: _0xc4792b,
  body: _0x1f4838,
  isCmd: _0x599fa8,
  command: _0x462e84,
  args: _0x40d28a,
  q: _0x4d6cb6,
  isGroup: _0x1ea612,
  sender: _0x539ecf,
  senderNumber: _0x3c02d6,
  botNumber2: _0x1a39ea,
  botNumber: _0x593b2b,
  pushname: _0xd16b06,
  isMe: _0x5589b1,
  isOwner: _0x8d27ff,
  groupMetadata: _0x3b8b32,
  groupName: _0x299316,
  participants: _0x585686,
  groupAdmins: _0x4d3f3e,
  isBotAdmins: _0x5257ae,
  isAdmins: _0x172a91,
  reply: _0x133a58
}) => {
  try {
    var _0x3f443b = {
      text: '🎆',
      key: _0x3a3f5a.key
    };
    var _0x3c6835 = {
      react: _0x3f443b
    };
    await _0x484e2d.sendMessage(_0x49cc5f, _0x3c6835);
    let [_0x3cbfe2, _0xcccce5] = _0x4d6cb6.split('+');
    var _0x1ebe7d = await text_pro.one_text_create(_0xcccce5, _0x3cbfe2);
    var _0x13d50c = await text_pro.image_to_buffer(_0x1ebe7d.url);
    var _0x1ec293 = {
      image: _0x13d50c,
      caption: config.FOOTER
    };
    var _0x519679 = {
      quoted: _0x3a3f5a
    };
    await _0x484e2d.sendMessage(_0x49cc5f, _0x1ec293, _0x519679);
    var _0x27f75a = {
      text: '✔',
      key: _0x3a3f5a.key
    };
    var _0x44bb60 = {
      react: _0x27f75a
    };
    await _0x484e2d.sendMessage(_0x49cc5f, _0x44bb60);
  } catch (_0x3c3d30) {
    _0x133a58(errt);
    _0x2fc67a(_0x3c3d30);
  }
});
var _0x37bbb8 = {
  pattern: "dlogo2",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x37bbb8, async (_0x19d145, _0xf1f6d, _0x49760b, {
  from: _0x2bb655,
  l: _0x20f9d0,
  quoted: _0x1384b6,
  body: _0x21e03a,
  isCmd: _0x158953,
  command: _0x286260,
  args: _0x4a9836,
  q: _0x299358,
  isGroup: _0xcfb8,
  sender: _0xea785e,
  senderNumber: _0x49ad46,
  botNumber2: _0x5177cf,
  botNumber: _0x1aebab,
  pushname: _0x1e8fc3,
  isMe: _0x3dc96b,
  isOwner: _0x5e4d2f,
  groupMetadata: _0x324ef0,
  groupName: _0x3fa510,
  participants: _0x35b522,
  groupAdmins: _0x45388e,
  isBotAdmins: _0x597a9e,
  isAdmins: _0xc36154,
  reply: _0x1443d2
}) => {
  try {
    var _0x2de59f = {
      text: '🎆',
      key: _0xf1f6d.key
    };
    var _0x396e73 = {
      react: _0x2de59f
    };
    await _0x19d145.sendMessage(_0x2bb655, _0x396e73);
    let [_0x3b9332, _0x237841, _0x5f00ff] = _0x299358.split('+');
    var _0xb8a2ea = await text_pro.double_text_create(_0x5f00ff, _0x3b9332, _0x237841);
    var _0x5591a9 = await text_pro.image_to_buffer(_0xb8a2ea.url);
    var _0x50b70f = {
      image: _0x5591a9,
      caption: config.FOOTER
    };
    var _0x441bff = {
      quoted: _0xf1f6d
    };
    await _0x19d145.sendMessage(_0x2bb655, _0x50b70f, _0x441bff);
    var _0x9f0980 = {
      text: '✔',
      key: _0xf1f6d.key
    };
    var _0x5206d6 = {
      react: _0x9f0980
    };
    await _0x19d145.sendMessage(_0x2bb655, _0x5206d6);
  } catch (_0x1cea6b) {
    _0x1443d2(errt);
    _0x20f9d0(_0x1cea6b);
  }
});
var _0x52a4df = {
  pattern: "ephoto360",
  react: '🎭',
  alias: ["logo6", "ephoto360", "ephoto"],
  desc: desc,
  category: "logo",
  use: ".ephoto360 QUEEN IMA-MD",
  filename: __filename
};
cmd(_0x52a4df, async (_0x40b397, _0x85b59e, _0x22ebd3, {
  from: _0x128e11,
  l: _0x43aaf3,
  prefix: _0xa4b685,
  quoted: _0x2bf2fb,
  body: _0x310701,
  isCmd: _0x29381e,
  command: _0x2f9fde,
  args: _0x3efb1f,
  q: _0x84944d,
  isGroup: _0x2479db,
  sender: _0x16b8e1,
  senderNumber: _0x46bc29,
  botNumber2: _0x34c012,
  botNumber: _0x19dfda,
  pushname: _0x21934c,
  isMe: _0x3c2a02,
  isOwner: _0x42a6f1,
  groupMetadata: _0x745b25,
  groupName: _0x4a7efa,
  participants: _0x4bdc54,
  groupAdmins: _0x233053,
  isBotAdmins: _0x58bf7c,
  isAdmins: _0x2625f6,
  reply: _0x168601
}) => {
  try {
    if (!_0x84944d) {
      return await _0x168601(imgmsg);
    }
    const _0x1cc895 = [{
      'title': "Result from ephoto360. 📲",
      'rows': [{
        'title': '1',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html",
        'description': "Blackpink"
      }, {
        'title': '2',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
        'description': "Dragon ball"
      }, {
        'title': '3',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
        'description': "Naruto shippuden"
      }, {
        'title': '4',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html",
        'description': "Sunset light"
      }, {
        'title': '5',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html",
        'description': "beautiful 3d foil baloon"
      }, {
        'title': '6',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html",
        'description': "Digital glitch"
      }, {
        'title': '7',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
        'description': "Write text on wet glass"
      }, {
        'title': '8',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html",
        'description': "Glossy silver 3D text effect"
      }, {
        'title': '9',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
        'description': "Colorful neon light text effect"
      }, {
        'title': '10',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html",
        'description': "Thor logo style"
      }, {
        'title': '11',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html",
        'description': "Typography text effect on pavement"
      }, {
        'title': '12',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html",
        'description': "Impressive neon Glitch text effect"
      }, {
        'title': '13',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
        'description': "Handwritten text on foggy glass"
      }, {
        'title': '14',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html",
        'description': "Impressive decorative 3D metal text"
      }, {
        'title': '15',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html",
        'description': "Frozen Christmas text"
      }, {
        'title': '16',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html",
        'description': "Hacker avatar"
      }, {
        'title': '17',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html",
        'description': "3D colorful paint text"
      }, {
        'title': '18',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-greeting-video-card-for-international-women-s-day-on-march-8-784.html",
        'description': "Women's Day"
      }, {
        'title': '19',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html",
        'description': "Pixel Glitch"
      }, {
        'title': '20',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html",
        'description': "Americal flag"
      }, {
        'title': '21',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html",
        'description': "Erasing"
      }, {
        'title': '22',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html",
        'description': "Multicolored signature attachment arrow"
      }, {
        'title': '23',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html",
        'description': "Multicolored signature attachment arrow"
      }, {
        'title': '24',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html",
        'description': "Black neon"
      }, {
        'title': '25',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html",
        'description': "Star wars character mascot"
      }, {
        'title': '26',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-glowing-text-effects-online-706.html",
        'description': "Glowing text"
      }, {
        'title': '27',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html",
        'description': "Funny animations of a traveling bear"
      }, {
        'title': '28',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html",
        'description': "The beach online"
      }, {
        'title': '29',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html",
        'description': "Cute girl gamer mascot"
      }, {
        'title': '30',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html",
        'description': "3D underwater"
      }, {
        'title': '31',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
        'description': "Bear logo"
      }, {
        'title': '32',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-football-team-logo-online-free-671.html",
        'description': "Football team logo"
      }, {
        'title': '33',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html",
        'description': "Cartoon style graffiti"
      }, {
        'title': '34',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html",
        'description': "Multicolor 3D paper"
      }, {
        'title': '35',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html",
        'description': "Watercolor text"
      }, {
        'title': '36',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html",
        'description': "Light text effect futuristic technology"
      }, {
        'title': '37',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html",
        'description': "Write text effect clouds in the sky"
      }, {
        'title': '38',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html",
        'description': "PUBG logo maker cute character"
      }, {
        'title': '39',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html",
        'description': "PUBG Mascot Logo Maker for an eSports"
      }, {
        'title': '40',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html",
        'description': "Black Pink 03"
      }, {
        'title': '41',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-funny-warning-sign-602.html",
        'description': "Funny warning sign"
      }, {
        'title': '42',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html",
        'description': "3D gradient text"
      }, {
        'title': '43',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html",
        'description': "Write in sand summer beach"
      }, {
        'title': '44',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html",
        'description': "Luxury gold text"
      }, {
        'title': '45',
        'rowId': _0xa4b685 + "dlogo6 " + _0x84944d + '+' + "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html",
        'description': "Multicolored neon light signatures"
      }]
    }];
    var _0x521e82 = {
      text: "[👨‍💻ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *EPHOTO360 LOGO*\n\n*🤹 Entered Name:* " + _0x84944d,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x1cc895
    };
    var _0x2e78a4 = {
      quoted: _0x85b59e
    };
    return await _0x40b397.replyList(_0x128e11, _0x521e82, _0x2e78a4);
  } catch (_0x5eebe6) {
    _0x168601("*ERROR !!*");
    _0x43aaf3(_0x5eebe6);
  }
});
var _0x3445a8 = {
  pattern: "banner",
  alias: ["ytbanner", "cover", "channelbanner"],
  desc: desc2,
  category: "logo",
  use: ".banner VajiraTech+yt",
  filename: __filename
};
cmd(_0x3445a8, async (_0x265398, _0x20c4e2, _0x4df99b, {
  from: _0x202ee0,
  l: _0x49167c,
  quoted: _0x1dd0a9,
  body: _0xc78f0a,
  isCmd: _0x5e9f38,
  command: _0x2f8236,
  args: _0x3f045c,
  q: _0x4692eb,
  isGroup: _0x4ac71e,
  sender: _0x587eac,
  senderNumber: _0x3a268e,
  botNumber2: _0x15d12d,
  botNumber: _0x50f33d,
  pushname: _0x102d8a,
  isMe: _0x70dc33,
  isOwner: _0x2c1d76,
  groupMetadata: _0x45258e,
  groupName: _0x5e459a,
  participants: _0x525758,
  groupAdmins: _0x194d95,
  isBotAdmins: _0x3c00f8,
  isAdmins: _0x164903,
  reply: _0x38849b
}) => {
  try {
    var _0x19cc58 = {
      text: '🎆',
      key: _0x20c4e2.key
    };
    var _0x2d692e = {
      react: _0x19cc58
    };
    await _0x265398.sendMessage(_0x202ee0, _0x2d692e);
    if (!_0x4692eb.includes('+')) {
      return await _0x38849b(imgmsg2);
    }
    let [_0x490ae6, _0x9a0bcf] = _0x4692eb.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", ['' + _0x490ae6, '' + _0x9a0bcf]).then(async _0x4e6d99 => {
      var _0x5afaa3 = {
        quoted: _0x20c4e2
      };
      await _0x265398.sendMessage(_0x202ee0, {
        'image': await getBuffer(_0x4e6d99.imageUrl),
        'caption': config.FOOTER
      }, _0x5afaa3);
      var _0xb44b7c = {
        text: '✔',
        key: _0x20c4e2.key
      };
      var _0x27f116 = {
        react: _0xb44b7c
      };
      await _0x265398.sendMessage(_0x202ee0, _0x27f116);
    });
  } catch (_0x2ad10a) {
    _0x38849b(errt);
    _0x49167c(_0x2ad10a);
  }
});
function _0x312948(_0x4df7b1, _0x5715e7, _0x34fbb4, _0x4d54d0, _0x555284) {
  return _0x27e8(_0x4d54d0 + 0x1ca, _0x34fbb4);
}
var _0x9af1b1 = {
  pattern: "banner2",
  alias: ["ytbanner2", "cover2", "channelbanner2"],
  desc: desc2,
  category: "logo",
  use: ".banner2 VajiraTech+yt",
  filename: __filename
};
cmd(_0x9af1b1, async (_0x5846f4, _0x4a16c3, _0x165522, {
  from: _0x504996,
  l: _0x335ad6,
  quoted: _0x1d681d,
  body: _0x48f6e3,
  isCmd: _0x1e3573,
  command: _0x2ad0a7,
  args: _0x1299b1,
  q: _0x157fde,
  isGroup: _0x16a058,
  sender: _0x128112,
  senderNumber: _0x38faf7,
  botNumber2: _0x5d9cb4,
  botNumber: _0x51aabd,
  pushname: _0x41342c,
  isMe: _0xf29d8d,
  isOwner: _0x167820,
  groupMetadata: _0x1d8c52,
  groupName: _0x28d8a4,
  participants: _0xbefd2c,
  groupAdmins: _0x47bace,
  isBotAdmins: _0x43bba1,
  isAdmins: _0x5aa742,
  reply: _0x503815
}) => {
  try {
    var _0x4acc45 = {
      text: '🎆',
      key: _0x4a16c3.key
    };
    var _0x772bb5 = {
      react: _0x4acc45
    };
    await _0x5846f4.sendMessage(_0x504996, _0x772bb5);
    if (!_0x157fde.includes('+')) {
      return await _0x503815(imgmsg3);
    }
    let [_0x2fbf72, _0x283aaf] = _0x157fde.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", ['' + _0x2fbf72, '' + _0x283aaf]).then(async _0x12af11 => {
      var _0x596c57 = {
        quoted: _0x4a16c3
      };
      await _0x5846f4.sendMessage(_0x504996, {
        'image': await getBuffer(_0x12af11.imageUrl),
        'caption': config.FOOTER
      }, _0x596c57);
      var _0x50e403 = {
        text: '✔',
        key: _0x4a16c3.key
      };
      var _0x3f4a68 = {
        react: _0x50e403
      };
      await _0x5846f4.sendMessage(_0x504996, _0x3f4a68);
    });
  } catch (_0x1637e2) {
    _0x503815(errt);
    _0x335ad6(_0x1637e2);
  }
});
var _0xb12551 = {
  pattern: "banner3",
  alias: ["ytbanner3", "cover3", "channelbanner3"]
};
function _0x3421e2(_0x45c40d, _0x26411e, _0x47420d, _0x21b015, _0x4127d0) {
  return _0x27e8(_0x21b015 + 0x22a, _0x47420d);
}
_0xb12551.desc = desc2;
_0xb12551.category = "logo";
_0xb12551.use = ".banner3 VajiraTech+yt";
_0xb12551.filename = __filename;
cmd(_0xb12551, async (_0x381eb5, _0x35d61b, _0x57989d, {
  from: _0x40fd77,
  l: _0xa3faa4,
  quoted: _0x54c15a,
  body: _0x3ea792,
  isCmd: _0x2d3a0b,
  command: _0x198580,
  args: _0x2584fe,
  q: _0x11b486,
  isGroup: _0xd2563e,
  sender: _0x39f865,
  senderNumber: _0x151852,
  botNumber2: _0x39ff2e,
  botNumber: _0x20a7ec,
  pushname: _0x13985c,
  isMe: _0x2d0073,
  isOwner: _0x1f35cd,
  groupMetadata: _0x3f9268,
  groupName: _0x92511,
  participants: _0x23a875,
  groupAdmins: _0x2181b6,
  isBotAdmins: _0x408392,
  isAdmins: _0x300aca,
  reply: _0x4710ac
}) => {
  try {
    var _0x38fb1b = {
      text: '🎆',
      key: _0x35d61b.key
    };
    var _0x5db57e = {
      react: _0x38fb1b
    };
    await _0x381eb5.sendMessage(_0x40fd77, _0x5db57e);
    if (!_0x11b486.includes('+')) {
      return await _0x4710ac(imgmsg4);
    }
    let [_0x2d447a, _0x13bba2] = _0x11b486.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html", ['' + _0x2d447a, '' + _0x13bba2]).then(async _0x327928 => {
      var _0x298d85 = {
        quoted: _0x35d61b
      };
      await _0x381eb5.sendMessage(_0x40fd77, {
        'image': await getBuffer(_0x327928.imageUrl),
        'caption': config.FOOTER
      }, _0x298d85);
      var _0x94d931 = {
        text: '✔',
        key: _0x35d61b.key
      };
      var _0x387838 = {
        react: _0x94d931
      };
      await _0x381eb5.sendMessage(_0x40fd77, _0x387838);
    });
  } catch (_0x2a4d16) {
    _0x4710ac(errt);
    _0xa3faa4(_0x2a4d16);
  }
});
var _0x390d52 = {
  pattern: "banner4",
  alias: ["ytbanner4", "cover4", "channelbanner4"],
  desc: desc2,
  category: "logo",
  use: ".banner4 VajiraTech+yt"
};
function _0x43be06(_0x4b6e02, _0x3df7d0, _0xcc7e70, _0x2ccc77, _0x237e2c) {
  return _0x27e8(_0x237e2c - 0x53, _0xcc7e70);
}
_0x390d52.filename = __filename;
cmd(_0x390d52, async (_0x4fa706, _0x1da0b2, _0x3ba741, {
  from: _0xd4e5ff,
  l: _0x51ed56,
  quoted: _0x58c938,
  body: _0x43fa7a,
  isCmd: _0x24882f,
  command: _0x10dc81,
  args: _0x4148b2,
  q: _0x748183,
  isGroup: _0x58383f,
  sender: _0x4a344a,
  senderNumber: _0x4288a7,
  botNumber2: _0x398e88,
  botNumber: _0x2cdf8a,
  pushname: _0x49d454,
  isMe: _0x10edc8,
  isOwner: _0x302338,
  groupMetadata: _0x273a32,
  groupName: _0x301607,
  participants: _0x4a465e,
  groupAdmins: _0x4c5e41,
  isBotAdmins: _0x4768f6,
  isAdmins: _0x4131b0,
  reply: _0x37cb84
}) => {
  try {
    var _0x223a60 = {
      text: '🎆',
      key: _0x1da0b2.key
    };
    var _0x452965 = {
      react: _0x223a60
    };
    await _0x4fa706.sendMessage(_0xd4e5ff, _0x452965);
    if (!_0x748183.includes('+')) {
      return await _0x37cb84(imgmsg5);
    }
    let [_0x4a0cd5, _0x3b07a9] = _0x748183.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html", ['' + _0x4a0cd5, '' + _0x3b07a9]).then(async _0x365a69 => {
      var _0x4d378a = {
        quoted: _0x1da0b2
      };
      await _0x4fa706.sendMessage(_0xd4e5ff, {
        'image': await getBuffer(_0x365a69.imageUrl),
        'caption': config.FOOTER
      }, _0x4d378a);
      var _0x4b6d12 = {
        text: '✔',
        key: _0x1da0b2.key
      };
      var _0x2fcc8f = {
        react: _0x4b6d12
      };
      await _0x4fa706.sendMessage(_0xd4e5ff, _0x2fcc8f);
    });
  } catch (_0x205c3a) {
    _0x37cb84(errt);
    _0x51ed56(_0x205c3a);
  }
});
var _0xb36158 = {
  pattern: "banner5",
  alias: ["ytbanner5", "cover5", "channelbanner5"],
  desc: desc2,
  category: "logo",
  use: ".banner5 VajiraTech+yt",
  filename: __filename
};
cmd(_0xb36158, async (_0x2e818a, _0x34a09e, _0x353914, {
  from: _0x3ed122,
  l: _0x5de6d7,
  quoted: _0x371196,
  body: _0x11a0b8,
  isCmd: _0x4888b8,
  command: _0x504c6a,
  args: _0x2e1a44,
  q: _0x1380aa,
  isGroup: _0x2d7a4e,
  sender: _0x495264,
  senderNumber: _0x3ce155,
  botNumber2: _0x151f97,
  botNumber: _0x181fcb,
  pushname: _0x164558,
  isMe: _0x3da374,
  isOwner: _0x3be9f2,
  groupMetadata: _0x1ec3ec,
  groupName: _0x15c759,
  participants: _0x1dc82e,
  groupAdmins: _0x270304,
  isBotAdmins: _0x4ace90,
  isAdmins: _0x513857,
  reply: _0x1ad67c
}) => {
  try {
    var _0x33355f = {
      text: '🎆',
      key: _0x34a09e.key
    };
    var _0x3bf9d1 = {
      react: _0x33355f
    };
    await _0x2e818a.sendMessage(_0x3ed122, _0x3bf9d1);
    if (!_0x1380aa.includes('+')) {
      return await _0x1ad67c(imgmsg6);
    }
    let [_0x415f54, _0x20b946] = _0x1380aa.split('+');
    new Maker().Ephoto360("https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html", ['' + _0x415f54, '' + _0x20b946]).then(async _0x4b25ba => {
      var _0x319029 = {
        quoted: _0x34a09e
      };
      await _0x2e818a.sendMessage(_0x3ed122, {
        'image': await getBuffer(_0x4b25ba.imageUrl),
        'caption': config.FOOTER
      }, _0x319029);
      var _0x185688 = {
        text: '✔',
        key: _0x34a09e.key
      };
      var _0x3aa0c5 = {
        react: _0x185688
      };
      await _0x2e818a.sendMessage(_0x3ed122, _0x3aa0c5);
    });
  } catch (_0xbef766) {
    _0x1ad67c(errt);
    _0x5de6d7(_0xbef766);
  }
});
var _0xd8f11e = {
  pattern: "dlogo6",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xd8f11e, async (_0x4ffccc, _0x11e7bd, _0x408205, {
  from: _0x439937,
  l: _0x562d30,
  quoted: _0x41f2e9,
  body: _0x59e1fd,
  isCmd: _0x2ce435,
  command: _0x56730b,
  args: _0x1fdef8,
  q: _0x8d293f,
  isGroup: _0x5500e7,
  sender: _0x368b8b,
  senderNumber: _0x112d44,
  botNumber2: _0xcb17ac,
  botNumber: _0x4cb919,
  pushname: _0x30459a,
  isMe: _0x510806,
  isOwner: _0x34d88c,
  groupMetadata: _0x58dc23,
  groupName: _0x4eb4c1,
  participants: _0x20d771,
  groupAdmins: _0x155082,
  isBotAdmins: _0x2d504c,
  isAdmins: _0x175e1c,
  reply: _0x5879fd
}) => {
  try {
    var _0x4281bd = {
      text: '🎆',
      key: _0x11e7bd.key
    };
    var _0x5d3d99 = {
      react: _0x4281bd
    };
    await _0x4ffccc.sendMessage(_0x439937, _0x5d3d99);
    let [_0x5ac0f3, _0x200005] = _0x8d293f.split('+');
    const _0x445a72 = await fetchJson("https://manul-official-tech-api-site.vercel.app/ephoto-effect?apikey=Manul-Official&url=" + _0x200005 + "&texk=" + _0x5ac0f3);
    var _0x1c4209 = {
      quoted: _0x11e7bd
    };
    await _0x4ffccc.sendMessage(_0x439937, {
      'image': await getBuffer(_0x445a72.data.imageUrl),
      'caption': config.FOOTER
    }, _0x1c4209);
    var _0x101e28 = {
      text: '✔',
      key: _0x11e7bd.key
    };
    var _0x578a5b = {
      react: _0x101e28
    };
    await _0x4ffccc.sendMessage(_0x439937, _0x578a5b);
  } catch (_0x44ecfc) {
    _0x5879fd(errt);
    _0x562d30(_0x44ecfc);
  }
});
var _0x176c22 = {
  pattern: "photooxy1",
  react: '💫',
  alias: ["logo3", "photooxy"],
  desc: desc1,
  category: "logo",
  use: ".photooxy1 vihanga yt",
  filename: __filename
};
cmd(_0x176c22, async (_0x41a01a, _0x1d2c69, _0x2d06b6, {
  from: _0x252094,
  l: _0x140b40,
  prefix: _0x45745c,
  quoted: _0x2b9e97,
  body: _0x3f293e,
  isCmd: _0x42878a,
  command: _0x398754,
  args: _0x1a40eb,
  q: _0x5ba979,
  isGroup: _0x2413e1,
  sender: _0x43d15d,
  senderNumber: _0x3fb82a,
  botNumber2: _0x36bdd4,
  botNumber: _0xe44165,
  pushname: _0x29761b,
  isMe: _0x116c55,
  isOwner: _0x363cbe,
  groupMetadata: _0x5e71ef,
  groupName: _0x4598f1,
  participants: _0x1b17fd,
  groupAdmins: _0x255734,
  isBotAdmins: _0x674131,
  isAdmins: _0x528e70,
  reply: _0xd8ec49
}) => {
  try {
    if (!_0x5ba979) {
      return await _0xd8ec49(imgmsg);
    }
    const _0xe82fd4 = await photooxy.get_urls_list();
    var _0xbd5286 = {
      text: N_FOUND
    };
    var _0x2cb21f = {
      quoted: _0x1d2c69
    };
    if (_0xe82fd4.length < 1) {
      return await _0x41a01a.sendMessage(_0x252094, _0xbd5286, _0x2cb21f);
    }
    var _0x595ccd = [];
    for (var _0x49ce67 = 0; _0x49ce67 < _0xe82fd4.length; _0x49ce67++) {
      if (_0xe82fd4[_0x49ce67].text === 1 && !_0xe82fd4[_0x49ce67].images) {
        _0x595ccd.push({
          'title': _0x49ce67 + 1,
          'rowId': _0x45745c + "dlogo3 " + _0x5ba979 + '+' + _0xe82fd4[_0x49ce67].url,
          'description': _0xe82fd4[_0x49ce67].title
        });
      }
    }
    var _0x2df788 = {
      title: "Result from photooxy. 📲",
      rows: _0x595ccd
    };
    const _0x4d34b5 = [_0x2df788];
    var _0x17aeef = {
      text: "[👨‍💻 ＰＯＤｉ - ＭＤ 👨‍💻]\n\n   *PHOTOOXY LOGO 01*\n\n*🤹 Entered Name:* " + _0x5ba979,
      footer: config.FOOTER,
      title: "Result from photooxy. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x4d34b5
    };
    var _0xc1d6f5 = {
      quoted: _0x1d2c69
    };
    return await _0x41a01a.replyList(_0x252094, _0x17aeef, _0xc1d6f5);
  } catch (_0x437c15) {
    _0xd8ec49("*ERROR !!*");
    _0x140b40(_0x437c15);
  }
});
function _0x2a2f59(_0x5b124f, _0x214c74, _0x3f071d, _0x37cacc, _0x2419bc) {
  return _0x27e8(_0x2419bc - 0x32f, _0x214c74);
}
var _0x300063 = {};
function _0x29421c(_0x3e4ec5, _0x10a7d4, _0x536b3a, _0x1da0bd, _0x1508a5) {
  return _0x27e8(_0x536b3a + 0x24d, _0x10a7d4);
}
_0x300063.pattern = "photooxy2";
_0x300063.react = '🎡';
_0x300063.alias = ["logo4"];
_0x300063.desc = desc3;
_0x300063.category = "logo";
_0x300063.use = ".photooxy2 vihanga+ashinshana";
_0x300063.filename = __filename;
cmd(_0x300063, async (_0x58b397, _0x4e55bb, _0x25ef9f, {
  from: _0x4d82f5,
  l: _0x1e83a3,
  prefix: _0x409018,
  quoted: _0x541132,
  body: _0x537079,
  isCmd: _0x3801be,
  command: _0x2086e5,
  args: _0x20ee25,
  q: _0x4f6816,
  isGroup: _0x20d974,
  sender: _0x297515,
  senderNumber: _0x2cbd04,
  botNumber2: _0x27b43b,
  botNumber: _0x4cbda6,
  pushname: _0x25ef5e,
  isMe: _0x315195,
  isOwner: _0x149902,
  groupMetadata: _0x20a808,
  groupName: _0x471a9c,
  participants: _0x120f36,
  groupAdmins: _0x2a749f,
  isBotAdmins: _0x104b3e,
  isAdmins: _0x2a4f4f,
  reply: _0x3245b5
}) => {
  try {
    if (!_0x4f6816.includes('+')) {
      return await _0x3245b5(imgmsg7);
    }
    const _0x423f2f = await photooxy.get_urls_list();
    var _0x2bee00 = {
      text: N_FOUND
    };
    var _0x310ec4 = {
      quoted: _0x4e55bb
    };
    if (_0x423f2f.length < 1) {
      return await _0x58b397.sendMessage(_0x4d82f5, _0x2bee00, _0x310ec4);
    }
    var _0x460d95 = [];
    for (var _0x28ed7d = 0; _0x28ed7d < _0x423f2f.length; _0x28ed7d++) {
      if (_0x423f2f[_0x28ed7d].text === 2 && !_0x423f2f[_0x28ed7d].images) {
        _0x460d95.push({
          'title': _0x28ed7d + 1,
          'rowId': _0x409018 + "dlogo4 " + _0x4f6816 + '+' + _0x423f2f[_0x28ed7d].url,
          'description': _0x423f2f[_0x28ed7d].title
        });
      }
    }
    var _0x2644a3 = {
      title: "Result from photooxy. 📲",
      rows: _0x460d95
    };
    const _0x17ddaa = [_0x2644a3];
    var _0x302a4f = {
      text: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *PHOTOOXY LOGO 02*\n\n*🤹 Entered Name:* " + _0x4f6816,
      footer: config.FOOTER,
      title: "Result from photooxy. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x17ddaa
    };
    var _0x41de1f = {
      quoted: _0x4e55bb
    };
    return await _0x58b397.replyList(_0x4d82f5, _0x302a4f, _0x41de1f);
  } catch (_0x2df784) {
    _0x3245b5("*ERROR !!*");
    _0x1e83a3(_0x2df784);
  }
});
var _0x2dac26 = {
  pattern: "photooxy3",
  react: '🎡',
  alias: ["logo5"],
  desc: desc3,
  category: "logo",
  use: ".photooxy3 <reply image",
  filename: __filename
};
cmd(_0x2dac26, async (_0xd6f791, _0x2b7170, _0x577139, {
  from: _0x6bdf1b,
  l: _0x2b15ee,
  prefix: _0x4807ac,
  quoted: _0x3c6d17,
  body: _0x2c5004,
  isCmd: _0x513408,
  command: _0x451a8a,
  args: _0x266ba0,
  q: _0x33a22e,
  isGroup: _0xb45819,
  sender: _0x5c78f6,
  senderNumber: _0x20c56c,
  botNumber2: _0x4e68e7,
  botNumber: _0x355f20,
  pushname: _0x1206aa,
  isMe: _0x29e77b,
  isOwner: _0x421549,
  groupMetadata: _0x4280d7,
  groupName: _0xc664c8,
  participants: _0x24d320,
  groupAdmins: _0x26f4e9,
  isBotAdmins: _0x21098b,
  isAdmins: _0xc69052,
  reply: _0x2e493f
}) => {
  try {
    const _0x26da0b = _0x577139.quoted ? _0x577139.quoted.type === "viewOnceMessage" : false;
    const _0x108142 = _0x577139.quoted ? _0x577139.quoted.type === "imageMessage" || (_0x26da0b ? _0x577139.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x577139.type === "imageMessage" || _0x108142) {
      var _0x243c55 = getRandom('');
      let _0xd853f = _0x108142 ? await _0x577139.quoted.download(_0x243c55) : await _0x577139.download(_0x243c55);
      let _0x407413 = await fileType.fromBuffer(_0xd853f);
      await fs.promises.writeFile('./' + _0x407413.ext, _0xd853f);
      const _0x24dc0e = await photooxy.get_urls_list();
      var _0x305f00 = {
        text: N_FOUND
      };
      var _0x4e6a02 = {
        quoted: _0x2b7170
      };
      if (_0x24dc0e.length < 1) {
        return await _0xd6f791.sendMessage(_0x6bdf1b, _0x305f00, _0x4e6a02);
      }
      var _0x57973d = [];
      for (var _0x410a49 = 0; _0x410a49 < _0x24dc0e.length; _0x410a49++) {
        if (_0x24dc0e[_0x410a49].text === 0 && _0x24dc0e[_0x410a49].images.length === 1) {
          _0x57973d.push({
            'title': _0x410a49 + 1,
            'rowId': _0x4807ac + "dlogo5 " + './' + _0x407413.ext + '+' + _0x24dc0e[_0x410a49].url,
            'description': _0x24dc0e[_0x410a49].title
          });
        }
      }
      var _0x570fe4 = {
        title: "Result from photooxy. 📲",
        rows: _0x57973d
      };
      const _0x5ca1a1 = [_0x570fe4];
      var _0x298f97 = {
        text: "[👨‍💻 ＰＯＤＩ - ＭＤ 👨‍💻]\n\n   *PHOTOOXY LOGO 03*\n\n*🤹 Entered Name:* " + _0x33a22e,
        footer: config.FOOTER,
        title: "Result from photooxy. 📲",
        buttonText: "*🔢 Reply below number*",
        sections: _0x5ca1a1
      };
      var _0x3acfbc = {
        quoted: _0x2b7170
      };
      return await _0xd6f791.replyList(_0x6bdf1b, _0x298f97, _0x3acfbc);
    } else {
      return await _0x2e493f(imgmsgeew);
    }
  } catch (_0x415e3f) {
    _0x2e493f("*ERROR !!*");
    _0x2b15ee(_0x415e3f);
  }
});
var _0x105097 = {
  pattern: "dlogo3",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x105097, async (_0x13d25d, _0x1c2cba, _0xf9912, {
  from: _0x187c1b,
  l: _0xd27e8,
  quoted: _0x24674e,
  body: _0x41ef26,
  isCmd: _0x28259b,
  command: _0x4e1585,
  args: _0x730116,
  q: _0x22ea8d,
  isGroup: _0x266179,
  sender: _0x26cd7a,
  senderNumber: _0x2e886f,
  botNumber2: _0x3d27c0,
  botNumber: _0x5cdbdd,
  pushname: _0x3193e2,
  isMe: _0x1a82eb,
  isOwner: _0x1b4bd1,
  groupMetadata: _0x1dd945,
  groupName: _0x28323e,
  participants: _0x1c8a75,
  groupAdmins: _0x4d4100,
  isBotAdmins: _0x2d814a,
  isAdmins: _0x465bb0,
  reply: _0x3b9bbc
}) => {
  try {
    var _0x48e2e4 = {
      text: '🎆',
      key: _0x1c2cba.key
    };
    var _0xe847fc = {
      react: _0x48e2e4
    };
    await _0x13d25d.sendMessage(_0x187c1b, _0xe847fc);
    let [_0x51c6df, _0x1b091a] = _0x22ea8d.split('+');
    var _0x4fbb31 = {
      url: _0x1b091a,
      text: ['' + _0x51c6df]
    };
    var _0xe532f6 = await photooxy.create(_0x4fbb31);
    var _0x25e20f = await photooxy.image_to_buffer(_0xe532f6.url);
    var _0x924045 = {
      image: _0x25e20f,
      caption: config.FOOTER
    };
    var _0x10566c = {
      quoted: _0x1c2cba
    };
    await _0x13d25d.sendMessage(_0x187c1b, _0x924045, _0x10566c);
    var _0x3269af = {
      text: '✔',
      key: _0x1c2cba.key
    };
    var _0x23e36c = {
      react: _0x3269af
    };
    await _0x13d25d.sendMessage(_0x187c1b, _0x23e36c);
  } catch (_0x4b364b) {
    _0x3b9bbc(errt);
    _0xd27e8(_0x4b364b);
  }
});
var _0x5aab27 = {
  pattern: "dlogo4",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5aab27, async (_0x16f6a4, _0x11cc31, _0x41f231, {
  from: _0x3ea045,
  l: _0xfb740b,
  quoted: _0x283547,
  body: _0x41221c,
  isCmd: _0x398479,
  command: _0x62120b,
  args: _0x1c1f2b,
  q: _0x315fb8,
  isGroup: _0xae119b,
  sender: _0x3540fd,
  senderNumber: _0x5b47f7,
  botNumber2: _0x35488b,
  botNumber: _0x3014ca,
  pushname: _0x2b72f6,
  isMe: _0x58c61b,
  isOwner: _0x39e396,
  groupMetadata: _0x4e08ef,
  groupName: _0x480fed,
  participants: _0x1fc479,
  groupAdmins: _0x5da834,
  isBotAdmins: _0x1e2230,
  isAdmins: _0x5cb522,
  reply: _0x97f560
}) => {
  try {
    var _0x1b564c = {
      text: '🎆',
      key: _0x11cc31.key
    };
    var _0x2608e5 = {
      react: _0x1b564c
    };
    await _0x16f6a4.sendMessage(_0x3ea045, _0x2608e5);
    let [_0x4b85a2, _0x13d88b, _0x447dff] = _0x315fb8.split('+');
    var _0x1f8cef = {
      url: _0x447dff,
      text: ['' + _0x4b85a2, '' + _0x13d88b]
    };
    var _0x4a177e = await photooxy.create(_0x1f8cef);
    var _0x173830 = await photooxy.image_to_buffer(_0x4a177e.url);
    var _0x3fde6b = {
      image: _0x173830,
      caption: config.FOOTER
    };
    var _0x42084a = {
      quoted: _0x11cc31
    };
    await _0x16f6a4.sendMessage(_0x3ea045, _0x3fde6b, _0x42084a);
    var _0x17449c = {
      text: '✔',
      key: _0x11cc31.key
    };
    var _0x33dfdc = {
      react: _0x17449c
    };
    await _0x16f6a4.sendMessage(_0x3ea045, _0x33dfdc);
  } catch (_0x34823c) {
    _0x97f560(errt);
    _0xfb740b(_0x34823c);
  }
});
var _0x44c8e7 = {};
function _0x27e8(_0x44db48, _0x374eb0) {
  var _0xa5ca6f = _0x3b65();
  _0x27e8 = function (_0x5bcc88, _0x3b65cb) {
    _0x5bcc88 = _0x5bcc88 - 358;
    var _0x27e878 = _0xa5ca6f[_0x5bcc88];
    return _0x27e878;
  };
  return _0x27e8(_0x44db48, _0x374eb0);
}
_0x44c8e7.pattern = "dlogo5";
_0x44c8e7.dontAddCommandList = true;
_0x44c8e7.filename = __filename;
cmd(_0x44c8e7, async (_0x53bb2b, _0x1baf29, _0x52ee6a, {
  from: _0x5c18d0,
  l: _0x1a5fd2,
  quoted: _0x2d3e46,
  body: _0x3d4f96,
  isCmd: _0x33e444,
  command: _0x42e378,
  args: _0x41c5d4,
  q: _0x53fbc1,
  isGroup: _0x398f4c,
  sender: _0x272b0b,
  senderNumber: _0x26113a,
  botNumber2: _0x30ad42,
  botNumber: _0x53b90f,
  pushname: _0x551069,
  isMe: _0x15facf,
  isOwner: _0x5649b2,
  groupMetadata: _0x40f948,
  groupName: _0x43d101,
  participants: _0x50d546,
  groupAdmins: _0x21bc41,
  isBotAdmins: _0x2c786c,
  isAdmins: _0x1e817d,
  reply: _0x23a888
}) => {
  try {
    var _0x52e29f = {
      text: '🎆',
      key: _0x1baf29.key
    };
    var _0x5be4f9 = {
      react: _0x52e29f
    };
    await _0x53bb2b.sendMessage(_0x5c18d0, _0x5be4f9);
    let [_0x4ddb1b, _0x167042] = _0x53fbc1.split('+');
    var _0x518ffb = {
      url: _0x167042,
      images: ['' + _0x4ddb1b]
    };
    var _0x4f2be9 = await photooxy.create(_0x518ffb);
    var _0x6fb889 = await photooxy.image_to_buffer(_0x4f2be9.url);
    var _0x58652a = {
      image: _0x6fb889,
      caption: config.FOOTER
    };
    var _0x494208 = {
      quoted: _0x1baf29
    };
    await _0x53bb2b.sendMessage(_0x5c18d0, _0x58652a, _0x494208);
    var _0x2ac0c8 = {
      text: '✔',
      key: _0x1baf29.key
    };
    var _0x553bd2 = {
      react: _0x2ac0c8
    };
    await _0x53bb2b.sendMessage(_0x5c18d0, _0x553bd2);
  } catch (_0x3dd7b2) {
    _0x23a888(errt);
    _0x1a5fd2(_0x3dd7b2);
  }
});