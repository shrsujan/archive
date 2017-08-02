import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    'model.fullName': {
      presence: true,
      length: {
        minimum: 5,
        maximum: 100
      },
      message: 'hello'
    },
    'model.email': {
      presence: true
    },
    'model.password': {
      presence: true
    },
    'model.confirmPassword': {
      presence: true
    }
  }
});
