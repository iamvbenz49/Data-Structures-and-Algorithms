import java.util.Scanner;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    int n, m;
    n = 5;
    m = 5;
    Scanner sc = new Scanner(System.in);
    int[][] arr = new int[n][n];
    for (int i = 0; i < m; i++) {
      int u = sc.nextInt();
      int v = sc.nextInt();
      arr[u][v] = 1;
      arr[v][u] = 1;
    }
    System.out.println(Arrays.deepToString(arr));
  }
}