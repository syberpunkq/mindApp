angular
	.module('mindApp')
	.controller('generateController', generateController);

function generateController($scope, $http, $location) {

  	$scope.today = function() {
    $scope.dt = new Date();
  	};
  	$scope.today();

  	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  	$scope.format = $scope.formats[0];
  	  $scope.altInputFormats = ['M!/d!/yyyy'];

  	$scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

   $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

	$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code != 200) {
					$location.path('/login');
				}	
			});
	$scope.generate = function(conferenceCount, confCount, webinarCount, userCount, domains, notAfter, notBefore, term, holder, eventType, speakerCountConferernce, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar) {
		var data = {account_id: "69620ee6e9552770af05386", license_name: "Test license", license_data:{conferenceCount: conferenceCount, confCount: confCount, webinarCount: webinarCount, userCount, domains, notAfter, notBefore, term, holder, eventType, speakerCountConferernce, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar}}
		$http.post('/generate', data)
			.then (function(response){
				if(response.data.code == 200) {
					$location.path('/list');
				}
				else {
					$scope.error="Something goes wrong";
					console.log('something goes wrong');
				}
			});
		};

};