import FlashCard from "./FlashCard";

function FlashCardList({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <FlashCard
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default FlashCardList;
