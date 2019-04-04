'use strict';
function padStart({numberString = '', maxLength = 4, defaultText = '0'}) {
	return String(numberString).padStart(maxLength, defaultText);
}

function main({provider = '0000', hlr = '0000', start = '0000', end = '9999', delimiter = ''}) {
	const numbers = [];

	for (let i = start; i <= end; i++) {
		const genericText = padStart({numberString: i, maxLength: end.length});
		numbers.push([provider, hlr, genericText].join(delimiter));
	}

	return numbers;
}

module.exports = main;
