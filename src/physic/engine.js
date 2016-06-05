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
  bullet.x += bullet.speed * (1000 / 60) * Math.cos(bullet.angle);
  bullet.y += bullet.speed * (1000 / 60) * Math.sin(bullet.angle);

  bullet.angle += (Math.random() - 0.5) * Math.PI / 15;
  bullet.speed -= (bullet.speed - 0.1) / 90;
};

module.exports = {
  PhysicEngine: PhysicEngine
};
