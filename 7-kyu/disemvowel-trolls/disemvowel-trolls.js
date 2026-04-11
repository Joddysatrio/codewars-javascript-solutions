 function disemvowel(str) {
  const vokal = "aeiouAEIOU"
​
​
  return str.split('').filter(huruf => !vokal.includes(huruf)).join("")
}