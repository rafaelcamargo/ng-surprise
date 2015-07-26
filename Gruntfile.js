module.exports = function(grunt) {
  
  var srcFiles = 'src/**/*.js';
  var specFiles = 'spec/**/*.js';
  var configFiles = [
    'package.json',
    'karma.conf.js',
    'Gruntfile.js'
  ];

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      spec: specFiles,
      conf: configFiles
    },

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> v<%= pkg.version %>\n' +
                '** (c)<%= grunt.template.today("yyyy") %> Rafael Camargo\n' +
                '** http://rafaelcamargo.github.io/ng-surprise\n' +
                '** License: MIT\n' +
                '*/'
      },
      dist: {
        files: {
          'dist/ng-surprise.min.js': srcFiles
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    watch: {
      dist: {
        files: srcFiles,
        tasks: ['uglify']
      },
      spec: {
        files: specFiles,
        tasks: ['jshint:spec']
      },
      conf: {
        files: configFiles,
        tasks: ['jshint:conf']
      }
    },

    'http-server': {
      dev: {
        port: 9000,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('build', [
    'jshint',
    //'karma'
  ]);

  grunt.registerTask('start', [
    'http-server',
    'watch'
  ]);

};
