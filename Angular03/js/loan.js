/**
 * Created by jaensoli on 06/06/2015.
 */
var app= angular.module("loan",[]);


//Directive copied from Angular JS We Page for validating number
var INTEGER_REGEXP = /^\-?\d+$/;
app.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }

                if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }

                // it is invalid
                return false;
            };
        }
    };
});



app.controller("ClientCtrl", function($scope){

   $scope.client=[
       {
           "name": "Andrey",
           "age":22,
           "amount":1000,
           "email":"andrey@gmail.com"

       } ,
       {
           "name": "Melissa",
           "age":28,
           "amount":2000,
           "email":"melissa@gmail.com"
       },
       {
           "name": "Deybi",
           "age":32,
           "amount":500,
           "email":"deybi@gmail.com"

       }
   ]

    $scope.AddArray= function(isValid){

        if(isValid){

            $scope.client.push({"name":$scope.NewName,"age":$scope.NewAge,"amount":$scope.NewAmount,"email":$scope.NewEmail});

        }

    }

    $scope.DeleteArray=function(index){
        $scope.client.splice(index,1);
    }

    $scope.Clear= function(){
        $scope.NewName="";
        $scope.NewAge="";
        $scope.NewAmount="";
        $scope.NewEmail="";
    }

});