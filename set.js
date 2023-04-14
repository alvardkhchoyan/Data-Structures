class Set {
    constructor(arr) {
        this.arr = arr;
        this.set();
    }
    set() {
        for (let i = 0; i < this.size(); ++i) {
            for (let j = i + 1; j < this.arr.length; ++j) {
                if (this.arr[i] === this.arr[j]) {
                    this.arr.splice(j, 1);
                    --j;
                }
            }
        }
    }
    size() {
        return this.arr.length;
    }
    add(elem) {
        this.arr.push(elem);
        this.set();
    }
    has(elem) {
        for (let i = 0; i < this.size(); ++i) {
            if (this.arr[i] === elem) {
                return true;
            }
        }
        return false;
    }
}
