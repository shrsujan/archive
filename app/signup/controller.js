import Ember from 'ember';
import SignUpValidation from 'archive/mixins/validations/signup';
const { get, set } = Ember;

export default Ember.Controller.extend(SignUpValidation, {
  hide: 'hide',
  
  actions: {
    signup() {
      if (!get(this, 'isValid')) {
        set(this, 'hide', '');
        return;
      }
    }
  }
});
