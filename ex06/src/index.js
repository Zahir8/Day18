let rockStar = new Map();
rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

let arr = [...rockStar.keys()];



for(let e of rockStar){
    if (e[0][0].charCodeAt(0) > 97) {
        newRock.set(e[0], e[1]);
    }
}
console.log(newRock);

module.exports = {rockStar, newRock};