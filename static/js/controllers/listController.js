angular
	.module('mindApp')
	.controller('listController', listController);

function listController($scope, $rootScope, $http, $location) {
	$http.get('/load_index_data')
		.then(function(response) {
			if (response.data.code == 200) {
				// $rootScope.returndata = response;
				// $scope.returndata = $rootScope.returndata;
				$scope.returndata = response;
				// console.log($rootScope.returndata.data.login);
				// console.log($rootScope.returndata.data);
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
			var date = new Date(datetime*1000);
			return (date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear());
			// return date;
		}

	}
};