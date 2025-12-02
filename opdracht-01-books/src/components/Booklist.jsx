import { useState } from "react";
import Book from "../components/Book";
import BookCounter from "../components/bookCounter";
import booksData from "../data.js";

function BookList() {
  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState('')
  
  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    )
    setBooks(filteredBooks)

  }
  return (
    <section>
      <div className="search">
        <input type="text" placeholder="zoek hier uw boek" name="search" onChange={searchHandler} value={searchInput} />
      </div>
      <h2>Amazon Best Sellers</h2>
      <BookCounter aantal={books.length} />
      <div className="book-list">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </section>
  );
}

export default BookList;
