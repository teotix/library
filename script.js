const myLibrary = [];

const submitButton = document.querySelector(".top button");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const numPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const booksContainer = document.querySelector(".books-container");
const removeButtons = document.querySelectorAll(".rmv-btn");

booksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("rmv-btn")) {
    myLibrary.splice(e.target.dataset.id, 1);
    e.target.parentElement.parentElement.remove();
  }
});

submitButton.addEventListener("click", addBookToLibrary);

function Book(id, title, author, numPages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${numPages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createBookCard(array) {
  removeAllChildNodes(booksContainer);
  array.map((elem, index) => {
    let newBook = document.createElement("div");
    let title = document.createElement("div");
    let titleLabel = document.createElement("p");
    let titleData = document.createElement("p");
    titleLabel.innerText = `Book title:`;
    titleData.innerText = elem.title;
    title.appendChild(titleLabel);
    title.appendChild(titleData);
    newBook.appendChild(title);
    let author = document.createElement("div");
    let authorLabel = document.createElement("p");
    let authorData = document.createElement("p");
    authorLabel.innerText = `Book author:`;
    authorData.innerText = elem.author;
    author.appendChild(authorLabel);
    author.appendChild(authorData);
    newBook.appendChild(author);
    let pages = document.createElement("div");
    let pagesLabel = document.createElement("p");
    let pagesData = document.createElement("p");
    pagesLabel.innerText = `Number of pages:`;
    pagesData.innerText = elem.numPages;
    pages.appendChild(pagesLabel);
    pages.appendChild(pagesData);
    newBook.appendChild(pages);
    let bookRead = document.createElement("div");
    let bookReadLabel = document.createElement("p");
    let bookReadData = document.createElement("p");
    bookReadLabel.innerText = `Have I read the book?`;
    bookReadData.innerText = elem.read == false ? "No" : "Yes";
    bookRead.appendChild(bookReadLabel);
    bookRead.appendChild(bookReadData);
    let readRemoveDiv = document.createElement("div");
    readRemoveDiv.setAttribute("id", "buttons");
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove book";
    removeButton.classList.add("rmv-btn");
    let readDiv = document.createElement("div");
    let readLabel = document.createElement("label");
    let readToggle = document.createElement("input");
    readToggle.classList.add("toggle");
    elem.read === true ? (readToggle.checked = true) : "";
    readLabel.innerText = "Reading status: ";
    readToggle.setAttribute("type", "checkbox");
    readToggle.addEventListener("change", function () {
      elem.read = this.checked;
      createBookCard(myLibrary);
    });
    newBook.appendChild(bookRead);
    readRemoveDiv.appendChild(removeButton);
    readDiv.appendChild(readLabel);
    readDiv.appendChild(readToggle);
    newBook.appendChild(readRemoveDiv);
    readRemoveDiv.appendChild(readDiv);
    newBook.dataset.id = index;
    newBook.classList.add("book-card");
    booksContainer.appendChild(newBook);
  });
}

function addBookToLibrary(e) {
  e.preventDefault();
  if (bookTitle && bookAuthor && numPages) {
    myLibrary.push(
      new Book(
        myLibrary.length,
        bookTitle.value,
        bookAuthor.value,
        numPages.value,
        bookRead.checked
      )
    );
  } else alert("Fill in the required fields!");
  bookTitle.value = "";
  bookAuthor.value = "";
  numPages.value = "";
  bookRead.checked = false;
  createBookCard(myLibrary);
  myLibrary.forEach((elem, index) => (elem.id = index));
}
