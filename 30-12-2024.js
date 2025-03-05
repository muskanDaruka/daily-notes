//Iterators pattern? generator fnction? yield keyword?

for (const val of [1, 2, 3, 4, 5]) {
    console.log(val);
}

//Array is having built in iterator function in it which let it know how to print if array is there. And provides a mechanism for customizng the behavior of for...of loops.



function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if (iterationCount < end) {
                result = { value: nextStart }
            }
        }
    }
}