// Use this to tell the JavaScript interpreter to parse your code strictly
// Any minor warning/error will be thrown
// It forces you to write clean code, which is always a good thing! :)
'use strict';

// Create an Angular app
var myApp = angular.module("myApp", []);

// Create a controller attached to this app
myApp.controller("myCtrl", ["$scope", function($scope) {
    
    // Declare a few variables
    $scope.text = "Hello";
    
    $scope.colors = ["red", "blue", "green", "red"];
    
    // Declare a method
    $scope.addColor = function() {
        $scope.colors.push($scope.text);
        $scope.text = "";
    };
    
}]);


