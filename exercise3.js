// Controller

let right = 0
let fwd = 0
function showDirections2() {
    if (fwd > 100) {
        if (right > 100) {
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                . # . . .
                # . . . .
                `)
        } else if (right < -100) {
            basic.showLeds(`
                # # # . .
                # # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    } else if (fwd < -100) {
        if (right > 100) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . #
                . . . # #
                . . # # #
                `)
        } else if (right < -100) {
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # . .
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
    } else {
        if (right > 100) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (right < -100) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
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
    }
}
radio.setGroup(1)
basic.forever(function () {
    fwd = 0 - input.acceleration(Dimension.Y)
    right = input.acceleration(Dimension.X)
    radio.sendValue("fwd", fwd)
    radio.sendValue("right", right)
    showDirections2()
})


// Car

let right_speed = 0
let left_speed = 0
let steering_coefficient = 0
let right = 0
let threshold = 0
let fwd = 0
function showDirections() {
    if (fwd > 100) {
        if (right > 100) {
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                . # . . .
                # . . . .
                `)
        } else if (right < -100) {
            basic.showLeds(`
                # # # . .
                # # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    } else if (fwd < -100) {
        if (right > 100) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . #
                . . . # #
                . . # # #
                `)
        } else if (right < -100) {
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # . .
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
    } else {
        if (right > 100) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (right < -100) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
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
    }
}
radio.onReceivedValue(function (item, value) {
    if (item.compare("fwd") == 0) {
        fwd = value
    }
    if (item.compare("right") == 0) {
        right = value
    }
})
radio.setGroup(1)
basic.forever(function () {
    showDirections()
    threshold = 100
    if (fwd > 0) {
        left_speed = fwd + right
        right_speed = fwd - right
    } else {
        left_speed = fwd + right
        right_speed = fwd - right
    }
    if (Math.abs(left_speed) >= threshold) {
        bitbot.motor(BBMotor.Left, left_speed)
    } else {
        bitbot.motor(BBMotor.Left, 0)
    }
    if (Math.abs(right_speed) >= threshold) {
        bitbot.motor(BBMotor.Right, right_speed)
    } else {
        bitbot.motor(BBMotor.Right, 0)
    }
})
