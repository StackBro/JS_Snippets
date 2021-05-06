class Counter {
    count = 0;

    inc = () => {
        this.count += Counter.incrementStep;
        console.log(this.count);
    }

    static incrementStep = 2;

    static incrementAll = function (arr) {
        arr.forEach((c) => c.inc());
    };
}

const cnt = new Counter();
const cnt2 = new Counter();

Counter.incrementAll([cnt, cnt2])

const cntSingle = new Counter();

cntSingle.inc();
setTimeout(cnt.inc, 1000);
cntSingle.inc();