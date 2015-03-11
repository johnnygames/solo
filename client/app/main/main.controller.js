angular.module('todolist')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.todos = [];

    $http.get('/api/todo').success(function(todos) {
      $scope.todos = todos;
    });

    $scope.addTodo = function() {
      if($scope.newTodo === '') {
        return;
      }
      $http.post('/api/todo', { name: $scope.newTodo });
      $scope.newTodo = '';
    };

    $scope.deleteTodo = function(todo) {
      $http.delete('/api/todo/' + todo._id);
    };

  });
