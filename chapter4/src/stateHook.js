import './App.css';
import {useState} from 'react'

function StateHook() {
  const [name, setName] = useState('mario') // We are declaring the useState

  /* This will return a destructured array, that will become name and a function, that will be used as a setter function in order to change it if we desire to
  
  Usually, when this happens, we type the word SET and then the name of the variable that was declared before*/

  const handleClick = () => {
    setName('luigi'); // This will change the state value for name
    console.log(name); // The first time it will still be Mario since it won't update 
  }

  return (

    <div className = "App">
      <h1>My name is {name}</h1>
      <button onClick = {handleClick}> Change name </button>
    </div>
  )

}

export default StateHook;