function towerBuilder(nFloors) {
  let three = []
  
  for (let a = 1; a <= nFloors; a++){
    let space = ' '.repeat(nFloors - a)
                           
    let bintang = '*'.repeat((a * 2) -1)
    let bentuk = space + bintang + space
    
    three.push(bentuk)
  }
  return three
}
console.log(towerBuilder(4))