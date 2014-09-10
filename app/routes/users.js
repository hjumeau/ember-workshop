App.UsersRoute = Ember.Route.extend({
  model: function() {
    $.getJSON('/api/users').done(function(data) {
    	return data.map(function(user){
    		App.User.create(user);
    	});
    });
  }
});