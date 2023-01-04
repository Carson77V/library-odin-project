// array to store all books
let myLibrary = [];

// constructor for book object
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    //index to find Book in array added later
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
    // Creates a new Book in the library at the end of the array
    myLibrary[index] = new Book(titleData, authorData, pagesData, readData);
    //saves the index where the Book is stored in the book object
    myLibrary[index].index = index;
}

//displays a single new Book when submitted
function displayNewBook() {
    // i is the index of the array (newest book)
    let i = myLibrary.length - 1;
    //select the table body
    const list = document.querySelector('tbody');
    //create a new table row
    const book = document.createElement('tr');
    // add the book row to the DOM
    list.appendChild(book);
    //create data cells for title, author and pages
    //Use the data stored in the array and add it to the node
    const title = document.createElement('td');
    title.textContent = myLibrary[i].title;
    const author = document.createElement('td');
    author.textContent = myLibrary[i].author;
    const pages = document.createElement('td');
    pages.textContent = myLibrary[i].pages;

    //data cell for read. read has a button inside
    const read = document.createElement('td');
    const readBtn = document.createElement('button');
    // default read to Not Read, but if read is checked switch it to read
    readBtn.textContent = "Not Read";
    if (myLibrary[i].read === true) readBtn.textContent = "Read";
    //append the button to read
    read.appendChild(readBtn);

    // data cell for delete. delete cell has a button inside
    const deleteCell = document.createElement('td');
    deleteCell.classList.add('delete');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    //append the button to deleteCell
    deleteCell.appendChild(deleteBtn);

    //append all the nodes to the table row
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

    // If all the inputs are filled add the book to library
    if (checkInput(title, author, pages)) {
        addBookToLibrary();
        deleteContent(title, author, pages, read);
        displayNewBook();
    }
});


//checks if input boxes are filled
function checkInput(title, author, pages) {

    //select the parent nodes
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

    //If all inputs are filled out return true
    if (validTitle === true && validAuthor === true && validPages === true) {
        return true;
    }
}

// returns a boolean expression to validate if input is filled
function validateNode(parent, warning, input) {
    // remove the warning node because input is fille
    if (warning && input.value > '') {
        removeWarning(parent)
        return true
    }
    //return false if warning exists and input is empty
    else if (warning && input.value === '') {
        return false
    }
    // return true if input is empty and warning node does not exist
    else if (!warning && input.value > '') {
        return true
    }
    //add warning node because it does not exist and input is empty
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