let powCar = Number(prompt("Введите мощность автомобиля"));
let carTax;

if (powCar<100) {
    carTax = powCar * 12;
}
else if (powCar<125) {
    carTax = powCar * 25;
}
else if (powCar<150) {
    carTax = powCar * 35;
}
else if (powCar<175) {
    carTax = powCar * 45;
}
else if (powCar<200) {
    carTax = powCar * 50;
}
else if (powCar<225) {
    carTax = powCar * 65;
}
else if (powCar<250) {
    carTax = powCar * 75;
}
else{
    carTax = powCar * 150;
}
console.log("Сумма налога:", carTax);

