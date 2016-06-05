/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function Scene() {
  this.bullets = [];

  this.updateLimits();
  window.addEventListener('resize', this.updateLimits.bind(this), false);
}

Scene.prototype.updateLimits = function updateLimits() {
  this.width = window.innerWidth;
  this.height = window.innerHeight;
};

Scene.prototype.forEachBullet = function forEachBullet(cb) {
  this.bullets.forEach(cb);
};

Scene.prototype.addBullet = function addBullet(bullet) {
  this.bullets.push(bullet);
};

Scene.prototype.removeBullet = function addBullet(bullet) {
  var index = this.bullets.indexOf(bullet);

  if (index > -1) {
    this.bullets.splice(index, 1);
  }
};

module.exports = {
  Scene: Scene
};
