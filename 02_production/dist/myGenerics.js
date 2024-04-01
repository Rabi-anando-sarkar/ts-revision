"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive({ brand, type }) {
}
function getSearchProducts(products) {
    return products[3];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 5;
    return products[myIndex];
};
