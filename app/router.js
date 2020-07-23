import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.resource("todos", function () {
    this.route("edit");
    this.route("new", { path: "/new" });
  });
});

export default Router;
