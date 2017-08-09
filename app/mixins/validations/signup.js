import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    'model.fullName': {
      presence: {
        message: 'Enter full name'
      },
      length: {
        minimum: 5,
        maximum: 100
      }
    },
    'model.email': {
      presence: {
        message: 'Enter email'
      }
    },
    'model.password': {
      presence: {
        message: 'Enter password'
      }
    },
    'model.confirmPassword': {
      presence: {
        message: 'Enter confirm password'
      }
    }
  }
});
