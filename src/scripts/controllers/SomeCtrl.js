define(['angular'],

function(angular) {
	
	return angular.module('controllers.some', [])
		.controller('SomeCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

			$scope.idx = -1;
			$scope.item = {};
			$scope.title = '';
			$scope.button = '';

			$scope.items = angular.fromJson($localStorage.$default().homeItems) || [];

			$scope.add = function() {

				$scope.item = {};
				$scope.title = 'New item';
				$scope.button = 'Add';
			};

			$scope.edit = function(item, index) {
				$scope.idx = index;
				$scope.item = item;
				$scope.title = 'Edit item';
				$scope.button = 'Update';
			};

			$scope.save = function(item) {

				if($scope.idx > -1) {
					$scope.items[$scope.idx] = item;
				} else {
					$scope.items.push(item);
				}

				save();
			};

			$scope.remove = function(index) {

				$scope.items.splice(index, 1);

				save();
			};

			$scope.reset = function() {
				$scope.idx = -1;
				$scope.item = {};
				$scope.title = '';
				$scope.button = '';
			};

			function save() {

				$localStorage.$default().homeItems = angular.toJson($scope.items);

				$scope.reset();
			}

		}]);
});