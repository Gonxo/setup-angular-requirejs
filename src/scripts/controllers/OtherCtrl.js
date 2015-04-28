define(['angular'],

function(angular) {
	
	return angular.module('controllers.other', [])
		.controller('OtherCtrl', ['$scope', '$location', function($scope, $location) {

			$scope.title = 'Location path:';
			$scope.desc = $location.path();

		}]);
});