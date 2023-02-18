import { createContext, useContext, useState } from "react";
import { DataContext } from "./DataContext";

export const CountContxt = createContext();

export default function CountProvider(props) {
  const [Count, setCount] = useState(1);
  const [formValid, setValid] = useState({});
  const userData = useContext(DataContext).Data;

  const nextStep = () => {
    if (Count <= 3) setCount(Count + 1);

    if (!(formValid.name && formValid.email && formValid.phone)) {
      navget(1);
      console.log("Form Not valid: ");
    } else if (userData.Plan.id === undefined) {
      navget(2);
      console.log("Select a Plan: ");
    } else if (!userData.ons.length) {
      navget(3);
      console.log("Add-Ons");
    }
    if(Count === 4){
navget(5)
    }
  };
  // console.log(formValid);

  const navget = (num) => {
    setCount(num);
  };
  const prevStep = () => {
    if (Count > 1) setCount(Count - 1);
  };
  return (
    <CountContxt.Provider
      value={{ Count, nextStep, prevStep, navget, setValid,formValid }}
    >
      {props.children}
    </CountContxt.Provider>
  );
}
