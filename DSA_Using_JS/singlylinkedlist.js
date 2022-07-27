class node {
    constructor(data) {
        this.data = data
        this.ref = undefined
    }
}
class LinkedList {
    constructor() {
        this.head = undefined
    }
    printLinkedList() {
        let n = this.head
        if (this.head === undefined) {
            return "Linked List is Empty"
        } else {
            while (n !== undefined) {
                console.log(n.data)
                console.log("|")
                console.log("V")
                n = n.ref
            }
        }
    }
    add_begin(data) {
        let new_node = new node(data)
        new_node.ref = this.head
        this.head = new_node
    }
    add_end(data) {
        let new_node = new node(data)
        if (this.head === undefined) {
            this.head = new_node
        } else {
            let n = this.head
            while (n.ref !== undefined) {
                n = n.ref
            }
            n.ref = new_node
        }
    }
    add_after_node(data, index) {
        if (this.head === undefined) {
            return "Linked LIst is empty!!"
        } else {
            let count = 0
            let n = this.head
            let new_node = new node(data)
            while (count < index) {
                n = n.ref
                count += 1
            }
            new_node.ref = n.ref
            n.ref = new_node
        }
    }
    add_before_node(data, index) {
        if (this.head === undefined) {
            return "Linked List is empty!!"
        } else if (index === 0) {
            let n = this.head
            let new_node = new node(data)
            new_node.ref = n
            this.head = new_node
        } else {
            let count = 0
            let n = this.head
            let new_node = new node(data)
            while (count < index - 1) {
                n = n.ref
                count += 1
            }
            new_node.ref = n.ref
            n.ref = new_node
        }
    }
    emptyLinkedList(data) {
        if (this.head === undefined) {
            let new_node = new node(data)
            this.head = new_node
        } else {
            return "Linked List is not empty!!!"
        }
    }
    delete_at_begining() {
        if (this.head === undefined) {
            return "Linked List is Empty"
        } else {
            this.head = this.head.ref
        }
    }
    delete_at_end() {
        if (this.head === undefined) {
            return "Linked List is empty!!!"
        } else {
            let n = this.head
            while (n.ref.ref !== undefined) {
                n = n.ref
            }
            n.ref = undefined
        }
    }
    delete_at_middle(index) {
        if (this.head === undefined) {
            return "Linked List is empty!!!"
        } else if (index === 0) {
            this.delete_at_begining()
        } else {
            let n = this.head
            let count = 0
            while (index - 1 > count) {
                count += 1
                n = n.ref
            }
            n.ref = n.ref.ref
        }
    }
}

let Linkedlst = new LinkedList()
Linkedlst.emptyLinkedList(31)
Linkedlst.add_end(90)

Linkedlst.add_end(121)
Linkedlst.add_end(76)
Linkedlst.add_after_node(127, 0)
Linkedlst.add_before_node(27, 0)
Linkedlst.delete_at_begining()
Linkedlst.delete_at_end()
Linkedlst.delete_at_middle(0)
Linkedlst.delete_at_middle(1)
Linkedlst.printLinkedList()