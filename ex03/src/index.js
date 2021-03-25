function* myGenerator(a1, a2, a3){
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* [a1, a2, a3];
}

let iterator = myGenerator(6, 7, 8);
let generatorArray = [];

for(let e of iterator){
    generatorArray.push(e);
}
console.log(generatorArray);

module.exports = {generatorArray, myGenerator};
