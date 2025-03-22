const {
  DataTypes,
  Sequelize
} = require("sequelize");
const _0x2a0008 = {
  require: true,
  rejectUnauthorized: false
};
const _0x218327 = {
  ssl: _0x2a0008
};
function _0x5221ad(_0x14e942, _0x652cb5, _0x3e11c0, _0x5b0641, _0x13379d) {
  return _0x3cdb(_0x652cb5 + 0xbd, _0x5b0641);
}
const _0x1fb03c = {};
_0x1fb03c.dialectOptions = _0x218327;
_0x1fb03c.logging = false;
const _0x17c701 = {
  dialect: "sqlite",
  storage: "./database/id.db",
  logging: false
};
const DATABASE = process.env.DATABASE_URL ? new Sequelize(process.env.DATABASE_URL, _0x1fb03c) : new Sequelize(_0x17c701);
function _0x3cdb(_0x49a402, _0xaeed1) {
  const _0x3cdb36 = _0xaeed();
  _0x3cdb = function (_0x7be167, _0xf4b631) {
    _0x7be167 = _0x7be167 - 290;
    let _0x4b5f96 = _0x3cdb36[_0x7be167];
    return _0x4b5f96;
  };
  return _0x3cdb(_0x49a402, _0xaeed1);
}
async function check(_0x4a3bd2) {
  const _0x360af6 = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true
  };
  const _0xe02ab7 = {
    type: DataTypes.TEXT,
    allowNull: false
  };
  const _0x548aae = {
    num: _0x360af6,
    cmd: _0xe02ab7
  };
  const _0x54e3ec = {
    timestamps: false
  };
  const _0x325a34 = DATABASE.define(_0x4a3bd2, _0x548aae, _0x54e3ec);
  await DATABASE.sync();
  var _0x3b96b5 = await _0x325a34.findAll();
  if (_0x3b96b5.length < 1) {
    return false;
  }
  return true;
}
async function input_data(_0x28315c, _0x52e69f, _0x20425f) {
  const _0x29dbe2 = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true
  };
  const _0x3ac5af = {
    type: DataTypes.TEXT,
    allowNull: false
  };
  const _0x3fcb99 = {
    num: _0x29dbe2,
    cmd: _0x3ac5af
  };
  const _0x2e8ed4 = {
    timestamps: false
  };
  const _0x3a14db = DATABASE.define(_0x20425f, _0x3fcb99, _0x2e8ed4);
  await DATABASE.sync();
  const _0x628b8 = {
    "num": _0x52e69f
  };
  const _0xa7190f = {
    where: _0x628b8
  };
  var _0x3e6f7a = await _0x3a14db.findAll(_0xa7190f);
  if (_0x3e6f7a.length < 1) {
    const _0x581bda = {
      num: _0x52e69f,
      cmd: _0x28315c
    };
    return await _0x3a14db.create(_0x581bda);
  } else {
    const _0x30a803 = {
      num: _0x52e69f,
      cmd: _0x28315c
    };
    return await _0x3e6f7a[0].update(_0x30a803);
  }
}
;
async function get_data(_0x42c292, _0x26b848) {
  const _0x31fcdc = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true
  };
  const _0x524264 = {
    type: DataTypes.TEXT,
    allowNull: false
  };
  const _0x2293e2 = {
    num: _0x31fcdc,
    cmd: _0x524264
  };
  const _0x49c541 = {
    timestamps: false
  };
  const _0x4522c8 = DATABASE.define(_0x42c292, _0x2293e2, _0x49c541);
  await DATABASE.sync();
  const _0x5d58ae = {
    num: _0x26b848
  };
  const _0xd868b5 = {
    where: _0x5d58ae
  };
  var _0x105c77 = await _0x4522c8.findAll(_0xd868b5);
  if (_0x105c77.length < 1) {
    return false;
  } else {
    return _0x105c77[0].dataValues;
  }
}
function _0x56ba42(_0x5ab947, _0x457967, _0x1bcaeb, _0x871f03, _0x1be88b) {
  return _0x3cdb(_0x1bcaeb - 0x34c, _0x457967);
}
const _0xb90ab5 = {
  input_data: input_data
};
function _0x232fb4(_0x5a78e6, _0x3a7707, _0x4a3e9e, _0x2fffa3, _0x5b6e7e) {
  return _0x3cdb(_0x2fffa3 + 0x2c0, _0x4a3e9e);
}
_0xb90ab5.get_data = get_data;
_0xb90ab5.check = check;
module.exports = _0xb90ab5;