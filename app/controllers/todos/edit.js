import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    editToDo: function (id) {
      const title = this.get("model.title");
      const date = this.get("model.date");
      const body = this.get("model.body");

      this.store.findRecord("todo", id).then((todo) => {
        todo.set("title", title);
        todo.set("date", new Date(date));
        todo.set("body", body);

        todo.save();

        this.transitionToRoute("todos");
      });
    },

    deleteToDo: function (id) {
      this.store.findRecord("todo", id).then((todo) => {
        todo.deleteRecord();
        todo.save();
        this.transitionToRoute("todos");
      });
    },
  },
});
