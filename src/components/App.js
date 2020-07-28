import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App(props) {
  const [numCookies, setNumCookies] = useState(() => {
    const cookieStorage = window.localStorage.getItem("numCookies");
    console.log(cookieStorage);
    if (cookieStorage === null) {
      return 1000;
    } else {
      return JSON.parse(cookieStorage);
    }
  });
  // window.localStorage.setItem("numCookies", JSON.stringify(500));

  useEffect(() => {
    window.localStorage.setItem("numCookies", JSON.stringify(numCookies));
  }, [numCookies]);

  const [purchasedItems, setPurchasedItems] = useState(() => {
    const itemStorage = window.localStorage.getItem("purchasedItems");
    if (itemStorage === null) {
      return {
        cursor: 0,
        grandma: 0,
        farm: 0,
      };
    } else {
      return JSON.parse(itemStorage);
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      "purchasedItems",
      JSON.stringify(purchasedItems)
    );
  }, [numCookies]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game
            numCookies={numCookies}
            setNumCookies={setNumCookies}
            purchasedItems={purchasedItems}
            setPurchasedItems={setPurchasedItems}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
