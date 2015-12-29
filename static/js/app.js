angular
	.module('mindApp', []);

angular
	.module('mindApp')
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl : 'static/views/login.html',
			controller : 'loginController'
		})
		.when('/add', {
			templateUrl : 'static/views/add.html',
			controller : 'addController'
		})
		.when('/list', {
			templateUrl : 'static/views/list.html',
			controller : 'listController'
		})
		.when('/generate', {
			templateUrl : 'static/views/generate.html',
			controller : 'mindController'
		})
		.otherwise({redirectTo: '/'});
	});


	
			






