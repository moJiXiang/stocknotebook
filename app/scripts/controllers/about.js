'use strict';

/**
 * @ngdoc function
 * @name stockstudyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stockstudyApp
 */
angular.module('stockstudyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
