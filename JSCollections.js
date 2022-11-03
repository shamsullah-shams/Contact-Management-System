

// Two Types Of Collections

// 1:- Set
// 2:- Map

// initialise Empty Set
const set = new Set();


// add any thing to the set
set.add({ Name: "Khan" });
set.add(1);
set.add(10);
set.add(100);
set.add(100);
set.add(1000);
set.add(10000);
set.add(100000);

// check size of Set
console.log("Size of Set : ", set.size); // Size is Not Function But it is a Property


// check wheather the set has a value
console.log("Does The Set has the value \n", set.has(2)) // set.has() is a function it returns True Or False



// set.clear() // this is a function and it clears all values of set
// set.clear();


// delete a specific value in the set
set.delete(1)


// set.entries function returns an object that contains arrays of only two same values
console.log(set.entries())


// it is an alias for set
const alias = set.keys();
console.log(alias);


const value = set.values()
console.log(value);



/*
*
*
*   Second Collection in JavaScript
*
*  Map 
*/



const map = new Map();

// the set method needs a key and value pair and adds to the map Object
map.set(1, "shams");
map.set(1, "shamsdsdf");

// the clear method clears all the map object
// map.clear();

// the Map.Delete Method needs a key to the object and returns a boolean
const result = map.delete(2)

// the entries method returns an iteratable object which contains arrays of key values
const iteratableObject = map.entries();


// Returns a specified element from the Map object
const specificObject = map.get(1)

// Returns an iterable of keys in the map only returns keys
const iteratableArray = map.keys()


// Returns Only Values
const values = map.values()
console.log(map.size);









