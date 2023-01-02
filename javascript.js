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

    checkInput(title, author, pages);
    addBookToLibrary();
    deleteContent(title, author, pages, read);
    displayNewBook();
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