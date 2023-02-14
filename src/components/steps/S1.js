import { useContext, useRef } from "react";
import { DataContext } from "../../context/DataContext";

export default function S1() {
  const FormData = useContext(DataContext);
  const NameRef = useRef("");
  const EmailRef = useRef("");
  const PhoneRef = useRef("");
  
  const AddData = (key, val) => {
    FormData.Add({ [key]: val });
  };
  console.log(FormData.Data);

  return (
    <div className="st">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form">
        <div>
          <label>Name</label>
          <input
            onChange={() => AddData("Name", NameRef.current.value)}
            ref={NameRef}
            value={FormData.Data.Name}
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            onChange={() => AddData("Email", EmailRef.current.value)}
            ref={EmailRef}
            value={FormData.Data.Email}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
          onChange={() => AddData("Phone", PhoneRef.current.value)}
          ref={PhoneRef}
          value={FormData.Data.Phone}
          type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </div>
  );
}
