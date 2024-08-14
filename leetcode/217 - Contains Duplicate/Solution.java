public class Solution {
  public boolean containsDuplicate(int[] nums) {
    Set<Integer> mySet = new HashSet<>();

    for (int num : nums) {
      mySet.add(num);
    }

    return (mySet.size() != nums.length);
  }
}