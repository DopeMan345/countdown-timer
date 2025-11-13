let done = 0
let timer = 0
let seconds = 0
input.onButtonPressed(Button.A, function () {
    done = 0
    timer = seconds
    while (timer > 0) {
        basic.pause(1000)
        if (timer <= 9) {
            basic.showString("" + (timer))
        }
        timer += -1
    }
    seconds = 0
})
input.onButtonPressed(Button.B, function () {
    seconds += 1
})
basic.forever(function () {
    if (seconds == 0) {
        basic.showString("0")
        basic.showString(" ")
    }
})
