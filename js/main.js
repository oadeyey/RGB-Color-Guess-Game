//Global Variables
var colors;
var pickedColor;
var sizeOfGrid;

//Get the squares
var squares = document.getElementsByClassName("square");
var message = document.getElementById("message");
var h1 = document.getElementById("heading");
var reset = document.getElementById("reset");
var colorText = document.getElementById("colorText");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

sizeOfGrid = squares.length;

//Get and set the Color Text



initializeGrid();

reset.addEventListener('click', function(){
    this.textContent = "NEW COLORS";
    resetGame();
});
easy.addEventListener('click', function(){
    easy.classList.add("selected");
    hard.classList.remove("selected")
    sizeOfGrid = 3;
    for(var i=3; i<6; i++){
        squares[i].style.display = "none";
    }
    resetGame();
});

hard.addEventListener('click',function(){
    easy.classList.remove("selected");
    hard.classList.add("selected")
    sizeOfGrid = 6;
    for(var i=3; i<6; i++){
        squares[i].style.display = "block";
    }
    resetGame();
})

function resetGame(){
    h1.style.backgroundColor = "aqua";
    message.textContent = "";
    initializeGrid();
}
function initializeGrid(){
    colors = generateRandomColors(sizeOfGrid);
    pickedColor = pickColor();
    colorText.innerHTML = pickedColor;
    for(var i=0; i<sizeOfGrid; i++){
        // Set the background color of each square
        squares[i].style.backgroundColor = colors[i];
        
        // Add Click Event Listener to each square
        squares[i].addEventListener('click', function(){
            //get clicked color
            var clickedColor = this.style.backgroundColor;
            //Compare clicked color to picked color
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                setGrid(clickedColor);
                h1.style.backgroundColor = clickedColor;
                reset.textContent= "PLAY AGAIN";
            }else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        });
    }
}


function setGrid(color){
    for(var i=0; i<sizeOfGrid; i++){
        // Set the background color of each square
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(size) {
    //make an array
    var color = [];
    //add num random colors to array
    
    for(var i=0; i<size; i++){
       
        var col = randomColor(); 
        color.push(col);
    }
    //return array
    return color;
}

function randomColor(){
    //Sets the red channel
    var random1 = Math.floor(Math.random() * 256);
    //Sets the green channel
    var random2 = Math.floor(Math.random() * 256);
    //Sets the blue channel
    var random3 = Math.floor(Math.random() * 256);

    return "rgb("+ random1 +", "+ random2 + ", "+random3 + ")";
}