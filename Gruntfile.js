module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            app: {
                src: ['public/app/**/*.js', ],
                dest: 'public/custom/app.js',
            },
            libjs: {
                src: ['public/lib/jquery/dist/jquery.min.js',
                      'public/lib/lodash/lodash.min.js',
                      'public/dist/semantic.min.js',
                    'public/lib/angular/angular.min.js',
                      'public/lib/restangular/dist/restangular.min.js',
                     'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                     'public/lib/angular-sanitize/angular-sanitize.min.js',
                     'public/lib/angular-animate/angular-animate.min.js',
                     'public/lib/angular-messages/angular-messages.min.js',
                     'public/lib/owl-carousel/owl.carousel.min.js'],
                dest: 'public/custom/lib.js',
            },
            libcss: {
                src: ['public/lib/owl-carousel/owl.carousel.css',
                     'public/lib/owl-carousel/owl.theme.css'],
                dest: 'public/custom/lib.css'
            }
        },
        watch: {
            js: {
                files: ['public/app/**/*.js'],
                tasks: ['concat']
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['concat', 'watch']);

};