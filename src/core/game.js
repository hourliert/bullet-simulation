/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

var B = require('../game_objects/bullet');
var S = require('../game_objects/scene');
var R = require('../renderer/canvas');
var P = require('../physic/engine');

function Game() {
  this.scene = new S.Scene();
  this.renderer = new R.CanvasRenderer(this.scene);
  this.engine = new P.PhysicEngine(this.scene);

  window.addEventListener('click', this.onClick.bind(this), false);
  window.requestAnimationFrame(this.loop.bind(this));
}

Game.prototype.onClick = function onClick(e) {
  var x = e.clientX;
  var y = e.clientY;

  var bullet = new B.Bullet(x, y);
  this.scene.addBullet(bullet);
};

Game.prototype.loop = function loop() {
  // this.engine.next();
  this.renderer.render();

  window.requestAnimationFrame(this.loop.bind(this));
};

module.exports = {
  Game: Game
};
