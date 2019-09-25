let chessboard = [
  [5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 3],
  [0, 0, 0, 0, 0, 0, 1, 6],
  [0, 0, 0, 0, 3, 0, 2, 4],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 6, 0],
];

function escape() {
  console.log(chessboard);
  chessboard[4].pop();
  chessboard[4].unshift(6);
  console.log(chessboard);
}

escape();