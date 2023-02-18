import { useContext, useRef } from "react";
import { CountContxt } from "../../context/CountContext";
import { DataContext } from "../../context/DataContext";

export default function S1() {
  const FormData = useContext(DataContext);
  const valid = useContext(CountContxt);
  const NameRef = useRef("");
  const EmailRef = useRef("");
  const PhoneRef = useRef("");

  const NameValid = /\b([a-zA-Z][-,a-z. ']+[ ]*)+/g;
  const EmailValid = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const PhoneValid = /^[\\+]?[0-9]{1,3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;

  const AddData = (key, val) => {
    FormData.Add({ [key]: val });

    valid.setValid({
      name: NameValid.test(NameRef.current.value),
      email: EmailValid.test(EmailRef.current.value),
      phone: PhoneValid.test(PhoneRef.current.value),
    });
  };
  const validInput = valid.formValid;
console.log(validInput);
  return (
    <div className="st">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form">
        <div>
          <label className={`${validInput.name? "": "req"}`}>Name</label>
          <input
            onChange={() => AddData("Name", NameRef.current.value)}
            ref={NameRef}
            value={FormData.Data.Name}
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label className={`${validInput.email? "": "req"}`}>Email Address</label>
          <input
            onChange={() => AddData("Email", EmailRef.current.value)}
            ref={EmailRef}
            value={FormData.Data.Email}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label className={`${validInput.phone? "": "req"}`}>Phone Number</label>
          <input
            onChange={() => AddData("Phone", PhoneRef.current.value)}
            ref={PhoneRef}
            value={FormData.Data.Phone}
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
}
