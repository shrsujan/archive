import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  
  redirect() {
    let session = get(this, 'session');
    
    if (!session.isLoggedIn) {
      this.replaceWith('welcome')
    }
  }
});
