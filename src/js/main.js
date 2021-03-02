window.onload = function () {
	let mtn = document.getElementById('mountain-icon');
	mtn.classList.add('active');

	MorphSVGPlugin.convertToPath('#fire-3');

	let tl = new gsap.timeline({ repeat: -1 });
	//morph to tent
	tl.to(
		'#fire-1',
		{
			morphSVG: '#tent-1',
			duration: 1,
		},
		1
	);
	tl.to(
		'#fire-2',
		{
			morphSVG: '#tent-2',
			duration: 1,
		},
		1
	);
	tl.to(
		'#fire-3',
		{
			morphSVG: '#tent-3',
			duration: 1,
		},
		1
	);
	//morph to backpack
	tl.to(
		'#fire-1',
		{
			morphSVG: '#backpack-1',
			duration: 1,
		},
		3
	);
	tl.to(
		'#fire-2',
		{
			morphSVG: '#backpack-2',
			duration: 1,
		},
		3
	);
	tl.to(
		'#fire-3',
		{
			morphSVG: '#backpack-3',
			duration: 1,
		},
		3
	);
	tl.to(
		'#fire-1',
		{
			morphSVG: '#fire-1',
			duration: 1,
		},
		3
	);
	tl.to(
		'#fire-2',
		{
			morphSVG: '#fire-2',
			duration: 1,
		},
		3
	);
	tl.to(
		'#fire-3',
		{
			morphSVG: '#fire-3',
			duration: 1,
		},
		3
	);
};

var waypoint = new Waypoint({
	element: document.getElementById('mountain-icon'),
	handler: function () {
		let mtn = document.getElementById('mountain-icon');
		mtn.classList.add('active');
	},
});
