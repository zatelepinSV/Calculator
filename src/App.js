import { Header } from './components/Header';
import { UserInput } from "./components/UserInput";
import { Results } from "./components/Results";
import { useState } from "react";
import classes from "./App.module.css";
import './index.css';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  const inputChangeHandler = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={inputChangeHandler} userInput={userInput} />
      {!inputIsValid && (<p className={classes.center}>Please enter a duration greater than zero.</p>)}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
};

export default App;
