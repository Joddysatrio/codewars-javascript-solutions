function XO(str) {
   let a = str.toLowerCase().split('')
   let hasilx = a.filter(b => 'x'.includes(b))
   let hasilo = a.filter(c => 'o'.includes(c))
   
   if (hasilo.length === hasilx.length){
     return true
   } else {
     return false
   }
}