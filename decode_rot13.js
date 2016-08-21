// decode rot13 letter substitution cipher, accounting for shifts past 'z' & 'Z', and non-alphabetic characters
function rot13(str) {

  var newStr = [];
  var arr = str.split('');

  for (i=0; i<str.length; i++) {

    if ( str.slice(i, i+1).search(/[a-zA-Z]/) === -1 ) {
      newStr[i] = arr[i];
    }
    else {

      if ( str.slice(i, i+1).search(/[a-z]/) >= 0 && str.charCodeAt(i) + 13 > 'z'.charCodeAt(0) ) {
          newStr[i] = String.fromCharCode( ('a'.charCodeAt(0)+13) - ('z'.charCodeAt(0) - str.charCodeAt(i) +1) );
          //newStr[i] = String.fromCharCode( 78 - (90 - str.charCodeAt(i) +1))
        }

      else if ( str.slice(i, i+1).search(/[A-Z]/) >= 0 && str.charCodeAt(i) + 13 > 'Z'.charCodeAt(0) ) {
          newStr[i] = String.fromCharCode( ('A'.charCodeAt(0)+13) - ('Z'.charCodeAt(0) - str.charCodeAt(i) +1) );
          //newStr[i] = String.fromCharCode( 100 - (122 - str.charCodeAt(i) +1))
        }

      else {
        newStr[i] = String.fromCharCode( str.charCodeAt(i) + 13 );
      }
    }
  }
  newStr = newStr.join('');
  return newStr;
}

rot13("Qba'g gel gb or yvxr Wnpxvr. Gurer vf bayl bar Wnpxvr. Fghql pbzchgref vafgrnq. - Wnpxvr Puna");
