import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from './pages/navigation';


function App() {
  return (
    <BrowserRouter><Routes>
      <Route path="/" element={<Navigation/>}>;
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Nopage />} />
        <Route index element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
