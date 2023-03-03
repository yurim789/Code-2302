// object 객체
const student = {
  firstName: 'ram', //키 : 밸류
  class: 10
};

//console.log(typeof student);
//console.log(student.firstName);
//console.log(student['firstName']);

// nested object 객체속에 있는 객체
const 학생 = {
  name: 'John',
  age: 20,
  marks: {
    science: 70,
    math: 75
  }
}

//console.log(학생.marks.math);

// 객체속의 함수
const person = {
  name: 'Sam',
  age: 30,
  greet: function () {
    //console.log('hello')
  }
}
// 객체안에 있는 함수 호출
person.greet();
person.height = 187;
//console.log(person.height);

//빈 객체에 멤버를 따로 구성해도 됨.
let people = {};
people.name = 'John';
people.greet = function () {
  //console.log('hello');
}
people.greet();

//Constructor  생성자
//LOL의 영웅들 만들기 = 객체
//Life, Attack, Shield, Speed, 특수능력

// Constructor function 생성자 함수
function Hero() {
  this.name = 'Hero',
    this.age = 23,
    this.speed = 10,
    this.life = 50
}
//사용법
const azir = new Hero();
azir.name = 'Azir';
console.log(azir.name + ' ' + azir.life);

function 영웅(name, age, speed, life) {
  this.name = name,
    this.age = age,
    this.speed = speed,
    this.life = life
}
const 이즈리얼 = new 영웅('이즈리얼', 20, 12, 30);
const 바루스 = new 영웅('바루스', 40, 8, 35);

바루스.특수능력 = "꿰뚫는화살";
console.log(이즈리얼);
console.log(바루스);

//new 는 키워드. new로 생성하면 새로운 메모리영역을 가진다
// let obj = {
//   name: 'Sam'
// }
// let a = obj; //new로 만들지 않음에 주의
// a.name = 'Tom';
//let obj = new Object();
let obj = {};
console.log(obj);

function Person() {
  this.name = 'John',
    this.age = 23
}
let person1 = new Person();
let person2 = new Person();

Person.prototype.gender = 'Male';
//Person.gender = 'Male';

console.log(person1);
console.log(person2);