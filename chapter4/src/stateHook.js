import './App.css';
import {useState} from 'react'

function StateHook() {
  const [name, setName] = useState('mario') // We are declaring the useState

  /* This will return a destructured array, that will become name and a function, that will be used as a setter function in order to change it if we desire to
  
  Usually, when this happens, we type the word SET and then the name of the variable that was declared before*/

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = () => {
    setName('luigi'); // This will change the state value for name
    console.log(name); // The first time it will still be Mario since it won't update
  }

  return (

    <div className = "App">
      <h1>My name is {name}</h1>
      <button onClick = {handleClick}> Change name </button>

      {// .map function
      events.map((event) => ( // For every element of event we will return this JSX
        <div key={event.id }> 
          <h2>{event.title}</h2>
        </div>

        // For every DIV this method generates, we grab a key from the id that we previously declared in the object before
      ))
      }
    </div>
  )

}

export default StateHook;