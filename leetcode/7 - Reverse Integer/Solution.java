class Solution {
  public int reverse(int x) {
      String str = String.valueOf(x);
      String rstr = "";

      // Montar a string invertida
      for (int i = 0; i < str.length(); i++) {
          char c = str.charAt(i);
          rstr = c + rstr;
      }

      // Corrigir caso número for negativo
      if (rstr.charAt(rstr.length() - 1) == '-') {
          rstr = rstr.replace("-", "");
          rstr = '-' + rstr;
      }

      // Transformar em inteiro
      try {
          return Integer.valueOf(rstr);
      } catch (Exception e) {
          return 0;
      }
  }
}
