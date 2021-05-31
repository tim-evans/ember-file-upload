import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'dummy/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route('recipes');
    this.route('integration');
    this.route('testing');
    this.route('aws');
  });

  this.route('not-found', { path: '/*path' });
});
