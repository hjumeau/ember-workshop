App.Router.map(function() {
  this.resource('heroes', function(){
  	this.resource('heroes.hero', function(){
  		this.route('rate');
  	});
  });
});