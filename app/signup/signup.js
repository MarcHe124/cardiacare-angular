'use strict';

angular.module('app.signup', [
  'ngRoute',
  'app.register',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'signup/signup.html'
  });
}])

.directive("register", function() {
  return {
    templateUrl: "components/RegisterForm/register.html"
  }
});
