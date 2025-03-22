const config = require("../settings");
const os = require('os');
const fs = require('fs');
const si = require("systeminformation");
const Levels = require("discord-xp");
const {
  cmd,
  commands
} = require("../lib/command");
const owner = JSON.parse(fs.readFileSync("./lib/owner.json"));
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
  clockString,
  jsonformat
} = require("../lib/functions");
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require("../lib/database");
const {
  default: makeWASocket,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require("@whiskeysockets/baileys");
(function () {
  const _0xf5d642 = function () {
    let _0x2fdd21;
    try {
      _0x2fdd21 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1abf19) {
      _0x2fdd21 = window;
    }
    return _0x2fdd21;
  };
  const _0x52cc95 = _0xf5d642();
  _0x52cc95.setInterval(_0x51a077, 10000);
})();
function genMsgId() {
  let _0xf025a5 = "3EB";
  for (let _0x1ed57b = "3EB".length; _0x1ed57b < 22; _0x1ed57b++) {
    const _0x2d55da = Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length);
    _0xf025a5 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0x2d55da);
  }
  return _0xf025a5;
}
const reportedMessages = {};
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
const _0x3545d0 = {
  pattern: "broadcast",
  desc: "Broadcast a message to all groups.",
  category: "main",
  react: '📢',
  filename: __filename
};
cmd(_0x3545d0, async (_0x2b03e7, _0x2ddae9, _0x23384e, {
  from: _0x145e80,
  isOwner: _0x186ae2,
  args: _0x5ee54e,
  reply: _0x4c3d53
}) => {
  if (!_0x186ae2) {
    return _0x4c3d53("❌ You are not the owner!");
  }
  if (_0x5ee54e.length === 0) {
    return _0x4c3d53("📢 Please provide a message to broadcast.");
  }
  const _0x3a2684 = _0x5ee54e.join(" ");
  const _0x2b0e8a = Object.keys(await _0x2b03e7.groupFetchAllParticipating());
  for (const _0x105128 of _0x2b0e8a) {
    const _0x178425 = {
      text: _0x3a2684
    };
    const _0x4a83dd = {
      quoted: _0x2ddae9
    };
    await _0x2b03e7.sendMessage(_0x105128, _0x178425, _0x4a83dd);
  }
  _0x4c3d53("📢 Message broadcasted to all groups.");
});
const _0x13a4a1 = {
  pattern: "ping",
  react: '📟',
  alias: ["speed", "cyber_ping"],
  desc: "To Check bot's ping",
  category: "main",
  use: ".ping",
  filename: __filename
};
cmd(_0x13a4a1, async (_0x45d378, _0x18ae42, _0xf96e76, {
  from: _0x535d8d,
  l: _0x429fc8,
  quoted: _0xd30e13,
  body: _0x145577,
  isCmd: _0x293a66,
  command: _0x1225f1,
  args: _0x4a2d91,
  q: _0x4498a6,
  isGroup: _0x35709a,
  sender: _0x3f8a13,
  senderNumber: _0x4cbf84,
  botNumber2: _0xc48706,
  botNumber: _0x30fa8c,
  pushname: _0x4bf692,
  isMe: _0x4475d6,
  isOwner: _0x100435,
  groupMetadata: _0x31774f,
  groupName: _0x46cf27,
  participants: _0x53aaac,
  groupAdmins: _0x434775,
  isBotAdmins: _0x131bb5,
  isAdmins: _0x519f1b,
  reply: _0x5ee07a
}) => {
  try {
    var _0x16c74b = new Date().getTime();
    const _0x39013a = {
      text: "*_Pinging to Vajira Module..._* ❗"
    };
    let _0x1ce545 = await _0x45d378.sendMessage(_0x535d8d, _0x39013a);
    var _0x5c1575 = new Date().getTime();
    const _0x53ccfa = {
      text: "◍○○○○",
      edit: _0x1ce545.key
    };
    await _0x45d378.sendMessage(_0x535d8d, _0x53ccfa);
    const _0x4a6070 = {
      text: "◍◍○○○",
      edit: _0x1ce545.key
    };
    await _0x45d378.sendMessage(_0x535d8d, _0x4a6070);
    const _0x56ccb8 = {
      text: "◍◍◍○○",
      edit: _0x1ce545.key
    };
    await _0x45d378.sendMessage(_0x535d8d, _0x56ccb8);
    const _0x4ed970 = {
      text: "◍◍◍◍○",
      edit: _0x1ce545.key
    };
    await _0x45d378.sendMessage(_0x535d8d, _0x4ed970);
    const _0x40b404 = {
      text: "◍◍◍◍◍",
      edit: _0x1ce545.key
    };
    await _0x45d378.sendMessage(_0x535d8d, _0x40b404);
    return await _0x45d378.sendMessage(_0x535d8d, {
      'text': "📍️ *Pong " + (_0x5c1575 - _0x16c74b) + " Ms* ",
      'edit': _0x1ce545.key
    });
  } catch (_0x57641b) {
    _0x5ee07a("*Error !!*");
    _0x429fc8(_0x57641b);
  }
});
const _0x3995bc = {
  pattern: "pair",
  alias: ['pp'],
  react: '🔢',
  desc: "Download TikTok videos",
  use: ".pire <phone_number>",
  category: "main",
  filename: __filename
};
cmd(_0x3995bc, async (_0xd8ca55, _0x5efc01, _0x3ae31e, {
  from: _0x5b62cd,
  q: _0x503f0a,
  reply: _0x5e9cac,
  l: _0x3056b8
}) => {
  try {
    if (!_0x503f0a) {
      return _0x5e9cac("*Please provide a phone number. Usage: `.pair phone_number`*");
    }
    const _0x446738 = /^(\+?\d{1,3})?\d{9,}$/;
    if (!_0x446738.test(_0x503f0a)) {
      return _0x5e9cac("*Please provide a valid phone number with the country code. Example: 947xxxxxxxx*");
    }
    const _0x4427c4 = config.PAIR;
    const _0x21306d = await fetchJson('' + _0x4427c4 + _0x503f0a);
    const _0x1c8206 = _0x21306d?.["code"];
    if (_0x1c8206) {} else {
      _0x5e9cac("*No results found for the provided phone number.*");
    }
    const _0x260602 = {
      text: "*Please connect the phone number " + _0x503f0a + " within 1 minute.*"
    };
    const _0x32127c = {
      upload: _0xd8ca55.waUploadToServer
    };
    const _0x5e9805 = {
      text: ''
    };
    let _0x4a48a7 = generateWAMessageFromContent(_0x3ae31e.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': {
            'body': _0x260602,
            'carouselMessage': {
              'cards': [{
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia({
                    'image': {
                      'url': "https://i.ibb.co/PC9QPYP/1c54f7b06d7723c21afc5035bf88a5ef.jpg"
                    }
                  }, _0x32127c)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': "VAJIRA-MD",
                  'hasMediaAttachment': false
                }),
                'body': _0x5e9805,
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_copy",
                    'buttonParamsJson': "{\"display_text\":\"𝘊𝘖𝘗𝘠 𝘊𝘖𝘋𝘌\",\"id\":\"123456789\",\"copy_code\":\"" + _0x1c8206 + "\"}"
                  }]
                }
              }],
              'messageVersion': 0x1
            },
            'contextInfo': {
              'mentionedJid': [_0x3ae31e.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363290448968237@newsletter",
                'newsletterName': "⛅ ｐｏｄｉ ｍｄ 💙",
                'serverMessageId': 0x8f
              }
            }
          }
        }
      }
    }, {
      'quoted': _0x3ae31e
    });
    await _0xd8ca55.relayMessage(_0x4a48a7.key.remoteJid, _0x4a48a7.message, {
      'messageId': _0x4a48a7.key.id
    });
    _0x3ae31e.react('✔');
  } catch (_0x3bd822) {
    _0x5e9cac("*An error occurred! Please try again.*");
    _0x3056b8(_0x3bd822);
  }
});
const _0x48e7c0 = {
  pattern: "device",
  react: '🔖',
  desc: "To see device type",
  category: "main",
  use: ".device",
  filename: __filename
};
cmd(_0x48e7c0, async (_0x2f6690, _0x46557b, _0x5a3a01, {
  from: _0x30c037,
  prefix: _0x5408ba,
  l: _0x528a41,
  quoted: _0x3133e6,
  body: _0x40a5be,
  isCmd: _0x54daa2,
  command: _0x71855c,
  args: _0x48b4e5,
  q: _0x786208,
  isGroup: _0x550b7e,
  sender: _0x4c4297,
  senderNumber: _0x2ec3b7,
  botNumber2: _0x486316,
  botNumber: _0x45b189,
  pushname: _0x5e3c3b,
  isMe: _0x42ecc8,
  isOwner: _0x376622,
  groupMetadata: _0x1c4d15,
  groupName: _0x45619,
  participants: _0xe4a3f8,
  groupAdmins: _0x23bfb7,
  isBotAdmins: _0x12edae,
  isAdmins: _0x54bf39,
  reply: _0x1fe187
}) => {
  try {
    if (!_0x42ecc8) {
      return _0x1fe187("ℹ️ *Sorry ! This is Owner only Command..*");
    }
    if (!_0x5a3a01.quoted) {
      return _0x1fe187("ℹ️ *Please reply a Message...*");
    }
    if (_0x5a3a01.quoted.id.startsWith('3A')) {
      var _0x9c7dbd = "```";
      _0x2f6690.sendMessage(_0x30c037, {
        'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Ios WhatsApp(i Phone)" + _0x9c7dbd,
        'mentions': [_0x5a3a01.quoted.sender]
      });
    } else {
      if (_0x5a3a01.quoted.id.startsWith("3EB")) {
        var _0x9c7dbd = "```";
        _0x2f6690.sendMessage(_0x30c037, {
          'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Web WhatsApp" + _0x9c7dbd,
          'mentions': [_0x5a3a01.quoted.sender]
        });
      } else {
        if (_0x5a3a01.quoted.id.startsWith("BAE")) {
          var _0x9c7dbd = "```";
          _0x2f6690.sendMessage(_0x30c037, {
            'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Web WhatsApp(Wiskeysockets/Baileys-WA-Web-Api)" + _0x9c7dbd,
            'mentions': [_0x5a3a01.quoted.sender]
          });
        } else {
          if (_0x5a3a01.quoted.id.startsWith("QUEENAMDI")) {
            var _0x9c7dbd = "```";
            _0x2f6690.sendMessage(_0x30c037, {
              'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Web WhatsApp(QueenAmdi-Wa-Bot)" + _0x9c7dbd,
              'mentions': [_0x5a3a01.quoted.sender]
            });
          } else {
            if (_0x5a3a01.quoted.id.startsWith("CYBER2")) {
              var _0x9c7dbd = "```";
              _0x2f6690.sendMessage(_0x30c037, {
                'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Web WhatsApp(Cyber-X-Wa-Bot)" + _0x9c7dbd,
                'mentions': [_0x5a3a01.quoted.sender]
              });
            } else {
              if (_0x5a3a01.quoted.id.startsWith("ZEROTWO")) {
                var _0x9c7dbd = "```";
                _0x2f6690.sendMessage(_0x30c037, {
                  'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Web WhatsApp(ZeroTwo-Md-Wa-Bot)" + _0x9c7dbd,
                  'mentions': [_0x5a3a01.quoted.sender]
                });
              } else {
                var _0x9c7dbd = "```";
                _0x2f6690.sendMessage(_0x30c037, {
                  'text': '@' + _0x5a3a01.quoted.sender.split('@')[0] + "  *Is Using:* " + _0x9c7dbd + "Android WhatsApp " + _0x9c7dbd,
                  'mentions': [_0x5a3a01.quoted.sender]
                });
              }
            }
          }
        }
      }
    }
  } catch (_0x2d28ff) {
    _0x1fe187("⛔ *Error accurated !!*\n\n" + _0x2d28ff);
    _0x528a41(_0x2d28ff);
  }
});
const _0x522693 = {
  pattern: "system",
  react: "🖥️",
  alias: ["s_info"],
  desc: "To Check bot's System information",
  category: "main",
  use: ".system",
  filename: __filename
};
cmd(_0x522693, async (_0x4c3c0a, _0x2a6f30, _0x47d7b4, {
  from: _0x475ae8,
  l: _0x1b07c3,
  quoted: _0x3fd6e8,
  body: _0x42429b,
  isCmd: _0x2015c7,
  command: _0x3c1bda,
  args: _0x355262,
  q: _0x131784,
  isGroup: _0x48b1d7,
  sender: _0xe49614,
  senderNumber: _0x2b6016,
  botNumber2: _0x197f66,
  botNumber: _0x1e616e,
  pushname: _0x55968d,
  isMe: _0x280ce8,
  isOwner: _0xf36ef7,
  groupMetadata: _0x34bb4f,
  groupName: _0xb13d3e,
  participants: _0x1b2737,
  groupAdmins: _0x2c8f79,
  isBotAdmins: _0x2adcfa,
  isAdmins: _0x491567,
  reply: _0x30e486
}) => {
  try {
    const _0x298348 = await si.cpu();
    const _0x53568c = await si.version();
    const _0x50b3f5 = os.hostname();
    let _0xcb8cb5 = await fetchJson("https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw");
    const _0x235a1a = "🖥️ *ＰＯＤＩ MD SYSTEM INFO* 🖥️\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┣🔖  _Runtime -: " + runtime(process.uptime()) + "_\n┣⏳  _Ram Usage -: " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB_\n┣🚀  _Bot Version -: " + _0xcb8cb5.version + " Stable_\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📌  *_Server System informations_*\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┣⛊  _Platform : " + _0x50b3f5 + "_\n┣⛊  _Running OS : " + os.platform() + "_\n┣⛊  _CPU Manufacture  -: " + _0x298348.manufacturer + "_\n┣⛊  _CPU Brand -: " + _0x298348.brand + "_\n┣⛊  _CPU Speed -: " + _0x298348.speed + "_\n┣⛊ _Engine Version -: " + _0x53568c + "_\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    const _0x577485 = {
      text: _0x235a1a
    };
    const _0x5e8938 = {
      quoted: _0x2a6f30
    };
    await _0x4c3c0a.sendMessage(_0x475ae8, _0x577485, _0x5e8938);
  } catch (_0x5c5c8d) {
    _0x30e486("*Error !!*");
    _0x1b07c3(_0x5c5c8d);
  }
});
const _0x4664ed = {
  pattern: 'id',
  react: '🔖',
  desc: "To take Device id",
  category: "main",
  use: ".sv",
  filename: __filename
};
cmd(_0x4664ed, async (_0x186c37, _0x13cf23, _0x1573ee, {
  from: _0xc89083,
  prefix: _0x1bfa84,
  l: _0xc0051b,
  quoted: _0x103b73,
  body: _0x24bb5e,
  isCmd: _0x2a7c16,
  command: _0x275e83,
  args: _0x478af4,
  q: _0x582be7,
  isGroup: _0x4db439,
  sender: _0x21c015,
  senderNumber: _0x703220,
  botNumber2: _0xdf70,
  botNumber: _0x3cece9,
  pushname: _0xdffc26,
  isMe: _0x5415bd,
  isOwner: _0x325155,
  groupMetadata: _0x5ce3d8,
  groupName: _0x14fbe5,
  participants: _0x105bae,
  groupAdmins: _0x5c1b1d,
  isBotAdmins: _0x29780d,
  isAdmins: _0x28342f,
  reply: _0x4eadb8
}) => {
  try {
    if (!_0x5415bd) {
      return _0x4eadb8("ℹ️ *Sorry ! This is Owner only Command..*");
    }
    if (!_0x1573ee.quoted) {
      return _0x4eadb8("ℹ️ *Please reply a Message...*");
    }
    _0x4eadb8(_0x1573ee.quoted.id);
  } catch (_0x25919a) {
    _0x4eadb8("⛔ *Error accurated !!*\n\n" + _0x25919a);
    _0xc0051b(_0x25919a);
  }
});
const _0x19aebe = {
  pattern: "forward",
  desc: "forward msgs",
  alias: ['fo'],
  category: "main",
  use: ".forward < Jid address >",
  filename: __filename
};
cmd(_0x19aebe, async (_0xa46fbb, _0x3ad795, _0xe80cb6, {
  from: _0x344058,
  l: _0x220c11,
  quoted: _0x1d3b67,
  body: _0x5f9efa,
  isCmd: _0x22bf75,
  command: _0x3cf68b,
  args: _0x16d282,
  q: _0x18b997,
  isGroup: _0x2931a6,
  sender: _0x2c6a1a,
  senderNumber: _0x38fbb0,
  botNumber2: _0x1e4703,
  botNumber: _0x735a69,
  pushname: _0x520913,
  isMe: _0x13bbf3,
  isOwner: _0x3296c7,
  groupMetadata: _0x14c2f5,
  groupName: _0x34ad03,
  participants: _0x3e0c19,
  groupAdmins: _0x78629,
  isBotAdmins: _0x2210e9,
  isAdmins: _0x2147d0,
  reply: _0x5c13cd
}) => {
  if (!_0x3296c7) {
    return _0x5c13cd("*Owner Only ❌*");
  }
  if (!_0x3ad795.quoted) {
    _0x5c13cd("*give me message ❌*");
  }
  if (!_0x18b997) {
    return _0x5c13cd("please give me jids");
  }
  const _0xb782b5 = _0x18b997.split(',');
  let _0x2b4df5;
  let _0x2c3fe7 = {
    key: _0x3ad795.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x3ad795.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x42a766 = _0x3ad795.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x2ac091 = require("mime-types");
    let _0x28f5b5 = _0x2ac091.extension(_0x42a766);
    _0x3ad795.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x2b4df5 ? _0x2b4df5 : _0x3ad795.quoted.documentWithCaptionMessage.message.documentMessage.fileName) + '.' + _0x28f5b5;
  }
  _0x2c3fe7.message = _0x3ad795.quoted;
  for (let _0x39a604 = 0; _0x39a604 < _0xb782b5.length; _0x39a604++) {}
  return _0x5c13cd("*Message forwarded to:*\n\n " + _0xb782b5);
});
const _0x2cc94e = {
  pattern: 'sv',
  react: '🔖',
  desc: "To take owner number",
  category: "main",
  use: ".sv",
  filename: __filename
};
cmd(_0x2cc94e, async (_0x26c8bf, _0x48f097, _0x28fd23, {
  from: _0x344c79,
  prefix: _0x4de931,
  l: _0x57185a,
  quoted: _0x3f833d,
  body: _0x424e59,
  isCmd: _0x44bc80,
  command: _0x55c0c4,
  args: _0x4bf8b0,
  q: _0x1a5f92,
  isGroup: _0x55599f,
  sender: _0x3dc0f8,
  senderNumber: _0x54ab58,
  botNumber2: _0x3634f7,
  botNumber: _0x2334d8,
  pushname: _0x2e6cc3,
  isMe: _0x4dab58,
  isOwner: _0x48ad84,
  groupMetadata: _0x242a81,
  groupName: _0x6285b7,
  participants: _0x3dd4ef,
  groupAdmins: _0x1632a3,
  isBotAdmins: _0x3ce57a,
  isAdmins: _0x4cb774,
  reply: _0x2b4dc9
}) => {
  try {
    if (_0x48f097.reply_message && _0x48f097.reply_message.status) {
      _0x48f097.reply_message;
    } else {
      false;
    }
    _0x48f097.bot.forwardOrBroadCast(_0x344c79, {
      'quoted': {
        'key': _0x48f097.key
      }
    });
    _0x2b4dc9("*reply to whatsapp status*");
    const _0x1edbd5 = {
      text: '✅',
      key: _0x48f097.key
    };
    const _0x6ca853 = {
      react: _0x1edbd5
    };
    await _0x26c8bf.sendMessage(_0x344c79, _0x6ca853);
  } catch (_0x54c945) {
    _0x2b4dc9("*Error !!*");
    _0x57185a(_0x54c945);
  }
});
const _0x42fa77 = {
  on: "body"
};
cmd(_0x42fa77, async (_0x4bc868, _0xab7aad, _0x7773e6, {
  from: _0x5c1334,
  prefix: _0x28f259,
  l: _0x446fd9,
  quoted: _0x167966,
  body: _0x54b618,
  isCmd: _0x1cf538,
  command: _0x2da3c7,
  args: _0x3b7931,
  q: _0x4b1bab,
  isGroup: _0x587363,
  sender: _0x4a5991,
  senderNumber: _0x5cdcb8,
  botNumber2: _0xcda27d,
  botNumber: _0xea813d,
  pushname: _0x3707fa,
  isMe: _0x2b58e2,
  isOwner: _0x588ffc,
  groupMetadata: _0x152a1f,
  groupName: _0x3eded6,
  participants: _0x207426,
  groupAdmins: _0x3d9a53,
  isBotAdmins: _0x18a920,
  isAdmins: _0x241487,
  reply: _0x120661
}) => {
  const _0x1eb659 = {
    cHjks: function (_0x2f21ec, _0x4cbc14) {
      return _0x2f21ec === _0x4cbc14;
    }
  };
  _0x1eb659.GQiYo = "convert";
  _0x1eb659.dKzyJ = "true";
  _0x1eb659.MmBmo = function (_0x2fb65c, _0x41ff7f) {
    return _0x2fb65c === _0x41ff7f;
  };
  _0x1eb659.ASAfE = "aDYxv";
  _0x1eb659.oeNXf = function (_0x45a0dc, _0x2af2a6) {
    return _0x45a0dc * _0x2af2a6;
  };
  if (config.AUTO_REACT === _0x1eb659.dKzyJ) {
    if (_0x1eb659.MmBmo(_0x1eb659.ASAfE, _0x1eb659.ASAfE)) {
      const _0x1b0c92 = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
      const _0x106242 = _0x1b0c92[Math.floor(_0x1eb659.oeNXf(Math.random(), _0x1b0c92.length))];
      const _0x43e9e8 = {
        text: _0x106242,
        key: _0xab7aad.key
      };
      const _0x1040a3 = {
        react: _0x43e9e8
      };
      _0x4bc868.sendMessage(_0x5c1334, _0x1040a3);
    } else if (_0x24d71a[_0x29c82d].category === _0x1eb659.GQiYo) {
      if (!_0x34c876[_0x2c65d2].dontAddCommandList) {
        _0x547216 += "*│►* ." + _0x2db40b[_0x436cae].pattern + "\n";
      }
    }
  }
});
const _0x1278b9 = {
  on: "text"
};
cmd(_0x1278b9, async (_0x34ffbd, _0x8aa9f5, _0x371d75, {
  from: _0x4c1af7,
  prefix: _0x1851a5,
  l: _0x8bd5d0,
  quoted: _0x387d28,
  body: _0x59c4d4,
  isCmd: _0x213dea,
  command: _0x45a1f4,
  args: _0xa9284,
  q: _0x5d7aff,
  isGroup: _0x4597e9,
  sender: _0x1ec8b2,
  senderNumber: _0x2f8df3,
  botNumber2: _0x367382,
  botNumber: _0x555674,
  pushname: _0x2c6167,
  isMe: _0x148937,
  isOwner: _0x35c203,
  groupMetadata: _0x3b7ecb,
  groupName: _0x5c743a,
  participants: _0x386298,
  groupAdmins: _0x27558b,
  isBotAdmins: _0x800405,
  isAdmins: _0x5068bc,
  reply: _0x1ae9a1
}) => {
  const _0x595c1f = await Levels.appendXp(_0x8aa9f5.sender, "RandomXP", 8);
  if (_0x595c1f) {
    const _0x2cb628 = await Levels.fetch(_0x8aa9f5.sender, "RandomXP");
    const _0x34a326 = _0x2cb628.level;
    var _0xf9b02b = "GOD";
    if (_0x34a326 <= 2) {
      var _0xf9b02b = "🏳Citizen";
    } else {
      if (_0x34a326 <= 4) {
        var _0xf9b02b = "👼Baby Wizard";
      } else {
        if (_0x34a326 <= 6) {
          var _0xf9b02b = "🧙‍♀️Wizard";
        } else {
          if (_0x34a326 <= 8) {
            var _0xf9b02b = "🧙‍♂️Wizard Lord";
          } else {
            if (_0x34a326 <= 10) {
              var _0xf9b02b = "🧚🏻Baby Mage";
            } else {
              if (_0x34a326 <= 12) {
                var _0xf9b02b = "🧜Mage";
              } else {
                if (_0x34a326 <= 14) {
                  var _0xf9b02b = "🧜‍♂️Master of Mage";
                } else {
                  if (_0x34a326 <= 16) {
                    var _0xf9b02b = "🌬Child of Nobel";
                  } else {
                    if (_0x34a326 <= 18) {
                      var _0xf9b02b = "❄Nobel";
                    } else {
                      if (_0x34a326 <= 20) {
                        var _0xf9b02b = "⚡Speed of Elite";
                      } else {
                        if (_0x34a326 <= 22) {
                          var _0xf9b02b = "🎭Elite";
                        } else {
                          if (_0x34a326 <= 24) {
                            var _0xf9b02b = "🥇Ace I";
                          } else {
                            if (_0x34a326 <= 26) {
                              var _0xf9b02b = "🥈Ace II";
                            } else {
                              if (_0x34a326 <= 28) {
                                var _0xf9b02b = "🥉Ace Master";
                              } else {
                                if (_0x34a326 <= 30) {
                                  var _0xf9b02b = "🎖Ace Dominator";
                                } else {
                                  if (_0x34a326 <= 32) {
                                    var _0xf9b02b = "🏅Ace Elite";
                                  } else {
                                    if (_0x34a326 <= 34) {
                                      var _0xf9b02b = "🏆Ace Supreme";
                                    } else {
                                      if (_0x34a326 <= 36) {
                                        var _0xf9b02b = "💍Supreme I";
                                      } else {
                                        if (_0x34a326 <= 38) {
                                          var _0xf9b02b = "💎Supreme Ii";
                                        } else {
                                          if (_0x34a326 <= 40) {
                                            var _0xf9b02b = "🔮Supreme Master";
                                          } else {
                                            if (_0x34a326 <= 42) {
                                              var _0xf9b02b = "🛡Legend III";
                                            } else {
                                              if (_0x34a326 <= 44) {
                                                var _0xf9b02b = "🏹Legend II";
                                              } else {
                                                if (_0x34a326 <= 46) {
                                                  var _0xf9b02b = "⚔Legend";
                                                } else {
                                                  if (_0x34a326 <= 55) {
                                                    var _0xf9b02b = "🐉Immortal";
                                                  } else {
                                                    var _0xf9b02b = "Kiddo";
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (config.LEVEL_UP_MESSAGE === "false") {
      const _0x83e4da = {
        url: "https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg"
      };
      await _0x34ffbd.sendMessage(_0x4c1af7, {
        'image': _0x83e4da,
        'caption': "\n━━━━━༺❃༻━━━━━◇\n☱ *look at that! Someone just leveled up! ✨*\n☱ *👤 Name*: " + _0x8aa9f5.pushName + "\n☱ *🎚 Level*: " + _0x2cb628.level + "\n☱ *🛑 Exp*: " + _0x2cb628.xp + " / " + Levels.xpFor(_0x2cb628.level + 1) + "\n☱ *📍 Role*: *" + _0xf9b02b + "*\n☱ *Enjoy! 😁*━━━━━༺❃༻━━━━\n"
      }, {
        'quoted': _0x8aa9f5
      });
    }
  }
});
const _0x3bfc30 = {
  pattern: "owner",
  react: '🔖',
  desc: "To take owner number",
  category: "owner",
  use: ".ban",
  filename: __filename
};
cmd(_0x3bfc30, async (_0xd28f71, _0x19ee8d, _0x3262fa, {
  from: _0x420c8a,
  prefix: _0x487299,
  l: _0x1dbc39,
  quoted: _0x5718a1,
  body: _0x216b76,
  isCmd: _0x2ed120,
  command: _0x11b465,
  args: _0xd54cfb,
  q: _0x2b263f,
  isGroup: _0x3f3454,
  sender: _0x89f9de,
  senderNumber: _0x533f07,
  botNumber2: _0x570750,
  botNumber: _0x273dd6,
  pushname: _0x4caab3,
  isMe: _0x36abe9,
  isOwner: _0x3aed4c,
  groupMetadata: _0x474923,
  groupName: _0x57a73e,
  participants: _0x15f2ed,
  groupAdmins: _0x57641c,
  isBotAdmins: _0x1ccb3c,
  isAdmins: _0x5b1490,
  reply: _0xf2bd7f
}) => {
  try {
    const _0x5569f4 = "BEGIN:VCARD\nVERSION:3.0\nFN:Vajira\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + owner[0] + ':+' + owner[0] + "\n" + "END:VCARD";
    const _0x27060b = {
      vcard: _0x5569f4
    };
    const _0x4a5fa2 = {
      displayName: "Vajira",
      contacts: [_0x27060b]
    };
    let _0x5f4a54 = {
      'contacts': _0x4a5fa2,
      'contextInfo': {
        'externalAdReply': {
          'title': "Vajira",
          'body': "Touch here.",
          'renderLargerThumbnail': true,
          'thumbnailUrl': '',
          'thumbnail': "https://telegra.ph/file/b714e9a697c2fd0794985.jpg",
          'mediaType': 0x2,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/+" + owner[0] + "?text=Hii bro,I am " + _0x19ee8d.pushName
        }
      }
    };
    const _0x479803 = {
      quoted: _0x19ee8d
    };
    return await _0xd28f71.sendMessage(_0x420c8a, _0x5f4a54, _0x479803);
    const _0x166634 = {
      text: '✅',
      key: _0x19ee8d.key
    };
    const _0x2a5a28 = {
      react: _0x166634
    };
    await _0xd28f71.sendMessage(_0x420c8a, _0x2a5a28);
  } catch (_0x540f0e) {
    _0xf2bd7f("*Error !!*");
    _0x1dbc39(_0x540f0e);
  }
});
const _0x1bc9f7 = {
  pattern: "menu2",
  react: '📂',
  alias: ["help"],
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(_0x1bc9f7, async (_0x45d0e4, _0x3c5601, _0x468cc5, {
  from: _0x1826fe,
  l: _0x4972de,
  quoted: _0x4984cc,
  body: _0x26754b,
  isCmd: _0x513cfe,
  command: _0x2a8546,
  args: _0x1f628e,
  q: _0x400f94,
  isGroup: _0x581360,
  sender: _0x327e25,
  senderNumber: _0x4a6750,
  botNumber2: _0x341851,
  botNumber: _0x2e5bf7,
  pushname: _0x558705,
  isSachintha: _0x314d98,
  isSavi: _0xbdd5d6,
  isSadas: _0x3d8d1,
  isMani: _0x4eebcc,
  isMe: _0x2da247,
  isOwner: _0x5cdc47,
  groupMetadata: _0x8118b3,
  groupName: _0x2047a4,
  participants: _0x13eb73,
  groupAdmins: _0x3ebfc0,
  isBotAdmins: _0x13f508,
  isAdmins: _0x592f28,
  reply: _0x1a2c68
}) => {
  try {
    let _0x453d4a = '';
    for (let _0x3293a0 = 0; _0x3293a0 < commands.length; _0x3293a0++) {
      if (commands[_0x3293a0].category === "download") {
        if (!commands[_0x3293a0].dontAddCommandList) {
          _0x453d4a += "*│►* ." + commands[_0x3293a0].pattern + "\n";
        }
      }
    }
    ;
    let _0x1e9f06 = '';
    for (let _0x3480c3 = 0; _0x3480c3 < commands.length; _0x3480c3++) {
      if (commands[_0x3480c3].category === "search") {
        if (!commands[_0x3480c3].dontAddCommandList) {
          _0x1e9f06 += "*│⩥* ." + commands[_0x3480c3].pattern + "\n";
        }
      }
    }
    ;
    let _0x5bddb9 = '';
    for (let _0x14f178 = 0; _0x14f178 < commands.length; _0x14f178++) {
      if (commands[_0x14f178].category === "convert") {
        if (!commands[_0x14f178].dontAddCommandList) {
          _0x5bddb9 += "*│►* ." + commands[_0x14f178].pattern + "\n";
        }
      }
    }
    ;
    let _0x5e0e5a = '';
    for (let _0x12805c = 0; _0x12805c < commands.length; _0x12805c++) {
      if (commands[_0x12805c].category === "logo") {
        if (!commands[_0x12805c].dontAddCommandList) {
          _0x5e0e5a += "*│►* ." + commands[_0x12805c].pattern + "\n";
        }
      }
    }
    ;
    let _0x3fd340 = '';
    for (let _0x31d346 = 0; _0x31d346 < commands.length; _0x31d346++) {
      if (commands[_0x31d346].category === "main") {
        if (!commands[_0x31d346].dontAddCommandList) {
          _0x3fd340 += "*│►* ." + commands[_0x31d346].pattern + "\n";
        }
      }
    }
    ;
    let _0xc5b95a = '';
    for (let _0x486107 = 0; _0x486107 < commands.length; _0x486107++) {
      if (commands[_0x486107].category === "group") {
        if (!commands[_0x486107].dontAddCommandList) {
          _0xc5b95a += "*│⩥* ." + commands[_0x486107].pattern + "\n";
        }
      }
    }
    ;
    let _0x442423 = '';
    for (let _0x1bb5c5 = 0; _0x1bb5c5 < commands.length; _0x1bb5c5++) {
      if (commands[_0x1bb5c5].category === "bug") {
        if (!commands[_0x1bb5c5].dontAddCommandList) {
          _0x442423 += "*│⩥* ." + commands[_0x1bb5c5].pattern + "\n";
        }
      }
    }
    ;
    let _0x2bc050 = '';
    for (let _0x466047 = 0; _0x466047 < commands.length; _0x466047++) {
      if (commands[_0x466047].category === "other") {
        if (!commands[_0x466047].dontAddCommandList) {
          _0x2bc050 += "*│⩥* ." + commands[_0x466047].pattern + "\n";
        }
      }
    }
    ;
    let _0x13af3e = '';
    for (let _0x292b04 = 0; _0x292b04 < commands.length; _0x292b04++) {
      if (commands[_0x292b04].category === "movie") {
        if (!commands[_0x292b04].dontAddCommandList) {
          _0x13af3e += "*│⩥* ." + commands[_0x292b04].pattern + "\n";
        }
      }
    }
    ;
    let _0x20c47a = "*Hellow👸* " + _0x558705 + "\n\n*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* " + runtime(process.uptime()) + " \n*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*╰──────────●●►*\n*👸 ｐｏｄｉ𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*\n*╭──────────●●►*\n*│🧙‍♂️ DOWNLOAD COMMANDS*\n*│   ───────*\n\n" + _0x453d4a + "*╰───────────●●►*\n*╭──────────●●►*\n*│🧙‍♂️ SEARCH COMMANDS*\n*│   ───────*\n\n" + _0x1e9f06 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ CONVERT COMMANDS*\n*│   ───────*\n\n" + _0x5bddb9 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ LOGO COMMANDS*\n*│   ───────*\n\n" + _0x5e0e5a + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ MAIN COMMANDS*\n*│   ───────*\n\n" + _0x3fd340 + "*╰───────────●●►*\n\n*╭──────────●●►*\n*│🧙‍♂️ GROUP COMMANDS*\n*│   ───────*\n\n" + _0xc5b95a + "*╰───────────●●►*\n\t\t       \n*╭──────────●●►*\n*│🧙‍♂️ BUG COMMANDS*\n*│   ───────*\n\n" + _0x442423 + "*╰───────────●●►*\t\n\n*╭──────────●●►*\n*│🧙‍♂️ OTHER COMMANDS*\n*│   ───────*\n\n" + _0x2bc050 + "*╰───────────●●►*\t\n\n*╭──────────●●►*\n*│🧙‍♂️ MOVIE COMMANDS*\n*│   ───────*\n\n" + _0x13af3e + "*╰───────────●●►*\t\n\n👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻";
    const _0x1cf9e6 = {
      url: config.LOGO
    };
    const _0x13c4fa = {
      image: _0x1cf9e6,
      caption: _0x20c47a
    };
    await _0x45d0e4.sendMessage(_0x1826fe, _0x13c4fa, {
      'quoted': _0x3c5601,
      'messageId': genMsgId()
    });
  } catch (_0x2881f1) {
    _0x1a2c68("*Error !!*");
    _0x4972de(_0x2881f1);
  }
});
const _0x22e282 = {
  pattern: "getsession"
};
function _0x36b0c0(_0x1f231e, _0x40ffeb, _0x39a213, _0x479638, _0x2e1682) {
  return _0x5d2a(_0x1f231e - 0x15d, _0x2e1682);
}
_0x22e282.react = '🔖';
_0x22e282.desc = "To get bot session";
_0x22e282.category = "main";
_0x22e282.use = ".getsession";
_0x22e282.filename = __filename;
cmd(_0x22e282, async (_0x5403c0, _0x2dfa0c, _0x38c395, {
  from: _0x4c286e,
  prefix: _0x56012d,
  l: _0x77dfa2,
  quoted: _0x591379,
  body: _0x35e2e4,
  isCmd: _0x1d34f5,
  command: _0x9586d6,
  args: _0x428d48,
  q: _0x2e342c,
  isGroup: _0x2fdae4,
  sender: _0x411456,
  senderNumber: _0x2089b2,
  botNumber2: _0x295451,
  botNumber: _0x1f7246,
  pushname: _0x5839f3,
  isMe: _0x116fff,
  isOwner: _0x122f75,
  groupMetadata: _0x459099,
  groupName: _0x9789ce,
  participants: _0x4e820e,
  groupAdmins: _0xd0366f,
  isBotAdmins: _0x98a0a9,
  isAdmins: _0x4b55c5,
  reply: _0x563006
}) => {
  try {
    if (!_0x116fff) {
      return await _0x563006(BOTOW);
    }
    _0x563006("Wait a moment, currently retrieving your session file");
    let _0xf9662a = fs.readFileSync("./session/creds.json");
    const _0x4b7398 = {
      document: _0xf9662a,
      mimetype: "application/json",
      fileName: "creds.json"
    };
    _0x5403c0.sendMessage(_0x2dfa0c.chat, _0x4b7398, {
      'quoted': _0x2dfa0c
    });
    const _0x318a62 = {
      text: '✅',
      key: _0x2dfa0c.key
    };
    const _0x681c65 = {
      react: _0x318a62
    };
    await _0x5403c0.sendMessage(_0x4c286e, _0x681c65);
  } catch (_0x4f24b4) {
    _0x563006("*🛑 This is an owner command...*");
    _0x77dfa2(_0x4f24b4);
  }
});
const _0x716bdf = {
  pattern: "delsession",
  react: '🔖',
  desc: "To delete bot session",
  category: "main"
};
function _0x416102(_0x17084a, _0x1117cb, _0x39aaa5, _0x2fdb54, _0x1e7fdb) {
  return _0x5d2a(_0x17084a + 0x366, _0x2fdb54);
}
_0x716bdf.use = ".delsession";
_0x716bdf.filename = __filename;
cmd(_0x716bdf, async (_0x4cd338, _0x18a878, _0x3934c1, {
  from: _0xc43c9,
  prefix: _0x37dba4,
  l: _0x33e5a9,
  quoted: _0x4f5079,
  body: _0x6d1b5c,
  isCmd: _0x2fcc0a,
  command: _0x16a63d,
  args: _0x5826e9,
  q: _0xfd2548,
  isGroup: _0x1dbea0,
  sender: _0x1ae6bb,
  senderNumber: _0x5bba7e,
  botNumber2: _0x1df682,
  botNumber: _0x517e49,
  pushname: _0x35d4fe,
  isMe: _0x546e3b,
  isOwner: _0x16914f,
  groupMetadata: _0x5c735a,
  groupName: _0x1a16a3,
  participants: _0x43a6bf,
  groupAdmins: _0x128fce,
  isBotAdmins: _0x20ab0c,
  isAdmins: _0x59838c,
  reply: _0x2a2199
}) => {
  try {
    if (!_0x546e3b) {
      return await _0x2a2199(BOTOW);
    }
    fs.readdir("./session", async function (_0xe053e6, _0x1300c8) {
      if (_0xe053e6) {
        console.log("Unable to scan directory: " + _0xe053e6);
        return _0x2a2199("Unable to scan directory: " + _0xe053e6);
      }
      let _0x38bde0 = await _0x1300c8.filter(_0x4a9e62 => _0x4a9e62.startsWith("pre-key") || _0x4a9e62.startsWith("sender-key") || _0x4a9e62.startsWith("session-") || _0x4a9e62.startsWith("app-state"));
      console.log(_0x38bde0.length);
      let _0x2ad38e = "Detected " + _0x38bde0.length + " junk files\n\n";
      if (_0x38bde0.length == 0) {
        return _0x2a2199();
      }
      _0x38bde0.map(function (_0x5d9e87, _0x24f7fe) {
        _0x2ad38e += _0x24f7fe + 1 + (". " + _0x5d9e87 + "\n");
      });
      _0x2a2199();
      await sleep(2000);
      _0x2a2199("Deleting junk files...");
      await _0x38bde0.forEach(function (_0x157b9f) {
        fs.unlinkSync("./session/" + _0x157b9f);
      });
      await sleep(2000);
      _0x2a2199("Successfully deleted all the trash in the session folder");
    });
    const _0x2a5aeb = {
      text: '✅',
      key: _0x18a878.key
    };
    const _0x27cc07 = {
      react: _0x2a5aeb
    };
    await _0x4cd338.sendMessage(_0xc43c9, _0x27cc07);
  } catch (_0x418384) {
    _0x2a2199("*🛑 This is an owner command...*");
    _0x33e5a9(_0x418384);
  }
});
const _0x2189e0 = {
  pattern: "block",
  react: '🔖',
  desc: "To block a member",
  category: "main",
  use: ".block",
  filename: __filename
};
cmd(_0x2189e0, async (_0x491e69, _0x1b66b1, _0x4c4df5, {
  from: _0x474eef,
  prefix: _0x5cba9e,
  l: _0x413e9b,
  quoted: _0x309003,
  body: _0x5c6d4d,
  isCmd: _0x2424ba,
  command: _0x16245d,
  args: _0x4e4b69,
  q: _0x207c2a,
  isGroup: _0x51414a,
  sender: _0x44089c,
  senderNumber: _0x980a6f,
  botNumber2: _0x3cb70c,
  botNumber: _0x561501,
  pushname: _0xfac49b,
  isMe: _0x385652,
  isOwner: _0x486de3,
  groupMetadata: _0x3f5b05,
  groupName: _0x33589b,
  participants: _0x56d6a7,
  groupAdmins: _0x1c9bb2,
  isBotAdmins: _0x41b598,
  isAdmins: _0xb1d43f,
  reply: _0x112750
}) => {
  try {
    if (!_0x385652) {
      return await _0x112750(BOTOW);
    }
    let _0xbee87a = _0x1b66b1.mentionedJid ? _0x1b66b1.mentionedJid : _0x1b66b1.quoted ? _0x1b66b1.quoted.sender : _0x207c2a.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x491e69.updateBlockStatus(_0xbee87a, "block").then(_0x4bf2f4 => _0x112750(jsonformat(_0x4bf2f4)))["catch"](_0xc63d51 => _0x112750(jsonformat(_0xc63d51)));
    const _0x2074e2 = {
      text: '✅',
      key: _0x1b66b1.key
    };
    const _0x325b57 = {
      react: _0x2074e2
    };
    await _0x491e69.sendMessage(_0x474eef, _0x325b57);
  } catch (_0x3ec498) {
    _0x112750("*Error !!*");
    _0x413e9b(_0x3ec498);
  }
});
const _0x27fbc6 = {
  pattern: "unblock",
  react: '🔖',
  desc: "To unblock a member",
  category: "main",
  use: ".unblock",
  filename: __filename
};
function _0x292050(_0x1f5d54, _0x46d952, _0x251dd4, _0x1ce950, _0x54c7a4) {
  return _0x5d2a(_0x251dd4 - 0x7d, _0x1ce950);
}
cmd(_0x27fbc6, async (_0x9bb535, _0x223db7, _0x47ed74, {
  from: _0x11b925,
  prefix: _0xaecef3,
  l: _0x455d2d,
  quoted: _0x18fc21,
  body: _0xfed81f,
  isCmd: _0x26a6fb,
  command: _0x331955,
  args: _0x174c11,
  q: _0x313ca9,
  isGroup: _0x5abe3d,
  sender: _0x102112,
  senderNumber: _0x23a075,
  botNumber2: _0x243682,
  botNumber: _0x1a8288,
  pushname: _0x1e0ce8,
  isMe: _0x5d9943,
  isOwner: _0x42c84a,
  groupMetadata: _0x3b13ba,
  groupName: _0x5684ba,
  participants: _0x2351f6,
  groupAdmins: _0xd60b3e,
  isBotAdmins: _0x97b1ba,
  isAdmins: _0x33b897,
  reply: _0x1cca78
}) => {
  try {
    if (!_0x5d9943) {
      return await _0x1cca78(BOTOW);
    }
    let _0x56152a = _0x223db7.mentionedJid ? _0x223db7.mentionedJid : _0x223db7.quoted ? _0x223db7.quoted.sender : _0x313ca9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x9bb535.updateBlockStatus(_0x56152a, "unblock").then(_0x4f6b7f => _0x1cca78(jsonformat(_0x4f6b7f)))["catch"](_0x10e5f0 => _0x1cca78(jsonformat(_0x10e5f0)));
    const _0x3a5768 = {
      text: '✅',
      key: _0x223db7.key
    };
    const _0x4b91e2 = {
      react: _0x3a5768
    };
    await _0x9bb535.sendMessage(_0x11b925, _0x4b91e2);
  } catch (_0x46cd70) {
    _0x1cca78("*🛑 This is an owner command...*");
    _0x455d2d(_0x46cd70);
  }
});
const _0x382818 = {
  pattern: "shutdown",
  react: '⚙️',
  desc: "To shutdown the bot",
  category: '',
  use: ".shutdown",
  filename: __filename
};
cmd(_0x382818, async (_0x426201, _0x4e20a2, _0x12da9a, {
  from: _0x1a96ae,
  prefix: _0x174556,
  l: _0x2adf78,
  quoted: _0x31708d,
  body: _0x5f42c3,
  isCmd: _0x1af163,
  command: _0x8df519,
  args: _0x4d5fc4,
  q: _0x4b26a4,
  isGroup: _0x14c20c,
  sender: _0x529d09,
  senderNumber: _0x4c1cf2,
  botNumber2: _0x4bd5fb,
  botNumber: _0x55cca9,
  pushname: _0x34ef91,
  isMe: _0x31e8e6,
  isOwner: _0x1ec21c,
  groupMetadata: _0x4cf933,
  groupName: _0x2cabc0,
  participants: _0x168e9f,
  groupAdmins: _0x21f218,
  isBotAdmins: _0x5c593f,
  isAdmins: _0x3954a6,
  reply: _0x3188c4
}) => {
  try {
    if (!_0x31e8e6) {
      return await _0x3188c4(BOTOW);
    }
    _0x3188c4("Bot shutdown few 10 seconds...");
    await sleep(10000);
    process.exit();
    const _0x336241 = {
      text: '✅',
      key: _0x4e20a2.key
    };
    const _0x217ffd = {
      react: _0x336241
    };
    await _0x426201.sendMessage(_0x1a96ae, _0x217ffd);
  } catch (_0x522719) {
    _0x3188c4("*🛑 This is an owner command...*");
    _0x2adf78(_0x522719);
  }
});
const _0x4e3f12 = {
  pattern: "request",
  react: '🔖',
  desc: "Contact to bot owner",
  category: "main",
  use: ".rsquest2",
  filename: __filename
};
cmd(_0x4e3f12, async (_0x52a0ca, _0x38f31b, _0x4a8087, {
  from: _0x3227b3,
  prefix: _0x15b801,
  l: _0x4ca103,
  quoted: _0x4130e7,
  body: _0x2a44ab,
  isCmd: _0x2e01d8,
  command: _0x4f1d29,
  args: _0xd6c24e,
  q: _0x5cfed1,
  isGroup: _0x10b1e3,
  sender: _0xbe500b,
  senderNumber: _0xed60d7,
  botNumber2: _0x43453e,
  botNumber: _0xed8359,
  pushname: _0x20a02a,
  isMe: _0x35c63f,
  isOwner: _0x4b4863,
  groupMetadata: _0x2e0abe,
  groupName: _0x2723db,
  participants: _0x1947e3,
  groupAdmins: _0x4d7f53,
  isBotAdmins: _0x55f24d,
  isAdmins: _0x18a9f3,
  reply: _0x437595
}) => {
  try {
    if (!_0x5cfed1) {
      return _0x38f31b.reply("Example: " + (_0x15b801 + _0x4f1d29) + " hi vajira play command is not working");
    }
    var _0x38cdd2 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
    const _0xca208a = {
      text: "ꜱᴇɴᴅɪɴɢ..."
    };
    let {
      key: _0x1acdd0
    } = await _0x52a0ca.sendMessage(_0x3227b3, _0xca208a);
    for (let _0x2908df = 0; _0x2908df < _0x38cdd2.length; _0x2908df++) {
      const _0x507fcd = {
        text: _0x38cdd2[_0x2908df],
        edit: _0x1acdd0
      };
      await _0x52a0ca.sendMessage(_0x3227b3, _0x507fcd);
    }
    const _0x3d64b7 = _0x38f31b.key.id;
    if (reportedMessages[_0x3d64b7]) {
      return _0x38f31b.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }
    reportedMessages[_0x3d64b7] = true;
    const _0x22bfe4 = "\n\n*User*: @" + _0x4a8087.sender.split('@')[0] + "\n*Request/Bug*: " + _0x5cfed1;
    _0x52a0ca.sendMessage("94711453361@s.whatsapp.net", {
      'text': "*| REQUEST/BUG |*" + _0x22bfe4,
      'mentions': [_0x38f31b.sender]
    }, {
      'quoted': _0x38f31b
    });
    _0x38f31b.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
    const _0x1439ee = {
      text: '✅',
      key: _0x38f31b.key
    };
    const _0x485aa5 = {
      react: _0x1439ee
    };
    await _0x52a0ca.sendMessage(_0x3227b3, _0x485aa5);
  } catch (_0x2da0a7) {
    _0x437595("*Error !!*");
    _0x4ca103(_0x2da0a7);
  }
});
function _0x5d2a(_0x340eb3, _0x1e7872) {
  const _0x3c54d = _0x3c54();
  _0x5d2a = function (_0x5d2a17, _0x4cc235) {
    _0x5d2a17 = _0x5d2a17 - 388;
    let _0x3bd11e = _0x3c54d[_0x5d2a17];
    return _0x3bd11e;
  };
  return _0x5d2a(_0x340eb3, _0x1e7872);
}
const _0x3f5f6b = {
  pattern: "request2",
  react: '⚙️',
  desc: "Contact to bot owner",
  category: '',
  use: ".request"
};
_0x3f5f6b.filename = __filename;
cmd(_0x3f5f6b, async (_0x2b57d7, _0x2ac2c0, _0x4498dd, {
  from: _0x2689cf,
  l: _0x2fff61,
  prefix: _0x428276,
  quoted: _0x2e524a,
  body: _0x553937,
  isCmd: _0x5a6075,
  command: _0x23d482,
  args: _0x336e13,
  q: _0x18f70a,
  isGroup: _0x53475b,
  sender: _0x4f8676,
  senderNumber: _0x2fb7ac,
  botNumber2: _0x1c540a,
  botNumber: _0x1dd469,
  pushname: _0x2ab662,
  isMe: _0x287e11,
  isOwner: _0x12d915,
  groupMetadata: _0x4a59fa,
  groupName: _0x3a3678,
  participants: _0x17b207,
  groupAdmins: _0x7ff7ed,
  isBotAdmins: _0x20f545,
  isAdmins: _0x52f8ec,
  reply: _0x5492f3
}) => {
  try {
    var _0x32accb = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁 🖥️..."];
    const _0x4a418a = {
      text: "ꜱᴇɴᴅɪɴɢ..."
    };
    let {
      key: _0x2c4753
    } = await _0x2b57d7.sendMessage(_0x2689cf, _0x4a418a);
    for (let _0x1b597c = 0; _0x1b597c < _0x32accb.length; _0x1b597c++) {
      const _0x4b9fb6 = {
        text: _0x32accb[_0x1b597c],
        edit: _0x2c4753
      };
      await _0x2b57d7.sendMessage(_0x2689cf, _0x4b9fb6);
    }
    await _0x2b57d7.sendMessage("94719199757@s.whatsapp.net", {
      'text': "*Bug Report From:* wa.me/" + _0x2ac2c0.sender.split('@')[0] + "\n\n*Bug Report*\n" + (_0x18f70a ? _0x18f70a : "blank")
    });
    const _0x4e23e6 = {
      text: '✅',
      key: _0x2ac2c0.key
    };
    const _0x215f4d = {
      react: _0x4e23e6
    };
    await _0x2b57d7.sendMessage(_0x2689cf, _0x215f4d);
  } catch (_0x451789) {
    _0x5492f3("🛑 This is an owner command...");
    _0x2fff61(_0x451789);
  }
});
const _0x1b8b39 = {
  pattern: "setbotbio",
  react: '⚙️',
  desc: "To change bot number bio",
  category: '',
  use: ".setbotbio",
  filename: __filename
};
cmd(_0x1b8b39, async (_0x3eab17, _0x1d420d, _0x2a1913, {
  from: _0xf74612,
  prefix: _0x4e8bd,
  l: _0x1fd907,
  quoted: _0x4a894f,
  body: _0x2854de,
  isCmd: _0x5db79e,
  command: _0x27f0c8,
  args: _0x4adf99,
  q: _0x5a8c23,
  isGroup: _0x386779,
  sender: _0x184900,
  senderNumber: _0x41566d,
  botNumber2: _0x13836b,
  botNumber: _0x13ea4b,
  pushname: _0x1c8088,
  isMe: _0x2a37b6,
  isOwner: _0x21797e,
  groupMetadata: _0x3fd079,
  groupName: _0x34b00b,
  participants: _0x54b4fd,
  groupAdmins: _0x96afca,
  isBotAdmins: _0x13f91d,
  isAdmins: _0x1f2e6a,
  reply: _0x3641ca
}) => {
  try {
    if (!_0x2a37b6) {
      return await _0x3641ca(BOTOW);
    }
    if (!_0x5a8c23) {
      return _0x3641ca("Where is the text?\nExample: " + (_0x4e8bd + _0x27f0c8) + " izumi Bot");
    }
    await _0x3eab17.updateProfileStatus(_0x5a8c23);
    _0x3641ca("Success in changing the bio of bot's number");
    const _0xe5ac46 = {
      text: '✅',
      key: _0x1d420d.key
    };
    const _0x1d7275 = {
      react: _0xe5ac46
    };
    await _0x3eab17.sendMessage(_0xf74612, _0x1d7275);
  } catch (_0x395145) {
    _0x3641ca("*🛑 This is an owner command...*");
    _0x1fd907(_0x395145);
  }
});
const _0x39e611 = {
  pattern: "alive",
  react: "👨‍💻",
  alias: ["online", "test", "bot"],
  desc: "Check bot online or no.",
  category: "main"
};
function _0x4fa466(_0x198f7c, _0x3ee1b0, _0x1f7616, _0x67bd77, _0x6fbf) {
  return _0x5d2a(_0x6fbf + 0x16e, _0x198f7c);
}
_0x39e611.use = ".alive";
_0x39e611.filename = __filename;
cmd(_0x39e611, async (_0x278a76, _0x7a9f33, _0x4f4baf, {
  from: _0x2d34a3,
  prefix: _0x1b257a,
  l: _0x187633,
  quoted: _0x39e886,
  body: _0x14a04a,
  isCmd: _0x7d1c09,
  command: _0x45f476,
  args: _0x145bec,
  q: _0x527a4c,
  isGroup: _0x5a44ff,
  sender: _0x4aaf94,
  senderNumber: _0x12469b,
  botNumber2: _0x329768,
  botNumber: _0x2dcb7a,
  pushname: _0x314fc7,
  isMe: _0x1ca3bf,
  isOwner: _0x1d0543,
  groupMetadata: _0x4c7e68,
  groupName: _0x57026b,
  participants: _0x45b21d,
  groupAdmins: _0x2c6073,
  isBotAdmins: _0x37292a,
  isAdmins: _0x48715f,
  reply: _0x22321c
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
    const _0x1a13c9 = "```👋 කොහොමද හලෝව් " + _0x314fc7 + " I'm alive now" + "```" + "\n    \n*🚀Version:* " + require("../package.json").version + "\n*⌛Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*🕒Runtime:* " + runtime(process.uptime()) + "\n*📍Platform:* " + hostname + "\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \n*🌻Have A Nice Day..*🌻";
    var _0x2173e2 = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x3f2c5f = {
      text: ''
    };
    let {
      key: _0x541a80
    } = await _0x278a76.sendMessage(_0x2d34a3, _0x3f2c5f);
    for (let _0x514bed = 0; _0x514bed < _0x2173e2.length; _0x514bed++) {
      const _0x3605c0 = {
        text: _0x2173e2[_0x514bed],
        edit: _0x541a80
      };
      await _0x278a76.sendMessage(_0x2d34a3, _0x3605c0);
    }
    if (config.MODE === "nonbutton") {
      const _0x4f8e08 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x1b257a + "menu",
          'description': "COMMANDS MENU"
        }, {
          'title': '2',
          'rowId': _0x1b257a + "ping",
          'description': "PODIYA-MD SPEED"
        }]
      }];
      const _0x8dace8 = {
        url: config.LOGO
      };
      const _0x2d457c = {
        caption: _0x1a13c9,
        image: _0x8dace8,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x4f8e08
      };
      const _0xd9075f = {
        quoted: _0x7a9f33
      };
      return await _0x278a76.replyList(_0x2d34a3, _0x2d457c, _0xd9075f);
    }
    if (config.MODE === "button") {
      const _0x828ca4 = {
        url: config.LOGO
      };
      const _0x2490b6 = {
        displayText: "MENU"
      };
      const _0x4beb09 = {
        buttonId: _0x1b257a + "menu",
        buttonText: _0x2490b6
      };
      const _0x537104 = {
        displayText: "PING"
      };
      const _0x157fac = {
        buttonId: _0x1b257a + "ping",
        buttonText: _0x537104
      };
      const _0x55bce0 = {
        image: _0x828ca4,
        caption: _0x1a13c9,
        footer: config.FOOTER,
        buttons: [_0x4beb09, _0x157fac],
        headerType: 0x1,
        viewOnce: true
      };
      const _0x3e39a1 = {
        quoted: _0x4f4baf
      };
      _0x278a76.sendMessage(_0x2d34a3, _0x55bce0, _0x3e39a1);
    }
  } catch (_0x1baa40) {
    _0x22321c("*ERROR !!*");
    _0x187633(_0x1baa40);
  }
});
const _0x19b31c = {
  pattern: "menu",
  react: "👨‍💻",
  alias: ["panel", "help", "commands"],
  desc: "Get bot's command list.",
  category: "main",
  use: ".menu",
  filename: __filename
};
cmd(_0x19b31c, async (_0x578c87, _0x10d344, _0x43c4bb, {
  from: _0x24b4cf,
  prefix: _0x13d6f1,
  l: _0x2257c4,
  quoted: _0x4ef94f,
  body: _0x46c80a,
  isCmd: _0x1a66f0,
  command: _0x4a0074,
  args: _0xa15b3b,
  q: _0x28d02f,
  isGroup: _0x59a8b0,
  sender: _0x51894a,
  senderNumber: _0x1e7efc,
  botNumber2: _0x4636d4,
  botNumber: _0x4a20,
  pushname: _0x59ce7f,
  isMe: _0x341baa,
  isOwner: _0x28648d,
  groupMetadata: _0x242961,
  groupName: _0x1b9875,
  participants: _0x344d9f,
  groupAdmins: _0x1f95f6,
  isBotAdmins: _0x280d9f,
  isAdmins: _0x62e757,
  reply: _0x1139b1
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
    const _0x5dca59 = "❖──👨‍💻 ｐｏｄｉｙａ - ＭＤ 👨‍💻──❖\n\n╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖\n│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* " + require("../package.json").version + "\n│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* " + runtime(process.uptime()) + "\n│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* " + hostname + "\n╰━━━━━━━━━━━━━━━┈⊷";
    var _0x19713b = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x3e4bdd = {
      text: ''
    };
    let {
      key: _0x8acb53
    } = await _0x578c87.sendMessage(_0x24b4cf, _0x3e4bdd);
    for (let _0x158578 = 0; _0x158578 < _0x19713b.length; _0x158578++) {
      const _0x1c8203 = {
        text: _0x19713b[_0x158578],
        edit: _0x8acb53
      };
      await _0x578c87.sendMessage(_0x24b4cf, _0x1c8203);
    }
    if (config.MODE === "nonbutton") {
      const _0xa716cd = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x13d6f1 + "downmenu",
          'description': "Downloader Commands"
        }, {
          'title': '2',
          'rowId': _0x13d6f1 + "searchmenu",
          'description': "Search Commands"
        }, {
          'title': '3',
          'rowId': _0x13d6f1 + "convertmenu",
          'description': "Converter Commands"
        }, {
          'title': '4',
          'rowId': _0x13d6f1 + "logomenu",
          'description': "Logo Commands"
        }, {
          'title': '5',
          'rowId': _0x13d6f1 + "mainmenu",
          'description': "Main Commands"
        }, {
          'title': '6',
          'rowId': _0x13d6f1 + "groupmenu",
          'description': "Group Commands"
        }, {
          'title': '7',
          'rowId': _0x13d6f1 + "bugmenu",
          'description': "Bug commands"
        }, {
          'title': '8',
          'rowId': _0x13d6f1 + "moviemenu",
          'description': "Movie commands"
        }, {
          'title': '9',
          'rowId': _0x13d6f1 + "othermenu",
          'description': "Other commands"
        }]
      }];
      const _0x57a8a7 = {
        url: config.LOGO
      };
      const _0x15107d = {
        caption: _0x5dca59,
        image: _0x57a8a7,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0xa716cd
      };
      const _0x4f3efa = {
        quoted: _0x10d344
      };
      return await _0x578c87.replyList(_0x24b4cf, _0x15107d, _0x4f3efa);
    }
    if (config.MODE === "button") {
      const _0xc2f037 = {
        title: "🔑 Select menu type",
        rows: [{
          'title': "DOWNLOAD MENU",
          'description': "Download commands",
          'id': _0x13d6f1 + "downmenu"
        }, {
          'title': "SEARCH MENU",
          'description': "Search commands",
          'id': _0x13d6f1 + "searchmenu"
        }, {
          'title': "CONVERT MENU",
          'description': "Convert commands",
          'id': _0x13d6f1 + "convertmenu"
        }, {
          'title': "MAIN MENU",
          'description': "Convert commands",
          'id': _0x13d6f1 + "mainmenu"
        }, {
          'title': "GROUP MENU",
          'description': "Group commands",
          'id': _0x13d6f1 + "groupmenu"
        }, {
          'title': "LOGO MENU",
          'description': "Logo commands",
          'id': _0x13d6f1 + "logomenu"
        }, {
          'title': "BUG MENU",
          'description': "Bug commands",
          'id': _0x13d6f1 + "bugmenu"
        }, {
          'title': "MOVIE MENU",
          'description': "Movie commands",
          'id': _0x13d6f1 + "moviemenu"
        }, {
          'title': "OTHER MENU",
          'description': "Other commands",
          'id': _0x13d6f1 + "othermenu"
        }]
      };
      let _0x4b988e = [_0xc2f037];
      const _0x3d8419 = {
        title: "Click Here⎙",
        sections: _0x4b988e
      };
      const _0x132feb = {
        url: config.LOGO
      };
      const _0x143dd8 = {
        displayText: "ALIVE"
      };
      const _0x5eeb8b = {
        buttonId: _0x13d6f1 + "alive",
        buttonText: _0x143dd8
      };
      const _0x367ce7 = {
        displayText: "PING"
      };
      const _0x6d6bfd = {
        buttonId: _0x13d6f1 + "ping",
        buttonText: _0x367ce7
      };
      const _0x4bdb37 = {
        quoted: _0x43c4bb
      };
      _0x578c87.sendMessage(_0x24b4cf, {
        'image': _0x132feb,
        'caption': _0x5dca59,
        'footer': config.FOOTER,
        'buttons': [_0x5eeb8b, _0x6d6bfd, {
          'buttonId': "action",
          'buttonText': {
            'displayText': "ini pesan interactiveMeta"
          },
          'type': 0x4,
          'nativeFlowInfo': {
            'name': "single_select",
            'paramsJson': JSON.stringify(_0x3d8419)
          }
        }],
        'headerType': 0x1,
        'viewOnce': true
      }, _0x4bdb37);
    }
  } catch (_0x406cd6) {
    _0x1139b1();
    _0x2257c4(_0x406cd6);
  }
});
const _0xb5994d = {
  pattern: "downmenu",
  react: "⬇👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xb5994d, async (_0x4bf11a, _0x1f2fa2, _0x221f32, {
  from: _0x11bc87,
  prefix: _0x461ee2,
  l: _0x591fc8,
  quoted: _0x498780,
  body: _0x4531e4,
  isCmd: _0x289512,
  command: _0x70ef2,
  args: _0xdccaa6,
  q: _0x227fff,
  isGroup: _0x1bfa32,
  sender: _0x3452c6,
  senderNumber: _0xe7c7eb,
  botNumber2: _0xecc2ca,
  botNumber: _0x5c8cf7,
  pushname: _0x5922f8,
  isMe: _0x335033,
  isOwner: _0xcada6d,
  groupMetadata: _0x404906,
  groupName: _0x538edb,
  participants: _0x46822f,
  groupAdmins: _0x6ce48f,
  isBotAdmins: _0x3db614,
  isAdmins: _0x42e7f8,
  reply: _0x1849e8
}) => {
  try {
    const _0x2c63f3 = _0x227fff.trim().toUpperCase();
    let _0x44c746 = "*◈╾──────" + _0x2c63f3 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy podiya md whatsapp bot 👨‍💻\n\n";
    for (let _0x16cd48 = 0; _0x16cd48 < commands.length; _0x16cd48++) {
      if (commands[_0x16cd48].category === "download") {
        if (!commands[_0x16cd48].dontAddCommandList) {
          _0x44c746 += "╭────────●●►\n│ • *" + commands[_0x16cd48].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x44c746 += "\n⭓ *Total Commands List " + _0x2c63f3 + "*: " + commands.filter(_0x2e0294 => _0x2e0294.category.toUpperCase() === _0x2c63f3).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x_ꜰᴀᴍɪʟʏ*";
    const _0x5be99d = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x27864b = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x27074d = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x5be99d,
      externalAdReply: _0x27864b
    };
    const _0xa89a2e = {
      text: _0x44c746,
      contextInfo: _0x27074d
    };
    const _0x13b6d0 = {
      quoted: _0x1f2fa2
    };
    await _0x4bf11a.sendMessage(_0x11bc87, _0xa89a2e, _0x13b6d0);
  } catch (_0x19ad9e) {
    _0x1849e8("*Error !!*");
    console.log(_0x19ad9e);
  }
});
const _0x4451c4 = {
  pattern: "moviemenu",
  react: "⬇👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4451c4, async (_0x3c324c, _0x45ea76, _0x3a7dce, {
  from: _0x5dc1dc,
  prefix: _0x1acea2,
  l: _0x1f1acb,
  quoted: _0x22ca07,
  body: _0x40bbab,
  isCmd: _0x5deee9,
  command: _0x2f86ca,
  args: _0x5c6e22,
  q: _0x423f1b,
  isGroup: _0x5a9f47,
  sender: _0x21ec68,
  senderNumber: _0x1719fb,
  botNumber2: _0xe02827,
  botNumber: _0x48b0f0,
  pushname: _0x371f5f,
  isMe: _0x35ae4f,
  isOwner: _0x563da1,
  groupMetadata: _0x5e3438,
  groupName: _0x95556d,
  participants: _0x259908,
  groupAdmins: _0x49e483,
  isBotAdmins: _0xb0d4c0,
  isAdmins: _0x264dd1,
  reply: _0x4ff9fb
}) => {
  try {
    const _0x2a2832 = _0x423f1b.trim().toUpperCase();
    let _0x2e5f4d = "*◈╾──────" + _0x2a2832 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy podiya md whatsapp bot 👨‍💻\n\n";
    for (let _0x4bc586 = 0; _0x4bc586 < commands.length; _0x4bc586++) {
      if (commands[_0x4bc586].category === "movie") {
        if (!commands[_0x4bc586].dontAddCommandList) {
          _0x2e5f4d += "╭────────●●►\n│ • *" + commands[_0x4bc586].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x2e5f4d += "\n⭓ *Total Commands List " + _0x2a2832 + "*: " + commands.filter(_0x45e1af => _0x45e1af.category.toUpperCase() === _0x2a2832).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0x3fda5e = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x5a71f4 = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x4fee33 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x3fda5e,
      externalAdReply: _0x5a71f4
    };
    const _0x26c684 = {
      text: _0x2e5f4d,
      contextInfo: _0x4fee33
    };
    const _0x427d1a = {
      quoted: _0x45ea76
    };
    await _0x3c324c.sendMessage(_0x5dc1dc, _0x26c684, _0x427d1a);
  } catch (_0x2f3748) {
    _0x4ff9fb("*Error !!*");
    console.log(_0x2f3748);
  }
});
const _0x34b5f1 = {
  pattern: "searchmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x34b5f1, async (_0x1e2146, _0x797c44, _0x51c886, {
  from: _0x3399b1,
  prefix: _0x55e91c,
  l: _0x2f6ca7,
  quoted: _0x4e5276,
  body: _0x1ff70f,
  isCmd: _0x1e2c61,
  command: _0x129688,
  args: _0x1eb964,
  q: _0x49554b,
  isGroup: _0x375cee,
  sender: _0x3fcb8f,
  senderNumber: _0x497e15,
  botNumber2: _0xcdc9dd,
  botNumber: _0x16aea0,
  pushname: _0x5b0ff3,
  isMe: _0x358a5f,
  isOwner: _0x5ea651,
  groupMetadata: _0x35bdda,
  groupName: _0x1a16a7,
  participants: _0x5cf493,
  groupAdmins: _0x416831,
  isBotAdmins: _0x3d2c67,
  isAdmins: _0x1f06bb,
  reply: _0x3573d1
}) => {
  try {
    const _0x299518 = _0x49554b.trim().toUpperCase();
    let _0x5d2d20 = "*◈╾──────" + _0x299518 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy podiya md whatsapp bot 👨‍💻\n\n";
    for (let _0x476944 = 0; _0x476944 < commands.length; _0x476944++) {
      if (commands[_0x476944].category === "search") {
        if (!commands[_0x476944].dontAddCommandList) {
          _0x5d2d20 += "╭────────●●►\n│ • *" + commands[_0x476944].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x5d2d20 += "\n⭓ *Total Commands List " + _0x299518 + "*: " + commands.filter(_0x42b50f => _0x42b50f.category.toUpperCase() === _0x299518).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0x5d0ce9 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x2c8814 = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x545746 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x5d0ce9,
      externalAdReply: _0x2c8814
    };
    const _0x5eb99f = {
      text: _0x5d2d20,
      contextInfo: _0x545746
    };
    const _0x21ce4f = {
      quoted: _0x797c44
    };
    await _0x1e2146.sendMessage(_0x3399b1, _0x5eb99f, _0x21ce4f);
  } catch (_0x5d6da9) {
    _0x3573d1("*Error !!*");
    console.log(_0x5d6da9);
  }
});
const _0xcc528b = {
  pattern: "convertmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xcc528b, async (_0x3f91a2, _0xa566fd, _0xac0bce, {
  from: _0x5bbcb6,
  prefix: _0x4325f8,
  l: _0x23fefd,
  quoted: _0x2976c6,
  body: _0x1acb0d,
  isCmd: _0x418ec4,
  command: _0x2353b6,
  args: _0x15f4e9,
  q: _0x3e9bd0,
  isGroup: _0x29fd99,
  sender: _0x2a58c3,
  senderNumber: _0x3f5208,
  botNumber2: _0x5cc240,
  botNumber: _0x5a8cc5,
  pushname: _0x425c53,
  isMe: _0x46c7d6,
  isOwner: _0x292ea9,
  groupMetadata: _0x572719,
  groupName: _0x27bb80,
  participants: _0x384d63,
  groupAdmins: _0x199fc9,
  isBotAdmins: _0x345385,
  isAdmins: _0x12d880,
  reply: _0x1b8b87
}) => {
  try {
    const _0x521f99 = _0x3e9bd0.trim().toUpperCase();
    let _0x1d701f = "*◈╾──────" + _0x521f99 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy podiya md whatsapp bot 👨‍💻\n\n";
    for (let _0x384c7b = 0; _0x384c7b < commands.length; _0x384c7b++) {
      if (commands[_0x384c7b].category === "convert") {
        if (!commands[_0x384c7b].dontAddCommandList) {
          _0x1d701f += "╭────────●●►\n│ • *" + commands[_0x384c7b].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x1d701f += "\n⭓ *Total Commands List " + _0x521f99 + "*: " + commands.filter(_0x4858e6 => _0x4858e6.category.toUpperCase() === _0x521f99).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0xb3b750 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x1f610f = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x41b39b = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0xb3b750,
      externalAdReply: _0x1f610f
    };
    const _0x481902 = {
      text: _0x1d701f,
      contextInfo: _0x41b39b
    };
    const _0x12b816 = {
      quoted: _0xa566fd
    };
    await _0x3f91a2.sendMessage(_0x5bbcb6, _0x481902, _0x12b816);
  } catch (_0x410677) {
    _0x1b8b87("*Error !!*");
    console.log(_0x410677);
  }
});
const _0xc6080e = {
  pattern: "logomenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xc6080e, async (_0x1a7f37, _0x2e4b82, _0x11ae31, {
  from: _0x7894ab,
  prefix: _0x27a23e,
  l: _0x497a55,
  quoted: _0x5387ff,
  body: _0x43c131,
  isCmd: _0x472668,
  command: _0xb07a44,
  args: _0x1d94e9,
  q: _0x32c8b7,
  isGroup: _0x328c6,
  sender: _0x223f9f,
  senderNumber: _0x14dd9d,
  botNumber2: _0x443f84,
  botNumber: _0x34f2f6,
  pushname: _0x22847d,
  isMe: _0x58be26,
  isOwner: _0x44a233,
  groupMetadata: _0xb1f455,
  groupName: _0x3343f9,
  participants: _0x4f2642,
  groupAdmins: _0x2a86da,
  isBotAdmins: _0xacd5a1,
  isAdmins: _0x37827e,
  reply: _0x1b6ebe
}) => {
  try {
    const _0x401f8e = _0x32c8b7.trim().toUpperCase();
    let _0x31d5c6 = "*◈╾──────" + _0x401f8e + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ᴘᴏᴅɪʏᴀ md whatsapp bot 👨‍💻\n\n";
    for (let _0x10382a = 0; _0x10382a < commands.length; _0x10382a++) {
      if (commands[_0x10382a].category === "logo") {
        if (!commands[_0x10382a].dontAddCommandList) {
          _0x31d5c6 += "╭────────●●►\n│ • *" + commands[_0x10382a].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x31d5c6 += "\n⭓ *Total Commands List " + _0x401f8e + "*: " + commands.filter(_0x479f98 => _0x479f98.category.toUpperCase() === _0x401f8e).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0x3f9240 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0xe9b7ab = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x572c27 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x3f9240,
      externalAdReply: _0xe9b7ab
    };
    const _0x45f644 = {
      text: _0x31d5c6,
      contextInfo: _0x572c27
    };
    const _0x5ab935 = {
      quoted: _0x2e4b82
    };
    await _0x1a7f37.sendMessage(_0x7894ab, _0x45f644, _0x5ab935);
  } catch (_0x25035c) {
    _0x1b6ebe("*Error !!*");
    console.log(_0x25035c);
  }
});
const _0x5d5fa5 = {
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5d5fa5, async (_0x2506ca, _0x2d1f50, _0x47099e, {
  from: _0x45bd1f,
  prefix: _0x3c1449,
  l: _0x526ac5,
  quoted: _0x4b1a12,
  body: _0x43066a,
  isCmd: _0x3190fd,
  command: _0x403de0,
  args: _0x308145,
  q: _0x6b4f3f,
  isGroup: _0x2642d9,
  sender: _0x5b3043,
  senderNumber: _0x212221,
  botNumber2: _0x2ba49c,
  botNumber: _0x173c5f,
  pushname: _0x1472f6,
  isMe: _0x47ddae,
  isOwner: _0x1bd1c6,
  groupMetadata: _0x1d022c,
  groupName: _0x2decbe,
  participants: _0x114391,
  groupAdmins: _0x244652,
  isBotAdmins: _0x11952b,
  isAdmins: _0x52f3d1,
  reply: _0x286b23
}) => {
  try {
    const _0x23cdf5 = _0x6b4f3f.trim().toUpperCase();
    let _0xd7089e = "*◈╾──────" + _0x23cdf5 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ᴘᴏᴅɪʏᴀ md whatsapp bot 👨‍💻\n\n";
    for (let _0x7f8b97 = 0; _0x7f8b97 < commands.length; _0x7f8b97++) {
      if (commands[_0x7f8b97].category === "main") {
        if (!commands[_0x7f8b97].dontAddCommandList) {
          _0xd7089e += "╭────────●●►\n│ • *" + commands[_0x7f8b97].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0xd7089e += "\n⭓ *Total Commands List " + _0x23cdf5 + "*: " + commands.filter(_0x4634b7 => _0x4634b7.category.toUpperCase() === _0x23cdf5).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0xc32204 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x4b6d89 = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x316109 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0xc32204,
      externalAdReply: _0x4b6d89
    };
    const _0x585daf = {
      text: _0xd7089e,
      contextInfo: _0x316109
    };
    const _0xd57425 = {
      quoted: _0x2d1f50
    };
    await _0x2506ca.sendMessage(_0x45bd1f, _0x585daf, _0xd57425);
  } catch (_0x2d4122) {
    _0x286b23("*Error !!*");
    console.log(_0x2d4122);
  }
});
const _0x38c661 = {
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x38c661, async (_0x265233, _0x2559cf, _0x13f296, {
  from: _0x365aba,
  prefix: _0x1181ec,
  l: _0xc1c577,
  quoted: _0x43172f,
  body: _0x5b904e,
  isCmd: _0x3746de,
  command: _0x5cecf5,
  args: _0x3a5b09,
  q: _0x553db1,
  isGroup: _0x780eac,
  sender: _0x499bb9,
  senderNumber: _0x46a2c0,
  botNumber2: _0x46b047,
  botNumber: _0x320097,
  pushname: _0x2e0cd9,
  isMe: _0x1941a0,
  isOwner: _0x4dd85e,
  groupMetadata: _0x3c7b20,
  groupName: _0x47d92c,
  participants: _0x22df33,
  groupAdmins: _0xdd0d7c,
  isBotAdmins: _0x593364,
  isAdmins: _0x1011af,
  reply: _0x3456cc
}) => {
  try {
    const _0x3d4f31 = _0x553db1.trim().toUpperCase();
    let _0x527877 = "*◈╾──────" + _0x3d4f31 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ᴘᴏᴅɪʏᴀ md whatsapp bot 👨‍💻\n\n";
    for (let _0x262824 = 0; _0x262824 < commands.length; _0x262824++) {
      if (commands[_0x262824].category === "group") {
        if (!commands[_0x262824].dontAddCommandList) {
          _0x527877 += "╭────────●●►\n│ • *" + commands[_0x262824].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x527877 += "\n⭓ *Total Commands List " + _0x3d4f31 + "*: " + commands.filter(_0xa787b6 => _0xa787b6.category.toUpperCase() === _0x3d4f31).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0x39c6f8 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x1a5d8e = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x56e2f7 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x39c6f8,
      externalAdReply: _0x1a5d8e
    };
    const _0x1400c3 = {
      text: _0x527877,
      contextInfo: _0x56e2f7
    };
    const _0x3f5a2f = {
      quoted: _0x2559cf
    };
    await _0x265233.sendMessage(_0x365aba, _0x1400c3, _0x3f5a2f);
  } catch (_0x1c9ab0) {
    _0x3456cc("*Error !!*");
    console.log(_0x1c9ab0);
  }
});
const _0x3115c7 = {
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3115c7, async (_0x34a968, _0x5afa18, _0x40b44e, {
  from: _0x257724,
  prefix: _0x3e895c,
  l: _0x3a08d5,
  quoted: _0x2decf5,
  body: _0x17371c,
  isCmd: _0x40505e,
  command: _0x22eae0,
  args: _0x511da3,
  q: _0x13f71f,
  isGroup: _0x2dd2f9,
  sender: _0x431a98,
  senderNumber: _0x190fdf,
  botNumber2: _0x1c94f2,
  botNumber: _0x3aed0d,
  pushname: _0x1592ad,
  isMe: _0x2ab1b3,
  isOwner: _0x3042ee,
  groupMetadata: _0x348d8e,
  groupName: _0x979648,
  participants: _0x23435c,
  groupAdmins: _0x567f50,
  isBotAdmins: _0x287d21,
  isAdmins: _0x16a53c,
  reply: _0x31cc0d
}) => {
  try {
    const _0x35cc35 = _0x13f71f.trim().toUpperCase();
    let _0x31525c = "*◈╾──────" + _0x35cc35 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n";
    for (let _0x260150 = 0; _0x260150 < commands.length; _0x260150++) {
      if (commands[_0x260150].category === "bug") {
        if (!commands[_0x260150].dontAddCommandList) {
          _0x31525c += "╭────────●●►\n│ • *" + commands[_0x260150].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x31525c += "\n⭓ *Total Commands List " + _0x35cc35 + "*: " + commands.filter(_0x13521a => _0x13521a.category.toUpperCase() === _0x35cc35).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ʏ2x ꜰᴀᴍɪʟʏ*";
    const _0x4fd014 = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x35a92c = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x38ab63 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x4fd014,
      externalAdReply: _0x35a92c
    };
    const _0x1537a4 = {
      text: _0x31525c,
      contextInfo: _0x38ab63
    };
    const _0x56bc53 = {
      quoted: _0x5afa18
    };
    await _0x34a968.sendMessage(_0x257724, _0x1537a4, _0x56bc53);
  } catch (_0x121bb6) {
    _0x31cc0d("*Error !!*");
    console.log(_0x121bb6);
  }
});
const _0x960f8f = {
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x960f8f, async (_0xb0ce7c, _0x474c5e, _0x6d003c, {
  from: _0x375296,
  prefix: _0x1259aa,
  l: _0x160104,
  quoted: _0x3ca379,
  body: _0x1a3e5e,
  isCmd: _0x364a06,
  command: _0x379c1c,
  args: _0x3fd22f,
  q: _0x4091fc,
  isGroup: _0x4e41c8,
  sender: _0x43c58d,
  senderNumber: _0x30fae6,
  botNumber2: _0x259183,
  botNumber: _0x4fea4f,
  pushname: _0x29ed6f,
  isMe: _0x36af22,
  isOwner: _0x47c69e,
  groupMetadata: _0x4da914,
  groupName: _0xa418f9,
  participants: _0x1f840c,
  groupAdmins: _0xffb068,
  isBotAdmins: _0x2c17f0,
  isAdmins: _0x4be4e0,
  reply: _0x15686b
}) => {
  try {
    const _0x1b6877 = _0x4091fc.trim().toUpperCase();
    let _0x120c10 = "*◈╾──────" + _0x1b6877 + " SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ᴘᴏᴅɪʏᴀ md whatsapp bot 👨‍💻\n\n";
    for (let _0x3b5e73 = 0; _0x3b5e73 < commands.length; _0x3b5e73++) {
      if (commands[_0x3b5e73].category === "other") {
        if (!commands[_0x3b5e73].dontAddCommandList) {
          _0x120c10 += "╭────────●●►\n│ • *" + commands[_0x3b5e73].pattern + "* \n╰────────────────────●●►\n";
        }
      }
    }
    ;
    _0x120c10 += "\n⭓ *Total Commands List " + _0x1b6877 + "*: " + commands.filter(_0x511ca1 => _0x511ca1.category.toUpperCase() === _0x1b6877).length + "\n\n" + "*ᴘᴏᴅɪʏᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*";
    const _0x4bd94a = {
      newsletterJid: "120363290448968237@newsletter",
      serverMessageId: 0x7f
    };
    const _0x5cbfc4 = {
      title: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻",
      body: "ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
      mediaType: 0x1,
      sourceUrl: "https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S",
      thumbnailUrl: config.LOGO,
      renderLargerThumbnail: true,
      showAdAttribution: false
    };
    const _0x1ab095 = {
      mentionedJid: [''],
      groupMentions: [],
      forwardingScore: 0x457,
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x4bd94a,
      externalAdReply: _0x5cbfc4
    };
    const _0x10c221 = {
      text: _0x120c10,
      contextInfo: _0x1ab095
    };
    const _0x1fc83c = {
      quoted: _0x474c5e
    };
    await _0xb0ce7c.sendMessage(_0x375296, _0x10c221, _0x1fc83c);
  } catch (_0x27caf7) {
    _0x15686b("*Error !!*");
    console.log(_0x27caf7);
  }
});
const _0x3529a6 = {
  pattern: 'sc',
  react: "👨‍💻",
  alias: ["script", "repo"],
  desc: "Check bot online or no.",
  category: "main",
  use: ".alive",
  filename: __filename
};
cmd(_0x3529a6, async (_0x21149c, _0x58ea7d, _0x4f89ea, {
  from: _0x47aabc,
  prefix: _0x186383,
  l: _0x36b6d1,
  quoted: _0x3ea4c2,
  body: _0x4a847c,
  isCmd: _0x4415c8,
  command: _0x525587,
  args: _0x436930,
  q: _0x4a7801,
  isGroup: _0x288660,
  sender: _0x351d8b,
  senderNumber: _0xa8eb4,
  botNumber2: _0x177f7a,
  botNumber: _0xfd881e,
  pushname: _0x1efed1,
  isMe: _0x41dc64,
  isOwner: _0x3e2a47,
  groupMetadata: _0x55263d,
  groupName: _0x3b6a2c,
  participants: _0x17b378,
  groupAdmins: _0x325196,
  isBotAdmins: _0x4ff357,
  isAdmins: _0x336b58,
  reply: _0x4968de
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
    var _0x5e5b43 = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x49b9cf = {
      text: ''
    };
    let {
      key: _0x5d3d3f
    } = await _0x21149c.sendMessage(_0x47aabc, _0x49b9cf);
    for (let _0x59596c = 0; _0x59596c < _0x5e5b43.length; _0x59596c++) {
      const _0x371b79 = {
        text: _0x5e5b43[_0x59596c],
        edit: _0x5d3d3f
      };
      await _0x21149c.sendMessage(_0x47aabc, _0x371b79);
    }
    if (config.MODE === "nonbutton") {
      const _0x47a84e = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x186383 + "menu",
          'description': "COMMANDS MENU"
        }, {
          'title': '2',
          'rowId': _0x186383 + "ping",
          'description': "PODIYA-MD SPEED"
        }]
      }];
      const _0xc7cb04 = {
        url: config.LOGO
      };
      const _0x52c7c9 = {
        caption: "[👨‍💻 ｐｏｄｉｙａ - ＭＤ 👨‍💻]\n\n   *PODIYA MD WHATSAPP USER BOT* 💫\n\n                     *OUR MISSION*\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n\n💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.\n\n\n⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.\n\n\n👨‍💻 OWNER RAMESH\n\n🎡 \n\n🪩 *OUR CHANNEL:* https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S\n\n*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* \n",
        image: _0xc7cb04,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x47a84e
      };
      const _0x5714cf = {
        quoted: _0x58ea7d
      };
      return await _0x21149c.replyList(_0x47aabc, _0x52c7c9, _0x5714cf);
    }
    if (config.MODE === "button") {
      const _0x2551dd = {
        url: config.LOGO
      };
      const _0x4f3b1a = {
        displayText: "MENU"
      };
      const _0x1c22b0 = {
        buttonId: _0x186383 + "menu",
        buttonText: _0x4f3b1a
      };
      const _0x1fef91 = {
        displayText: "PING"
      };
      const _0xc9145b = {
        buttonId: _0x186383 + "ping",
        buttonText: _0x1fef91
      };
      const _0x4d3720 = {
        image: _0x2551dd,
        caption: "[👨‍💻 ＰＯＤＩＹＡ - ＭＤ 👨‍💻]\n\n   *Podiya MD WHATSAPP USER BOT* 💫\n\n                     *OUR MISSION*\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n\n💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.\n\n\n⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.\n\n\n👨‍💻 OWNER RAMESH\n\n🎡 \n\n🪩 *OUR CHANNEL:* https://youtube.com/@rp_music_and_gaming?si=ycp75LXq-4RreC9S\n\n*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* \n",
        footer: config.FOOTER,
        buttons: [_0x1c22b0, _0xc9145b],
        headerType: 0x1,
        viewOnce: true
      };
      const _0x128ce2 = {
        quoted: _0x4f89ea
      };
      _0x21149c.sendMessage(_0x47aabc, _0x4d3720, _0x128ce2);
    }
  } catch (_0x1e8488) {
    _0x4968de("*ERROR !!*");
    _0x36b6d1(_0x1e8488);
  }
});