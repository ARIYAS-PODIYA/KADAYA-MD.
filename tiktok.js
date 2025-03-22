const axios = require("axios");
const clean = _0x23a293 => {
  let _0x112e0b = /(<([^>]+)>)/gi;
  _0x23a293 = _0x23a293.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x23a293.replace(_0x112e0b, '');
};
async function shortener(_0x70f167) {
  return _0x70f167;
}
exports.Tiktok = async _0x566ceb => {
  const _0x4f6d3a = {
    query: _0x566ceb
  };
  let _0x5d24f4 = await axios("https://lovetik.com/api/ajax/search", {
    'method': "POST",
    'data': new URLSearchParams(Object.entries(_0x4f6d3a))
  });
  result = {};
  result.creator = "YNTKTS";
  result.title = clean(_0x5d24f4.data.desc);
  result.author = clean(_0x5d24f4.data.author);
  result.nowm = await _0x70f167;
  result.watermark = await _0x70f167;
  result.audio = await _0x70f167;
  result.thumbnail = await _0x70f167;
  return result;
};