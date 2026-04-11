function filter_list(l) {
  // Return a new array with the strings filtered out
  let angka = l.filter (item => typeof item === 'number')
  return angka
}