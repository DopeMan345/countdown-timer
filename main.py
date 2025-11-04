timer = 0

def on_button_pressed_a():
    global timer
    timer = 10
    while timer > 0:
        basic.pause(1000)
        timer += -1
input.on_button_pressed(Button.A, on_button_pressed_a)
