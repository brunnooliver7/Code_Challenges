class Solution {
  public int singleNumber(int[] nums) {
    Map<Integer, Integer> map = new HashMap();

    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      int value = map.get(n) != null ? map.get(n) : 0;
      int freq = value + 1;

      map.put(n, freq);
    }

    for (Integer key : map.keySet()) {
      if (map.get(key) == 1)
        return key;
    }

    return 1;
  }
}
