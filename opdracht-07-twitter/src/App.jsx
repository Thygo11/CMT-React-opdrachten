import { useState } from "react";
import "./App.css";
import CreateMessage from "./components/createMessage.jsx";
import MessageList from "./components/MessageList.jsx";

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);
  let name = "jason"
  return (
    <>
    <CreateMessage/>
    <MessageList name={name} message={message}/>
    
    
    </>
  );
}

export default App;
