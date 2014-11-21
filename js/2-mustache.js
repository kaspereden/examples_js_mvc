(function () {
	'use strict';
	var example2 = document.getElementById('example2');

	var model = { value: '#worldofincentro' };
	var view = '<p><a href="#">{{value}}</a> text</p>' +
		'<p>{{value}}</p>' +
		'<div class="container">' +
		'<input class="mineInput" value="{{value}}"/>' +
		'</div>';

	example2.getElementsByClassName('mine-container')[0].innerHTML = Mustache.render(view, model);

	var inputs = example2.getElementsByClassName('mineInput');
	var cLength = inputs.length;
	for (var i = 0; i < cLength; i = i+1) {
		inputs[i].onchange = function() {
			model.value=this.value;
			example2.getElementsByClassName('mine-container')[0].innerHTML = Mustache.render(view, model);
		};
	}
} ());
