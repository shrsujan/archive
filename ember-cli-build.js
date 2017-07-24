/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fs = require('fs');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  
  fs
    .readdirSync('bower_components/materialize/fonts/roboto')
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file.slice(-5) === '.woff' || file.slice(-6) === '.woff2') 
    })
    .forEach((file) => {
      app.import('bower_components/materialize/fonts/roboto/' + file, { destDir: 'fonts/roboto' });
    })
    
  // app.import('bower_components/materialize/fonts/roboto/Roboto-Regular.woff2', { destDir: 'fonts/roboto' });
  app.import('bower_components/materialize/dist/css/materialize.min.css');
  app.import('bower_components/components-font-awesome/css/font-awesome.min.css');
  app.import('bower_components/materialize/dist/js/materialize.min.js');

  return app.toTree();
};
