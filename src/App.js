import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './components/MessageParser/MessageParser';
import ActionProvider from './components/ActionProvider/ActionProvider';
import config from './components/Config/Config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;