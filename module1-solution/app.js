(function(){

'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope']

  function LunchCheckController($scope)  {
    $scope.items="";

    $scope.sayMessage=function(){
      
      var itemsstr=$scope.items;
      var itemlist=itemsstr.split(',');
      var count=0;
      
     
      for (var i = 0; i < itemlist.length; i++) {
         //I do NOT consider empty item as a item
        if(itemlist[i]!=""){
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
