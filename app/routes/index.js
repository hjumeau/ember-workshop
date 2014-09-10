App.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.replaceWith('users');
	}	
});
