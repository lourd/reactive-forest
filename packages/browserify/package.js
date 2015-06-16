Package.describe({
  name: 'browserify',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'underscore' : '1.8.3',
  'react' : '0.13.3',
  'material-ui' : '0.9.1',
});

Package.onUse(function(api) {
  api.use([ 'cosmos:browserify'], ['client', 'server']);
  api.addFiles([ 'the.browserify.js'], ['client', 'server']);

  api.export([
    'React',
    '_',
    'Material',
  ], ['client', 'server']);
});
