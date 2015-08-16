(function(){
	var app = angular.module('header',[]);

	app.directive('headerAndLinks', function(){
		return {
			restrict:'E',
			templateUrl:'directives/header.html',
			controller: function(){
				this.refreshScroll = function(){
					$(window).scrollspy('refresh');
				};
			},
			controllerAs: 'head'
		};
	});
	
	
})();