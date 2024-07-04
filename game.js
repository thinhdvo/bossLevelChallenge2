var gameSequence = [];
var colorButton = ["green", "red", "yellow", "blue"];
var userSequence = [];
var level = 0;
var started = false;

// detect key is pressed
$(document).keydown(function() {
    if (!started) {
        nextSequence();
        started = true;
    }
})

// game sequence
function nextSequence() {
    userSequence = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var color = colorButton[randomNumber];
    gameSequence.push(color);
    $("." + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
    $("h1").text("Level " + level);
    level++;
}

// detecting click button
$(".btn").click(function() {
    var clickButton = this.id;
    userSequence.push(clickButton);
    playSound(clickButton);
    animateBtn(clickButton);
    checkResult(userSequence.length - 1);
})

// play sound
function playSound(color) {
    var sound = new Audio("sounds/" + color + ".mp3");
    sound.play();
}

// animate click button
function animateBtn(color) {
    $("." + color).addClass("pressed");
    setTimeout(function() {
        $("." + color).removeClass("pressed");
    }, 100);
}

// check result
function checkResult(name) {
    if (gameSequence[name] === userSequence[name]) {
        if (gameSequence.length == userSequence.length) {
            nextSequence();
            console.log("right");
        }
    } else {
        $("h1").text("Game Over, Press any button to start again!");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 100);
        started = false;
        gameSequence = [];
        level = 0;
    }
}