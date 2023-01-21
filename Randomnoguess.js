function guessNo() {
    const rand = Math.floor(Math.rand() * 10) + 1;
    let num = parseInt(prompt('Guess a no. from 1 to 10: '));
    while(num !== rand) {
        num = parseInt(prompt('Guess a no. from 1 to 10: '));
    }
    if(num == rand) {
        console.log('You guessed the correct no.');
    }

  }
guessNo();