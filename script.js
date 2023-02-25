const start_screen = document.querySelector(".start_screen");
const winner_screen = document.querySelector(".winner_screen_show");
const playerName_text = document.querySelector(".playerName");
const start_btn = document.querySelector(".btn1");
const playagain_btn = document.querySelector(".btn2");
const clear_btn = document.querySelector(".btn3");
const boxes = document.querySelectorAll(".boxes");

let turn = "X";

let playerTurn = () => {
  return turn == "X" ? "O" : "X";
};

start_btn.addEventListener("click", () => {
  start_screen.style.transform = "scale(0)";
});

const checkWin = () => {
  let boxes_texts = document.querySelectorAll(".boxes_texts");
  let selectWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  selectWinner.forEach((winValue) => {
    if (
      boxes_texts[winValue[0]].innerHTML ==
        boxes_texts[winValue[1]].innerHTML &&
      boxes_texts[winValue[2]].innerHTML ==
        boxes_texts[winValue[1]].innerHTML &&
      boxes_texts[winValue[0]].innerHTML !== ""
    ) {
      winner_screen.style.transform = "scale(1)";
      playerName_text.innerHTML = boxes_texts[winValue[0]].innerHTML;
    }
  });
};

Array.from(boxes).forEach((box) => {
  let boxes_texts = box.querySelectorAll(".boxes_texts");
  let hasPlayed = true;
  box.addEventListener("click", () => {
    if (hasPlayed) {
      boxes_texts.forEach((texts) => {
        texts.innerHTML = turn;
        turn = playerTurn();
        checkWin();
      });
    }
    hasPlayed = false;
  });

  playagain_btn.addEventListener("click", () => {
    let boxes_texts = document.querySelectorAll(".boxes_texts");
    hasPlayed = true;
    winner_screen.style.transform = "scale(0)";
    Array.from(boxes_texts).forEach((value) => {
      value.innerHTML = "";
    });
  });

  clear_btn.addEventListener("click", () => {
    boxes_texts.forEach((boxText) => {
      hasPlayed = true;
      boxText.innerHTML = "";
      cleareffect.play();
    });
  });
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
