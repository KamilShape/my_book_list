const titleInput = document.querySelector('.title_input')
const authorInput = document.querySelector('.author_input')
const isbnInput = document.querySelector('.isbn_input')
const addButton = document.querySelector('.addButton')

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn

    }
}
const addBook = function() {
    console.log(titleInput.value, authorInput.value, isbnInput.value)
}

addButton.addEventListener('click', addBook)