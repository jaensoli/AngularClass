/**
 * Created by jaensoli on 06/06/2015.
 */
var app= angular.module("loan",[]);

app.controller("ClientCtrl", function($scope){

   $scope.client=[
       {
           "name": "Andrey",
           "age":22,
           "amount":1000

       } ,
       {
           "name": "Melissa",
           "age":28,
           "amount":2000
       },
       {
           "name": "Deybi",
           "age":32,
           "amount":500

       }
   ]

    $scope.AddArray= function(){
        $scope.client.push({"name":$scope.NewName,"age":$scope.NewAge,"amount":$scope.NewAmount});
        $scope.NewName="";
        $scope.NewAge="";
        $scope.NewAmount="";
    }

    $scope.DeleteArray=function(index){
        $scope.client.splice(index,1);
    }

});