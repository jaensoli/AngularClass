/**
 * Created by jaensoli on 14/06/2015.
 */
var app= angular.module("WeatherApp",[]);

//Configura el APP para CORS requests
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});




app.factory('WeatherFactory',['$http','$q',function($http, $q){


    return {

         getWeatherSelect: function (city) {

            var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&mode=json&units=metric&cnt=7';

            var defer2 = $q.defer();

            $http({
                method:'GET',
                url:url,
                dataType: 'jsonp',
                headers: {'Content-Type': 'application/json'}
            }).
                success(function(data, status, headers, config){
                    defer2.resolve(data);
                }).
                error(function(data, status, headers, config){
                    defer2.reject(data);
                });

            return defer2.promise;
        }

    }


}]);



app.controller('WeatherCtrl',['$scope','WeatherFactory',function($scope,WeatherFactory){

    $scope.date = new Date();

    $scope.citiesArray=["San Jose,CR","London,UK","Brasilia,BR","Paris,FR","Bucharest,RO","Roma,IT","New York, US"];

    $scope.city="San Jose,CR";

    WeatherFactory.getWeatherSelect($scope.city).then (function (data) {
        $scope.weatherArray = data.list;

    });


    $scope.selectCity= function(){
        var tesT=$scope.city;
        WeatherFactory.getWeatherSelect($scope.city).then (function (data) {
            $scope.weatherArray = data.list;
        });



    };









}]);

