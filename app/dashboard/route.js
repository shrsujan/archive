import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  redirect() {
    let loggedInUser = get(this, 'session').getLoggedInUser();
    if (!loggedInUser.isLoggedIn) {
      this.replaceWith('welcome')
    }
  }
});
