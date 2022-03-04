import './App.css';
import amplify from 'amplify';
import { useState, useEffect } from 'react';

function App() {

  const [weatherJSON, setWeatherJSON] = useState({});

  useEffect(() => {
    setWeatherJSON({test: true});
  },
  [])

  return (
    <div className="App">
      <h1>The current weather is: </h1>
      <div>{JSON.stringify(weatherJSON)}</div>
    </div>
  );
}

export default App;
