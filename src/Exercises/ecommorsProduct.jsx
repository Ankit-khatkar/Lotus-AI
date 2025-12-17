import { useState } from "react";
import "./ecommorsProducts.css";
function Myproduct(props) {
  const { productName, priceTag, className, discountprice } = props;

  if (discountprice == null) {
    return (
      <>
        <div className={className}>
          <h3>{productName}</h3>
          <h5>Price: ${priceTag}</h5>
          <button>Add to Cart</button>
        </div>
      </>
    );
  } else {
    if (discountprice > priceTag) {
      return (
        <>
          <div className={className}>
            <h3>{productName}</h3>
            <del>
              <h5>Price: ${priceTag}</h5>
            </del>
            <h5>Discount: ${discountprice}</h5>
            <button>Add to Cart</button>
          </div>
        </>
      );
    }
    return (
      <>
        <div className={className}>
          <h3>{productName}</h3>
          <h5>Price: ${priceTag}</h5>
          <h5>Discount: ${discountprice}</h5>
          <button>Add to Cart</button>
        </div>
      </>
    );
  }
}
function ProductsWindow() {
  return (
    <>
      <div className="window">
        <Myproduct productName="Socks" priceTag="$5" className="myproduct" />
        <Myproduct
          productName="Phone"
          priceTag={40}
          className="myproduct"
          discountprice={41}
        />
        <Myproduct
          productName="Grossries"
          priceTag={20}
          className="myproduct"
        />
        <Myproduct
          productName="Cooldrinks"
          priceTag={10}
          className="myproduct"
        />
        <Myproduct
          productName="Sweet shirt"
          priceTag={22}
          className="myproduct"
        />
        <Myproduct productName="T-Shirt" priceTag="$11" className="myproduct" />
      </div>
    </>
  );
}
export default ProductsWindow;
