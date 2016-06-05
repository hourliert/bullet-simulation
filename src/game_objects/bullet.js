/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.speed = Math.floor(Math.random() * 10 + 5);
  this.angle = Math.random() * 2 * Math.PI;
}

module.exports = {
  Bullet: Bullet
};
