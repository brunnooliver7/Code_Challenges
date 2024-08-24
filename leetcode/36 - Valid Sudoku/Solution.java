import java.util.HashSet;
import java.util.Set;

class Solution {
  public boolean isValidSudoku(char[][] board) {
    Set<Character>[] rows = new HashSet[9];
    Set<Character>[] cols = new HashSet[9];
    Set<Character>[] boxes = new HashSet[9];

    // Initialize sets for rows, columns, and boxes
    for (int i = 0; i < 9; i++) {
      rows[i] = new HashSet<>();
      cols[i] = new HashSet<>();
      boxes[i] = new HashSet<>();
    }

    // Iterate through each cell in the board
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        char el = board[i][j];
        if (el == '.')
          continue;

        // Determine the index of the 3x3 box
        int boxIdx = (i / 3) * 3 + (j / 3);

        // Check if the element already exists in the row, column, or box
        if (rows[i].contains(el) || cols[j].contains(el) || boxes[boxIdx].contains(el)) {
          return false;
        }

        // Add the element to the corresponding row, column, and box
        rows[i].add(el);
        cols[j].add(el);
        boxes[boxIdx].add(el);
      }
    }

    return true;
  }
}
