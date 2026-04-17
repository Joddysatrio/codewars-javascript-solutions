function removeSmallest(numbers) {
  let b = Math.min(...numbers)
  let c = numbers.indexOf(b)
  let d= [...numbers]
   d.splice(c,1)
  return d
}
​