App.HeroesHeroRoute = Ember.Route.extend({
	model: function(params) {
		var hero = this.modelFor('heroes').findBy('id', parseInt(params.id));
		return App.Hero.create(hero);
	},
	setupController: function(controller, model) {
		controller.set('model', App.Hero.create(model));
	}
});