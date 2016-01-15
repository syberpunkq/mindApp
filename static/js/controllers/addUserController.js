angular
	.module('mindApp')
	.controller('addUserController', addUserController);

function addUserController($scope, $location, $http) {
	$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code != 200) {
					$location.path('/login');
				}	 
			});
	$scope.user_role = 'account_manager';
	$scope.submit = function(user_login, user_role) {
		var data = {user_login: user_login, user_role: user_role};
		console.log(data);
		$http.post('/add_user',data)
			.then(function(response) {
				if(response.data.code == 200) {
					$location.path('/list');
				}
				else {
					$scope.error="Something goes wrong";
					console.log('something goes wrong');
				}
			});
	}
};
