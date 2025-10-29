import animals from "../data/animals";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <>
      <h1>Zoo App</h1>
      <main>
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </main>
    </>
  );
};

export default HomePage;
