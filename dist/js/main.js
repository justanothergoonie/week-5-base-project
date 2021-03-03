"use strict";

var waypoint = new Waypoint({
  element: document.getElementById('mountain-icon'),
  handler: function handler() {
    var mtn = document.getElementById('mountain-icon');
    mtn.classList.add('active');
  },
  offset: 'bottom-in-view'
});
//# sourceMappingURL=main.js.map
