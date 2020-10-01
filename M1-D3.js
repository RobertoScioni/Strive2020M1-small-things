/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
    const giveMeFive=[1,2,3,4,5]
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
    const businessCard={
        Name:"Roberto",
        Surname:"Scioni",
        Mail:"pctech.robertoscioni@gmail.com",
        Age:35

    }
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
    businessCard.drivingLicense=true

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */

    delete businessCard.Age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
    const businessCard2={
        Name:"Roberto",
        Surname:"Scioni",
        Mail:"totallyatruemailaddress@gmail.com",
        Age:35

    }
    console.log(businessCard.Mail===businessCard2.Mail?"same mail":"not the same mail")
/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
    {
        let totalShoppingCart
        totalShoppingCart=51
        let totalCost
        totalCost=(totalShoppingCart>50)?totalShoppingCart:totalShoppingCart+10;
        console.log(totalCost)
    }
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
{
    let totalShoppingCart
    totalShoppingCart=51
    console.log("total cost before discount"+totalShoppingCart)
    const blackFridayDiscount=20
    totalShoppingCart=totalShoppingCart-(totalShoppingCart/100*blackFridayDiscount)
    console.log("    total cost after a "+blackFridayDiscount+"% discount "+totalShoppingCart)
    let shipping
    shipping=(totalShoppingCart>50)?0:10;
    console.log("    shipping="+shipping)
    let totalCost
    totalCost=totalShoppingCart+shipping
    console.log("Total checkout "+totalCost)
}
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
    const Car1={
        brand:"fiat",
        model:"Punto",
        license:"B420IT"
    }
    const clones=[]
    for (let index = 0; index < 5; index++) {
            const Car2={}
        Object.assign(Car2,Car1)
        Car2.license="BB"+(Math.floor(Math.random()*100))+"MY"
        clones.push(Car2)
    }

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
    clones.push(Car1)
    let carsForRent=clones 
    console.log(carsForRent)
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
    carsForRent=carsForRent.slice(1,carsForRent.length-1)
    console.log(carsForRent)
/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
    for (let index = 0; index < carsForRent.length; index++) {
        console.log("car for rent #"+index+1)
        console.log("   model number: "+carsForRent[index].model+" datatype "+typeof(carsForRent[index].model))
        console.log("   brand: "+carsForRent[index].brand+" datatype "+typeof(carsForRent[index].brand))
        console.log("   license plate: "+carsForRent[index].license+" datatype "+typeof(carsForRent[index].license))
        console.log()
        console.log("   datatype of the whole single car "+typeof(carsForRent[1]))
        console.log()
    }
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/


/* WRITE YOUR CODE HERE */
    const carsForSale=[]

    const sale1={brand:"Ferrari",model:"enzo"}
    const sale2={brand:"BMW",model:"M5 Competition"}
    const sale3={brand:"Lamborghini",model:"Diablo"}
    carsForSale.push(sale1,sale2,sale3)

    for (let index = 0; index < carsForSale.length; index++) {
        
        carsForSale[index].license="ZZ"+(Math.floor(Math.random()*100))+"GG"
    }

    let totalCars=carsForSale.length+carsForRent.length
    console.log("total cars: "+totalCars)
    console.log()
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for (let index = 0; index < carsForSale.length; index++) {
    console.log("car for sale #"+index+1)
    console.log("   model number: "+carsForSale[index].model)
    console.log("   brand: "+carsForSale[index].brand)
    console.log("   license plate: "+carsForSale[index].license)
    console.log()

}
/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
