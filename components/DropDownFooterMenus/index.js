import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./styles";
import Link from "next/link";

const FooterDropdownMenu = ({ title, list1, list2, list3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="footer-divider" />
      <div className="dropdown-container">
        <div className="slide-dropdown" onClick={toggleDropdown}>
          <div />
          <div className="heading">{title}</div>
          {isOpen ? (
            <IoIosArrowUp
              color="#fff"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <IoIosArrowDown
              color="#fff"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <ul>
              <li><Link href="#">{list1}</Link></li>
              <li><Link href="#">{list2}</Link></li>
              <li><Link href="#">{list3}</Link></li>
            </ul>
          </div>
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default FooterDropdownMenu;
