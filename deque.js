class Deque {
    #deque;
    #size;
    constructor() {
        this.#deque = [];
        this.#size = 0;
    }
    push_front(value) {
        this.#deque.unshift(value);
        ++this.#size;
    }
    pop_front() {
        this.#deque.shift();
        --this.#size;
    }
    push_back(value) {
        this.#deque.push(value);
        ++this.#size;
    }
    pop_back() {
        this.#deque.pop();
        --this.#size;
    }
    length() {
        return this.#size;
    }
    isEmpty() {
        return this.#size === 0;
    }
    peek_front() {
        if (this.#size === 0) {
            return;
        }
        return this.#deque[0];
    }
    peek_back() {
        if (this.#size === 0) {
            return;
        }
        return this.#deque[this.#size - 1];
    }
    print() {
        console.log(this.#deque);
    }
}

