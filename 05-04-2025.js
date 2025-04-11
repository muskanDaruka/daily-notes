const fruits = ['apple','banana','grapes','berry']

function practice() {
  const newFruits = fruits.push('orange')
  console.log(fruits)
  const removed = fruits.pop()
  console.log(fruits)
  console.log(newFruits, 'new')
  console.log(removed, 'removed')
}

practice();