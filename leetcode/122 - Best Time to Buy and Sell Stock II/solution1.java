class Solution {
  public int maxProfit(int[] prices) {
    List<List<Integer>> groups = mountGroups(prices);
    return calcProfit(groups);
  }

  private static List<List<Integer>> mountGroups(int[] prices) {
    List<List<Integer>> groups = new ArrayList<>();
    int ref = 0;

    for (int i = 0; i < prices.length; i++) {
      if (i + 1 < prices.length && prices[i + 1] > prices[i])
        continue;
      List<Integer> group = new ArrayList<>();
      for (int j = ref; j <= i; j++) {
        group.add(prices[j]);
      }
      groups.add(group);
      ref = i + 1;
    }

    return groups;
  }

  private static int calcProfit(List<List<Integer>> groups) {
    int profit = 0;

    for (List<Integer> group : groups) {
      if (group.size() > 1) {
        profit += group.get(group.size() - 1) - group.get(0);
      }
    }

    return profit;
  }

}
