class Node {
   constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
   } 
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    size() {
        let count = 0;
        let tmp = this.head;
        while (tmp) {
            ++count;
            tmp = tmp.next;
        }
        return count;
    }
    clear() {
        this.head = null;
        this.tail = null;
    }
    getLast() {
        return this.tail.data;
    }
    getFirst() {
        return this.head.data;
    }
    push_front(data) {
        let node = new Node(data);
        if (this.size() === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node.next;
            this.head = node;
        }
    }
    push_back(data) {
        let node = new Node(data);
        if (this.size() === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            node.next = null;
            this.tail = node;
        }
    }
    pop_front() {
        if (!this.head && !this.tail) {
            return;
        }
        this.head = this.head.next;
    }
    pop_back() {
        if (!this.head && !this.tail) {
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    insert(pos, data) {
        if (pos < 0 || pos > this.size()) {
            return;
        }
        if (pos === 0) {
            this.push_front(data);
            return;
        }
        if (pos === this.size()) {
            this.pop_back(data);
            return;
        }
        let count = 0;
        let tmp = this.head;
        while (tmp) {
            if (pos - 1 === count) {
                let node = new Node(data);
                node.next = tmp.next;
                tmp.next = node;
                node.prev = tmp;
            }
            tmp = tmp.next;
            ++count;
        }
    }
    erase(pos, data) {
        if (pos < 0 || pos > this.size()) {
            return;
        }
        if (pos === 0) {
            this.pop_front();
            return;
        }
        if (pos === this.size()) {
            this.pop_back();
            return;
        }
        let count = 0;
        let tmp = this.head;
        while (pos === count) {        
            tmp = tmp.next;
            ++count;
        }
        let next = tmp.next.next;
        tmp.next = next;
        next.prev = tmp;
    }
    empty() {
        return (this.head === null && this.tail === null);
    }
    print() {
        let tmp = this.head;
        while (tmp) {
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }
    sort() {
        for (let cur = this.head; cur.next != null; cur = cur.next) {
            for (let cur1 = cur.next; cur1 != null; cur1 = cur1.next) {
                if (cur.data > cur1.data) {
                    [cur.data, cur1.data] = [cur1.data, cur.data];
                }
            }
        }
    }
    revers() {
        if (this.head === null) {
            return;
        }
        let cur = this.head;
        let prev = null;
        while (cur) {
            let tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }
        this.head = prev;
    }
}

