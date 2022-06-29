class stack {

    //constructor with variables
    constructor() {
        this.top = -1;
        this.arr = [];
        for (let i = 0; i < 5; i++) {
            this.arr.push(0)
        }
    }

    //checks if a stack is empty
    isEmpty() {
        if (this.top === -1) {
            return true
        } else {
            return false
        }
    }

    //check if a stack is full
    isFull() {
        if (this.top === 4) {
            return true
        } else {
            return false
        }
    }

    //Adds an element to the stack
    push(ele) {
        if (this.isFull()) {
            console.log("Stack overflow")
        } else {
            this.top++;
            this.arr[this.top] = ele;
        }
    }

    //gets the last element of an array
    pop() {
        if (this.isEmpty()) {
            console.log("Stack underflow")
        } else {
            let PopVal = arr[this.top]
            this.arr[this.top] = 0
            this.top--;
            return PopVal
        }
    }

    //counts the number of elements
    count() {
        return this.top + 1
    }

    //gets the element from the desired posistio
    peek(pos) {
        if (this.isEmpty) {
            console.log("Stack is Empty")
        } else {
            return this.arr[pos]
        }
    }

    //changes the value at given posistion
    change(pos, val) {
        this.arr[pos] = val
        console.log("Done!!")
    }

    //Display all the elements in the stack
    display() {
        for (let i = 4; i > -1; i--) {
            console.log(this.arr[i])
        }
    }
}

stack1 = new stack()
stack1.push(9)
stack1.push(12)
stack1.push(23)
stack1.display()