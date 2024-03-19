

// **********  String Search ***************

// 1.indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate where");
// console.log(index);

// let index2 = text.indexOf("sourabh");
// console.log(index2);



// 2.lastIndexOf()
// The position of the last occurrence of "locate" is

// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);




// 3.search()
// The search() method returns the position of the first occurrence of a string in a string.

// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// console.log(index);


// 4.match()

// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match("ain");
//global match
// let index = text.match(/ain/g);
// Perform a global, case-insensitive search for "ain":
// let index = text.match(/in/gi);
// console.log(index);




// 5.matchAll()

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// const iterator = text.matchAll(/Cats/gi);
// console.log( Array.from(iterator));



// 6.includes()

// let text = "Hello world, welcome to the universe.";
//  let char = text.includes("world");
// let char = text.includes("world",10);
// console.log(char);





// 7.startWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:

// let text = "Hello world, welcome to the universe.";
// let char = text.startsWith("Hell");
// console.log(char);


// 8.endWith()
// let text = "Hello world, welcome to the universe.";
// let char = text.endsWith("universe.");
// console.log(char);
 

