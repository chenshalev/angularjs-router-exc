var movieApp = angular.module("movieApp", ["ngRoute"]);

movieApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home.html"
    })
    .otherwise({
        redirectTo: "/"
      });
});