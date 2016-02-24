angular
	.module('mindApp')
	.controller('accountController', accountController);

	function accountController ($routeParams, $scope, $http, $rootScope) {

		$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code == 200) {
					$rootScope.returndata = response;
					$scope.returndata = $rootScope.returndata;
					// console.log($scope.returndata.data.login);
					// console.log($rootScope.returndata.data);
					main();
				}
				else {
					$location.path('/login');
				}
			});		 

		function main() {
		function findAccount(array, value) {
			console.log("THe value is " + value);
			console.log("The array length is " + array.length);
			for (var i = 0; i < array.length; i++) {
					console.log("-- " + array[i]._id.$oid);
				if (array[i]._id.$oid == value) return array[i];
			
			}
		};
		$scope.currentAccount = findAccount($rootScope.returndata.data.accounts, $routeParams.id);


		
		// $scope.accountName = currentAccount.title;
		console.log($scope.currentAccount);
	}
	};