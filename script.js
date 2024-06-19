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

  const readToggle = document.querySelector('#read_toggle');

  // append remove button to card directly
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

    //text based on initial form input
    cardRead.innerHTML = value ? "Read" : "Unread";

    //background color values of toggle based on initial form input
    if (value) {
        cardRead.style.backgroundColor = '#affdc0';
    } else {
        cardRead.style.backgroundColor = '#fdc4af';
    }

    //switch toggle when cardRead div is clicked
    cardRead.addEventListener ("click" , () => {
        if (cardRead.innerHTML === "Read") {
            cardRead.innerHTML = "Unread";
            cardRead.style.backgroundColor = '#fdc4af';
        } else {
            cardRead.innerHTML = "Read";
            cardRead.style.backgroundColor = '#affdc0';
        }
    });

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
const blurbg = document.querySelector("#unblurred");

// show dialog box with form to add book
addBook.onclick = function () {
  dialog.showModal();
  blurbg.style.display = 'block';    
};

// close dialog box with form
cancelBtn.onclick = function () {
  dialog.close();
  blurbg.style.display = 'none';
};

// Select form, listen for when form is submitted
const addForm = document.querySelector("#add_form");

addForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form using HTML5 built-in validation
    if (!addForm.checkValidity()) {
      // If form is not valid, browser will show native error messages
      return;
    }

    // Fetch form input values
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = parseInt(document.querySelector("#pages").value) + ' pages';
    let read = document.querySelector("#read").checked;

    // Add book to library and create card
    addBookToLibrary(title, author, pages, read);

    // Clear form inputs
    addForm.reset(); // Reset form fields
    dialog.close(); // Close dialog
    blurbg.style.display = 'none';
  });

//Because we need to do form validation on form element wrapped inside dialog element, we select the form and validate when submit button is pressed before allowing other events to happen. We do not use onclick or onsubmit on the submit button directly unless we write our own validation function and use it inside here. Built-in HTML5 validation can only happen on form element directly.

// const dialog = document.querySelector(".dialog");
// dialog.showModal();
