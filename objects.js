//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Benjamen R. King';
me.age = 37;
me['hair color'] = 'dark brown';
console.log(me);  // -> { name: 'Benjamen R. King', age: 37, 'hair color': 'dark brown' }


//2. Iterate over the object to console.log the propery or key names. 

function logKeys(obj) {
	var keys = Object.keys(obj);
	keys.forEach( key => {
		console.log(key);
	});
}
logKeys(me);  // -> 'name', 'age', 'hair color'

var mappedMe = new Map([
	['name', 'Benjamen R. King'],
	['age', 37],
	['hair color', 'dark brown']
]);
function logFromMap(map) {
	for (var key of map.keys()) {
		console.log(key);
	}
}
logFromMap(mappedMe);  // -> 'name', 'age', 'hair color'
