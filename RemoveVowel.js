function removeVowels(doc) {
    let vowelsLess = '';
    for(let i = 0; i < doc.length; i++){
      if(/[aeiouyAEIOUY]/.test(doc[i])){     // Do something if doc[i] is a vowel (a, e, i, o, u, y, or A, E, I, O, U, Y)
        vowelsLess = doc.replace(/[aeiouyAEIOUY]/g, ''); // function to replace a vowel '' = remove
        return vowelsLess;
     }
    }
    return doc; // if no vowel was found to output the given string
  }
