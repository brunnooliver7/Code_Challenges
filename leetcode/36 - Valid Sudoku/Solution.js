/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const vRow = validateRows(board)
  const vCol = validateCols(board)
  const vBox = validateBox(board)

  return (vRow && vCol && vBox)
};

function validateRows(board) {
  for (const row of board) {
      if (!validateLine(row)) return false
  }

  return true
}

function validateCols(board) {
  for (let i = 0; i < 9; i++) {
      let col = getCol(board, i)
      if (!validateLine(col)) return false
  }

  return true
}

function validateBox(board) {
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          let box = getBox(board, i, j)
          if (!validateLine(box.flat())) return false
      }
  }

  return true
}

function validateLine(line) {
  let notEmptyElements = line.filter(n => !!n && n != '.')
  let elSet = new Set(notEmptyElements)
  if (elSet.size != notEmptyElements.length) return false
  return true
}

function getRow(board, i) {
  return board[i]
}

function getCol(board, i) {
  return board.map(row => row[i])
}

// 0 < i < 2
// 0 < j < 2
function getBox(board, i, j) {
  return board.map((r, idx) => {
      if (idx === 3 * i || idx === (3 * i) + 1 || idx === (3 * i) + 2) {
          return [r[3 * j], r[(3 * j) + 1], r[(3 * j) + 2]]
      }
  })

}
