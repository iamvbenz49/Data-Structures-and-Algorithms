class node {
    constructor(data) {
        this.data = data
        this.nref = undefined
        this.pref = undefined
    }
}
class doublyLinkedList {
    constructor() {
        this.head = undefined
        this.tail = undefined
    }
    printLinkedList() {
        let n = this.head
        if (n === undefined) {
            return "Linked List is empty"
        } else {
            while (n !== undefined) {
                console.log(n.data)
                console.log("|")
                console.log("V")
                n = n.nref
            }
        }
    }
    printLinkedListReverse() {
        let n = this.head
        if (n === undefined) {
            return "Linked List is Empty!!"
        } else {
            while (n.ref !== undefined) {
                n = n.ref
            }
            while (n.pref !== undefined) {
                console.log(n.data)
                console.log("|")
                console.log("V")
                n = n.pref
            }
        }
    }
    insert_when_empty(data) {
        if (this.head === undefined) {
            let new_node = new node(data)
            this.head = new_node
        } else {
            return "Linked List is Empty"
        }
    }
    insert_at_begining(data) {
        if (this.head !== undefined) {
            let new_node = new node(data)
            new_node.nref = this.head
            this.head.pref = new_node
            this.head = new_node
        } else {
            this.insert_when_empty(data)
        }
    }
    insert_at_end(data) {
        if (this.head !== undefined) {
            let n = this.head
            let new_node = new node(data)
            while (n.nref !== undefined) {
                n = n.nref
            }
            n.nref = new_node
            new_node.pref = n
        } else {
            this.insert_when_empty(data)
        }
    }
    insert_before_node(data, index) {
        let count = 0
        let n = this.head
        let new_node = new node(data)
        if (index === 0) {
            this.insert_at_begining(data)
            return
        }
        while (count < index) {
            n = n.nref
            count += 1
        }
        new_node.nref = n
        new_node.pref = n.pref
        n.pref.nref = new_node
        n.pref = new_node
    }
    insert_after_node(data, index) {
        let n = this.head
        let count = 0
        let new_node = new node(data)
        while (count < index) {
            count += 1
            n = n.nref
        }
        if (n.nref !== undefined) {
            new_node.pref = n
            new_node.nref = n.nref
            n.nref.pref = new_node
            n.nref = new_node
        } else {
            new_node.pref = n
            n.nref = new_node
        }
    }
    delete_at_begining() {
        let n = this.head
        if (n !== undefined) {
            this.head = this.head.nref
        }
    }
    delete_at_end() {
        let n = this.head
        while (n.nref !== undefined) {
            n = n.nref
        }
        n.pref.nref = undefined
    }
    delete_at_middle(index) {
        if (index === 0) {
            this.delete_at_begining()
        }
        let count = 0
        let n = this.head
        while (index > count) {
            n = n.nref
            count += 1
        }
        if (n.nref === undefined) {
            this.delete_at_end()
        } else {
            n.pref.nref = n.nref
            n.nref.pref = n.pref
        }
    }
}

const Dll = new doublyLinkedList()

Dll.insert_when_empty(12)
Dll.insert_at_begining(28)
Dll.insert_at_end(14)
Dll.insert_at_end(32)
Dll.insert_at_end(28)
Dll.insert_at_end(43)
Dll.insert_at_end(100)
Dll.insert_before_node(122, 3)
Dll.insert_before_node(321, 0)
Dll.insert_after_node(74, 2)
Dll.insert_after_node(7, 9)
Dll.delete_at_begining()
Dll.delete_at_end()
Dll.delete_at_middle(3)
Dll.delete_at_middle(0)
Dll.delete_at_middle(6)
Dll.printLinkedList()
