import Ember from 'ember';
import SignUpValidation from 'archive/mixins/validations/signup';

export default Ember.Controller.extend(SignUpValidation, {
  actions: {
    signup() {
      this.validate().then(() => {
        
      }).catch((e) => {
        console.error(e);
      })
    }
  }
});
