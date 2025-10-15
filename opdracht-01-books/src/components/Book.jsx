import { useState } from "react";

function Book({ title, author, image }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p>{author}</p>

      
      <button onClick={verhoogTeller}>Ik heb dit boek gelezen</button>
      <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
    </div>
  );
}

export default Book;
