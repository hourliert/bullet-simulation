/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

var Bullet = require('../game_objects/bullet');
var Scene = require('../game_objects/scene');
var CanvasRenderer = require('../renderer/canvas');
var PhysicEngine = require('../physic/engine');
var PopupsManager = require('../ui/popups_manager');

/**
 * A bullet simulation game.
 * @constructor
 */
function Game() {
  /**
   * Last time the render occured
   * @type {number}
   */
  this.lastRenderTime = Number(new Date());

  // Dependency Injections
  this.scene = new Scene();
  this.renderer = new CanvasRenderer(this.scene);
  this.engine = new PhysicEngine(this.scene);
  this.popupContainer = new PopupsManager();

  // setup window event listeners
  window.addEventListener('resize', this.onResize.bind(this), false);
  // TODO: Listen to the click event on the window

  // launch the render loop!
  window.requestAnimationFrame(this.loop.bind(this));
}

/**
 * Updates dependency sizes on window resize.
 */
Game.prototype.onResize = function onResize() {
  this.renderer.resizeRenderer(window.innerWidth, window.innerHeight);
  this.scene.resizeScene(window.innerWidth, window.innerHeight);
};

/**
 * Add a new bullet each time the user click in the window.
 * @param {Event} e the click event
 */
Game.prototype.onClick = function onClick(e) {
  // TODO: Create a bullet at the cursor position and add it to the scene
};

/**
 * Displays a popup and removes the bullet from the scene when it hits a border
 * @param {Bullet} bullet the bullet that has hit a border
 */
Game.prototype.onBulletHitsBorder = function onBulletHitsBorder(bullet) {
  // TODO: Add a popup and remove the bullet from the scene
};

/**
 * Game loop.
 * Computes the physic and renders the game at each frame.
 */
Game.prototype.loop = function loop() {
  // compute the previous time budget.
  // we are assuming that we are going to need the same time to compute and render this frame
  var now = Number(new Date());
  var timeBudget = now - this.lastRenderTime;
  this.lastRenderTime = now;

  // compute the physic
  this.engine.nextPositions(timeBudget, this.onBulletHitsBorder.bind(this));

  // render the game
  this.renderer.render();

  window.requestAnimationFrame(this.loop.bind(this));
};

module.exports = Game;
