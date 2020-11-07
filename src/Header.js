import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderNav from "./HeaderNav";

const getOptions = () => ({
  headerOptions: [
    {
      classOne: "header__optionLineOne",
      classTwo: "header__optionLineTwo",
      textOne: "Hello Guest",
      textTwo: "Sing In",
    },
    {
      classOne: "header__optionLineOne",
      classTwo: "header__optionLineTwo",
      textOne: "Returns",
      textTwo: "& Orders",
    },
    {
      classOne: "header__optionLineOne",
      classTwo: "header__optionLineTwo",
      textOne: "Your",
      textTwo: "Prime",
    },
  ],
  headerOptionBasket: {
    classTwo: "header__optionLineTwo",
    classCount: "header__basketCount",
  },
});

export default function Header() {
  const { headerOptions, headerOptionBasket } = getOptions();
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <HeaderNav {...{ headerOptions, headerOptionBasket }} />
    </div>
  );
}
