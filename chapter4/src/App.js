import './App.css';

function App() {

  let name = 'Mario';
  const handleClick = () => {
    name = 'Luigi';
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>CHange name</button>
    </div>
  );

  // The value of the variable name will change but it won't show in the displayed h1 element

  // The components have already been evaluated before we change it, so we see the old value

  // React needs to re-evaluate the component for seeing the new value


}

export default App;
