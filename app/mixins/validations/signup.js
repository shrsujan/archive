import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    'model.fullName': {
      presence: {
        message: 'Enter full name'
      },
      format: {with: /^[a-z0-9A-Z.,! \s-]+$/, allowBlank: true, message: 'Sorry! Only alphanumeric values are allowed'},
      length: {
        minimum: 5,
        maximum: 100,
        messages: {
          tooShort: 'Your full name must be at least 5 characters',
          tooLong: 'Your full name can not exceed 100 characters'
        }
      }
    },
    'model.email': {
      presence: {
        message: 'Enter email address'
      },
      format: {with: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i,allowBlank: true, message: 'Please enter a valid email address. Eg: johndoe@gmail.com'}
    },
    'model.password': {
      presence: {
        message: 'Enter your password'
      },
      length: { minimum: 6, allowBlank: true, messages: { tooShort: 'Your password must be at least 6 characters'} },
      format: {with: /^[A-Za-z0-9_@./#&+-]*$/, allowBlank: true, message: 'These characters are not allowed'},
      confirmation: {
        message: 'Confirmation password does not match your match password'
      }
    },
    'model.passwordConfirmation': {
      presence: {
        message: 'Confirm your password'
      }
    }
  }
});
