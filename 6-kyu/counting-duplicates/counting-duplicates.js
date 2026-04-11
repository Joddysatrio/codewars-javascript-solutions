function duplicateCount(text){
  let hurufKecil = text.toLowerCase().split('')
  
  let hurufSama = hurufKecil.filter((a,b) => hurufKecil.indexOf(a) !== b)
  
  return new Set(hurufSama).size;
}