function clean(str) {
	var d = 0, k = 0;
	var c;
	var out = '';
	for (var i=0; i<str.length; i++) {
		c = str[i];

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
				d +=1;
			}
			if (d > 0) {
				out += ' ';
			} else {
				out += c
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

export default clean;