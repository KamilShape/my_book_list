const titleInput = document.querySelector('.title_input')
const authorInput = document.querySelector('.author_input')
const isbnInput = document.querySelector('.isbn_input')
const addButton = document.querySelector('.addButton')


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class InterfaceSettings {
    static displayBooks() {
        const StoredBooks = [{
                title: 'One',
                author: 'John Kovalsky',
                isbn: 525525
            },
            {
                title: 'Two',
                author: 'Mark Smith',
                isbn: 525530
            }
        ]
        const books = StoredBooks
        books.forEach(book => {
            InterfaceSettings.addBookToList(book)
        })

    }
    static addBookToList(book) {
        const list = document.querySelector('.bookList')
        const row = document.createElement('div')
        row.classList.add('bookList_row')
        row.innerHTML = `
                <p class="bookList_col">${book.title}</p>
                <p class="bookList_col">${book.author}</p>
                <p class="bookList_col">${book.isbn} <button class="delete_button">X</button></p>`
        list.appendChild(row)
        titleInput.value = '',
            authorInput.value = '',
            isbnInput.value = ''
    }
    static removeBook(arg) {
        arg.parentElement.parentElement.remove()
    }

}

addButton.addEventListener('click', () => {
    let book = new Book(titleInput.value, authorInput.value, isbnInput.value)
    if (titleInput.value != '' && authorInput.value != '' && isbnInput.value != '') {
        InterfaceSettings.addBookToList(book)
    } else {
        alert('Please fill all inputs!')
    }
})

document.querySelector('.bookList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete_button')) {
        InterfaceSettings.removeBook(e.target)
    }
})
document.addEventListener('DOMContentLoaded', InterfaceSettings.displayBooks)