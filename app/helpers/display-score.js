Ember.Handlebars.helper('display-score', function(rating) {
  return new Ember.Handlebars.Utils.SafeString('<span class="highlight">'+rating+'</span>/20');
});