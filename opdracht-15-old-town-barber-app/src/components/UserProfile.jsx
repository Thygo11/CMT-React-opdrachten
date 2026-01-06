import { useState } from "react";

export default function BezoekFormulier() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ naam, email, telefoon });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Naam
        <input
          type="text"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          required
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Telefoon
        <input
          type="tel"
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          required
        />
      </label>

      <button type="submit">Verzenden</button>
    </form>
  );
}
