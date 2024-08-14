import java.util.*;

class Solution {
    public void moveZeroes(int[] nums) {
        int insertPos = 0;

        // Mover todos os números não zero para a frente do array
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos++] = num;
            }
        }

        // Preencher o restante do array com zeros
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }
}
