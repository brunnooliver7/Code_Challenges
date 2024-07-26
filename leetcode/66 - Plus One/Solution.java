import java.math.BigInteger;

class Solution {
  public int[] plusOne(int[] digits) {
    StringBuilder numberStr = new StringBuilder();
    for (int digit : digits) {
      numberStr.append(digit);
    }

    // Converte a string em um BigInteger e adiciona 1
    BigInteger number = new BigInteger(numberStr.toString());
    number = number.add(BigInteger.ONE);

    // Converte o resultado de volta para uma string
    String resultStr = number.toString();

    // Converte a string de volta para um array de inteiros
    int[] result = new int[resultStr.length()];
    for (int i = 0; i < resultStr.length(); i++) {
      result[i] = Character.getNumericValue(resultStr.charAt(i));
    }

    return result;
  }
}
