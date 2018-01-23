module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            dev: {
                src: ['assets/js/nibty.js']
            }
        },

        sass: {
            dist: {
                files: {
                    'assets/css/nibty.css': 'assets/css/nibty.scss',
                    'assets/css/retro-skate.css': 'assets/css/retro-skate.scss',
                    'assets/css/social-icons.css': 'assets/css/social-icons.scss'

                }
            }
        },

        uncss: {
            dist: {
                options: {
                    ignore: [
                        /\w\.in/,
                        ".fade",
                        ".collapse",
                        ".collapsing",
                        /(#|\.)navbar(\-[a-zA-Z]+)?/,
                        /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                        /(#|\.)(open)/,
						".webapp-iframe"
                    ],

                    stylesheets: ["css/app.css"],
                    ignoreSheets: [/fonts.googleapis.com/]
                },
                files: {
                    'public/css/app.css': ['public/index.html', 'public/retroskate/index.html', 'public/js/app.js']
                }
            }
        },

        concat: {
            js: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'assets/js/*.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/retina.js/dist/retina.min.js',
                    'node_modules/imagizer-js/dist/imagizer.js'
                ],
                dest: 'public/js/app.js'
            },
            css: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.css',
                    'assets/css/*.css'
                ],
                dest: 'public/css/app.css'
            }
        },

        uglify: {
            options: {
                report: 'min'
            },
            build: {
                src: 'public/js/app.js',
                dest: 'public/js/app.min.js'
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            css: {
                src: 'public/css/app.css',
                dest: 'public/css/app.min.css'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['assets/css/*.scss'],
                tasks: ['jshint:dev', 'sass', 'concat', 'cssmin', 'clean']
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['jshint:dev', 'sass', 'concat', 'uglify', 'clean']
            }
        },

        clean: {
            js: ["public/js/*.js", "!public/js/app.min.js"],
            css: ["public/css/*.css", "!public/css/app.min.css"],
            sass: ["assets/css/*.css", "assets/css/*.css.map", "!assets/css/*.scss", "!/assets/css/*.sass"]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-uncss');

    // Default task(s).
    grunt.registerTask(
        'default', ['jshint:dev', 'sass', 'concat', 'uglify', 'cssmin', 'clean']
    );

};
