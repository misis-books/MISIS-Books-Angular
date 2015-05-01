module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [
                    'app/js/*.js'
                ],
                tasks: [
                    'process'
                ]
            }
        },
        concat: {
            dist: {
                src: [ 'app/js/*.js' ],
                dest: 'app/js/prod/build.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*!\n * <%= pkg.name %> \n * v<%= pkg.version %> - ' +
                     '<%= grunt.template.today("yyyy-mm-dd") %> \n * Copyright (c) <%= pkg.author %>\n**/',
                    sourceMap: true,
                    sourceMapName: 'app/js/prod/build.min.js.map',
                    booleans: true,
                    comparisons: true,
                    conditionals: true,
                    if_return: true,
                    join_vars: true
                },
                files: {
                    'app/js/prod/build.min.js': [
                        'app/js/prod/build.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', [
        'newer:concat', 'uglify'
    ]);
    grunt.registerTask('default', [
        'concat', 'uglify', 'watch'
    ]);
};