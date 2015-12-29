angular
	.module('mindApp')
	.controller('addController', addController);

function addController($scope, $location, $http) {
	$scope.addCompany = function(title, file) {
		var data = { title: title, files: file };
		$http.post('/add_account', data)
			.then(function(response) {
			$location.path('/list');
		})
	}
};