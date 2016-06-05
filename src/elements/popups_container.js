/**
 * Created by thomashourlier on 6/5/16.
 */

'use strict';

function PopupsContainer() {
  this.popupsContainer = document.querySelector('#popups-container');
}

PopupsContainer.prototype.addPopup = function addPopup(bullet) {
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = 'bullet: ' + bullet.id + ' ' +
    'start: [' + Math.floor(bullet.initialX) + ',' + Math.floor(bullet.initialY) + '], ' +
    'end: [' + Math.floor(bullet.x) + ',' + Math.floor(bullet.y) + ']';

  this.popupsContainer.appendChild(popup);

  setTimeout(function() {
    this.popupsContainer.removeChild(popup);
  }.bind(this), 1000);
};

module.exports = {
  PopupsContainer: PopupsContainer
};
