function isIsogram(str){
 let b = str.toLowerCase()
 let c = new Set(b)
 if (b.length === c.size){
   return true
 } else {
  return false
 }
}
​
console.log(isIsogram("Dermatoglyphics"))