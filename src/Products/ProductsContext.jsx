import React, { createContext, useContext } from "react";
import { db } from "../Config.js/Config";

export const ProductsContext = createContext();
export class ProductContextProvider extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const prevShoes = this.state.products;
    db.collection("Products").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevShoes.push({
            ProductId: change.doc.id,
            ProductName: change.doc.data().ProductName,
            ProductAmount: change.doc.data().ProductAmount,
            ProductImg: change.doc.data().ProductImg,
            ProductDescription: change.doc.data().ProductDescription,
          });
        }
        this.setState({
          products: prevShoes,
        });
      });
    });
  }
  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
