import React from "react";
import Currency from "./containers/Currency/Currency";
import Aux from "./hoc/Auxilliary/Auxilliary";
import "./App.css";

function App() {
  return (
    <Aux>
      <h3 style={{ textAlign: "center" }}>Currency App</h3>
      <div className="container">
        <Currency />
      </div>
    </Aux>
  );
}

export default App;
