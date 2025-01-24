function ShowMessage(tag, mensagem) {
  let texto = document.querySelector(tag);
  texto.innerHTML = mensagem;
}

function ShowWelcomeMessage() {
  ShowMessage(`h1`, `Random numbers game🕹️`);
  ShowMessage(`p`, `Enter your guess:`);
}

function GenerateRandomNumber() {
  return parseInt(Math.random() * 10 + 1);
}

function ClearInput() {
  guess = document.querySelector(`input`);
  guess.value = ``;
}

function NewGame() {
  tries = 0;
  wordTries = ``;
  randomNumber = GenerateRandomNumber();
  ShowWelcomeMessage();
  document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

function VerifyGuess() {
  let guess = document.querySelector(`input`).value;
  tries++;
  wordTries = tries > 1 ? `${tries} tries` : `1 try`
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

let tries = 0;
let wordTries = ``;
let randomNumber = GenerateRandomNumber();
ShowWelcomeMessage();
