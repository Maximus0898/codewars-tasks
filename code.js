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


// Testing 1-2-3

var number=function(array){
  if(array.length !== 0 ) {
    const newArr = array.map((el, index) => `${index + 1}: ${el}`)
    return newArr;
  }
  
  return []
}


// Your order, please

function order(words){
  
   return words.split(' ').sort((a,b) => {
     
    return a.match(/\d/) - b.match(/\d/);
 }).join(' ')
}

// Break camelCase

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}


// Shortest word

function findShort(s){
  const lengthOfWords  = s.split(' ').map((str) => str.length);

  return Math.min(...lengthOfWords)
}
