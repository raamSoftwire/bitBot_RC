// Controller

radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("go")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})


// Car

radio.onReceivedString(function (receivedString) {
    bitbot.driveMilliseconds(600, 400)
})
radio.setGroup(1)
basic.forever(function () {

})