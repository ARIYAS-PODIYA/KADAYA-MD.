const axios = require("axios");
const cheerio = require("cheerio");
function pinterest(_0x1d560d) {
  return new Promise(async (_0x21aca0, _0x337be1) => {
    axios.get("https://id.pinterest.com/search/pins/?autologin=true&q=" + _0x1d560d, {
      'headers': {
        'cookie': "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({
      data: _0x23d913
    }) => {
      const _0x2412fe = cheerio.load(_0x23d913);
      const _0x333846 = [];
      const _0x390a45 = [];
      _0x2412fe("div > a").get().map(_0x565174 => {
        const _0x45ba32 = _0x2412fe(_0x565174).find("img").attr("src");
        _0x333846.push(_0x45ba32);
      });
      _0x333846.forEach(_0x29cac4 => {
        if (_0x29cac4 == undefined) {
          return;
        }
        _0x390a45.push(_0x29cac4.replace(/236/g, "736"));
      });
      _0x390a45.shift();
      _0x21aca0(_0x390a45);
    });
  });
}
async function syncgit() {
  const _0x37b65a = require("simple-git");
  const _0x101382 = _0x37b65a();
  await _0x101382.fetch();
  var _0x68c133 = await _0x101382.log(["main..origin/main"]);
  return _0x68c133;
}
async function sync() {
  const _0x4aeb5f = require("simple-git");
  const _0x178342 = _0x4aeb5f();
  await _0x178342.fetch();
  var _0x567cab = await _0x178342.log(["main..origin/main"]);
  var _0x30a19e = "*𝐔𝐩𝐝𝐚𝐭𝐞 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 \n\n";
  _0x567cab.all.map(_0xb1cade => {
    _0x30a19e += "● [" + _0xb1cade.date.substring(0, 10) + "]: " + _0xb1cade.message + "\n- By:" + _0xb1cade.author_name + "\n";
  });
  return _0x30a19e;
}
async function updatedb() {
  const _0x522ae9 = require("simple-git");
  const _0x4df376 = _0x522ae9();
  const _0x51b72e = require("heroku-client");
  const _0x3f12f2 = {
    token: process.env.HEROKU_API_KEY
  };
  const _0x33424c = new _0x51b72e(_0x3f12f2);
  await _0x4df376.fetch();
  var _0x2ef2ba = await _0x4df376.log(["main..origin/main"]);
  if (_0x2ef2ba.total === 0) {
    return "ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...";
  } else {
    var _0x3976f8 = await _0x33424c.get("/apps/" + process.env.HEROKU_APP_NAME);
    _0x4df376.fetch("upstream", "main");
    _0x4df376.reset("hard", ["FETCH_HEAD"]);
    var _0x1c812a = _0x3976f8.git_url.replace("https://", "https://api:" + process.env.HEROKU_API_KEY + '@');
    try {
      await _0x4df376.addRemote("heroku", _0x1c812a);
    } catch {
      console.log("heroku remote adding error");
    }
    await _0x4df376.push("heroku", "main");
    return "*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\n_Restarting._";
  }
}
function wallpaper(_0x325aca, _0x27fc46 = '1') {
  return new Promise((_0x48b8d9, _0x3d5811) => {
    axios.get("https://www.besthdwallpaper.com/search?CurrentPage=" + _0x27fc46 + "&q=" + _0x325aca).then(({
      data: _0x301236
    }) => {
      let _0x246502 = cheerio.load(_0x301236);
      let _0x42fd80 = [];
      _0x246502("div.grid-item").each(function (_0x5d8e40, _0x259653) {
        _0x42fd80.push({
          'title': _0x246502(_0x259653).find("div.info > a > h3").text(),
          'type': _0x246502(_0x259653).find("div.info > a:nth-child(2)").text(),
          'source': "https://www.besthdwallpaper.com/" + _0x246502(_0x259653).find("div > a:nth-child(3)").attr("href"),
          'image': [_0x246502(_0x259653).find("picture > img").attr("data-src") || _0x246502(_0x259653).find("picture > img").attr("src"), _0x246502(_0x259653).find("picture > source:nth-child(1)").attr("srcset"), _0x246502(_0x259653).find("picture > source:nth-child(2)").attr("srcset")]
        });
      });
      _0x48b8d9(_0x42fd80);
    });
  });
}
function wikimedia(_0x423943) {
  return new Promise((_0x253996, _0x3853bb) => {
    axios.get("https://commons.wikimedia.org/w/index.php?search=" + _0x423943 + "&title=Special:MediaSearch&go=Go&type=image").then(_0x53b93b => {
      let _0x45ba43 = cheerio.load(_0x53b93b.data);
      let _0x1a37c8 = [];
      _0x45ba43(".sdms-search-results__list-wrapper > div > a").each(function (_0x1f5718, _0x240d9e) {
        _0x1a37c8.push({
          'title': _0x45ba43(_0x240d9e).find("img").attr("alt"),
          'source': _0x45ba43(_0x240d9e).attr("href"),
          'image': _0x45ba43(_0x240d9e).find("img").attr("data-src") || _0x45ba43(_0x240d9e).find("img").attr("src")
        });
      });
      _0x253996(_0x1a37c8);
    });
  });
}
function quotesAnime() {
  return new Promise((_0x371456, _0x16ed5a) => {
    const _0x32fbe3 = Math.floor(Math.random() * 184);
    axios.get("https://otakotaku.com/quote/feed/" + _0x32fbe3).then(({
      data: _0x56aeec
    }) => {
      const _0x4bf782 = cheerio.load(_0x56aeec);
      const _0x1f914a = [];
      _0x4bf782("div.kotodama-list").each(function (_0x421618, _0xba67ad) {
        _0x1f914a.push({
          'link': _0x4bf782(_0xba67ad).find('a').attr("href"),
          'gambar': _0x4bf782(_0xba67ad).find("img").attr("data-src"),
          'karakter': _0x4bf782(_0xba67ad).find("div.char-name").text().trim(),
          'anime': _0x4bf782(_0xba67ad).find("div.anime-title").text().trim(),
          'episode': _0x4bf782(_0xba67ad).find("div.meta").text(),
          'up_at': _0x4bf782(_0xba67ad).find("small.meta").text(),
          'quotes': _0x4bf782(_0xba67ad).find("div.quote").text().trim()
        });
      });
      _0x371456(_0x1f914a);
    })["catch"](_0x16ed5a);
  });
}
function aiovideodl(_0x16b1f2) {
  return new Promise((_0x2b5d20, _0x3ab5d3) => {
    axios({
      'url': "https://aiovideodl.ml/",
      'method': "GET",
      'headers': {
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        'cookie': "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
      }
    }).then(_0x23b03f => {
      let _0x50205d = cheerio.load(_0x23b03f.data);
      let _0x5969c3 = _0x50205d("#token").attr("value");
      const _0x25c5a3 = {
        url: _0x16b1f2,
        token: _0x5969c3
      };
      axios({
        'url': "https://aiovideodl.ml/wp-json/aio-dl/video-data/",
        'method': "POST",
        'headers': {
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          'cookie': "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
        },
        'data': new URLSearchParams(Object.entries(_0x25c5a3))
      }).then(({
        data: _0x4ea8aa
      }) => {
        _0x2b5d20(_0x4ea8aa);
      });
    });
  });
}
function _0x1db637(_0x3fb61b, _0x3a92b9, _0x129f54, _0xcfb9fa, _0x2bebda) {
  return _0x59b6(_0x3fb61b + 0x1e4, _0x3a92b9);
}
function umma(_0x23490f) {
  return new Promise((_0x39bf4f, _0xd47edc) => {
    axios.get(_0x23490f).then(_0x209b67 => {
      let _0x2f2433 = cheerio.load(_0x209b67.data);
      let _0xce5edb = [];
      _0x2f2433("#article-content > div").find("img").each(function (_0x23777d, _0x14ea11) {
        _0xce5edb.push(_0x2f2433(_0x14ea11).attr("src"));
      });
      let _0x1742c9 = {
        'title': _0x2f2433("#wrap > div.content-container.font-6-16 > h1").text().trim(),
        'author': {
          'name': _0x2f2433("#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw").text().trim(),
          'profilePic': _0x2f2433("#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo").attr("src")
        },
        'caption': _0x2f2433("#article-content > div > p").text().trim(),
        'media': _0x2f2433("#article-content > div > iframe").attr("src") ? [_0x2f2433("#article-content > div > iframe").attr("src")] : _0xce5edb,
        'type': _0x2f2433("#article-content > div > iframe").attr("src") ? "video" : "image",
        'like': _0x2f2433("#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12").text()
      };
      _0x39bf4f(_0x1742c9);
    });
  });
}
function ringtone(_0x3fb445) {
  return new Promise((_0x253c63, _0x49c576) => {
    axios.get("https://meloboom.com/en/search/" + _0x3fb445).then(_0x5b8bea => {
      let _0x1d5d8b = cheerio.load(_0x5b8bea.data);
      let _0x329b2b = [];
      _0x1d5d8b("#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li").each(function (_0x56ef0f, _0x1a9a5e) {
        _0x329b2b.push({
          'title': _0x1d5d8b(_0x1a9a5e).find('h4').text(),
          'source': "https://meloboom.com/" + _0x1d5d8b(_0x1a9a5e).find('a').attr("href"),
          'audio': _0x1d5d8b(_0x1a9a5e).find("audio").attr("src")
        });
      });
      _0x253c63(_0x329b2b);
    });
  });
}
function styletext(_0x3986c5) {
  return new Promise((_0x2ccd91, _0x323fb4) => {
    axios.get("http://qaz.wtf/u/convert.cgi?text=" + _0x3986c5).then(({
      data: _0xd25610
    }) => {
      let _0x4ac4fd = cheerio.load(_0xd25610);
      let _0x44b425 = [];
      _0x4ac4fd("table > tbody > tr").each(function (_0x23746a, _0x20e358) {
        _0x44b425.push({
          'name': _0x4ac4fd(_0x20e358).find("td:nth-child(1) > span").text(),
          'result': _0x4ac4fd(_0x20e358).find("td:nth-child(2)").text().trim()
        });
      });
      _0x2ccd91(_0x44b425);
    });
  });
}
function _0x45f9df(_0x16bfae, _0x9b3134, _0x33a02d, _0x5ebf8e, _0x2b040c) {
  return _0x59b6(_0x2b040c + 0x135, _0x5ebf8e);
}
const _0xe1bd47 = {
  pinterest: pinterest,
  wallpaper: wallpaper,
  wikimedia: wikimedia,
  quotesAnime: quotesAnime,
  aiovideodl: aiovideodl,
  umma: umma,
  ringtone: ringtone
};
function _0x36f7bb(_0xc1b91, _0x32753b, _0x708d2b, _0x50ee82, _0x4a271f) {
  return _0x59b6(_0x4a271f + 0x23c, _0x50ee82);
}
_0xe1bd47.styletext = styletext;
_0xe1bd47.sync = sync;
_0xe1bd47.updatedb = updatedb;
_0xe1bd47.syncgit = syncgit;
module.exports = _0xe1bd47;