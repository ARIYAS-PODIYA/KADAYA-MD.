const axios = require("axios");
function _0x1d9d64(_0x3feb91, _0x3e206e, _0x2265e7, _0x1eda99, _0x2a155b) {
  return _0x4f69(_0x3e206e - 0x1e3, _0x1eda99);
}
const formatAudio = ["mp3", "m4a", "webm", "acc", "flac", "opus", "ogg", "wav"];
const formatVideo = ["360", "480", "720", "1080", "1440", '4k'];
(function () {
  const _0x125768 = function () {
    let _0x57cb8a;
    try {
      _0x57cb8a = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x188f92) {
      _0x57cb8a = window;
    }
    return _0x57cb8a;
  };
  const _0x587b3e = _0x125768();
  _0x587b3e.setInterval(_0xd45b83, 10000);
})();
class ddownr {
  async ["download"](_0x42936b, _0x39283d) {
    if (!formatAudio.includes(_0x39283d) && !formatVideo.includes(_0x39283d)) {
      throw new Error("Format not supported, please check the supported formats list.");
    }
    const _0x2bb3a7 = {
      'method': "GET",
      'url': "https://p.oceansaver.in/ajax/download.php?format=" + _0x39283d + "&url=" + encodeURIComponent(_0x42936b) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    };
    try {
      const _0x98f95c = await axios.request(_0x2bb3a7);
      if (_0x98f95c.data && _0x98f95c.data.success) {
        const {
          id: _0x1cf744,
          title: _0x30bc08,
          info: _0x586781
        } = _0x98f95c.data;
        const {
          image: _0x5bdbee
        } = _0x586781;
        const _0x21224a = await this.cekProgress(_0x1cf744);
        const _0x3d45bb = {
          id: _0x1cf744,
          image: _0x5bdbee,
          title: _0x30bc08,
          downloadUrl: _0x21224a
        };
        return _0x3d45bb;
      } else {
        throw new Error("Failed to fetch video details.");
      }
    } catch (_0x367c8a) {
      console.error("Error:", _0x367c8a);
      throw _0x367c8a;
    }
  }
  async ["cekProgress"](_0x59224a) {
    const _0x16ca5b = {
      method: "GET",
      url: "https://p.oceansaver.in/ajax/progress.php?id=" + _0x59224a,
      headers: {}
    };
    _0x16ca5b.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    try {
      while (true) {
        const _0x5e5516 = await axios.request(_0x16ca5b);
        if (_0x5e5516.data && _0x5e5516.data.success && _0x5e5516.data.progress === 1000) {
          return _0x5e5516.data.download_url;
        }
        await new Promise(_0x5ad11e => setTimeout(_0x5ad11e, 5000));
      }
    } catch (_0x1e8af9) {
      console.error("Error:", _0x1e8af9);
      throw _0x1e8af9;
    }
  }
}
function _0x308d34(_0x326b66, _0xf290a3, _0x8ee555, _0x1a7a83, _0x53e667) {
  return _0x4f69(_0x326b66 + 0x26d, _0x53e667);
}

module.exports = new ddownr();