angular
	.module('mindApp')
	.controller('addAccountController', addAccountController);

function addAccountController($scope, $location, $http) {
	$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code != 200) {
					$location.path('/login');
				}	 
			});
	$scope.filesChanged = function(elm) {
		$scope.files=elm.files;

		console.log(files);
		$scope.$apply();
	}
	$scope.submit = function(title) {

		var fd = new FormData();
		// fd.append('title', title);
		angular.forEach($scope.files, function(file){
			fd.append('files[]', file);
		})
		$http({
			transformRequest:angular.identity,
			method: 'POST',
			url: '/upload_server',
			headers: {'Content-Type': undefined},
			data: fd
		}).success(function(d) {
			console.log(d);
			var fd = new FormData();
			console.log(title);
			console.log(d.files);
			fd.append('title', title);
			fd.append('files[]', JSON.stringify(d.files)); 
			console.log(JSON.stringify(d.files));
					$http({
			transformRequest:angular.identity,
			method: 'POST',
			url: '/add_account',
			headers: {'Content-Type': undefined},
			data: fd
		}).success(function(d) {
			console.log(d);
			$location.path('/list');
		});
		});

	}
};