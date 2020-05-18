'use strict';
function onAnimationComplete() {
	console.log('Animation has finished'),
		document.getElementById('cb-text').classList.add('active');
}
window.onload = function () {
	new Vivus('mtn', { duration: 200 }, this.onAnimationComplete);
};
//# sourceMappingURL=main.js.map
