function textTransformator(text) {
  // your code here
  var result = []

  for (var i = 0; i < text.length; i++){

    if (text[i] === 'a'|| text[i] == 'A'){
      //text[i] = 4
      result.push(4)
    }
    else if (text[i] == 'i' || text[i] == 'I'){
      //text[i] = 1
      result.push(1)
    }
    else if (text[i] == 'e'|| text[i] == 'E'){
      //text[i] = 3
      result.push(3)
    }
    else if (text[i] == 'o' || text[i] == 'O'){
      //text[i] = 0
      result.push(0)
    }
   else {
     result.push(text[i])
    }

  }
  
  return result.join('')
}

// TEST CASE:
console.log(textTransformator('hello world')) // h3ll0 w0rld
console.log(textTransformator('i love you 3000')) // 1 l0v3 y0u 3000
console.log(textTransformator('do not repeat yourself')) // d0 n0t r3p34t y0urs3lf
