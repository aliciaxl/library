

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  createBookCard(book);
}

function createBookCard(book) {
  const catalog = document.querySelector("#catalog");

  // create card container
  let card = document.createElement("div");
  card.setAttribute("class", "book_card");

  // append book info into card
  card.appendChild(createBookInfo(book.title));
  card.appendChild(createBookInfo(book.author));
  card.appendChild(createBookInfo(book.pages));

  // append book read toggle into card
  card.appendChild(createBookReadToggle(book.read));

  // append remove button to card
  const removeButton = createBookRemoveButton();
  removeButton.addEventListener("click", function(){
    card.remove();
  });
  card.appendChild(removeButton);

  // append card to catalog
  catalog.appendChild(card);
}

function createBookInfo(value) {
    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("class", "book_info");
    bookInfo.innerHTML = value;
    return bookInfo;
}

function createBookReadToggle(value) {
    const cardRead = document.createElement("div");
    cardRead.setAttribute("class", "book_info");
    cardRead.setAttribute("id", "read_toggle");

    cardRead.innerHTML = value ? "Read" : "Unread";
    return cardRead;
}

function createBookRemoveButton() {
    const cardRemove = document.createElement("button");
    cardRemove.setAttribute("class", "remove_button");
    cardRemove.innerHTML = "Remove";

    return cardRemove;
}

const addBook = document.querySelector(".add_button");
const dialog = document.querySelector(".dialog");
const cancelBtn = document.querySelector(".cancel_button");
const submitBtn = document.querySelector(".submit_button");

// show dialog box with form to add book
addBook.onclick = function () {
  dialog.showModal();
};

// close dialog box with form
cancelBtn.onclick = function () {
  dialog.close();
};


// function to validate form inputs

// function validateForm(title, author, pages){
//     if (title.trim() == '' || author.trim() == '' || isNaN(pages) || parseInt(pages) <= 0){
//         return false;
//     } else {
//         return true;
//     }
// }


// when submit is clicked, validate form, return error messages if invalid, make new card on page if valid.
submitBtn.submit = function (event) {

  event.preventDefault();

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = parseInt(document.querySelector("#pages").value);
  let read = document.querySelector("#read").checked;

 

  addBookToLibrary(title, author, pages, read);

  let titleInput = document.querySelector("#title");
  let authorInput = document.querySelector("#author");
  let pagesInput = document.querySelector("#pages");
  let readInput = document.querySelector("#read");

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  dialog.close();
};
