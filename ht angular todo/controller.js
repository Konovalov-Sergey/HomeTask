angular.module('todoApp.controller',[])
.controller('todoController', ["$scope", function($scope) {
		$scope.newTask = "";
		$scope.taskList = [
			{description: "Buy tickets", done:false},
			{description: "Make reservation", done:false},
			{description: "to pack", done:false},
		];

		$scope.addTodo = function() {
			$scope.taskList.push({description: $scope.newTask, done:false});
			$scope.newTask = "";
		};

		$scope.deleteTodo = function(task) {
			var index = $scope.taskList.indexOf(task);
			$scope.taskList.splice(index, 1);
		};

		$scope.edit = function(task) {
			$scope.activeTask = task;
		};

		$scope.update = function(task) {
			$scope.activeTask = null;
		};

	}]);