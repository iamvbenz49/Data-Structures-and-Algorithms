package Trees;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import javax.swing.tree.TreeNode;

public class levelOrderTraversal {
    public static void main(String[] args) {
        
    }
    public List<List<Integer>> levelOrder(TreeNode root){
        List<List<Integer>> list = new LinkedList<List<Integer>>();
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.offer(root);
        if(root==null)return list;
        while(!queue.isEmpty()){
            List<Integer> subList = new LinkedList<Integer>();
            int size = queue.size();
            for(int i=0;i<size;i++){
                if(queue.peek().right!=null)queue.offer(queue.peek().right);
                if(queue.peek().left!=null)queue.offer(queue.peek().left);
                subList.add(queue.poll().val);
            }
            list.add(0,subList);
        }
        return list;
    }
}
