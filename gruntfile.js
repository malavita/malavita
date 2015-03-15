/* globals module, require */

module.exports = function(grunt) {

  "use strict";


  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    paths: {
      html: ["index.html",
        "excursions.html",
        "blog.html",
        "feedbacks.html",
        "contacts.html",
        "_layouts/*.html",
        "_posts/*.md",
        "_excursions/*.md",
        "_includes/*.html"
      ],
      scss: ['./scss/global.scss'],
      css: ['./css/style-unprefixed.css', './css/style.css'],
      js: ['./js/script.js']
    },

    // uglify: {
    //   global: {
    //     files: {
    //       './js/script.min.js': '<%= paths.js %>'
    //     }
    //   }
    // },

    sass: {
      global: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= paths.css[0] %>': '<%= paths.scss %>'
        }
      }
    },

    autoprefixer: {
      global: {
        src: '<%= paths.css[0] %>',
        dest: '<%= paths.css[1] %>'
      }
    },

    shell: {
      jekyllServe: {
        command: 'jekyll serve --baseurl='
      },
      jekyllBuild: {
        command: 'jekyll build --config _config-dev.yml'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: paths.html,
        tasks: ["shell:jekyllBuild"]
      },
      // js: {
      //   files: ["./js/*.js"],
      //   tasks: ["uglify", "shell:jekyllBuild"]
      // },
      css: {
        files: ["./scss/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", [
    "shell:jekyllServe"
  ]);

  grunt.registerTask("default", [
    "sass",
    "autoprefixer",
    "shell:jekyllBuild",
    "watch"
  ]);

};
