/**
 * Created by thomashourlier on 6/5/16.
 */

jest.unmock('../src/ui/popups_manager');

function BulletMock() {
  this.id = 0;
  this.x = 5;
  this.y = 10;
  this.initialX = 2;
  this.initialY = 4;
}

describe('Popup Manager', function() {
  var body = document.querySelector('body');
  var manager;
  var popupsContainer;

  beforeEach(function() {
    var P = require('../src/ui/popups_manager');

    popupsContainer = document.createElement('div');

    popupsContainer.id = 'popups-container';
    body.appendChild(popupsContainer);

    manager = new P.PopupsManager();
  });

  afterEach(function() {
    body.removeChild(popupsContainer);
  });

  it('defines a popup manager', function() {
    expect(manager.popupsContainer).toEqual(popupsContainer);
  });

  it('computes a bullet text', function() {
    expect(
      manager.computeBulletText(new BulletMock())
    ).toEqual('bullet: 0 start: [2,4], end: [5,10]');
  });

  it('adds a new popup', function() {
    console.log('TODO');
  });
});
