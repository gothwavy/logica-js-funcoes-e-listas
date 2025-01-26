function ShowMessage(tag, mensagem) {
  let texto = document.querySelector(tag);
  texto.innerHTML = mensagem;
}

function ShowWelcomeMessage() {
  ShowMessage(`h1`, `Random numbers game🕹️`);
  ShowMessage(`p`, `Enter your guess:`);
}

function GenerateRandomNumber() {
  let randomNumber = parseInt(Math.random() * maxLimitNumber + 1);
  console.log(`${randomNumber} random number`)

  if (numberList.includes(randomNumber)) {
    return GenerateRandomNumber();
  }
  else {
    numberList.push(randomNumber);
    let numberListLength = numberList.length;
    if (numberListLength == maxLimitNumber) {
      numberList = [];
    }
    return randomNumber;
  }

}

function ClearInput() {
  guess = document.querySelector(`input`);
  guess.value = ``;
}

function NewGame() {
  ShowWelcomeMessage();
  randomNumber = GenerateRandomNumber();
  tries = 0;
  document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

function VerifyGuess() {
  let guess = document.querySelector(`input`).value;
  tries++;
  let wordTries = tries > 1 ? `${tries} tries` : `1 try`
  if (guess == randomNumber) {
    ShowMessage(`h1`, `You Won!`);
    ShowMessage(`p`, `You guessed the random number correctly with ${wordTries}!`);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
  }
  else if (guess > randomNumber) {
    ShowMessage(`p`, `The number is smaller than ${guess}`);
  }
  else {
    ShowMessage(`p`, `The number is bigger than ${guess}`);
  }
  ClearInput();
}

ShowWelcomeMessage();
let numberList = [];
let maxLimitNumber = 3;
let randomNumber = GenerateRandomNumber();
let tries = 0;
