const library = [];

function Book(title, author, yearPublished, readStatus) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.readStatus = readStatus;
    this.getSummary = function() {
        return `${this.title} by ${this.author} (${this.yearPublished}) - ${this.readStatus ? 'Read' : 'Unread'}`;
    };
    this.toggleReadStatus = function() {
        this.readStatus = !this.readStatus;
    };
}

document.getElementById("addBook").addEventListener("click", () => {
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author:");
    const yearPublished = prompt("Enter the year published:");
    const readStatus = confirm("Have you read this book?");
   
    const book = new Book(title, author, yearPublished, readStatus);
    library.push(book);
    updateBookList();
});

document.getElementById("removeLastBook").addEventListener("click", () => {
    if (library.length > 0) {
        library.pop();
        updateBookList();
    }
});

document.getElementById("addBookToFront").addEventListener("click", () => {
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author:");
    const yearPublished = prompt("Enter the year published:");
    const readStatus = confirm("Have you read this book?");
   
    const book = new Book(title, author, yearPublished, readStatus);
    library.unshift(book);
    updateBookList();
});

document.getElementById("removeFirstBook").addEventListener("click", () => {
    if (library.length > 0) {
        library.shift();
        updateBookList();
    }
});

function updateBookList() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    library.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${book.getSummary()}</span><button onclick="toggleReadStatus(${index})">Toggle Read Status</button>`;
        bookList.appendChild(li);
    });
}
function toggleReadStatus(index) {
    library[index].toggleReadStatus();
    updateBookList();
}
