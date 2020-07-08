import React from "react";
import Person from "./components/Person.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Person
        firstname={"Rico"}
        lastname={"Ballenti"}
        age={36}
        haircolor={"white"}
      />
    </div>
  );
}

export default App;
