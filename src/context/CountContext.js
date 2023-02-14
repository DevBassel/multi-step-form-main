import { createContext, useState } from "react";

export const CountContxt = createContext();

export default function CountProvider(props) {
  const [Count, setCount] = useState(1);
  const nextStep = () => {
    if (Count <= 3) setCount(Count + 1);
  };
const navget = (num)=>{
  setCount(num);
}
  const prevStep = () => {
   if(Count > 1) setCount(Count - 1);
  };
  return (
    <CountContxt.Provider value={{ Count, nextStep, prevStep ,navget}}>
      {props.children}
    </CountContxt.Provider>
  );
}
