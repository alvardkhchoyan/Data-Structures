class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
    }
    getLast() {
        let last = this.head;
        if (last) {
            while (last.next) {
                last = last.next;
            }
        }
        return last.data;
    }
    getFirst() {
        return this.head.data;
    }
    push_front(data) {
        let node = new Node(data);
        if (this.size() === 0) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    push_back(data) {
        let node = new Node(data);
        if (this.size() === 0) {
            this.head = node;
        }
        else {
            let ogn = this.head;
            while (ogn.next) {
                ogn = ogn.next;
            }
            ogn.next = node;
        }
    }
    pop_front() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    pop_back() {
        if (!this.head) {
            return;
        }
        let tmp = this.head;
        while (tmp.next) {
            tmp = tmp.next;
        }
        tmp = null;
    }
    insert(pos, data) {
        if (pos < 0 || pos > this.size()) {
            return;
        }
        let count = 0;
        let tmp = this.head;
        while (tmp) {
            if (pos === count) {
                let node = new Node(data);
                node.next = tmp.next;
                tmp.next = node;
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
    }
    empty() {
        return this.head === null;
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
