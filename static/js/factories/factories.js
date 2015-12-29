angular
	.module('mindApp')
	.factory('httpPostFactory', httpPostFactory)


function httpPostFactory($http) {
	return function (file, data, callback) {
        $http({
            url: file,
            method: "POST",
            data: data,
            headers: {'Content-Type': undefined}
        }).success(function (response) {
            callback(response);
        });
    };
}