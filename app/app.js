'use strict';

var app = angular.module("MyApp", []);


//deprecated in v1.4
// app.controller("GCtrl", function($scope, $http) {
//   $http.get('https://jsonplaceholder.typicode.com/posts')
//     .success(function(data) {
//       $scope.posts = data;
//     })
//     .error(function() {
//        console.log("Failed to get data from server!");
//        $scope.errorMessage = "Failed to get data from server!";
//     });
// });
 

//use .then

app.controller("GCtrl", function($scope, $http) {
  $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) { 
      $scope.posts = response.data;
    })
    .catch(function(response){
      $scope.errorMessage = "Failed to get data from server!";
    })
    .finally(function() {
      console.log("");
    });

});