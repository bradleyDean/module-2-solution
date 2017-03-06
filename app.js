(function(){
    'use strict';
angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', BuyController)
.controller('AlreadyBoughtController', BoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

BuyController.$inject=['ShoppingListCheckOffService'];

function BuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getBuyList();

    toBuy.checkItem = function(itemIndex){
    ShoppingListCheckOffService.checkItem(itemIndex);
    }; 

} 

BoughtController.$inject=['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService){
    var doneBought = this;
    doneBought.items = ShoppingListCheckOffService.getDoneList();
}

function ShoppingListCheckOffService(){
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
