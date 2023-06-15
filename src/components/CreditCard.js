import CARDFRONT from "../assets/Rectangle.png";
import CARDBACK from "../assets/Group 6-modified.png";
import logo from "../assets/Ellipse 1.png";
import React from "react";

const CreditCard = ({ name, cardNumber, month, year, cvc }) => {
  console.log(name, cardNumber, month, year, cvc);
  return (
    <div class="row">
      <div class="column left">
        <aside>
          <div className="card-front">
            <span id="nameOfCardHolder">{name}</span>
            <span id="numberOfCreditCard">
              {cardNumber.slice(0, 4) +
                " " +
                cardNumber.slice(4, 8) +
                " " +
                cardNumber.slice(8, 12) +
                " " +
                cardNumber.slice(12, 16)}
            </span>
            <span id="cardExpMonth">{month}</span>
            <span id="cardExpYear">{year}</span>
            <img src={logo} alt="logo" id="logo" />
            <img src={CARDFRONT} alt="rectangle" />
          </div>
          <div className="card-back">
            <span id="cvcNumber">{cvc}</span>
            <img src={CARDBACK} alt="rectangle" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CreditCard;
