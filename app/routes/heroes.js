App.HeroesRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('/api/heroes').done(function(data) {
    	return data.map(function(user){
    		return App.Hero.create(user);
    	});
    });
  }
});