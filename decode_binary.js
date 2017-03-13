// separate binary data into 8-bit units (code points), return string generated from those code points
var stream = '001000100100010001101111001000000110111101101110011001010010000001110100011010000110100101101110011001110010000001110100011010000110000101110100001000000111001101100011011000010111001001100101011100110010000001111001011011110111010100100000011001010111011001100101011100100111100100100000011001000110000101111001001000100010000000101101001000000100010101101100011001010110000101101110011011110111001000100000010100100110111101101111011100110110010101110110011001010110110001110100';

var binDecode = function(str) {
  var bytes = str.match(/.{1,8}/g); // String.prototype.match() returns an array
  var codePoints = [];
  var words = [];

  for (var i = 0; i < bytes.length; i++) {
    // parse each byte as radix 2, return an integer (the codePoint for this char)
    // populate codePoints array
    console.log( 'byte: ', bytes[i], '\n', 'codePoint int: ', parseInt(bytes[i], 2), '\n' );
    codePoints.push(parseInt(bytes[i], 2));
  }
  // populate words array using String.fromCodePoint() static method
  for (var j = 0; j < codePoints.length; j++) {
    words.push( String.fromCodePoint(codePoints[j]) );
  }
  return words.join('');
};

binDecode(stream);
