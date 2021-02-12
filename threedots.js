
const ages = [20, 22, 24, 27, 18];
const ages2 = [16, 19, 23];
const ages3 =[25, 29, 21, 26];

const allAges = ages.concat(ages2).concat([14]).concat(ages3);
console.log(allAges);

const allAges2 = [...ages, ...ages2, 14, ...ages3];
console.log(allAges2);

const takaPoisha = [650, 400, 800];
const maximum = Math.max(...takaPoisha);
console.log(maximum);

