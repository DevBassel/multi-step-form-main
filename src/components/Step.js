import { useContext } from "react";
import { CountContxt } from "../context/CountContext";

export default function Step(props) {
  const context = useContext(CountContxt);

  // console.log(context);
  return (
    <div className={`step ${context.Count === +props.num  ? "active" : ""}`}>
      <div className="num">{props.num}</div>
      <div>
        <h5>STEP {props.num}</h5>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}
