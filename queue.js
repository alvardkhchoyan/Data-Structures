class Queue {
    #queue;
    #size;
    constructor() {
        this.#queue = [];
        this.#size = 0;
    }
    push(value) {
        this.#queue.push(value);
        ++this.#size;
    }
    pop() {
        this.#queue.shift();
        --this.#size;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#size === 0;
    }
    peek() {
        if (this.#size === 0) {
            return;
        }
        return this.#queue[0];
    }
    print() {
        console.log(this.#queue);
    }
}
