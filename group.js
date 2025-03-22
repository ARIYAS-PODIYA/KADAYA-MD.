const config = require("../settings");
const moment = require("moment-timezone");
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
  default: makeWASocket,
  useMultiFileAuthState,
  WA_DEFAULT_EPHEMERAL,
  jidNormalizedUser,
  proto,
  getDevice,
  generateWAMessageFromContent,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  getContentType,
  generateForwardMessageContent,
  downloadContentFromMessage,
  jidDecode
} = require("@whiskeysockets/baileys");
var tesadtag = '';
if (config.LANG === 'SI') {
  tesadtag = "*මට tag කිරීමට text එකක් දෙන්න. !*";
} else {
  tesadtag = "*Give me text to tag !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි.";
} else {
  descg = "It tag all members in group.";
}
var ONLGROUP = '';
if (config.LANG === 'SI') {
  ONLGROUP = "*මෙය group නොවේ !*";
} else {
  ONLGROUP = "*This is not a group !*";
}
var ADMIN = '';
function _0x19a0b3(_0x5a7b87, _0x2956f8, _0x11790d, _0x5e6078, _0x863a5) {
  return _0x5240(_0x5a7b87 - 0x224, _0x11790d);
}
if (config.LANG === 'SI') {
  ADMIN = "ඔබ admin නොවේ !";
} else {
  ADMIN = "You are not an admin !";
}
var tmsg = '';
if (config.LANG === 'SI') {
  tmsg = "එය Bot link ලබා දෙයි.";
} else {
  tmsg = "It gives bot link.";
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "මෙලෙස enable/disable value, උදා:- ${prefix}ephemeral enable.";
} else {
  imgmsg = "Enter the enable/disable value, For Example ${prefix}ephemeral enable";
}
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
const _0x52f545 = {
  pattern: "kickall",
  desc: "Kicks all non-admin members from the group.",
  react: '👏',
  category: "group",
  filename: __filename
};
cmd(_0x52f545, async (_0x141e3c, _0x23c72d, _0x2507f5, {
  from: _0x524bb8,
  quoted: _0xb4cb08,
  body: _0x3dc500,
  isCmd: _0x29b3a2,
  command: _0x5e4751,
  args: _0x10fb41,
  q: _0x19eaf5,
  isGroup: _0x42972b,
  sender: _0x5924d9,
  senderNumber: _0x1fad44,
  botNumber2: _0x3e6ebe,
  botNumber: _0xc77d8,
  pushname: _0x3bb110,
  isMe: _0xf9fc7f,
  isOwner: _0x148cb2,
  groupMetadata: _0xf1f9cc,
  groupName: _0x30c9b6,
  participants: _0x22e0bc,
  groupAdmins: _0x5121a6,
  isBotAdmins: _0x3f8a3b,
  isAdmins: _0x266dff,
  reply: _0x16e9ea
}) => {
  try {
    if (!_0x266dff) {
      return _0x16e9ea("ONLY ADMINS CAN USE THIS CMD 🪄♻️");
    }
    if (!_0x148cb2) {
      return _0x16e9ea("SORRY ADMINS YOU R NOT BOT OWNER 🪄♻️");
    }
    if (!_0x42972b) {
      return _0x16e9ea("This command is only for groups.");
    }
    if (!_0x3f8a3b) {
      return _0x16e9ea("I need admin privileges to kick users.");
    }
    const _0x1f8f3f = _0xf1f9cc.participants;
    const _0x447bb7 = _0x1f8f3f.filter(_0x46a4dc => !_0x5121a6.includes(_0x46a4dc.id));
    if (_0x447bb7.length === 0) {
      return _0x16e9ea("There are no non-admin members to kick.");
    }
    for (let _0x3f09a4 of _0x447bb7) {
      await _0x141e3c.groupParticipantsUpdate(_0x2507f5.chat, [_0x3f09a4.id], "remove");
    }
    _0x16e9ea("Successfully kicked all non-admin members from the group.");
  } catch (_0x4f6997) {
    console.error("Error kicking users:", _0x4f6997);
    _0x16e9ea("An error occurred while trying to kick all members. Please try again.");
  }
});
const _0x145ff5 = {
  pattern: "opentime",
  react: '🔖',
  desc: "To open group to a time",
  category: "group",
  use: ".opentime",
  filename: __filename
};
cmd(_0x145ff5, async (_0x353f9e, _0x3ea586, _0x1da81a, {
  from: _0x1b89f7,
  prefix: _0x48ce4f,
  l: _0x1c3dc0,
  quoted: _0x1d77bf,
  body: _0x49b11c,
  isCmd: _0x45e89c,
  command: _0x15129a,
  args: _0x32ae97,
  q: _0x3bac47,
  isGroup: _0x5ef829,
  sender: _0x551257,
  senderNumber: _0x5a13f1,
  botNumber2: _0x3464f4,
  botNumber: _0x9b513c,
  pushname: _0x3372fe,
  isMe: _0x134ba1,
  isOwner: _0x34d4b0,
  groupMetadata: _0x437d1,
  groupName: _0x3bd910,
  participants: _0x2d2170,
  groupAdmins: _0x35a0e0,
  isBotAdmins: _0x1b8b0c,
  isAdmins: _0x14693f,
  reply: _0x5865b2
}) => {
  try {
    if (!_0x5ef829) {
      return _0x5865b2(ONLGROUP);
    }
    if (!_0x14693f) {
      return _0x5865b2(ADMIN);
    }
    if (_0x32ae97[1] == "second") {
      var _0x588874 = _0x32ae97[0] * "1000";
    } else {
      if (_0x32ae97[1] == "minute") {
        var _0x588874 = _0x32ae97[0] * "60000";
      } else {
        if (_0x32ae97[1] == "hour") {
          var _0x588874 = _0x32ae97[0] * "3600000";
        } else {
          if (_0x32ae97[1] == "day") {
            var _0x588874 = _0x32ae97[0] * "86400000";
          } else {
            return _0x5865b2("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
          }
        }
      }
    }
    _0x5865b2("Open time " + _0x3bac47 + " starting from now");
    setTimeout(() => {
      _0x353f9e.groupSettingUpdate(_0x1b89f7, "not_announcement");
      _0x5865b2("*Open time* the group was opened by admin\n now members can send messages");
    }, _0x588874);
    const _0x1cb3c6 = {
      text: '✅',
      key: _0x3ea586.key
    };
    const _0x5c4b19 = {
      react: _0x1cb3c6
    };
    await _0x353f9e.sendMessage(_0x1b89f7, _0x5c4b19);
  } catch (_0x400d1c) {
    _0x5865b2("*Error !!*");
    _0x1c3dc0(_0x400d1c);
  }
});
const _0x298ece = {
  pattern: "closetime",
  react: '🔖',
  desc: "To close group to a time",
  category: "group",
  use: ".closstime",
  filename: __filename
};
cmd(_0x298ece, async (_0x2baa42, _0x58bb53, _0x8e93bb, {
  from: _0x4f0ed6,
  prefix: _0x166eda,
  l: _0x22425c,
  quoted: _0x2b25f0,
  body: _0x30f478,
  isCmd: _0x160e2b,
  command: _0x3af1e6,
  args: _0x45b928,
  q: _0x3ea538,
  isGroup: _0x401d43,
  sender: _0x57d797,
  senderNumber: _0xa2cb66,
  botNumber2: _0x3392f4,
  botNumber: _0xf007d5,
  pushname: _0x308677,
  isMe: _0x101abc,
  isOwner: _0xdf4503,
  groupMetadata: _0x581359,
  groupName: _0x293509,
  participants: _0x5296d3,
  groupAdmins: _0x247892,
  isBotAdmins: _0x2695b1,
  isAdmins: _0x50e5f3,
  reply: _0x11b3da
}) => {
  try {
    if (!_0x401d43) {
      return _0x11b3da(ONLGROUP);
    }
    if (!_0x50e5f3) {
      return _0x11b3da(ADMIN);
    }
    if (_0x45b928[1] == "second") {
      var _0x5da62c = _0x45b928[0] * "1000";
    } else {
      if (_0x45b928[1] == "minute") {
        var _0x5da62c = _0x45b928[0] * "60000";
      } else {
        if (_0x45b928[1] == "hour") {
          var _0x5da62c = _0x45b928[0] * "3600000";
        } else {
          if (_0x45b928[1] == "day") {
            var _0x5da62c = _0x45b928[0] * "86400000";
          } else {
            return _0x11b3da("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
          }
        }
      }
    }
    _0x11b3da("Close time " + _0x3ea538 + " starting from now");
    setTimeout(() => {
      _0x2baa42.groupSettingUpdate(_0x4f0ed6, "announcement");
      _0x11b3da("*Close time* group closed by admin\nnow only admin can send messages");
    }, _0x5da62c);
    const _0x3d6d43 = {
      text: '✅',
      key: _0x58bb53.key
    };
    const _0x12a6ea = {
      react: _0x3d6d43
    };
    await _0x2baa42.sendMessage(_0x4f0ed6, _0x12a6ea);
  } catch (_0x3c13c1) {
    _0x11b3da("*Error !!*");
    _0x22425c(_0x3c13c1);
  }
});
const _0x5f2246 = {
  pattern: "sendcontact",
  react: '🔖',
  desc: "To see group contacts",
  category: "group",
  use: ".sendcontact",
  filename: __filename
};
cmd(_0x5f2246, async (_0x1c0395, _0x9995a7, _0x3dd3b2, {
  from: _0x57d012,
  prefix: _0x5d6ea6,
  l: _0x329d43,
  quoted: _0x48f5d2,
  body: _0xd76b6d,
  isCmd: _0x4a80b9,
  command: _0x3752ee,
  args: _0x5490e2,
  q: _0x73507f,
  isGroup: _0x8de204,
  sender: _0x7b574e,
  senderNumber: _0x479790,
  botNumber2: _0x2bcbca,
  botNumber: _0x55ebbe,
  pushname: _0x1ba24c,
  isMe: _0x5cf66e,
  isOwner: _0x568878,
  groupMetadata: _0x4c51dc,
  groupName: _0x491be3,
  participants: _0x18acaf,
  groupAdmins: _0x1c2963,
  isBotAdmins: _0x39678d,
  isAdmins: _0x236b07,
  reply: _0x383bbc
}) => {
  try {
    if (!_0x8de204) {
      return _0x383bbc(ONLGROUP);
    }
    if (!_0x236b07) {
      return _0x383bbc(ADMIN);
    }
    if (!_0x9995a7.mentionedJid) {
      return _0x383bbc("\nUse like this\n Example:.sendcontact @tag|name");
    }
    let _0x552024 = _0x73507f.split(" ")[1] ? _0x73507f.split(" ")[1] : "Contact";
    let _0x4cc91a = {
      'displayName': "Contact",
      'contacts': [{
        'displayName': _0x552024,
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x552024 + ";;;\nFN:" + _0x552024 + "\nitem1.TEL;waid=" + _0x9995a7.mentionedJid.split('@')[0] + ':' + _0x9995a7.mentionedJid.split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      }]
    };
    const _0x174f73 = {
      contacts: _0x4cc91a
    };
    const _0x35d1e5 = {
      ephemeralExpiration: 0x15180
    };
    _0x1c0395.sendMessage(_0x9995a7.chat, _0x174f73, _0x35d1e5);
    const _0x4db947 = {
      text: '✅',
      key: _0x9995a7.key
    };
    const _0x17d1ab = {
      react: _0x4db947
    };
    await _0x1c0395.sendMessage(_0x57d012, _0x17d1ab);
  } catch (_0xfaa8bc) {
    _0x383bbc("*Error !!*");
    _0x329d43(_0xfaa8bc);
  }
});
const _0xfd928d = {
  pattern: "savecontact",
  react: '🔖',
  desc: "To save group contacts",
  category: "group"
};
function _0x568b3b(_0x2d2fc4, _0x1d84da, _0x59a52a, _0x1ab3f6, _0x301a03) {
  return _0x5240(_0x59a52a + 0x25d, _0x1d84da);
}
_0xfd928d.use = ".savecontact";
_0xfd928d.filename = __filename;
cmd(_0xfd928d, async (_0x382aab, _0x44800b, _0x83c621, {
  from: _0x2180b5,
  prefix: _0x1fe44a,
  l: _0x226a13,
  quoted: _0x2229ae,
  body: _0x303e09,
  isCmd: _0xe807ff,
  command: _0x84dccf,
  args: _0xf27739,
  q: _0x22b7ef,
  isGroup: _0x266ed0,
  sender: _0x4e5b9c,
  senderNumber: _0x15ebe2,
  botNumber2: _0x21ecf6,
  botNumber: _0xa008e1,
  pushname: _0xf9823f,
  isMe: _0x47c4e5,
  isOwner: _0x50aff1,
  groupMetadata: _0x3efd97,
  groupName: _0x27769b,
  participants: _0x16df3b,
  groupAdmins: _0x15f966,
  isBotAdmins: _0xde1df2,
  isAdmins: _0x30e1c9,
  reply: _0x3e21ba
}) => {
  try {
    if (!_0x266ed0) {
      return _0x3e21ba(ONLGROUP);
    }
    if (!_0x30e1c9) {
      return _0x3e21ba(ADMIN);
    }
    let _0xc5f9ab = await _0x382aab.groupMetadata(_0x83c621.chat);
    vcard = '';
    noPort = 0;
    for (let _0x2a199d of _0xc5f9ab.participants) {
      vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0x2a199d.id.split('@')[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x2a199d.id.split('@')[0] + ':+' + _0x2a199d.id.split('@')[0] + "\nEND:VCARD\n";
    }
    _0x3e21ba("\nBe patient bro, saving... " + _0xc5f9ab.participants.length + " contact");
    require('fs').writeFileSync("./contacts.vcf", vcard.trim());
    await sleep(2000);
    const _0x3f065b = {
      ephemeralExpiration: 0x15180,
      quoted: _0x83c621
    };
    _0x382aab.sendMessage(_0x44800b.chat, {
      'document': require('fs').readFileSync("./contacts.vcf"),
      'mimetype': "text/vcard",
      'fileName': "Contact.vcf",
      'caption': "\nSucceed\nGroup: *" + _0xc5f9ab.subject + "*\nContact: *" + _0xc5f9ab.participants.length + '*'
    }, _0x3f065b);
    require('fs').unlinkSync("./contacts.vcf");
    const _0x573f57 = {
      text: '✅',
      key: _0x44800b.key
    };
    const _0x5ee676 = {
      react: _0x573f57
    };
    await _0x382aab.sendMessage(_0x2180b5, _0x5ee676);
  } catch (_0x26bb3d) {
    _0x3e21ba("*Error !!*");
    _0x226a13(_0x26bb3d);
  }
});
const _0x374357 = {};
function _0x5240(_0x3f7684, _0x311547) {
  const _0x2e1953 = _0x16fc();
  _0x5240 = function (_0x19eb84, _0x16fc93) {
    _0x19eb84 = _0x19eb84 - 384;
    let _0x52405a = _0x2e1953[_0x19eb84];
    return _0x52405a;
  };
  return _0x5240(_0x3f7684, _0x311547);
}
_0x374357.pattern = "getcontact";
_0x374357.react = '🔖';
_0x374357.desc = "To get group contacts";
_0x374357.category = "group";
_0x374357.use = ".getcontact";
_0x374357.filename = __filename;
cmd(_0x374357, async (_0x494244, _0x1cfbc1, _0x2704cb, {
  from: _0x1bf5f9,
  prefix: _0x23ec76,
  l: _0x257396,
  quoted: _0x24d2d7,
  body: _0x14d492,
  isCmd: _0x56c86c,
  command: _0x353a99,
  args: _0x3761a3,
  q: _0x1e26ce,
  isGroup: _0x25074f,
  sender: _0x27a2c7,
  senderNumber: _0x331ec1,
  botNumber2: _0x195136,
  botNumber: _0x4cbaba,
  pushname: _0xa58cfc,
  isMe: _0x2c8301,
  isOwner: _0x5d921d,
  groupMetadata: _0xf2c80e,
  groupName: _0xe1ee96,
  participants: _0x209dc7,
  groupAdmins: _0x218bff,
  isBotAdmins: _0x519cda,
  isAdmins: _0x4e1a7f,
  reply: _0x504066
}) => {
  try {
    if (!_0x25074f) {
      return _0x504066(ONLGROUP);
    }
    if (!_0x4e1a7f) {
      return _0x504066(ADMIN);
    }
    if (!_0x1cfbc1.mentionedJid) {
      return _0x504066("\nUse like this\n Example:.contacttag @tag|name");
    }
    let _0x53b832 = _0x1e26ce.split(" ")[1] ? _0x1e26ce.split(" ")[1] : "Contact";
    let _0x3af329 = {
      'displayName': "Contact",
      'contacts': [{
        'displayName': _0x53b832,
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x53b832 + ";;;\nFN:" + _0x53b832 + "\nitem1.TEL;waid=" + _0x2704cb.mentionedJid.split('@') + ':' + _0x1cfbc1.mentionedJid[0].split('@') + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      }]
    };
    const _0x55bc7e = {
      ephemeralExpiration: 0x15180
    };
    _0x494244.sendMessage(_0x1cfbc1.chat, {
      'contacts': _0x3af329,
      'mentions': _0x209dc7.map(_0x10395f => _0x10395f.id)
    }, _0x55bc7e);
    const _0x3a016a = {
      text: '✅',
      key: _0x1cfbc1.key
    };
    const _0x3a3fa4 = {
      react: _0x3a016a
    };
    await _0x494244.sendMessage(_0x1bf5f9, _0x3a3fa4);
  } catch (_0x466ecb) {
    _0x504066("*Error !!*");
    _0x257396(_0x466ecb);
  }
});
const _0x35a245 = {
  pattern: "contacttag",
  react: '🔖',
  desc: "To tag group contacts",
  category: "group",
  use: ".contacttag",
  filename: __filename
};
cmd(_0x35a245, async (_0x39b627, _0x4c119e, _0xde0219, {
  from: _0x3765d6,
  prefix: _0x2c802d,
  l: _0x125ea0,
  quoted: _0xe03b6f,
  body: _0x13f99c,
  isCmd: _0x10d0e4,
  command: _0x3c2875,
  args: _0x12d518,
  q: _0x46643b,
  isGroup: _0x3a64f5,
  sender: _0x1bd075,
  senderNumber: _0x2582aa,
  botNumber2: _0x50c6de,
  botNumber: _0x561961,
  pushname: _0x4f1134,
  isMe: _0x513ed1,
  isOwner: _0x495b44,
  groupMetadata: _0x39cce8,
  groupName: _0x3d696d,
  participants: _0x4e17c6,
  groupAdmins: _0x44aeca,
  isBotAdmins: _0x3bbac5,
  isAdmins: _0x4c850f,
  reply: _0xeaa922
}) => {
  try {
    if (!_0x3a64f5) {
      return _0xeaa922(ONLGROUP);
    }
    if (!_0x4c850f) {
      return _0xeaa922(ADMIN);
    }
    const _0x19d2a8 = {
      text: "\nGroup: *" + _0x39cce8.subject + "*\nMember: *" + _0x4e17c6.length + '*'
    };
    izumibigpp = await _0x39b627.sendMessage(_0x4c119e.chat, _0x19d2a8, {
      'quoted': _0x4c119e,
      'ephemeralExpiration': 0x15180
    });
    await sleep(1000);
    _0x39b627.sendContact(_0x4c119e.chat, _0x4e17c6.map(_0x47f015 => _0x47f015.id), izumibigpp);
    const _0x1cef22 = {
      text: '✅',
      key: _0x4c119e.key
    };
    const _0x325785 = {
      react: _0x1cef22
    };
    await _0x39b627.sendMessage(_0x3765d6, _0x325785);
  } catch (_0x370e3c) {
    _0xeaa922("*Error !!*");
    _0x125ea0(_0x370e3c);
  }
});
const _0x5d2449 = {
  pattern: "creatgc",
  react: '🔖',
  desc: "To create a group",
  category: "group",
  use: ".creatgc",
  filename: __filename
};
cmd(_0x5d2449, async (_0x113d17, _0x4ec857, _0x263922, {
  from: _0xaab0d9,
  prefix: _0x35890c,
  l: _0x4eb17d,
  quoted: _0x2ac676,
  body: _0x5902d9,
  isCmd: _0x38769e,
  command: _0x553671,
  args: _0x3e2c71,
  q: _0xe1d083,
  isGroup: _0x3bf534,
  sender: _0x2e9274,
  senderNumber: _0x539b81,
  botNumber2: _0x1d7e29,
  botNumber: _0x43079d,
  pushname: _0x4d23ef,
  isMe: _0x720ce2,
  isOwner: _0x831dd9,
  groupMetadata: _0x53937c,
  groupName: _0x129b80,
  participants: _0x52b179,
  groupAdmins: _0x209757,
  isBotAdmins: _0x40e262,
  isAdmins: _0x56c9fd,
  reply: _0x28006b
}) => {
  try {
    if (!_0x720ce2) {
      return await _0x28006b(BOTOW);
    }
    if (!_0x3e2c71.join(" ")) {
      return _0x28006b("Use " + (_0x35890c + _0x553671) + " groupname");
    }
    let _0x3381c5 = await _0x113d17.groupCreate(_0x3e2c71.join(" "), []);
    let _0x4f4b30 = await _0x113d17.groupInviteCode(_0x3381c5.id);
    const _0x283215 = "     「 Create Group 」\n\n▸ Name : " + _0x3381c5.subject + "\n▸ Owner : @" + _0x3381c5.owner.split('@')[0] + "\n▸ Creation : " + moment(_0x3381c5.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss") + "\n\nhttps://chat.whatsapp.com/" + _0x4f4b30;
    const _0x3b2242 = {
      quoted: _0x4ec857
    };
    _0x113d17.sendMessage(_0x263922.chat, {
      'text': _0x283215,
      'mentions': await _0x113d17.parseMention(_0x283215)
    }, _0x3b2242);
    const _0x3ac68c = {
      text: '✅',
      key: _0x4ec857.key
    };
    const _0x19eaac = {
      react: _0x3ac68c
    };
    await _0x113d17.sendMessage(_0xaab0d9, _0x19eaac);
  } catch (_0x269aee) {
    _0x28006b("*Error !!*");
    _0x4eb17d(_0x269aee);
  }
});
const _0x299bff = {
  pattern: "hidetag",
  react: '🔖',
  desc: descg,
  category: "group",
  use: ".hidetag <hi>",
  filename: __filename
};
cmd(_0x299bff, async (_0xe9a65d, _0xb44cc4, _0x276f3b, {
  from: _0x30040a,
  prefix: _0x3dc3cd,
  l: _0x539643,
  quoted: _0x14f92c,
  body: _0x283cd1,
  isCmd: _0x194a9a,
  command: _0x97923a,
  args: _0x120b71,
  q: _0x370a27,
  isGroup: _0x549ddd,
  sender: _0x2665fe,
  senderNumber: _0x34aab8,
  botNumber2: _0x1106e1,
  botNumber: _0x3f30e6,
  pushname: _0x4b41d9,
  isMe: _0x1a7e23,
  isOwner: _0x464f95,
  groupMetadata: _0x2b23f7,
  groupName: _0x1f3a8c,
  participants: _0xf9addd,
  groupAdmins: _0x7998e7,
  isBotAdmins: _0x1cd75a,
  isAdmins: _0x59cd4d,
  reply: _0x16ec96
}) => {
  try {
    if (!_0x549ddd) {
      return _0x16ec96(ONLGROUP);
    }
    if (!_0x59cd4d) {
      return _0x16ec96(ADMIN);
    }
    if (!_0x370a27) {
      return await _0x16ec96(tesadtag);
    }
    _0xe9a65d.sendMessage(_0x30040a, {
      'text': _0x370a27 ? _0x370a27 : '',
      'mentions': _0xf9addd.map(_0x2b088a => _0x2b088a.id)
    });
    const _0x4c99e8 = {
      text: '✅',
      key: _0xb44cc4.key
    };
    const _0x18e87e = {
      react: _0x4c99e8
    };
    await _0xe9a65d.sendMessage(_0x30040a, _0x18e87e);
  } catch (_0x1be867) {
    _0x16ec96("*Error !!*");
    _0x539643(_0x1be867);
  }
});
const _0x51a062 = {
  pattern: "tagall",
  react: '🔖',
  desc: descg,
  category: "group",
  use: ".hidetag <hi>",
  filename: __filename
};
cmd(_0x51a062, async (_0x5c6412, _0x188ec8, _0xfa4b1, {
  from: _0x2bffbc,
  prefix: _0x28a368,
  l: _0x587fd3,
  quoted: _0xe2e8b2,
  body: _0x532a17,
  isCmd: _0x26dec2,
  command: _0x41caac,
  args: _0x332c5d,
  q: _0x590fbe,
  isGroup: _0x2afe30,
  sender: _0x255335,
  senderNumber: _0x598b01,
  botNumber2: _0x332a93,
  botNumber: _0x430b46,
  pushname: _0x5b6065,
  isMe: _0x356b80,
  isOwner: _0x59f370,
  groupMetadata: _0x109f6e,
  groupName: _0x125e77,
  participants: _0x5df73a,
  groupAdmins: _0x5120b2,
  isBotAdmins: _0x2d8c41,
  isAdmins: _0x5a33b7,
  reply: _0x154589
}) => {
  try {
    if (!_0x2afe30) {
      return _0x154589(ONLGROUP);
    }
    if (!_0x2d8c41) {
      return _0x154589(botAdmin);
    }
    if (!_0x5a33b7) {
      return _0x154589(ADMIN);
    }
    let _0x1ba332 = " *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : " + (_0x590fbe ? _0x590fbe : "blank") + "*\n\n";
    for (let _0x5b6878 of _0x5df73a) {
      _0x1ba332 += "💚 @" + _0x5b6878.id.split('@')[0] + "\n";
    }
    _0x5c6412.sendMessage(_0xfa4b1.chat, {
      'text': _0x1ba332,
      'mentions': _0x5df73a.map(_0x5e32b2 => _0x5e32b2.id)
    });
    const _0x2f1165 = {
      text: '✅',
      key: _0x188ec8.key
    };
    const _0x1f9f1e = {
      react: _0x2f1165
    };
    await _0x5c6412.sendMessage(_0x2bffbc, _0x1f9f1e);
  } catch (_0x207a87) {
    _0x154589('');
    _0x587fd3(_0x207a87);
  }
});
const _0x131ffd = {
  pattern: "tagadmin",
  react: '🔖',
  desc: descg
};
function _0x40de1e(_0x2f3aec, _0xdb6457, _0x26d326, _0xb74e58, _0x83f3f) {
  return _0x5240(_0x26d326 + 0x1e6, _0xdb6457);
}
_0x131ffd.category = "group";
_0x131ffd.use = ".tagadmin";
_0x131ffd.filename = __filename;
cmd(_0x131ffd, async (_0x4be5fe, _0x4731a1, _0x3d9cfd, {
  from: _0x1c419d,
  prefix: _0x32116e,
  l: _0x50eada,
  quoted: _0x1c22f2,
  body: _0x5658bc,
  isCmd: _0x9a4ce0,
  command: _0x462784,
  args: _0x54e62e,
  q: _0x5df6f3,
  isGroup: _0x4755ec,
  sender: _0x2ef12b,
  senderNumber: _0x19a67c,
  botNumber2: _0x1f0948,
  botNumber: _0x32e0bc,
  pushname: _0xa328c5,
  isMe: _0x549cb7,
  isOwner: _0x4c1686,
  groupMetadata: _0x17677f,
  groupName: _0x5488a6,
  participants: _0x2ff2fc,
  groupAdmins: _0x980a00,
  isBotAdmins: _0x1cad8a,
  isAdmins: _0x218c95,
  reply: _0x14a172
}) => {
  try {
    if (!_0x4755ec) {
      return _0x14a172(ONLGROUP);
    }
    let _0x1ab88f = " _❗ " + _0x5488a6 + "Admins ❗_\n                  \n*MASSAGE :* " + (_0x5df6f3 ? _0x5df6f3 : "blank") + "\n\n";
    for (let _0x11254c of _0x980a00) {
      _0x1ab88f += "    ";
    }
    _0x4be5fe.sendMessage(_0x1c419d, {
      'text': _0x1ab88f,
      'mentions': _0x980a00.map(_0xa32cb3 => _0xa32cb3.id)
    });
    const _0xef279 = {
      text: '✅',
      key: _0x4731a1.key
    };
    const _0xffe3ed = {
      react: _0xef279
    };
    await _0x4be5fe.sendMessage(_0x1c419d, _0xffe3ed);
  } catch (_0xd368a3) {
    _0x14a172('');
    _0x50eada(_0xd368a3);
  }
});
const _0x499639 = {
  pattern: "mute",
  react: '🔖',
  desc: "close a group",
  category: "group",
  use: ".mute"
};
function _0x805c0e(_0x1de79b, _0x377f22, _0x5a2464, _0x31b2cb, _0x5489f2) {
  return _0x5240(_0x5a2464 + 0x3cb, _0x5489f2);
}
_0x499639.filename = __filename;
cmd(_0x499639, async (_0x25b1ad, _0x1c9e4d, _0x4448a5, {
  from: _0xd2e8e,
  prefix: _0xf8af0a,
  l: _0x132b27,
  quoted: _0x2c5741,
  body: _0x47d160,
  isCmd: _0x50151b,
  command: _0x1e9e80,
  args: _0x397f05,
  q: _0x220f23,
  isGroup: _0x4a6c4a,
  sender: _0x5bb06c,
  senderNumber: _0x20627a,
  botNumber2: _0x123632,
  botNumber: _0xb622ea,
  pushname: _0x22e0fb,
  isMe: _0x51dc04,
  isOwner: _0x845662,
  groupMetadata: _0x262214,
  groupName: _0x4d8ed4,
  participants: _0x517cc9,
  groupAdmins: _0x5589df,
  isBotAdmins: _0x56840f,
  isAdmins: _0x1e0db9,
  reply: _0x37b9e4
}) => {
  function _0x21e956(_0x38dc59, _0x3e96f2, _0x2944c, _0x586596, _0x374727) {
    return _0x5240(_0x38dc59 - 0x15a + 0x1e6, _0x374727);
  }
  function _0x1ea289(_0x5296a1, _0xaa5754, _0x485227, _0xd5945f, _0x4ff1e7) {
    return _0x5240(_0x485227 + 0x266 - 0x224, _0xd5945f);
  }
  function _0x5582b5(_0xb52cfe, _0x2d070e, _0x2cc0dd, _0x4e5153, _0x35c7fc) {
    return _0x5240(_0x4e5153 - 0x48c + 0x3cb, _0x35c7fc);
  }
  function _0x28cbc7(_0x100006, _0x196eab, _0x23e520, _0x337eb2, _0x2856d1) {
    return _0x5240(_0x23e520 - 0x6c + 0x3cb, _0x2856d1);
  }
  const _0x4fb76e = {
    'tpcjA': function (_0x595891, _0xcb4800) {
      return _0x595891(_0xcb4800);
    },
    'WafQn': "*Error !!*",
    'zrOAT': function (_0x14ba47, _0x57dd9f) {
      return _0x14ba47(_0x57dd9f);
    },
    'yxxlV': function (_0x1c3f02, _0x243c85) {
      return _0x1c3f02(_0x243c85);
    },
    'qHIqR': function (_0xeebb02, _0x1e1f15) {
      return _0xeebb02 === _0x1e1f15;
    },
    'qdpcs': "gGeGc",
    'IlcrM': "ROSLi",
    'tVpHQ': function (_0xc97541, _0x2ba473) {
      return _0xc97541(_0x2ba473);
    },
    'ojAsh': "announcement",
    'DmqBQ': function (_0xe24472, _0x102a23) {
      return _0xe24472 !== _0x102a23;
    },
    'XMPRM': "qIqpn",
    'JegTe': "yZvLV",
    'QRIwb': function (_0x5dea58, _0x42506b) {
      return _0x5dea58(_0x42506b);
    },
    'IrSjQ': "🛑 GROUP IS CLOSED MY BOT OWNER",
    'iiPxg': function (_0xd73269, _0x5b345f) {
      return _0xd73269(_0x5b345f);
    }
  };
  function _0xd3db81(_0x487dd5, _0x5a5ceb, _0x3ff5ca, _0xd662f1, _0x332a12) {
    return _0x5240(_0x332a12 + 0x148 - 0x224, _0xd662f1);
  }
  try {
    if (!_0x4a6c4a) {
      return _0x37b9e4(ONLGROUP);
    }
    if (!_0x56840f) {
      return _0x37b9e4(botAdmin);
    }
    if (!_0x1e0db9) {
      return _0x37b9e4(ADMIN);
    }
    await _0x25b1ad.groupSettingUpdate(_0x1c9e4d.chat, "announcement");
    const _0xf61d17 = await _0x25b1ad.sendMessage(_0x1c9e4d.chat.G_MUTE);
    const _0x7ee8ea = {
      text: '✅',
      key: _0x1c9e4d.key
    };
    const _0x58423c = {
      react: _0x7ee8ea
    };
    await _0x25b1ad.sendMessage(_0xd2e8e, _0x58423c);
  } catch (_0x77685) {
    _0x37b9e4("🛑 GROUP IS CLOSED MY BOT OWNER");
    _0x132b27(_0x77685);
  }
});
const _0x517cbe = {
  pattern: "unmute",
  react: '🔖',
  desc: "open a group",
  category: "group",
  use: ".unmute",
  filename: __filename
};
cmd(_0x517cbe, async (_0x5fe7ac, _0x1f5978, _0x2957e2, {
  from: _0x80164,
  prefix: _0x3c4c04,
  l: _0x163b88,
  quoted: _0x4013ca,
  body: _0x343e62,
  isCmd: _0x26b53e,
  command: _0x1b8921,
  args: _0x572b3e,
  q: _0x2781bc,
  isGroup: _0x1b1084,
  sender: _0x5208cc,
  senderNumber: _0x4a9833,
  botNumber2: _0x1055e5,
  botNumber: _0x25e1e7,
  pushname: _0x4ff328,
  isMe: _0x4ccddf,
  isOwner: _0x353806,
  groupMetadata: _0x1f88fc,
  groupName: _0x1e791f,
  participants: _0x596740,
  groupAdmins: _0x4595bc,
  isBotAdmins: _0x3cd0e8,
  isAdmins: _0x44b5cd,
  reply: _0x4a28a0
}) => {
  function _0x465983(_0x1e0315, _0x5c7488, _0x5388d3, _0x2be2f5, _0x42059a) {
    return _0x5240(_0x1e0315 + 0x18a + 0x25d, _0x2be2f5);
  }
  function _0x303603(_0x34aa10, _0x4c9c74, _0x32808e, _0x1dee4a, _0x3670f2) {
    return _0x5240(_0x4c9c74 + 0x482 - 0x224, _0x34aa10);
  }
  const _0x17fed2 = {
    'EPhYb': function (_0x219067, _0x1382ec) {
      return _0x219067(_0x1382ec);
    },
    'tekhq': "🛑 GROUP IS OPEN MY BOT OWNER",
    'JKwUd': function (_0x3f24a3, _0x24cdc2) {
      return _0x3f24a3 === _0x24cdc2;
    },
    'cfgZB': "ayezs",
    'xQvDL': function (_0x848dc3, _0x287bb9) {
      return _0x848dc3(_0x287bb9);
    },
    'mtJAl': function (_0x6782f9, _0x234a41) {
      return _0x6782f9(_0x234a41);
    },
    'CtZYv': "not_announcement",
    'PbBxD': "eoVjN",
    'xqWBn': "ROmGQ",
    'ZpidQ': function (_0x6e646e, _0x2d4da1) {
      return _0x6e646e(_0x2d4da1);
    }
  };
  function _0x2c8eca(_0x3ddfbc, _0x277d41, _0x4e1386, _0x484564, _0x1c7bb7) {
    return _0x5240(_0x1c7bb7 - 0x270 + 0x3cb, _0x3ddfbc);
  }
  function _0x2760dd(_0x40e485, _0x45c4a2, _0x3167e0, _0xc69389, _0x39c658) {
    return _0x5240(_0x39c658 + 0x206 - 0x224, _0x45c4a2);
  }
  function _0x5ae719(_0x316b9a, _0xcac9a3, _0x3e7f8e, _0x34a820, _0x88e375) {
    return _0x5240(_0xcac9a3 - 0x3f0 + 0x16d, _0x88e375);
  }
  try {
    if (!_0x1b1084) {
      return _0x4a28a0(ONLGROUP);
    }
    if (!_0x3cd0e8) {
      return _0x4a28a0(botAdmin);
    }
    if (!_0x44b5cd) {
      return _0x4a28a0(ADMIN);
    }
    await _0x5fe7ac.groupSettingUpdate(_0x1f5978.chat, "not_announcement");
    const _0x8c893c = await _0x5fe7ac.sendMessage(_0x1f5978.chat.G_UNMUTE);
    const _0x4a024 = {
      text: '✅',
      key: _0x1f5978.key
    };
    const _0x28c82b = {
      react: _0x4a024
    };
    await _0x5fe7ac.sendMessage(_0x80164, _0x28c82b);
  } catch (_0x44b83f) {
    _0x4a28a0("🛑 GROUP IS OPEN MY BOT OWNER");
    _0x163b88(_0x44b83f);
  }
});
const _0x186d96 = {
  pattern: "kick",
  react: '🔖',
  desc: "kick a member",
  category: "group",
  use: ".kick",
  filename: __filename
};
cmd(_0x186d96, async (_0x3e4b2e, _0x290ce2, _0x33f736, {
  from: _0x4b3960,
  prefix: _0x262584,
  l: _0x2de9c1,
  quoted: _0xfd18e3,
  body: _0xac0b2e,
  isCmd: _0x3aa2be,
  command: _0x3c6478,
  args: _0x1f800d,
  q: _0x20f26e,
  isGroup: _0xfdde49,
  sender: _0x28625f,
  senderNumber: _0x209319,
  botNumber2: _0x37447b,
  botNumber: _0xab2af7,
  pushname: _0x10a290,
  isMe: _0x263617,
  isOwner: _0x464ed4,
  groupMetadata: _0x3872a9,
  groupName: _0x59168d,
  participants: _0x581a4e,
  groupAdmins: _0x5df4bf,
  isBotAdmins: _0x4ec3d8,
  isAdmins: _0x1d362d,
  reply: _0x4bf9d4
}) => {
  function _0x3deaa4(_0x446bdd, _0x37a0f3, _0x58811d, _0x289af5, _0x221219) {
    return _0x5240(_0x289af5 - 0x5c9 + 0x3cb, _0x446bdd);
  }
  function _0x3aaac3(_0x33d575, _0x46feb3, _0x351b1, _0x21483e, _0x253fdd) {
    return _0x5240(_0x33d575 - 0xb8 - 0x224, _0x253fdd);
  }
  function _0x3679c9(_0x224fc5, _0x6fa17b, _0x361987, _0x19e2fb, _0x401405) {
    return _0x5240(_0x19e2fb - 0x3f + 0x3cb, _0x6fa17b);
  }
  function _0x10d7a5(_0x279b81, _0x29294b, _0x48f592, _0x1eecf4, _0x203e30) {
    return _0x5240(_0x203e30 - 0x60 - 0x224, _0x48f592);
  }
  const _0x1d203f = {
    'PLvQc': function (_0x2775a3, _0x307545) {
      return _0x2775a3(_0x307545);
    },
    'QYRNA': "*Error !!*",
    'EEyIl': function (_0x4ce9d8, _0x5e36b4) {
      return _0x4ce9d8(_0x5e36b4);
    },
    'QHXsR': function (_0x1eb876, _0x273a0f) {
      return _0x1eb876 === _0x273a0f;
    },
    'lzHbY': "ExFjI",
    'ssJei': "xdKNG",
    'ALRZL': function (_0x2f0dce, _0x330b9c) {
      return _0x2f0dce(_0x330b9c);
    },
    'ubpLe': function (_0xd9f1d1, _0x24ce23) {
      return _0xd9f1d1(_0x24ce23);
    },
    'jpUsP': function (_0xe1e7cf, _0x442098) {
      return _0xe1e7cf + _0x442098;
    },
    'aZzSp': "@s.whatsapp.net",
    'ZKmCY': "remove",
    'LMKwt': function (_0x397988, _0x38871e) {
      return _0x397988 !== _0x38871e;
    },
    'lqyqV': "lliXG",
    'VyDvq': function (_0x5a8310, _0x19d565) {
      return _0x5a8310(_0x19d565);
    }
  };
  function _0x397f7d(_0x3026bc, _0x219a0c, _0x274944, _0x151d0f, _0xd0c909) {
    return _0x5240(_0x274944 - 0x3eb + 0x16d, _0x151d0f);
  }
  try {
    if (!_0xfdde49) {
      return _0x4bf9d4(ONLGROUP);
    }
    if (!_0x4ec3d8) {
      return _0x4bf9d4(botAdmin);
    }
    if (!_0x1d362d) {
      return _0x4bf9d4(ADMIN);
    }
    let _0x4727c0 = _0x290ce2.mentionedJid ? _0x290ce2.mentionedJid : _0x290ce2.quoted ? _0x290ce2.quoted.sender : _0x20f26e.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x3e4b2e.groupParticipantsUpdate(_0x290ce2.chat, [_0x4727c0], "remove").then(_0x37754b => _0x4bf9d4(jsonformat(_0x37754b)))["catch"](_0x3e3d27 => _0x4bf9d4(jsonformat(_0x3e3d27)));
    const _0x23af64 = {
      text: '✅',
      key: _0x290ce2.key
    };
    const _0x46befe = {
      react: _0x23af64
    };
    await _0x3e4b2e.sendMessage(_0x4b3960, _0x46befe);
  } catch (_0x2c6bfc) {
    _0x4bf9d4("*Error !!*");
    _0x2de9c1(_0x2c6bfc);
  }
});
const _0x52d991 = {
  pattern: "add",
  react: '🔖',
  desc: "Add a member",
  category: "group",
  use: ".add",
  filename: __filename
};
cmd(_0x52d991, async (_0x130b18, _0x5b203d, _0x55fbc5, {
  from: _0x343cfe,
  prefix: _0x2a3d52,
  l: _0x41179c,
  quoted: _0x575ac8,
  body: _0x51efa8,
  isCmd: _0x5afdc8,
  command: _0x118cae,
  args: _0x39b0de,
  q: _0x2fe98e,
  isGroup: _0x4d31cc,
  sender: _0x1a7490,
  senderNumber: _0x47958c,
  botNumber2: _0x3de962,
  botNumber: _0x4f3d19,
  pushname: _0x44d423,
  isMe: _0x4e8f8f,
  isOwner: _0x2daa43,
  groupMetadata: _0x279447,
  groupName: _0x14687a,
  participants: _0x515816,
  groupAdmins: _0x2aa3c6,
  isBotAdmins: _0x9b8b3c,
  isAdmins: _0x3f1941,
  reply: _0x170748
}) => {
  const _0x54be97 = {
    'oapvi': function (_0x2ac159, _0x424cb3) {
      return _0x2ac159(_0x424cb3);
    },
    'QrAjg': "*Error !!*",
    'hEqpH': function (_0x599e02, _0x2e8d84) {
      return _0x599e02 !== _0x2e8d84;
    },
    'MJfbX': "JCrtA",
    'czGFo': "RNHth",
    'oiSEs': function (_0x2d4bec, _0xe47c8) {
      return _0x2d4bec(_0xe47c8);
    },
    'Wvqqy': function (_0x42ca61, _0x41f968) {
      return _0x42ca61 + _0x41f968;
    },
    'Imney': "@s.whatsapp.net",
    'PDjyO': "add",
    'jQqYz': function (_0x442e8f, _0x49e845) {
      return _0x442e8f === _0x49e845;
    },
    'WlQnz': "jAVxp",
    'kafLz': "NRbDJ"
  };
  function _0x35fa61(_0x35db9a, _0xf7613e, _0x4da122, _0x132eae, _0xc8d5cd) {
    return _0x5240(_0x4da122 - 0x2c5 + 0x3cb, _0x132eae);
  }
  function _0x2d0716(_0x1756a3, _0x2ec5da, _0x3cfb8e, _0x2cb99d, _0x42541a) {
    return _0x5240(_0x1756a3 - 0x13f - 0x224, _0x3cfb8e);
  }
  function _0x97eb2d(_0x3e6836, _0x581434, _0x3448eb, _0x760a39, _0x3c9eff) {
    return _0x5240(_0x581434 - 0x62c + 0x3cb, _0x3c9eff);
  }
  function _0x5317f6(_0x40a5ed, _0x21ecae, _0x37a712, _0x4caf4b, _0xd9b705) {
    return _0x5240(_0x37a712 - 0x8b + 0x3cb, _0x40a5ed);
  }
  function _0x35fb4b(_0x5c433f, _0x2eef2d, _0x56151b, _0x4c1698, _0x5d8083) {
    return _0x5240(_0x56151b + 0x19 + 0x1e6, _0x4c1698);
  }
  try {
    if (!_0x9b8b3c) {
      return _0x170748(botAdmin);
    }
    let _0x69772e = _0x5b203d.quoted ? _0x5b203d.quoted.sender : _0x2fe98e.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x130b18.groupParticipantsUpdate(_0x5b203d.chat, [_0x69772e], "add").then(_0x2510d8 => _0x170748(jsonformat(_0x2510d8)))["catch"](_0x88b6ab => _0x170748(jsonformat(_0x88b6ab)));
    const _0x14ffd0 = {
      text: '✅',
      key: _0x5b203d.key
    };
    const _0x395adc = {
      react: _0x14ffd0
    };
    await _0x130b18.sendMessage(_0x343cfe, _0x395adc);
  } catch (_0x3b3088) {
    _0x170748("*Error !!*");
    _0x41179c(_0x3b3088);
  }
});
const _0x256c8f = {
  pattern: "promote",
  react: '🔖',
  desc: "promote admin to a member",
  category: "group",
  use: ".promote",
  filename: __filename
};
cmd(_0x256c8f, async (_0x492016, _0x1ccbfd, _0x12dd1c, {
  from: _0x73c5f1,
  prefix: _0x29652c,
  l: _0x1df516,
  quoted: _0x595b7a,
  body: _0x47ebce,
  isCmd: _0x970713,
  command: _0x2c34ce,
  args: _0x528c3,
  q: _0x9b51d4,
  isGroup: _0x56d62b,
  sender: _0x5b2ee6,
  senderNumber: _0x40ce72,
  botNumber2: _0x850ec0,
  botNumber: _0x2b6628,
  pushname: _0x410794,
  isMe: _0x15250a,
  isOwner: _0x49368f,
  groupMetadata: _0x504c20,
  groupName: _0x1225d9,
  participants: _0x21fe62,
  groupAdmins: _0x2e5da6,
  isBotAdmins: _0x2fe989,
  isAdmins: _0x4dfba0,
  reply: _0x576d0e
}) => {
  const _0x5abecf = {
    'CYUbp': function (_0x415ccf, _0x13086f) {
      return _0x415ccf + _0x13086f;
    },
    'LcAwE': "debu",
    'XGNkW': "gger",
    'jqGqq': "action",
    'SDyfs': function (_0x720c80, _0x1647d3) {
      return _0x720c80(_0x1647d3);
    },
    'kMbJK': function (_0x98b0f9, _0x453d56) {
      return _0x98b0f9 + _0x453d56;
    },
    'qxYeK': "return (function() ",
    'cDjoy': "{}.constructor(\"return this\")( )",
    'sgVWG': function (_0x3624d9, _0x3c6b6c) {
      return _0x3624d9 === _0x3c6b6c;
    },
    'oLkox': "fviFC",
    'zyObn': function (_0x4c6dc9, _0x52ab16) {
      return _0x4c6dc9(_0x52ab16);
    },
    'OtThv': "@s.whatsapp.net",
    'KeORD': "promote",
    'iCbhm': "🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER",
    'jeECa': function (_0x24244b, _0x38d780) {
      return _0x24244b !== _0x38d780;
    },
    'TjmLR': "XVUzE",
    'uNIiE': "GWwvV",
    'hQgYY': "*Error !!*"
  };
  function _0x4699e1(_0x3a1b26, _0x268fac, _0x102d51, _0x55f287, _0x24d27d) {
    return _0x5240(_0x102d51 + 0x8e + 0x16d, _0x268fac);
  }
  function _0x45901a(_0x2c9b61, _0x489281, _0x35bb55, _0x52f3b7, _0x138143) {
    return _0x5240(_0x2c9b61 + 0x66 + 0x16d, _0x138143);
  }
  function _0xa01467(_0x225613, _0x547e0a, _0x88bbae, _0x12928f, _0x33235e) {
    return _0x5240(_0x547e0a + 0x56d - 0x224, _0x33235e);
  }
  function _0x3439c3(_0x133317, _0x2bd3df, _0x2992f9, _0x1b73a9, _0x535903) {
    return _0x5240(_0x2992f9 + 0x1e5 + 0x1e6, _0x2bd3df);
  }
  function _0x28f7bc(_0x798d71, _0x462d14, _0x222ccc, _0x168a9b, _0x556e14) {
    return _0x5240(_0x556e14 - 0x287 + 0x1e6, _0x798d71);
  }
  try {
    if (!_0x56d62b) {
      return _0x576d0e(ONLGROUP);
    }
    if (!_0x2fe989) {
      return _0x576d0e(botAdmin);
    }
    if (!_0x4dfba0) {
      return _0x576d0e(ADMIN);
    }
    let _0x3b10f0 = _0x1ccbfd.mentionedJid ? _0x1ccbfd.mentionedJid : _0x1ccbfd.quoted ? _0x1ccbfd.quoted.sender : _0x9b51d4.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x492016.groupParticipantsUpdate(_0x1ccbfd.chat, [_0x3b10f0], "promote").then(_0x12529c => _0x576d0e(jsonformat(_0x12529c)))["catch"](_0x55dc58 => _0x576d0e(jsonformat(_0x55dc58)));
    _0x576d0e("🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER");
    const _0x476277 = {
      text: '✅',
      key: _0x1ccbfd.key
    };
    const _0xc79a83 = {
      react: _0x476277
    };
    await _0x492016.sendMessage(_0x73c5f1, _0xc79a83);
  } catch (_0x102adf) {
    _0x576d0e("*Error !!*");
    _0x1df516(_0x102adf);
  }
});
const _0x51f46c = {
  pattern: "demote",
  react: '🔖',
  desc: "demote admin to a member",
  category: "group",
  use: ".demote",
  filename: __filename
};
cmd(_0x51f46c, async (_0x11da08, _0x54a059, _0x194382, {
  from: _0x3ed10f,
  prefix: _0x260af0,
  l: _0xf3178,
  quoted: _0x5e88c4,
  body: _0x37b01,
  isCmd: _0x712e2f,
  command: _0x4508eb,
  args: _0xac16bc,
  q: _0x3a86eb,
  isGroup: _0x22388d,
  sender: _0x3e0c92,
  senderNumber: _0x3b9453,
  botNumber2: _0x1e6610,
  botNumber: _0x2406a8,
  pushname: _0x588020,
  isMe: _0x483290,
  isOwner: _0x459098,
  groupMetadata: _0x4c5d51,
  groupName: _0x2079b6,
  participants: _0xf1c3da,
  groupAdmins: _0x2b5218,
  isBotAdmins: _0x1f5576,
  isAdmins: _0x40ea92,
  reply: _0xf1e9f4
}) => {
  function _0x454224(_0x2aa5c2, _0x4b5e75, _0x37b37b, _0x4c31a7, _0x288c4d) {
    return _0x5240(_0x37b37b - 0x4bf + 0x25d, _0x288c4d);
  }
  const _0x20dd9a = {
    'ZvXoc': function (_0x2fe365, _0x436114) {
      return _0x2fe365(_0x436114);
    },
    'NkCrp': "*Error !!*",
    'CZJDd': function (_0x41bc05, _0x1fd613) {
      return _0x41bc05(_0x1fd613);
    },
    'rUsyO': function (_0x3fdac0, _0x5a89f0) {
      return _0x3fdac0(_0x5a89f0);
    },
    'bafwn': function (_0x14bbae, _0x4ccb04) {
      return _0x14bbae === _0x4ccb04;
    },
    'PYjvm': "pOcGT",
    'KdvLV': "aFMHb",
    'xmYzC': function (_0x3b0b81, _0x3536ce) {
      return _0x3b0b81(_0x3536ce);
    },
    'sNzBY': function (_0x682a7b, _0x37a556) {
      return _0x682a7b(_0x37a556);
    },
    'MCxIl': function (_0x50bdb6, _0x209c3d) {
      return _0x50bdb6 + _0x209c3d;
    },
    'EHknX': "@s.whatsapp.net",
    'JlVPl': "demote",
    'GgUjS': "🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER",
    'qZAjX': function (_0x50a2a9, _0x104059) {
      return _0x50a2a9 !== _0x104059;
    },
    'mXkfr': "kxxdE"
  };
  function _0x20e6bc(_0x581ad3, _0x253009, _0x155378, _0x323160, _0x1695ee) {
    return _0x5240(_0x323160 - 0x523 + 0x25d, _0x253009);
  }
  function _0x356574(_0x1a865c, _0x2b92fd, _0x352157, _0x376d52, _0x272463) {
    return _0x5240(_0x272463 + 0x46 + 0x25d, _0x376d52);
  }
  function _0x193d82(_0x4f533f, _0x24520e, _0x385914, _0x495ea0, _0x3757b3) {
    return _0x5240(_0x495ea0 - 0x4b3 + 0x25d, _0x24520e);
  }
  function _0x5eefb5(_0x10cdb5, _0x41d1c1, _0x36d2a0, _0x1a1f65, _0x1273ca) {
    return _0x5240(_0x36d2a0 - 0x1a8 + 0x16d, _0x1a1f65);
  }
  try {
    if (!_0x22388d) {
      return _0xf1e9f4(ONLGROUP);
    }
    if (!_0x1f5576) {
      return _0xf1e9f4(botAdmin);
    }
    if (!_0x40ea92) {
      return _0xf1e9f4(ADMIN);
    }
    let _0x229b42 = _0x54a059.mentionedJid ? _0x54a059.mentionedJid : _0x54a059.quoted ? _0x54a059.quoted.sender : _0x3a86eb.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    await _0x11da08.groupParticipantsUpdate(_0x54a059.chat, [_0x229b42], "demote").then(_0x59183b => _0xf1e9f4(jsonformat(_0x59183b)))["catch"](_0x103d41 => _0xf1e9f4(jsonformat(_0x103d41)));
    _0xf1e9f4("🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER");
    const _0x202004 = {
      text: '✅',
      key: _0x54a059.key
    };
    const _0x439d1d = {
      react: _0x202004
    };
    await _0x11da08.sendMessage(_0x3ed10f, _0x439d1d);
  } catch (_0x6ea729) {
    _0xf1e9f4("*Error !!*");
    _0xf3178(_0x6ea729);
  }
});
const _0x4d6923 = {
  pattern: "setname",
  react: '🔖',
  desc: "To change group name",
  category: "group",
  use: ".setname",
  filename: __filename
};
cmd(_0x4d6923, async (_0x48b276, _0x1b224c, _0x404de7, {
  from: _0x2fda21,
  prefix: _0x114d33,
  l: _0x5a61c3,
  quoted: _0x243449,
  body: _0xfc7509,
  isCmd: _0x5c5c55,
  command: _0x4a0f3c,
  args: _0x17bb97,
  q: _0x3e752a,
  isGroup: _0x2e167a,
  sender: _0x5ddbc5,
  senderNumber: _0x3899a4,
  botNumber2: _0x3fe867,
  botNumber: _0x20abe2,
  pushname: _0x48dc22,
  isMe: _0x45ab92,
  isOwner: _0xbc2f40,
  groupMetadata: _0x81652d,
  groupName: _0x23cea6,
  participants: _0x2dd0d0,
  groupAdmins: _0xf2e51e,
  isBotAdmins: _0x9ee56b,
  isAdmins: _0x535bf4,
  reply: _0x4ae4e7
}) => {
  function _0x5f1393(_0x1c2290, _0x459cc2, _0xf9dbfb, _0x2e1fbb, _0x4991d3) {
    return _0x5240(_0x459cc2 - 0xee + 0x1e6, _0x1c2290);
  }
  function _0x3dd7a5(_0x26f859, _0x47367e, _0x4db840, _0x2d68b8, _0x2d7b34) {
    return _0x5240(_0x4db840 - 0x47f + 0x16d, _0x2d68b8);
  }
  const _0x31af3d = {
    'hwuIm': function (_0x3cb0eb, _0x45a6a6) {
      return _0x3cb0eb(_0x45a6a6);
    },
    'NcFPV': "*Error !!*",
    'dIOIp': function (_0x543f0a, _0x4ef4a9) {
      return _0x543f0a === _0x4ef4a9;
    },
    'kqytZ': "FUvPb",
    'dpors': "0|3|1|5|4|2",
    'Wmvip': function (_0x1832cd, _0x4e7108) {
      return _0x1832cd(_0x4e7108);
    },
    'cFYHL': function (_0x2cd9d8, _0x480c1b) {
      return _0x2cd9d8(_0x480c1b);
    },
    'jmite': "*✅ SUCCESSFULLY CHANGED GROUP NAME*",
    'hSylI': function (_0x5c345e, _0x229810) {
      return _0x5c345e === _0x229810;
    },
    'ostSO': "Cbqeb",
    'AJXvJ': "bVHXi",
    'YvvOZ': function (_0x58bade, _0x1d5fbd) {
      return _0x58bade(_0x1d5fbd);
    },
    'vMigK': function (_0x3c36d8, _0x3ad1f6) {
      return _0x3c36d8(_0x3ad1f6);
    }
  };
  function _0x38ae21(_0x5a6700, _0x1070d9, _0xc5f436, _0x1e0fbf, _0x2e4360) {
    return _0x5240(_0xc5f436 - 0x293 + 0x1e6, _0x1e0fbf);
  }
  function _0xdb09c4(_0x59d2f1, _0x5868e9, _0x1a98e6, _0x4efb1a, _0x521620) {
    return _0x5240(_0x521620 + 0xb6 - 0x224, _0x4efb1a);
  }
  function _0xdba695(_0x4fc8ad, _0x5e4508, _0x1f67f7, _0x38a45a, _0x5a1f4e) {
    return _0x5240(_0x1f67f7 + 0x269 - 0x224, _0x5a1f4e);
  }
  try {
    if (!_0x2e167a) {
      return _0x4ae4e7(ONLGROUP);
    }
    if (!_0x9ee56b) {
      return _0x4ae4e7(botAdmin);
    }
    if (!_0x535bf4) {
      return _0x4ae4e7(ADMIN);
    }
    await _0x48b276.groupUpdateSubject(_0x1b224c.chat, _0x3e752a).then(_0xaa85fc => _0x4ae4e7(mess.success))["catch"](_0x419614 => _0x4ae4e7(jsonformat(_0x419614)));
    _0x4ae4e7("*✅ SUCCESSFULLY CHANGED GROUP NAME*");
    const _0x4f6c44 = {
      text: '✅',
      key: _0x1b224c.key
    };
    const _0x3c2a55 = {
      react: _0x4f6c44
    };
    await _0x48b276.sendMessage(_0x2fda21, _0x3c2a55);
  } catch (_0x179335) {
    _0x4ae4e7("*Error !!*");
    _0x5a61c3(_0x179335);
  }
});
const _0x1a3ff1 = {
  pattern: "setdesc",
  react: '🔖',
  desc: "To change group description"
};
function _0x6d8f75(_0x15e371, _0x149981, _0x1507b3, _0x24ab7e, _0x1d55f3) {
  return _0x5240(_0x149981 + 0x16d, _0x24ab7e);
}
_0x1a3ff1.category = "group";
_0x1a3ff1.use = ".setdesc";
_0x1a3ff1.filename = __filename;
cmd(_0x1a3ff1, async (_0x13c76c, _0x1469a8, _0x523a6c, {
  from: _0x33f04e,
  prefix: _0x297ff1,
  l: _0x97a9b9,
  quoted: _0x3b358e,
  body: _0xc58e66,
  isCmd: _0x34f6e8,
  command: _0x49b408,
  args: _0x511e52,
  q: _0x46f3b5,
  isGroup: _0x30cb1b,
  sender: _0x2d5821,
  senderNumber: _0x555564,
  botNumber2: _0x26ec2b,
  botNumber: _0x330ede,
  pushname: _0x4fe00b,
  isMe: _0x390a51,
  isOwner: _0x8cd52,
  groupMetadata: _0x14df54,
  groupName: _0x56ebc2,
  participants: _0x16d574,
  groupAdmins: _0x153467,
  isBotAdmins: _0x5447d2,
  isAdmins: _0x22f236,
  reply: _0x33e515
}) => {
  function _0x510a7f(_0x559d73, _0x394e07, _0xa68d9f, _0x3b9bb5, _0x18d981) {
    return _0x5240(_0x559d73 - 0x549 + 0x3cb, _0x18d981);
  }
  function _0x2fcf35(_0x1f61c3, _0x5af08f, _0x58bc5c, _0xd31161, _0x56b678) {
    return _0x5240(_0x56b678 + 0x129 + 0x16d, _0x1f61c3);
  }
  function _0x4d0e70(_0x408d58, _0x450d34, _0x58760e, _0x5c7ebf, _0x48a3eb) {
    return _0x5240(_0x450d34 + 0x3a0 - 0x224, _0x48a3eb);
  }
  function _0xf42b18(_0x46e1ab, _0x1b6114, _0x22ca27, _0x1bd378, _0x1570fb) {
    return _0x5240(_0x1570fb + 0x1a + 0x16d, _0x1b6114);
  }
  function _0x575507(_0x57c163, _0x18e4dc, _0x37c388, _0x187790, _0x3ce7dd) {
    return _0x5240(_0x57c163 - 0x27c + 0x16d, _0x3ce7dd);
  }
  const _0xb3db1c = {
    'EoHDZ': function (_0x547eff, _0x29a5e0) {
      return _0x547eff(_0x29a5e0);
    },
    'GJGgM': "*Already activated!*",
    'NxIAE': "*Successfully activate auto read status*",
    'yXjXE': function (_0x2de1b1, _0x4029ee) {
      return _0x2de1b1 === _0x4029ee;
    },
    'fsaFb': "fxxsP",
    'OKuJM': "1|3|2|4|0|5",
    'bJEmu': function (_0xe20f06, _0x2c63a3) {
      return _0xe20f06(_0x2c63a3);
    },
    'Mekjk': "*✅ SUCCESSFULLY CHANGED GROUP DESCRIPTION*",
    'MsbjE': function (_0x191479, _0xc7fbc2) {
      return _0x191479(_0xc7fbc2);
    },
    'gkIqP': function (_0x50602b, _0x3afa3b) {
      return _0x50602b(_0x3afa3b);
    },
    'HMwhr': function (_0x34d860, _0x242f53) {
      return _0x34d860(_0x242f53);
    },
    'dxERc': "*Error !!*",
    'WlAWr': function (_0x124acc, _0x4c95bc) {
      return _0x124acc(_0x4c95bc);
    }
  };
  try {
    if (!_0x30cb1b) {
      return _0x33e515(ONLGROUP);
    }
    if (!_0x5447d2) {
      return _0x33e515(botAdmin);
    }
    if (!_0x22f236) {
      return _0x33e515(ADMIN);
    }
    await _0x13c76c.groupUpdateDescription(_0x1469a8.chat, _0x46f3b5).then(_0x2ee48b => _0x33e515(mess.success))["catch"](_0xf13333 => _0x33e515(jsonformat(_0xf13333)));
    _0x33e515("*✅ SUCCESSFULLY CHANGED GROUP DESCRIPTION*");
    const _0x270efd = {
      text: '✅',
      key: _0x1469a8.key
    };
    const _0x1bf8cd = {
      react: _0x270efd
    };
    await _0x13c76c.sendMessage(_0x33f04e, _0x1bf8cd);
  } catch (_0x22e953) {
    _0x33e515("*Error !!*");
    _0x97a9b9(_0x22e953);
  }
});
const _0x26f285 = {
  pattern: "ephemeral",
  react: '🔖',
  desc: "To desappear & appear messages",
  category: "group",
  use: ".ephemeral",
  filename: __filename
};
cmd(_0x26f285, async (_0x11dbff, _0x38a84d, _0x3cdf2b, {
  from: _0xe424f0,
  prefix: _0x3da007,
  l: _0x306cd5,
  quoted: _0x139bbd,
  body: _0x38bd40,
  isCmd: _0x545650,
  command: _0x42e0ca,
  args: _0x44b114,
  q: _0x42e378,
  isGroup: _0x2dd1cb,
  sender: _0x397425,
  senderNumber: _0x3bd233,
  botNumber2: _0x339ce2,
  botNumber: _0x34586a,
  pushname: _0x4d1c91,
  isMe: _0x3f3ecd,
  isOwner: _0x3c6df4,
  groupMetadata: _0x275b39,
  groupName: _0x1761d9,
  participants: _0x43b2a1,
  groupAdmins: _0x452791,
  isBotAdmins: _0x4eaff1,
  isAdmins: _0x365795,
  reply: _0x5ef0ef
}) => {
  function _0x3330d3(_0x333e53, _0x37cae0, _0x41a7ba, _0x392a6b, _0x21b9f4) {
    return _0x5240(_0x392a6b - 0x456 + 0x3cb, _0x21b9f4);
  }
  function _0x673fc4(_0x517fb6, _0x27bdd2, _0x2e70ee, _0x62593c, _0x682999) {
    return _0x5240(_0x27bdd2 + 0x5c0 - 0x224, _0x682999);
  }
  function _0x49e359(_0x57b62c, _0x4ccef9, _0x1f9bcd, _0x35b7ab, _0xbfa77a) {
    return _0x5240(_0x4ccef9 - 0x572 + 0x25d, _0x35b7ab);
  }
  function _0x4c92b7(_0x27dd60, _0x5e4f5b, _0x3f9ae8, _0x50c381, _0x32c573) {
    return _0x5240(_0x5e4f5b - 0x230 + 0x3cb, _0x50c381);
  }
  function _0x4b689b(_0x38d189, _0x421f1c, _0x49ecb5, _0x1af439, _0x414527) {
    return _0x5240(_0x38d189 + 0x24c + 0x16d, _0x49ecb5);
  }
  const _0x423d30 = {
    'jglAk': "4|5|2|3|1|0",
    'DPxfa': function (_0x89d9f6, _0x405f1e) {
      return _0x89d9f6 === _0x405f1e;
    },
    'mjANq': "enable",
    'KoqKg': "disable",
    'JPTQL': function (_0x178957, _0x14fa82) {
      return _0x178957(_0x14fa82);
    },
    'eYZJq': function (_0x25fff0, _0x228592) {
      return _0x25fff0(_0x228592);
    },
    'SfGyD': function (_0x3938be, _0x26b28b) {
      return _0x3938be(_0x26b28b);
    },
    'KmpPe': "*Error !!*"
  };
  try {
    if (!_0x2dd1cb) {
      return _0x5ef0ef(ONLGROUP);
    }
    if (!_0x4eaff1) {
      return _0x5ef0ef(botAdmin);
    }
    if (!_0x365795) {
      return _0x5ef0ef(ADMIN);
    }
    if (!_0x42e378) {
      return await _0x5ef0ef(imgmsg);
    }
    if (_0x44b114[0] === "enable") {
      const _0x18779c = {
        disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
      };
      await _0x11dbff.sendMessage(_0x38a84d.chat, _0x18779c).then(_0xf87c3e => _0x5ef0ef(jsonformat(_0xf87c3e)))["catch"](_0x593f5c => _0x5ef0ef(jsonformat(_0x593f5c)));
    } else {
      if (_0x44b114[0] === "disable") {
        const _0x3837ce = {
          disappearingMessagesInChat: false
        };
        await _0x11dbff.sendMessage(_0x38a84d.chat, _0x3837ce).then(_0x2ef83 => _0x5ef0ef(jsonformat(_0x2ef83)))["catch"](_0x19f0c4 => _0x5ef0ef(jsonformat(_0x19f0c4)));
      }
    }
    const _0x3afdbe = {
      text: '✅',
      key: _0x38a84d.key
    };
    const _0x2f114d = {
      react: _0x3afdbe
    };
    await _0x11dbff.sendMessage(_0xe424f0, _0x2f114d);
  } catch (_0x25702a) {
    _0x5ef0ef("*Error !!*");
    _0x306cd5(_0x25702a);
  }
});
const _0x15f5dc = {
  pattern: "autoreadsw",
  react: '🔖',
  desc: "To desappear & appear messages",
  category: "group",
  use: ".autoreadsw",
  filename: __filename
};
cmd(_0x15f5dc, async (_0x29c39b, _0x556723, _0x557105, {
  from: _0x242623,
  prefix: _0x141ef3,
  l: _0x1cc878,
  quoted: _0x39f31c,
  body: _0x3c2306,
  isCmd: _0x4aa9a0,
  command: _0x5194da,
  args: _0x584399,
  q: _0x4b2786,
  isGroup: _0x388a79,
  sender: _0x3df413,
  senderNumber: _0x1e45fe,
  botNumber2: _0x358e91,
  botNumber: _0x4ef971,
  pushname: _0x3c2c30,
  isMe: _0x523ac5,
  isOwner: _0x598b7b,
  groupMetadata: _0x47c690,
  groupName: _0x5544d6,
  participants: _0x329653,
  groupAdmins: _0x369d8a,
  isBotAdmins: _0x51de59,
  isAdmins: _0xe50ad3,
  reply: _0x44d084
}) => {
  function _0xd7024d(_0x5ac67b, _0x5ce5a6, _0x83e222, _0x816e4, _0x28dc2b) {
    return _0x5240(_0x5ce5a6 + 0x389 - 0x224, _0x816e4);
  }
  function _0x49754f(_0x416a95, _0x5ca507, _0x32f1fd, _0x1fbbe5, _0x48e85c) {
    return _0x5240(_0x32f1fd - 0x3e8 + 0x3cb, _0x416a95);
  }
  function _0x3fcec4(_0x49bb9d, _0xf69086, _0x5ddbf4, _0x14237c, _0x250c8c) {
    return _0x5240(_0xf69086 - 0x33d + 0x16d, _0x14237c);
  }
  function _0x1577f2(_0x113535, _0x46e98c, _0x380208, _0x344916, _0x3e0d5d) {
    return _0x5240(_0x380208 + 0x35a - 0x224, _0x3e0d5d);
  }
  const _0x4a8d56 = {
    'qlBgc': function (_0x1e5a15, _0x358356) {
      return _0x1e5a15 == _0x358356;
    },
    'iKnem': function (_0x11f7c4, _0x419c1c) {
      return _0x11f7c4(_0x419c1c);
    },
    'rJYwG': "*Already activated!*",
    'OgtCl': function (_0x4d1775, _0x4aa470) {
      return _0x4d1775(_0x4aa470);
    },
    'zMgbU': "*Successfully activate auto read status*",
    'dxZko': function (_0x57b74b, _0x4d1610) {
      return _0x57b74b == _0x4d1610;
    },
    'SULrL': "off",
    'juQrx': "*Already deactivated!*",
    'caVGI': function (_0x3d2306, _0x57c20e) {
      return _0x3d2306(_0x57c20e);
    },
    'AnvtL': "*Successfully turn off auto read status*",
    'aaOVa': "Choose on or off!",
    'tEeou': function (_0x1ae239, _0x5635fb) {
      return _0x1ae239(_0x5635fb);
    },
    'YEWyO': "*Error !!*"
  };
  function _0x2f56ed(_0x3fdc99, _0x644808, _0x4749a5, _0x450f09, _0x53aa35) {
    return _0x5240(_0x450f09 - 0x441 + 0x25d, _0x644808);
  }
  try {
    if (_0x584399[0] == 'on') {
      if (autoreadsw) {
        return _0x44d084("*Already activated!*");
      }
      autoreadsw = true;
      _0x44d084("*Successfully activate auto read status*");
    } else {
      if (_0x584399[0] == "off") {
        if (!autoreadsw) {
          return _0x44d084("*Already deactivated!*");
        }
        autoreadsw = false;
        _0x44d084("*Successfully turn off auto read status*");
      } else {
        _0x44d084("Choose on or off!");
      }
    }
    const _0x4a85ba = {
      text: '✅',
      key: _0x556723.key
    };
    const _0x4125fb = {
      react: _0x4a85ba
    };
    await _0x29c39b.sendMessage(_0x242623, _0x4125fb);
  } catch (_0x3a7380) {
    _0x44d084("*Error !!*");
    _0x1cc878(_0x3a7380);
  }
});
const _0x2176f7 = {
  pattern: "delete",
  react: '🔖',
  desc: "To delete message",
  category: "group",
  use: ".delete",
  filename: __filename
};
cmd(_0x2176f7, async (_0x338b65, _0xbeb563, _0x36a712, {
  from: _0x2af23d,
  prefix: _0x1c7413,
  l: _0x5de12d,
  quoted: _0x1788f5,
  body: _0x2f64be,
  isCmd: _0x1f689e,
  command: _0x2111b7,
  args: _0x7e27a9,
  q: _0xcbb717,
  isGroup: _0x4a99ce,
  sender: _0x3c11b4,
  senderNumber: _0x1ab485,
  botNumber2: _0x3219cc,
  botNumber: _0xa20723,
  pushname: _0xc464c,
  isMe: _0x345dde,
  isOwner: _0x266905,
  groupMetadata: _0x30f25e,
  groupName: _0x15d0bb,
  participants: _0x549552,
  groupAdmins: _0x18f4b9,
  isBotAdmins: _0x47c732,
  isAdmins: _0x5aa5ed,
  reply: _0x381f39
}) => {
  function _0x222160(_0x4ca0ff, _0x57953c, _0x73232f, _0x2f0d29, _0x439bc9) {
    return _0x5240(_0x73232f - 0x38c + 0x1e6, _0x57953c);
  }
  function _0x59a0d7(_0x3ef6ff, _0x50ff1c, _0x2fbd59, _0x14b9ee, _0x18fbc7) {
    return _0x5240(_0x2fbd59 - 0x522 + 0x25d, _0x18fbc7);
  }
  function _0x335fe3(_0x268f4c, _0x307e75, _0x469dc7, _0x390ea8, _0x16af36) {
    return _0x5240(_0x16af36 - 0x33 - 0x224, _0x469dc7);
  }
  function _0x23161d(_0x2a38c8, _0x5e88be, _0x313c25, _0xdf0dac, _0x2f4dcd) {
    return _0x5240(_0x313c25 - 0x1cc + 0x1e6, _0x2a38c8);
  }
  const _0x5651dc = {
    'ipIdD': function (_0x1a6034, _0x4596e9) {
      return _0x1a6034(_0x4596e9);
    },
    'wdAeU': "*Error !!*"
  };
  function _0x288ad8(_0x3f160f, _0x5dd8ef, _0xe6408e, _0x47189, _0x2d6626) {
    return _0x5240(_0x2d6626 - 0x1d7 + 0x3cb, _0x5dd8ef);
  }
  try {
    if (!_0x36a712.quoted) {
      throw false;
    }
    let {
      chat: _0x16fea1,
      fromMe: _0x45e831,
      id: _0xd16d3a,
      isBaileys: _0x4cb00a
    } = _0x36a712.quoted;
    _0x338b65.sendMessage(_0x36a712.chat, {
      'delete': {
        'remoteJid': _0x36a712.chat,
        'fromMe': true,
        'id': _0x36a712.quoted.id,
        'participant': _0x36a712.quoted.sender
      }
    });
    const _0x39e30f = {
      text: '✅',
      key: _0xbeb563.key
    };
    const _0x7548c7 = {
      react: _0x39e30f
    };
    await _0x338b65.sendMessage(_0x2af23d, _0x7548c7);
  } catch (_0xc9cef7) {
    _0x381f39("*Error !!*");
    _0x5de12d(_0xc9cef7);
  }
});
const _0x54ecf5 = {
  pattern: "join",
  react: '🔖',
  desc: "To join a group",
  category: "group",
  use: ".join",
  filename: __filename
};
cmd(_0x54ecf5, async (_0x12304f, _0x3c5d69, _0x3e0d72, {
  from: _0x50e18e,
  prefix: _0x56f195,
  l: _0xd62a0b,
  quoted: _0x2195b5,
  body: _0x22a49d,
  isCmd: _0x18886a,
  command: _0xf44ee3,
  args: _0x24ba43,
  q: _0x33fc7f,
  isGroup: _0x4fbce8,
  sender: _0xa9ac35,
  senderNumber: _0x4d8b9d,
  botNumber2: _0x44377f,
  botNumber: _0x246fae,
  pushname: _0x20a60b,
  isMe: _0x30c0a6,
  isOwner: _0x5dc265,
  groupMetadata: _0x3a28aa,
  groupName: _0x1c888d,
  participants: _0x14f9ae,
  groupAdmins: _0x1adf39,
  isBotAdmins: _0x4769e1,
  isAdmins: _0x28e6a8,
  reply: _0x462a29
}) => {
  const _0x1dd4e1 = {
    'tAMwc': function (_0x30c182, _0x366711) {
      return _0x30c182(_0x366711);
    },
    'EMbkj': "Enter the Group Link!",
    'TEQBE': "whatsapp.com",
    'ybuGU': "Invalid Link!",
    'aDxFJ': function (_0x3cd376) {
      return _0x3cd376();
    },
    'lKxHD': "https://chat.whatsapp.com/",
    'FXlLi': function (_0x20a75a, _0x5689fc) {
      return _0x20a75a(_0x5689fc);
    },
    'dJeTA': "*Error !!*"
  };
  function _0x4d42ac(_0x31a2b1, _0x5f39ef, _0x5c1e6e, _0x248950, _0x352902) {
    return _0x5240(_0x31a2b1 + 0x352 - 0x224, _0x5f39ef);
  }
  function _0x28792a(_0x47a054, _0xae0c52, _0x11a88b, _0x59c52e, _0x5a7c21) {
    return _0x5240(_0x5a7c21 - 0x3c + 0x25d, _0x47a054);
  }
  function _0x1da3a3(_0x4f19a4, _0x4e86d7, _0x7eef2d, _0xb0c609, _0x4dd601) {
    return _0x5240(_0x7eef2d + 0x43 + 0x16d, _0xb0c609);
  }
  function _0x34ec88(_0x2ca337, _0x34f71a, _0x4ae090, _0x16a176, _0x506614) {
    return _0x5240(_0x16a176 - 0x186 + 0x3cb, _0x34f71a);
  }
  function _0x122371(_0xf9be17, _0x3d6a7f, _0x2f4def, _0x36cd31, _0x349ad9) {
    return _0x5240(_0x349ad9 - 0x85 + 0x1e6, _0x3d6a7f);
  }
  try {
    if (!_0x30c0a6) {
      return await _0x462a29(BOTOW);
    }
    if (!_0x33fc7f) {
      throw "Enter the Group Link!";
    }
    if (!isUrl(_0x24ba43[0]) && !_0x24ba43[0].includes("whatsapp.com")) {
      throw "Invalid Link!";
    }
    _0x462a29();
    let _0x4b644f = _0x24ba43[0].split("https://chat.whatsapp.com/")[1];
    await _0x12304f.groupAcceptInvite(_0x4b644f).then(_0x432d62 => _0x462a29(jsonformat(_0x432d62)))["catch"](_0x4a51cd => _0x462a29(jsonformat(_0x4a51cd)));
    const _0x119f4e = {
      text: '✅',
      key: _0x3c5d69.key
    };
    const _0x46f9df = {
      react: _0x119f4e
    };
    await _0x12304f.sendMessage(_0x50e18e, _0x46f9df);
  } catch (_0x382a42) {
    _0x462a29("*Error !!*");
    _0xd62a0b(_0x382a42);
  }
});
const _0x12fdc8 = {
  pattern: "leave",
  react: '🔖',
  desc: "To leave a group",
  category: "group",
  use: ".leave",
  filename: __filename
};
cmd(_0x12fdc8, async (_0x47d611, _0x4a6620, _0x13d1f4, {
  from: _0x42b18a,
  prefix: _0x404419,
  l: _0x1f00b9,
  quoted: _0x46999d,
  body: _0x1bd3ba,
  isCmd: _0x4ff37e,
  command: _0x5051b9,
  args: _0x25d206,
  q: _0x4f4096,
  isGroup: _0x3a042d,
  sender: _0x51fbee,
  senderNumber: _0x1acce0,
  botNumber2: _0x56a54c,
  botNumber: _0x3fdc27,
  pushname: _0x55f26a,
  isMe: _0x3656c3,
  isOwner: _0x3cce3d,
  groupMetadata: _0x5772cc,
  groupName: _0x6ceece,
  participants: _0x57dffd,
  groupAdmins: _0x19793f,
  isBotAdmins: _0x1ecab9,
  isAdmins: _0x572201,
  reply: _0x230aa5
}) => {
  const _0x59751e = {
    'mpFkn': function (_0x271e00, _0x4c3c20) {
      return _0x271e00(_0x4c3c20);
    },
    'JDglY': function (_0x151000, _0x53c322) {
      return _0x151000(_0x53c322);
    },
    'eujfk': "*Error !!*"
  };
  function _0x4be3b1(_0x533cc3, _0x3bd265, _0x3b3348, _0x3492a9, _0x31ecfa) {
    return _0x5240(_0x31ecfa + 0xc2 + 0x16d, _0x3bd265);
  }
  function _0x2fc66f(_0x2271c7, _0x179b28, _0x1cd1b1, _0x13d201, _0x420f97) {
    return _0x5240(_0x1cd1b1 + 0x1a1 - 0x224, _0x13d201);
  }
  function _0x23200e(_0xef1438, _0x5b0472, _0x28a596, _0x56c04c, _0x1c4ca3) {
    return _0x5240(_0x1c4ca3 - 0x777 + 0x3cb, _0x5b0472);
  }
  function _0x36f58a(_0x160a7f, _0x3dbe9e, _0x5b6b32, _0x449335, _0xd37a4d) {
    return _0x5240(_0x160a7f + 0x1b9 + 0x1e6, _0x5b6b32);
  }
  function _0x311c5f(_0x19a03d, _0x5816c3, _0x42acf8, _0x15843f, _0x5b072a) {
    return _0x5240(_0x5b072a + 0x218 - 0x224, _0x42acf8);
  }
  try {
    if (!_0x3656c3) {
      return await _0x230aa5(BOTOW);
    }
    await _0x47d611.groupLeave(_0x4a6620.chat).then(_0x49d981 => _0x230aa5(jsonformat(_0x49d981)))["catch"](_0x39f581 => _0x230aa5(jsonformat(_0x39f581)));
    const _0xc16120 = {
      text: '✅',
      key: _0x4a6620.key
    };
    const _0x1f63d3 = {
      react: _0xc16120
    };
    await _0x47d611.sendMessage(_0x42b18a, _0x1f63d3);
  } catch (_0x2631a5) {
    _0x230aa5("*Error !!*");
    _0x1f00b9(_0x2631a5);
  }
});
function _0x2b8bbf(_0x31875e) {
  function _0xf9670a(_0x316d71, _0x6fc10d, _0x24636c, _0x543eda, _0x44c164) {
    return _0x5240(_0x316d71 - 0x692 + 0x3cb, _0x24636c);
  }
  function _0x25fee2(_0x4664f0, _0x4e4e79, _0x286e86, _0x85fd53, _0x100ec1) {
    return _0x5240(_0x286e86 - 0x3ff + 0x16d, _0x85fd53);
  }
  function _0x1757a5(_0x4c86a8, _0x3c5e85, _0x134ec8, _0x1bb385, _0x1b172a) {
    return _0x5240(_0x3c5e85 - 0x106 + 0x25d, _0x1bb385);
  }
  function _0x13c838(_0x17fa2a, _0x50f01c, _0x19bdd5, _0x4d5ee7, _0x557a50) {
    return _0x5240(_0x4d5ee7 - 0x277 + 0x16d, _0x19bdd5);
  }
  const _0x3583e8 = {
    'Zndiv': function (_0x1c252a, _0x2c9f1b) {
      return _0x1c252a === _0x2c9f1b;
    },
    'nPFjr': "string",
    'iwbdx': "while (true) {}",
    'DPCYZ': "counter",
    'dSYCT': function (_0x4a49e6, _0x13f0b1) {
      return _0x4a49e6 !== _0x13f0b1;
    },
    'iDDDT': function (_0x49d82b, _0x42345a) {
      return _0x49d82b + _0x42345a;
    },
    'fPaNG': function (_0x265e86, _0x1aacc6) {
      return _0x265e86 / _0x1aacc6;
    },
    'wtDbt': "length",
    'aiuqV': function (_0x18d978, _0xd7cf24) {
      return _0x18d978 === _0xd7cf24;
    },
    'QOtSn': function (_0x286157, _0x3a34f0) {
      return _0x286157 % _0x3a34f0;
    },
    'gwFGX': "debu",
    'rKGYz': "gger",
    'irwNs': "action",
    'psjjF': "stateObject",
    'QTgUN': function (_0x2250b2, _0x2e8ce6) {
      return _0x2250b2(_0x2e8ce6);
    }
  };
  function _0x33e053(_0x281b7d, _0x480487, _0x42a54c, _0x1a272e, _0x108388) {
    return _0x5240(_0x480487 - 0x4c3 + 0x25d, _0x1a272e);
  }
  function _0xfad8b8(_0x28f50f) {
    if (typeof _0x28f50f === "string") {
      return function (_0x33422d) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x28f50f / _0x28f50f).length !== 1 || _0x28f50f % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    function _0x540ca2(_0x4da87f, _0x2d8807, _0x20557d, _0x28626f, _0x50ab53) {
      return _0x5240(_0x50ab53 - 0x14 - 0x106 + 0x25d, _0x4da87f);
    }
    function _0x1421ac(_0x5c0155, _0x45ad34, _0x53e3d2, _0x5d27b9, _0x472044) {
      return _0x5240(_0x45ad34 + 0x234 - 0x106 + 0x25d, _0x5c0155);
    }
    function _0x3d0deb(_0x8cf160, _0x667348, _0x4b7595, _0x5b576b, _0x1a1bcd) {
      return _0x5240(_0x4b7595 + 0x5be - 0x4c3 + 0x25d, _0x667348);
    }
    function _0x3a87f8(_0xc5e45e, _0x9dd45f, _0x442d12, _0x379c33, _0x514435) {
      return _0x5240(_0x379c33 + 0x477 - 0x277 + 0x16d, _0x514435);
    }
    function _0x26fdc5(_0x1b1cc7, _0x51989f, _0x18df3b, _0x3d1e9a, _0x388d15) {
      return _0x5240(_0x1b1cc7 + 0xdd - 0x692 + 0x3cb, _0x18df3b);
    }
    _0xfad8b8(++_0x28f50f);
  }
  try {
    if (_0x31875e) {
      return _0xfad8b8;
    } else {
      _0xfad8b8(0);
    }
  } catch (_0x3e87cd) {}
}