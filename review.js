/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
// let x = 5
// if ( x > 1){
//   console.log('true')
// }
// // 2.) Change the value of this variable
// x = 10
// console.log(x)
// 3.) Change the data type of this variable
// x = 'I change to a String!'
// console.log(x)
// 4.) Create another variable and the one from above to concatenate
// let i = 'apples'
// let o = ' can be different colors'
// console.log(i + o)
// 5.) Use any of the variables above or create new ones and print using string interpolation
// const t = 'Time'
// console.log(`The Concept of ${t} Will Never Change`)
// // ================ Variable Names =================
// /* 
//     • Case-sentive! Try it out! :O
//     • Can contain letters, digits, or the symbols $ and _
//     • Can't start with 0-9
//     • Can't use reserved keywords in JS such as var, function, return, etc. 
// */
// let CASESENTIVE = 'it works!'
// let contains_Letters = ' and so does this!'
// console.log(CASESENTIVE + contains_Letters)

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// let text = 'Sabrina'
// let chara = text.charAt(4)
// console.log(chara)
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//Unicode provides a unique number for every character, no matter what platform, device, application or language.
// let word = 'Teddy'
// console.log (word.charCodeAt(2))

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(84, 101, 100, 100, 121))
// Take your first and last name and concat()
// let firstName = 'Erika'
// let lastName = 'Rivera' 
// let result = firstName.concat(' ', lastName)
// console.log(result)
// Create a string and make it return true using startsWith()
// let str = "Always remember that you're unique. Just like everyone else"
// let result = str.startsWith("Always");
// console.log(result)
// // Now use any variable with endsWith() and return false
// let ends = str.endsWith("remember")
// console.log(ends)
// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// let check = ozgur.includes('looked')
// console.log(check)
// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// let result = joshHadALittleLambOopsCow.indexOf("cow")
// console.log(result)

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

// const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
// let laserbeam = vanessa.lastIndexOf("vanessa")
// console.log(laserbeam)

// Can we use length for strings? I don't know, you tell me.
// const noWeCantTeo = "but did you try it out though?"
// let strLength = noWeCantTeo.length
// console.log(strLength) 

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
// const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// let flip = replaceGokuWithVegeta.replace("Goku", "Vegeta")
// console.log(flip)

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
// const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// let scout = joshIsLookingForWifey.search("wifey")
// console.log(scout)

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
// const pizzaSentence = "pizza, other half of pizza"
// let otherHalf = pizzaSentence.slice(6)
// console.log(otherHalf)

// // Now using the pizza sentence, return only pizza (before the comma)

// let half = pizzaSentence.slice(0,5)
// console.log(half)

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.

// const splitTheBill = "Yaz, Poornima, and Leshawn" 
// const newArray = splitTheBill.split(" ")
// console.log(newArray)

// // OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

// let charArray = splitTheBill.split("")
// console.log(charArray)

// Use this toLowerCase()
// const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// let tooLoud = angry.toLowerCase()
// console.log(tooLoud)

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out.
// const yelling = "TODAY WAS SUCH A MESS."
// let chillOut = "right sorry no yelling. " + yelling.toLowerCase() 
// console.log(yelling)
// console.log(chillOut)

// toUpperCase()
// const jahlunSaidToPutSomeRespectToHisName = "jahlun"
// let captial = jahlunSaidToPutSomeRespectToHisName.toUpperCase("j")
// console.log(captial)

// substring()
// on the chopping block...

// Returns "ell"
// const basicGreeting = "Hello World"
// let section1 = basicGreeting.substring(1,4)
// console.log(section1)

// // Returns "JavaScript"
// const ohReally = "JavaScript Substring"
// let section2 = ohReally.substring(0,11)
// console.log(section2)

// // Returns aol.com
// const aslDays = "xXteoWuzHereXx@aol.com"
// let section3 = aslDays.substring(15,22)
// console.log(section3)

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
// let space = "    There is so much space    "
// let remove = space.trim()
// console.log(remove)

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d == d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a < b < c)
// console.log(c > b > a != d)

// // =================================================
// //                     LOOPS
// // =================================================

// // Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
// for (let s = 0; s < 10; s++){
//   console.log('The room just keeps on spining!')
// }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for (let t = 0; t < 20; t++){
//   console.log('I am getting so dizzy')
// }
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let spin =""
// let i = 0
// while (i<20){
//   console.log("I'm sorry");
//   i++
// }


// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)

// const whateverQueenBeySaid = {
//   thing1: 'shoes',
//   thing2: 'clothes',
//   thing3: 'gaming console'
// }
// let items = ""
// for( const list in whateverQueenBeySaid){
//   items += whateverQueenBeySaid[list] + " "
// }
// console.log(items)



// Using (FOR IN LOOP), print the indexes of the array.
// const lana = ['l', 'a', 'n', 'a']
// for(let i in lana){
//   console.log(lana[i])
// }
// for(const [index,value] of lana.entries()){
//   console.log(index,value)
// }
//COME BACK TO THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GOT STUCK
// let index = lana.indexOf()
// for( index of lana){
//   console.log(index)
 
// }




// USE (FOR OF LOOP)!
// const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
// for(const [index,value] of tia.entries()){
//   console.log(index,value)
// }


// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
// const perscholas = ['Amira', 'Arely', 'Jonathan']

//  perscholas.forEach((value) => {
//   let stri = "PS "
//   console.log(stri + `${value}`)
// })

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods 

// push() push can add a new item to the end of an array
//ex:
//  const animals = ["Cat", "Dog", "Fish"]
//  animals.push("Snake")
//  console.log(animals)//This will just add the new item to the end of the array
//  console.log(animals.push("Snake"))//this will return the new length of the new item that was added to the array

// pop()When using Pop it will remove the last element or item that is in the array
//Ex:
// const animals = ["Cat", "Dog", "Fish"]
// let remove = animals.pop()//this returns the element that was removed from the array
// console.log(animals)//if you just console just the 'animal' variable you will just get the upadated list that removed the last element.
// console.log(remove)

// unshift() this will add a new element to the start of the array instead of at the end of the array.
// const animals = ["Cat", "Dog", "Fish"]
// animals.unshift("Snake","Lizard")
// console.log(animals)//the output will become Snake, Lizard, Cat, Dog, Fish

// shift() This method removes the first element/item that is in the array, and in this example it will remove "Cat" from the array
// const animals = ["Cat", "Dog", "Fish"]
// let list = animals.shift()
// console.log(animals)//this will show the new list
// console.log(list)//this will show the element/item that was just removed from the array

// concat() allows you to join 2 or more arrays to together and also does not make any changes to the already existing arrays.
// const animals1 = ["Cat", "Dog", "Fish"]
// const animals2 = ["Snake", "Lizard"]
// let joined = animals1.concat(animals2)
// console.log(joined)

// splice() the splice method can add or remove elements/item from an array. 
//  const animals = ["Cat", "Dog", "Fish","Snake", "Lizard"]
// animals.splice(1,2) //this will remove the elements that are at that position
//  animals.splice(1,0, "Cow", "Sheep") //this will add an element in that position
// console.log(animals)

// slice() This method creates a new array with the selected elements
// const animals = ["Cat", "Dog", "Fish", "Snake", "Lizard","Cow", "Sheep"]
// let i = animals.slice(2,5)//this selects fish to lizard
// console.log(i)

// sort()this method with sort the array and create a new array that is in order
// const animals = ["Cat", "Dog", "Fish", "Snake", "Lizard","Cow", "Sheep"]
// animals.sort()
// console.log(animals)

// includes()with this method if the elemetn that is being asked for is in the array then it will return true, if its not in the array then it will return false.
// const animals = ["Cat", "Dog", "Fish", "Snake", "Lizard","Cow", "Sheep"]
// console.log(animals.includes("Cow"))//reminder that when using this method that this is case sensitive.

// indexOf()// this method will give you the position number of where the element is in the array
// const animals = ["Cat", "Dog", "Fish", "Snake", "Lizard","Cow", "Sheep"]
// let index = animals.indexOf("Lizard")
// console.log(index)

// length// this gives back the info of how many elements are in the array
// const animals = ["Cat", "Dog", "Fish", "Snake", "Lizard","Cow", "Sheep"]
// let length = animals.length
// console.log(length)


// const fruits = ['apple', 'banana', 'orange']

// Print banana
// const fruits = ['apple', 'banana', 'orange']
// console.log(fruits.slice(1,-1))

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
// console.log(fruits.join(' '))//the quotation marks and the space in between will give you the space in between each word/element. you can change that space to either - + or , aswell.

// Remove orange
// const fruits = ['apple', 'banana', 'orange']
// fruits.pop()
// console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
// const fruits = ['apple', 'banana', 'orange']
// fruits.push("strawberry", "kiwi", "grapes")
// console.log(fruits)

// Remove apple
// const fruits = ['apple', 'banana', 'orange']
// console.log(fruits.slice(1))

// Add mango at the beginning of the array
// const fruits = ['apple', 'banana', 'orange']
// fruits.unshift("mango")
// console.log(fruits)

// Add lemon, and grapefruit between mango and banana
// const fruits = ['mango','apple', 'banana', 'orange']
// fruits.splice(1,0, 'lemon', 'grapefruit')
// console.log(fruits)

// Remove banana and strawberry
// const fruits = ['apple', 'banana', 'orange']
// fruits.push("strawberry", "kiwi", "grapes")
// fruits.splice(1,3)
// console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
// Print the last two exotic fruits without altering the newly concatenated array.
// const exoticFruits = ['Dragon Fruit','Durian','Rambutan']
// const moreFruits = ['Star Fruit', 'Lychee', 'Salmonberry']
// let combine = exoticFruits.concat(moreFruits)
// console.log(combine)
// console.log(combine.slice(4))


// Monalissa said she needs help re-organizing her items in alphabetical order.
// const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
// console.log(monalissaIsMessy.sort())

// // Kevin accidentally stepped into the mirror world and needs help reversing his words.
// const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
// console.log(mirrorMirrorOnTheWall.reverse())

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
// const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

// const split = RafaelNoBadWords.split(" ")

// const remove = split.filter((word) => word !== 'badword')

// let array = remove.join(' ')
// console.log(array)



// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp

// const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
// const sum = numbersToAddUp.reduce((a,b) => a + b, 0)
// console.log(sum)


// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
// const numbers = [1,2,3,4,5]
// let newArray = [...numbers]
// console.log(newArray)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// const flowers = ['rose','daisy', 'allium']
// const moreFlowers = ['lily of the valley','bellflower','carnation']
// let connect = [...flowers, ...moreFlowers]//this is the spread operator that joins the two arrays together
// const allTheFlowers = connect
// console.log(allTheFlowers)

// // Using the variable with the newly connected arrays, use spread operator to add something at the end.
// let addToList = [...allTheFlowers, 'sunflower']
// console.log(addToList)

// // Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
// let addToList2 = ['lavender', ...allTheFlowers]
// console.log(addToList2)

// ===== ACCESS =====

//Donut Shopping
const donutShop =[ 
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]



//This array kind of confused me a bit. When it is console log it doesn't output 'flavor of the week' or 'ihatethis'. LOOK INTO THIS MORE!

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!

//THIS IS NOT FINISHED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
// let teo = 'person'
// let humanTeo = 'male'
// let hungryTeo = 'hungry'

// if (teo == 'person'){
//   console.log('Teo is a person!')
// }
// else{
//   console.log('Teo is not a person!')
// }

// if (humanTeo == 'male'){
//   console.log('You got it right')
// }
// else {
//   console.log('Wrong. Teo is going to remove you from the class.')
// }

// if (hungryTeo == 'hungry'){
//   console.log("Let's buy Teo some tacos!")
// }
// else{
//   console.log('If Teo is not hungry, am I hungry?')
// }

// // Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

// let gustavoVibes = 'cool'
// let vibes = gustavoVibes == 'cool' ? 'You got that right!'
//   : "James wants to argue. He says he's the best!"
//   console.log(vibes)

// // =================================================
// //                     FUNCTIONS
// // =================================================

// // Don't forget to call your functions :)

// // Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
// function sayGreeting(){
//   console.log("Hello, ma'amsir!")
// }
// // Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
// function dontTouch (STRING){
//   console.log('This is my' + STRING)
// }
// dontTouch(' Food!')

// // Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
// //Got a tiny bit confused on this. wasn't sure if this is what they meant.
// function add(num1, num2, num3){
//   console.log(num1, num2, num3)
// }
// add(5,6,7)
// // Create a function called fightClub() that accepts a name parameter.  If the name:
// // 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// // 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// // 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// // 'Devin' RETURN '4th rule: Only two guys to a fight.'
// // Anything else, RETURN 'No shirts

// function fightClub(name){
//   if(name == 'Teo'){
//     console.log('1st rule: You do not talk about Fight Club.')
//   }
//   else if (name == 'Manara'){
//     console.log('2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.')
//   }
//   else if (name == 'Liv'){
//     console.log('3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.')
//   }
//   else if( name == 'Devin'){
//     console.log('4th rule: Only two guys to a fight.')
//   }
//   else{
//     console.log('No shirts')
//   }
// }
// //fightClub('Teo')
// fightClub('Liv')
// //fightClub('Nick')

// // Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

//   let hello = {
//     greetingOne: 'hello',
//     greetingTwo: 'goodbye'
// };

// (function () {
//     console.log(hello.greetingOne + ' and ' + hello.greetingTwo);
// })(hello);

// Create a function expression with your first name as the variable and then print your first and last name

// const myName = function(firstName, lastName){
//   return firstName + ' E ' + lastName
// }
// console.log( myName('Erika', 'Rivera'))

// // Create an arrow function that accepts a number and have it return that number doubled
// let num = (a) => a * 2
// console.log(num(2))

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
// let human = {
//   name: "Erika",
//   age: 27,
//   location: "New York"
// }

// // Access the name using dot notation
// console.log(human.name)
// // Access the age using square brackets
// console.log(human['age'])
// // Use object destructuring to access location
// const {name, age, location} = human
// console.log(location)


// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

console.log(bulbasaur.abilities[0]) // Print overgrow

console.log(bulbasaur.moves[2])  // Print cut

console.log(bulbasaur.sound)  // Print Bulbahhhh!!!!!

bulbasaur.height = 7// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
console.log(bulbasaur.height)

bulbasaur['order'] = 1// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
console.log(bulbasaur['order'])

 console.log(bulbasaur) // Print an array that contains every single properties in bulbasaur//wasn't to sure on this. I need to look in to this again.

 Object.keys(bulbasaur).forEach(prop => console.log(prop))  // Print every single properties one by one in the console

const myArray = bulbasaur.valueOf() 
console.log(myArray)  // Print an array that contains every single values in bulbasaur