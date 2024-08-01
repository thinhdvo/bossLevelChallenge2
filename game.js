var color = ["red", "green", "blue", "yellow"];
var gameSequence = [];
var userSequence = [];
var level = 0;
var start = false;
// detecting press key
$(document).keydown(function() {
    if (!start) {
        nextSequence();
        start = true;
    }
});

// user sequence
$(".btn").click(function() {
    userSequence.push(this.id);
    $(this).addClass("pressed");
    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 100);
    playSound(this.id);
    result(userSequence);
});

// next squence
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = color[randomNumber];
    gameSequence.push(randomColor);
    $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
    $("h1").html("Level " + level);
    level++;
}
// check result
function result(color) {
    if (gameSequence[color.length - 1] === userSequence[color.length - 1]) {
        if (gameSequence.length === userSequence.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        var wrong = "wrong";
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        playSound(wrong);
        $("h1").html("Game Over, Press Any Key to Restart!");
        startOver();
    }
}
// play sound
function playSound(randomColor) {
    var sound = new Audio("sounds/" + randomColor + ".mp3");
    sound.play();
}
// start over
function startOver() {
    level = 0;
    gameSequence = [];
    start = false;
}