import java.util.ArrayList;

class Solution {
  public int[] intersect(int[] nums1, int[] nums2) {
    Map<Integer, Integer> map1 = new HashMap();
    for (int i = 0; i < nums1.length; i++) {
      Integer freq = map1.get(nums1[i]) != null ? map1.get(nums1[i]) : 0;
      freq++;
      map1.put(nums1[i], freq);
    }

    Map<Integer, Integer> map2 = new HashMap();
    for (int i = 0; i < nums2.length; i++) {
      Integer freq = map2.get(nums2[i]) != null ? map2.get(nums2[i]) : 0;
      freq++;
      map2.put(nums2[i], freq);
    }

    List<Integer> list = new ArrayList<>();

    for (Map.Entry<Integer, Integer> entry : map1.entrySet()) {
      Integer key = entry.getKey();
      Integer value = entry.getValue();

      if (map2.get(key) != null) {
        var f1 = value;
        var f2 = map2.get(key);
        var min = Math.min(f1, f2);
        for (int i = 0; i < min; i++) {
          list.add(key);
        }
      }
    }

    return list.stream()
        .mapToInt(Integer::intValue)
        .toArray();
  }
}
