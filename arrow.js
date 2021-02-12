function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result);


const doubleIt2 = num => num *2;
const result2 = doubleIt2(10);
console.log(result2);

const add = (x,y) => x + y;
const total = add(40,60);
console.log(total);

const bishal = (x,y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}
const total2 = bishal(6,2);
console.log(total2);


const give5 = () => 5;
const a = give5();
console.log(a);