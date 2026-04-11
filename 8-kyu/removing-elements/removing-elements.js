function removeEveryOther(arr){
  //your code here
  let wadah = []
  for (let i = 0 ; i<arr.length; i += 2){
    wadah.push(arr[i])
  } return wadah
}