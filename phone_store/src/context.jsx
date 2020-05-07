import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    // setProducts is used to deepcopy storedProducts from data.js
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    // deepcopy from storedProducts
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };
  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let products = [...this.state.products];
    // Now you need to get reference to the product, not the copy of the product
    // Do not use find here
    const product = products[products.indexOf(this.getItem(id))];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(
      () => {
        return {
          products,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = (id) => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let cart = [...this.state.cart];
    let selectedProduct = this.getItem(id);
    const product = cart[cart.indexOf(selectedProduct)];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let cart = [...this.state.cart];
    let selectedProduct = this.getItem(id);
    const product = cart[cart.indexOf(selectedProduct)];
    product.count -= 1;
    if (product.count === 0) {
      return this.removeItem(id);
    }
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  removeItem = (id) => {
    let products = [...this.state.products];
    let cart = [...this.state.cart];
    cart = cart.filter((item) => item.id !== id);
    const removedProduct = products[products.indexOf(this.getItem(id))];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          products,
          cart,
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
