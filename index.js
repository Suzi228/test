const gameBoard = document.querySelector(".board");
const startButton = document.querySelector('.board__button');
const input = document.querySelector('.board__input');

function createBoard() {
  gameBoard.textContent = "";
}

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  let columns = Number(input.value);
  let count;
  if (columns >= 2 && columns <= 6 && columns % 2 === 0) {
    count = columns * columns;
  } else {
    input.value = 4;
    columns = 4;
    count = columns * columns;
  }
  createBoard();
});
