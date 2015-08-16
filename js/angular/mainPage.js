(function(){
	var app = angular.module('appPage',[]);
	
	app.controller('MainController', function() {

		this.hidden = 0;
	});
	app.directive('headerAndLinks', function(){
		return {
			restrict:'E',
			templateUrl:'directives/header.html'
		};
	});
})();