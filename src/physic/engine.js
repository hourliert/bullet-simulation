/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function PhysicEngine(scene) {
  this.scene = scene;
}

PhysicEngine.prototype.next = function next() {
  this.scene.forEachBullet(this.nextBulletPosition);
};

PhysicEngine.prototype.nextBulletPosition = function nextBulletPosition(bullet) {
  bullet.x = 5;
  bullet.y = 3;
};

module.exports = {
  PhysicEngine: PhysicEngine
};
