define(['angular', 'routes', 'angularRoute', 'ngStorage', 'controllers', 'directives', 'services'],

function(angular, routes) {

	var app = angular.module('setUpApp', [
		'ngRoute',
		'ngStorage',
		'app.controllers',
		'app.directives',
		'app.services'
	]).config(routes);

	app.run = function () {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ['setUpApp']);
		});
	};

	return app;
});