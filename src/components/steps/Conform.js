import React from "react";
import img from "../../assets/images/icon-thank-you.svg";
export default function Conform() {
  return (
    <div className="conform">
      <img src={img} alt={img} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
