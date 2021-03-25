let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let uniqueArray = [...(new Set(numberArray))];

for(let i = 0; i < uniqueArray.length - 1; i++){
    for(let j = i + 1;j<uniqueArray.length; j++ ){
        if (uniqueArray[j] < uniqueArray[i]) {
            let temp = uniqueArray[j];
            uniqueArray[j] = uniqueArray[i];
            uniqueArray[i] = temp;
        }
    }
}
console.log(uniqueArray);
module.exports = {numberArray, uniqueArray};