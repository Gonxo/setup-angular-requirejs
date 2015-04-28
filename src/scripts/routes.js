define(function(){

	var routes =
		['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					controller: 'SomeCtrl',
					templateUrl: 'partials/tmpl_2.html',
				})

				//
				.when('/route1', {
					controller: 'OtherCtrl',
					templateUrl: 'partials/tmpl.html',
				})
				.when('/route2', {
					controller: 'OtherCtrl',
					templateUrl: 'partials/tmpl.html',
				});

			$routeProvider.otherwise({ template: '<div class="col-sm-12"><h2>Page not found!!</h2></div>' });
		}];

	return routes;
});