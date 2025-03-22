const {
  DataTypes,
  Sequelize
} = require("sequelize");
var _0x13ba55 = {
  require: true,
  rejectUnauthorized: false
};
var _0x37656f = {};
_0x37656f.ssl = _0x13ba55;
var _0x3e3fb1 = {
  dialectOptions: _0x37656f,
  logging: false
};
var _0x4e3813 = {
  dialect: "sqlite",
  storage: "./database/settings.db",
  logging: false
};
function _0x3434(_0xcde429, _0x20655e) {
  var _0x4e05da = _0x4e05();
  _0x3434 = function (_0x3434a4, _0x532960) {
    _0x3434a4 = _0x3434a4 - 101;
    var _0x464a97 = _0x4e05da[_0x3434a4];
    return _0x464a97;
  };
  return _0x3434(_0xcde429, _0x20655e);
}
const DATABASE = process.env.DATABASE_URL ? new Sequelize(process.env.DATABASE_URL, _0x3e3fb1) : new Sequelize(_0x4e3813);
async function get_set(_0x1250d1) {
  var _0x54de39 = {
    type: DataTypes.TEXT,
    allowNull: false
  };
  var _0x422941 = {
    json: _0x54de39
  };
  var _0x8d4b5d = {
    timestamps: false
  };
  const _0x441ede = DATABASE.define("settings", _0x422941, _0x8d4b5d);
  await DATABASE.sync();
  var _0x2e10f8 = await _0x441ede.findAll();
  if (_0x2e10f8.length < 1) {
    return {};
  } else {
    var _0x4a2b30 = JSON.parse(_0x2e10f8[0].dataValues.json);
    if (_0x1250d1 == "all") {
      return _0x4a2b30;
    }
    if (_0x4a2b30[_0x1250d1]) {
      return _0x4a2b30[_0x1250d1];
    }
    return false;
  }
}
async function input_set(_0x533dc5, _0x4363a4) {
  var _0x4493ff = {
    ZWmeu: "(((.+)+)+)+$"
  };
  _0x4493ff.qkYMd = "settings";
  _0x4493ff.jexpU = function (_0x499a4, _0x347cea) {
    return _0x499a4 < _0x347cea;
  };
  _0x4493ff.McPEY = function (_0x350bfb, _0x5b882a) {
    return _0x350bfb === _0x5b882a;
  };
  _0x4493ff.FDTtU = "VNiHs";
  _0x4493ff.GYEQZ = "XTvMa";
  _0x4493ff.iHacO = function (_0x55a8e6, _0x9fe793) {
    return _0x55a8e6 !== _0x9fe793;
  };
  _0x4493ff.luQUW = "BSTKD";
  var _0x2a2fe1 = {
    type: DataTypes.TEXT,
    allowNull: false
  };
  var _0x54444e = {
    json: _0x2a2fe1
  };
  var _0xcb7fcd = {
    timestamps: false
  };
  const _0x33d2f = DATABASE.define(_0x4493ff.qkYMd, _0x54444e, _0xcb7fcd);
  await DATABASE.sync();
  var _0x5d0852 = await _0x33d2f.findAll();
  if (_0x4493ff.jexpU(_0x5d0852.length, 1)) {
    if (_0x4493ff.McPEY(_0x4493ff.FDTtU, _0x4493ff.GYEQZ)) {
      return _0x3c61fc.toString().search(VsqZtP.ZWmeu).toString().constructor(_0x11efa8).search(VsqZtP.ZWmeu);
    } else {
      var _0x41eb79 = {};
      _0x41eb79[_0x533dc5] = _0x4363a4;
      return await _0x33d2f.create({
        'json': JSON.stringify(_0x41eb79)
      });
    }
  } else {
    if (_0x4493ff.iHacO(_0x4493ff.luQUW, _0x4493ff.luQUW)) {
      var _0x15fb82 = _0x58d594 ? function () {
        if (_0xbb6182) {
          var _0x1aff2a = _0x2dd2d0.apply(_0x280980, arguments);
          _0x133e39 = null;
          return _0x1aff2a;
        }
      } : function () {};
      _0x14dd46 = false;
      return _0x15fb82;
    } else {
      var _0x41eb79 = JSON.parse(_0x5d0852[0].dataValues.json);
      _0x41eb79[_0x533dc5] = _0x4363a4;
      return await _0x5d0852[0].update({
        'json': JSON.stringify(_0x41eb79)
      });
    }
  }
}
function _0x5ed7bb(_0x578ccf, _0x2d8eac, _0x526eda, _0x1b40a8, _0x460be6) {
  return _0x3434(_0x526eda + 0xe0, _0x578ccf);
}
;
var _0x21deb1 = {
  get_set: get_set
};
function _0x288dde(_0x4357da, _0x5f0c3b, _0x58a83a, _0x2c256f, _0x56b2ce) {
  return _0x3434(_0x4357da - 0x2c8, _0x56b2ce);
}
_0x21deb1.input_set = input_set;
module.exports = _0x21deb1;