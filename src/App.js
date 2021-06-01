import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51ItWL3FsljR1JBuoBjwzyQHxPKsYWuYb4gwt9UpT7oPCWwNnPyOs1omRSRlmbshqsCZGE5KHR3f6trjFayWgSBzI00ZtZmYGLt');

function App() {
return (
  <div className="app">
    <Router>
      <Switch>
      <Route path="/login">
          <Header />
          <Login />
        </Route>
      <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
      <Route path="/payment">
          <Header />
          <Elements stripe={promise} >
            <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;