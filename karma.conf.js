module.exports = function(config) {
    config.set({

        files: [
          "vendor/jquery/jquery.min.js",
          "vendor/handlebars/handlebars.js",
          "vendor/ember/ember.js",
          "app/**/*.js",
          "tests/**/*.js"
        ],

        logLevel: config.LOG_ERROR,
        browsers: ['chrome'],
        singleRun: false,
        autoWatch: true,

        frameworks: ["qunit"],

        plugins: [
            'karma-qunit',
            'karma-chrome-launcher',
            'karma-ember-preprocessor',
            'karma-phantomjs-launcher'
        ]
    });
};