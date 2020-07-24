import Ember from "ember";

function formatMarkdown(params) {
  return Ember.String.htmlSafe(new showdown.Converter().makeHtml(params[0]));
}

export default Ember.Helper.helper(formatMarkdown);
