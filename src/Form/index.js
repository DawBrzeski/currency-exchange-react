import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { Wrapper, Label, LabelText, Buttons, Button } from "./styled";


export const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <Wrapper onSubmit={onSubmit}>
            <Clock></Clock>
            <Label>
                <LabelText>
                    Wpisz kwotę w PLN:
                </LabelText>
                <br></br>
                <select >
                    <option value="pln" selected>PLN</option>
                </select>
            </Label>
            <Label >
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
            </Label>
            <Label> <LabelText>Wybierz walute, na
                która chcesz
                zamienić:</LabelText><br></br>
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
            </Label>
            <input type="number" placeholder="Otrzymam"
                value="" disabled />

            <Buttons>
                <Button>Oblicz</Button>
                <Button type="reset">Zresetuj </Button>
            </Buttons>
            <Result result={result} />
        </Wrapper>


    )
}


