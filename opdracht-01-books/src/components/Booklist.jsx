import { useState } from "react";
import Book from "../components/Book";
import BookCounter from "../components/bookCounter";
import booksData from "../data.js";

function BookList() {
  const [books, setBooks] = useState(booksData);
  const [searchInput, setSearchInput] = useState('');
  const [category, setCatergory] = useState('Alle');

  const categories = [
    'Alle',
    'Fantasy',
    'Avontuur',
    'Sciencefiction'
  ];

  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  
  const filterHandler = (e) => {
    let category = e.target.value;
    setCatergory(category);

    if (category === 'Alle') {
      setBooks(booksData);
    } else {
      const filteredBooks = booksData.filter(
        (book) => book.category === category
      );
      setBooks(filteredBooks);
    }
  };

  return (
    <section>
      <div className="search">
        <input 
          type="text"
          placeholder="zoek hier uw boek"
          name="search"
          onChange={searchHandler}
          value={searchInput}
        />
      </div>

      <select onChange={filterHandler} value={category}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <h2>Amazon Best Sellers</h2>
      <BookCounter aantal={books.length} />

      <div className="book-list">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
          />
        ))}
      </div>
    </section>
  );
}

export default BookList;
