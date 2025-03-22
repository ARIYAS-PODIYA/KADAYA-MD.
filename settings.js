const {
  cmd,
  commands
} = require("../lib/command");
const config = require("../settings");
var {
  get_set,
  input_set
} = require("../lib/set_db");
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
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var alredy = '';
if (config.LANG === 'SI') {
  alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*";
} else {
  alredy = "*This setting alredy updated !*";
}
const _0x19a321 = {
  pattern: "newsactivate",
  react: "🗣️",
  desc: "To Activate auto news",
  category: "main",
  use: ".setprefix .",
  filename: __filename
};
cmd(_0x19a321, async (_0x120960, _0x2aeb15, _0x1b7898, {
  from: _0x3a4301,
  l: _0x42ffaa,
  quoted: _0xf11f7e,
  body: _0x8a314d,
  isCmd: _0x3adbce,
  command: _0x1ecc6c,
  args: _0x511d17,
  q: _0x5dd13b,
  isGroup: _0x282adb,
  sender: _0x2e8072,
  senderNumber: _0x4fecdc,
  botNumber2: _0x222572,
  botNumber: _0x170a8d,
  pushname: _0x59f2f5,
  isMe: _0x1c9786,
  isOwner: _0x20b46b,
  groupMetadata: _0x3d072e,
  groupName: _0x24074e,
  participants: _0x1d013d,
  groupAdmins: _0x34109f,
  isBotAdmins: _0x27218d,
  isAdmins: _0x5124f3,
  reply: _0x250791
}) => {
  try {
    if (!_0x1c9786) {
      return await _0x250791(BOTOW);
    }
    if (config.N_JID == _0x5dd13b) {
      return _0x250791("Succesfully News Change To This Section");
    }
    await input_set("N_JID", _0x5dd13b);
    return _0x250791("News was changed");
  } catch (_0x24eb1b) {
    _0x250791("*Error !!*");
    _0x42ffaa(_0x24eb1b);
  }
});
const _0x4129d2 = {
  pattern: "statusreply",
  react: "🗣️",
  desc: "To Set status Message",
  category: "main",
  use: ".statusreply .",
  filename: __filename
};
cmd(_0x4129d2, async (_0x374b07, _0x162def, _0x4832f1, {
  from: _0x368629,
  l: _0x312829,
  quoted: _0x1fa60c,
  body: _0x331688,
  isCmd: _0x320afc,
  command: _0x2204f8,
  args: _0x16f1f4,
  q: _0xc32994,
  isGroup: _0x4d5053,
  sender: _0x100c36,
  senderNumber: _0x465699,
  botNumber2: _0x2d0fe5,
  botNumber: _0x3cf7cd,
  pushname: _0x44871c,
  isMe: _0x5d4d2f,
  isOwner: _0x30d456,
  groupMetadata: _0x50efea,
  groupName: _0x13f5b0,
  participants: _0xa43889,
  groupAdmins: _0x247d95,
  isBotAdmins: _0x10dddc,
  isAdmins: _0xab4bb7,
  reply: _0x26f8ad
}) => {
  try {
    if (!_0x5d4d2f) {
      return await _0x26f8ad(BOTOW);
    }
    if (config.STATUS_REPLY_MESSAGE == _0xc32994) {
      return _0x26f8ad("Succesfully Set status reply");
    }
    await input_set("STATUS_REPLY_MESSAGE", _0xc32994);
    return _0x26f8ad("status reply was changed");
  } catch (_0x2a143) {
    _0x26f8ad("*Error !!*");
    _0x312829(_0x2a143);
  }
});
const _0x162597 = {
  pattern: "mode",
  react: "🗣️",
  desc: "To Set status Message",
  category: "main",
  use: ".mode button/nonbutton .",
  filename: __filename
};
cmd(_0x162597, async (_0x472bd7, _0x1f68e3, _0x37aece, {
  from: _0x993305,
  l: _0x5a5f07,
  quoted: _0x54fc1a,
  body: _0x54ff5d,
  isCmd: _0x4330a1,
  command: _0xe7ae15,
  args: _0x454e5a,
  q: _0x2fafc5,
  isGroup: _0xe40b15,
  sender: _0x57c94f,
  senderNumber: _0x9607cf,
  botNumber2: _0x5b7823,
  botNumber: _0x2645f0,
  pushname: _0x57ad08,
  isMe: _0xac2ffb,
  isOwner: _0x591572,
  groupMetadata: _0x4aab60,
  groupName: _0xd42c6d,
  participants: _0x12bf9f,
  groupAdmins: _0x93f8e3,
  isBotAdmins: _0x105d59,
  isAdmins: _0x17674c,
  reply: _0xbc151b
}) => {
  try {
    if (!_0xac2ffb) {
      return await _0xbc151b(BOTOW);
    }
    if (config.MODE == _0x2fafc5) {
      return _0xbc151b("Succesfully Set Mode");
    }
    await input_set("MODE", _0x2fafc5);
    if (_0x2fafc5.includes("button")) {
      return _0xbc151b("Successfully Changed to button Mode ✅");
    }
    if (_0x2fafc5.includes("nonbutton")) {
      return _0xbc151b("Successfully Changed to nonbutton Mode ✅");
    } else {
      if (!_0x2fafc5.includes("nonbutbb")) {
        return _0xbc151b("Spelling is wrong 🚫\n*correct spelling is:*\n\n*_To Activate Button Mode_*\n- .mode button\n*_To Activate NonButton Mode_*\n- .mode nonbutton");
      }
    }
  } catch (_0x37aa94) {
    _0xbc151b("*Error !!*");
    _0x5a5f07(_0x37aa94);
  }
});
const _0x2ef325 = {
  pattern: "setprefix",
  react: "🗣️",
  desc: "To change bot prefix",
  category: "main",
  use: ".setprefix ."
};
function _0x3e76bb(_0x4d8571, _0x354662, _0x5d6df8, _0x30a24f, _0x424d72) {
  return _0x15f3(_0x354662 - 0x268, _0x4d8571);
}
_0x2ef325.filename = __filename;
cmd(_0x2ef325, async (_0x5958fb, _0x2ffaae, _0x27d940, {
  from: _0x1b1ebb,
  l: _0x282827,
  quoted: _0x388752,
  body: _0x2692c9,
  isCmd: _0x262621,
  command: _0x25e027,
  args: _0x5d2039,
  q: _0x33b6c2,
  isGroup: _0x16c390,
  sender: _0x1b93ee,
  senderNumber: _0x438e0f,
  botNumber2: _0x477bc5,
  botNumber: _0xd3031,
  pushname: _0x4e7a9c,
  isMe: _0x5976c1,
  isOwner: _0x16746d,
  groupMetadata: _0x85f59a,
  groupName: _0x5de86b,
  participants: _0x1138c6,
  groupAdmins: _0x2651b2,
  isBotAdmins: _0x25df74,
  isAdmins: _0x4245a4,
  reply: _0x1417f9
}) => {
  try {
    if (!_0x5976c1) {
      return await _0x1417f9(BOTOW);
    }
    if (config.PREFIX == _0x33b6c2) {
      return _0x1417f9(alredy);
    }
    await input_set("PREFIX", _0x33b6c2);
    return _0x1417f9("prefix was changed to");
  } catch (_0x4a3977) {
    _0x1417f9("*Error !!*");
    _0x282827(_0x4a3977);
  }
});
const _0x306386 = {
  pattern: "setlogo",
  react: "🗣️",
  desc: "To change bot logo",
  category: "main",
  use: ".setlogo logo url .",
  filename: __filename
};
cmd(_0x306386, async (_0x69b876, _0x22b824, _0x54824b, {
  from: _0x4bcb92,
  l: _0x5b60e1,
  quoted: _0x55cb32,
  body: _0x271595,
  isCmd: _0x1c5222,
  command: _0x573728,
  args: _0x39a67b,
  q: _0x589f20,
  isGroup: _0x5c64ef,
  sender: _0x483fe6,
  senderNumber: _0x4a5586,
  botNumber2: _0x1a0e50,
  botNumber: _0x305f7d,
  pushname: _0x2ce043,
  isMe: _0xe994ae,
  isOwner: _0xadf85f,
  groupMetadata: _0x5c3607,
  groupName: _0x2b8fde,
  participants: _0x1c26bc,
  groupAdmins: _0x5bb561,
  isBotAdmins: _0x435171,
  isAdmins: _0x3104da,
  reply: _0x312c53
}) => {
  try {
    if (!_0xe994ae) {
      return await _0x312c53(BOTOW);
    }
    if (config.LOGO == _0x589f20) {
      return _0x312c53(alredy);
    }
    await input_set("LOGO", _0x589f20);
    return _0x312c53("Logo was changed to");
  } catch (_0x1d5a6c) {
    _0x312c53("*Error !!*");
    _0x5b60e1(_0x1d5a6c);
  }
});
const _0x3e1ae8 = {
  pattern: "autoreply",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3e1ae8, async (_0x220ff0, _0x59220e, _0x3f0802, {
  from: _0x147560,
  prefix: _0x454f30,
  l: _0x16443f,
  quoted: _0x1cb456,
  body: _0xb8c61d,
  isCmd: _0xbfcf96,
  command: _0xc39029,
  args: _0x59086b,
  q: _0x43d9f6,
  isGroup: _0x6a5d85,
  sender: _0x47a998,
  senderNumber: _0x328e42,
  botNumber2: _0x598ad0,
  botNumber: _0x5f3918,
  pushname: _0x504d19,
  isMe: _0x2ff2ba,
  isOwner: _0x2d0320,
  groupMetadata: _0x5d06a0,
  groupName: _0x3db750,
  participants: _0x159156,
  groupAdmins: _0xf39071,
  isBotAdmins: _0x29c54e,
  isAdmins: _0x681537,
  reply: _0x28e1b6,
  config: _0x1787b8
}) => {
  try {
    if (!_0x2ff2ba) {
      return await _0x28e1b6(BOTOW);
    }
    if (_0x43d9f6 == 'on') {
      if (_0x1787b8.AUTO_REPLY == "true") {
        return _0x28e1b6("already Auto reply is on ");
      }
      await input_set("AUTO_REPLY", "true");
      return _0x28e1b6("Auto Reply turned on");
    }
    if (_0x43d9f6 == "off") {
      if (_0x1787b8.AUTO_REPLY !== "true") {
        return _0x28e1b6("already Auto reply is off");
      }
      await input_set("AUTO_REPLY", "false");
      return _0x28e1b6("Auto Reply turned off");
    }
  } catch (_0x505556) {
    _0x28e1b6("*Error !!*");
    _0x16443f(_0x505556);
  }
});
const _0x1bffff = {
  pattern: "oreact",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1bffff, async (_0x177aa3, _0x5b36fb, _0x462973, {
  from: _0x27512d,
  prefix: _0x337ed4,
  l: _0x4dd281,
  quoted: _0x1b52d6,
  body: _0x587701,
  isCmd: _0x4df8ca,
  command: _0x1bea88,
  args: _0x35c9ce,
  q: _0x37369a,
  isGroup: _0x1232a9,
  sender: _0x55507e,
  senderNumber: _0x556ec9,
  botNumber2: _0x2fd211,
  botNumber: _0x1cf354,
  pushname: _0x59e0ea,
  isMe: _0x5d9e7c,
  isOwner: _0x272744,
  groupMetadata: _0x3b77ba,
  groupName: _0x370291,
  participants: _0x531ac5,
  groupAdmins: _0x24511c,
  isBotAdmins: _0x390488,
  isAdmins: _0x2fab9a,
  reply: _0x295f1c,
  config: _0x583a76
}) => {
  try {
    if (!_0x5d9e7c) {
      return await _0x295f1c(BOTOW);
    }
    if (_0x37369a == 'on') {
      if (_0x583a76.OWNER_REACT == "true") {
        return _0x295f1c("already Owner React is on ");
      }
      await input_set("OWNER_REACT", "true");
      return _0x295f1c("Owner React turned on");
    }
    if (_0x37369a == "off") {
      if (_0x583a76.OWNER_REACT !== "true") {
        return _0x295f1c("already Owner React is off");
      }
      await input_set("OWNER_REACT", "false");
      return _0x295f1c("Owner React turned off");
    }
  } catch (_0x3d1bcf) {
    _0x295f1c("*Error !!*");
    _0x4dd281(_0x3d1bcf);
  }
});
const _0x3d854c = {
  pattern: "onlygroup",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3d854c, async (_0x3991e3, _0x3de98b, _0x4e6ce9, {
  from: _0x39d020,
  prefix: _0x1f3eb8,
  l: _0x47bcef,
  quoted: _0x249034,
  body: _0x1a0c94,
  isCmd: _0x3189c3,
  command: _0x3358f3,
  args: _0x34d605,
  q: _0x21585f,
  isGroup: _0x176986,
  sender: _0x1ed108,
  senderNumber: _0x41c92b,
  botNumber2: _0x9316d3,
  botNumber: _0x570917,
  pushname: _0x1991f5,
  isMe: _0x20fdd1,
  isOwner: _0x32f145,
  groupMetadata: _0xd9086d,
  groupName: _0xe685ad,
  participants: _0x3cb1ed,
  groupAdmins: _0x32c96d,
  isBotAdmins: _0x4d3064,
  isAdmins: _0x27b81a,
  reply: _0x503aea,
  config: _0x52c060
}) => {
  try {
    if (!_0x20fdd1) {
      return await _0x503aea(BOTOW);
    }
    if (_0x21585f == 'on') {
      if (_0x52c060.ONLY_GROUP == "true") {
        return _0x503aea("already Only Group is on ");
      }
      await input_set("ONLY_GROUP", "true");
      return _0x503aea("Only Group turned on");
    }
    if (_0x21585f == "off") {
      if (_0x52c060.ONLY_GROUP !== "true") {
        return _0x503aea("already Only Group is off");
      }
      await input_set("ONLY_GROUP", "false");
      return _0x503aea("Only Group turned off");
    }
  } catch (_0x49d337) {
    _0x503aea("*Error !!*");
    _0x47bcef(_0x49d337);
  }
});
const _0x28a3e3 = {
  pattern: "onlyme",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x28a3e3, async (_0x23d691, _0x405a6e, _0x24f6c6, {
  from: _0x15a70d,
  prefix: _0x3bdc63,
  l: _0x593bdf,
  quoted: _0x1387ae,
  body: _0x43b244,
  isCmd: _0x16e672,
  command: _0xa3ef20,
  args: _0x13ace7,
  q: _0x9ee23c,
  isGroup: _0xd816fc,
  sender: _0x1b34a5,
  senderNumber: _0x1eecfb,
  botNumber2: _0x13ffc9,
  botNumber: _0x1f182c,
  pushname: _0x3a1294,
  isMe: _0x2cc9ac,
  isOwner: _0x1eb692,
  groupMetadata: _0x165328,
  groupName: _0x52dae3,
  participants: _0x1058fa,
  groupAdmins: _0x4ce41f,
  isBotAdmins: _0x4d8aaf,
  isAdmins: _0x452f5c,
  reply: _0x47cec3,
  config: _0x37f13e
}) => {
  try {
    if (!_0x2cc9ac) {
      return await _0x47cec3(BOTOW);
    }
    if (_0x9ee23c == 'on') {
      if (_0x37f13e.ONLY_ME == "true") {
        return _0x47cec3("already Only Me is on ");
      }
      await input_set("ONLY_ME", "true");
      return _0x47cec3("Only Me turned on");
    }
    if (_0x9ee23c == "off") {
      if (_0x37f13e.ONLY_ME !== "true") {
        return _0x47cec3("already Only Me is off");
      }
      await input_set("ONLY_ME", "false");
      return _0x47cec3("Only Me turned off");
    }
  } catch (_0x1085c1) {
    _0x47cec3("*Error !!*");
    _0x593bdf(_0x1085c1);
  }
});
const _0x37639b = {
  pattern: "antidelete",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x37639b, async (_0x5a69c5, _0xe7b021, _0x5d6dc4, {
  from: _0x110dc6,
  prefix: _0x84dff1,
  l: _0x16253d,
  quoted: _0x1bb2ad,
  body: _0x448cb0,
  isCmd: _0x591757,
  command: _0x52e1a1,
  args: _0x1ab556,
  q: _0xaf423,
  isGroup: _0x34f042,
  sender: _0x186a57,
  senderNumber: _0x3f0518,
  botNumber2: _0x6593a6,
  botNumber: _0x4d81f8,
  pushname: _0x50fc78,
  isMe: _0x31d75c,
  isOwner: _0x219de5,
  groupMetadata: _0x1c67a2,
  groupName: _0x319636,
  participants: _0x87b790,
  groupAdmins: _0x54b45e,
  isBotAdmins: _0x48e1bc,
  isAdmins: _0x46cc37,
  reply: _0x1acdc7,
  config: _0x194ecb
}) => {
  try {
    if (!_0x31d75c) {
      return await _0x1acdc7(BOTOW);
    }
    if (_0xaf423 == 'on') {
      if (_0x194ecb.ANTI_DELETE == "true") {
        return _0x1acdc7("already antidelete is on ");
      }
      await input_set("ANTI_DELETE", "true");
      return _0x1acdc7("Antidelete turned on");
    }
    if (_0xaf423 == "off") {
      if (_0x194ecb.ANTI_DELETE !== "true") {
        return _0x1acdc7("already antidelete is off");
      }
      await input_set("ANTI_DELETE", "false");
      return _0x1acdc7("Antidelete turned off");
    }
  } catch (_0x3fd988) {
    _0x1acdc7("*Error !!*");
    _0x16253d(_0x3fd988);
  }
});
const _0x2cda56 = {
  pattern: "anticall",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2cda56, async (_0x54480c, _0x27913c, _0x5028cf, {
  from: _0x510dac,
  prefix: _0x2aecee,
  l: _0x249bf3,
  quoted: _0x560fdf,
  body: _0x2573e3,
  isCmd: _0x1e9f2f,
  command: _0x109a50,
  args: _0x3e7d36,
  q: _0x259b42,
  isGroup: _0x217c93,
  sender: _0x682f9d,
  senderNumber: _0xee79f8,
  botNumber2: _0x21c43c,
  botNumber: _0x4e600c,
  pushname: _0x279122,
  isMe: _0x3f90ba,
  isOwner: _0x1197c1,
  groupMetadata: _0x46a291,
  groupName: _0x45523f,
  participants: _0x283ca0,
  groupAdmins: _0x2d287d,
  isBotAdmins: _0x14968a,
  isAdmins: _0x5b5d82,
  reply: _0x194e1b,
  config: _0x5abb87
}) => {
  try {
    if (!_0x3f90ba) {
      return await _0x194e1b(BOTOW);
    }
    if (_0x259b42 == 'on') {
      if (_0x5abb87.ANTI_CALL == "true") {
        return _0x194e1b("already anticall is on ");
      }
      await input_set("ANTI_CALL", "true");
      return _0x194e1b("Anticall turned on");
    }
    if (_0x259b42 == "off") {
      if (_0x5abb87.ANTI_CALL !== "true") {
        return _0x194e1b("already anticall is off");
      }
      await input_set("ANTI_CALL", "false");
      return _0x194e1b("Anticall turned off");
    }
  } catch (_0x116490) {
    _0x194e1b("*Error !!*");
    _0x249bf3(_0x116490);
  }
});
const _0x267bc8 = {
  pattern: "welcome",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x267bc8, async (_0x4b5797, _0xccf12d, _0x404dea, {
  from: _0x2466be,
  prefix: _0xecf816,
  l: _0x33cbf3,
  quoted: _0x1f454d,
  body: _0x7053d8,
  isCmd: _0x33d2c5,
  command: _0x4b1789,
  args: _0x23e103,
  q: _0x12ea65,
  isGroup: _0x193d18,
  sender: _0x478fff,
  senderNumber: _0x2649af,
  botNumber2: _0x29a6b4,
  botNumber: _0x2698c8,
  pushname: _0x46cf18,
  isMe: _0x2a8749,
  isOwner: _0x147dcc,
  groupMetadata: _0x387a0d,
  groupName: _0x15c9e9,
  participants: _0x32d2ad,
  groupAdmins: _0x55acf7,
  isBotAdmins: _0x17d0fc,
  isAdmins: _0x25d3eb,
  reply: _0xc8f223,
  config: _0x3c10ea
}) => {
  try {
    if (!_0x2a8749) {
      return await _0xc8f223(BOTOW);
    }
    if (_0x12ea65 == 'on') {
      if (_0x3c10ea.WELCOME == "true") {
        return _0xc8f223("already Welcome is on ");
      }
      await input_set("WELCOME", "true");
      return _0xc8f223("Welcome turned on");
    }
    if (_0x12ea65 == "off") {
      if (_0x3c10ea.WELCOME !== "true") {
        return _0xc8f223("already Welcome is off");
      }
      await input_set("WELCOME", "false");
      return _0xc8f223("Welcome turned off");
    }
  } catch (_0xe906ef) {
    _0xc8f223("*Error !!*");
    _0x33cbf3(_0xe906ef);
  }
});
const _0x1880f4 = {
  pattern: "mathsai",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1880f4, async (_0x42edf8, _0x58827f, _0x3fb219, {
  from: _0x5bd6b1,
  prefix: _0x1c27b0,
  l: _0x5a889e,
  quoted: _0x3c5470,
  body: _0x1c2128,
  isCmd: _0x246605,
  command: _0x598fe3,
  args: _0x29c568,
  q: _0x9ba9d0,
  isGroup: _0x156881,
  sender: _0x3bdabc,
  senderNumber: _0x2cb19c,
  botNumber2: _0x2c1608,
  botNumber: _0x326ebb,
  pushname: _0x3c1a29,
  isMe: _0x8c84fd,
  isOwner: _0x323c16,
  groupMetadata: _0x3dd557,
  groupName: _0x4bff6e,
  participants: _0x399ebc,
  groupAdmins: _0x3a8232,
  isBotAdmins: _0x12d845,
  isAdmins: _0x4640d9,
  reply: _0x15938d,
  config: _0x485bc3
}) => {
  try {
    if (!_0x8c84fd) {
      return await _0x15938d(BOTOW);
    }
    if (_0x9ba9d0 == 'on') {
      if (_0x485bc3.MATHS_AI == "true") {
        return _0x15938d("already Ai Maths is on ");
      }
      await input_set("MATHS_AI", "true");
      return _0x15938d("Ai Maths turned on");
    }
    if (_0x9ba9d0 == "off") {
      if (_0x485bc3.MATHS_AI !== "true") {
        return _0x15938d("already Ai Maths is off");
      }
      await input_set("MATHS_AI", "false");
      return _0x15938d("Ai Maths turned off");
    }
  } catch (_0x11b944) {
    _0x15938d("*Error !!*");
    _0x5a889e(_0x11b944);
  }
});
const _0x579067 = {
  pattern: "aichatbot",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x579067, async (_0x227fd7, _0x326a0a, _0x50f53d, {
  from: _0x3ac542,
  prefix: _0x11112b,
  l: _0x445b27,
  quoted: _0x2f7498,
  body: _0x4bd0bb,
  isCmd: _0x69d3a5,
  command: _0x5af5cb,
  args: _0x453d30,
  q: _0x1b6c47,
  isGroup: _0x278d46,
  sender: _0x45ae99,
  senderNumber: _0x2756d0,
  botNumber2: _0x45bcd4,
  botNumber: _0x51c82f,
  pushname: _0x51ed78,
  isMe: _0x5b3be1,
  isOwner: _0x5663e1,
  groupMetadata: _0x260649,
  groupName: _0x52a5fe,
  participants: _0xd17b92,
  groupAdmins: _0x4d8244,
  isBotAdmins: _0x422b2,
  isAdmins: _0x49c660,
  reply: _0x1331d4,
  config: _0xdb3b9e
}) => {
  try {
    if (!_0x5b3be1) {
      return await _0x1331d4(BOTOW);
    }
    if (_0x1b6c47 == 'on') {
      if (_0xdb3b9e.AI_CHATBOT == "true") {
        return _0x1331d4("already Ai Chatbot is on ");
      }
      await input_set("AI_CHATBOT", "true");
      return _0x1331d4("Ai Chatbot turned on");
    }
    if (_0x1b6c47 == "off") {
      if (_0xdb3b9e.AI_CHATBOT !== "true") {
        return _0x1331d4("already Ai Chatbot is off");
      }
      await input_set("AI_CHATBOT", "false");
      return _0x1331d4("Ai Chatbot turned off");
    }
  } catch (_0x5ab823) {
    _0x1331d4("*Error !!*");
    _0x445b27(_0x5ab823);
  }
});
const _0x5132b7 = {
  pattern: "aiimage",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5132b7, async (_0x203243, _0x11407f, _0x555504, {
  from: _0x15df93,
  prefix: _0x31b184,
  l: _0x14a61,
  quoted: _0x3247d6,
  body: _0x500b29,
  isCmd: _0x53fb34,
  command: _0xc293fb,
  args: _0xcba4dd,
  q: _0x2ebc75,
  isGroup: _0x25563b,
  sender: _0x4709af,
  senderNumber: _0x2f5ec9,
  botNumber2: _0xf73938,
  botNumber: _0x3b787a,
  pushname: _0x2f112e,
  isMe: _0x59cc34,
  isOwner: _0x4b11e4,
  groupMetadata: _0x2bedc2,
  groupName: _0x52847b,
  participants: _0x258b12,
  groupAdmins: _0x3e9a7d,
  isBotAdmins: _0x51331a,
  isAdmins: _0x3a85b5,
  reply: _0xfd71ba,
  config: _0x4c0369
}) => {
  try {
    if (!_0x59cc34) {
      return await _0xfd71ba(BOTOW);
    }
    if (_0x2ebc75 == 'on') {
      if (_0x4c0369.AI_IMAGE == "true") {
        return _0xfd71ba("already Ai Image is on ");
      }
      await input_set("AI_IMAGE", "true");
      return _0xfd71ba("Ai Image turned on");
    }
    if (_0x2ebc75 == "off") {
      if (_0x4c0369.AI_IMAGE !== "true") {
        return _0xfd71ba("already Ai Image is off");
      }
      await input_set("AI_IMAGE", "false");
      return _0xfd71ba("Ai Image turned off");
    }
  } catch (_0x5dc14e) {
    _0xfd71ba("*Error !!*");
    _0x14a61(_0x5dc14e);
  }
});
const _0x22fb45 = {
  pattern: "onlygroup",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x22fb45, async (_0x2fd70e, _0x2b4945, _0xe5ca76, {
  from: _0xb4920b,
  prefix: _0x56d1b9,
  l: _0x327a6f,
  quoted: _0x2bcd7a,
  body: _0x23abbc,
  isCmd: _0xd43ca3,
  command: _0x41423c,
  args: _0x22d5c9,
  q: _0x1ae5d2,
  isGroup: _0x24cb42,
  sender: _0x20f415,
  senderNumber: _0x45c6ec,
  botNumber2: _0x2780f8,
  botNumber: _0x202d38,
  pushname: _0x5a71d9,
  isMe: _0xc9d579,
  isOwner: _0x4bca90,
  groupMetadata: _0x1805be,
  groupName: _0x201e49,
  participants: _0x5e21be,
  groupAdmins: _0x3651f3,
  isBotAdmins: _0x15afa7,
  isAdmins: _0x38ca17,
  reply: _0x1d19d,
  config: _0x18ba47
}) => {
  try {
    if (!_0xc9d579) {
      return await _0x1d19d(BOTOW);
    }
    if (_0x1ae5d2 == 'on') {
      if (_0x18ba47.ONLY_GROUP == "true") {
        return _0x1d19d("already bot is private ");
      }
      await input_set("ONLY_GROUP", "true");
      return _0x1d19d("Bot is now private");
    }
    if (_0x1ae5d2 == "off") {
      if (_0x18ba47.ONLY_GROUP !== "true") {
        return _0x1d19d("already bot is public");
      }
      await input_set("ONLY_GROUP", "false");
      return _0x1d19d("Bot is now public");
    }
  } catch (_0x46d482) {
    _0x1d19d("*Error !!*");
    _0x327a6f(_0x46d482);
  }
});
const _0xe2914e = {};
function _0x15f3(_0x43585e, _0x5c2f6d) {
  const _0x12588c = _0x4ef2();
  _0x15f3 = function (_0x3fa10c, _0x4ef240) {
    _0x3fa10c = _0x3fa10c - 431;
    let _0x15f3f6 = _0x12588c[_0x3fa10c];
    return _0x15f3f6;
  };
  return _0x15f3(_0x43585e, _0x5c2f6d);
}
_0xe2914e.pattern = "disablepm";
_0xe2914e.react = "🗣️";
_0xe2914e.dontAddCommandList = true;
_0xe2914e.filename = __filename;
cmd(_0xe2914e, async (_0x5bc656, _0x420501, _0x4687b4, {
  from: _0x349eba,
  prefix: _0x1b0315,
  l: _0x219993,
  quoted: _0x1015b9,
  body: _0x2d56bb,
  isCmd: _0x4284d1,
  command: _0x1dce54,
  args: _0x20f111,
  q: _0x5039b8,
  isGroup: _0xa29ba6,
  sender: _0x3ddbf6,
  senderNumber: _0x2a8fa8,
  botNumber2: _0x5061cd,
  botNumber: _0xc6543b,
  pushname: _0x48f4a0,
  isMe: _0x3ec08c,
  isOwner: _0x3830a4,
  groupMetadata: _0x2ae314,
  groupName: _0x2b6d15,
  participants: _0x587e7f,
  groupAdmins: _0x4a0b5c,
  isBotAdmins: _0x3071a0,
  isAdmins: _0x57d637,
  reply: _0x1ea42a,
  config: _0x1b0f42
}) => {
  try {
    if (!_0x3ec08c) {
      return await _0x1ea42a(BOTOW);
    }
    if (_0x5039b8 == 'on') {
      if (_0x1b0f42.DISABLE_PM == "true") {
        return _0x1ea42a("already bot is Shutdown ");
      }
      await input_set("DISABLE_PM", "true");
      return _0x1ea42a("Bot is now Shutdown");
    }
    if (_0x5039b8 == "off") {
      if (_0x1b0f42.DISABLE_PM !== "true") {
        return _0x1ea42a("already bot is working public");
      }
      await input_set("DISABLE_PM", "false");
      return _0x1ea42a("Bot is now works everyone");
    }
  } catch (_0x2f6260) {
    _0x1ea42a("*Error !!*");
    _0x219993(_0x2f6260);
  }
});
const _0x18c270 = {
  pattern: "autovoice",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x18c270, async (_0xe7e50b, _0x55a87b, _0x44a724, {
  from: _0x3113fd,
  prefix: _0x2d5443,
  l: _0xbcf939,
  quoted: _0x44a3b9,
  body: _0x4766fe,
  isCmd: _0x2176b5,
  command: _0x494d52,
  args: _0x1791b6,
  q: _0x18a9ca,
  isGroup: _0x3d88e1,
  sender: _0x247824,
  senderNumber: _0x22f9c1,
  botNumber2: _0x12f712,
  botNumber: _0x4fc04d,
  pushname: _0x59008c,
  isMe: _0x2960b5,
  isOwner: _0x4936c2,
  groupMetadata: _0x2e1de7,
  groupName: _0x53e28c,
  participants: _0x1720e6,
  groupAdmins: _0x56749b,
  isBotAdmins: _0x583a50,
  isAdmins: _0x4dd6ee,
  reply: _0x5c66db,
  config: _0x30c3e6
}) => {
  try {
    if (!_0x2960b5) {
      return await _0x5c66db(BOTOW);
    }
    if (_0x18a9ca == 'on') {
      if (_0x30c3e6.AUTO_VOICE == "true") {
        return _0x5c66db("already on ");
      }
      await input_set("AUTO_VOICE", "true");
      return _0x5c66db("autovoice turned on");
    }
    if (_0x18a9ca == "off") {
      if (_0x30c3e6.AUTO_VOICE !== "true") {
        return _0x5c66db("already off");
      }
      await input_set("AUTO_VOICE", "false");
      return _0x5c66db("autovoice turned off");
    }
  } catch (_0xbb17d8) {
    _0x5c66db("*Error !!*");
    _0xbcf939(_0xbb17d8);
  }
});
const _0x3de303 = {
  pattern: "autosticker",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3de303, async (_0x4b5945, _0x26507a, _0x3e845c, {
  from: _0x3382ac,
  prefix: _0x4f31ad,
  l: _0x4e8cd9,
  quoted: _0x6f7aa0,
  body: _0x581bea,
  isCmd: _0xf26648,
  command: _0x4bbea3,
  args: _0x298965,
  q: _0x52aeb4,
  isGroup: _0x502de9,
  sender: _0x2c7753,
  senderNumber: _0x297366,
  botNumber2: _0x39f0a8,
  botNumber: _0x494c6c,
  pushname: _0x19f303,
  isMe: _0x4b4151,
  isOwner: _0x52dfbe,
  groupMetadata: _0x1f404b,
  groupName: _0x5bc640,
  participants: _0x85984,
  groupAdmins: _0x22b64c,
  isBotAdmins: _0x432d24,
  isAdmins: _0x3d6dae,
  reply: _0x3ea624,
  config: _0x3e8299
}) => {
  try {
    if (!_0x4b4151) {
      return await _0x3ea624(BOTOW);
    }
    if (_0x52aeb4 == 'on') {
      if (_0x3e8299.AUTO_STICKER == "true") {
        return _0x3ea624("already on ");
      }
      await input_set("AUTO_STICKER", "true");
      return _0x3ea624("autosticker turned on");
    }
    if (_0x52aeb4 == "off") {
      if (_0x3e8299.AUTO_STICKER !== "true") {
        return _0x3ea624("already off");
      }
      await input_set("AUTO_STICKER", "false");
      return _0x3ea624("autosticker turned off");
    }
  } catch (_0x3bbdc3) {
    _0x3ea624("*Error !!*");
    _0x4e8cd9(_0x3bbdc3);
  }
});
const _0x1fa637 = {};
function _0x46b28f(_0x7683f1, _0x166d09, _0x5b5251, _0x40f9ee, _0x47ea90) {
  return _0x15f3(_0x40f9ee - 0x1c7, _0x7683f1);
}
_0x1fa637.pattern = "autobio";
_0x1fa637.react = "🗣️";
_0x1fa637.dontAddCommandList = true;
_0x1fa637.filename = __filename;
cmd(_0x1fa637, async (_0x1a127b, _0x2c6781, _0x54bf9a, {
  from: _0x1b1456,
  prefix: _0x568183,
  l: _0x3e364d,
  quoted: _0x3fdd1b,
  body: _0x1f1433,
  isCmd: _0x211a02,
  command: _0x2e4dd3,
  args: _0x52bd61,
  q: _0x4c1b11,
  isGroup: _0x9c7d79,
  sender: _0x58b00d,
  senderNumber: _0x30379f,
  botNumber2: _0x282c8c,
  botNumber: _0x49f2e2,
  pushname: _0x1b9c57,
  isMe: _0x102d30,
  isOwner: _0x3aa139,
  groupMetadata: _0x22ce85,
  groupName: _0x34a104,
  participants: _0x305c43,
  groupAdmins: _0x51de4e,
  isBotAdmins: _0xacec82,
  isAdmins: _0x4782ce,
  reply: _0x3f20dc,
  config: _0x5e679c
}) => {
  try {
    if (!_0x102d30) {
      return await _0x3f20dc(BOTOW);
    }
    if (_0x4c1b11 == 'on') {
      if (_0x5e679c.AUTO_BIO == "true") {
        return _0x3f20dc("already on ");
      }
      await input_set("AUTO_BIO", "true");
      return _0x3f20dc("autobio turned on");
    }
    if (_0x4c1b11 == "off") {
      if (_0x5e679c.AUTO_BIO !== "true") {
        return _0x3f20dc("already off");
      }
      await input_set("AUTO_BIO", "false");
      return _0x3f20dc("autobio turned off");
    }
  } catch (_0x53f185) {
    _0x3f20dc("*Error !!*");
    _0x3e364d(_0x53f185);
  }
});
const _0x4ca1c7 = {};
function _0x4cbe8a(_0x2e7ef1, _0x4e2a99, _0x5c8ab4, _0x43adcf, _0x4968e5) {
  return _0x15f3(_0x4e2a99 + 0x195, _0x43adcf);
}
_0x4ca1c7.pattern = "autowelcome";
_0x4ca1c7.react = "🗣️";
_0x4ca1c7.dontAddCommandList = true;
_0x4ca1c7.filename = __filename;
cmd(_0x4ca1c7, async (_0x1faa46, _0x108e14, _0x4ef304, {
  from: _0x230a89,
  prefix: _0x1cd2b7,
  l: _0x50010f,
  quoted: _0x160e82,
  body: _0xc0b44f,
  isCmd: _0x1c7d53,
  command: _0x50b63f,
  args: _0x4a7000,
  q: _0x198167,
  isGroup: _0x47de07,
  sender: _0x453104,
  senderNumber: _0x320486,
  botNumber2: _0x47e671,
  botNumber: _0x1fd174,
  pushname: _0x53a7c7,
  isMe: _0x4a4b31,
  isOwner: _0x1e90c0,
  groupMetadata: _0x47ff6a,
  groupName: _0x23cb5c,
  participants: _0x46ae04,
  groupAdmins: _0x4f7548,
  isBotAdmins: _0x5ebb4b,
  isAdmins: _0x12a05f,
  reply: _0x4022fc,
  config: _0xdd53a
}) => {
  try {
    if (!_0x4a4b31) {
      return await _0x4022fc(BOTOW);
    }
    if (_0x198167 == 'on') {
      if (_0xdd53a.WELCOME == "true") {
        return _0x4022fc("already on ");
      }
      await input_set("WELCOME", "true");
      return _0x4022fc("autowelcome turned on");
    }
    if (_0x198167 == "off") {
      if (_0xdd53a.WELCOME !== "true") {
        return _0x4022fc("already off");
      }
      await input_set("WELCOME", "false");
      return _0x4022fc("autowelcome turned off");
    }
  } catch (_0x536b12) {
    _0x4022fc("*Error !!*");
    _0x50010f(_0x536b12);
  }
});
function _0x18334a(_0x2acae5, _0x2bc963, _0x19bf5a, _0x17c85c, _0x53a48f) {
  return _0x15f3(_0x2bc963 - 0x31a, _0x2acae5);
}
const _0x3a4ca0 = {
  pattern: "antibot",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3a4ca0, async (_0x2bfb82, _0x4ef2f3, _0x10778a, {
  from: _0x3ba20d,
  prefix: _0x53d19b,
  l: _0x200310,
  quoted: _0xbe62ee,
  body: _0x129121,
  isCmd: _0x39ac18,
  command: _0x115169,
  args: _0x58a2fc,
  q: _0x1a59b5,
  isGroup: _0x2c58cc,
  sender: _0xcb8d9,
  senderNumber: _0x1e0cfe,
  botNumber2: _0x2c0e5e,
  botNumber: _0x16c454,
  pushname: _0xf975a8,
  isMe: _0x426ed2,
  isOwner: _0x28f155,
  groupMetadata: _0x2534c5,
  groupName: _0x31b42c,
  participants: _0x23e627,
  groupAdmins: _0x41224d,
  isBotAdmins: _0x453b95,
  isAdmins: _0x2dac7d,
  reply: _0x5ec532,
  config: _0x3f8ac1
}) => {
  try {
    if (!_0x426ed2) {
      return await _0x5ec532(BOTOW);
    }
    if (_0x1a59b5 == 'on') {
      if (_0x3f8ac1.ANTI_BOT == "true") {
        return _0x5ec532("already on ");
      }
      await input_set("ANTI_BOT", "true");
      return _0x5ec532("antibot turned on");
    }
    if (_0x1a59b5 == "off") {
      if (_0x3f8ac1.ANTI_BOT !== "true") {
        return _0x5ec532("already off");
      }
      await input_set("ANTI_BOT", "false");
      return _0x5ec532("antibot turned off");
    }
  } catch (_0x7a4199) {
    _0x5ec532("*Error !!*");
    _0x200310(_0x7a4199);
  }
});
const _0x13b1c6 = {
  pattern: "antilink",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x13b1c6, async (_0x1395c2, _0x4bab99, _0xc30a00, {
  from: _0x20cd3d,
  prefix: _0x24fb5a,
  l: _0x2afc30,
  quoted: _0xb0537b,
  body: _0x7178c8,
  isCmd: _0x39fd82,
  command: _0x2fdaeb,
  args: _0x11b483,
  q: _0x2ba59d,
  isGroup: _0x6c2874,
  sender: _0x38a17f,
  senderNumber: _0x3df220,
  botNumber2: _0x63b1f6,
  botNumber: _0x342f40,
  pushname: _0x490840,
  isMe: _0x2cac2b,
  isOwner: _0x4c5a0b,
  groupMetadata: _0x5e12f2,
  groupName: _0x24033a,
  participants: _0x2e16bf,
  groupAdmins: _0x1ab7bf,
  isBotAdmins: _0x4da821,
  isAdmins: _0x1f4ef9,
  reply: _0x506905,
  config: _0x5e555f
}) => {
  try {
    if (!_0x2cac2b) {
      return await _0x506905(BOTOW);
    }
    if (_0x2ba59d == 'on') {
      if (_0x5e555f.ANTI_LINK == "true") {
        return _0x506905("already on ");
      }
      await input_set("ANTI_LINK", "true");
      return _0x506905("antilink turned on");
    }
    if (_0x2ba59d == "off") {
      if (_0x5e555f.ANTI_LINK !== "true") {
        return _0x506905("already off");
      }
      await input_set("ANTI_LINK", "false");
      return _0x506905("antilink turned off");
    }
  } catch (_0xedd432) {
    _0x506905("*Error !!*");
    _0x2afc30(_0xedd432);
  }
});
const _0x1df499 = {
  pattern: "antibad",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1df499, async (_0x2f0f46, _0x446f55, _0x1f8519, {
  from: _0x2669e1,
  prefix: _0x41abf3,
  l: _0x3391f3,
  quoted: _0x4421fe,
  body: _0x5d17f0,
  isCmd: _0x4e69c4,
  command: _0x578d6b,
  args: _0x4024df,
  q: _0x37e014,
  isGroup: _0x3e3f1c,
  sender: _0x88201,
  senderNumber: _0x2c40d8,
  botNumber2: _0x553d51,
  botNumber: _0x281db0,
  pushname: _0x27bc72,
  isMe: _0x167789,
  isOwner: _0x2f8f65,
  groupMetadata: _0x5c7e47,
  groupName: _0x50de71,
  participants: _0x1c9a17,
  groupAdmins: _0x5f456a,
  isBotAdmins: _0x51fa36,
  isAdmins: _0x9b5e7a,
  reply: _0x90b194,
  config: _0xf07036
}) => {
  try {
    if (!_0x167789) {
      return await _0x90b194(BOTOW);
    }
    if (_0x37e014 == 'on') {
      if (_0xf07036.ANTI_BAD == "true") {
        return _0x90b194("already on ");
      }
      await input_set("ANTI_BAD", "true");
      return _0x90b194("antibad turned on");
    }
    if (_0x37e014 == "off") {
      if (_0xf07036.ANTI_BAD !== "true") {
        return _0x90b194("already off");
      }
      await input_set("ANTI_BAD", "false");
      return _0x90b194("antibad turned off");
    }
  } catch (_0x2e246a) {
    _0x90b194("*Error !!*");
    _0x3391f3(_0x2e246a);
  }
});
const _0x18a117 = {
  pattern: "autostatus",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x18a117, async (_0x1ec775, _0x111230, _0x5e23c7, {
  from: _0x54c3ea,
  prefix: _0xff23ab,
  l: _0x5c6ce8,
  quoted: _0x57d070,
  body: _0x14986d,
  isCmd: _0xd3448e,
  command: _0x2d09cc,
  args: _0x301901,
  q: _0x105722,
  isGroup: _0x166512,
  sender: _0x44661b,
  senderNumber: _0x562497,
  botNumber2: _0x52026d,
  botNumber: _0x27832e,
  pushname: _0x57bf37,
  isMe: _0x13e20e,
  isOwner: _0x58dc01,
  groupMetadata: _0x11f5ed,
  groupName: _0x570bea,
  participants: _0xd928a2,
  groupAdmins: _0x5558ff,
  isBotAdmins: _0x33ea62,
  isAdmins: _0x3f1d7e,
  reply: _0x19ced8,
  config: _0x266bb8
}) => {
  try {
    if (!_0x13e20e) {
      return await _0x19ced8(BOTOW);
    }
    if (_0x105722 == 'on') {
      if (_0x266bb8.AUTO_STATUS_READ == "true") {
        return _0x19ced8("already on ");
      }
      await input_set("AUTO_STATUS_READ", "true");
      return _0x19ced8("autostatus turned on");
    }
    if (_0x105722 == "off") {
      if (_0x266bb8.AUTO_STATUS_READ !== "true") {
        return _0x19ced8("already off");
      }
      await input_set("AUTO_STATUS_READ", "false");
      return _0x19ced8("autostatus turned off");
    }
  } catch (_0x58de01) {
    _0x19ced8("*Error !!*");
    _0x5c6ce8(_0x58de01);
  }
});
const _0x12d08f = {
  pattern: "autotyping",
  react: "🗣️",
  dontAddCommandList: true
};
function _0x58ba33(_0x1c1b78, _0x552134, _0x1c2179, _0x3c457c, _0x5b6448) {
  return _0x15f3(_0x5b6448 + 0x24d, _0x1c2179);
}
_0x12d08f.filename = __filename;
cmd(_0x12d08f, async (_0x1146df, _0x487521, _0x441489, {
  from: _0x52ab2a,
  prefix: _0x547081,
  l: _0x25ac34,
  quoted: _0x3fff42,
  body: _0x4de34c,
  isCmd: _0x47bcf4,
  command: _0x1780ca,
  args: _0x3051ae,
  q: _0x5ef95a,
  isGroup: _0x3104eb,
  sender: _0x33fee0,
  senderNumber: _0x35f0f6,
  botNumber2: _0x434dd1,
  botNumber: _0xbc0216,
  pushname: _0x5446a2,
  isMe: _0x3753ae,
  isOwner: _0x390748,
  groupMetadata: _0x2a4f6b,
  groupName: _0x5b2f2b,
  participants: _0x6762cc,
  groupAdmins: _0x2ae9b7,
  isBotAdmins: _0x3a222b,
  isAdmins: _0x2e0b2c,
  reply: _0x69b640,
  config: _0xb0fa2a
}) => {
  try {
    if (!_0x3753ae) {
      return await _0x69b640(BOTOW);
    }
    if (_0x5ef95a == 'on') {
      if (_0xb0fa2a.AUTO_TYPING == "true") {
        return _0x69b640("already on ");
      }
      await input_set("AUTO_TYPING", "true");
      return _0x69b640("autotyping turned on");
    }
    if (_0x5ef95a == "off") {
      if (_0xb0fa2a.AUTO_TYPING !== "true") {
        return _0x69b640("already off");
      }
      await input_set("AUTO_TYPING", "false");
      return _0x69b640("autotyping turned off");
    }
  } catch (_0x583f60) {
    _0x69b640("*Error !!*");
    _0x25ac34(_0x583f60);
  }
});
const _0x5b9083 = {
  pattern: "autorecording",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5b9083, async (_0x4c47b3, _0x5e6f86, _0xb6e071, {
  from: _0x201497,
  prefix: _0x55c8d8,
  l: _0xb2e306,
  quoted: _0x1346ba,
  body: _0x298e1e,
  isCmd: _0xf7dd7,
  command: _0x9d12d2,
  args: _0x55aca8,
  q: _0xfaa898,
  isGroup: _0x516f5c,
  sender: _0x523b7b,
  senderNumber: _0x2e15cc,
  botNumber2: _0x2cf89b,
  botNumber: _0xa146c0,
  pushname: _0x22b7d1,
  isMe: _0x4be746,
  isOwner: _0x1d7775,
  groupMetadata: _0x6e3058,
  groupName: _0x203dce,
  participants: _0x1e0328,
  groupAdmins: _0x549a55,
  isBotAdmins: _0x13055a,
  isAdmins: _0xf3a989,
  reply: _0x254ee4,
  config: _0x5ec6ee
}) => {
  try {
    if (!_0x4be746) {
      return await _0x254ee4(BOTOW);
    }
    if (_0xfaa898 == 'on') {
      if (_0x5ec6ee.AUTO_RECORDING == "true") {
        return _0x254ee4("already on ");
      }
      await input_set("AUTO_RECORDING", "true");
      return _0x254ee4("autorecording turned on");
    }
    if (_0xfaa898 == "off") {
      if (_0x5ec6ee.AUTO_RECORDING !== "true") {
        return _0x254ee4("already off");
      }
      await input_set("AUTO_RECORDING", "false");
      return _0x254ee4("autorecording turned off");
    }
  } catch (_0x2b4531) {
    _0x254ee4("*Error !!*");
    _0xb2e306(_0x2b4531);
  }
});
const _0x13ccbf = {
  pattern: "autoread",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x13ccbf, async (_0x2d94ec, _0x1fa4a3, _0x4fa23a, {
  from: _0x3f0f52,
  prefix: _0x2a333e,
  l: _0x5a8c35,
  quoted: _0x1fef0b,
  body: _0x6c167f,
  isCmd: _0x379175,
  command: _0x127990,
  args: _0x2dd429,
  q: _0x183992,
  isGroup: _0x38923a,
  sender: _0x3b0054,
  senderNumber: _0x3e2de3,
  botNumber2: _0xf725e6,
  botNumber: _0x5e0aa6,
  pushname: _0x385fd9,
  isMe: _0x26ff85,
  isOwner: _0xc9ace4,
  groupMetadata: _0xd77e6b,
  groupName: _0x34b011,
  participants: _0x1bfbf8,
  groupAdmins: _0x1e5232,
  isBotAdmins: _0x36c558,
  isAdmins: _0x470b44,
  reply: _0x27cbca,
  config: _0x5e9428
}) => {
  try {
    if (!_0x26ff85) {
      return await _0x27cbca(BOTOW);
    }
    if (_0x183992 == 'on') {
      if (_0x5e9428.AUTO_READ == "true") {
        return _0x27cbca("already on ");
      }
      await input_set("AUTO_READ", "true");
      return _0x27cbca("autoread turned on");
    }
    if (_0x183992 == "off") {
      if (_0x5e9428.AUTO_READ !== "true") {
        return _0x27cbca("already off");
      }
      await input_set("AUTO_READ", "false");
      return _0x27cbca("autoread turned off");
    }
  } catch (_0x128c45) {
    _0x27cbca("*Error !!*");
    _0x5a8c35(_0x128c45);
  }
});
const _0x20f169 = {
  pattern: "cmdread",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x20f169, async (_0x41febb, _0x46f2b4, _0x164454, {
  from: _0x4639d4,
  prefix: _0x4c03bb,
  l: _0x571f6c,
  quoted: _0x388e93,
  body: _0x3b3884,
  isCmd: _0x53777f,
  command: _0x5d20f9,
  args: _0x42bf6b,
  q: _0x307de3,
  isGroup: _0x4f8781,
  sender: _0x2819d4,
  senderNumber: _0x356e19,
  botNumber2: _0x58776a,
  botNumber: _0x436a6c,
  pushname: _0x437498,
  isMe: _0x119ae9,
  isOwner: _0x82e5c4,
  groupMetadata: _0x342fbb,
  groupName: _0x3f8921,
  participants: _0x5628cf,
  groupAdmins: _0xfa5481,
  isBotAdmins: _0x5c79ef,
  isAdmins: _0x5751a8,
  reply: _0x17b588,
  config: _0x3e8bb3
}) => {
  try {
    if (!_0x119ae9) {
      return await _0x17b588(BOTOW);
    }
    if (_0x307de3 == 'on') {
      if (_0x3e8bb3.READ_CMD_ONLY == "true") {
        return _0x17b588("already on ");
      }
      await input_set("READ_CMD_ONLY", "true");
      return _0x17b588("cmdread turned on");
    }
    if (_0x307de3 == "off") {
      if (_0x3e8bb3.READ_CMD_ONLY !== "true") {
        return _0x17b588("already off");
      }
      await input_set("READ_CMD_ONLY", "false");
      return _0x17b588("cmdread turned off");
    }
  } catch (_0x71b2bb) {
    _0x17b588("*Error !!*");
    _0x571f6c(_0x71b2bb);
  }
});
const _0x311204 = {
  pattern: "autoreact",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x311204, async (_0x44e11f, _0xf7cb6, _0x1e9929, {
  from: _0x56ac06,
  prefix: _0x1b30df,
  l: _0x143271,
  quoted: _0x11a57f,
  body: _0x57e92b,
  isCmd: _0x3ff8ef,
  command: _0x9f218b,
  args: _0x3d07cb,
  q: _0x166c0e,
  isGroup: _0xe0e868,
  sender: _0x4723cc,
  senderNumber: _0x5ee8c2,
  botNumber2: _0x350bf6,
  botNumber: _0x2f5b52,
  pushname: _0x204e32,
  isMe: _0x2ce8aa,
  isOwner: _0x4a2b36,
  groupMetadata: _0x542906,
  groupName: _0x575a87,
  participants: _0x3ea68f,
  groupAdmins: _0x4a2d8c,
  isBotAdmins: _0x1a0d2a,
  isAdmins: _0x387821,
  reply: _0x374050,
  config: _0x1c20ff
}) => {
  try {
    if (!_0x2ce8aa) {
      return await _0x374050(BOTOW);
    }
    if (_0x166c0e == 'on') {
      if (_0x1c20ff.AUTO_REACT == "true") {
        return _0x374050("already on ");
      }
      await input_set("AUTO_REACT", "true");
      return _0x374050("autoreact turned on");
    }
    if (_0x166c0e == "off") {
      if (_0x1c20ff.AUTO_REACT !== "true") {
        return _0x374050("already off");
      }
      await input_set("AUTO_REACT", "false");
      return _0x374050("autoreact turned off");
    }
  } catch (_0xf0c31a) {
    _0x374050("*Error !!*");
    _0x143271(_0xf0c31a);
  }
});
(function () {
  const _0x45cb5e = function () {
    let _0x57b0b7;
    try {
      _0x57b0b7 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x2b49eb) {
      _0x57b0b7 = window;
    }
    return _0x57b0b7;
  };
  const _0x4a4fa6 = _0x45cb5e();
  _0x4a4fa6.setInterval(_0x1a8e46, 10000);
})();
const _0x995ec4 = {
  pattern: "alwaysonline",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x995ec4, async (_0x1db0b4, _0x91bb6e, _0x4e6f81, {
  from: _0x245d7e,
  prefix: _0x3d10cc,
  l: _0xcae438,
  quoted: _0x5c2e96,
  body: _0x2aa87d,
  isCmd: _0x20314e,
  command: _0x2ddf15,
  args: _0x3b6631,
  q: _0x1e261a,
  isGroup: _0x934de3,
  sender: _0x1748cd,
  senderNumber: _0x1327a2,
  botNumber2: _0x1c8a0d,
  botNumber: _0x4a5b6c,
  pushname: _0xe4b26c,
  isMe: _0x3341f6,
  isOwner: _0x1d8af4,
  groupMetadata: _0x319a8b,
  groupName: _0x2f6996,
  participants: _0x3957ab,
  groupAdmins: _0x3d032b,
  isBotAdmins: _0x3b2498,
  isAdmins: _0x4922b6,
  reply: _0x1b2e46,
  config: _0x589677
}) => {
  try {
    if (!_0x3341f6) {
      return await _0x1b2e46(BOTOW);
    }
    if (_0x1e261a == 'on') {
      if (_0x589677.ALWAYS_ONLINE == "true") {
        return _0x1b2e46("already on ");
      }
      await input_set("ALWAYS_ONLINE", "true");
      return _0x1b2e46("alwaysonline turned on");
    }
    if (_0x1e261a == "off") {
      if (_0x589677.ALWAYS_ONLINE !== "true") {
        return _0x1b2e46("already off");
      }
      await input_set("ALWAYS_ONLINE", "false");
      return _0x1b2e46("alwaysonline turned off");
    }
  } catch (_0x1ae9aa) {
    _0x1b2e46("*Error !!*");
    _0xcae438(_0x1ae9aa);
  }
});
const _0x40fd39 = {
  pattern: "autoblock",
  react: "🗣️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x40fd39, async (_0xce01c0, _0x399aae, _0x49c79a, {
  from: _0x21adf7,
  prefix: _0x23aa77,
  l: _0x25dc56,
  quoted: _0x74c39e,
  body: _0x2f70a6,
  isCmd: _0x385969,
  command: _0x106efa,
  args: _0x24fbc8,
  q: _0x1ff3b3,
  isGroup: _0x129ae7,
  sender: _0x2e5288,
  senderNumber: _0x14c9d2,
  botNumber2: _0x314f8f,
  botNumber: _0x491b05,
  pushname: _0x2b02b8,
  isMe: _0x511933,
  isOwner: _0x435841,
  groupMetadata: _0x28a978,
  groupName: _0x1542f4,
  participants: _0x2bf0f3,
  groupAdmins: _0x555c85,
  isBotAdmins: _0x4dbbfd,
  isAdmins: _0x5cd400,
  reply: _0x3b8e60,
  config: _0x118511
}) => {
  try {
    if (!_0x511933) {
      return await _0x3b8e60(BOTOW);
    }
    if (_0x1ff3b3 == 'on') {
      if (_0x118511.AUTO_BLOCK == "true") {
        return _0x3b8e60("already on ");
      }
      await input_set("AUTO_BLOCK", "true");
      return _0x3b8e60("Auto block turned on");
    }
    if (_0x1ff3b3 == "off") {
      if (_0x118511.AUTO_BLOCK !== "true") {
        return _0x3b8e60("already off");
      }
      await input_set("AUTO_BLOCK", "false");
      return _0x3b8e60("Auto block turned off");
    }
  } catch (_0x9d3f66) {
    _0x3b8e60("*Error !!*");
    _0x25dc56(_0x9d3f66);
  }
});
const _0x1c24b6 = {
  pattern: "settings",
  react: '⚙️',
  desc: "setting list",
  category: "main",
  use: ".settings",
  filename: __filename
};
cmd(_0x1c24b6, async (_0x130dca, _0x3c6297, _0x12a0ae, {
  from: _0x4b5106,
  l: _0x40f031,
  quoted: _0x1c86ca,
  prefix: _0x1e07d4,
  body: _0x5999a4,
  isCmd: _0x38b298,
  command: _0x5e22ad,
  args: _0x409076,
  q: _0x2d05ed,
  isGroup: _0x331449,
  sender: _0x51551a,
  senderNumber: _0x3da467,
  botNumber2: _0x4b3d80,
  botNumber: _0x470ffb,
  pushname: _0x90e7cc,
  isMe: _0x313ea4,
  isOwner: _0x59c9f1,
  groupMetadata: _0x2db8ad,
  groupName: _0x40415e,
  participants: _0x51521c,
  groupAdmins: _0x3e764a,
  isBotAdmins: _0x32baa5,
  isAdmins: _0x4e02cf,
  reply: _0x338676
}) => {
  try {
    if (!_0x313ea4) {
      return await _0x338676(BOTOW);
    }
    const _0xa0f1b4 = [{
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[1] 𝗕𝗢𝗧 𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x1e07d4 + "onlygroup on " + _0x2d05ed,
        'description': "To Put Bot Private 🔑"
      }, {
        'title': "    1.2",
        'rowId': _0x1e07d4 + "onlygroup off " + _0x2d05ed,
        'description': "To Put Bot Public 🔑"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[2] 𝗕𝗢𝗧 𝗦𝗛𝗨𝗧𝗗𝗢𝗪𝗡 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    2.1",
        'rowId': _0x1e07d4 + "disablepm on " + _0x2d05ed,
        'description': "To Put Bot Shutdown 🔑"
      }, {
        'title': "    2.2",
        'rowId': _0x1e07d4 + "disablepm off " + _0x2d05ed,
        'description': "To Put Bot Public 🔑"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[3] 𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    3.1",
        'rowId': _0x1e07d4 + "autovoice on " + _0x2d05ed,
        'description': "To Enable Auto Voice 🔑"
      }, {
        'title': "    3.2",
        'rowId': _0x1e07d4 + "autovoice off " + _0x2d05ed,
        'description': "To Disable Auto Voice Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[4] 𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    4.1",
        'rowId': _0x1e07d4 + "autosticker on " + _0x2d05ed,
        'description': "To Enable Auto Sticker On 🔑"
      }, {
        'title': "    4.2",
        'rowId': _0x1e07d4 + "autosticker off " + _0x2d05ed,
        'description': "To Disable Auto Sticker Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[5] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    5.1",
        'rowId': _0x1e07d4 + "autoreply on " + _0x2d05ed,
        'description': "To Enable Auto reply On 🔑"
      }, {
        'title': "    5.2",
        'rowId': _0x1e07d4 + "autoreply off " + _0x2d05ed,
        'description': "To Disable Auto reply Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[6] 𝗔𝗨𝗧𝗢 𝗕𝗜𝗢 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    6.1",
        'rowId': _0x1e07d4 + "autobio on " + _0x2d05ed,
        'description': "To Enable Auto Bio On 🔑"
      }, {
        'title': "    6.2",
        'rowId': _0x1e07d4 + "autobio off " + _0x2d05ed,
        'description': "To Disable Auto Bio Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[7] 𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗩𝗜𝗘𝗪 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    7.1",
        'rowId': _0x1e07d4 + "autostatus on " + _0x2d05ed,
        'description': "To Enable Auto Status On 🔑"
      }, {
        'title': "    7.2",
        'rowId': _0x1e07d4 + "autostatus off " + _0x2d05ed,
        'description': "To Disable Auto Status Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[8] 𝗔𝗨𝗧𝗢 𝗧𝗬𝗣𝗜𝗡𝗚 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    8.1",
        'rowId': _0x1e07d4 + "autotyping on " + _0x2d05ed,
        'description': "To Enable Auto Typing On 🔑"
      }, {
        'title': "    8.2",
        'rowId': _0x1e07d4 + "autotyping off " + _0x2d05ed,
        'description': "To Disable Auto Typing Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[9] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    9.1",
        'rowId': _0x1e07d4 + "autorecording on " + _0x2d05ed,
        'description': "To Enable Auto Recording On 🔑"
      }, {
        'title': "    9.2",
        'rowId': _0x1e07d4 + "autorecording off " + _0x2d05ed,
        'description': "To Disable Auto Recording Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[10] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    10.1",
        'rowId': _0x1e07d4 + "autoread on " + _0x2d05ed,
        'description': "To Enable Auto Read On 🔑"
      }, {
        'title': "    10.2",
        'rowId': _0x1e07d4 + "autoread off " + _0x2d05ed,
        'description': "To Disable Auto Read Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[11] 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    11.1",
        'rowId': _0x1e07d4 + "autoreact on " + _0x2d05ed,
        'description': "To Enable Auto React On 🔑"
      }, {
        'title': "    11.2",
        'rowId': _0x1e07d4 + "autoreact off " + _0x2d05ed,
        'description': "To Disable Auto React Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[12] 𝗔𝗨𝗧𝗢 𝗔𝗟𝗪𝗔𝗬𝗦 𝗢𝗡𝗟𝗜𝗡𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    12.1",
        'rowId': _0x1e07d4 + "alwaysonline on " + _0x2d05ed,
        'description': "To Enable Always Online On 🔑"
      }, {
        'title': "    12.2",
        'rowId': _0x1e07d4 + "alwaysonline off " + _0x2d05ed,
        'description': "To Disable Always Online Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[13] 𝗔𝗨𝗧𝗢 𝗡𝗢 𝗕𝗟𝗢𝗖𝗞 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    13.1",
        'rowId': _0x1e07d4 + "autoblock on " + _0x2d05ed,
        'description': "To Enable Block On 🔑"
      }, {
        'title': "    13.2",
        'rowId': _0x1e07d4 + "autoblock off " + _0x2d05ed,
        'description': "To Disable Block Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[14] 𝗔𝗨𝗧𝗢 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    14.1",
        'rowId': _0x1e07d4 + "autowelcome on " + _0x2d05ed,
        'description': "To Enable Auto Welcome On 🔑"
      }, {
        'title': "    14.2",
        'rowId': _0x1e07d4 + "autowelcome off " + _0x2d05ed,
        'description': "To Disable Auto Welcome Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[15] 𝗔𝗡𝗧𝗜 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    15.1",
        'rowId': _0x1e07d4 + "antibot on " + _0x2d05ed,
        'description': "To Enable AntiBot On 🔑"
      }, {
        'title': "    15.2",
        'rowId': _0x1e07d4 + "antibot off " + _0x2d05ed,
        'description': "To Disable AntiBot Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[16] 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    16.1",
        'rowId': _0x1e07d4 + "antilink on " + _0x2d05ed,
        'description': "To Enable AntiLink On 🔑"
      }, {
        'title': "    16.2",
        'rowId': _0x1e07d4 + "antilink off " + _0x2d05ed,
        'description': "To Disable AntiLink Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[17] 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    17.1",
        'rowId': _0x1e07d4 + "antibad on " + _0x2d05ed,
        'description': "To Enable AntiBad On 🔑"
      }, {
        'title': "    17.2",
        'rowId': _0x1e07d4 + "antibad off " + _0x2d05ed,
        'description': "To Disable AntiBad Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[18] 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    18.1",
        'rowId': _0x1e07d4 + "antidelete on " + _0x2d05ed,
        'description': "To Enable AntiDelete On 🔑"
      }, {
        'title': "    18.2",
        'rowId': _0x1e07d4 + "antidelete off " + _0x2d05ed,
        'description': "To Disable AntiDelete Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[19] 𝗔𝗡𝗧𝗜 𝗖𝗔𝗟𝗟 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    19.1",
        'rowId': _0x1e07d4 + "anticall on " + _0x2d05ed,
        'description': "To Enable AntiCall On 🔑"
      }, {
        'title': "    19.2",
        'rowId': _0x1e07d4 + "anticall off " + _0x2d05ed,
        'description': "To Disable AntiCall Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[20] 𝗔𝗜 𝗜𝗠𝗔𝗚𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    20.1",
        'rowId': _0x1e07d4 + "aiimage on " + _0x2d05ed,
        'description': "To Enable Ai Image On 🔑"
      }, {
        'title': "    20.2",
        'rowId': _0x1e07d4 + "aiimage off " + _0x2d05ed,
        'description': "To Disable Ai Image Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[21] 𝗔𝗜 𝗖𝗛𝗔𝗧𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    21.1",
        'rowId': _0x1e07d4 + "aichatbot on " + _0x2d05ed,
        'description': "To Enable Ai CHATBOT On 🔑"
      }, {
        'title': "    21.2",
        'rowId': _0x1e07d4 + "aichatbot off " + _0x2d05ed,
        'description': "To Disable Ai CHATBOT Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[22] 𝗔𝗜 𝗠𝗔𝗧𝗛𝗦 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    22.1",
        'rowId': _0x1e07d4 + "mathsai on " + _0x2d05ed,
        'description': "To Enable Ai MATHS On 🔑"
      }, {
        'title': "    22.2",
        'rowId': _0x1e07d4 + "mathsai off " + _0x2d05ed,
        'description': "To Disable Ai MATHS Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[23] 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    23.1",
        'rowId': _0x1e07d4 + "welcome on " + _0x2d05ed,
        'description': "To Enable Welcome On 🔑"
      }, {
        'title': "    23.2",
        'rowId': _0x1e07d4 + "welcome off " + _0x2d05ed,
        'description': "To Disable Welcome Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[24] 𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    24.1",
        'rowId': _0x1e07d4 + "oreact on " + _0x2d05ed,
        'description': "To Enable Owner React On 🔑"
      }, {
        'title': "    24.2",
        'rowId': _0x1e07d4 + "oreact off " + _0x2d05ed,
        'description': "To Disable Owner React Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[25] 𝗖𝗠𝗗 𝗥𝗘𝗔𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    25.1",
        'rowId': _0x1e07d4 + "cmdread on " + _0x2d05ed,
        'description': "To Enable CmdRead On 🔑"
      }, {
        'title': "    25.2",
        'rowId': _0x1e07d4 + "cmdread off " + _0x2d05ed,
        'description': "To Disable CmdRead Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[26] 𝗢𝗡𝗟𝗬 𝗚𝗥𝗢𝗨𝗣 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    26.1",
        'rowId': _0x1e07d4 + "onlygroup on " + _0x2d05ed,
        'description': "To Enable OnlyGroup On 🔑"
      }, {
        'title': "    26.2",
        'rowId': _0x1e07d4 + "onlygroup off " + _0x2d05ed,
        'description': "To Disable OnlyGroup Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[27] 𝗢𝗡𝗟𝗬 𝗠𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    27.1",
        'rowId': _0x1e07d4 + "onlyme on " + _0x2d05ed,
        'description': "To Enable OnlyMe On 🔑"
      }, {
        'title': "    27.2",
        'rowId': _0x1e07d4 + "onlyme off " + _0x2d05ed,
        'description': "To Disable OnlyMe Off 🔒"
      }]
    }, {
      'title': "━━━━━━━━━━━━━━━━━━\n\n`[28] 𝗠𝗢𝗗𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚`",
      'rows': [{
        'title': "    28.1",
        'rowId': _0x1e07d4 + "mode on " + _0x2d05ed,
        'description': "To Enable button 🔑"
      }, {
        'title': "    28.2",
        'rowId': _0x1e07d4 + "mode off " + _0x2d05ed,
        'description': "To Disable nonbutton 🔒"
      }]
    }];
    const _0x175546 = {
      url: config.LOGO
    };
    const _0xc81bfe = {
      caption: "👨‍💻 ᴘᴏᴅɪʏᴀ ᴍᴅ ʙʏ ʏ2x ꜰᴀᴍɪʟʏ ᴛᴇᴀᴍ 👨‍💻\n\n  *PODIYA MD SETTINGS*",
      image: _0x175546,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0xa0f1b4
    };
    const _0x50c37e = {
      quoted: _0x3c6297
    };
    return await _0x130dca.replyList(_0x4b5106, _0xc81bfe, _0x50c37e);
  } catch (_0x528c15) {
    _0x338676("*ERROR !!*");
    _0x40f031(_0x528c15);
  }
});