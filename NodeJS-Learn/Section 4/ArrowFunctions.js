//const square function (x) {
//    return x * x
//}

console.log('Arrow Functions')
const square = (x) => {
    return x * x
}
console.log(square(5)) //will print: 4

console.log('Shorthand Syntax')
const squareAlt = (x) => x * x
console.log(squareAlt(20))

console.log('Binding')
const event = {
    name: ' Birthday Party',
    guestList: [' Andrew', ' Jen', ' Mike'],
    printGuestList() {
        console.log(' Guest list for' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
}

event.printGuestList()