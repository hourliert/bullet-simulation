/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

/**
 * A bullet in the game.
 * Velocity and angle are generated randomly
 * @param {number} x initial x position
 * @param {number} y initial y position
 * @constructor
 */
function Bullet(x, y) {
  this.id = Bullet.nextId++;

  this.initialX = x;
  this.initialY = y;
  this.initialSpeed = (Math.random() * 0.5) + 0.5;
  this.initialAngle = Math.random() * 2 * Math.PI;

  this.x = x;
  this.y = y;
  this.speed = this.initialSpeed;
  this.angle = this.initialAngle;
}

/**
 * The next bullet unique id
 * @type {number}
 * @static
 */
Bullet.nextId = 0;

module.exports = {
  Bullet: Bullet
};
