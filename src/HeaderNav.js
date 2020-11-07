import React from "react";
import ShoppingBasketInfo from "@material-ui/icons/ShoppingBasket";

const HeaderOption = ({ op, i }) => (
  <div key={i} className="header__option">
    <span className={`"${op.classOne}"`}>{op.textOne}</span>
    <span className={`"${op.classTwo}"`}>{op.textTwo}</span>
  </div>
);

const HeaderOptionBasket = ({ op }) => (
  <div className="header__optionBasket">
    <ShoppingBasketInfo />
    <span className={`"${op.classTwo} ${op.classCount}"`}>0</span>
  </div>
);

const HeaderNav = (props) => {
  const { headerOptions, headerOptionBasket } = props;

  return (
    <div className="header__nav">
      {headerOptions.map((op, index) => (
        <HeaderOption {...{ op, index }} />
      ))}
      <HeaderOptionBasket {...{ op: headerOptionBasket }} />
    </div>
  );
};

export default HeaderNav;
