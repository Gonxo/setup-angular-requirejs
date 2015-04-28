define(function() {

	return {
		name: 'navHeader',

		directive: [function() {
			return {
				restrict: 'A',
				controller: 'HeaderCtrl',
				controllerAs: 'header',
				templateUrl: 'partials/header.html'
			};
		}]
	};

});