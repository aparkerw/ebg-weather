import axios from "axios";
import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { listHistories } from "./graphql/queries";
import { createHistory } from "./graphql/mutations";

function App() {
  const [weatherJSON, setWeatherJSON] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const run = async () => {
      const resp = await axios.get('https://7oiwikjha1.execute-api.us-east-1.amazonaws.com/dev/weather');
      setWeatherJSON(resp.data);
      const histories = await API.graphql(graphqlOperation(listHistories));
      alert(histories);
      setHistory({ test: true });
    };

    run();
  }, []);

  const saveData = async () => {
    await API.graphql(graphqlOperation(createHistory, { input: { id: Math.round(Math.random() * 10000), name: "Atlanta", date: "2022-03-03", temperature: "75",  }}))
  };

  return (
    <div className="App" style={{padding: "20px" }}>
      <h1>The current weather is: </h1>
      <input type="submit" onClick={saveData} value="record data"/>
      <div>{JSON.stringify(weatherJSON)}</div>

      <h1>History</h1>
      <div>{JSON.stringify(history)}</div>
    </div>
  );
}

export default App;
