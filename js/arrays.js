let names = ["Tino", "Ani", "Destino", "Gedoni"];

names[1]= "King";

// console.log(names);

// arrays with the pop method , removes the last item in an array
console.log(names.pop());
console.log(names);

// arrays with the length method , return the total item in an array

console.log(names.length);

// arrays with the push method , adds an item in an array. 
names.push("Jeff", "Wisdom");
console.log(names);

// arrays with the shift method , removes the first item in an array. 
names.shift()
console.log(names);

// arrays with the unshift method , replace the first item in an array. 
names.unshift("Bright")
console.log(names);


// loop thru an array
for(i = 0; i < names.length; i++){
    console.log(names[i]);
}



