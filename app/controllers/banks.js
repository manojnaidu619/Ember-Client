import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRecord() {
      let username = this.get('name')
      let amount = this.get('cash')
      let newRecord = this.store.createRecord('bank', {
        name: username,
        cash: amount
      });
      newRecord.save()
    }
  }
});
