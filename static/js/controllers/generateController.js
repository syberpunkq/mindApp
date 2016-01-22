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
	$scope.generate = function(conferenceCount, confCount, webinarCount, userCount, domains, notAfter, notBefore, term, holder, eventType, speakerCountConferernce, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar, agreement) {

		if domains == "*" {domains: ["*"]};
		// license_data ={conferenceCount: conferenceCount, confCount: confCount, webinarCount: webinarCount, userCount: userCount, domains: domains, notAfter: notAfter, notBefore: notBefore, term: term, holder: holder, eventType: eventType, speakerCountConferernce: speakerCountConferernce, attendeeCountConference: attendeeCountConference, speakerCountWebinar: speakerCountWebinar, attendeeCountWebinar: attendeeCountWebinar, documentEnabledConference: documentEnabledConference, whiteboardEnabledConference: whiteboardEnabledConference, pollEnabledConference: pollEnabledConference, desktopsharingEnabledConference: desktopsharingEnabledConference, recordingEnabledConference: recordingEnabledConference, documentEnabledWebinar: documentEnabledWebinar, whiteboardEnabledWebinar: whiteboardEnabledWebinar, pollEnabledWebinar: pollEnabledWebinar, desktopsharingEnabledWebinar: desktopsharingEnabledWebinar, recordingEnabledWebinar: recordingEnabledWebinar}
		license_data ={

			holder: holder, 

			extra: {
				conferenceCount: conferenceCount, 
				userCount: userCount, 
				domains: domains}, 

			subject: "Imind 2.x", 
			term: term, 
			consumerAmount: 1, 
			consumerType: "User", 
			issuer: "CN=Mind Labs LLC",  
			
			confCount: confCount, // ?????????? conferenceCount?
			webinarCount: webinarCount,  // ????????
			notAfter: notAfter, 
			notBefore: notBefore, 
			eventType: eventType, 
			speakerCountConferernce: speakerCountConferernce, 
			attendeeCountConference: attendeeCountConference, 
			speakerCountWebinar: speakerCountWebinar, 
			attendeeCountWebinar: attendeeCountWebinar, 
			documentEnabledConference: documentEnabledConference, 
			whiteboardEnabledConference: whiteboardEnabledConference, 
			pollEnabledConference: pollEnabledConference, 
			desktopsharingEnabledConference: desktopsharingEnabledConference, 
			recordingEnabledConference: recordingEnabledConference, 
			documentEnabledWebinar: documentEnabledWebinar, 
			whiteboardEnabledWebinar: whiteboardEnabledWebinar, 
			pollEnabledWebinar: pollEnabledWebinar, 
			desktopsharingEnabledWebinar: desktopsharingEnabledWebinar, 
			recordingEnabledWebinar: recordingEnabledWebinar}
		
		var data = {account_id: "69620ee6e9552770af05386", license_name: "Test license", agreement: agreement, license_data: license_data}
		$http.post('/generate1', data) // <============  CHANGE THIS !!!
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