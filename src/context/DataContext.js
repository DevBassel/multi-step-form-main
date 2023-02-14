import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Plan: {},
    ons: [],
  });
 
  function Add(val) {
    setData({ ...Data, ...val });
  }
  return (
    <DataContext.Provider value={{ Add, Data }}>
      {props.children}
    </DataContext.Provider>
  );
}
