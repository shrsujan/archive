import Ember from 'ember';
const loggedInUser = {
  isLoggedIn: false
};

export default Ember.Service.extend({
  getLoggedInUser() {
    return loggedInUser;
  },
  setLoggedInUser() {
    // save user information after logging in
  },
  getAccessToken() {
    return sessionStorage.getItem('archive_web_access_token');
  },
  setAccessToken(token) {
    sessionStorage.setItem('archive_web_access_token', token);
  },
  getRefreshToken() {
    return sessionStorage.getItem('archive_web_refresh_token');
  },
  setRefreshToken(token) {
    sessionStorage.setItem('archive_web_refresh_token', token);
  }
});
