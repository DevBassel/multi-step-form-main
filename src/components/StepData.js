import { CountContxt } from "../context/CountContext";
import { useContext } from "react";

import S1 from "./steps/S1";
import S2 from "./steps/S2";
import S3 from "./steps/S3";
import S4 from "./steps/S4";

export default function StepData() {
  const context = useContext(CountContxt);
  let Data = null;

  switch (context.Count) {
    case 1:
      Data = <S1 />;
      break;
    case 2:
      Data = <S2 />;
      break;
    case 3:
      Data = <S3 />;
      break;
    case 4:
      Data = <S4/>;
      break;
    default:
      break;
  }
  return (
    <>
      <div className="step-data">
        <div className="info">{Data}</div>
        <div className="control">
          <button onClick={() => context.prevStep()} className="prev">
            {context.Count > 1 ? "Go Back" : ""}
          </button>
          <button onClick={() => context.nextStep()} className="next">
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}
