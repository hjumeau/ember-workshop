App.Hero = Ember.Object.extend({
	thumbnailUrl: function(){
		return this.thumbnail.path + '.' + this.thumbnail.extension;	
	}.property(),
	detailUrl: function() {
		return this.urls.findBy('type','detail').url;
	}.property() 
});