module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [
                    'app/js/**/*.js'
                ],
                tasks: [
                    'process'
                ]
            },
            css: {
                files: [
                    'app/sass/*.scss'
                ],
                tasks: [
                    'sass-compile'
                ]
            }
        },
        concat: {
            dist: {
                src: [
                    'app/js/**/*.js'
                ],
                dest: 'app/prod/js/build.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '/*!\n * <%= pkg.name %> \n * v<%= pkg.version %> - ' +
                     '<%= grunt.template.today("yyyy-mm-dd") %> \n * Copyright (c) <%= pkg.author %>\n**/',
                    sourceMap: true,
                    sourceMapName: 'app/prod/js/build.min.js.map',
                    booleans: true,
                    comparisons: true,
                    conditionals: true,
                    if_return: true,
                    join_vars: true
                },
                files: {
                    'app/prod/js/build.min.js': [
                        'app/prod/js/build.js'
                    ]
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'auto',
                noCache: true,
                style: 'expanded'
            },
            dist: {
                files: {
                    'app/prod/css/style.css': [
                        'app/sass/style.scss'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', [
        'newer:concat', 'uglify'
    ]);
    grunt.registerTask('sass-compile', [
        'newer:sass'
    ]);
    grunt.registerTask('default', [
        'concat', 'uglify', 'sass', 'watch'
    ]);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};