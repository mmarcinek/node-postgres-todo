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

  $scope.createTodo = function(todoId) {
    $http.post('/api/v1/todos', $scope.formData)
      .success( function(data) {
        $scope.formData = {};
        $scope.todoData = data;
        console.log(data);
      })
      .error( function(error) {
        console.log('Error: ' + error);
      });
  }

  $scope.deleteTodo = function(todoId) {
    $http.delete('api/v1/todos/' + todoId)
      .success( function (data){
        $scope.todoData = data;
        console.log(data);
      })
      .error( function(error) {
        console.log('Error: ' + error);
      });
  };

  });
}());
