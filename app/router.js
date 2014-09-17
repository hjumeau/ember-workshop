App.Router.map(function() {
  this.resource('heroes', function(){
  	this.resource('heroes.hero', {path: '/:id'}, function(){
  		this.route('rate');
  	});
  });
});