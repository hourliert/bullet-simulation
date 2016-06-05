/**
 * Created by thomashourlier on 6/5/16.
 */

jest.unmock('../src/renderer/canvas');

function BulletMock(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 10;
  this.angle = 0;
}

function SceneMock() {
  this.width = 1024;
  this.height = 768;
  this.forEachBullet = jest.fn();
  this.bullets = [new BulletMock(0, 0)];
}

describe('Canvas Renderer', function() {
  var body = document.querySelector('body');
  var canvas;
  var renderer;
  var scene;

  beforeEach(function() {
    var R = require('../src/renderer/canvas');

    canvas = document.createElement('canvas');

    canvas.id = 'playground';
    body.appendChild(canvas);

    scene = new SceneMock();
    renderer = new R.CanvasRenderer(scene);
  });

  afterEach(function() {
    body.removeChild(canvas);
  });

  it('defines a canvas renderer', function() {
    expect(renderer.scene).toEqual(scene);
    expect(renderer.canvas).toEqual(canvas);

    expect(renderer.canvas.width).toEqual(1024);
    expect(renderer.canvas.height).toEqual(768);
  });

  it('resizes the renderer', function() {
    renderer.resizeRenderer(100, 1100);

    expect(renderer.canvas.width).toEqual(100);
    expect(renderer.canvas.height).toEqual(1100);
  });
});
