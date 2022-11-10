// document.getElementById('count-el').innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch 

// console.log(count)



// let myAge = 22

// let humanDogRatio = 7;

// myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);



// let count = 5 

// count = count + 1  // 5 + 1 =6

// count = count + 10

// count = count - 2

// console.log(count)


// let bonusPoints = 50 

// bonusPoints = bonusPoints + 50 
// console.log (bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log (bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log (bonusPoints)


//  initialize the count as 0 
// listen for clicks on the Increment button
// increment the count variable when the button is clicked 
// change the count-el in the HTML to reflect the new count 

// function increment() {
//     console.log("The button was clicked");
// }

// let count = 5 

// // count+5

// count = count + 1  // 5 + 1 =6

// count = count + 10

// count = count - 2

// console.log(count) 

// let countEl = document.getElementById("count-el") //count-el means pass in arguments 

// console.log(countEl)

// let count = 0;

// function increment() {
//     // console.log("clicked")
//     count = count + 1;
//     countEl.innerText = count;
//     console.log(count);
// }


// --------------
// let username = "per"

// let message = "You have three notifications"

// messageToUser = message + ", "+ username + "!"
// console.log(messageToUser)




// // -------------------
// let name = "Alisher"
// let greeting = "Hi, my name is "

// let myGreeting = name + greeting 

// console.log(myGreeting)


// 9
// 24
// 51
// 100100










let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    // count = count + 1 
    count += 1
    countEl.textContent = count 
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}

// let 
// function save() {
//     console.log(count)
// }

// save() //calling the function 


