import React from 'react'
import "./Header.css"
import SearchIcon   from "@material-ui/icons/Search"
import HeaderNav from "./HeaderNav"

const getOptions = () => ({
      headerOptions:[
            {classOne:"header__optionLineOne", classTwo:"header__optionLineTwo", textOne:"Hello Guest", textTwo:"Sing In"},
            {classOne:"header__optionLineOne", classTwo:"header__optionLineTwo", textOne:"Returns", textTwo:"& Orders"},
            {classOne:"header__optionLineOne", classTwo:"header__optionLineTwo", textOne:"Your", textTwo:"Prime"},
          ], 
      headerOptionBasket:{classOne:"header__optionLineOne", classTwo:"header__optionLineTwo"}})

export default function Header() {
  const {headerOptions, headerOptionBasket} = getOptions();
  return (
    <div className="header"> 
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        <div className="header__search">
          <input className="header__searchInput"/>
          <SearchIcon className="header_searchIcon"/>
        </div>
        <HeaderNav {...{headerOptions, headerOptionBasket}}/>
    </div>
  );
}
