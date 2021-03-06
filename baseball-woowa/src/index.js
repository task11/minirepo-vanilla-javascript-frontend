export default class BaseballGame {

  constructor() {
    this.CORRECT = `πμ λ΅μ λ§μΆμ¨μ΅λλ€.π \n κ²μμ μλ‘ μμνμκ² μ΅λκΉ?`;
    this.getRandomNumber();
    this.getSelector('.game-form').addEventListener('submit', (e) => this.clickSubmit(e, this._computerInput));
    this.getSelector('#game-restart-button').addEventListener('click', this.restart);
  }

  play(computerInputNumbers, userInputNumbers) {
    this._computerInput = computerInputNumbers;
    const result = this.compareNumber(String(this._computerInput), String(userInputNumbers));
    return result;
  }

  getRandomNumber() {
    let computerNumber = new Set();
    for (let i = 0; computerNumber.size < 3; i++) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9)
      computerNumber.add(num);
    }
    this._computerInput = Array.from(computerNumber).join('');
  }

  getSelector(target) {
    return document.querySelector(target);
  }

  clickSubmit(e, computerInput) {
    e.preventDefault();
    const userInput = e.target.querySelector('#user-input');
    const errorFlag = this.catchInputError(userInput.value);

    if (!errorFlag) {
      const result = this.play(computerInput, userInput.value);
      this.renderResult(result);
    } else {
      this.renderResult('');
    }
    userInput.value = "";

  }

  compareNumber(answer, input) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] == input[i]) {
        strike++;
      } else if (answer.includes(input[i])) {
        ball++;
      }
    }
    return this.makeResult(strike, ball);
  }

  makeResult(strike, ball) {
    let CORRECT = this.CORRECT;
    let result = '';
    if (strike === 3) result = CORRECT;
    else if (strike > 0 && ball > 0) result = `${ball}λ³Ό ${strike}μ€νΈλΌμ΄ν¬`;
    else if (ball > 0 && strike === 0) result = `${ball}λ³Ό`;
    else if (strike > 0 && ball === 0) result = `${strike}μ€νΈλΌμ΄ν¬`;
    else result = 'λ«μ±';
    return result;
  }

  renderResult(result) {
    let CORRET = this.CORRECT;
    const $result = this.getSelector('#result');
    const $restart = this.getSelector('#game-restart-button');
    $result.innerText = result;
    if (result === CORRET) {
      $restart.style.display = 'block';
    }
  }

  catchInputError(userInput) {
    let errorFlag = false;
    const inputLength = userInput.length;
    const inputSet = new Set(userInput);
    const inputSetLength = inputSet.size;

    if (userInput === "" || userInput.length > 3) {
      alert('μ«μλ₯Ό 1κ° μ΄μ 3κ° μ΄νλ‘ μλ ₯ν΄μ£ΌμΈμ.');
      errorFlag = true;
    }
    else if (inputLength !== inputSetLength) {
      alert('μ€λ³΅λ μ«μλ₯Ό μλ ₯ν  μ μμ΅λλ€.');
      errorFlag = true;
    }
    return errorFlag;
  }

  restart(e) {
    location.reload();
  }
}

new BaseballGame();