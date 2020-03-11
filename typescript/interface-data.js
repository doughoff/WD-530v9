"use strict";
function putOrderIn(anOrder) {
    console.log(anOrder);
}
putOrderIn({ entree: "hamburger", total: '4.95' });
putOrderIn({ entree: "cheeseburger", drink: "Pepsi", total: 6.95 });
putOrderIn({
    entree: "cheeseburger",
    sideOrder: "fries",
    drink: "Pepsi",
    total: 8.95
});
