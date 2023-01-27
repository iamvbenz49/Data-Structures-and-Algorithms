package Trees;

public class representation {
    public static void main(String[] args) {
        Node root = new Node(5);
        root.left = new Node(6);
        root.right = new Node(7);
        traversal.inOrderTraversal(root);
        System.out.println();
        traversal.preOrderTraversal(root);
        System.out.println();
        traversal.postOrderTraversal(root);
        System.out.println();
    }
    
}

