// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         //debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event) {
// create a new, empty array to hold the messages;
    let messages = []
// iterate through the input array and, inside the 
// loop, build out the 'thank you' message for each 
// name using string interpolation, then add that 
// message to the new array you created;
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
//     debugger;
// after the loop finishes and all of the messages 
// have been added to the new array, return the new array
    return console.log(messages);
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");