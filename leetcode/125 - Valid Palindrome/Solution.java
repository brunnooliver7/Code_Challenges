class Solution {
  public boolean isPalindrome(String s) {
      String cleanString = s.replaceAll("[^0-9a-zA-Z]", "").toLowerCase();
      String reverseString = new StringBuilder(cleanString).reverse().toString();
      return cleanString.equals(reverseString);
  }
}
