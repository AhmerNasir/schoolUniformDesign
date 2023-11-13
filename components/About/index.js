import React from "react";
import BaseLayout from "../BaseLayout";
import styles from "./styles";
import Testimonials from "../Testimonials";
import ContactUs from "../ContactUs";
import Navbar from "../Navbar";
import { IoIosArrowForward } from "react-icons/io";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import Image from "next/image";

const CARD_ITEMS = [
  {
    image: "/static/images/product.png",
    title: "Short steve t-shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: "/static/images/product.png",
    title: "Short steve t-shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: "/static/images/product.png",
    title: "Short steve t-shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const COMAPANY_VALUES = [
  {
    image: "/static/images/profile-pic.png",
    title: "Great Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: "/static/images/profile-pic.png",
    title: "Great Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    image: "/static/images/profile-pic.png",
    title: "Great Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

function About() {
  const isMobile = useResponsiveWindow();
  return (
    <BaseLayout>
    <section className="hero">
        <div className="header-image">
          <Navbar />
          <div className="nav-wrapper">
            <div className="right-side">
              {!isMobile && (
                <>
              <div className="header-title">About</div>
              <div className="header-container">
              <div className="header-title"> Comapny</div>
              <div className="header-divider"/>
              </div>
              <p className="header-sub-title">
                Free shipping on all orders over $100.Free shipping on all
                orders over $100.Free shipping on all orders over $100
              </p>
              </>
              )}
              {isMobile && (
                <>
              <div className="header-title">About Comapny</div>
              <p className="header-sub-title">
              Free shipping on all orders over $100.Free shipping on all
              orders over $100.Free shipping on all orders over $100
            </p>
            </>
              )}
             
              <div className="add-to-bag">
                <div>Read More</div>
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
      <div className="main-container">
        <div className="main-wrapper">
          <div className="title">Our Services</div>
          <div className="sub-title">
            Some of our services include service 1,service 2,service 3
          </div>
          <div className="card-container">
            {CARD_ITEMS?.map((item, index) => (
              <div key={index} className="card-wrapper">
                <img
                  src={item.image}
                  alt="Avatar"
                  className="about-card-image"
                />
                <div class="card-title">
                  <h4>
                    <b>{item.title}</b>
                  </h4>
                  <div className="card-text">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="our-company-container">
          <div className="our-product-wrapper">
            <div className="hr-line" />
            {isMobile ? <h3>Company Values</h3> :<h1>Company Values</h1>}
            <div className="hr-line" />
          </div>
        </div>
        <div className="company-values-container">
          <div className="company-values-wrapper">
          {COMAPANY_VALUES?.map((item, index) => (
            <div className="company-right-box" key={index}>
              <div className="logo-block">
                <img
                  src={item.image}
                  alt="profie-logo"
                  className="profle-image"
                />
                <div className="text-container">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="company-left-box">
          <img
                  src="/static/images/school-child.png"
                  alt="profie-logo"
                />
          </div>
        </div>
      </div>
      <div className="bottom-section">
          <Testimonials />
        </div>
<section className="contact-form">
        <div className="our-company-container">
          <div className="our-product-wrapper">
            <div className="hr-line" />
            <h1>Contact Us</h1>
            <div className="hr-line" />
          </div>
        </div>
        <ContactUs />
        </section>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default About;