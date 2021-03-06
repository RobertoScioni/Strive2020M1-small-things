/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
    console.log("exercise1")
    const area=(l1,l2)=>l1*l2
    console.log("   Area of a rectangle "+area(5,3))
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
    console.log("exercise2")
    const crazySum=(one,two)=>one===two?3*(one+two):""
    console.log("   the crazy sum of 5 and 5 is"+crazySum(5,5))
    console.log("   the crazy sum of 5 and 2 is"+crazySum(5,2))
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
    console.log("exercise3")
    const crazyDiff=(one)=> one>19?3*Math.abs(19-one):""
    console.log("   the crazy diff of 20 is "+crazyDiff(20))
    console.log("   the crazy sum of 17 is "+crazyDiff(17))
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/   
  
/* WRITE YOUR CODE HERE */
console.log("exercise4")
    const boundary=(one)=>{
        if (typeof(one)!=="number"|| !(Number.isInteger(one))) {
            return "input is not compatible please insert an integer number"
        }
        return one===400||(20<=one&&one<=100)?true:false
    
    }
    
    console.log("   "+boundary(400))
    console.log("   "+boundary(70))
    console.log("   "+boundary(101))
    console.log("   "+boundary(0.1))
    console.log("   "+boundary("Strive"))

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
console.log("exercise5")
    const strivify=(S)=>S.startsWith("Strive")?S:S="Strive"+S

    console.log("   "+strivify("Roberto"))
    console.log("   "+strivify("Strive school"))
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
console.log("exercise6")
    const check3and7=(posInt)=>posInt%3===0||posInt%7===0?"multiple of 3 or 7":"NOT multiple of 3 or 7"
    console.log("   "+check3and7(28))
    console.log("   "+check3and7(9))
    console.log("   "+check3and7(100))
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
/* WRITE YOUR CODE HERE */
    console.log("exercise7")
    const reverseString=(S)=>S.split("").reverse().join("").toString()
    let teststring
        teststring="Strive"
    console.log("   string "+teststring+"\n   reverse "+reverseString(teststring))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
    console.log("exercise8")
        const upperFirst=(S)=>{
            let box=S.split(" ")
            for (let index = 0; index < box.length; index++) {
                box[index]=box[index][0].toUpperCase()+box[index].slice(1,box[index].length)
            }
            return box.join(" ")
        }
    teststring="tanto va la gatta al lardo"
    console.log("   "+teststring)
    console.log("   "+upperFirst(teststring))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
    console.log("exercise9")

        const cutString=(S)=>S.slice(1,S.length-1)

    console.log("   "+cutString(teststring))
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
console.log("exercise10")
        const giveMeRandom=(S)=>{
            
            if (typeof(S)!=="number"||S===Infinity) {
                return "input is not compatible please insert a finite number"
            }
            
            let box=[]
            for (let index = 0; index < S; index++) {
                box.push(Math.floor((Math.random()*11)))
            }
            return(box)
        }

    console.log("array of 7 elements\n"+giveMeRandom(7))
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
