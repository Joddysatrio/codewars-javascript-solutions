function sortArray(array) {
  
  let ganjil = array.filter(a => a % 2 !== 0).sort((a,b) => a - b)
  return array.map(angka =>{
    if (angka % 2 === 0 ){
      return angka
    } else {
      return ganjil.shift()
    }
  })
}