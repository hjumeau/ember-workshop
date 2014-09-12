App.UsersRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('/api/users').done(function(data) {
    	return data.map(function(user){
    		return App.User.create(user);
    	});
    });
  }
});