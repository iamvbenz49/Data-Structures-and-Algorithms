package Trees;

public class traversal {
    public static void inOrderTraversal(Node root){
        if(root.left!=null){
            inOrderTraversal(root.left);
        }
        System.out.print(root.data+"-->");
        if(root.right!=null){
            inOrderTraversal(root.right);
        }
    }
    public static void preOrderTraversal(Node root){
        System.out.print(root.data+"-->");
        if(root.left!=null){
            preOrderTraversal(root.left);
        } 
        if(root.right!=null){
            preOrderTraversal(root.right);
        }
    }
    public static void postOrderTraversal(Node root){
        if(root.left!=null){
            postOrderTraversal(root.left);
        }
        if(root.right!=null){
            postOrderTraversal(root.right);
        }
        System.out.print(root.data+"-->");
    }
}
