import Ember from 'ember';
const { get, isEmpty } = Ember;

export default Ember.Route.extend({
  publicUrls: ['/', '/login', '/signup'],
  
  redirect() {
    // session is injection in all the routes through the 'initialize-services' initializer
    let loggedInUser = get(this, 'session').getLoggedInUser();
    let url = get(this.router, 'url');
    
    if (get(this, 'publicUrls').indexOf(url) > -1 && loggedInUser.isLoggedIn) {
      this.replaceWith('dashboard');
    }
  },
  
  actions: {
    error(error, transition) {
      if (error.status === 401) {
        // TODO: alert error message
        // this.transitionTo('login')
        return false;
      }
      
      if (isEmpty(error.status)) {
        error.status = 400;
        return false;
      }
      
      // This snippet of code sends the error handling portion to application-error.js Route
      // Error while processing route is seen in console when rendering 404 as it tries to transition to that route
      this.controllerFor('application').set('currentTransition', transition);
      this.controllerFor('application').set('error', error);
      return true;
    }
  }
});
