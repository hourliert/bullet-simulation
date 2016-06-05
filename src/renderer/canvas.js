/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function CanvasRenderer(scene) {
  this.scene = scene;

  this.canvas = document.querySelector('#playground');
  this.ctx = this.canvas.getContext('2d');

  this.resizeCanvas();
  window.addEventListener('resize', this.resizeCanvas.bind(this), false);
}

CanvasRenderer.prototype.resizeCanvas = function resizeCanvas() {
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
};

CanvasRenderer.prototype.render = function render() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.scene.forEachBullet(this.renderBullet.bind(this));
};

CanvasRenderer.prototype.renderBullet = function render(bullet) {
  this.ctx.beginPath();
  this.ctx.arc(bullet.x - 4, bullet.y - 4, 4, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = 'black';
  this.ctx.fill();
  this.ctx.lineWidth = 1;
  this.ctx.strokeStyle = 'black';
  this.ctx.stroke();
};

module.exports = {
  CanvasRenderer: CanvasRenderer
};

