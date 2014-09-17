App.HeroesHeroRateRoute = Ember.Route.extend({
	model: function() {
		var hero = this.modelFor('heroes.hero');
		return App.Hero.create(hero);
	},
	setupController: function(controller, model) {
		controller.set('model', App.Hero.create(model));
	}
});