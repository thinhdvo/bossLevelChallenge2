// var userClickSequence = [];
// var gameSequence = [];
// var colors = ["green", "red", "blue", "yellow"];
// var start = false;
// var level = 0;
// $("body").on("keydown", function() {
//     if (!start) {
//         $("h1").text("Level 0");
//         nextSequence();
//         start = true;
//     }
// });
// $(".btn").on("click", function() {
//     userClickSequence.push(this.id);
//     playSound(this.id);
//     $(`.${this.id}`).addClass("pressed");
//     setTimeout(() => {
//         $(`.${this.id}`).removeClass("pressed");
//     }, 300);
//     checkResult(userClickSequence.length - 1);
// });

// function nextSequence() {
//     $("h1").text(`Level ${level}`);
//     var randomNumber = Math.floor(Math.random() * colors.length);
//     gameSequence.push(colors[randomNumber]);
//     $(`.${colors[randomNumber]}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(colors[randomNumber]);
//     level++;
// }

// function checkResult(id) {
//     if (gameSequence[id] === userClickSequence[id]) {
//         if (gameSequence.length === userClickSequence.length) {
//             setTimeout(() => {
//                 nextSequence();
//             }, 1000);
//             userClickSequence = [];
//         }
//     } else {
//         $("body").addClass("game-over");
//         setTimeout(() => {
//             $("body").removeClass("game-over");
//         }, 1000);
//         var wrong = "wrong";
//         playSound(wrong);
//         $("h1").text(`Game Over, press any key to start again!`);
//         start = false;
//         level = 0;
//         gameSequence = [];
//         userClickSequence = [];
//     }
//     console.log(gameSequence);
//     console.log(userClickSequence);
// }

// function playSound(id) {
//     var sound = new Audio(`sounds/${id}.mp3`);
//     sound.play();
// }
