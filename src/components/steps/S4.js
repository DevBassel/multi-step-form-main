import React, { useContext } from "react";
import { CountContxt } from "../../context/CountContext";
import { DataContext } from "../../context/DataContext";
export default function S4() {
  const userData = useContext(DataContext);
  const count = useContext(CountContxt);

  const plan = userData.Data.Plan;
  const roule = plan.roule === "monthly";
  let total = plan.price;

  const chenge = () => {
    count.navget(2);
  };
  return (
    <div className="st">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="finsh">
        <div className="plan-info">
          <h4>
            {plan.name} ({plan.roule}) <p onClick={chenge}>Change</p>
          </h4>
          <p className="price">
            ${plan.price}/{roule ? "mo" : "yr"}
          </p>
        </div>
        <div className="serv">
          {userData.Data.ons.map((serv) => {
            total += serv.price;
            return (
              <div key={serv.id}>
                <p>{serv.title}</p>
                <p className="price">
                  +${serv.price}/{roule ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total">
        <p>Total ({`per ${roule ? "monthe" : "year"}`}) </p>
        <p className="price">
          +${total}/{roule ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}
