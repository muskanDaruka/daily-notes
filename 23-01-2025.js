const arr = [1,1,2,6,7,8,6,7,7,8,8,8,9,4]

const uniqueArray = arr => [...new Set(arr)];

console.log(uniqueArray(arr))



const obj1 = {
    name:'muskan',
    age:24
}

const obj2 = {
    name: 'shivaay',
    age:22
}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2})

console.log(mergeObjects(obj1, obj2))



