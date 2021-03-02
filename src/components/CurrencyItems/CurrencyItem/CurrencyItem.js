import React from "react";
import "./CurrencyItem.css";

function CurrencyItem(props) {
  const currenciesList = () => {
    return props.listCurrencies.map((item, index) => {
      return (
        <li key={index} className="currencyItem">
          <div className="currencyDetail">
            <div className="currencyDetailTitle">
              <p>{item.currencyShortName}</p>
              <p>{props.getRates(item.currencyShortName)}</p>
            </div>
            <p className="titleCurrency" style={{ fontWeight: "500" }}>
              {item.currencyShortName} - {item.currencyLongName}
            </p>
            <p className="titleCurrency">
              1 {item.base} = {item.currencyShortName}{" "}
              {Intl.NumberFormat().format(item.rate)}
            </p>
          </div>
          <div className="delete">
            <button
              onClick={() => {
                props.deleteCurrency(index);
                // this.deleteCurrency(index);
              }}
            >
              (-)
            </button>
          </div>
        </li>
      );
    });
  };

  return <ul className="currenciesList">{currenciesList()}</ul>;
}

export default CurrencyItem;
