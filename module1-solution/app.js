(function(){

'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope']

  function LunchCheckController($scope)  {
    $scope.items="";

    $scope.sayMessage=function(){
      var items=$scope.items;
      var length=items.split(',').length;

      if(items==""){
        $scope.message=  "Please enter data first";
      }
      else if(length<=3){
        $scope.message=  "Enjoy!";
      }
      else if(length>3){
        $scope.message=  "Too much!";
      }
    }
  }

})()
