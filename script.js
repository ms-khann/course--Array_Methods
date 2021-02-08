/*it will make an iterator object. index will convert into object keys.*/
let arr = ["a", "b", "c", "d", "e"];
let arr2 = [16, 14, 13];
let arr_ent = arr.entries();
// console.log(arr_ent.next().value);

let arr_every = arr2.every(function (current) {
    return current >= 10;
});
// console.log(arr_every);

let arr_some = arr2.some(function (current) {
    return current <= 15;
});
// console.log(arr_some);

// Array.keys()
// it will return an iterator Object
let arr_keys = arr2.keys();
// console.log(arr_keys.next());
// console.log(arr_keys.next());
// console.log(arr_keys.next());

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(animals.lastIndexOf('Dodo'));

Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]


// Array.recduceRight()
const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
].reduceRight((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
});
// console.log(array1);



let price = [100,9,99,9,56.45];
let price_arr = price.toLocaleString('en-Us',{style:'currency',currency:'USD'});
// console.log(price_arr);
// console.log(price.toLocaleString('ar-EG'));


const array2 = ['a', 'b', 'c'];
const iterator = array2.values();
// console.log(iterator.next());






function makeArray(m,n,val){
    let arr = Array(m);
    let arr2 = Array(n);
    arr2.fill(val);
    arr.fill(arr2);
    return arr;
}
// console.log(makeArray(3,4,1));


let arr_val = [1,3,1,4,5,3,2];

function removeDuplicate(arr){
    return [...new Set(arr)];
}
// console.log(removeDuplicate(arr_val));
// const current_board = Array.from(new Array(h_rows), () =>
// 		Array.from(new Array(h_cols), () => '')
// 	);


let count_word = ['apple', 'mango', 'banana', 'apple', 'kiwi'];
function countWord(arr){
    let obj = {};
    let count = 0;
    let current;
    for(let i=0;i<arr.length;i++){
        current = arr[i];
        for(let j=0;j<arr.length;j++){
            if(arr[j] == current){
                count++;
            }
        }
        obj[current] = count;
        count = 0;
    }
    return obj;
}
console.log(countWord(count_word));