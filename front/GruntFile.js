module.exports = function(grunt) {

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-exec');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files : ['src/**/*'],
            tasks : ['exec:run_ng'],
            options: {
                spawn: false
            }        
        },
        exec: {
            run_ng: {cmd: 'ng build --watch'}
        }
    });

  

  // Default task(s).
     grunt.registerTask('default', ['watch']);

};