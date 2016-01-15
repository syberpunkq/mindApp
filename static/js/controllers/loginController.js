angular
	.module('mindApp')
	.controller('loginController', loginController); 

function loginController($scope, $rootScope, $http, $location) {
	
	$scope.send = function(login, password) {
		var data = { login: login, password: password };
		$http.post('/login', data)
				.then(function(response) {
					if (response.data.code == 200) {
						$http.get('/load_index_data')
							.then(function(response) {
									$rootScope.returndata = response;
									$scope.returndata = response;
									console.log('User successfully logged:');
									console.log($scope.returndata.data.login);
									$location.path('/list');

							});
					}
					else {
						$scope.wrongLogin="Wrong login or password";
					}
				});
	}; //$scope.send
};