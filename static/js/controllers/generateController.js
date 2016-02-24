angular
	.module('mindApp')
	.controller('generateController', generateController);

function generateController($scope, $http, $location) {


	$http.get('/load_index_data')				//check if logged
			.then(function(response) {
				if (response.data.code != 200) {
					$location.path('/login');
				}	
			});

			
	$scope.dateCollapsed = true;
	$scope.type = "conference";
	$scope.documentEnabledConference = true;
	$scope.whiteboardEnabledConference = true;
	$scope.pollEnabledConference = true;
	$scope.desktopsharingEnabledConference = true;
	$scope.recordingEnabledConference = true;
	$scope.documentEnabledWebinar = true;
	$scope.whiteboardEnabledWebinar = true;
	$scope.pollEnabledWebinar = true;
	$scope.desktopsharingEnabledWebinar = true;
	$scope.recordingEnabledWebinar = true;


  	$scope.today = function() {
	    $scope.dt = new Date();
	  	};
  	$scope.today();

  	$scope.format = 'dd.MM.yyyy';

  	$scope.open = function() {
    	$scope.popup1.opened = true;
	};

	$scope.popup1 = {
		opened: false
	};
  	

	$scope.setType = function(type) {
		if (type == "conference") {
			$scope.conferenceCollapsed = false;
			$scope.webinarCollapsed = true;
		}
		else if (type == "webinar") {
			$scope.webinarCollapsed = false;
			$scope.conferenceCollapsed = true;
		}
		else {
			$scope.webinarCollapsed = $scope.conferenceCollapsed = false;
		}
	}

	$scope.period = "trial";
	$scope.setType("conference");


	$scope.setDate = function(year, month, day) {
		$scope.dt = new Date(year, month, day);
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};



	$scope.generate = function(conferenceCount, userCount, domains, holder, eventType, speakerCountConference, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar, agreement) {
		console.log("conferenceCount: " + conferenceCount + ", userCount: " + userCount + ", domains: " + domains + ", period: " + $scope.period + ", holder: " + holder + ", eventType: " + eventType + ", speakerCountConference: " + speakerCountConference + ", attendeeCountConference: " + attendeeCountConference + ", speakerCountWebinar: " + speakerCountWebinar + ", attendeeCountWebinar: " + attendeeCountWebinar + ", documentEnabledConference: " + documentEnabledConference + ", whiteboardEnabledConference: " + whiteboardEnabledConference + ", pollEnabledConference: " + pollEnabledConference + ", desktopsharingEnabledConference: " + desktopsharingEnabledConference + ", recordingEnabledConference: " + recordingEnabledConference + ", documentEnabledWebinar: " + documentEnabledWebinar + ", whiteboardEnabledWebinar: " + whiteboardEnabledWebinar + ", pollEnabledWebinar: " + pollEnabledWebinar + ", desktopsharingEnabledWebinar:" + desktopsharingEnabledWebinar + ", recordingEnabledWebinar: " + recordingEnabledWebinar + ", agreement: " + agreement);

		// =============== date
		currentDate = new Date();
		currentDate = currentDate;
		if ($scope.period == "trial") {
			notBefore = currentDate.toISOString();
			notAfter = new Date();
			notAfter.setDate(currentDate.getDate() + 14);
			notAfter = notAfter.toISOString();
		}
		else if ($scope.period == "tillDate") {
			notBefore = currentDate.toISOString();
			notAfter = $scope.dt.toISOString();
		}
		else {
			notAfter = notBefore = null;
		}

		var domainsArray = domains.split(",");
		holder = "CN=" + holder;


		console.log("Period: "  + $scope.period + " currentDate: " + currentDate +  " notBefore: "  + notBefore + " notAfter: " + notAfter);

		license_data ={

			holder: holder, 

			extra: {
				conferenceCount: conferenceCount, 
				userCount: userCount, 
				domains: domainsArray,

				speakerCountConference: speakerCountConference,
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
				recordingEnabledWebinar: recordingEnabledWebinar

			}, 

			subject: "Imind 2.x", 
			term: null,
			consumerAmount: 1, 
			consumerType: "User", 
			issuer: "CN=Mind Labs LLC",  

			notAfter: notAfter, 
			notBefore: notBefore, 
			eventType: eventType, 


				

}
		
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