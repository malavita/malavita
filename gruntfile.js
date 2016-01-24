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
      js: ['./js/script.js']
    },

    postcss: {
      options: {
        parser: require('postcss-scss'),
        processors: [
          require('autoprefixer')(),
          require('precss')()
        ]
      },
      dist: {
        src: 'postcss/*.css',
        dest: 'css/style.css'
      }
    },

    shell: {
      jekyllServe: {
        command: 'jekyll serve --port 8000 --baseurl='
      },
      jekyllBuild: {
        command: 'jekyll build --config _config-dev.yml'
      }
    },

    watch: {
      options: {
            livereload: {
                host: 'localhost',
                port: 9000,
            }
          },
      site: {
        files: '<%= paths.html %>',
        tasks: ["shell:jekyllBuild"]
      },
      // js: {
      //   files: ["./js/*.js"],
      //   tasks: ["uglify", "shell:jekyllBuild"]
      // },
      css: {
        files: ["./postcss/*.css"],
        tasks: ["postcss", "shell:jekyllBuild"]
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", [
    "shell:jekyllServe"
  ]);

  grunt.registerTask("default", [
    "postcss",
    "shell:jekyllBuild",
    "watch"
  ]);

};
