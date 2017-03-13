// decode rot13 letter substitution cipher, accounting for shifts past 'z' & 'Z', and non-alphabetic characters
function rot13(str) {

  var newStr = [],
      // set up array to iterate
      arr = str.split(''),
      // be comprehensible rather than just assign static integer values (?)
      lowerCaseA = 'a'.charCodeAt(0),
      lowerCaseZ = 'z'.charCodeAt(0),
      upperCaseA = 'A'.charCodeAt(0),
      upperCaseZ = 'Z'.charCodeAt(0);

  for (i=0; i<str.length; i++) {
    var currentChar = str.charCodeAt(i);
    // if character is non-alphabetic, insert to same position in new array
    if ( str.slice(i, i+1).search(/[a-zA-Z]/) === -1 ) {
      newStr[i] = arr[i];
    }
    else {
      // lower case char, shift wraps around past lower case 'z' charCode value
      if ( str.slice(i, i+1).search(/[a-z]/) >= 0 && currentChar + 13 > lowerCaseZ ) {
          newStr[i] = String.fromCharCode( (lowerCaseA + 13) - (lowerCaseZ - currentChar + 1) );
        }
      // upper case char, shift wraps around past upper case 'Z' charCode value
      else if ( str.slice(i, i+1).search(/[A-Z]/) >= 0 && currentChar + 13 > upperCaseZ ) {
          newStr[i] = String.fromCharCode( (upperCaseA + 13) - (upperCaseZ - str.charCodeAt(i) +1) );
        }

      else {
        // shift value means no wrap-around
        newStr[i] = String.fromCharCode( currentChar + 13 );
      }
    }
  }
  newStr = newStr.join('');
  return newStr;
}

rot13("Qba'g gel gb or yvxr Wnpxvr. Gurer vf bayl bar Wnpxvr. Fghql pbzchgref vafgrnq. - Wnpxvr Puna");
