var color = ["green", "red", "blue", "yellow"];
var gameSequence = [];
var userSequence = [];
var start = false;
var level = 0;

document.addEventListener("keydown", function() {
    if (!start) {
        document.querySelector("h1").textContent = "Level 0";
        setTimeout(() => {
            nextSequence();
        }, 1000);
        start = true;
    }
});

var btnNode = document.querySelectorAll(".btn");
for (let i = 0; i < btnNode.length; i++) {
    btnNode[i].addEventListener("click", function() {
        playSound(this.id);
        document.querySelector("#" + this.id).classList.add("pressed");
        setTimeout(() => {
            document.querySelector("#" + this.id).classList.remove("pressed");
        }, 100);
        userSequence.push(this.id);
        result(userSequence);
    })
}

function nextSequence() {
    userSequence = [];
    document.querySelector("h1").textContent = "Level " + level;
    var randomNumber = Math.floor(Math.random() * 4);
    gameSequence.push(color[randomNumber]);
    playSound(color[randomNumber]);
    document.querySelector("#" + color[randomNumber]).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("#" + color[randomNumber]).classList.remove("pressed");
    }, 200);
    level++;
}

function result(id) {
    if (gameSequence[id.length - 1] === userSequence[id.length - 1]) {
        if (gameSequence.length === userSequence.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        document.querySelector("body").classList.add("game-over");
        setTimeout(() => {
            document.querySelector("body").classList.remove("game-over");
        }, 300);
        var wrong = "wrong";
        playSound(wrong);
        document.querySelector("h1").textContent = "Game Over, press any key to try again!";
        start = false;
        level = 0;
        gameSequence = [];
    }
}

function playSound(id) {
    var sound = new Audio("sounds/" + id + ".mp3");
    sound.play();
}