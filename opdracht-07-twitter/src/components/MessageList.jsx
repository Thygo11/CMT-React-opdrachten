import Message from "./Message.jsx";

const MessageList = ({name, message}) => {
    return (
         <>
    <Message name="johnny" message="dit is het eerste bericht"/>
  <Message name="Peter" message="dit is het tweede bericht"/>
    
    </> );
}
 
export default MessageList;