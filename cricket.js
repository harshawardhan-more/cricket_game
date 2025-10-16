
        let score={
        win:0,
        tie:0,
        lost:0,
        displayScore:function () {
          return  `won:${score.win} lost:${score.lost} tie:${score.tie}`
          
        }
      };
    function playGame(userChoice) {
      // declare local variables
      const randomNumber = Math.random() * 3;
      let computerChoice; // ← IMPORTANT: declare it!


      if (randomNumber <= 1) {
        computerChoice = 'Bat';
      } else if (randomNumber <= 2) {
        computerChoice = 'Ball';
      } else {
        computerChoice = 'Stumps';
      }

      // determine result
      let resultMsg;
      if (userChoice === computerChoice) {
        resultMsg = "It's a tie!";
        score.tie++;
      } else if (
        (userChoice === 'Bat' && computerChoice === 'Ball') ||
        (userChoice === 'Ball' && computerChoice === 'Stumps') ||
        (userChoice === 'Stumps' && computerChoice === 'Bat')
      ) {
        resultMsg = 'You won!';
        score.win++;
      } else {
        resultMsg = 'Computer won!';
        score.lost++;
      }

      alert(`You chose ${userChoice}\nComputer chose ${computerChoice}\n${resultMsg}
       ${score.displayScore()} `);
      console.log(score);
    }
