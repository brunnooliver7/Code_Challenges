/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const cleanString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
	const reverseString = cleanString.split('').reverse().join('')
	return cleanString == reverseString;
};
