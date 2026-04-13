function isValidWalk(walk) {
  let n = walk.filter(a => 'n'.includes(a)).length
  let s = walk.filter(a => 's'.includes(a)).length
  let w = walk.filter(a => 'w'.includes(a)).length
  let e = walk.filter(a => 'e'.includes(a)).length
  
  if (walk.length === 10 && n === s && w === e){
    return true
  } else {
    return false
  }
}