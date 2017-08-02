import Ember from 'ember';
import ValidationsSignupMixin from 'archive/mixins/validations/signup';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/signup');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsSignupObject = Ember.Object.extend(ValidationsSignupMixin);
  let subject = ValidationsSignupObject.create();
  assert.ok(subject);
});
