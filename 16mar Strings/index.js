// ****************** String Method ************


// 1.length
// The length of the string is:

// let a = "sandeep     Kumar";
// let length = a.length
// console.log(length);





// 2.charAt()
// The at() method returns an indexed element from a string

// let string = "my name is ravin";
// let char = string.charAt(6);
// console.log(char)





// 3.charCodeAt()
// The charCodeAt() method returns the unicode of the character at a given position in a string

// let string = "my name is ravin";
// let char = string.charCodeAt(6);
// console.log(char);






// 4.at()
// The at() method returns an indexed element from a string

// let string = "SANDEEP";
// let char = string.at(6);
// console.log(char);





//5. []
// The at() method returns an indexed element from a string

// let string = "SANDEEP";
// let char = string[1];
// console.log(char);





// 6.slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// let string = "sandeep Kumar";
// let char = string.slice(1,5)
// console.log(char);

// Extract a part of a string counting from the end

// let text = "Apple, Banana, Kiwi";
// let char = text.slice(2);
// console.log(char);

// Extract a part of a string counting from the end
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12,-6);
// console.log(part);






// 7. substring()
// The substring() method extract a part of a string and returns the extracted parts in a new string

// let text = "Apple, Banana, Kiwi";
// let char = text.substring(7,13)
// console.log(char);



// 8.substr()
// let text = "Apple, Banana, Kiwi";
// let char = text.substr(7,6)




// 9.toUpperCase()

// let string = "Nonsense students";
// let char = string.toUpperCase();
// console.log(char);





// 10.toLowerCase()

// let string = "NONSENSE STUDENT";
// let char = string.toLowerCase();
// console.log(char);



// 10.concat()
// The concat() method can be used instead of the plus operator. These two lines do the same:

// let text1 = "hello";
// let text2 = "World"
// let char = text1 + " " + text2;
// console.log(char)

// let char = text1.concat(" ",text2," ","sandeep", "sourabh")
// console.log(char);





// 11.trim()
// The trim() method removes whitespace from both sides of a string:

// let text = "                    hello Sandeep       ";
// let length = text.length;
// console.log(length);

// let char = text.trim();
// let legthtrim = char.length

// console.log(legthtrim);
// console.log(char);



// 12.padStart & padEnd
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// let a = "5";
// let b = a.padStart(6,"z")
// console.log(b);



// 13.replace()

// let text = "Please visit Microsoft!";
// let newText = text.replace("visit", "W3Schools");
// console.log(newText);




// 14.replaceAll()

// let text = "I love cats. Cats are very easy to love.Cats  are very popular.";
// text = text.replaceAll("Cats", "Dogs");
// text = text.replaceAll("cats", "dogs");
// console.log(text);





// 15.split()

// let string = "hello"
// let split = string.split("")
// console.log(split[2])

// let text = "123456789";
// let splittext = text.split("45");
// console.log(splittext);







