App.UsersUserRoute = Ember.Route.extend({
	model: function(params) {
		var user = this.modelFor('users').findBy('id', parseInt(params.id));
		return App.User.create(user);
	},
	setupController: function(controller, model) {
		controller.set('model', App.User.create(model));
	}
});