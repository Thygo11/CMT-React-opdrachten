import { useParams, Link } from "react-router-dom";
import animals from "../data/animals";

const DetailPage = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <p>Dier niet gevonden</p>;
  }

  return (
    <section className="detail-page">
      <img src={animal.imageUrl} alt={animal.name} />
      <h1>{animal.name}</h1>
      <p><strong>Leefomgeving:</strong> {animal.habitat}</p>
      <p><strong>Dieet:</strong> {animal.diet}</p>
      <p><strong>Beschrijving:</strong> {animal.description}</p>
      <Link to="/" className="back-button">Terug</Link>
    </section>
  );
};

export default DetailPage;
