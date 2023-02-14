import StepData from "./components/StepData";
import Steps from "./components/Steps";
import CountProvider from "./context/CountContext";
import DataProvider from "./context/DataContext";

function App() {
  return (
    <div className="App container">
      <DataProvider>
        <CountProvider>
          <Steps />
          <StepData />
        </CountProvider>
      </DataProvider>
    </div>
  );
}

export default App;
