let timer = 0
let seconds = 0
input.onButtonPressed(Button.A, function () {
    timer = seconds
    while (timer > 0) {
        basic.pause(1000)
        timer += -1
    }
    seconds = 0
    basic.showString("Done")
})
input.onButtonPressed(Button.B, function () {
    seconds += 1
})
