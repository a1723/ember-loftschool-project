import EmberRouter from '@ember/routing/router';
import config from 'ember-loftschool-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('author', { path: '/authors' }, function () {
    this.route('detail', { path: '/:id' }); // работает для url /authors/1, /authors/2 /authors/3 и т.д.
    this.route('edit', { path: '/:id/edit' });
  });
});
