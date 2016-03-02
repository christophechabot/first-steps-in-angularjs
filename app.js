'use strict';

var myApp = angular.module("myApp", []);

myApp.controller("myCtrl", ["$scope", function($scope) {
    
    $scope.text = "Hello";
    
    $scope.colors = ["red", "blue", "green", "red"];
    
    $scope.addColor = function() {
        $scope.colors.push($scope.text);
        $scope.text = "";
    };
    
}]);


