define(['angular', './nav-header', './spy-affix'],

function(angular) {
	
	var directives = angular.module('app.directives', []);

	// Define directives
	for(var i= 1; i< arguments.length; i++) {

		console.log(arguments[i]);
		directives.directive(arguments[i].name, arguments[i].directive);
	}

	return directives;
});