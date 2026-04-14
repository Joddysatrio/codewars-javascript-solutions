function wave(str) {
  let z = [];
  
  for (let i = 0; i < str.length; i++) {
    
    
    if (str[i] === ' ') {
      continue; 
    }
    
    
    let a = str.slice(0, i);
    let b = str[i].toUpperCase();
    let c = str.slice(i + 1);
    
    let e = a + b + c;
    
    
    z.push(e);
  }
  
  return z;
}
​
​