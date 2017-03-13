var string = 'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.';

var encodedString = 'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=';

var hEncodedString = 'Ik5ldmVyIHRydXN0IGEgY29tcHV0ZXIgeW91IGNhbid0IHRocm93IG91dCBhIHdpbmRvdyIgLSBTdGV2ZSBXb3puaWFr';

var hDecodedString = 'hDecodedString: \"Never trust a computer you can\'t throw out a window\" - Steve Wozniak';

// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding

// each char in this string is treated as a byte of binary data
// base64 representation of string is returned
console.log('encodedString:\n', btoa(string), '\n');

// atob decodes a base64 encoded string
console.log('decodedString:\n', atob(encodedString), '\n');

console.log('hDecodedString:\n', atob(hEncodedString), '\n');
