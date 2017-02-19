module.exports = function zeros(expression) {
	let array = expression.split('*'), two = 0, five = 0;
	for (let i = 0; i < array.length; i++) {

		if (array[i][array[i].length-1] === '!' && array[i][array[i].length-2] === '!') {
			let current = parseInt(array[i]);
			if (current % 2) {
				for (let j = 5; j <= current; j+=10) {
					five += findAmount(j, 5);
				}
			} else {
				for (let j = 2; j <= current; j+=2) {
					if (!(j % 10)) {
						two += findAmount(j, 2);
						five += findAmount(j, 5);
					} else {
						two += findAmount(j, 2);
					}
				}
			}
		} else {
			for (let j = 2; j <= parseInt(array[i]); j++) {
				if (!(j % 10)) {
					two += findAmount(j, 2);
					five += findAmount(j, 5);
				} else if (!(j % 5)) {
					five += findAmount(j, 5);
				} else if (!(j % 2)) {
					two += findAmount(j, 2);
				} 
			}
		}
	}
	return Math.min(two, five);
}

function findAmount(number, element) {
	let temp = number, count = 0;
	while (temp >= element && !(temp % element)) {
		count++;
		temp /= element;
	}
	return count;
}