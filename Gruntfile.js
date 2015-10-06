module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['semantic/app/**/*.js'],
                dest: 'semantic/custom/app.js',
            }
        },
        watch: {
            js: {
                files: ['semantic/app/**/*.js'],
                tasks: ['concat']
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['concat','watch']);

};