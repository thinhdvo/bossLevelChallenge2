var color = ["green", "red", "blue", "yellow"];
var gameSequence = [];
var userSequence = [];

var btnNode = document.querySelectorAll(".btn");
for (let i = 0; i < btnNode.length; i++) {
    btnNode[i].addEventListener("click", function() {
        playSound(this.id);
        document.querySelector("#" + this.id).classList.add("pressed");
        setTimeout(() => {
            document.querySelector("#" + this.id).classList.remove("pressed");
        }, 100);
        userSequence.push(this.id);
    })
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    gameSequence.push(color[randomNumber]);
    playSound(color[randomNumber]);
    // document.querySelector("." + choosen).fadeOut(100);
    // document.getElementById("#" + choosen).fadeOut(100).fadeIn(100);
    $("#" + color[randomNumber]).fadeOut(100).fadeIn(100);
}




function playSound(id) {
    var sound = new Audio("sounds/" + id + ".mp3");
    sound.play();
}