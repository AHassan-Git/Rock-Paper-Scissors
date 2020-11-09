function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function playGame() {
  let numberOfRounds = prompt("How many rounds do you wanna play? ");
  let HumanScore = 0;
  let MachineScore = 0;
  let Ties = 0;

  //loop over for each round
  for(let i=0; i < numberOfRounds; i++){
    let answers = ["rock", "paper", "scissors"];
    let PromptInput = prompt("Please enter you answer: ");
    let HumanAnswer = PromptInput.toLowerCase();
    let MachineAnswer = answers[getRandomInt(3)];
    console.log(`--------------Round ${i+1}---------------`);

    //Human answer is not one of the options, then automtically make answer "rock"
    if(HumanAnswer != "rock" || HumanAnswer != "paper" || HumanAnswer != "scissors"){
      HumanAnswer = "rock";
    }


    if (HumanAnswer === MachineAnswer) {
      Ties++;
      console.log(`Human: ${HumanAnswer}, Machine: ${MachineAnswer}`);
      console.log(`Current Score: Human(${HumanScore}) Machine(${MachineScore}) Ties(${Ties})`)
      console.log(`Result: It's a tie!`);
    } else if (
      (HumanAnswer === "rock" && MachineAnswer === "scissors") ||
      (HumanAnswer === "paper" && MachineAnswer === "rock") ||
      (HumanAnswer === "scissors" && MachineAnswer === "paper")
    ) {
      HumanScore++;
      console.log(`Human: ${HumanAnswer}, Machine: ${MachineAnswer}`);
      console.log(`Current Score: Human(${HumanScore}) Machine(${MachineScore}) Ties(${Ties})`)
      console.log("Result: You Win!");
    } else if (
      (HumanAnswer === "rock" && MachineAnswer === "paper") ||
      (HumanAnswer === "paper" && MachineAnswer === "scissors") ||
      (HumanAnswer === "scissors" && MachineAnswer === "rock")
    ) {
      MachineScore++;
      console.log(`Human: ${HumanAnswer}, Machine: ${MachineAnswer}`);
      console.log(`Current Score: Human(${HumanScore}) Machine(${MachineScore}) Ties(${Ties})`)
      console.log("Result: You Lose!");
    }
  
  }


  //final score
  console.log(`--------------Final Score---------------`);
  console.log(`Human(${HumanScore}) Machine(${MachineScore}) Ties(${Ties})`)
  if(HumanScore > MachineScore){
    console.log("You Win!!")}
  else if(HumanScore === MachineScore){
    console.log(`It's a tie!`);
  }
  else{
    console.log("You Loose :( (sorry bud)")}
};
