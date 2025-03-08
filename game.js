let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor( Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("---Game Draw---");
    msg.innerHTML = "---Game draw--- Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You are Winner");
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lose!!");
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompchoice();
    console.log("Comp choice:", compChoice);
    
    if(userChoice === compChoice) {
       drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            // console.log(choice);
            const userChoice = choice.getAttribute("id");
        //   console.log("choice was clicked", userChoice);
          playGame(userChoice);
        });
    });
});