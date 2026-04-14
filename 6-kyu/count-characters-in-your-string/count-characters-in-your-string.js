function count(string) {
 return string.split('').reduce((bukuLaporan, huruf) => {
    
    
    bukuLaporan[huruf] = (bukuLaporan[huruf] || 0) + 1;
    
    return bukuLaporan;
  }, {})
}
console.log(count("a"))
​