// all code for this lab to be completed in this file

let currentTemp = 40
let myAge = 26
let yourAge = 36
let isLoggedIn = false

if (currentTemp > 32) {
    console.log('It is not freezing.')
} else {
    console.log('It is freezing.')
}

if (myAge === yourAge) {
    console.log('We are the same age.')
} else if (myAge > yourAge) {
    console.log('I am older than you.')
} else {
    console.log('You are older than me.')
}

if (isLoggedIn) {
    console.log('Welcome back!')
} else {
    console.log("You aren't logged in")
}