var color = ["red", "green", "blue", "yellow"];

var gamePattern = [];
var userPattern = [];

var flag = false;
var level = 0;

$("body").keydown(function() {
    if (!flag) {
        $("h1").text("Level 0");
        nextSequence();
        flag = true;
    };
});

$(".btn").click(function() {
    userPattern.push(this.id);
    playSound(this.id);
    animate(this.id);
    checkAnswer(userPattern.length - 1);
});

function nextSequence() {
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 3);
    gamePattern.push(color[randomNumber]);
    $(`.${color[randomNumber]}`).fadeOut().fadeIn().fadeOut().fadeIn();
    playSound(color[randomNumber]);
    level++;
}

function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
            userPattern = [];
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 300);
        var wrong = "wrong";
        playSound(wrong);
        $("h1").text("Game over, press any key to start again!");
        flag = false;
        level = 0;
        gamePattern = [];
        userPattern = [];
    }
    console.log("Game Sequence: " + gamePattern);
    console.log("User Sequence: " + userPattern);
}

function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animate(name) {
    $(`.${name}`).addClass("pressed");
    setTimeout(() => {
        $(`.${name}`).removeClass("pressed");
    }, 200);
}