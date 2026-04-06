var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.tasks = [];

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = '';
        }
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
    };
});
