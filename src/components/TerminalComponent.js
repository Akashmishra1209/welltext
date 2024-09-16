import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function TerminalComponent() {
  const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;

      case 'greet':
        response = "Welcome to WellText";
        break;

      case 'random':
        response = Math.floor(Math.random() * 100);
        break;

      case 'clear':
        response = null;
        break;

      case 'help':
        response = "Enter 'date' for current date, 'greet' for greetings, 'random' for generate random number, 'clear' for clear the terminal, 'time' for current time, 'about' for information about WellText.";
        break;

      case 'time':
        response = 'Current time is ' + new Date().toLocaleTimeString();
        break;

      case 'about':
        response = "WellText is a powerful text analysis and manipulation tool. It provides various features like word counting, character counting, text summarization, and more.";
        break;

      default:
        response = 'Unknown command: ' + command;
        break;
    }

    if (response) {
      TerminalService.emit('response', response);
    } else {
      TerminalService.emit('clear');
    }
  };

  useEffect(() => {
    TerminalService.on('command', commandHandler);

    return () => {
      TerminalService.off('command', commandHandler);
    };
  }, []);

  return (
    <div className="card terminal-demo">
      <h1>Explore Our Terminal</h1>
      <p>Run <b>help</b> to list all commands</p>
      <Terminal
        welcomeMessage="Welcome to WellText"
        prompt="WellText $"
        pt={{
          root: 'bg-gray-900 text-white border-round',
          prompt: 'text-gray-400 mr-2',
          command: 'text-primary-300',
          response: 'text-primary-300'
        }}
        className='bg-black text-grey'
      />
    </div>
  );
}