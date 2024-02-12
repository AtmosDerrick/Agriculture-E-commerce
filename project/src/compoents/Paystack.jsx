import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";

function Paystack() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const PaystackIntegration = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop({
      key: "pk_test_6cd3ab148b595885c307879fa6ad46669cdb275c", // Replace with your public key
      email,
      amount,
      onClose: function () {
        alert("Window closed.");
      },
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
      },
    });

    paystack.openIframe(); // Use openIframe() method for opening the payment iframe
  };

  return (
    <div>
      <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email-address"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            id="amount"
            required
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>

        <div className="form-submit">
          <button type="submit" onClick={PaystackIntegration}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default Paystack;
