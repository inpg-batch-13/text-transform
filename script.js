function textTransformator(text) {
  var split = text.split('')

  var hasil = []
for (i = 0 ; i < split.length ; i++){
  
  if (split[i] === 'e'){
     hasil.push('3')
  } else if ( split[i] === 'i'){
    hasil.push('1')
  } else if ( split[i] === 'a'){
    hasil.push('4')
  } else if ( split[i] === 'o'){
    hasil.push('0')
  } else {
    hasil.push (split[i])
  }
}
return hasil.join('')

}

// TEST CASE:
console.log(textTransformator('hello world')) // h3ll0 w0rld
console.log(textTransformator('i love you 3000')) // 1 l0v3 y0u 3000
console.log(textTransformator('do not repeat yourself')) // d0 n0t r3p34t y0urs3lf
