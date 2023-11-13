import React from "react";
import Footer from "../Footer";
import styles from "./styles";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import MobileFooter from "../MobileFooter";

function BaseLayout({ children }) {
  const isMobile = useResponsiveWindow();

  return (
    <div className="layout">
      <div className="top-header">Free shipping on all orders over $100</div>
      <main>{children}</main>
      {isMobile ? <MobileFooter /> : <Footer />}

      <style jsx>{styles}</style>
    </div>
  );
}

export default BaseLayout;
