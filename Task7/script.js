const matrix = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,'P',1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1],
    [1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1],
    [1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1],
    [1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1],
    [1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,'F',1],
    [1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

let left_move = 0;
let top_move = 0;
const cordsPlayer = {
    x:0,
    y:0,
    arrayNumber:0,
    arrayPosition:0
}
for (const row of matrix) {
    for (const elem of row) {
        if (elem === 1) {
            const element = document.createElement("div");
            element.classList.add("maze-block");
            element.style.left = left_move + "px";
            element.style.top = top_move + "px";
            document.querySelector(".maze-field").append(element);
        }
        else if (elem === 0) {
            // тут типо pass
        }
        else if (elem === 'P') {
            const element = document.createElement("div");
            element.id = 'player';
            element.style.left = left_move + "px";
            element.style.top = top_move + "px";
            document.querySelector(".maze-field").append(element);
            cordsPlayer.arrayNumber = matrix.indexOf(row);
            cordsPlayer.arrayPosition = row.indexOf(elem);
            cordsPlayer.x = left_move;
            cordsPlayer.y = top_move;
        }
        else if (elem === 'F') {
            const element = document.createElement("div");
            element.id = 'finish';
            element.style.left = left_move + "px";
            element.style.top = top_move + "px";
            document.querySelector(".maze-field").append(element);
        }
        left_move += 25;
    }
    left_move = 0;
    top_move += 25;
}
function keyDown(event) {
    const key = event.key;
    if (key === "w" || key === "ArrowUp") {
        if (matrix[cordsPlayer.arrayNumber - 1][cordsPlayer.arrayPosition] !== 1){
            matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition] = 0;
            cordsPlayer.y -= 25;
            cordsPlayer.arrayNumber -= 1;
            
        }
    }
    if (key === "a" || key === "ArrowLeft") {
        if (matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition - 1] !== 1){
            matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition] = 0;
            cordsPlayer.x -= 25;
            cordsPlayer.arrayPosition -= 1;
            
        }
    }
    if (key === "s" || key === "ArrowDown") {
        if (matrix[cordsPlayer.arrayNumber + 1][cordsPlayer.arrayPosition] !== 1){
            matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition] = 0;
            cordsPlayer.y += 25;
            cordsPlayer.arrayNumber += 1;
            
        }
    }
    if (key === "d" || key === "ArrowRight") {
        if (matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition + 1] !== 1){
            matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition] = 0;
            cordsPlayer.x += 25;
            cordsPlayer.arrayPosition += 1;
            
        }
    }
    matrix[cordsPlayer.arrayNumber][cordsPlayer.arrayPosition] = 'P';

    const player = document.getElementById('player');
    const finish = document.getElementById('finish');
    player.style.left = cordsPlayer.x + "px";
    player.style.top = cordsPlayer.y + "px";
    if (parseInt(player.style.left) === parseInt(finish.style.left) && parseInt(player.style.top) === parseInt(finish.style.top)) {
        document.removeEventListener( 'keydown', keyDown);
        player.style.opacity = 0;
        finish.style.background = "radial-gradient(circle, rgba(168,63,251,1) 0%, rgba(43,196,134,1) 32%, rgba(212,31,149,1) 51%, rgba(229,186,19,1) 70%, rgba(13,212,238,1) 86%, rgba(255,0,52,1) 100%)";
        document.getElementById("points").innerHTML = "good!";
    }
}
document.addEventListener('keydown', keyDown);
