/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
/*

/* WRITE YOUR CODE HERE */
    const length=Math.floor(Math.random()*100)
    const testArray=[]
    for (let index = 0; index < length; index++) {
          testArray.push(Math.floor(Math.random()*20)+1)
    }
    console.log("Array of "+length+" elements to test on \n"+testArray)

    for (let index = 0; index <= (testArray.length/2); index++) {
                [testArray[index],testArray[(testArray.length-1)-index]]=[testArray[(testArray.length-1)-index],testArray[index]]
    }
    if(testArray.length%2===0){
        [testArray[testArray.length/2-1],testArray[testArray.length/2]=testArray[testArray.length/2],testArray[testArray.length/2-1]]
    }else if(testArray.length%2!==0){
        [testArray[Math.floor(testArray.length/2)],testArray[Math.ceil(testArray.length/2)]=testArray[Math.ceil(testArray.length/2)],testArray[Math.floor(testArray.length/2)]]
    }

    console.log(testArray+"inverted sequence")
/* EXERCISE 2
Create a code to get the maximum from an array
/*

/* WRITE YOUR CODE HERE */
    let max=null
    for (let index = 0; index < testArray.length; index++) {
        max=testArray[index]>max?testArray[index]:max
    }
    console.log("maximum "+max)
/* EXERCISE 3
Create a code to get the minimum from an array
/*

/* WRITE YOUR CODE HERE */
let min=Infinity
for (let index = 0; index < testArray.length; index++) {
    min=testArray[index]<min?testArray[index]:min
}
console.log("minimum "+min)
/* EXERCISE 4
Create a code to get only even numerical value from an array
/*

/* WRITE YOUR CODE HERE */
const even=[]
for (let index = 0; index < testArray.length; index++) {
   if(testArray[index]%2===0){even.push(testArray[index])}
}

console.log("even entries "+even)
/* EXERCISE 5
Write the code to delete the even entries from an array
/*

/* WRITE YOUR CODE HERE */
console.log(testArray+" full array")
for (let index = 0; index < testArray.length;) {
    if(testArray[index]%2===0){testArray.splice(index,1)}else{index++}
 }

 console.log(testArray+" only odd entries")
/* EXERCISE 6
Write the code to remove all the vocal from a string
/*

/* WRITE YOUR CODE HERE */
let vowels=["a","e","i","o","u","y"]
let Lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ullamcorper diam. Cras varius velit vel pretium commodo."
let Phoenician=""
console.log("String \n"+Lorem)
//console.log(Lorem.length)
for (let index = 0; index < Lorem.length;index++) {
    Phoenician=(vowels.indexOf(Lorem[index])===-1)?Phoenician+Lorem[index]:Phoenician //not all array methods are applicable to strings
}
console.log("phoenician's version \n"+Phoenician)

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
/*



/* WRITE YOUR CODE HERE */
console.log(testArray+" old array")
for (let index = 0; index < testArray.length; index++) {
    testArray[index]++
 }
console.log(testArray+" increased array")
/* EXERCISE 8 
Replace all the strings into an array by their length
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
/*

/* WRITE YOUR CODE HERE */
const testArray2=Lorem.split(" ")
console.log("Array "+testArray2)
for (let index = 0; index < testArray2.length; index++) {
    testArray2[index]=testArray2[index].length
}
console.log("Array after raplacing the strings with their own lenght\n"+testArray2)