const myLibrary = [];

const submitButton = document.querySelector(".top button");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const numPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const booksContainer = document.querySelector(".books-container");

submitButton.addEventListener("click", addBookToLibrary);

function Book(title, author, numPages, read) {
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

function createBookCard(book) {
  let newBook = document.createElement("div");
  let title = document.createElement("div");
  let titleLabel = document.createElement("p");
  let titleData = document.createElement("p");
  titleLabel.innerText = `Book title:`;
  titleData.innerText = book.title;
  title.appendChild(titleLabel);
  title.appendChild(titleData);
  newBook.appendChild(title);
  let author = document.createElement("div");
  let authorLabel = document.createElement("p");
  let authorData = document.createElement("p");
  authorLabel.innerText = `Book author:`;
  authorData.innerText = book.author;
  author.appendChild(authorLabel);
  author.appendChild(authorData);
  newBook.appendChild(author);
  let pages = document.createElement("div");
  let pagesLabel = document.createElement("p");
  let pagesData = document.createElement("p");
  pagesLabel.innerText = `Number of pages:`;
  pagesData.innerText = book.numPages;
  pages.appendChild(pagesLabel);
  pages.appendChild(pagesData);
  newBook.appendChild(pages);
  let bookRead = document.createElement("div");
  let bookReadLabel = document.createElement("p");
  let bookReadData = document.createElement("p");
  bookReadLabel.innerText = `Have I read the book?`;
  bookReadData.innerText = book.read == false ? "No" : "Yes";
  bookRead.appendChild(bookReadLabel);
  bookRead.appendChild(bookReadData);
  newBook.appendChild(bookRead);
  newBook.classList.add("book-card");
  booksContainer.appendChild(newBook);
}

function addBookToLibrary(e) {
  e.preventDefault();
  if (bookTitle && bookAuthor && numPages) {
    myLibrary.push(
      new Book(
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
  console.log(myLibrary[myLibrary.length - 1]);
  createBookCard(myLibrary[myLibrary.length - 1]);
}
