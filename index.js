var moveMouse = require('./build/Release/move-mouse');

exports.move = function(x, y) {
  moveMouse.move(x, y);
}