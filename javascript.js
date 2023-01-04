// array to store all books
let myLibrary = [];

// constructor for book object
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

//Function reads the data from the inputs and uses a constructor to 
//create an object and saves it to the array myLibrary[]
function addBookToLibrary() {
    let index = myLibrary.length;
    let titleData = title.value;
    let authorData = author.value;
    let pagesData = pages.value;
    let readData = false;
    if (read.checked === true) {
        readData = true;
    }
    myLibrary[index] = new Book(titleData, authorData, pagesData, readData);
    myLibrary[index].index = index;
}

function displayNewBook() {
    let i = myLibrary.length - 1;
        //select the body of the table
        const list = document.querySelector('tbody');
        //create a new table row
        const book = document.createElement('tr');
        list.appendChild(book);
        //create all the elements for the table
        const title = document.createElement('td');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('td');
        author.textContent = myLibrary[i].author;
        const pages = document.createElement('td');
        pages.textContent = myLibrary[i].pages;

        //
        const read = document.createElement('td');
        const readBtn = document.createElement('button');
        readBtn.textContent = "Not Read";
        if (myLibrary[i].read === true) readBtn.textContent = "Read";
        read.appendChild(readBtn);

        const deleteCell = document.createElement('td');
        deleteCell.classList.add('delete');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteCell.appendChild(deleteBtn);

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(deleteCell);

    
}

//Event that takes place when submit button is clicked
const submitButton = document.querySelector('.submit > button');
submitButton.addEventListener('click', () => {
    //prevent the button from submitting anything
    event.preventDefault();
    //Select all the dom elements that will be saved
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');

    if (checkInput(title, author, pages)) {
        addBookToLibrary();
        deleteContent(title, author, pages, read);
        displayNewBook();
    }
});


//checks if input boxes are filled
function checkInput(title, author, pages) {

    //select the parent nodes for use
    const parentTitle = document.querySelector('.title')
    const parentAuthor = document.querySelector('.author')
    const parentPages = document.querySelector('.pages')

    //select the input nodes
    const inputTitle = document.querySelector('#title')
    const inputAuthor = document.querySelector('#author')
    const inputPages = document.querySelector('#pages')

    //select warning message below each input
    const warningTitle = document.querySelector('.title > .warning')
    const warningAuthor = document.querySelector('.author > .warning')
    const warningPages = document.querySelector('.pages > .warning')

    //boolean expressions used to validate if form has been filled
    let validTitle = validateNode(parentTitle, warningTitle, inputTitle)
    let validAuthor = validateNode(parentAuthor, warningAuthor, inputAuthor)
    let validPages = validateNode(parentPages, warningPages, inputPages)


    if (validTitle === true && validAuthor === true && validPages === true) {
        return true;
    }
}

function validateNode(parent, warning, input) {
    if (warning && input.value > '') {
        removeWarning(parent)
        return true
    }
    else if (warning && input.value === '') {
        return false
    }
    else if (!warning && input.value > '') {
        return true
    }
    else if (!warning && input.value === '') {
        parent.appendChild(createWarning())
        return false
    }

}

//creates a warning node
function createWarning() {
    const warning = document.createElement('div');
    warning.classList.add('warning');
    warning.textContent = "Fill in the box!"
    warning.style.cssText = "color: red; font-size: 0.75rem;";
    return warning;
}

// removes warning label under input
function removeWarning(parent) {
    parent.removeChild(parent.lastElementChild);
}

//Deletes the content in input boxes
function deleteContent(title, author, pages, read) {
    //set all values to null and checkbox to false
    title.value = null;
    author.value = null;
    pages.value = null;
    read.checked = false;
}