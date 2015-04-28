define(['angular', 'routes', 'angularRoute', 'controllers', 'directives', 'services'],

function(angular, routes) {

	var app = angular.module('setUpApp', [
		'ngRoute',
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