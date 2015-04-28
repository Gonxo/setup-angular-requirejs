module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
				
		requirejs: {
			app: {
				options: {
					baseUrl: "src/js",
					mainConfigFile: "src/js/main.js",
					name: "main",
					out: "dist/js/main.js"
				}
			},
		},

		less: {
			dev: {
				files: { "src/css/style.css": "src/less/style.less" }
			},
			prod: {
				options: { cleancss: true },
				files: { "dist/css/style.css": "src/less/style.less" }
			}
		},

		watch: {
			styles: {
				files: ['src/less/**/*.less'],
				tasks: ['less:dev'],
				options: { nospawn: true }
			}
		},

		copy: {
			prod: {
				files: [
					{expand: true, src:['**'], cwd: "src/fonts/", dest: "dist/fonts/"},
					{expand: true, src:['**'], cwd: "src/partials/", dest: "dist/partials/"},
					{expand: true, src:['*.js'], cwd: "src/js/lib", dest: "dist/js/lib"},
					{src: 'src/css/bootstrap.min.css', dest: "dist/css/bootstrap.min.css"},
					{src: 'src/index.html', dest: "dist/index.html"}
				]
			}
		}
	});

	// Load all 'grunt-*' tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
// Tasks

	// Default
	grunt.registerTask('default', ['less:dev', 'watch:styles']);

	// Minify css and javascript.
	grunt.registerTask('build', ['less:prod', 'requirejs:app', 'copy:prod']);
};