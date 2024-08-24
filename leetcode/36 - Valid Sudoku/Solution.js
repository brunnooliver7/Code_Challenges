/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const vRow = validateRows(board);
  const vCol = validateCols(board);
  const vBox = validateBoxes(board);

  return vRow && vCol && vBox;
};

function validateLine(line) {
  let notEmptyElements = line.filter((n) => !!n && n != ".");
  let elSet = new Set(notEmptyElements);
  if (elSet.size != notEmptyElements.length) return false;
  return true;
}

function validateRows(board) {
  for (const row of board) {
    if (!validateLine(row)) return false;
  }

  return true;
}

function validateCols(board) {
  for (let i = 0; i < 9; i++) {
    let col = getCol(board, i);
    if (!validateLine(col)) return false;
  }

  return true;
}

function validateBoxes(board) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let box = getBox(board, i, j);
      console.log(box, i, j);
      if (!validateLine(box.flat())) return false;
    }
  }

  return true;
}

function getRow(board, i) {
  return board[i];
}

function getCol(board, i) {
  return board.map((row) => row[i]);
}

function getBox(board, i, j) {
  const startI = (i / 3) * 3;
  const startJ = (j / 3) * 3;

  let box = [];

  for (let i = startI; i < startI + 3; i++) {
    for (let j = startJ; j < startJ + 3; j++) {
      box.push(board[i][j]);
    }
  }

  return box;
}
