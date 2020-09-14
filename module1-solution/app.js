(function(){

'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope']

  function LunchCheckController($scope)  {
    $scope.items="";

    $scope.sayMessage=function(){
      
      var itemsstr=$scope.items;
      var items=items.split(',');
      var count=0;
      
     
      for (var i = 0; i < itemsstr.split(',').length; i++) {
         //I do NOT consider empty item
        if(items[i]!=""){
          count=count+1;
        }
      }
      

      if(count==0){
        $scope.message=  "Please enter data first";
      }
      else if(count<=3){
        $scope.message=  "Enjoy!";
      }
      else if(count>3){
        $scope.message=  "Too much!";
      }
    }
  }

})()
