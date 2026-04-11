function printerError(s) {
    let jumlah = s.length
    let abjad = s.split('').filter(a => a > 'm')
    let error = abjad.length
    return `${error}/${jumlah}`
}