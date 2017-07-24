import Ember from 'ember';
const { get, isEmpty } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  
  redirect() {
    let session = get(this, 'session');
    let url = get(this.router, 'url');
    
    if (url === '/' && session.isLoggedIn) {
      this.replaceWith('dashboard');
    }
  },
  
  actions: {
    error(error, transition) {
      
      if (isEmpty(error.status)) {
        error.status = 400;
      }
      
      if (error.status === 401) {
        // this.transitionTo('login')
      }
      
      if (!error.useTransition) {
        // TODO: handle error
        return false;
      } else {
        this.controllerFor('application').set('currentTransition', transition);
        this.controllerFor('application').set('error', error);
        return true;
      }
      
    }
  }
});
