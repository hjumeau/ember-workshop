App.HeroesHeroRoute = Ember.Route.extend({
	model: function(params) {
		var hero = this.modelFor('heroes').findBy('id', parseInt(params.id));
		return App.Hero.create(hero);
	},
	setupController: function(controller, model) {
		controller.set('model', App.Hero.create(model));
	},
	actions:{
		remove: function(id){
			var heroes = this.modelFor('heroes');
			heroes.removeObject(heroes.findBy('id', id));
			this.transitionTo('heroes');
		}
	}
});