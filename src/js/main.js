require.config({
	
	baseUrl: "js",

	paths: {
		angular:			'../../bower_components/angular/angular',
		angularRoute:		'../../bower_components/angular-route/angular-route',
		
		app:				'../scripts/app',
		routes:				'../scripts/routes',
	},
	
	shim: {
		angular: { exports : 'angular' },
		angularRoute: { deps: ['angular'] },
		angularStorage: { deps: ['angular'] },
	},

	packages: [
		{name: 'services',    location: '../scripts/services',    main: '_loader'},
		{name: 'controllers', location: '../scripts/controllers', main: '_loader'},
		{name: 'directives',  location: '../scripts/directives',  main: '_loader'}
	],
	
});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require(['app'], function(app) {

	app.run();
	
});
