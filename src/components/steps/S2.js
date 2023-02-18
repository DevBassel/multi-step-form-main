import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Card from "../Card";
import plans from "../plans";

export default function S2() {
  const FormData = useContext(DataContext);
  const [active, setActive] = useState(FormData.Data.Plan.id);
  const [Plan, setPlan] = useState(FormData.Data.Plan.roule === "yearly");

  const toggle = () => {
    setPlan(!Plan);

    FormData.Add({
      Plan: {
        ...FormData.Data.Plan,
        roule: Plan ? "monthly" : "yearly",
      },
      ons: [],
    });
  };
  // console.log(FormData.Data.Plan);

  const select = (item) => {
    setActive(item.id);

    FormData.Add({
      Plan: {
        name: item.name,
        roule: Plan ? "yearly" : "monthly",
        id: item.id,
        price: Plan ? item.planY : item.planMo,
      },
    });
  };

  console.log(FormData.Data.Plan);

  return (
    <div className="st">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans">
        {plans.plan.map((plan) => {
          return (
            <div
              onClick={() => select(plan)}
              className={`card ${plan.id === active ? "active" : ""}`}
              key={plan.id}
            >
              <Card item={plan} roule={Plan} />
            </div>
          );
        })}
      </div>
      {/* Switch btn */}
      <div className={`switchArea ${Plan ? "active" : ""}`}>
        <span>monthly</span>
        <span onClick={toggle} className="switch"></span>
        <span>yearly</span>
      </div>
    </div>
  );
}
