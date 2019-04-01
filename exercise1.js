// Controller

radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("fwd", "true")
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

radio.onReceivedValue(function (item, value) {
    if (item.compare("fwd") == 0) {
        bitbot.driveMilliseconds(600, 400)
    }
})

radio.setGroup(1)
basic.forever(function () {

})
