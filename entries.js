/*it will make an iterator object. index will convert into object keys.*/
let arr = ["a","b","c","d","e"];
let arr2=[16,14,13];
let arr_ent = arr.entries();
// console.log(arr_ent.next().value);


let arr_every = arr2.every(function(current){
    return current>=10
});
// console.log(arr_every);

let arr_some = arr2.some(function(current){
    return current<=15;
});
// console.log(arr_some);

