import React from "react";
import { Switch, Route } from "react-router-dom";

import ItemContainer from "./Listing/ItemContainer";
import Cart from "./Listing/Cart";
import Contacts from "./Listing/Contacts";

const Router = () => (
  <Switch>
    <Route path="/" component={ItemContainer} exact />
    <Route path="/Cart" component={Cart} />
    <Route path="/Contacts" component={Contacts} />
  </Switch>
);

export default Router;
