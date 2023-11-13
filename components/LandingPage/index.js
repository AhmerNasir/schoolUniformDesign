import React from "react";
import ProductSlider from "../ProductSlider";
import ProductOptions from "../ProductOptions";
import OurProducts from "../OurProducts";
import Testimonials from "../Testimonials";
import OurInstagram from "../OurInstagram";
import BaseLayout from "../BaseLayout";
import styles from "./styles";
import Navbar from "../Navbar";
import { IoIosArrowForward } from "react-icons/io";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import Image from "next/image";

function LandingPage() {
  const isMobile = useResponsiveWindow();
  return (
    <BaseLayout>
      <section className="hero">
        <div className="header-image">
          <Navbar />
          <div className="nav-wrapper">
            <div className="hr">
              <div className="line"/>
            </div>
            <div className="right-side">
              <div className="title">Our Favouite <span style={{color: '#000'}}>Hoddie</span></div>
              <p className="sub-title">
                Free shipping on all orders over $100.Free shipping on all
                orders over $100.Free shipping on all orders over $100
              </p>
              <p style={{fontSize: '20px'}}><strong>$100.00</strong></p>
              <div className="add-to-bag">
                <div>Add to Bag</div>
                <IoIosArrowForward />
              </div>
            </div>
            <div className="left-side">
              <Image
                src="/static/images/hoddie.jpg"
                alt="hoddie-image"
                width={isMobile ? 200 : 300}
                height={isMobile ? 200 : 300}
                style={{ mixBlendMode: "darken" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section">
        <h1>Best Seller</h1>
        <p>Some of our best and most frquently bought products</p>

        <ul className="weather-options">
          <li>Summer</li>
          <li>Winter</li>
          <li>Fall</li>
          <li>Spring</li>
        </ul>
        <ProductSlider />
      </section>
      <section className="middle-section">
        <div className="product-container">
          <div className="product-card">
            <div className="text-block">
              <h3>Back to school sale</h3>
              <p>71 items</p>
              <p>shop Now</p>
            </div>
          </div>
          <ProductOptions />
          <OurProducts />
        </div>
      </section>
      <section>
        <div className="bottom-section">
          <Testimonials />
        </div>
        <div className="button-container">
          <button>Write a Quote</button>
        </div>
      </section>

      <section>
        <OurInstagram />
      </section>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default LandingPage;
