function firstNonRepeatedChar(str){
    const charCount = {}
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1
    }
    for(let char of str){
        if(charCount[char] === 1){
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatedChar("programming"));


function getIntersectionNode(headA, headB) {
    let curA = headA;
    let curB = headB;

    while(curA !== curB){
        curA = curA ? curA.next : headB
        curB = curB ? curB.next : headA
    }
    return curA;
}

const headA = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const headB = { value: 4, next: headA.next };
console.log(getIntersectionNode(headA, headB));