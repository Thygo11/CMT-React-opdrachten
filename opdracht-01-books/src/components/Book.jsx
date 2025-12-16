import { useState } from "react";

function Book({ title, author, image, category }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>

  
      <div className="favorite-section">
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && (
          <p className="favorited-text">
            Toegevoegd aan favorieten
          </p>
        )}
      </div>

      <button onClick={verhoogTeller}>
        Ik heb dit boek gelezen
      </button>

      <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
    </div>
  );
}

export default Book;
