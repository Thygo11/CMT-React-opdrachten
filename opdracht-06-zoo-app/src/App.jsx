import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage.jsx";
import AnimalList from "./components/AnimalList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
