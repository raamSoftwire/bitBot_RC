// Controller

radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("fwd", 0 - input.acceleration(Dimension.Y))
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

radio.onReceivedValue(function (item, value) {
    if (item.compare("fwd") == 0) {
        bitbot.drive(value)
    }
})

radio.setGroup(1)
