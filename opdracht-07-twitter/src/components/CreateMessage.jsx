import {  useState } from "react";

const CreateMessage = () => {
const [textInput, setTextInput] = useState('');
const [message, setMessage] = useState([]);


const userInputHandler = (e) =>{
setTextInput(e.target.value)
}
const submitMessageHandler = (e) =>{
e.preventDefault();
setMessage(...message, textInput)
setTextInput('')
}
return (
<form action="">
<textarea value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
<button onClick={submitMessageHandler}>Toevoegen</button>

</form>        
      );
}
 
export default CreateMessage;