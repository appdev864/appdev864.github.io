import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Typewriter
            options={{
            strings: ['Hello World'],
            autoStart: true,
            loop: true,
          }}
        />
        </p>
      </header>
    </div>
  );
}

export default App;
