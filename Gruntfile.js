module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      jshint: {
          dev: {
              src: ['public/js/nibty.js']
          }
      },

      copy: {
          js: {
              files: [
                  {src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'public/js/bootstrap.min.js', filter: 'isFile'},
                  {src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'public/js/jquery.min.js', filter: 'isFile'},
                  {src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'public/js/jquery.min.js', filter: 'isFile'},
                  {src: ['node_modules/jquery.backstretch/jquery.backstretch.min.js'], dest: 'public/js/jquery.backstretch.min.js', filter: 'isFile'}
              ]
          },
          css: {
              files: [
                  {expand: true, src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: 'public/css/', filter: 'isFile'},
                  {expand: true, src: ['node_modules/bootstrap/dist/css/bootstrap-theme.min.css'], dest: 'public/css/', filter: 'isFile'},
              ]
          }
      },

      watch: {
          options: {
              livereload: true
          },
          css: {
              files: ['public/css/*.css'],
              tasks: ['copy:css']
          },
          scripts: {
              files: ['public/js/*.js'],
              tasks: ['uglify', 'copy:js']
          }
      },

      uglify: {
          options: {
              report: 'min'
          },
          build: {
              src: 'public/js/nibty.js',
              dest: 'public/js/nibty.min.js'
          }
      }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint:dev', 'uglify', 'copy', 'watch:css', 'watch:scripts']);

};
