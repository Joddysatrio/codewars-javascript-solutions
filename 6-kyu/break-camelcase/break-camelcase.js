function solution(string) {
  return string.split('').map(a =>{
    if (a === a.toUpperCase()){
      return ' ' + a
    } else {
      return a
    }
  } ).join('')
  }