import logo from './logo.svg';
import './App.css';
import Login from './login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
          <Login />
      </header>
    </div>
  );
}

export default App;
