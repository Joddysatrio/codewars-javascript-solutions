function abbrevName(name){
  let a = name.split(' ')
  let b = a.slice(0,1).join(' ').split('').slice(0,1).join('').toUpperCase()
  let c = a.slice(1).join(' ').split('').slice(0,1).join('').toUpperCase()
  return `${b}.${c}`
​
}
​