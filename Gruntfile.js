module.exports = function (grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    express: {
      options: {
        port: 5000
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      express: {
        files:  [ '{app,api-stub}/**/*' ],
        tasks:  [ 'build', 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /app\/templates\//,
          templateFileExtensions: /\.(hbs|hjs|handlebars)/,
          precompile: false
        },
        files: {
          'tmp/assets/templates.js': 'app/templates/**/*.hbs'
        }
      }
    },
    less: {
      compile: {
        files: [{
          expand: true,
          cwd: 'app/styles',
          src: ['**/*.less', '!**/_*.less'],
          dest: 'tmp/assets/styles',
          ext: '.css'
        }]
      }  
    },
    copy: {
      css: {
        expand: true,
        cwd: 'app/styles',
        src: '*.css',
        dest: 'tmp/assets/styles' 
      }, 
      js: {
        expand: true,
        cwd: 'app/',
        src: '**/*.js',
        dest: 'tmp/assets/javascript'   
      },
      html: {
        src : 'app/index.html', 
        dest : 'tmp/index.html'
      },
      vendor: {
        expand: true,
        src: ['vendor/**/*.js', 'vendor/**/*.css'], 
        dest : 'tmp/'
      }      
    },
    clean: {
      build: ['tmp']
    },
    jshint: {
      src: 'app/**/*.js',
      options: {
        jshintrc: '.jshintrc',
        force: true
      }
    } 
  });

  grunt.registerTask('build', ['clean:build', 'emberTemplates:compile', 'less:compile', 'copy', 'jshint']);

  grunt.registerTask('server', ['build', 'express:dev', 'watch']);
};