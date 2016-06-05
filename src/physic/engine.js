/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function PhysicEngine(scene) {
  this.scene = scene;
}

PhysicEngine.prototype.next = function next(onBulletHitsBorder) {
  this.scene.forEachBullet(this.nextBulletPosition.bind(this, onBulletHitsBorder));
};

PhysicEngine.prototype.nextBulletPosition = function nextBulletPosition(onBulletHitsBorder, bullet) {
  var nextX = bullet.x + bullet.speed * (1000 / 60) * Math.cos(bullet.angle);
  var nextY = bullet.y + bullet.speed * (1000 / 60) * Math.sin(bullet.angle);

  if (this.bulletHitsBorder(bullet)) {
    onBulletHitsBorder(bullet);
  } else {
    bullet.x = nextX;
    bullet.y = nextY;
    bullet.angle += (Math.random() - 0.5) * Math.PI / 15;
    bullet.speed -= (bullet.speed - 0.1) / 90;
  }
};

PhysicEngine.prototype.bulletHitsBorder = function bulletHitsBorder(bullet) {
  return (bullet.x > this.scene.width || bullet.x < 0) || (bullet.y > this.scene.height || bullet.y < 0);
};

module.exports = {
  PhysicEngine: PhysicEngine
};
