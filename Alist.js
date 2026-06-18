let list=[1,2,3,11,22,33,20]
list.filter(list => list >10);

console.log(list.map(list => list *2));

//or

let list=[1,2,3,11,22,33,20]
function display(arr){
    return arr
    .filter(list => list >10)
    .map(list => list *2);
}
console.log(display(list));
