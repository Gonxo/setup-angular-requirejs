define(['angular'],

function(angular) {
	
	return {
		name: 'ScrollSpy',

		svc: ['$window', function($window) {

			var ScrollSpy = function(){};

			ScrollSpy.addCallback = function(cb) {

				angular.element($window).bind('scroll', cb);
			};

			return ScrollSpy;
		}]
	};

});