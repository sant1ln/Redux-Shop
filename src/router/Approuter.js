import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { About } from "../pages/About";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Payment } from "../pages/Payment";
import { PaymentInfo } from "../pages/PaymentInfo";
import { ProductInfo } from "../pages/ProductInfo";
import { Success } from "../pages/Success";

export const Approuter = ()=>{
    return (
        <Router>
          <Navbar>
              <Switch>
                <Route exact component={Home} path="/"/>
                <Route exact component={ProductInfo} path="/product/:id"/>
                <Route exact component={Checkout} path="/checkout"/>
                <Route exact component={PaymentInfo} path="/paymentinfo"/>
                <Route exact component={Payment} path="/payment"/>
                <Route exact component={Success} path="/success"/>
                <Route exact component={About} path="/about"/>
                <Route exact component={NotFound} path="*"/>
              </Switch>
          </Navbar>
        </Router>
      );
}