module.exports = function(grunt) {

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-exec');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files : ['src/**/*'],
            tasks : ['exec:run_ng']
        },
        exec: {
            run_ng: {cmd: 'ng build'}
        }
    });

  

  // Default task(s).
     grunt.registerTask('default', ['watch']);

};