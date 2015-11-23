// Build out Handlebars basic SafeString type
SafeString = function(string) {
  this.string = string;
};
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
  return '' + this.string;
};
