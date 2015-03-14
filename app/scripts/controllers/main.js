'use strict';

/**
 * @ngdoc function
 * @name stockstudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockstudyApp
 */
angular.module('stockstudyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
