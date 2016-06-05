/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

/**
 * A simple physic engine.
 * It computes new bullet positions
 * @param {Scene} scene a game scene
 * @constructor
 */
function PhysicEngine(scene) {
  /**
   * The scene used to read bullets and to determine if a bullet hits a border
   * @type {Scene}
   */
  this.scene = scene;
}

/**
 * Computes the next position of each bullets
 * @param {number} timeBudget the time budget to compute the physic
 * @param {Function} onBulletHitsBorder callback called when a bullet hits a scene border
 */
PhysicEngine.prototype.nextPositions = function(timeBudget, onBulletHitsBorder) {
  this.scene.forEachBullet(
    this.nextBulletPosition.bind(this, timeBudget, onBulletHitsBorder)
  );
};

/**
 * Computes the next position of a bullet
 * @param {number} timeBudget the time used to compute the new bullet position
 * @param {Function} cb callback called when the bullet hits a scene border
 * @param {Bullet} bullet the bullet
 */
PhysicEngine.prototype.nextBulletPosition = function(timeBudget, cb, bullet) {
  var nextX = bullet.x + bullet.speed * timeBudget * Math.cos(bullet.angle);
  var nextY = bullet.y + bullet.speed * timeBudget * Math.sin(bullet.angle);

  if (this.bulletHitsBorder(bullet)) {
    cb(bullet);
  } else {
    bullet.x = nextX;
    bullet.y = nextY;
    // we slightly alter the bullet angle
    bullet.angle += (Math.random() - 0.5) * Math.PI / 15;
    // we slightly alter the bullet speed
    bullet.speed -= (bullet.speed - 0.1) / 90;
  }
};

/**
 * Detects whether a bullet hits a scene border or not
 * @param {Bullet} bullet the bullet
 * @return {boolean} Has the bullet hit a scene border?
 */
PhysicEngine.prototype.bulletHitsBorder = function bulletHitsBorder(bullet) {
  return (bullet.x > this.scene.width || bullet.x < 0) ||
    (bullet.y > this.scene.height || bullet.y < 0);
};

module.exports = {
  PhysicEngine: PhysicEngine
};
