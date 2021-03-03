var waypoint = new Waypoint({
	element: document.getElementById('mountain-icon'),
	handler: function () {
		let mtn = document.getElementById('mountain-icon');
		mtn.classList.add('active');
	},
	offset: 'bottom-in-view',
});
