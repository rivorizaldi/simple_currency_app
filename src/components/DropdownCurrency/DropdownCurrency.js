import React from "react";
import Select from "react-select";
import "./DropdownCurrency.css";

function DropdownCurrency(props) {
  return (
    <div className="inputCurrency">
      <Select
        menuPlacement={"auto"}
        className="currencyOptions"
        options={props.options}
        onChange={props.setCurrencyType}
      />
      <button onClick={props.addCurrency}>Submit</button>
    </div>
  );
}

export default DropdownCurrency;
