angular
	.module('mindApp')
	.controller('listController', listController);

function listController($scope, $rootScope, $http, $location) {
		$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code == 200) {
					$rootScope.returndata = response;
					$scope.returndata = $rootScope.returndata;
					console.log($rootScope.returndata.data.login);
				}
				else {
					$location.path('/login');
				}		 
			});
	$scope.convertDate = function(datetime) {
		if (datetime === undefined) {
			return "--"
		}
		else {
			var datetime = new Date(datetime);
			return (datetime.getDate() + "." + datetime.getMonth()+1 + "." + datetime.getFullYear());
		}

	}
	
};