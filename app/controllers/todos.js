import Ember from "ember";

export default Ember.Controller.extend({
  filter: "",
  filteredTodos: function () {
    const filter = this.get("filter");
    const rx = new RegExp(filter, "gi");
    const todos = this.model;

    return todos.filter((todo) => {
      return todo.get("title").match(rx) || todo.get("body").match(rx);
    });
  }.property("arrangedContent", "filter"),

  sortedProperties: ["date:asc"],
  sortedTodos: Ember.computed.sort("model", "sortedProperties"),
});
