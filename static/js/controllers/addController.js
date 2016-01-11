angular
	.module('mindApp')
	.controller('addController', addController);

function addController($scope, $location, $http) {
	$scope.filesChanged = function(elm) {
		$scope.files=elm.files;

		console.log(files);
		$scope.$apply();
	}
	$scope.submit = function(title) {

		var fd = new FormData();
		fd.append('title', title);
		angular.forEach($scope.files, function(file){
			fd.append('file[]', file);
		})
		$http({
			transformRequest:angular.identity,
			method: 'POST',
			url: '/upload_server',
			headers: {'Content-Type': undefined},
			data: fd
		}).success(function(d) {
			console.log(d);
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
		});0

	}
};