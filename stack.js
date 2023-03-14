class Stack {
    #size;
    #stack;
    constructor() {
        this.#size = 0;
        this.#stack = [];
    }
    push(element) {
        this.#stack.push(element);
        ++this.#size;
    }
    pop() {
        this.#stack.pop();
        --this.#size;
    }
    peekBack() {
        return this.#stack[this.#size - 1];
    }
    isEmpty() {
        return this.#size === 0;
    }
    size() {
        return this.#size;
    }
    print() {
        console.log(this.#stack);
    }
}
