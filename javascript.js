function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function rds() {
  let answers = ["rock", "paper", "scissors"];
  let HumanAnswer = prompt("Please enter you answer: ").toLowerCase;
  let MachineAnswer = answers[getRandomInt(3)];
  console.log("Human answer: " + HumanAnswer);
  console.log("Machine answer: " + MachineAnswer);
  console.log("Random number: " + (getRandomInt(3) - 1));
  console.log(HumanAnswer);


  if (HumanAnswer.toLowerCase === MachineAnswer) {
    console.log("It's a tie!");
  } else if (
    (HumanAnswer.toLowerCase === "rock" && MachineAnswer === "scissors") ||
    (HumanAnswer.toLowerCase === "paper" && MachineAnswer === "rock") ||
    (HumanAnswer.toLowerCase === "scissors" && MachineAnswer === "paper")
  ) {
    console.log("You Win!");
  } else if (
    (HumanAnswer.toLowerCase === "rock" && MachineAnswer === "paper") ||
    (HumanAnswer.toLowerCase === "paper" && MachineAnswer === "scissors") ||
    (HumanAnswer.toLowerCase === "scissors" && MachineAnswer === "rock")
  ) {
    console.log("You Lose! (sorry bud)");
  }
};
