export function initialize(application) {
  application.inject('route', 'session', 'service:session');
}

export default {
  name: 'initialize-services',
  initialize
};
