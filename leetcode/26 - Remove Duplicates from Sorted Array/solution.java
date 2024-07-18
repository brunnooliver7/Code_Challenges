class Solution {
  public int removeDuplicates(int[] nums) {
    Set<Integer> set = generateSet(nums);
    refactorArr(nums, set);
    return set.size();
  }

  private Set<Integer> generateSet(int[] nums) {
    Set<Integer> set = new HashSet<Integer>();

    for (int i = 0; i < nums.length; i++) {
      set.add(Integer.valueOf(nums[i]));
    }

    return set;
  }

  private void refactorArr(int[] nums, Set<Integer> set) {
    int index = 0;

    for (Integer n : set) {
      nums[index] = (int) n;
      index++;
    }

    for (int i = index; i < nums.length; i++) {
      nums[i] = (int) Integer.MAX_VALUE;
    }

    Arrays.sort(nums);
  }
}
