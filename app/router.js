import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('screens', {resetNamespace: true}, function() {
    this.route('performance', {resetNamespace: true});
    this.route('start', {resetNamespace: true});
    this.route('login', {resetNamespace: true});
    this.route('crossplatform', {resetNamespace: true});
    this.route('extend', {resetNamespace: true});
    this.route('actions', {resetNamespace: true});
    this.route('pretty', {resetNamespace: true});
    this.route('last', {resetNamespace: true});
  });

});

export default Router;
