'use strict';

angular.module('app.signin', [
  'ngRoute',

])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'signin/signin.html'
  });
}])

.directive("login", function() {
  return {
    templateUrl: "components/LoginForm/login.html",

  }
})
