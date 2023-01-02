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
    //Select all the dom elements that will be saved
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    checkInput(title, author, pages);
    deleteContent(title, author, pages, read);
});

//checks if input boxes are filled
function checkInput(title, author, pages) {
    if (title.textContent <= 0) {
        console.log('test');
        const warning = document.createElement('div');
        warning.classList.add('warning');
        warning.textContent = "Fill out the box above!"

        title.appendChild(warning);
    }
}

//Deletes the content in input boxes
function deleteContent(title, author, pages, read) {
    title.value = null;
    author.value = null;
    pages.value = null;
    read.checked = false;
}