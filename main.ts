input.onButtonPressed(Button.A, function () {
    老鼠.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    game.resume()
    time = 1000
    score = 0
    run1 = true
    run2 = false
    run3 = false
    if (w11) {
        w11.delete()
        w12.delete()
        w13.delete()
    }
    if (w21) {
        w21.delete()
        w22.delete()
        w23.delete()
    }
    if (w31) {
        w31.delete()
        w32.delete()
        w33.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    老鼠.change(LedSpriteProperty.X, 1)
})
let wall: number[] = []
let w33: game.LedSprite = null
let w32: game.LedSprite = null
let w31: game.LedSprite = null
let w23: game.LedSprite = null
let w22: game.LedSprite = null
let w21: game.LedSprite = null
let w13: game.LedSprite = null
let w12: game.LedSprite = null
let w11: game.LedSprite = null
let run3 = false
let run2 = false
let score = 0
let time = 0
let run1 = false
let 老鼠: game.LedSprite = null
老鼠 = game.createSprite(2, 4)
run1 = false
let list = [
[0, 3, 4],
[2, 3, 4],
[0, 1, 4],
[1, 3, 4],
[1, 2, 3],
[0, 1, 2]
]
// 第一道牆
basic.forever(function () {
    if (run1) {
        wall = list[randint(0, 5)]
        w11 = game.createSprite(wall[0], 0)
        w12 = game.createSprite(wall[1], 0)
        w13 = game.createSprite(wall[2], 0)
        w11.set(LedSpriteProperty.Brightness, 30)
        w12.set(LedSpriteProperty.Brightness, 30)
        w13.set(LedSpriteProperty.Brightness, 30)
        for (let index = 0; index <= 4; index++) {
            w11.set(LedSpriteProperty.Y, index)
            w12.set(LedSpriteProperty.Y, index)
            w13.set(LedSpriteProperty.Y, index)
            basic.pause(time)
            if (index == 2) {
                run2 = true
            }
        }
        w11.delete()
        w12.delete()
        w13.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
        }
    }
})
basic.forever(function () {
    if (run2) {
        run2 = false
        wall = list[randint(0, 5)]
        w21 = game.createSprite(wall[0], 0)
        w22 = game.createSprite(wall[1], 0)
        w23 = game.createSprite(wall[2], 0)
        w21.set(LedSpriteProperty.Brightness, 30)
        w22.set(LedSpriteProperty.Brightness, 30)
        w23.set(LedSpriteProperty.Brightness, 30)
        for (let index = 0; index <= 4; index++) {
            if (index == 2) {
                run3 = true
            }
            w21.set(LedSpriteProperty.Y, index)
            w22.set(LedSpriteProperty.Y, index)
            w23.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        w21.delete()
        w22.delete()
        w23.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
        }
    }
})
basic.forever(function () {
    if (run3) {
        run3 = false
        wall = list[randint(0, 5)]
        w31 = game.createSprite(wall[0], 0)
        w32 = game.createSprite(wall[1], 0)
        w33 = game.createSprite(wall[2], 0)
        w31.set(LedSpriteProperty.Brightness, 30)
        w32.set(LedSpriteProperty.Brightness, 30)
        w33.set(LedSpriteProperty.Brightness, 30)
        for (let index = 0; index <= 4; index++) {
            w31.set(LedSpriteProperty.Y, index)
            w32.set(LedSpriteProperty.Y, index)
            w33.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        w31.delete()
        w32.delete()
        w33.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
            time += -20
        }
    }
})
basic.forever(function () {
    if (run1) {
        if (w11) {
            if (老鼠.isTouching(w11) || (老鼠.isTouching(w12) || 老鼠.isTouching(w13))) {
                game.pause()
            }
        }
        if (w21) {
            if (老鼠.isTouching(w21) || (老鼠.isTouching(w22) || 老鼠.isTouching(w23))) {
                game.pause()
            }
        }
        if (w31) {
            if (老鼠.isTouching(w31) || (老鼠.isTouching(w32) || 老鼠.isTouching(w33))) {
                game.pause()
            }
        }
    }
    if (game.isPaused()) {
        run1 = false
        basic.showNumber(score)
    }
})
