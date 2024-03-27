let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerHTML = "Game was Draw. Play again. &#x1F642"; 
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice} &#x1F603`; 
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice} &#x1F61E`; 
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {

    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
    
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      
      userWin = compChoice === "scissors" ? false : true;
    } else {
      
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const restartGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
  };
  
  
  const restartBtn = document.querySelector("#restart-btn");
  restartBtn.addEventListener("click", restartGame);
  
