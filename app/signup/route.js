import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
});
