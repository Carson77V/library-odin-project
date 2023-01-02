// array to store all books
let myLibrary = [];

// constructor for book object
function Book() {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary() {
    myLibrary.push(Book);
    let index = myLibrary.length - 1;
    myLibrary[index].index = index;
}

function displayBooks() {
    for (let books in myLibrary) {
        const book = document.querySelector('tbody');

    }
}

const submitButton = document.querySelector('.submit > button');
submitButton.addEventListener('click', () => {
    //prevent the button from submitting anything
    event.preventDefault();
});
