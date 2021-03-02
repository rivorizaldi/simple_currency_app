import React from "react";
import "./CurrencyItems.css";
import CurrencyItem from "./CurrencyItem/CurrencyItem";
import DropdownCurrency from "../DropdownCurrency/DropdownCurrency";

function CurrencyItems(props) {
  return (
    <div className="currencies">
      <CurrencyItem
        listCurrencies={props.listCurrencies}
        getRates={props.getRates}
        deleteCurrency={props.deleteCurrency}
      />
      <DropdownCurrency
        options={props.options}
        setCurrencyType={props.setCurrencyType}
        addCurrency={props.addCurrency}
      />
    </div>
  );
}

export default CurrencyItems;
