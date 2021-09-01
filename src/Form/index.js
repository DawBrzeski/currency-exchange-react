import React, { useState } from "react";
import { Result } from "./Result";
import { Clock } from "../Clock";
import { Wrapper, Label, LabelText, Buttons, Button } from "./styled";
import { Loading, Failure } from ".//Result/styled"
import { useRatesData } from "./useRatesData";

export const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");
    const ratesData = useRatesData();

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }
    return (
        <Wrapper onSubmit={onSubmit}>

            {ratesData.state === "loading" ? (
                <Loading>
                    Sekundka... <br></br> Ładuje kursy walut z Europejskiegu Banku Centralnego.
                </Loading>
            )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak. Sprawdz czy amsz polączenie z internetem...
                        </Failure>
                    ) : (
                        <div><Clock></Clock>
                        <Label>
                            <LabelText>
                                Wpisz kwotę w EUR:
                            </LabelText>
                            <br></br>
                            <select >
                                <option defaultValue="eur" selected>EUR</option>
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
                            defaultValue="EUR"
                                   onChange={({ target }) => setCurrency(target.value)}
                            >
                                {Object.keys(ratesData.rates).map(((currency) => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
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
                        <Result result={result} /></div>
                    ))}

            
        </Wrapper>


    )
}


