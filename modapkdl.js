const axios = require("axios");
const cheerio = require("cheerio");
function _0x29f8de(_0x1aa285, _0x1ecf70, _0x392d2f, _0x1c8f61, _0x55656b) {
  return _0x3e59(_0x55656b + 0x104, _0x392d2f);
}
async function searchModAPKs(_0x5845c0) {
  try {
    const _0x35afc2 = "https://happymod.com/search.html?q=" + encodeURIComponent(_0x5845c0);
    const _0x43068a = await axios.get(_0x35afc2);
    const _0x48fe91 = cheerio.load(_0x43068a.data);
    const _0x406dff = [];
    _0x48fe91(".search-result-list .media").each((_0x3927de, _0x311ad3) => {
      const _0x289b64 = "https://happymod.com" + _0x48fe91(_0x311ad3).find('a').attr("href");
      const _0x41239c = _0x48fe91(_0x311ad3).find(".media-body h4").text().trim();
      const _0x2906f4 = _0x48fe91(_0x311ad3).find(".download-box a[href*=\"/data/file/\"]").attr("href");
      if (_0x2906f4) {
        const _0x171c19 = "https://happymod.com" + _0x2906f4;
        const _0x1cb1a3 = {
          appUrl: _0x289b64,
          appName: _0x41239c,
          downloadUrl: _0x171c19
        };
        _0x406dff.push(_0x1cb1a3);
      }
    });
  } catch (_0x3ddd0c) {
    console.error("Error:", _0x3ddd0c);
  }
}
function _0x3e59(_0x5e1924, _0x524140) {
  const _0x3e5988 = _0x5241();
  _0x3e59 = function (_0x2e2dd2, _0x3d965a) {
    _0x2e2dd2 = _0x2e2dd2 - 134;
    let _0x3d20d9 = _0x3e5988[_0x2e2dd2];
    return _0x3d20d9;
  };
  return _0x3e59(_0x5e1924, _0x524140);
}
async function downloadModAPK(_0x3260d5) {
  try {
    const _0x490bfc = await axios.get(_0x3260d5);
    const _0x24e672 = cheerio.load(_0x490bfc.data);
    const _0x51ff9a = _0x24e672(".download-box a[href*=\"/data/file/\"]").attr("href");
    if (!_0x51ff9a) {
      console.log("Mod APK download link not found.");
      return;
    }
  } catch (_0x3a4940) {
    console.error("Error:", _0x3a4940);
  }
}