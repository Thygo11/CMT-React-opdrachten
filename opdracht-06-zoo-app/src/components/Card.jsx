import { useNavigate } from "react-router-dom";

const Card = ({ animal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${animal.id}`);
  };

  return (
    <section className="card" onClick={handleClick}>
      <img src={animal.imageUrl} alt={animal.name} />
      <h2>{animal.name}</h2>
    </section>
    
  );
};

export default Card;
