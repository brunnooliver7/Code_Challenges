class Solution {
  public int firstUniqChar(String s) {
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      int firstIndex = s.indexOf(c);
      int lastIndex = s.lastIndexOf(c);
      if (firstIndex == lastIndex)
        return firstIndex;
    }

    return -1;
  }
}
