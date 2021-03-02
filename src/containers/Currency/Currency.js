import React, { Component } from "react";
import HeaderCurrency from "../../components/HeaderCurrency/HeaderCurrency";
import CurrencyItems from "../../components/CurrencyItems/CurrencyItems";
import Aux from "../../hoc/Auxilliary/Auxilliary";

class Currency extends Component {
  state = {
    rates: {},
    inputValue: "",
    baseValue: 1,
    listCurrencies: [],
    options: [
      { value: "usd", label: "USD" },
      { value: "cad", label: "CAD" },
      { value: "idr", label: "IDR" },
      { value: "gbp", label: "GBP" },
      { value: "chf", label: "CHF" },
      { value: "sgd", label: "SGD" },
      { value: "inr", label: "INR" },
      { value: "myr", label: "MYR" },
      { value: "jpy", label: "JPY" },
      { value: "krw", label: "KRW" },
    ],
  };

  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then((response) => response.json())
      .then((data) => this.setState({ rates: data }));
  }

  // Get Currency Rates Base On USD
  getRates = (currency) => {
    const { rates, baseValue } = this.state;
    switch (currency.toLowerCase()) {
      case "usd":
        return baseValue * 1;
      case "cad":
        return new Intl.NumberFormat().format(baseValue * rates.rates.CAD);
      case "idr":
        return new Intl.NumberFormat().format(baseValue * rates.rates.IDR);
      case "gbp":
        return new Intl.NumberFormat().format(baseValue * rates.rates.GBP);
      case "chf":
        return new Intl.NumberFormat().format(baseValue * rates.rates.CHF);
      case "sgd":
        return new Intl.NumberFormat().format(baseValue * rates.rates.SGD);
      case "inr":
        return new Intl.NumberFormat().format(baseValue * rates.rates.INR);
      case "myr":
        return new Intl.NumberFormat().format(baseValue * rates.rates.MYR);
      case "jpy":
        return new Intl.NumberFormat().format(baseValue * rates.rates.JPY);
      case "krw":
        return new Intl.NumberFormat().format(baseValue * rates.rates.KRW);

      default:
        return null;
    }
  };

  // Get currency detail base on dropdown selection
  getCurrencyDetail = (currency) => {
    const { rates } = this.state;

    switch (currency.toLowerCase()) {
      case "usd":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "United States Dollar",
          base: currency,
          rate: 1,
        };
      case "cad":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Canadian dollar",
          base: rates.base,
          rate: rates.rates.CAD,
        };
      case "idr":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Indonesia Rupiah",
          base: rates.base,
          rate: rates.rates.IDR,
        };
      case "gbp":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "British pound sterling",
          base: rates.base,
          rate: rates.rates.GBP,
        };
      case "chf":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Swiss Franc",
          base: rates.base,
          rate: rates.rates.CHF,
        };
      case "sgd":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Singapore dollar",
          base: rates.base,
          rate: rates.rates.SGD,
        };
      case "inr":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Indian rupee",
          base: rates.base,
          rate: rates.rates.INR,
        };
      case "myr":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Malaysian ringgit",
          base: rates.base,
          rate: rates.rates.MYR,
        };
      case "jpy":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "Japanese yen",
          base: rates.base,
          rate: rates.rates.JPY,
        };
      case "krw":
        return {
          currencyShortName: currency.toUpperCase(),
          currencyLongName: "South Korean won",
          base: rates.base,
          rate: rates.rates.CAD,
        };

      default:
        return null;
    }
  };

  // Add Currency To List
  addCurrency = () => {
    const { inputValue, listCurrencies } = this.state;

    // Check If There any Currency that has same type
    const checkCurrency = listCurrencies.filter(
      (item) => item.currencyShortName === inputValue.toUpperCase()
    );

    // return immediately if there is same currency type
    if (checkCurrency.length > 0) return;

    this.setState((state) => {
      const currency = this.getCurrencyDetail(inputValue);

      if (currency) {
        const listCurrencies = state.listCurrencies.concat(currency);

        return {
          listCurrencies,
          inputValue: "",
        };
      }
    });
  };

  // Delete Currency Item From List
  deleteCurrency = (itemIndex) => {
    this.setState((state) => {
      const filterList = state.listCurrencies.filter(
        (item, index) => index !== itemIndex
      );

      return {
        listCurrencies: filterList,
      };
    });
  };

  // Set Currency Type
  setCurrencyType = (event) => {
    this.setState({ inputValue: event.value });
  };

  // Set Base Value
  setBaseValue = (event) => {
    this.setState({ baseValue: event.target.value });
  };

  render() {
    const { listCurrencies, baseValue, options } = this.state;

    return (
      <Aux>
        <HeaderCurrency
          baseValue={baseValue}
          setBaseValue={this.setBaseValue}
        />
        <CurrencyItems
          listCurrencies={listCurrencies}
          getRates={this.getRates}
          deleteCurrency={this.deleteCurrency}
          options={options}
          setCurrencyType={this.setCurrencyType}
          addCurrency={this.addCurrency}
        />
      </Aux>
    );
  }
}

export default Currency;
