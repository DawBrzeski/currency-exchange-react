import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="form__label"><span className="form__labelText" for="baseCurrencyID">Wpisz kwotę w PLN:</span><br></br>
                <select id="baseCurrencyID" name="baseCurrency">
                    <option value="pln" selected>PLN</option>
                </select>
            </label>
            <label className="form__label">
                <input
                    type="number"
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    step="0.01"
                    min="1"
                    max="1000000000000"
                    placeholder="Mam"
                    required
                />
            </label>
            <label for="futureCurrencyID" className="form__label"> <span className="form__labelText">Wybierz walute, na
                która chcesz
                zamienić:</span><br></br>
                <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )))}
                </select>
            </label>
            <input type="number" name="futureCurrencyValue" placeholder="Otrzymam"
                value="" disabled />

            <div className="button__row">
                <button className="form__button" >Oblicz</button>
                <button className="form__button" type="reset">Zresetuj </button>
            </div>
            <Result result={result} />
        </form>


    )
}


