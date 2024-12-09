
const title = document.createElement('h1')
title.textContent = 'Корзина покупателя'
document.body.append(title)

const addButton = document.createElement('button')
addButton.textContent = 'Добавить товар'
document.body.append(addButton)
addButton.classList.add('btn', 'green')

const list = ['Яблоко','Арбуз','Книга','Кофе','Макароны','Молоко']
const listEl = document.createElement('ul')
document.body.append(listEl)
listEl.classList.add('list')

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j].toLowerCase() > arr[j+1].toLowerCase()) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }
    return arr
}

function renderList(arr) {
    listEl.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const el = document.createElement('li')
        el.textContent = `${i+1}) ${arr[i]}`
        listEl.append(el)
        el.classList.add(`element`)
    }
}

addButton.onclick = function(){
    const newListEl = prompt('ку')
    list.push(newListEl)
    console.log(list);
    
    renderList(sort(list))
    console.log(list);
}

renderList(sort(list))


