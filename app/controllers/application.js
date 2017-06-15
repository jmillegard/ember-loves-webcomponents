import Ember from 'ember';

export default Ember.Controller.extend({

  routes: ['start', 'login', 'crossplatform', 'performance', 'extend', 'actions', 'pretty', 'last'],

  currentRouteId: 1,

  init() {

    var self = this;

    Ember.$(document).on("keydown", function(e) {
      var code = e.keyCode || e.charCode;
      console.log(e.keyCode);

      if(e.keyCode === 37) {
        //back
        console.log('back');
        if(self.get('currentRouteId') <= 0) {
          self.set('currentRouteId', 0);
        } else {
          self.decrementProperty('currentRouteId');
        }

      }

      if(e.keyCode === 39) {
        if(self.get('currentRouteId') > self.get('routes').length - 1) {
          console.log('out of bounds');
        } else {
          self.incrementProperty('currentRouteId');
        }
      }

      self.transitionToRoute(self.get('routes')[self.get('currentRouteId')]);

      return true;
    });
  }

});
