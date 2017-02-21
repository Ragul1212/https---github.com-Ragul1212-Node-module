'use strict';

angular.module('signup',[]).controller('SignUpController', ['$rootScope', '$scope', '$state', '$http', '$location', '$window', 'signupService',
	function($rootScope, $scope, $state, $http, $location, $window, signupService){
	$scope.isLoading = false;
	$scope.alert = '';
	$scope.signup = function(valid){
	console.log($scope.user);	
		 $scope.isLoading = false;
		if(valid){
			var userData = {username:$scope.user.email,password:$scope.user.password,sfid:'',active:true}		
			if($scope.user.email != null && $scope.user.password != null){
				if($scope.user.password == $scope.user.confirmPassword){	
					signupService.signUpUser(userData).then(function (response){
						$state.go('dashboard');			
					},
					function(response){
					 $scope.alert = response.data.message;
					 $scope.error = response.data.message;
					 $scope.errorMessage = response.data.message;
   				  });	
				}
		 	}	
		}
	};	

	$scope.errorClass = function (control, method) {
        if ($scope.userForm[control].$invalid && !$scope.userForm[control].$pristine) {
           return (method == "class" ? 'has-error' : true);
        }
    };

	
}


]);