import "./App.css";
import CreateMessage from "./components/createMessage.jsx";
import Message from "./components/message.jsx";
import MessageList from "./components/MessageList.jsx";

function App() {
  return (
    <>
      <CreateMessage />
      <MessageList/>
    </>
  );
}

export default App;
