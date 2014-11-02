App.setupForTesting();
module('Unit: Hero');

test('thumbnailUrl correctly concat', function(){
	var hero = App.Hero.create();
	hero.set('thumbnail', {path:'hero', extension:'png'});
	equal(hero.get('thumbnailUrl'), 'hero.png');
});