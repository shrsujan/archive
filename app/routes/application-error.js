import Ember from 'ember';
const { get, set } = Ember;

export default Ember.Route.extend({
  canRetry: false,
  
  setupController(controller, model) {
    set(controller, 'canRetry', true);
  },
  
  renderTemplate(controller, model) {
    let error = this.controllerFor('application').get('error');
    this.render(error.status.toString());
  },
  
  actions: {
    retry() {
      this.controllerFor('application').get('currentTransition').retry();
    }
  }
});
