function expandedForm(num) {
 
  let numStr = num.toString().split('');
  let hasil = [];
  
  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];
    
    if (digit !== "0") {
      let jumlahNol = numStr.length - i - 1;
      let angkaBaru = digit + "0".repeat(jumlahNol);
      hasil.push(angkaBaru);
    }
  }
  return hasil.join(" + ");
}
​