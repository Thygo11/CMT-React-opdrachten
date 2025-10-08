function Book({ title, author, image }) {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default Book;
