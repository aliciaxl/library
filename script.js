

const myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};


function addBookToLibrary() {
  title = document.querySelector('#title').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  read = document.querySelector('#read').value;

  let book = new Book(title, author, pages, read);

  console.log(book);
};


const addBook = document.querySelector('.add_button');
const dialog = document.querySelector('.dialog');
const cancelBtn = document.querySelector('.cancel_button');
const submitBtn = document.querySelector('.submit_button');
const input = document.querySelector('.dialog_input');

addBook.onclick = function() {
  dialog.style.display = 'block';
}

cancelBtn.onclick = function() {
  dialog.style.display = 'none';
}

submitBtn.onclick = function() {
  addBookToLibrary();
  dialog.style.display = 'none';
  }

// submitBtn.onclick = function() {
  //validate all fields are filled out
  
// }
