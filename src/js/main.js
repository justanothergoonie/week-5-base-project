// window.onload = function () {
// 	// let mtn = document.getElementById('mountain-icon');
// 	// mtn.classList.add('active');
// };

var inview = new Waypoint.Inview({
	element: $('#mountain-icon')[0],
	enter: function () {
		let mtn = document.getElementById('mountain-icon');
		mtn.classList.add('active');
	},
	// entered: function (direction) {
	// 	notify('Entered triggered with direction ' + direction);
	// },
	// exit: function (direction) {
	// 	notify('Exit triggered with direction ' + direction);
	// },
	// exited: function (direction) {
	// 	notify('Exited triggered with direction ' + direction);
	// },
});
