function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json())
  .then((booksData) => renderBooks(booksData))
  .then(json => console.log(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  //console.log("Main: ", main)
  books.forEach(book => {
  //console.log("Books: ", books)
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  // console.log('FetchBooks Result: ', fetchBooks)
  // console.log("EventListener Ran")
});

// let fifthBook = function readBooks(books) {
//   for (const element of books) {
//     console.log(books)
//     console.log(element)
//     return element
//   }
// }