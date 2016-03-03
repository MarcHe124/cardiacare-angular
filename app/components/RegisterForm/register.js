'use strict';

angular.module('app.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register11111111', {
    templateUrl: 'components/RegisterForm/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', [function() {

}]);