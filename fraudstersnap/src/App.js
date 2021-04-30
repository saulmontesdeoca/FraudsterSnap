import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const respuestaGoogle=(respuesta)=> {
    console.log(respuesta);
  }
  return (
    <div className="App">
      <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={respuestaGoogle}
    onFailure={respuestaGoogle}
    cookiePolicy={'single_host_origin'}
  />
  {/* document.getElementById('googleButton') */}
    </div>
  );
}

export default App;
