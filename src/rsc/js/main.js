require.config({
	
	baseUrl: "rsc/js",

	paths: {
		angular:			'../../../bower_components/angular/angular',
		angularRoute:		'../../../bower_components/angular-route/angular-route',
		
		app:				'../../scripts/app',
		routes:				'../../scripts/routes'
	},
	
	shim: {
		angular: { exports : 'angular' },
		angularRoute: { deps: ['angular'] }
	},

	packages: [
		{name: 'services',    location: '../../scripts/services',    main: '_loader'},
		{name: 'controllers', location: '../../scripts/controllers', main: '_loader'},
		{name: 'directives',  location: '../../scripts/directives',  main: '_loader'},
		
		{name: 'ngStorage',	  location: '../../../bower_components/ngstorage',  main: 'ngStorage'}
	],
	
});

require(['app'], function(app) {

	app.run();
	
});
