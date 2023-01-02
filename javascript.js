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
    if (title.value === '') {
        //select the parent node and add warning message if input is emtpy
        const parent = document.querySelector('.title')
        //select warning div
        const warningTitle = document.querySelector('.title > .warning')
        //if warning div does not exist creat and add one
        if (!warningTitle) {
            parent.appendChild(warning());
        }
    }
    if (author.value === ''){
        const parent2 = document.querySelector('.author')
        const warningAuthor = document.querySelector('.author > .warning')
        if (!warningAuthor) {
            parent2.appendChild(warning())
        }
    }
    if (pages.value <= 0) {
        const parent3 = document.querySelector('.pages') 
        const warningPages = document.querySelector('.pages > .warning')
        if (!warningPages){
            parent3.appendChild(warning())
        }
    }
}

//creates a node when user hasn't entered anything
function warning() {
    const warning = document.createElement('div');
    warning.classList.add('warning');
    warning.textContent = "Fill in the box!"
    warning.style.cssText = "color: red; font-size: 0.75rem;";
    return warning;
}

//Deletes the content in input boxes
function deleteContent(title, author, pages, read) {
    //set all values to null and checkbox to false
    title.value = null;
    author.value = null;
    pages.value = null;
    read.checked = false;
}