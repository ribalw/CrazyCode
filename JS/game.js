//main function
function levelUp(){
    let logPlayer = sessionStorage.loggedInPlayer;

    if (logPlayer === "") {//to check if there is any user logged in ot not.
        alert("Please login to start game");//Gives error if noone is logged in.
    } 
    else {
        startGame();
    }

}
//FUNCTION FOR ANIMATION
function startGame() {

    content.drawImage(img, 0, 0);
    create();
    update();
    requestAnimationFrame(startGame);
}


//CREATING CANVAS
let canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = "2px solid rgb(47, 207, 47)";
//CANVAS FINISHED



//Creating content on canvas
let content = canvas.getContext('2d');

//setting dimensions of paddle and targets
let rValue = 5 * (Math.random() * 2 - 1);//create random values of +3 or -3
const P_BOTTOM = 50;
const B_RADIUS = 0;
const P_WIDTH = 200;
const P_HEIGHT = 5;
let life = 3;
let score = 0;
let wrong = 0;
let pSpeed = 8;
let realScore = 0;
let randomX = Math.floor(Math.random() * 1100);

// bacground image.
const img = new Image();
img.src = "../Images/pic1.jpg";

//FUNCTION TO SHOW SCORE
function scoreShow() {
    content.font = "50px Lucida Console ";
    content.fillStyle = 'green';
    content.fillText("SCORE :" + realScore, 20, 40);

    //FUNCTION TO SHOW LIFES
}
function lifeShow() {
    content.font = "50px Lucida Console ";
    content.fillStyle = 'green';
    content.fillText("LIFE :" + life, 1070, 40);

}


//PADDLE SECTION
// Creating paddle object
const p = {
    x: canvas.width / 2 - P_WIDTH / 2,
    y: canvas.height - P_HEIGHT - P_BOTTOM+35,
    width: P_WIDTH,
    height: P_HEIGHT,
    xv: 5,

}
//Creating paddle
function createPaddle() {
    content.beginPath();
    content.fillStyle = 'black';
    content.fillRect(p.x, p.y, p.width, p.height);
    content.strokeStyle = "green";
    content.strokeRect(p.x, p.y, p.width, p.height);
    content.lineWidth = 3;
    content.closePath();

}
//Moving OR Controlling  Paddle

let left = false;
let right = false;
//when keys are left.
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        left = false;
    }
    else if (event.keyCode == 39) {
        right = false;
    }
});
//when keys are pressed.
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37) {
        left = true;
    }
    else if (event.keyCode == 39) {
        right = true;
    }
});

function movingPaddle() {

    if (right && p.x + p.width < canvas.width) {
        p.x += p.xv + pSpeed;
    } else if (left && p.x > 0) {
        p.x -= p.xv + pSpeed;
    }
}
//PADDLE SECTION FINISHED

//BALL SECTION

const ball = { // creating ball object 
    xv: rValue,
    yv: -3,
    speed: 4,
    x: randomX,
    y: p.y - B_RADIUS,
    radius: B_RADIUS

}
//Creating Ball
function createBall2(t1Message) {
    let msg1 = t1Message;
    content.beginPath();
    content.arc(ball.x, ball.y, ball.radius, 0, 6.32);
    content.fillStyle = 'rgb(47, 207, 47)';
    content.fill();
    content.strokeStyle = 'black';
    content.font = "30px Lucida Console ";
    content.fillStyle = 'black';
    content.fillText(msg1, ball.x - 40, ball.y);
    content.stroke();
    content.closePath();
}
const t2 = {
    x: randomX,
    y: 100,
    speed: 4,
    radius: B_RADIUS,
    xv: rValue,
    yv: -3,
}
//CREATING 2ND BALL
function createBall1(tMessage) {
    let msg = tMessage;
    content.beginPath();
    content.arc(t2.x, t2.y, t2.radius, 0, 6.32);
    content.fillStyle = 'rgb(47, 207, 47)';
    content.fill();
    content.strokeStyle = 'black';
    content.font = "30px Lucida Console ";
    content.fillStyle = 'black';
    content.fillText(msg, t2.x - 40, t2.y);
    content.strokeStyle = 'black';
    content.stroke();
    content.closePath();

}

//Moving ball
function angleBall() {
    t2.y += t2.yv;
    t2.x += t2.xv;
    ball.y += ball.yv;
    ball.x += ball.xv;
}
function movingBall() {

    if (ball.x + ball.radius > canvas.width) { //to reflect horizontally from border instead of circle
        ball.xv = - ball.xv; // to reflect when touch border
    }
    if (ball.x - ball.radius < 0) { //to reflect horizontally from border instead of circle
        ball.xv = - ball.xv;
    }
    if (ball.y + ball.radius > canvas.height) { //to reflect vertically from border instead of circle
        ball.yv = - ball.yv;
    }
    if (ball.y - ball.radius < 0) { //to reflect when touches top corner
        ball.yv = - ball.yv;
    }
    //for second circle

    if (t2.x + t2.radius > canvas.width) { //to reflect horizontally from border instead of circle
        t2.xv = - t2.xv; // to reflect when touch border
    }
    if (t2.x - t2.radius < 0) { //to reflect horizontally from border instead of circle
        t2.xv = - t2.xv;
    }
    if (t2.y + t2.radius > canvas.height) { //to reflect vertically from border instead of circle
        t2.yv = - t2.yv;
    }
    if (t2.y - t2.radius < 0) { //to reflect when touches top corner
        t2.yv = - t2.yv;
    }

    //to check if ball touches ground
    if (ball.y + ball.radius > canvas.height) { //to reflect horizontally from border instead of circle
        ball.xv = rValue;// to move ball randomly
        ball.yv = -3;
    }
    if (t2.y + t2.radius > canvas.height) { //to reflect horizontally from border instead of circle
        t2.xv = rValue;// to move ball randomly
        t2.yv = -3;
    }

}
//TARGET SECTION FINISHED

// FUNCTIONS FOR COLLISIONS

//Ball collision with paddle
function ballPaddleCollision() {
    //if ball collides with paddle

    if (ball.x < p.x + p.width &&
        ball.x > p.x &&
        p.y < p.y + p.height &&
        ball.y > p.y) {
        wrong++;
        score++
        life--;
        ball.y = -3;
        ball.x = Math.floor(Math.random() * 1100);
    }
    if (t2.x < p.x + p.width &&
        t2.x > p.x &&
        p.y < p.y + p.height &&
        t2.y > p.y) {
        t2.y = -3;
        t2.x = Math.floor(Math.random() * 1100);
        ball.x = Math.floor(Math.random() * 1100);
        score++;
        wrong++;
        realScore++;

    }

    return realScore;
}


//FUNCTION TO SAVE SCORE TO LOCAL STORAGE

function pushScore() {

    //getting user from local storage

    function getUsers() {

        if (localStorage.players=== undefined)
            return [];
        else
            return JSON.parse(localStorage.players);

    }

    
    let uArray = getUsers();
    let finalScore = ballPaddleCollision();//getting final score
    let logPlayer = sessionStorage.loggedInPlayer;
    console.log(uArray);
    console.log("new : " + logPlayer);

        for (let i = 0; i < uArray.length; i++) {
            if (logPlayer === uArray[i].name) {
                console.log("new123 : " + uArray[i].name);
                console.log("before :" + uArray[i].score);
                uArray[i].score = finalScore;
                console.log("after : " + uArray[i].score);
                localStorage.players = JSON.stringify(uArray);
                alert("Score has been updated for "+ uArray[i].name);
                
                
                break;
               

            }
        }
    }

//FINISHING GAME
function finishGame() {
    if (life <= 0) {
       
        score = -1;//setting 1st ball/variable -1 to finish game
        wrong = -1;
    }
}

// Making new stuff
function create() {
    createPaddle();
    ballPaddleCollision();
    scoreShow();
    lifeShow();



}
// Updating function
function update() {

    movingPaddle();
    angleBall();
    movingBall();
    finishGame();




    
    //CREATING DATABASE BY PASSING DIFFERENT VALUES
    if (wrong == 0) {
        createBall2("Collision");
    }
    else if (wrong == 1) {
        createBall2("VARIABLE");
    }
    else if (wrong == 2) {
        createBall2("H5");
    }
    else if (wrong == 3) {
        createBall2("VARIABLE");
    }
    else if (wrong == 4) {
        createBall2("SOUT");
    }
    else if (wrong == 5) {
        createBall2("COMPILER");
    }
    else if (wrong == 6) {
        createBall2("VARIANT");
    }
    else if (wrong == 7) {
        createBall2("NOTE");
    }
    else if (wrong == 8) {
        createBall2("VIEWPORT");
    }
    else if (wrong == 9) {
        createBall2("INITIAL");
    }
    else if (wrong == 10) {
        createBall2("PAGE");
    }
    else if (wrong == 11) {
        createBall2("WEB");
    }
    else if (wrong == 12) {
        createBall2("TIPS");
    }
    else {
       
        createBall2("GAME OVER!");
    }
    //changing values on each succesfull collision
    if (score == 0) {
        createBall1("CANVAS");
    }
    else if (score == 1) {
        createBall1("PADDING");
    }
    else if (score == 2) {
        createBall1("CONST");
    }
    else if (score == 3) {
        createBall1("H2");
    }
    else if (score == 4) {
        createBall1("ELSE-IF-ELSE");
    }
    else if (score == 5) {
        createBall1(".(DOT)");
    }
    else if (score == 6) {
        createBall1("CONTINUE");
    }
    else if (score == 7) {
        createBall1("META");
    }
    else if (score == 8) {
        createBall1("&NBSP");
    }
    else if (score == 9) {
        createBall1("ABSTRACT");
    }
    else if (score == 10) {
        createBall1("INSTANCEOF");
    }
    else if (score == 11) {
        createBall1("SYNCHRONIZED");
    }
    else if (score == 12) {
        createBall1("TRANSIENT");
    }
    else {
        createBall1("PRESS SAVE!");
    }


}


