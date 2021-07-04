import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders.js";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51J92yiFqFMMNwT433Zcc8sN3CF8Zv03hVKGJ46Wr53F66WDKDzN0mYlltrgnTlDDUfe30ygEDuIxTuzLj5hi4lRC00ki1iJq2U"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          {/* Route Orders */}
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          {/* Route Login */}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Route Login */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Route Checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Root */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
