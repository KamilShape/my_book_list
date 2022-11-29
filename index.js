class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn

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
        books.forEach(book => InterfaceSettings.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.querySelector('.bookList')
        const row = document.createElement('div')
        row.classList.add('bookList_row')
        row.innerHTML = `
            <p class="bookList_col">${book.title}</p>
            <p class="bookList_col">${book.author}</p>
            <p class="bookList_col">${book.isbn}</p>`
        list.appendChild(row)
    }
}

const titleInput = document.querySelector('.title_input')
const authorInput = document.querySelector('.author_input')
const isbnInput = document.querySelector('.isbn_input')
const addButton = document.querySelector('.addButton')

addButton.addEventListener('click', () => {
    let book = new Book(titleInput.value, authorInput.value, isbnInput.value)
    InterfaceSettings.addBookToList(book)
})
document.addEventListener('DOMContentLoaded', InterfaceSettings.displayBooks)