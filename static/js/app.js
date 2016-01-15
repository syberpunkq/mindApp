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
		.when('/add_account', {
			templateUrl : 'static/views/add_account.html',
			controller : 'addAccountController'
		})
		.when('/add_user', {
			templateUrl : 'static/views/add_user.html',
			controller : 'addUserController'
		})
		.when('/list', {
			templateUrl : 'static/views/list.html',
			controller : 'listController'
		})
		.when('/generate', {
			templateUrl : 'static/views/generate.html',
			controller : 'generateController'
		})
		.otherwise({redirectTo: '/'});
	});


	
			






