import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';


function Hello (props) {
  const [loginToken, setLoginToken] = useState(null);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  // const [loginSuccessful, setLoginSuccessful] = useState(false);
  const submitLogin = () => {
    if(userName === 'Kevin' && password === 'donut shop') {
      setLoginToken('hallelujah!');
    }
  }
const handleSubmit = (e) => {
  e.preventDefault();
  submitLogin();
}
  useEffect(() => {
      console.log('Username: ' + userName + ' Password: ' + password);
    });
  
  if(loginToken == null) {
  return (
  <div>
  <h1>Please Login!</h1>
  <form>
      <label className="login">Enter your name:
        <input type="text" onChange={(e) => {setUserName(e.target.value)}}/>
      </label>
      <label className="login" >Password:
      <input type="text" onChange={(e) => {setPassword(e.target.value)}}/>
      </label>
      <button className="submit-btn" type="submit"
      onClick={handleSubmit}
      >Submit</button>
    </form>
  </div>);
  
}
  else {
    return <h1>You are logged in!</h1>;
  }};

function App() {
  return (
    <div className="App">
      <div>
        <Hello />
        
      </div>

    </div>
  );
}

export default App;
