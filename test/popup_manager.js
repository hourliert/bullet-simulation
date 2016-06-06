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
    var PopupsManager = require('../src/ui/popups_manager');

    popupsContainer = document.createElement('div');

    popupsContainer.id = 'popups-container';
    body.appendChild(popupsContainer);

    manager = new PopupsManager();
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
    manager.addPopup(new BulletMock());

    var popup = document.querySelector('.popup');
    expect(popup.nodeName).toEqual('DIV');
    expect(popup.innerText).toEqual('bullet: 0 start: [2,4], end: [5,10]');

    expect(setTimeout.mock.calls[0][1]).toBe(1000);

    jest.runAllTimers();

    popup = document.querySelector('.popup');
    expect(popup).toEqual(null);
  });
});
