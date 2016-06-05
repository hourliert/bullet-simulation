/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

/**
 * A simple popup manager specialized to display bullet informations.
 * @constructor
 */
function PopupsManager() {
  this.popupsContainer = document.querySelector('#popups-container');
}

/**
 * Displays a new popup with some bullet information.
 * This popup expires after 1 second.
 * @param {Bullet} bullet the bullet
 */
PopupsManager.prototype.addPopup = function addPopup(bullet) {
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = this.computeBulletText(bullet);

  this.popupsContainer.appendChild(popup);

  setTimeout(function() {
    this.popupsContainer.removeChild(popup);
  }.bind(this), 1000);
};

/**
 * Computes the text to display for a specific bullet
 * @param {Bullet} bullet the bullet to display
 * @return {string} the text to display
 */
PopupsManager.prototype.computeBulletText = function computeBulletText(bullet) {
  var f = Math.floor;

  return 'bullet: ' + bullet.id + ' ' +
    'start: [' + f(bullet.initialX) + ',' + f(bullet.initialY) + '], ' +
    'end: [' + f(bullet.x) + ',' + f(bullet.y) + ']';
};

module.exports = {
  PopupsManager: PopupsManager
};
