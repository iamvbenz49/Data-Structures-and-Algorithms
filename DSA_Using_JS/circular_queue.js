class CircularQueue {

    constructor() {
        this.front = -1
        this.rear = -1
        this.cQueue = [0, 0, 0, 0]
        this.N = this.cQueue.length
    }

    isFull() {
        if ((this.rear + 1) % this.N == this.front) {
            return true
        } else {
            return false
        }
    }

    isEmpty() {
        if (this.front === -1 && this.rear === -1) {
            return true
        } else {
            return false
        }
    }

    enqueue(value) {
        if (this.isFull()) {
            return "QUEUE IS FULL"
        } else if (this.isEmpty()) {
            this.front = this.rear = 0
        } else {
            this.rear = (this.rear + 1) % this.N
        }
        this.cQueue[this.rear] = value
    }

    dequeue() {
        let x;
        if (this.isEmpty()) {
            return "QUEUE IS EMPTY"
        } else if (this.front === this.rear) {
            this.front = this.rear = -1
        } else {
            x = this.cQueue[this.front]
            this.cQueue[this.front] = 0
            this.front = (this.front + 1) % this.N
        }
        return x
    }
    display() {
        console.log(this.cQueue)
    }

}

let cq = new CircularQueue()
cq.enqueue(3)
cq.enqueue(77)
cq.enqueue(87)
cq.enqueue(233)
console.log(cq.dequeue())
cq.enqueue(321)
cq.display()
