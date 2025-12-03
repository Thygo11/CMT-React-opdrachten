import { useState } from "react";
import Card from "../components/Card";
import animalsData from "../data/animals"; 

function AnimalList() {
  const [animals, setAnimals] = useState(animalsData);
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = animalsData.filter((animal) =>
      animal.name.toLowerCase().includes(value.toLowerCase())
    );

    setAnimals(filtered);
  };

  return (
    <section>
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een dier"
          onChange={searchHandler}
          value={searchInput}
        />
      </div>

      <h2>Dierenlijst</h2>

      <div className="animals">
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}

export default AnimalList;
