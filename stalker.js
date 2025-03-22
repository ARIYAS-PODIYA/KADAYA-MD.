const axios = require("axios");
const cheerio = require("cheerio");
function _0x55c4(_0x663ea, _0x4d44d9) {
  const _0x150067 = _0x1500();
  _0x55c4 = function (_0x55c446, _0xa88fe5) {
    _0x55c446 = _0x55c446 - 329;
    let _0x175053 = _0x150067[_0x55c446];
    return _0x175053;
  };
  return _0x55c4(_0x663ea, _0x4d44d9);
}
async function tikstalk(_0x511cf8) {
  let _0x1a38fe = await axios.get("https://urlebird.com/user/" + _0x511cf8 + '/');
  let _0x3df267 = cheerio.load(_0x1a38fe.data);
  const _0x5a4449 = _0x3df267("div[class=\"col-md-auto justify-content-center text-center\"] > img").attr("src");
  const _0x105aff = _0x3df267("h1.user").text().trim();
  const _0x5b4419 = _0x3df267("div.content > h5").text().trim();
  const _0x295f0d = _0x3df267("div[class=\"col-7 col-md-auto text-truncate\"]").text().trim().split(" ")[1];
  const _0x33adc8 = _0x3df267("div[class=\"col-auto d-none d-sm-block text-truncate\"]").text().trim().split(" ")[1];
  const _0x4cf603 = _0x3df267("div.content > p").text().trim();
  return {
    'profile': _0x5a4449,
    'name': _0x5b4419,
    'username': _0x105aff,
    'followers': _0x295f0d,
    'following': _0x33adc8,
    'desc': _0x4cf603,
    'bio': _0x3df267("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > p").text().trim(),
    'likes': _0x3df267("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > div > div > div:nth-child(1)").text().trim().split("🧡 ")[1]
  };
}
function igstalker(_0x4d498b) {
  return new Promise((_0x276a6d, _0x180b5c) => {
    axios.get("https://dumpor.com/v/" + encodeURIComponent(_0x4d498b), {
      'headers': {
        'cookie': "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        'user-agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(_0x599ec9 => {
      const _0x3b61ec = cheerio.load(_0x599ec9.data);
      const _0x4b0bbe = {
        'profile': _0x3b61ec("#user-page > div.user > div.row > div > div.user__img").attr("style").replace(/(background-image: url\(\'|\'\);)/gi, ''),
        'fullname': _0x3b61ec("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1").text(),
        'username': _0x3b61ec("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4").text(),
        'post': _0x3b61ec("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)").text().replace(" Posts", ''),
        'followers': _0x3b61ec("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)").text().replace(" Followers", ''),
        'following': _0x3b61ec("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)").text().replace(" Following", ''),
        'bio': _0x3b61ec("#user-page > div.user > div > div.col-md-5.my-3 > div").text().trim()
      };
      _0x276a6d(_0x4b0bbe);
    });
  });
}
const _0x29f4a8 = {
  igstalker: igstalker,
  tikstalk: tikstalk
};
module.exports = _0x29f4a8;