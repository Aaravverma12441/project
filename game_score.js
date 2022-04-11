score = 0;
function updateScore() {
    score = score + 1;
    document.getElementById("Score").innerHTML = "Score:" + score;
}
function saveScore(){
    localStorage.setItem("score",score);
}
function nextPage(){
    window.location="game_score.html";
}