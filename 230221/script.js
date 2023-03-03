const ages = [20, 28, 19, 56];
const newAges = [];

// ages.forEach(function (age) { //익명함수
//   newAges.push(age + 5);
// });

// function increaseAgeBy5(age) {
//   newAges.push(age + 5);
// }
// ages.forEach(increaseAgeBy5);

ages.forEach((age) => { //Arrow function
  newAges.push(age + 5);
});

ages.forEach((age) => newAges.push(age + 5));

//console.log(newAges);

// ForEach문의 두번째 파라미터(인덱스)
const courses = ['B', 'M', 'C', 'P'];
courses.forEach(function (course, index) {
  //console.log(index + ': ' + course);
})

// ForEach문의 세번째 파라미터(원본 배열)
courses.forEach(function (course, index, array) {
  //console.log(array);
})

// const students = [{
//     firstName: 'John',
//     lastName: 'Doe',
//     학비: 5000
//   },
//   {
//     firstName: 'Stephen',
//     lastName: 'Matt',
//     학비: 7500
//   },
//   {
//     firstName: 'Abi',
//     lastName: 'Susu',
//     학비: 6000
//   }
// ];

// //객체배열의 forEach문
// students.forEach((student) => {
//   console.log(student.firstName + " " + student.lastName);
// });

// let sum = 0;

// students.forEach((student) => {
//   sum += student.학비;
//   //sum = sum + student.학비;
// })

// console.log(sum);

const students = [{
    name: 'John',
    courses: ['Math', 'English', 'Physics']
  },
  {
    name: 'Sarah',
    courses: ['Chem', 'Math', 'Computer']
  }
];

//ForEach문 안의 다른 ForEach문
students.forEach((student) => {
  console.log(student);
  student.courses.forEach((c) => {
    console.log(c);
  })
})