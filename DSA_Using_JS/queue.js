class Queue {
    constructor() {
            this.front = -1
            this.back = -1
            this.queue = []
            for (let i = 0; i < 5; i++) {
                this.queue.push(0)
            }
        }
        //Checks if a queue is full
    isFull() {
            if (this.back === this.queue.length) {
                return true;
            } else {
                return false;
            }
        }
        //checks if an queue is empty
    isEmpty() {
        if (this.back === -1 && this.front === -1) {
            return true;
        } else {
            return false;
        }
    }
    //adds element to the queue
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue over flow")
            return
        } else if (this.isEmpty()) {
            this.front = this.back = 0
        } else {
            this.front++
        }
        this.queue[this.front] = value
    }
    //removes element from the queue
    dequeue() {
        var x = 0;
        if (this.isEmpty()) {
            console.log("Queue under flow")
            return
        } else if (this.front == this.back) {
            x = queue[this.back]
            this.queue[this.front] = 0
            this.front = this.back = -1
        } else {
            x = queue[this.back]
            this.queue[this.front] = 0
            this.front++
        }
        return x
    }
    count() {
        console.log("the total number of elements is ", this.back - this.front + 1);
    }
    display() {
        for (let i = 0; i < 5; i++) {
            console.log(this.queue[i])
        }
    }
}

let queue = new Queue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(092)
queue.enqueue(21)
queue.enqueue(23)
queue.dequeue()
queue.display()
