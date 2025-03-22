
const {
  Innertube
} = require("youtubei.js");
function _0x15a61f(_0x59cd59, _0x17fa08, _0x157599, _0x4a5099, _0x428af9) {
  return _0x3a0c(_0x428af9 + 0x23a, _0x157599);
}
function _0x19027d(_0x37c2ef, _0x5b71b4, _0x3370e6, _0x3443ed, _0x47d773) {
  return _0x3a0c(_0x3443ed + 0x258, _0x3370e6);
}
async function ytdl(_0x5ed7e1) {
  const _0x5e0f91 = {
    Erezm: "?feature=share"
  };
  _0x5e0f91.hXdLA = "watch?v=";
  _0x5e0f91.VNBvm = "audio";
  _0x5e0f91.PkuIM = "best";
  const _0xbe8628 = await Innertube.create();
  _0x5ed7e1 = _0x5ed7e1.split('/');
  _0x5ed7e1 = _0x5ed7e1.pop().replace("?feature=share", '').replace(_0x5e0f91.hXdLA, '');
  const _0x10869f = await _0xbe8628.getBasicInfo(_0x5ed7e1);
  const {
    title: _0x192c8a,
    duration: _0xde71e9,
    short_description: _0xf2286d,
    channel: _0xd4848f,
    thumbnail: _0x48b18a
  } = _0x10869f.basic_info;
  const _0x375ea1 = _0x10869f.streaming_data?.["formats"][0]["decipher"](_0xbe8628.session.player);
  const _0x4d5585 = _0x10869f.streaming_data?.["formats"][0]["mime_type"];
  const _0x294ef7 = {
    type: _0x5e0f91.VNBvm,
    quality: _0x5e0f91.PkuIM
  };
  const _0x3912dd = _0x10869f.chooseFormat(_0x294ef7);
  const _0x2fd0ee = _0x3912dd?.["decipher"](_0xbe8628.session.player);
  const _0x17ca19 = _0x3912dd.mime_type;
  const _0x3093a1 = {
    url: _0x2fd0ee,
    mime_type: _0x17ca19
  };
  const _0x5d1749 = {
    url: _0x375ea1
  };
  _0x5d1749.mime_type = _0x4d5585;
  const _0x4bc224 = {
    thumbnail: _0x48b18a[0].url
  };
  _0x4bc224.channel = _0xd4848f.name;
  _0x4bc224.title = _0x192c8a;
  _0x4bc224.duration = _0xde71e9;
  _0x4bc224.description = _0xf2286d;
  _0x4bc224.audio = _0x3093a1;
  _0x4bc224.video = _0x5d1749;
  return _0x4bc224;
}
function _0x139c68(_0x31b5d2, _0x595aea, _0x8dae44, _0x38eab7, _0x14d1c8) {
  return _0x3a0c(_0x14d1c8 + 0x1fb, _0x8dae44);
}
const _0x3f0885 = {};
function _0x3a0c(_0x3f7653, _0x1e5b19) {
  const _0x4ffe9d = _0x2e0e();
  _0x3a0c = function (_0x5333e6, _0x58f9fb) {
    _0x5333e6 = _0x5333e6 - 333;
    let _0x3b663b = _0x4ffe9d[_0x5333e6];
    return _0x3b663b;
  };
  return _0x3a0c(_0x3f7653, _0x1e5b19);
}
_0x3f0885.ytdl = ytdl;
module.exports = _0x3f0885;