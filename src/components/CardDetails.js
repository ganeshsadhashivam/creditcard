import { useState } from "react";
import React from "react";
import CreditCard from "./CreditCard";

const CardDetails = () => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setMM] = useState("");
  const [expYear, setYY] = useState("");
  const [cvc, setCVC] = useState("");
  const [error, setError] = useState(false);
  console.log(cardHolderName);

  const setName = (e) => {
    setCardHolderName(e.target.value);
  };

  const setCreditCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const setYear = (e) => {
    setYY(e.target.value);
  };

  const setMonth = (e) => {
    setMM(e.target.value);
  };

  const setCvc = (e) => {
    setCVC(e.target.value);
  };

  const validateInputs = (e) => {
    e.preventDefault();
    console.log("in valida");
    if (
      cardHolderName.length == 0 ||
      cardNumber.length == 0 ||
      expMonth.length == 0 ||
      expYear.length == 0 ||
      cvc.length == 0
    ) {
      setError(true);
    }
  };
  return (
    <>
      <CreditCard
        name={cardHolderName}
        cardNumber={cardNumber}
        month={expMonth}
        year={expYear}
        cvc={cvc}
      />
      <form
        action="
        "
        onSubmit={validateInputs}
      >
        <div class="column right">
          <div className="card-component">
            <div>
              <div id="chname">
                <label htmlFor="cardholdername">CARDHOLDERNAME</label>
                <input
                  type="text"
                  id="cardholdername"
                  placeholder="eg.ganesh"
                  value={cardHolderName}
                  onChange={setName}
                />
                {console.log(cardHolderName.length)}
                {error && cardHolderName <= 0 ? (
                  <span id="errorname">Cardholder Name Required</span>
                ) : (
                  ""
                )}
              </div>
              <div id="chnumber">
                <label htmlFor="CARDHOLDERNUMBER">CARD NUMBER</label>
                <input
                  type="text"
                  id="CARDHOLDERNUMBER"
                  placeholder="eg.1234 5678 9101 1213"
                  value={cardNumber}
                  onChange={setCreditCardNumber}
                />
                {console.log(cardNumber.length)}
                {error && cardNumber.length > 16 ? (
                  <span id="errorcardNo">Card Number Required</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div id="chexpdate">
              <div>
                <label htmlFor="mm">EXP. </label>
                <label htmlFor="yy">DATE(MM/YY)</label>
                <label htmlFor="cvc">CVC</label>
              </div>
              <div>
                <input
                  type="text"
                  id="mm"
                  placeholder="MM"
                  value={expMonth}
                  onChange={setMonth}
                />
                <input
                  type="text"
                  id="yy"
                  placeholder="YY"
                  value={expYear}
                  onChange={setYear}
                />
                <input
                  type="text"
                  id="cvc"
                  placeholder="eg.123"
                  value={cvc}
                  onChange={setCvc}
                />
              </div>
              <div>
                {error && expMonth.length < 0 ? (
                  <span id="monthnum">Month Required </span>
                ) : (
                  ""
                )}
                {error && expYear.length < 0 ? (
                  <span id="yearnum">Year Required </span>
                ) : (
                  ""
                )}
                {error && cvc.length < 0 ? (
                  <span id="cvcnum">Cvc Number Required </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button>confirm</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CardDetails;
