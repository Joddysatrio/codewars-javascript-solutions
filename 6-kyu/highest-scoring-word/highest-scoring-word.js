function high(x){
​
  const kataKata = x.split(" ");
  
 
  let skorTertinggi = 0;
  let kataPemenang = "";
  
​
  for (let kata of kataKata) {
    let skorKataSaatIni = 0; 
    
​
    for (let huruf of kata) {
   
      let nilaiHuruf = huruf.charCodeAt(0) - 96;
      skorKataSaatIni = skorKataSaatIni + nilaiHuruf;
    }
    
    
    if (skorKataSaatIni > skorTertinggi) {
      skorTertinggi = skorKataSaatIni; 
      kataPemenang = kata;
    }
  }
  
 
  return kataPemenang;
}