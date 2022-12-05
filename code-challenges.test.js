// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("codedMessage", () => {
//     it("takes in a string and returns a string with a coded message", () => {
//       expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
//   })

//   const codedMessage = (str) => {
//     // .replaceAll()string method returns , with g, global indicator, will replace 
//     // all specificied occurrences and return replacement value.
//     return str.replaceAll(/a/g, '4')
//               .replaceAll(/e/g, '3')
//               .replaceAll(/i/g, '1')
//               .replaceAll(/o/g, '0')
//               .replaceAll(/E/g, '3')
//   }

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Created function codedMessage, which takes in a string (str)
// Input: String variable
// Output: The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// .replaceAll()string method returns , with g, global indicator, will replace  
// all specificied occurrences and return replacement value.

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("containingLetter", () => {
    it("returns an array of all the words containing that particular letter", () => {

     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
     const letterA = "a"
    const expectedOutput1 = ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    const expectedOutput2 = ["Cherry", "Blueberry", "Peach"]

      expect(containingLetter(fruitArray, letterA)).toEqual(expectedOutput1)
      expect(containingLetter(fruitArray, letterE)).toEqual(expectedOutput2)

    })
})
    // created a function takes an array and str as parameters 
  const containingLetter = (arr, str) => {
    // use .map()method to lowercase all words in the array
        let tolowerCaseArray = arr.map((value => value.toLowerCase()))
        //use .filter() method to find words in that contain identified string 
        let searchstrArray   = tolowerCaseArray.filter((value => value.includes(str)))
   //  use .map to uppercase the letter of each value which are lowercased
   // and used .substr() method to provide rest letters in lowercased.
        let toupperCaseArray = searchstrArray.map((value => value[0].toUpperCase() + value.substr(1)))
        return toupperCaseArray
    // Stored each iteration into its own variable with stored information.
    // Each iteration references previous array.     
  }
 
// b) Create the function that makes the test pass.

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// 27 Nov.--> Test Suites: 1 passed, 1 total
//            Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// function list() {
//     return slice(arguments);
//   }
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.