class Node:

    def __init__(self,data) -> None:
        self.data = data
        self.left = None
        self.right = None
    def search(self,target):
        if self.data == target:
            print("FOUND")
            return self.data
        elif self.data>target:
            return self.left.search(target)
        elif self.data<target:
            return self.right.search(target)
        print("Not found!!!")
    
    def preOrderTraversal(self):
        print(self.data,end=" ")
        if self.left:
            self.left.preOrderTraversal()
        if self.right:
            self.right.preOrderTraversal()

    def inOrderTraversal(self):
        if self.left:
            self.left.inOrderTraversal()
        print(self.data,end=" ")
        if self.right:
            self.right.inOrderTraversal()

    def postOrderTraversal(self):
        if self.left:
            self.left.postOrderTraversal()
        if self.right:
            self.right.postOrderTraversal()
        print(self.data,end=" ")

    def height(self,h=0):
        left = self.left.height(h+1) if self.left else h
        right = self.right.height(h+1) if self.right else h
        return max(left,right)
    
    def getNodesAtDepth(self,depth,nodes=[]):
        if depth == 0:
            nodes.append(self.data)
            return nodes
        if self.left:
            self.left.getNodesAtDepth(depth-1,nodes)
        if self.right:
            self.right.getNodesAtDepth(depth-1,nodes)
        return nodes

    def add(self,data):
        if self.data == data:
            return 
        elif self.data>data:
            if self.left == None:
                self.left = Node(data)
            else:
                return self.left.add(data)
        elif self.data<data:
            if self.right == None:
                self.right = Node(data)
            else:
                return self.right.add(data)
        print("Not found!!!")
    def findMin(self):
        if self.left:
            return self.left.findMin()
        return self.data
    def delete(self,target):
        if self.data == target:
            if self.left and self.right:
                minValue = self.right.findMin()
                self.data = minValue
                self.right = self.right.delete(minValue)
                return self    
            else:
                return self.left or self.right
        if self.right and target>self.data:
            self.right = self.right.delete(target)
        if self.left and target<self.data:
            self.left = self.left.delete(target)
        return self

    def isBalanced(self):
        leftHeight = self.left.height()+1 if self.left else 0
        rightHeight = self.right.height()+1 if self.right else 0

        return abs(leftHeight-rightHeight)<2

class Tree:

    def __init__(self,root,name) -> None:
        self.root = root
        self.name = name

    def search(self,target):
        return self.root.search(target)
    
    def preOrderTraversal(self):
        return self.root.preOrderTraversal()

    def postOrderTraversal(self):
        return self.root.postOrderTraversal()

    def inOrderTraversal(self):
        return self.root.inOrderTraversal()
    
    def heightOfTree(self):
        return self.root.height()
    
    def nodesAtDepth(self,depth):
        return self.root.getNodesAtDepth(depth)

    def Add(self,data):
        self.root.add(data)

    def delete(self,target):
        self.root = self.root.delete(target)

    def isBalanced(self):
        return self.root.isBalanced()



root = Node(100)

root.left = Node(90)
root.right = Node(110)

root.left.left = Node(80)
root.left.right = Node(95)

root.right.left = Node(97)
root.right.right = Node(150)

print(root.right.right.data)

Mytree = Tree(root,"BENZ TREE")

found = Mytree.root.search(90)
print(found)

print("POST ORDER ",end=" ")
Mytree.postOrderTraversal()
print()

print("PRE ORDER ",end=" ")
Mytree.preOrderTraversal()
print()

print("IN ORDER ",end=" ")
Mytree.inOrderTraversal()
print()

print("Height of Tree ",Mytree.heightOfTree())

print("nodes at 1 ",Mytree.nodesAtDepth(1))

Mytree.Add(121)
Mytree.inOrderTraversal()
print()

Mytree.delete(110)
print("AFTER DELETION",end=" ")
Mytree.inOrderTraversal()
print()

print(Mytree.isBalanced())
