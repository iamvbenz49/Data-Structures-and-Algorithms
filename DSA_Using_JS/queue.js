class Queue {
    constructor() {
        this.front = this.rear = -1
        this.queue = [0, 0, 0, 0, 0]
    }
    isEmpty() {
        if (this.front === -1 && this.rear === -1) {
            return true
        } else {
            return false
        }
    }
    isFull() {
        if (this.front === 4) {
            return true
        } else {
            return false
        }
    }
    enqueue(value) {
        if (this.isFull()) {
            return
        } else if (this.isEmpty()) {
            this.front = this.rear = 0
        } else {
            this.rear++;
        }
        this.queue[this.rear] = value
    }
    dequeue() {
        let key = 0;
        if (this.isEmpty()) {
            return
        } else if (this.front === this.rear) {
            key = this.queue[this.front]
            this.queue[this.rear] = 0
            this.front = this.rear = -1
        } else {
            key = this.queue[this.front]
            this.queue[this.front] = 0
            console.log(this.front, "h")
            this.front++;
        }
        return key
    }
    display() {
        return this.queue
    }
}

let queue = new Queue()
queue.enqueue(10)
console.log(queue.dequeue())
queue.enqueue(12)
queue.enqueue(34)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.display())
