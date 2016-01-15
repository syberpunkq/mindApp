angular
	.module('mindApp')
	.controller('generateController', generateController);

function generateController($scope, $http, $location) {
	$http.get('/load_index_data')
			.then(function(response) {
				if (response.data.code != 200) {
					$location.path('/login');
				}	 
			});
	$scope.generate = function(conferenceCount, confCount, webinarCount, userCount, domains, notAfter, notBefore, term, holder, eventType, speakerCountConferernce, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar) {
		var data = {conferenceCount: conferenceCount, confCount: confCount, webinarCount: webinarCount, userCount, domains, notAfter, notBefore, term, holder, eventType, speakerCountConferernce, attendeeCountConference, speakerCountWebinar, attendeeCountWebinar, documentEnabledConference, whiteboardEnabledConference, pollEnabledConference, desktopsharingEnabledConference, recordingEnabledConference, documentEnabledWebinar, whiteboardEnabledWebinar, pollEnabledWebinar, desktopsharingEnabledWebinar, recordingEnabledWebinar}
	}
};