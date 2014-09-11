App.UsersRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('/api/users').then(function(data) {
    	return data.map(function(user){
    		return App.User.create(user);
    	});
    });
  }
});