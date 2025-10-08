import { useState } from "react";
import Book from "../components/Book";

function BookList() {
  const [books] = useState([
    {
      title: "Harry Potter",
      author: "J.K Growling",
      image: "/images/book-1.png",
    },
    {
      title: "Fantasia",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "/images/book-3.png",
    },
  ]);

  return (
    <section>
      <h2>Amazon Best Sellers</h2>
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
