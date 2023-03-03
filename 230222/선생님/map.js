const arr = new Array();
//console.log(typeof arr);
arr.push(1);
arr.push(2);
//console.log(arr);

const obj = new Object();
//console.log(typeof obj);
obj.name = 'Smith';
obj.age = 20;
console.log(obj);

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(typeof map1);
console.log(map1);

console.log(map1.get('a'));
map1.set('a', 100);
console.log(map1.get('a'));
console.log(map1.size);
map1.delete('b');
console.log(map1);

// 2차원배열
const arr2 = [
  ['name', 'Smith'],
  ['age', 20],
  ['height', 180]
];
const map2 = new Map(arr2);
console.log(map2);

const arr3 = [
  ['name', 'Smith'],
  ['address', 'aaaaaaa'],
  ['zipCode', 12345]
]
// Map의 유일성
const merged = new Map([...arr2, ...arr3]);
console.log(merged);