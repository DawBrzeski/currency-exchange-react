import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import { Form } from "./Form";
import Footer from "./Footer";
import {useRatesData} from ".//Form/useRatesData"; 


function App() {

  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];
      
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Container>
      <Header title="Currency Exchange" description="live, fast, easy"> </Header>
      
      <Form
        result={result}
        calculateResult={calculateResult}
      ></Form>
      <Footer></Footer>
    </Container>
  );
}

export default App;
