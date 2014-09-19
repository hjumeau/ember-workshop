Ember.Handlebars.helper('display-score', function(rating) {
  return new Ember.Handlebars.SafeString('<span class="highlight">'+rating+'</span>/20');
});