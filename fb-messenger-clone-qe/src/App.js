import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Quima', text: 'hey hey'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run code here
    setUsername(prompt('Please enter your name'));
  }, []) //condition

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>facebook</h1>
      <h2>Welcome {username}</h2>

      <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message </Button>
      </FormControl>
      </form>
      

      {/* messages */}

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
