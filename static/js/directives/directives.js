angular
	.module('mindApp')
	.directive('myDirective', function (httpPostFactory) {
	    return {
	        restrict: 'A',
	        scope: true,
	        link: function (scope, element, attr) {

	            element.bind('change', function () {
	                var formData = new FormData();
	                formData.append('file', element[0].files[0]);
	                httpPostFactory('/add_account', formData, function (callback) {
	                    console.log(callback);
	                });
	            });

	        }
	    };
	});

	// .directive('myDirective', myDirective)
	
	// function myDirective(httpPostFactiory) {
	//     return {
	//         restrict: 'A',
	//         scope: true,
	//         link: function (scope, element, attr) {

	//             element.bind('change', function () {
	//                 var formData = new FormData();
	//                 formData.append('Title', 'Test Company');
	//                 formData.append('file', element[0].files[0]);
	//                 httpPostFactory('upload_image.php', formData, function (callback) {
	//                     console.log(callback);
	//                 });
	//             });

	//         }
 //    	};
	// }

