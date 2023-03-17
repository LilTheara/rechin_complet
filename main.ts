let go = 0
let go_nage = 0
let go_b = 0
/**
 * Programme à Alicia
 */
/**
 * Programme à Lily
 */
input.onSound(DetectedSound.Loud, function () {
    go = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 19; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    go_nage = 1
})
input.onSound(DetectedSound.Quiet, function () {
    go = 0
})
input.onButtonPressed(Button.B, function () {
    go_nage = 0
})
input.onGesture(Gesture.Shake, function () {
    go_b = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("D D F - D D F - ", 130)
    music.playMelody("D D F - D D F - ", 200)
    music.playMelody("D D F - D D F - ", 250)
    music.playMelody("D D F - D D F - ", 315)
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 400)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 500)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D F - D D F - ", 600)
    }
    music.playMelody("F F E E G G G G ", 500)
    music.stopAllSounds()
})
input.onGesture(Gesture.ScreenUp, function () {
    go_b = 0
})
basic.forever(function () {
    if (go_b == 1) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
    if (go_b == 0) {
        servos.P0.setAngle(0)
    }
})
/**
 * Programme à Justin
 */
basic.forever(function () {
    if (go == 1) {
        servos.P0.setAngle(0)
        basic.pause(800)
        servos.P0.setAngle(100)
        basic.pause(800)
    }
})
basic.forever(function () {
    if (go_nage == 1) {
        servos.P0.setAngle(10)
        basic.pause(500)
        servos.P0.setAngle(160)
        basic.pause(500)
    }
})
