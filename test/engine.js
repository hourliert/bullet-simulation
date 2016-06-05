/**
 * Created by thomashourlier on 6/5/16.
 */

jest.unmock('../src/physic/engine');

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

describe('Physic Engine', function() {
  var engine;
  var scene;

  beforeEach(function() {
    var P = require('../src/physic/engine');

    scene = new SceneMock();
    engine = new P.PhysicEngine(scene);
  });

  it('defines a physic engine', function() {
    expect(engine.scene).toEqual(scene);
  });

  it('computes all bullet positions', function() {
    var onBulletHitsBorder = jest.fn();
    var bullet = new BulletMock(0, 10);

    engine.nextBulletPosition(10, onBulletHitsBorder, bullet);
    expect(bullet.x).toEqual(100);
    expect(bullet.y).toEqual(10);

    bullet = new BulletMock(-100, 10);

    engine.nextBulletPosition(10, onBulletHitsBorder, bullet);
    expect(onBulletHitsBorder).toBeCalledWith(bullet);
  });

  it('computes the position of one bullet', function() {
    var onBulletHitsBorder = jest.fn();

    engine.nextPositions(10, onBulletHitsBorder);
    expect(scene.forEachBullet.mock.calls.length).toEqual(1);
  });

  it('detects if a bullet hits a scene border', function() {
    var bullet = new BulletMock(1, 3);
    expect(engine.bulletHitsBorder(bullet)).toBeFalsy();

    bullet = new BulletMock(-1, 3);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();

    bullet = new BulletMock(1, -3);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();

    bullet = new BulletMock(-1, -3);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();

    bullet = new BulletMock(1023, 700);
    expect(engine.bulletHitsBorder(bullet)).toBeFalsy();

    bullet = new BulletMock(1020, 770);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();

    bullet = new BulletMock(1100, 500);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();

    bullet = new BulletMock(1100, 800);
    expect(engine.bulletHitsBorder(bullet)).toBeTruthy();
  });
});
