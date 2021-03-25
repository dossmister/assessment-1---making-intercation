input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        . # . # .
        . # # # .
        `)
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
