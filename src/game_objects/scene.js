/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

/**
 * A scene of the game.
 * A scene contains n-bullets and has a finite size
 * @constructor
 */
function Scene() {
  /**
   * Bullets in the scene
   * @type {Bullet[]}
   */
  this.bullets = [];
  /**
   * Scene width
   * @type {number}
   */
  this.width = undefined;
  /**
   * Scene height
   * @type {number}
   */
  this.height = undefined;

  this.resizeScene(window.innerWidth, window.innerHeight);
}

/**
 * Updates the scene size
 * @param {number} width new width
 * @param {number} height new height
 */
Scene.prototype.resizeScene = function resizeScene(width, height) {
  this.width = width;
  this.height = height;
};

/**
 * Iterates through all bullets in the scene
 * @param {Function} cb callback applied for each bullet
 */
Scene.prototype.forEachBullet = function forEachBullet(cb) {
  this.bullets.forEach(cb);
};

/**
 * Adds a new bullet to the scene
 * @param {Bullet} bullet bullet to add
 */
Scene.prototype.addBullet = function addBullet(bullet) {
  this.bullets.push(bullet);
};

/**
 * Removes a bullet from the scene
 * @param {Bullet} bullet bullet to remove
 */
Scene.prototype.removeBullet = function addBullet(bullet) {
  var index = this.bullets.indexOf(bullet);

  if (index > -1) {
    this.bullets.splice(index, 1);
  }
};

module.exports = Scene;
