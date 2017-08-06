var combatApp = angular.module('combatApp', ['ngRoute']);

// create the controller and inject Angular's $scope

combatApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html'
        })

        .when('/about', {
            templateUrl : 'pages/about.html'
        })

        .when('/calendar', {
            templateUrl : 'pages/calendar.html'
        })

        .when('/resources', {
            templateUrl : 'pages/resources.html'
        })

        .when('/contact', {
        templateUrl : 'pages/contact.html'
    });
});
