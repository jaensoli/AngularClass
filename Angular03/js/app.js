/**
 * Created by jaensoli on 23/06/2015.
 */
var app= angular.module('MainApp',['ngRoute','WeatherApp','loan']);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl : 'partials/_weather.html',
            controller  : 'WeatherCtrl'
        })

        .when('/weather', {
            templateUrl : 'partials/_weather.html',
            controller  : 'WeatherCtrl'
        })

        .when('/loan', {
            templateUrl : 'partials/_loan.html',
            controller  : 'ClientCtrl'
        });
});