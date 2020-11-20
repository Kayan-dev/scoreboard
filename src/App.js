import React from "react";
import "./style/App.scss";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title content="Hi there" />
      <Scoreboard />
    </div>
  );
}

export default App;
