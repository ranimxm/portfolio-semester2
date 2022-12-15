const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

var currentTheme = document.documentElement.getAttribute("data-theme");


let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

let score = 0;

let direction = false;

var timer = 0;

let food_x;
let food_y;
let dx = 10;
let dy = 0;

// Get the canvas element
const snakeboard = document.getElementById("snakecanvas");
const snakeboard_ctx = snakeboard.getContext("2d");

var gaming= new Audio("/audio/Zonnie M - Zon Op M'n Piemel (Officiële Videoclip)_Zomerhit 2022_.mp3")
var lose = new Audio ("/audio/error-1-126514.mp3");

function Game(){
    //start game
    gameProgress();
    food();
    gaming.play();

    //main function to keep every function running inthe game
    function gameProgress(){
        if (gameOver()) {
            clearInterval(mainInterval);
            mainInterval = undefined;
          };
          direction = false;
          canvas();
          drawFood();
          move_snake();
          drawSnake();
          timer++;
    };

    let mainInterval = setInterval(gameProgress, 100);

    //making the canvas
    function canvas(){
     
            snakeboard_ctx.fillStyle = board_background;
            snakeboard_ctx.strokestyle = board_border;
            snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);    
    };

    //snake in canvas
    function drawSnake(){
        snake.forEach(drawSnakePart)
    };

    // Draw one snake part
    function drawSnakePart(snakePart) {
        snakeboard_ctx.fillStyle = snake_col;
        snakeboard_ctx.strokestyle = snake_border;
        snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    };
    //draw food oncanvas
    function drawFood() {
        snakeboard_ctx.fillStyle = 'lightgreen';
        snakeboard_ctx.strokestyle = 'darkgreen';
        snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
        snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
    };
    //if the snake dies and when it dies
    function gameOver() {
        for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                lose.play();
                alert("gameover");
                return true;
            };
        };
        const leftWall = snake[0].x < 0; //toomuch on left
        const rightWall = snake[0].x > snakeboard.width - 10; //toomuch right
        const toptWall = snake[0].y < 0; //toomuch top
        const bottomWall = snake[0].y > snakeboard.height - 10; //toomuch bottom
        if( leftWall || rightWall || toptWall || bottomWall){
            lose.play();
            alert("gameover");
            return true;
        };

    };
    //food generator
    function random_food(min, max) {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    };

    function food() {
        food_x = random_food(0, snakeboard.width - 10);
        food_y = random_food(0, snakeboard.height - 10);
        // if the new food location is where the snake currently is, generate a new food location
        snake.forEach(function has_snake_eaten_food(part) {
            const has_eaten = part.x == food_x && part.y == food_y;
            if (has_eaten) food();
        });
    };
    //keyboards
    document.addEventListener("keydown", change_direction);

      function change_direction(e) {
        switch(e.key){
            case 'ArrowLeft':dx=-10;dy= 0;break;//left arrow
            case 'ArrowUp':dx= 0;dy=-10;break;//up arrow
            case 'ArrowRight':dx= 10;dy= 0;break;//right arrow
            case 'ArrowDown':dx= 0;dy= 10;break;//down arrow
      };
    };

    function move_snake() {
        // Create the new Snake's head
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
        var eat = new Audio ("/audio/TCD25PS-game-success.mp3")
        console.log(snake.length);
        if (has_eaten_food) {
          // const shorter = {x: snake[2].x + dx - 2, y: snake[2].y + dy - 2};
          score += 10;
          document.getElementById('score').innerHTML = score;
          // Generate new food location
          food();
          const shorter = {x: snake[4].x, y: snake[4].y}
          snake.shift(shorter);
          eat.play();
          console.log("eaten",snake.length);
        } else {
            if (timer >= 40){
                const longer = {x: snake[1].x + dx, y: snake[1].y + dy};
                snake.unshift(longer);
                timer = 0;
            };
          // const longer = {x: snake[0].x + dx, y: snake[0].y + dy};
          // // Remove the last part of snake body
          // snake.unshift(longer);  
        };
        snake.pop();
      };  
};
function retry(){
    window.location.reload(true);
};

// doesnt make the whole page go up and down while playing the game
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);



