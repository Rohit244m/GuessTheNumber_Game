`use strict`;
let restart_btn = document.querySelector(".reset");
let guess_my_num_txt = document.querySelector(".outro");
let res_to_display = document.querySelector(".number");
let user_input = document.querySelector(".inp_num");
let hint_text = document.querySelector(".inp_status");
let check_btn = document.querySelector(".check");
let score_to_disp = document.querySelector(".score");
let high_score = document.querySelector(".high_score");
//generating random number
let random_number = Number(Math.floor(Math.random() * 20) + 1);
console.log(random_number);
// setting score
let score = 20;
// exp
let flag = 0;
let highScoreValue = 0;
check_btn.addEventListener("click", function () {
  let entered_num = user_input.value;

  //   condition to apply after game over
  if (flag == 1) {
    guess_my_num_txt.innerHTML = "Game Over. click Restar play again!! ";
  } else if (flag == 2) {
    guess_my_num_txt.innerHTML = "Game Over. click Restar play again!! ";
  }
  //   when game not over
  else if (score == 0) {
    guess_my_num_txt.textContent =
      "Game over..!!You have tried maximum time..!!";
    res_to_display.innerHTML = "You have lost";
    flag = 2;
  } else {
    if (entered_num < 1 || entered_num > 20) {
      guess_my_num_txt.innerHTML = "Invalid Input.Enter a number between 1-20";
    } else {
      // for right guess
      if (entered_num == random_number) {
        guess_my_num_txt.innerHTML = "You guessed the correct number..!!";
        res_to_display.innerHTML = "You won";

        // experiment
        flag = 1;
        score_to_disp.innerHTML = score;
        // high score part
        if (score > highScoreValue) {
          highScoreValue = score;
          high_score.innerHTML = highScoreValue;
        } else {
          high_score.innerHTML = highScoreValue;
        }

        // for wrong guess
      } else {
        score--;
        score_to_disp.innerHTML = score;
        guess_my_num_txt.innerHTML = "Wrong Guess..Try again..!!";
        if (entered_num > random_number) {
          hint_text.innerHTML = "Your guessed number is higher!!";
        } else {
          hint_text.innerHTML = "Your guessed number is lower!!";
        }
      }
    }
  }
});

restart_btn.addEventListener("click", function () {
  score = 20;
  guess_my_num_txt.innerHTML = "Guess the correct Number..!!";
  res_to_display.innerHTML = "------?------";
  hint_text.innerHTML = "Start Guessing !!";
  score_to_disp.innerHTML = "20";
  random_number = Number(Math.floor(Math.random() * 20) + 1);
  console.log(random_number);
  document.querySelector(".inp_num").value = "";

  flag = 0;
});
