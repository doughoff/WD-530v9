let entrees:string[] = ['hamburger'];
let sideOrders:string[] = ['fries','onion rings'];
let order:string[] = 
   [...entrees, ...sideOrders, 'Pepsi'];

let order1 = {
  entree: `hamburger`,
  drink: `Pepsi`,
  sideOrder: `fries`
};
let update = { sideOrder: `onion rings` };
let order2 = { ...order1, ...update };
console.log(order2);

// similar to the older version:
let order3 = Object.assign({}, order1, update);
console.log(order3);
