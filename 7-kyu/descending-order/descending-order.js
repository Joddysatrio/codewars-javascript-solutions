function descendingOrder(n){
  let a = String(n).split('').sort((a,b)=> b-a).join('')
  let b = Number(a)
  return b
}
​
​