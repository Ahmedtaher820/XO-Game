let turn = "X";
let mainTitle = document.querySelector(".title ");
let square = [];
// to change the look for player who winner
function setItems(items) {
  items.forEach((element) => {
    document.getElementById("item" + element).style.backgroundColor = "#000";
  });
  mainTitle.textContent =
    document.getElementById(`item${items[0]}`).textContent + " Winner";
  setInterval(() => {
    mainTitle.textContent += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
function compare() {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).textContent;
  }
  // condtions for horizontal
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    setItems([1, 2, 3]);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[4] != ""
  ) {
    setItems([4, 5, 6]);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[7] != ""
  ) {
    setItems([7, 8, 9]);
  }
  // condtions for horizontal and vertical
  else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[1] != ""
  ) {
    setItems([1, 5, 9]);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[3] != ""
  ) {
    setItems([3, 5, 7]);
  }
  // condtions for vertical
  else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[1] != ""
  ) {
    setItems([1, 4, 7]);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[2] != ""
  ) {
    setItems([2, 5, 8]);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[3] != ""
  ) {
    setItems([3, 6, 9]);
  }
}
function turned(id) {
  let element = document.getElementById(id);
  if (turn == "X" && element.textContent == "") {
    element.textContent = turn;
    mainTitle.textContent = "O";
    turn = "O";
  } else if (turn == "O" && element.textContent == "") {
    element.textContent = turn;
    mainTitle.textContent = "X";
    turn = "X";
  }
  compare();
}
