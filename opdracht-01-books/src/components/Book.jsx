import { useState } from "react";

function Book({ title, author, image, category, description, year, pages }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function toggleLike(e) {
    e.stopPropagation(); 
    setLiked(!liked);
  }

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">

        <div className="book-front">
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

          <button onClick={(e) => { e.stopPropagation(); verhoogTeller(); }}>
            Ik heb dit boek gelezen
          </button>

          <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
        </div>

    
        <div className="book-back">
          <h3>Over dit boek</h3>
          <p>{description}</p>
          <p><strong>Jaar:</strong> {year}</p>
          <p><strong>Pagina’s:</strong> {pages}</p>
        </div>

      </div>
    </article>
  );
}

export default Book;
