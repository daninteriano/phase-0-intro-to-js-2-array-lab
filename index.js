// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    let newCats = cats.push(name);
    return newCats
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
   let newCats = cats.unshift(name);
   return newCats
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name){
    let newCats = cats.pop(name);
    return newCats
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat(name){
    let newCats = cats.shift(name);
    return newCats
}
function appendCat(name){
    let newCats = [...cats, name]
    return newCats
}
appendCat("Broom");

function prependCat(name){
    let newCats = [name, ...cats]
    return newCats;
}
prependCat("Arnold");

function removeFirstCat(){
    let newCats = cats.slice(1)
    return newCats;
}
function removeLastCat(){
    let newCats = cats.slice(0, cats.length -1);
    return newCats
}

removeFirstCat();
removeLastCat();
