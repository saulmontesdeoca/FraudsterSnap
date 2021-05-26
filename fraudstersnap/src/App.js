import logo from './logo.svg';
import './App.css';
import Login from './login.js';
import MainPage from './MainPage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/transactions">
          <MainPage />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
