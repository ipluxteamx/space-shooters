sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
5 5 5 5 5 5 
`, spacePlane, 200, 0)
})
let shipenemy: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
f f f f f f f f f f f . . . . . 
f 8 8 8 8 8 8 8 8 8 8 f . . . . 
f 8 8 8 8 8 8 8 8 8 8 f . . . . 
. f 8 8 8 8 8 8 8 8 8 8 f . . . 
. . f 8 8 8 8 8 8 8 8 8 f . . . 
. . . f 8 8 8 8 8 8 8 8 8 f . . 
. . . f 5 5 5 5 5 5 5 5 5 5 f . 
. . . . f 5 5 5 5 5 5 5 5 5 5 f 
. . . f 5 5 5 5 5 5 5 5 5 5 f . 
. . . f 8 8 8 8 8 8 8 8 8 f . . 
. . f 8 8 8 8 8 8 8 8 8 f . . . 
. f 8 8 8 8 8 8 8 8 8 8 f . . . 
f 8 8 8 8 8 8 8 8 8 8 f . . . . 
f 8 8 8 8 8 8 8 8 8 8 f . . . . 
f f f f f f f f f f f . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 100, 100)
game.onUpdateInterval(1000, function () {
    shipenemy = sprites.create(img`
. . . . f f f f f f f f f f f f 
. . . f 2 2 2 2 2 2 2 2 2 2 2 f 
. . . f 2 2 2 2 2 2 2 2 2 2 f . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . f 2 2 2 2 2 2 2 2 2 f . . . 
. f c c c c c c c c c c f . . . 
f c c c c c c c c c c c f . . . 
. f c c c c c c c c c c f . . . 
. . f 2 2 2 2 2 2 2 2 2 f . . . 
. . f 2 2 2 2 2 2 2 2 2 2 f . . 
. . . f 2 2 2 2 2 2 2 2 2 2 f . 
. . . f 2 2 2 2 2 2 2 2 2 2 2 f 
. . . . f f f f f f f f f f f f 
`, SpriteKind.Enemy)
    shipenemy.setVelocity(-100, 0)
    shipenemy.setPosition(180, Math.randomRange(0, 120))
})
