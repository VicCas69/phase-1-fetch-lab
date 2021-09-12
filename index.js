function fetchBooks() {
  const f = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(book => renderBooks(book));  
  return f;
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
