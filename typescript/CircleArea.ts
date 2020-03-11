let a1 = function (radius:number) { return Math.PI * radius ** 2; };
let a2 = (radius:number) => { return Math.PI * radius ** 2; }
let a3 = (radius:number) =>   Math.PI * radius ** 2 ;

console.log(a1(5.0));
console.log(a2(5.0));
