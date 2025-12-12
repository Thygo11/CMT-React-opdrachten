import FlashCardList from "./`components/FlashCardsList.jsx";
import quizData from "./data.js";

function App() {
  return (
    <main className="min-h-screen bg-blue-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Flashcard Quiz</h1>
      <FlashCardList data={quizData} />
    </main>
  );
}

export default App;
