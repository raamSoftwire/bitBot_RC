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

let steering_coefficient = 0
let threshold = 0
let right = 0
let right_speed = 0
let left_speed = 0
let fwd = 0
let right_colour = 0
let left_colour = 0
function left_lights2() {
    get_left_colour2()
    bitbot.neoBrightness(Math.abs(left_speed) / 5)
    bitbot.neoSetPixelColor(6, left_colour)
    bitbot.neoSetPixelColor(7, left_colour)
    bitbot.neoSetPixelColor(8, left_colour)
    bitbot.neoSetPixelColor(9, left_colour)
    bitbot.neoSetPixelColor(10, left_colour)
    bitbot.neoSetPixelColor(11, left_colour)
}
function get_left_colour2() {
    if (left_speed < 0) {
        left_colour = bitbot.BBColours(BBColors.Red)
    } else {
        left_colour = bitbot.BBColours(BBColors.Green)
    }
}
function right_lights2() {
    get_right_colour2()
    bitbot.neoBrightness(Math.abs(right_speed) / 5)
    bitbot.neoSetPixelColor(0, right_colour)
    bitbot.neoSetPixelColor(1, right_colour)
    bitbot.neoSetPixelColor(2, right_colour)
    bitbot.neoSetPixelColor(3, right_colour)
    bitbot.neoSetPixelColor(4, right_colour)
    bitbot.neoSetPixelColor(5, right_colour)
}
function get_right_colour2() {
    if (right_speed < 0) {
        right_colour = bitbot.BBColours(BBColors.Red)
    } else {
        right_colour = bitbot.BBColours(BBColors.Green)
    }
}
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
    showDirections2()
    left_lights2()
    right_lights2()
    threshold = 100
    steering_coefficient = 2
    if (fwd > 0) {
        left_speed = fwd + right / steering_coefficient
        right_speed = fwd - right / steering_coefficient
    } else {
        left_speed = fwd + right / steering_coefficient
        right_speed = fwd - right / steering_coefficient
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
