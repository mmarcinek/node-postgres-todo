;(function (){

  'use strict';

  angular.module('nodeTodo', [])

  .controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.todoData = {};

    // Get all Todos
    $http.get('/api/v1/todos')
      .success( function(data) {
        $scope.todoData = data;
        console.log(data);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });

  });

}());
