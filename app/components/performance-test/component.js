import Ember from 'ember';

export default Ember.Component.extend({
  username: '',
  tagName: 'paper-card',
  actions: {
    signIn() {
      alert('signed in as ' + this.get('username'));
    },
    updateName() {
      this.set('username', event.target.value)
    }
  }
});
