// Give me a diamond

function diamond(n) {

	// if n is negative or even return null
	if(n < 0 || n % 2 === 0 ) return null;

	let diam = '*'.repeat(n) + '\n'; // middle 
	let space = 0;

	for(let x = n - 2; x >=1; x -= 2) {
		let row = ' '.repeat(++space) + '*'.repeat(x) + '\n';
		diam = row + diam + row;
	}

	return diam;
} 

