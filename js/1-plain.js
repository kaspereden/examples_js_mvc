/**
 * Plain js example of MVC
 */
(function () {
	'use strict';
	var example1 = document.getElementById('example1');
	var model = {
	    value: 'nothing'
	};

	function updateModel() {
	    var containers = example1.getElementsByClassName('mine');
	    var cLength = containers.length;
	    for (var i = 0; i< cLength; i = i+1) {
	        if (containers[i].value !== undefined) {
	            containers[i].value = model.value;
	        } else {
		        containers[i].textContent = model.value;
			}
	    }

	}

	updateModel();

	var inputs = example1.getElementsByClassName('mineInput');
	var cLength = inputs.length;
	for (var i = 0; i < cLength; i = i+1) {
	    inputs[i].onchange = function() {
	        model.value=this.value;
	        updateModel();
	    };
	}
}());
