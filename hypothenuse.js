// function takes in two parameters. 
// The first parameter represents the length of the base of a right triangle 
// and the second is perpendicular. 
// The function should then compute the length of the hypotenuse based on these values

function calcHypothenuse(base, perpendicular){
    let hypotenuse = Math.sqrt(base ** 2 + perpendicular ** 2);
    return hypotenuse;
};
let calculate = calcHypothenuse(8, 6);
console.log(calculate);