let shoppingList = new Map();

shoppingList.set("Banana", "3");
shoppingList.set("Pineapple", "5");
shoppingList.set("Pear", "2");
shoppingList.set("Carrot", "10");
shoppingList.set("Apple", "1.5");

let arrKey = [];

for(let e of shoppingList.entries()){
    arrKey.push(`${e[0]}`);
}
for(let e of arrKey){
    console.log("groceries:",e);
}

let arrValue = [];

for(let e of shoppingList.entries()){
    arrValue.push(`${e[1]}`);
}

for(let e of arrValue){
    console.log("amount:",e);
}

for(let e of shoppingList.entries()){
    console.log(e);
}
module.exports = {shoppingList, arrKey, arrValue};