/**
 * Created by thomashourlier on 6/5/16.
 */

jest.unmock('../src/game_objects/scene');

function BulletMock() {}

describe('Scene', function() {
  var scene;
  var bullet1 = new BulletMock();
  var bullet2 = new BulletMock();

  beforeEach(function() {
    var Scene = require('../src/game_objects/scene');

    scene = new Scene();
    scene.bullets = [bullet1, bullet2];
  });

  it('defines a scene', function() {
    expect(scene.width).toEqual(1024);
    expect(scene.height).toEqual(768);
  });

  it('iterates through all scene bullets', function() {
    var spy = jest.fn();

    scene.bullets = [bullet1, bullet2];

    scene.forEachBullet(spy);

    expect(spy.mock.calls).toEqual([
      [bullet1, 0, [bullet1, bullet1]],
      [bullet2, 1, [bullet1, bullet1]]
    ]);
  });

  it('adds a new bullet to the scene', function() {
    var bullet3 = new BulletMock();

    scene.addBullet(bullet3);

    expect(scene.bullets[2]).toEqual(bullet3);
  });

  it('adds removes a bullet from the scene', function() {
    scene.removeBullet(bullet1);

    expect(scene.bullets).toEqual([bullet2]);
  });
});
