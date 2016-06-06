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
    var CanvasRenderer = require('../src/renderer/canvas');

    canvas = document.createElement('canvas');

    canvas.id = 'playground';
    body.appendChild(canvas);

    scene = new SceneMock();
    renderer = new CanvasRenderer(scene);
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

  it('renders the scene', function(done) {
    try {
      require.resolve('canvas');
    } catch (er) {
      done();
    }

    renderer.ctx.clearRect = jest.fn();

    renderer.render();

    expect(renderer.ctx.clearRect).toBeCalled();
    expect(scene.forEachBullet).toBeCalled();

    done();
  });

  it('renders a bullet', function(done) {
    try {
      require.resolve('canvas');
    } catch (er) {
      done();
    }

    var bullet = new BulletMock(10, 10);

    renderer.ctx.arc = jest.fn();

    renderer.renderBullet(bullet);

    expect(renderer.ctx.arc).toBeCalledWith(6, 6, 4, 0, 2 * Math.PI);
    expect(renderer.ctx.fillStyle).toEqual('#000000');

    done();
  });
});
