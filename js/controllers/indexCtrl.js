var app = angular.module('BlackBardApp', ['ngMaterial', 'ui.router', 'ngRoute', 'ngMessages', 'ngResource', 'ngSanitize', 'md.data.table']);


app.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/login');

   $stateProvider
       // .state('....', {
       //     url: '/....',
       //     controller: '.....',
       //     templateUrl: '....'
       // })



});

app.controller('indexCtrl', ['$scope', '$rootScope', '$http', '$timeout', '$location', '$interval', function ($scope, $rootScope, $http, $timeout, $location, $interval) {


}]);