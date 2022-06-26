// import React, { useState } from "react";
import "../card.css";

function CreditCard(props) {
  /* create conditional render based on protocol of card 
  change logo src and card label name
  */

  /* if props.network === "poly" change src url */
  // const [network, setNetwork] = useState("boba");

  let name;
  let networkImg;

  if (props.network == "polygon") {
    name = 0;
    networkImg = "https://i.ibb.co/rk0fTVF/polygon-matic-logo.png";
  } else if (props.network == "optimism") {
    name = 1;
    networkImg = "https://i.ibb.co/CJg16g9/op-icon-trans.png";
  } else if (props.network == "skale") {
    name = 2;
    networkImg = "https://i.ibb.co/jD11bb5/skale-logo.png";
  } else if (props.network == "boba") {
    name = 3;
    networkImg = "https://i.ibb.co/HhqfDt9/boba-logo-trans.png";
  } else if (props.network == "gnosis") {
    name = 4;
    networkImg = "https://i.ibb.co/64XSm6s/gnosis-safe-logo.png";
  }

  console.log(props);
  return (
    <div>
      <div className={`card__front card__part_${props.network} fade`}>
        <img className="card__front-logo card__logo" src={networkImg} />
        <p className="card_numer">**** **** **** 6266</p>
        <div className="card__space-75">
          <span className="card__label">{props.network[name]} Credit</span>
          <p className="card__info">Jerome Powell</p>
        </div>
        <div className="card__space-25">
          <span className="card__label">Expires</span>
          <p className="card__info">10/26</p>
          <img src="https://i.ibb.co/8msHZmT/mastercard-logo.png" />
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
