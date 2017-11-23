var movieApp = angular.module("movieApp", ["ngRoute"]);

App.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/home.html"
    })
})


App.controller("TestCtrl", function() {
    console.log("testctrl");

});