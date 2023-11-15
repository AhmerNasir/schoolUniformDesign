import React, { useState } from "react";
import BaseLayout from "../BaseLayout";
import { BiSearchAlt2 } from "react-icons/bi";
import Products from "../Products";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import styles from "./styles";
import MultiRangeSlider from "../PriceRangeSlider";
import SizeOptions from "../Sizes";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import { GiHamburgerMenu } from "react-icons/gi";
import ShopOptions from "../ShopOptions";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../Navbar";

const CATEGORIES = [
  {
    name: "All products (80)",
  },
  {
    name: "Tops (80)",
  },
  {
    name: "Bottoms (80)",
  },
  {
    name: "Sweaters (80)",
  },
  {
    name: "Accessories (80)",
  },
];

function Shop() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const isMobile = useResponsiveWindow();

  return (
    <BaseLayout>
          <section className="hero-image">
          <Navbar />
          <div className="wrapper">
            <div className="main-title">School Uniforms</div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <div className="add-to-bag">
              <div>Shop Now</div>
              <IoIosArrowForward />
            </div>
            </div>
      </section>
      <div className="shop-main-container">
        {!isMobile && (
          <div className="shop-wrapper">
            <h3>{`Men's Uniform`}</h3>
            <div className="options-container">
              <p>Newest</p>
              <p>Mandatory</p>
              <p>Low Price to High</p>
              <p>High Price to Low</p>
            </div>
            <div className="search-container">
              <input type="search" placeholder="search here ...." />
              <BiSearchAlt2 />
            </div>
          </div>
        )}
        {isMobile && (
          <div style={{ position: "relative" }}>
            <h1>{`Men's Uniform`}</h1>
            <div className="menu-container">
              <div className="search-container">
                <input type="search" placeholder="search here ...." />
                <BiSearchAlt2 />
              </div>
              <div className="product-menu" onClick={() => handleShowNavbar()}>
                <GiHamburgerMenu />
                <div className="sort-text">Sort & Filters</div>
              </div>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <div style={{padding: 20}}>
              <div className="slide-dropdown">
                <div className="heading">Filters</div>
                <AiOutlineClose onClick={()=>setShowNavbar(false)}/>
              </div>
              <div className="hr-line" />
              <ShopOptions
                title="Sort By"
                list1="Newest"
                list2="Mandatory"
                list3="Low Price to High"
                list4="High Price to Low"
              />
              <ShopOptions title="Categories" categories={CATEGORIES} />
              <ShopOptions title="Price" />
              <ShopOptions title="Sizes" />
              <ShopOptions title="Seasons" />
              </div>
            </div>
          </div>
        )}
        <div className="shop-divider" />
        <div className="inner-section">
          <div className="product-left-side">
            <Products cardWidth />
          </div>
          {!isMobile && (
            <div className="product-right-side">
              <div className="right-box">
                <div className="title">Categories</div>
                {CATEGORIES.map((item, index) => (
                  <div className="product-option" key={index}>
                    <p>{item.name}</p>
                    <AiOutlineRight />
                  </div>
                ))}
              </div>
              <div className="right-box">
                <div className="title">Price</div>
                <MultiRangeSlider />
              </div>
              <div className="right-box">
                <div className="title">Sizes</div>
                <SizeOptions />
              </div>
              <div className="right-box">
                <div className="title">Seasons</div>
                <SizeOptions seasons />
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default Shop;
