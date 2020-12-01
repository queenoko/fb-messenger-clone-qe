import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>facebook</h1>



      <form>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message </Button>
      </form>
      

      {/* messages */}

      {
        messages.map(message => (
        <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
