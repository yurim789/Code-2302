const student = {
  firstName: 'Monica',
  //Getter
  get heroName() {
    return this.firstName;
  },
  //Setter
  set changeName(newName) {
    this.firstName = newName;
  }
}

//console.log(student.getName()); //error
console.log(student.heroName);
//student.changeName('Amy'); //error
student.changeName = 'Amy';
console.log(student.heroName);

student.heroName = 'Tom'; // getter로는 값을 변경할 수 없음
console.log(student.heroName); // 'Amy'