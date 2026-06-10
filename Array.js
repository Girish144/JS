let myarray=[1,2,3,4,5];
console.log(myarray);
//Accessing Elements
console.log(myarray[0]);
console.log(myarray[3]);
//Modifying Elements
myarray[2]=200;
console.log(myarray);
//1. push() – Add to the end
myarray.push(6);
console.log(myarray);

//2.pop() – Remove from the end
myarray.pop();
console.log(myarray);

//3. unshift() – Add to the beginning
myarray.unshift(0);
console.log(myarray);

//4.shift() – Remove from the beginning
myarray.shift();
console.log(myarray);

//5. indexof() – Find the index of an element
console.log(myarray.indexOf(4));

//6. includes() – Check if an element exists
console.log(myarray.includes(5));

//7.filter() – Create a new array with elements that pass a test
let evenNumbers=myarray.filter(num=>num%2===0);
console.log(evenNumbers);

//8.map() – Create a new array by applying a function to each element
let double=myarray.map(num=>num*2);
console.log(double);

//9.reduce() – Reduce the array to a single value
let sum=myarray.reduce((total,num)=>total+num,0);
console.log(sum);



