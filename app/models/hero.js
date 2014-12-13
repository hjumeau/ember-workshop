App.Hero = Ember.Object.extend({
	thumbnailUrl: function(){
		return this.thumbnail.path + '.' + this.thumbnail.extension;	
	}.property(),
	detailUrl: function() {
		return this.urls.findBy('type','detail').url;
	}.property(),
	score: function() {
		var score = 0;
		// return rating.strength + rating.agility + rating.intellect + rating.stamina + rating.speed;
		for(var param in this.rating) {
   			score += parseInt(this.rating[param]);
		}
		return score;
	}.property('rating.{strength,agility,intellect,stamina,speed}') 
});