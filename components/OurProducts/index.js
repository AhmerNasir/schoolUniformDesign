import React from "react";
import Products from "../Products";

function OurProducts() {
  return (
    <>
      <div className="our-product-container">
        <div className="our-product-wrapper">
          <div className="divider" />
          <div className="our-product-header">
            <h1>Our Products</h1>
            <p>Browse around, see what you like</p>
            <table>
              <tbody>
                <tr>
                  <td>New Arrivals</td>
                  <td>Featured</td>
                  <td>Popular</td>
                  <td>On Sale</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider" />
        </div>
      </div>
      <Products />
    </>
  );
}

export default OurProducts;
