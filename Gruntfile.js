module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
      // Add a new travis ci karma configuration
      // configs here override those in our existing karma.conf.js
      travis: {
        configFile: 'test/karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  
  // Add a new task for travis
  grunt.registerTask('test', ['karma:travis']
  // default task
  grunt.registerTask('default', ['karma:unit']);
}
