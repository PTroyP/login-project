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
    }, []);
  
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
    return (
        <div>
            <h1>You are logged in!</h1> 
          
        </div>);
  }};

function App() {
  return (
    <div className="App">
      <div>
        <Hello />
        <Pets />
      </div>

    </div>
  );
}

function Pet (props) {
  return (<div>
    <div>{props.id}</div>
    <div>{props.name}</div>
    </div>)
}

function Pets() {
  const [coolPets, setCoolPets] = useState([]);
  

  useEffect(() => {
    console.log(coolPets.length)
    fetch('http://localhost:3000/animals2.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCoolPets(data);
        // console.log(Object.keys(coolPets))
        // coolPets.map((el) => {
        //   let firstKey = Object.keys(el)[0];
        //         console.log(firstKey);
        //       })
      })
  }, [])


  // FOR USE WITH ANIMALS.JSON
  // const allThePets = () => {
  //   if(coolPets.length > 0) {
  //     const petsMap = coolPets.map((el) => {
  //       let firstKey = Object.keys(el)[0];
  //             return(
  //               <div key={firstKey}> 
  //                 {firstKey}
  //               </div>)
  //           })
  //     return (<div>
  //       some pets found {petsMap}
  //     </div>)
  //   } else {
  //     return(
  //     <div>no pets found</div>
  //     )
  //   }
  // }
  const allThePets2 = () => {
    if(coolPets.length > 0) {
      return  coolPets.map((el, index) => {
          return <Pet key={index} id={index} name={el.name} />;
        })
    }
    else {return(
      <div>no pets found</div>
      )}
  }

  const allThePets = () => {
    if(coolPets.length > 0) {
      const petsMap = coolPets.map((el) => {
        let keyString = '';
        Object.keys(el).filter((k) => {
          return  k != "name";

        //  Using Key Lookup
        }).map((attr_key) => {
          keyString = keyString + attr_key + ': '+ el[attr_key] + ', ';
        })
      
        // keyString = keyString.slice(0, -2);
        // const attrMap = el.map((attr) => {
        //   return (
        //   <div className="petAttribute">
        //     <div className='petAttributeKey'>{attr}</div>
        //     <div className='petAttributeValue'>{el[attr]}</div>
        //   </div>
        //   )
        // })
              return(
                <div className='petBox' key={el.name}> 
                  <div className='petName'>{el.name}</div>
                  <div className='petAttributes'>{keyString}</div>
                </div>)
            })
      return (<div>
        some pets found {petsMap}
      </div>)
    } else {
      return(
      <div>no pets found</div>
      )
    }
  }

  return (
    <div>
    <h1>Here are the pets!</h1>
    {allThePets2()}
    </div>
  );
   
}

export default App;
