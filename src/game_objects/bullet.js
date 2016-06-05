/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function Bullet(x, y) {
  this.id = Bullet.firstId++;
  this.initialX = x;
  this.initialY = y;
  this.initialSpeed = (Math.random() * 0.5) + 0.5;
  this.initialAngle = Math.random() * 2 * Math.PI;
  this.x = x;
  this.y = y;
  this.speed = this.initialSpeed;
  this.angle = this.initialAngle;
}

Bullet.firstId = 0;

module.exports = {
  Bullet: Bullet
};
