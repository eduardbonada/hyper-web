
var hyperModule = angular.module('hyperModule', []);

hyperModule.controller('hyperController', function($scope, $http){

	// when landing on the page, get the list of all hyped bands
	$http.get('/api/hyped_bands')
		.then(function(response) {
			$scope.hyped_bands = response.data;
			console.log($scope.hyped_bands);
		});

});
