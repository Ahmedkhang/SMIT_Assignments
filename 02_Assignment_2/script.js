//                                                    chap 20

// let firstNames = ["Lil", "Big"];
// let lastNames = ["Zzz", "Boom"];
// console.log("All combinations:");
// for (let i = 0; i < firstNames.length; i++) {
//     for (let j = 0; j < lastNames.length; j++) {
//         console.log(firstNames[i] + " " + lastNames[j]);
//     }
// }
// // Task 2: Explain loop iterations
// console.log("\n If outer loop runs 3 times and inner loop runs 2 times:");
// console.log("Inner loop will run 3 * 2 = 6 times total");

// // Task 3: Modified nested loop (skip when indexes are same)
// console.log("\nCombinations where indexes are not the same:");
// for (let i = 0; i < firstNames.length; i++) {
//     for (let j = 0; j < lastNames.length; j++) {
//         if (i !== j) {
//             console.log(firstNames[i] + " " + lastNames[j]);
//         }
//     }
// }


//                                               Chap 21
// let city ="KARACHI";
// let user_input = prompt('Enter your city: ');
// user_input = user_input.toLowerCase()
// // console.log(user_input)
// if(user_input === city.toLowerCase()){
//     console.log('You are from Karachi');
// }
// else{
//     console.log('You are not from Karachi');
// }
// changing a case of string is very important especially when you are taking inputs from user and you want to compare it with a string, if you don't change the case of the string then it will not match and you will get false output

//                                              Chap 22

// let word = "JavaScriptRocks";
// word = word.substring(0,5)
// console.log(word)

// let user_input = prompt('Enter a word: ');
// user_input = user_input.charAt(user_input.length - 1)
// console.log(user_input)

// let user_name = prompt('Enter your name: ');
// user_name = user_name.length;
// console.log(user_name)

//                                             Chap 23

// let find_word = "The lazy dog sleeps."
// find_word = find_word.indexOf('dog')
// console.log(find_word) 

// let user_input = prompt('Enter a sentence: ');
// user_input = user_input.includes("hello");
// console.log(user_input)


// let find_word = "The lazy dog sleeps."
// find_word = find_word.indexOf('cat')
// console.log(find_word) 
// it returns a negative value if the word is not found

//                                             Chap 24

// let word = "JavaScript";
// word = word.charAt(3); // since index starts from 0, it will return the 4th character of the string
// console.log(word)
// let word = "JavaScript";
// let user_word = prompt('Enter a word: ');
// let user_position = Number(prompt('Enter a position: '));
// console.log("Character at position:", user_word.charAt(user_position));

// let word = "JavaScript";
// word = word.charAt(20)
// console.log(word) 

//                                            Chap 25

// let sentence  = "This is a bad example"
// sentence = sentence.replace('bad','good')
// console.log(sentence)

// let sentence_2 = "JS is a great programming language. JS is widely used."
// sentence_2 = sentence_2.replaceAll("JS","JavaScript");
// console.log(sentence_2) 

// let msg = 'Hello, Name';
// msg = msg.replace('Name','Ahmed');
// console.log(msg); // Output: Hello, Ahmed

//                                          Chap 26

// let number_round = 2.6
// number_round = Math.round(number_round)
// console.log(number_round)

// let number_floor = 2.6
// number_floor = Math.floor(number_floor)
// console.log(number_floor)

// let number_ceil = 2.6
// number_ceil = Math.ceil(number_ceil)
// console.log(number_ceil)


// let user_number = Number(prompt('Enter a number: '));
// user_number = Math.round(user_number)
// console.log(user_number); // Rounds the number to the nearest integer

// let floor_num = -2.9;
// let ceil_num = -2.9;
// floor_num = Math.floor(floor_num);
// ceil_num = Math.ceil(ceil_num);
// console.log(floor_num); // Since floor rounds down, it will output: -3 because -3 is less than -2.9
// console.log(ceil_num); // Since ceil rounds up, it will output: -2

//                                        Chap 27

// let a = Math.random(); 
// a = Math.round(a)
// a = Math.ceil(Math.random()*6);
// console.log(a) // Generates a random number between 0 and 1

// let a = Math.random();
// let b = Math.round(a)
// console.log(b)

// let a  = Math.floor(Math.random()*9999) + 1000
// console.log("Random Password",a) 

//                                       Chap 28

// let str = "45.67"
// let float_val = parseFloat(str)
// console.log(typeof float_val,float_val)

// let str = "123px"
// let int = parseInt(str)
// console.log(typeof int, int) // Output: number 123

// let str = "abc"
// let int = parseInt(str)
// console.log(typeof int, int) // Output: number NaN (Not a Number)

//                                       Chap 29

// let num = 21
// let str = String(num)
// console.log(typeof str, str) // Output: string "21"

// let str = "2025"
// let num = parseInt(str)
// console.log(num + 10) 

// let str_1 = "100abc";
// let str_2 = "100abc";
// let num_1  =Number(str_1);
// let num_2 = parseInt(str_2);
// console.log(num_1) // Number() converts the legit number into string and returns NaN for non-numeric characters
// console.log(num_2) // parseInt() converts the string to an integer and ignores non-numeric characters at the end


//                                                   Chap 30

// let num_1 = 123.45678;
// num_1 = num_1.toFixed(2)
// console.log(num_1) 

// let num_1 = "12.999"
// num_1 = parseInt(num_1)
// num_1 = Math.round(num_1)
// num_1 = num_1.toFixed(1)
// console.log(num_1)

// let user_number = prompt("Enter a float number: ")
// user_number = Number(user_number).toFixed(3)
// console.log(user_number)

//                                                  Chap 31

// let curr_date = new Date()
// console.log(curr_date)

// let curr_date = new Date();
// let curr_year = curr_date.getFullYear()
// console.log(curr_year)

// let hours = now.getHours();
// let greeting = hours < 12 ? "AM" : "PM";
// console.log("Greeting:", greeting);

// //                                                 Chapter 32 

// console.log("\n🌟🌟🌟 Chapter 32 🌟🌟🌟 ");

// // Task 1: Day, month, year
// let day = now.getDate();
// let month = now.getMonth(); // Months are zero-based
// let currentyear = now.getFullYear();

// console.log("Day:", day);
// console.log("Month:", month);
// console.log("Year:", currentyear);


// // Task 2: Hours and minutes
// let hrs = now.getHours();
// let mins = now.getMinutes();
// console.log("Hours:", hrs);
// console.log("Minutes:", mins);


// // Task 3: Digital clock format
// let h = now.getHours();
// let m = now.getMinutes();
// let time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
// console.log("Digital Clock:", time);

