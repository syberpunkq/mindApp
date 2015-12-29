

mindApp.controller('mindController', function($scope, $rootScope, $http, $location) {
		$scope.send = function(login, password) {
			
			var data = { login: login, password: password };
			$http.post('/login', data)
				.success(function(){
					$http.get('/load_index_data')
						.then(function(response){
							$scope.returndata = response;
							console.log("in resp: " + $scope.returndata.data);
							$scope.processing();
						});
				});
			
			// console.log('here is ' + $scope.returndata.data.login);
		}; //$scope.send

		$scope.processing = function() {
			$scope.companies = $scope.returndata.data.all_accounts;
			console.log("all_acounts: " + $scope.returndata.data.all_accounts);
			console.log("login: " + $scope.returndata.data.login);
			// $scope.username = $scope.returndata.data.login;
			$rootScope.username = $scope.returndata.data.login;
			$location.path('/list');
			console.log($scope.username);
		};


	// 	$scope.companies = [{
	// 	name: "Алтайский Государственный Медицинский Университет",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 23 
	// },{
	// 	name: "УФМС России по Ямало-Ненецкому автономному округу - тестовая",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 23 
	// },{
	// 	name: "Телеком-экспресс тестовая",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 20 
	// },{
	// 	name: "Байкал",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 20 
	// },{
	// 	name: "УНИВЕРСИТЕТ ИМЕНИ М.В. ЛОМОНОСОВА - тестовая",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 19 
	// },{
	// 	name: "ИТ-Парадигма - тестовая",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 17 
	// },{
	// 	name: "ПАО Сбербанк - тестовая",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 17 
	// },{
	// 	name: "ОАО Вымпелком",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 14 
	// },{
	// 	name: "Группа Компаний Главпромснабсбыт",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 13 
	// },{
	// 	name: "ООО Вектор",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 11 
	// },{
	// 	name: "ОАО Газпром",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 9 
	// },{
	// 	name: "Негосударственное общеобразовательное учреждение Мариупольская Академия Экономики",
	// 	year: 2015,
	// 	month: 11,
	// 	day: 5 
	// }] //$scope.companies


}); // mindApp.controller

mindApp.controller('listController', )