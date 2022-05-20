/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    var count = 0;
    for(var i = low;i<high+1;i++){
        if(i == 0 || i%2 == 0){
            count = count;
        }else{
            count++;
        }
    }
    return count;
}