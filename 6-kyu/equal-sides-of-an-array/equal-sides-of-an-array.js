function findEvenIndex(arr) {
  for ( let i = 0; i < arr.length;i++){
    let panjangKiri = arr.slice(0,i)
    let panjangKanan = arr.slice(i + 1)
    
    let totalKiri = panjangKiri.reduce((a,b) => a+b,0)
    let totalKanan = panjangKanan.reduce((a,b) => a+b,0)
   if (totalKiri === totalKanan){
     return i
   }
  }
  return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]))