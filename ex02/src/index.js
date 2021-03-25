function* myGenerator(){
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
};
function* insideGenerator1(){
    for(let i = 1; i <= 5; i++){
        let x = i;
        yield x;
    }
};
function* insideGenerator2(){
    for(let i = 10; i <= 15; i++){
        let x = i;
        yield x;
    }
};
function* insideGenerator3(){
    for(let i = 6; i <= 9; i++){
        let x = i;
        yield x;
    }
};

let iterator = myGenerator();

let fifteenArray = [];

for(let e of iterator){
    fifteenArray.push(e);
    fifteenArray.push(iterator.next().value);

}
console.log(fifteenArray);
module.exports = {fifteenArray, myGenerator};