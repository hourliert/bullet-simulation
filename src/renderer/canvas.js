/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

/**
 * Bullet radius size
 * @type {number}
 * @const
 */
var BULLET_RADIUS = 4;

/**
 * Bullet color
 * @type {string}
 * @const
 */
var BULLET_COLOR = 'black';

/**
 * A 2D game renderer.
 * It must have access to the game scene.
 * @param {Scene} scene The game scene
 * @constructor
 */
function CanvasRenderer(scene) {
  /**
   * The scene used to read bullets
   * @type {Scene}
   */
  this.scene = scene;

  this.canvas = document.querySelector('#playground');
  this.ctx = this.canvas.getContext('2d');

  this.resizeRenderer(window.innerWidth, window.innerHeight);
}

/**
 * Updates the canvas size
 * @param {number} width new width
 * @param {number} height new height
 */
CanvasRenderer.prototype.resizeRenderer = function(width, height) {
  this.canvas.width = width;
  this.canvas.height = height;
};

/**
 * Renders one frame of the game scene
 */
CanvasRenderer.prototype.render = function render() {
  // clean the scene
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  // render each bullet
  this.scene.forEachBullet(this.renderBullet.bind(this));
};

/**
 * Renders one bullet
 * @param {Bullet} bullet the bullet to render
 */
CanvasRenderer.prototype.renderBullet = function render(bullet) {
  this.ctx.beginPath();
  this.ctx.arc(
    bullet.x - BULLET_RADIUS,
    bullet.y - BULLET_RADIUS,
    BULLET_RADIUS,
    0,
    2 * Math.PI
  );
  this.ctx.fillStyle = BULLET_COLOR;
  this.ctx.fill();
};

module.exports = CanvasRenderer;

