/**
 * Created by thomashourlier on 6/6/16.
 */

jest.unmock('../src/core/game');

function BulletMock(x, y) {
  this.x = x;
  this.y = y;
}

describe('Game', function() {
  var game;

  beforeEach(function(done) {
    try {
      require.resolve('canvas');
    } catch (er) {
      done();
    }

    var Game = require('../src/core/game');

    window.addEventListener = jest.fn();
    window.requestAnimationFrame = jest.fn();

    game = new Game();

    done();
  });

  it('defines a bullet simulation game', function(done) {
    if (!game) {
      done();
    }

    expect(window.addEventListener).toBeCalled();
    expect(window.requestAnimationFrame).toBeCalled();

    done();
  });

  it('resizes game objects and renderer', function(done) {
    if (!game) {
      done();
    }

    game.onResize();

    expect(game.renderer.resizeRenderer).toBeCalledWith(1024, 768);
    expect(game.scene.resizeScene).toBeCalledWith(1024, 768);

    done();
  });

  it('handles a user click', function(done) {
    if (!game) {
      done();
    }

    game.onClick({clientX: 100, clientY: 150});

    expect(game.scene.addBullet).toBeCalled();

    done();
  });

  it('shows a popup when a bullet hits a border', function(done) {
    if (!game) {
      done();
    }

    var bullet = new BulletMock(10, 15);
    game.onBulletHitsBorder(bullet);

    expect(game.popupContainer.addPopup).toBeCalledWith(bullet);
    expect(game.scene.removeBullet).toBeCalledWith(bullet);

    done();
  });

  it('comutes one frame of the game', function(done) {
    if (!game) {
      done();
    }

    game.loop();

    expect(game.engine.nextPositions).toBeCalled();
    expect(game.renderer.render).toBeCalled();
    expect(window.requestAnimationFrame).toBeCalled();

    done();
  });
});
