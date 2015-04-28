define(['angular'],

function(angular) {
	
	return angular.module('controllers.header', [])
		.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {

			// Current selected menu item.
			$scope.tab = -1;

			// Checks if the item is selected.
			$scope.isTab = function(route) {

				return route === $location.path();
			};

			// Array of menu items
			$scope.items = [
				{'name': 'Item 1', 'hash': '/route1'},
				{'name': 'Item 2', 'hash': '/route2'},
			];
		}]);
});