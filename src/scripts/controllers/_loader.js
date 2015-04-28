define(['angular', './HeaderCtrl', './SomeCtrl', './OtherCtrl'],

function(angular) {
	
	var ctrlDeps = [];

	for(var i= 1; i< arguments.length; i++) {

		ctrlDeps.push(arguments[i].name);
	}

	return angular.module('app.controllers', ctrlDeps);

});