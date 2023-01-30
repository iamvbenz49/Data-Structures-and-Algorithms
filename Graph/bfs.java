class bfs {
    // Function to return Breadth First Traversal of given graph.
    public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
       Queue <Integer> q = new LinkedList<>();
       boolean[] vis = new boolean[V];
       ArrayList<Integer> list = new ArrayList<>();
       q.add(0);
       vis[0]=true;
       while(!q.isEmpty()){
           Integer curr = q.poll();
           list.add(curr);
           
           for(Integer n:adj.get(curr)){
               if(vis[n]==false){
                   vis[n]=true;
                   q.add(n);
               }
           }
       }
       return list;
    }
}
