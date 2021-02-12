const person = {Pname: "Dean", age: 28, brother: "Sam", phone: "0177262626", job: "Hunting"};

const {Pname, phone, brother} = person;

console.log(Pname, phone, brother);

const friends = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

const [first, second, third, ...restOfThem] = friends;
console.log(first, second, third, restOfThem);
console.log(restOfThem);

