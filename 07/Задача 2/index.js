// function find(book, arr) {
//     const result = -1

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === book) {
//             return i
//         }
//     }
//     return result
// }
// /// Оформление
// const h1El = document.createElement('h1')
// h1El.textContent = "Рост учеников"

// document.body.append(h1El)

// const firstBtnEl = document.createElement('button')
// firstBtnEl.textContent = "Добавить рост"
// firstBtnEl.classList.add("btn", "green" )

// document.body.append(firstBtnEl)

// const secondBtnEl = document.createElement('button')
// secondBtnEl.textContent = "Фильтровать"
// secondBtnEl.classList.add("btn", "orange")

// document.body.append(secondBtnEl)

// function renderArray(arr) {
//     const arrEl = document.createElement('ul')
//     arrEl.classList.add('list')

//     for (let i = 0; i < arr.length; i++) {
//         let element = document.createElement('li')
//         element.textContent = `${i+1}) ${arr[i]}`
//         element.classList.add('element')
//         arrEl.append(element)
//     }

//     document.body.append(arrEl)
// }

// const heightArr = ['130', '150', '180', '135', '136', '166', '171'] ///Список книг
// const copylHeightArr = []
// renderArray(heightArr)

// /// Кнопки
// let hasNewArr = false;

// secondBtnEl.onclick = function() {
//     const minHeight = prompt('Напишите минимальный рост')
//     let clearArr = document.querySelector('ul');
//     clearArr.remove(clearArr)

//     if (minHeight === null) {
//         return renderArray(heightArr)
//         hasNewArr = false
//     }

//     hasNewArr = true
//     let count = 0

//     for (let i = 0; i < heightArr.length; i++) {
//         if (heightArr[i] >= minHeight) {
//             copylHeightArr[count] = heightArr[i];
//             count++
//         }
//     }

//     renderArray(copylHeightArr)
// }

// firstBtnEl.onclick = function() {
//     const height = prompt('Добавить рост')

//     if (!height) {
//         return alert('Рост не введён!')
//     }

//     const newheightEl = document.createElement('li')
//     heightArr.push(height)

//     if (hasNewArr) {
//         copylHeightArr.push(height)
//         newheightEl.textContent = `${copylHeightArr.length}) ${height}`
//     }
//     else {
//         newheightEl.textContent = `${heightArr.length}) ${height}`
//     }
    
//     newheightEl.classList.add('element')
//     const heightListEl = document.querySelector('ul')
//     heightListEl.append(newheightEl)
// }

const title = document.createElement('h1')
title.textContent = 'Рост учеников'
document.body.append(title)

const addButton = document.createElement('button')
addButton.textContent = 'Добавить рост'
document.body.append(addButton)
addButton.classList.add('btn', 'green')

const filtButton = document.createElement('button')
filtButton.textContent = 'Фильровать'
document.body.append(filtButton)
filtButton.classList.add('btn', 'orange')

const list1 = ['123','110','128','143','154','165']
const listEl = document.createElement('ul')
document.body.append(listEl)
listEl.classList.add('list')

function renderList(arr) {
    listEl.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const element = document.createElement('li')
        element.textContent = `${i+1}) ${arr[i]}`
        listEl.append(element)
        element.classList.add('element')
    }
}

renderList(list1)

function filter(arr, filt) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filt) {
            newArr.push(arr[i])
        }
    }
    renderList(newArr)
}

filtButton.onclick = function() {
    const filt = Number(prompt('Введите минимальный рост для фильтрации'))
    if (!filt) {
        renderList(list1)
        return alert('Рост не введен')
        
    }
    filter(list1, filt)
}

function add(arr) {
    const height = Number(prompt('Введите новый рост'))
    if (!height) {
        return alert('Рост не введен')
    }
    arr.push(height)
    const newElement = document.createElement('li')
    newElement.textContent = `${arr.length}) ${height}`
    renderList(arr)
}

addButton.onclick = function() {
    add(list1)
}
