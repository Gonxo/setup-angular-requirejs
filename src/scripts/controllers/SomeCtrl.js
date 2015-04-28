define(['angular'],

function(angular) {
	
	return angular.module('controllers.some', [])
		.controller('SomeCtrl', ['$scope', function($scope) {

			$scope.title = 'Add items';

			$scope.item = {};
			$scope.items = [];

			$scope.add = function(item) {

				$scope.items.push(item);
				$scope.item = {};
			};

		}]);
});