/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function Scene() {
  this.bullets = [];
}

Scene.prototype.forEachBullet = function forEachBullet(cb) {
  this.bullets.forEach(cb);
};

Scene.prototype.addBullet = function addBullet(bullet) {
  this.bullets.push(bullet);
};

Scene.prototype.removeBullet = function addBullet(index) {
  this.bullets = this.bullets.splice(index, 1);
};

module.exports = {
  Scene: Scene
};
