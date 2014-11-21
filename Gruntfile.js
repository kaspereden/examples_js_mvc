module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			dependencies: {
				files: [{
					cwd: 'bower_components/',
					expand: true,
					src: ['mustache.js/mustache.js'],
					dest: 'lib/'
				}]
			}
		}
	});

	// Load the plugins that provide the tasks.
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy:dependencies']);

};
