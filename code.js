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


// Binary to Integer

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

// Remove anchor from URL

function removeUrlAnchor(url){
  return url.replace(/#.*/g, '')
}

// Factorial 

function factorial(n){
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n-1)
  }
}

// Anagram Detection - 7 kyu

var isAnagram = function(test, original) {
  let x = test.toLowerCase().split('').sort().join('')
  let y = original.toLowerCase().split('').sort().join('')
  
  return x === y ? true : false;
  
};


/* 


Regex Password Validation -- 5 kyu

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

*/

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}


// Alternate Capitalization -- 7 kyu

function capitalize(str) {
const even = []
const odd = []
  const string = str.split('')
  string.map((el, index) => {
  if(index % 2 === 0 || index === 0) {
    even.push(el.toUpperCase())
    odd.push(el)
  } else {
    even.push(el)
    odd.push(el.toUpperCase())
  }
  })
  
  return [even.join(''), odd.join('')]
}


// Rotate for a Max -- 7 kyu

function maxRot(n) {
  var str = n.toString();
    var arr = [str];
    for (let i = 0;i <= str.length-1;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}


// Form The Minimum -- 7 kyu

function minValue(values){
  //your code here
  const newArr = [ ...new Set(values)]
  const result = parseInt(newArr.sort((a,b) => a-b).join(''))
  
  return result;
}