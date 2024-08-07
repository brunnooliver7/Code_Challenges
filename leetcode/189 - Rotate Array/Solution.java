class Solution {
  public void rotate(int[] nums, int k) {
      if (k > nums.length) k = k % nums.length;

      int[] slicedArrayLeft = new int[nums.length - k];
      for (int i = 0; i < nums.length - k; i++) {
          slicedArrayLeft[i] = nums[i];
      }

      int[] slicedArrayRight = new int[k];
      for (int i = 0; i < k; i++) {
          slicedArrayRight[i] = nums[nums.length - k + i];
      }

      for (int i = 0; i < slicedArrayRight.length; i++) {
          nums[i] = slicedArrayRight[i];
      }

      for (int i = 0; i < slicedArrayLeft.length; i++) {
          nums[slicedArrayRight.length + i] = slicedArrayLeft[i];
      }
  }
}
