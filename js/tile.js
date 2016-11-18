value_map_single = {
  2 : "路人",
  4 : "勾搭",
  8 : "死缠烂打",
  16 : "约会",
  32 : "暧昧",
  64 : "表白",
  128 : "好人卡",
  256 : "再表白",
  512 : "好人卡\*2",
  1024 : "单身狗"
  //2048 : "金牌单身狗"
};

value_map_couple = {
  2 : "路人",
  4 : "勾搭",
  8 : "死缠烂打",
  16 : "约会",
  32 : "暧昧",
  64 : "表白",
  128 : "在一起",
  256 : "吵架",
  512 : "和好",
  1024 : "结婚",
  2048 : "婚内出轨"
};

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.value_show       = value_map_single[value]

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value_show
  };
};
