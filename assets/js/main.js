// LOOOOOOOOOOOPS//

// for (let index = 0; index < 5; index++) {
//     console.log("XXXXXXXX");    
// }

// for (let index = 5; index < 10; index++) {
//     console.log(index);    
// }

// for (let index = 50; index > 44; index--) {
//     console.log(index);    
// }

// let starbase = " "

// for (let index = 0; index < 6; index++) {
//     starbase += "*"  
//     console.log(starbase)
// }

// for (let index = 0; index < 3; index++) {
//     // console.log(i);
//     let stars = " "
//     for (let j = 0; j < 20; j++) {
//         // console.log("*");
//         stars += "*"
//     }
//     console.log(stars)
// }

// let arrayZ = [10,20,30]

// for (let index = 0; index < 4; index++) {
//     console.log(arrayZ*2);
// }

// LEV-1_1 (loop Hello World)

for (let index = 1; index <= 10; index++) {
    console.log("Hello World " + index)
}

// // LEV-1_2

let numArray = []

for (let index = 0; index <= 10; index++) {
    numArray.push(index)
}

console.log(numArray)

// // LEV-1_4

let names = ["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"]

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}

// // LEV-1_6

let retArray = []

for (let index = 1; index <= 100; index++) {
    retArray.push("image_"+index+".jpg")
}

console.log(retArray)

// LEV-1_7

let number = 1

while (number <= 5) {
    document.write("The number is " + number+"<br>");
    number++
}

// LEV-1_9

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let inputNum = document.getElementById("input")
let ausgabe = document.getElementById("ausgabe")

function zahlenauswertung() {
    console.log(inputNum.value)
    for (let index = 0; index < words.length; index++) {
        if (inputNum.value == words[index].length) {
            console.log(words[index])
            ausgabe.innerHTML += (words[index]) + "<br>"
        } 
    }
}

let inputText = document.getElementById("inputtext")

function pushArray() {
    words.push(inputText.value)
    console.log(words)
}

