function clean(string) {
	let d = 0;
	let k = 0;
	let c;
	let out = '';
	for (const element of string) {
		c = element;

		if (d < 1) {
			if (c === '>') {
				k -= 1;
			}

			if (c === '<') {
				k += 1;
			}
		}

		if (k < 1) {
			if (c === '(') {
				d += 1;
			}

			if (d > 0) {
				out += ' ';
			} else {
				out += c;
			}

			if (c === ')') {
				d -= 1;
			}
		} else {
			out += c;
		}
	}

	return out.replace(/'/g, '').trim();
}

module.exports = clean;
