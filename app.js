(function(){
    'use strict';
angular.module('ShoppingListApp', [])
.controller('BuyController', BuyController)
.controller('BoughtController', BoughtController)
.service('ListService', ListService);

BuyController.$inject=['ListService'];

function BuyController(ListService){
    var toBuy = this;
    toBuy.items = ListService.getBuyList();

    toBuy.checkItem = function(itemIndex){
    ListService.checkItem(itemIndex);
    }; 

} 

BoughtController.$inject=['ListService'];
function BoughtController(ListService){
    var doneBought = this;
    doneBought.items = ListService.getDoneList();
}

function ListService(){
    var service = this;
    var buyList = [
        {name: 'cookies', quantity: 10},
        {name: 'squid', quantity: '3 lbs'},
        {name: 'beans', quantity: '2 lbs'},
    ];

    var doneList = [];

    service.getBuyList = function(){
        return buyList;
    };

    service.getDoneList = function(){
        return doneList;
    };

    service.checkItem = function (itemIndex) {
        console.log(itemIndex);
        doneList.push(buyList[itemIndex]);
        buyList.splice(itemIndex,1);

      };

} 


})();
