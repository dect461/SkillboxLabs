let index = 0
let person1 = prompt("Введите своё имя")
let age1 = 2024 - prompt("Введите свой год рождения")

let person2 = prompt("Введите своё имя")
let age2 = 2024 - prompt("Введите свой год рождения")

let person3 = prompt("Введите своё имя")
let age3 = 2024 - prompt("Введите свой год рождения") 

midleAge = (age1+age2+age3)/3

console.log(++index, person1, age1)
console.log(++index, person2, age2)
console.log(++index, person3, age3)
console.log("Средний возраст пользователей:", midleAge)