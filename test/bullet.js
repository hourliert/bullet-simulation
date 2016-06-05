/**
 * Created by thomashourlier on 6/5/16.
 */

jest.unmock('../src/game_objects/bullet');

describe('Bullet', function() {
  it('defines a bullet', function() {
    var B = require('../src/game_objects/bullet');

    var bullet = new B.Bullet(0, 0);

    expect(bullet.x).toEqual(0);
    expect(bullet.y).toEqual(0);
    expect(bullet.id).toEqual(0);
  });
});
