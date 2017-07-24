import Ember from 'ember';
import DS from 'ember-data';
const { get, set } = Ember;

export default Ember.Route.extend({
  model(param) {
    return new Promise((resolve, reject) => {
      reject(new DS.Errors({
        status: 404
      }));
    })
  },
  
  renderTemplate(controller, model) {
    this._super(...arguments);
  }
});
