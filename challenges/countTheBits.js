// Prompt:
// Write a function called countTheBits that accepts a single numeric argument that will be an integer.
// The function should return the number of bits set to 1 in the number's binary representation.
// Hints:
// We typically work with "decimal" numbers daily. Decimal is "base 10", where there are 10 digits available - 0 thru 9. However, it's binary that computers understand - 1's and 0's. The 1's and 0's are called bits.
// As an example, the decimal value of 13 is represented in binary as 1101. There are 3 one bits and 1 zero bit in the decimal number of 13.
// Carefully read the documentation for the Number.prototype.toString method..

const countTheBits = (num) => {
	// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
	// // log2 returns the base 2 logarithm of a number
	// sounds nice but doesn't work for perfect sets like 256, 1024 etc
	// return Math.floor(Math.log2(num));
	//resource https://www.w3schools.com/js/js_bitwise.asp
	if (num == 0) {
		return 0;
	}
	//first part compares if the bit currently = 1 and the second part drops the right most bit and shifts left one
	return (num & 1) + countTheBits(num >> 1);
};

// countTheBits( 0 ) // => 0
console.log(countTheBits(65535)); // => 3
// countTheBits( 256 ) // => 1
// countTheBits( 255 ) //=> 8
// countTheBits( 65535 ) //=> 16
