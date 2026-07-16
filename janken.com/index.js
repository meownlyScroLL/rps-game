const rock_button = document.querySelector("#rock_button");
const paper_button = document.querySelector("#paper_button");
const scissors_button = document.querySelector("#scissors_button");
const move = document.querySelector(".move");
const his_move = document.querySelector(".his_move");
const result = document.querySelector(".result");
const moves = ["👊", "✋", "✌️"];

let john_win = 0;
let you_win = 0;
let your_move;
let john_move;

function bekle(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

rock_button.onclick = async function (){
    rock_button.disabled = true;
    paper_button.disabled = true;
    scissors_button.disabled = true;
    your_move = "👊";
    john_move = moves[Math.floor(Math.random() * 3)];
    his_move.textContent = "1";
    await bekle(1000);
    his_move.textContent = "2";
    await bekle(1000);

    if(john_move == "👊"){
        his_move.textContent = "👊";
        result.textContent = "Draw.";
        document.querySelector("#draw_sound").play();
    }
    else if (john_move == "✋"){
        his_move.textContent = "✋";
        result.textContent = "You lose...";
        document.querySelector("#lose_sound").play();
        john_win++
    }
    else if (john_move == "✌️"){
        his_move.textContent = "✌️"
        result.textContent = "YOU WIN!"
        document.querySelector("#win_sound").play();
        you_win++
    }
    await bekle(1000);
    rock_button.disabled = false;
    paper_button.disabled = false;
    scissors_button.disabled = false;
}

paper_button.onclick = async function (){
    rock_button.disabled = true;
    paper_button.disabled = true;
    scissors_button.disabled = true;
    your_move = "✋";
    john_move = moves[Math.floor(Math.random() * 3)]
    his_move.textContent = "1";
    await bekle(1000);
    his_move.textContent = "2";
    await bekle(1000);

    if(john_move == "👊"){
        his_move.textContent = "👊";
        result.textContent = "YOU WIN!";
        document.querySelector("#win_sound").play();
        you_win++;
    }
    else if (john_move == "✋"){
        his_move.textContent = "✋";
        result.textContent = "Draw.";
        document.querySelector("#draw_sound").play();
    }
    else if (john_move == "✌️"){
        his_move.textContent = "✌️";
        result.textContent = "You lose...";
        document.querySelector("#lose_sound").play();
        john_win++;
    }
    await bekle(1000);
    rock_button.disabled = false;
    paper_button.disabled = false;
    scissors_button.disabled = false;
}

scissors_button.onclick = async function (){
    rock_button.disabled = true;
    paper_button.disabled = true;
    scissors_button.disabled = true;
    your_move = "✌️";
    john_move = moves[Math.floor(Math.random() * 3)]
    his_move.textContent = "1";
    await bekle(1000);
    his_move.textContent = "2";
    await bekle(1000);

    if(john_move == "👊"){
        his_move.textContent = "👊"
        result.textContent = "You lose..."
        document.querySelector("#lose_sound").play();
        john_win++
    }
    else if (john_move == "✋"){
        his_move.textContent = "✋"
        result.textContent = "YOU WIN!"
        document.querySelector("#win_sound").play();
        you_win++
    }
    else if (john_move == "✌️"){
        his_move.textContent = "✌️"
        result.textContent = "Draw."
        document.querySelector("#draw_sound").play();
    }
    await bekle(1000);
    rock_button.disabled = false;
    paper_button.disabled = false;
    scissors_button.disabled = false;
}


