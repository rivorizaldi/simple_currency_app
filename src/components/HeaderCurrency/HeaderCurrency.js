import React from "react";
import "./HeaderCurrency.css";
import Aux from "../../hoc/Auxilliary/Auxilliary";

function HeaderCurrency(props) {
  return (
    <Aux>
      <div className="headerCurrency">
        <p className="titleCurrency">USD - United States Dollars</p>
        <div className="baseCurrency">
          <p>USD</p>
          <input
            className="baseValue"
            type="number"
            value={props.baseValue}
            onChange={props.setBaseValue}
          />
        </div>
      </div>
    </Aux>
  );
}

export default HeaderCurrency;
