
'use strict';

angular.module('signup').factory('signupService',function($http){

// var signUpUserDataPoint =  'api/user/signup',
//     dataFactory = {};
//     dataFactory.signUpUser = function(formdata) {        
//     var formParam = {
//         data: formdata
//      }
//     return $http.post(signUpUserDataPoint, formParam);
//   }
//   return dataFactory;

return {
  	signUpUser:function(formData){
alert(formData)
console.log(formData)
  		//var data = {username:username,password:password};
  		 return $http({
                method:'post', 
                url: 'api/user/signin',
                data: JSON.stringify(formData),
                headers: {'Content-Type': 'application/json'}
            })
       }

  }
});
