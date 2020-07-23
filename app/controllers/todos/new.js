import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    addToDo: function () {
      const title = this.get("title");
      const date = this.get("date");
      const body = this.get("body");

      const newToDo = this.store.createRecord("todo", {
        title,
        date: new Date(date),
        body,
      });

      newToDo.save();

      this.setProperties({
        title: "",
        body: "",
        date: "",
      });
    },
  },
});
