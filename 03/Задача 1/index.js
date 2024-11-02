let cardIn = false;
let sum = 500;
let query = Number(prompt("Введите свою сумму банковских операций",_default="0"))
if (cardIn && query <= sum) {
    console.log("Операция выполняется")
}
else {
    console.log("Операция отменена")
}