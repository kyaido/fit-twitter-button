module.exports = function (grunt) {

  /*
    * connect      ローカルサーバを立てる
    * watch        html、scss、jsに変更があるとブラウザをオートリロードする
  */
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.initConfig({
  
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          //open: true,
          base: '.'
        }
      }
    },
    
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: '**/*.html'
      },
      css: {
        files: '**/*.css'
      },
      js: {
        files: '**/*.js'
      }
    }
    
  });
  
  grunt.registerTask('default', [ 'connect', 'watch' ]);
  
};