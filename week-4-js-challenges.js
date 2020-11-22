let number = [1, 4, 7];

let overall = 0;
for (var i = 0; i < number.length; i++) {
    overall += number[i];
}
let avgNumber = overall/number.length;


console.log("==========================")


function findNumber(arr,target){
    return arr.indexOf(target)
    };

    
console.log("==========================")

var total = 0;


function coinCounter(coins,amount){
    var coinSorted = coins.sort().reverse();
    var currentAmount = 0;
    for(i = 0;currentAmount >= amount; i++){
        if(currentAmount < amount){
            currentAmount = coinSorted[i] * i
             total = total + 1
            return currentAmount
        }
        else {
            return -1
        }
        }
        return currentAmount
    }


       // for(let i = 0; i < coins.length; i++){
    //     for(total = 0;total < amount; total += coins[i]){
    //         if(coinSorted[i] < amount){
    //             total += coins[i]
    //         }
    //         else if(total + coinSorted[i] < amount){
    //             total += coins[i]
    //         }
    //         // else if(total + coins[i] > amount){
    //         //     return -1
    //         // }
    //         // else {
    //         //     return total
    //         // }
    //     }
    //     }
    //     return 
    // }
    // console.log(total);


















