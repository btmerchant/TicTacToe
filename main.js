// Establish the  game array
var grid =[];

// Initialize the array with null charactars
for (i = 0; i < 9; i ++) {
    grid[i] = "/0";
    console.log(grid[i]);
}

// Establish the variables used by the game
var player1 = "";
var player2 = "";
var playerUp = 1;
var playerSymbol = "X";
var submitStatus = false; // No players yet!
var flip = 0;   // need to alternate players
var moves = 0;

// Asign the correct symbol to playerSymbol
if (playerUp) {
    playerSymbol = "X";

}
    else{
        playerSymbol = "O";
    }
console.log("PlayerUp= ",playerUp);
console.log("PlayerSymbol= ",playerSymbol);




function randonPlayer() {
    playerUp = Math.floor((Math.random() * 2) + 1); // Decide randomly who goes first
}


function changeColorOnMouseOver() {
    this.style.background = "black";
    this.style.color = "white";
}

function changeColorOnMouseOut() {
    this.style.background = "blue";
    this.style.color = "black";
}

function processOnClick() {
    console.log("This is the click id",this.id);
    this.style.color = "white";
    document.getElementById(this.id).innerHTML  = playerSymbol;
    flip ^= true;   //- toggle value. next player
    console.log("Moves= ",moves);
    console.log("Flip= ",flip);
}

// event handler for Submit button two Players
var button = document.getElementById("btn");
button.addEventListener("click", function(e) {
    var player1 = document.getElementById("player1");
     var player2 = document.getElementById("player2");
    console.log(player1.value);
    console.log(player2.value);
    submitStatus = true;    //ready to play
    console.log("SubmitStatus is ",submitStatus)

})

document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";

document.getElementById("prompt").innerHTML += "Click on a Square";

// Assign the multiple event handlers for all the game elements "boxes"
for (var i = 0; i < 9; i ++) {
    document.getElementById(i + 1).onmouseover = changeColorOnMouseOver;
    document.getElementById(i + 1).onmouseout = changeColorOnMouseOut;
    document.getElementById(i + 1).onclick = processOnClick;
}

if (submitStatus) {
    console.log("Player Moves")
    for (moves = 0 ; moves < 9 ; moves ++) {

            if (flip ==1) {
                playerSymbol = "X";
                document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";
                moves ++;
            } else {
                playerSymbol = "O";
                document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";
                moves ++;
            }
        }
}








