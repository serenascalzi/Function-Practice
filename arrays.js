// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// Array.forEach
// Array.filter
// Array.map
// Array.reduce

// ---------------------------
// 1. Find largest number
// ---------------------------

var maxNum = numbers[0]
for (let i = 1; i < numbers.length; i++) {
	if (numbers[i] > maxNum) {
		maxNum = numbers[i]
	} else {
		maxNum
	}
}
console.log(maxNum)

// ---------------------------
// 2. Find longest string
// ---------------------------

var maxStr = strings[0]
for (let i = 1; i < strings.length; i++) {
	if (strings[i].length > maxStr.length) {
		maxStr = strings[i]
	} else {
		maxStr
	}
}
console.log(maxStr)

// ---------------------------
// 3. Find even numbers
// ---------------------------

var evenNum = []
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2) {
		evenNum
	} else {
		evenNum.push(numbers[i])
	}
}
console.log(evenNum)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

var oddNum = []
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2) {
		oddNum.push(numbers[i])
	} else {
		oddNum
	}
}
console.log(oddNum)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

var containIs = []
for (let i = 0; i < strings.length; i++) {
	if (strings[i].includes('is')) {
		containIs.push(strings[i])
	} else {
		containIs
	}
}
console.log(containIs)

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var joined = numbers.concat(strings)
console.log(joined)

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var teachJavaScript = []
for (let i = 0; i < instructors.length; i++) {
	if (instructors[i].teaches == 'JavaScript') {
		teachJavaScript.push(instructors[i])
	} else {
		teachJavaScript
	}
}
console.log(teachJavaScript)