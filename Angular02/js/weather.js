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

    var url='http://api.openweathermap.org/data/2.5/forecast/daily?q=San%20Jose,cr&mode=json&units=metric&cnt=2';

    return {

        getWeather: function () {

            var defer = $q.defer();

            $http({
                method:'GET',
                url:url,
                dataType: 'jsonp',
                headers: {'Content-Type': 'application/json'}
            }).
                success(function(data, status, headers, config){
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config){
                    defer.reject(data);
                });

            return defer.promise;
        }

    }


}]);



app.controller('WeatherCtrl',['$scope','WeatherFactory',function($scope,WeatherFactory){
    $scope.date = new Date();

    WeatherFactory.getWeather().then (function (data) {
        $scope.weatherArray= data.list;
    });



}]);

