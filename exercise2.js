// Controller

radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0 - input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) < 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})


// Car

radio.onReceivedNumber(function (receivedNumber) {
    bitbot.drive(receivedNumber)
})
radio.setGroup(1)
