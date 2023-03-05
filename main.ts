controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-yellow-down`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-dad-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(assets.image`mouse2-dad-up`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-yellow-up`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse2: Sprite = null
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.addLabelTo("Who Loves Mommy Most?", carnival.Areas.Mid, 2)
carnival.startCountdownGame(33, carnival.WinTypes.Lose)
scene.setBackgroundColor(9)
myBalloon = sprites.create(assets.image`heart2-blue`, SpriteKind.Player)
myBalloon.setPosition(56, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-yellow-up`, SpriteKind.Mouse)
myMouse.setPosition(56, 93)
myBalloon2 = sprites.create(assets.image`heart-blue`, SpriteKind.Player)
simplified.wrap(function () {
    myBalloon2.setPosition(110, 93)
    myMouse2 = sprites.create(assets.image`mouse2-dad-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})
