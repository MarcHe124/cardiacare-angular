'use strict';

angular.module('app.login', [
  'ngRoute',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginD', {
    templateUrl: 'components/LoginForm/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function($scope) {
    $scope.login = function() {
      $scope.dataLoading = true;
      fakeLogin($scope.username, $scope.password, function(response) {
        if(response.success) {
          console.log($scope.username, $scope.password);
          $location.path('/');
        } else {
          $scope.error = response.message;
          $scope.dataLoading = false;
        }
      });
    }
}]);


var fakeLogin = function (username, password, callback) {

  /* Dummy authentication for testing, uses $timeout to simulate api call
   ----------------------------------------------*/
  $timeout(function(){
    var response = { success: username === 'test' && password === 'test' };
    if(!response.success) {
      response.message = 'Username or password is incorrect';
    }
    callback(response);
  }, 1000);


  /* Use this for real authentication
   ----------------------------------------------*/
  //$http.post('/api/authenticate', { username: username, password: password })
  //    .success(function (response) {
  //        callback(response);
  //    });

};