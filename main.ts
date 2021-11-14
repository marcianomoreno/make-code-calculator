input.onPinPressed(TouchPin.P0, function () {
    variable_b = 9
    basic.showNumber(10 / 2)
})
input.onButtonPressed(Button.A, function () {
    variable_a += 1
    basic.showNumber(variable_a)
})
input.onButtonPressed(Button.AB, function () {
    variable_a = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let variable_b = 0
let variable_a = 0
variable_a = 0
variable_b = 0
basic.clearScreen()
