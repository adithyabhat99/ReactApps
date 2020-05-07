import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Title } from "../";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  {/* CartColumns is only displayed in large screens */}
                  <CartColumns />
                  {/* Passing down props, we can instead use Context API here, 
                  but this is just for the sake of practice */}
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            }
            return <EmptyCart />;
          }}
        </ProductConsumer>
      </section>
    );
  }
}
