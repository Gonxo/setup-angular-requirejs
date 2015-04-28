define(['angular', './ScrollSpy'],

function(angular) {
	
	var services = angular.module('app.services', []);

	// Registering Services
	for(var i= 1; i< arguments.length; i++) {

		services.factory(arguments[i].name, arguments[i].svc);
	}

	return services;
});