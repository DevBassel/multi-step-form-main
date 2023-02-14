import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Ons from "../Ons";
import plans from "../plans";

export default function S3() {
  const FormData = useContext(DataContext);
  const active = FormData.Data.ons;
  const PlanRoule = FormData.Data.Plan.roule === "monthly";
  const plan = PlanRoule ? plans.ons.monthly : plans.ons.yearly;

  const select = (item) => {
    if (!active.includes(item)) {
      FormData.Add({ ons: [...active, item] });
    } else {
      let index = active.indexOf(item);
      let del = active.splice(index, 1);
      FormData.Add({ ons: active.filter(() => item !== del) });
    }
  };
  console.log("context", FormData.Data.ons);

  return (
    <div className="st">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="picks">
        {plan.map((item) => {
          return (
            <div
              onClick={() => select(item)}
              key={item.id}
              className={`ons ${active.includes(item) ? "active" : ""}`}
            >
              <Ons
                checked={active.includes(item)}
                title={item.title}
                dis={item.dis}
                price={item.price}
                role={PlanRoule}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
