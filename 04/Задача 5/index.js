priceItem = Number(prompt("Цена товара"));
amountItem = Number(prompt("Количество товара"));
discountItem = Number(prompt("Скидка на товар"))
function  totalSum(priceItem, amountItem, discountItem) {
    return (priceItem - (priceItem * discountItem/100)) * amountItem;
}
console.log(totalSum(priceItem, amountItem, discountItem));