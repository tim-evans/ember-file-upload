import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('docs', function() { // docs homepage (required)
    this.route('usage'); // docs subpage
    this.route('api', function() { // autogenerated API homepage (required)
      this.route('item', { path: '/*path' }); // autogenerated API subpages (required)
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
