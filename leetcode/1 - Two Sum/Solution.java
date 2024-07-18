class Solution {
  public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length - 1; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        int n1 = nums[i];
        int n2 = nums[j];
        if (n1 + n2 == target)
          return new int[] { i, j };
      }
    }

    return null;
  }
}
