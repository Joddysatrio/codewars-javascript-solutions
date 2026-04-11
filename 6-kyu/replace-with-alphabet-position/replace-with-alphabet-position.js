function alphabetPosition(text) {
  const abjad = 'abcdefghijklmnopqrstuvwxyz'
  let hasil = text.toLowerCase().split('').filter(a => abjad.includes(a)).map((b => abjad.indexOf(b) + 1)).join(' ')
  return hasil
}