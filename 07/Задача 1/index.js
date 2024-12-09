function find(book, arr) {
    const result = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === book) {
            return i
        }
    }
    return result
}
/// Оформление
const h1El = document.createElement('h1')
h1El.textContent = "Домашняя библиотека"

document.body.append(h1El)

const firstBtnEl = document.createElement('button')
firstBtnEl.textContent = "Добавить книгу"
firstBtnEl.classList.add("btn", "green" )

document.body.append(firstBtnEl)

const secondBtnEl = document.createElement('button')
secondBtnEl.textContent = "Найти"
secondBtnEl.classList.add("btn", "blue")

document.body.append(secondBtnEl)

function renderBooks(arr) {
    const arrEl = document.createElement('ul')
    arrEl.classList.add('list')

    for (let i = 0; i < arr.length; i++) {
        let book = document.createElement('li')
        book.textContent = `${i+1}) ${arr[i]}`
        book.classList.add('bookName')
        arrEl.append(book)
    }

    document.body.append(arrEl)
}

const booksArr = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна'] ///Список книг
renderBooks(booksArr)

/// Кнопки
secondBtnEl.onclick = function() {
    const search = prompt('Напишите название книги')
    const indexFind = find(search, booksArr)
    const clearEl = document.querySelector(`.findEl`)
    if (clearEl) {
        clearEl.classList.remove('findEl')
    }
    if (indexFind > -1) {
        const findEl = document.querySelector(`li:nth-child(${indexFind+1})`)
        findEl.classList.add('findEl')
    }
    else {
        alert('Книга не найдена!');  
    }
}

firstBtnEl.onclick = function() {
    const newBook = prompt('Напишите название книги')
    if (!newBook) {
        return alert('Название книги не введено!')
    }
    booksArr.push(newBook)
    const newBookEl = document.createElement('li')
    newBookEl.textContent = `${booksArr.length}) ${newBook}`
    newBookEl.classList.add('bookName')
    const BookEl = document.querySelector('ul')
    BookEl.append(newBookEl)
}

