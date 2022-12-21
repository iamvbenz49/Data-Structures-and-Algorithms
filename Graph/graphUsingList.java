import java.util.ArrayList;
public class graphUsingList 
{ 
    
   public static void main(String[] args) {
   // launch(args);
    int n =5;
    ArrayList<ArrayList<Integer> > arr
            = new ArrayList<ArrayList<Integer> >();
    for(int i=0;i<=n;i++){
      arr.add(new ArrayList<Integer>());
    }
    arr.get(1).add(2);
    arr.get(2).add(1);
    
    arr.get(4).add(2);
    arr.get(2).add(4);

    arr.get(1).add(3);
    arr.get(3).add(1);

    arr.get(3).add(4);
    arr.get(4).add(3);

    arr.get(3).add(5);
    arr.get(5).add(3);

    arr.get(4).add(5);
    arr.get(5).add(4);
    for(int i =0;i<=n;i++){
      for(int j =0;j<=arr.get(i).size();j++){
        System.out.print(arr.get(i).get(j)+" ");
      }
      System.out.println();
    }
  }
} 
