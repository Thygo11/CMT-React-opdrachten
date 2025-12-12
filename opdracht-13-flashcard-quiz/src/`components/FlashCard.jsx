import { useState } from "react";

function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  const flippedHandler = () => {
    setFlipped(!flipped);
  };

  return (
    <section
      onClick={flippedHandler}
      className="w-64 h-40 bg-white shadow-lg border rounded-xl p-5 flex items-center justify-center text-center cursor-pointer hover:scale-105 transition"
    >
      {flipped ? <h2>{answer}</h2> : <h2>{question}</h2>}
    </section>
  );
}

export default FlashCard;
